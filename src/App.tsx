import AITutor from './components/AITutor';
import {CodeBlock,InlineCode} from './components/CodeHighlight';
import {prepareQuiz,reviewPools,shuffled as random} from './services/practice';
import {useEffect,useLayoutEffect,useRef,useState} from 'react';
import {useRegisterSW} from 'virtual:pwa-register/react';
import {lessons} from './data/lessons';
import {db,saveAnswer,resetProgress} from './services/database';
import type {Lesson,Question,AnswerRecord,ReviewRecord} from './types';
type Q=Question&{lessonId:string};
const questions:Q[]=lessons.flatMap(l=>l.questions.map(q=>({...q,lessonId:l.id})));
const questionIds=new Set(questions.map(q=>q.id));
const modules=[...new Set(lessons.map(l=>l.module))];
export default function App(){
 const [aiOpen,setAiOpen]=useState(false);
 useEffect(()=>{
  if(!aiOpen)return;
  const previous=document.activeElement as HTMLElement|null;
  const dialog=document.querySelector<HTMLElement>('[role="dialog"]');
  const previousOverflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  const controls=()=>Array.from(dialog?.querySelectorAll<HTMLElement>('button:not(:disabled),input,textarea,[tabindex="0"]')||[]);
  controls()[0]?.focus();
  const onKey=(event:KeyboardEvent)=>{
   if(event.key==='Escape'){setAiOpen(false);return;}
   if(event.key!=='Tab')return;
   const items=controls(),first=items[0],last=items[items.length-1];
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
  };
  document.addEventListener('keydown',onKey);
  return()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=previousOverflow;previous?.focus();};
 },[aiOpen]);
 const [quizLessonId,setQuizLessonId]=useState<string|null>(null);
 const [saving,setSaving]=useState(false);
 const [tab,setTab]=useState('Home'),[lesson,setLesson]=useState<Lesson|null>(null),[quiz,setQuiz]=useState<Q[]>([]),[index,setIndex]=useState(0),[choice,setChoice]=useState<number|null>(null),[score,setScore]=useState(0),[finished,setFinished]=useState(false),[answers,setAnswers]=useState<AnswerRecord[]>([]),[reviews,setReviews]=useState<ReviewRecord[]>([]),[completed,setCompleted]=useState<string[]>([]),[filter,setFilter]=useState('All'),[online,setOnline]=useState(navigator.onLine),[message,setMessage]=useState(''),[dark,setDark]=useState(localStorage.getItem('devprep-theme')!=='light');
 const continueButton=useRef<HTMLButtonElement>(null);
 useLayoutEffect(()=>{
  window.scrollTo({top:0,left:0,behavior:'instant'});
 },[tab,lesson,quiz,index,finished]);
 useEffect(()=>{
  if(choice===null)return;
  const frame=requestAnimationFrame(()=>{
   continueButton.current?.scrollIntoView({
    behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',
    block:'end'
   });
  });
  return()=>cancelAnimationFrame(frame);
 },[choice]);
 const {needRefresh:[needRefresh],updateServiceWorker}=useRegisterSW({onRegisteredSW(_u,r){if(r)setInterval(()=>{if(navigator.onLine && document.visibilityState==='visible')void r.update().catch(()=>{});},3600000);}});
 const refresh=async()=>{const [a,r,c]=await Promise.all([db.answers.toArray(),db.reviews.toArray(),db.completed.toArray()]);setAnswers(a);setReviews(r.filter(review=>questionIds.has(review.id)));setCompleted(c.map(x=>x.id));};
 useEffect(()=>{void refresh();const on=()=>setOnline(true),off=()=>setOnline(false);window.addEventListener('online',on);window.addEventListener('offline',off);return()=>{window.removeEventListener('online',on);window.removeEventListener('offline',off);};},[]);
 useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('devprep-theme',dark?'dark':'light');},[dark]);
 const start=(qs:Q[],lessonId:string|null=null,emptyMessage='No questions available. Try Quick 10 instead.')=>{
  if(!qs.length){setMessage(emptyMessage);return;}
  setMessage('');setQuizLessonId(lessonId);setQuiz(prepareQuiz(qs));setLesson(null);setIndex(0);setChoice(null);setScore(0);setFinished(false);
 };
 const closeQuiz=()=>{setQuiz([]);setLesson(quizLessonId?lessons.find(item=>item.id===quizLessonId)??null:null);};
 const answer=async(i:number)=>{
  if(choice!==null||saving)return;
  setSaving(true);setChoice(i);
  const ok=i===quiz[index].correct;
  if(ok)setScore(n=>n+1);
  try{await saveAnswer(quiz[index].id,quiz[index].lessonId,ok);await refresh();}
  catch{setMessage('Your answer could not be saved. Check available browser storage.');}
  finally{setSaving(false);}
 };
 const next=async()=>{
  if(saving||choice===null)return;
  if(index===quiz.length-1){
   setSaving(true);
   try{
    if(quizLessonId && score/quiz.length>=0.8){await db.completed.put({id:quizLessonId,at:Date.now()});await refresh();}
    setFinished(true);
   }catch{setMessage('Lesson completion could not be saved. Please try again.');}
   finally{setSaving(false);}
  }else{setIndex(n=>n+1);setChoice(null);}
 };
 const mark=async()=>{if(!lesson)return;await db.completed.put({id:lesson.id,at:Date.now()});await refresh();};
 const update=async()=>{if(!online){setMessage('You are offline. Try again when connected.');return;}setMessage('Checking for updates…');try{const r=await navigator.serviceWorker?.getRegistration();if(r){await r.update();setMessage('Check complete. If a new version is ready, tap Update now.');}else setMessage('Service worker not installed yet. Reload once online, then check again.');}catch{setMessage('Update check failed. Try again later.');}};
 const pools=reviewPools(questions,reviews,Date.now());
 const xp=answers.filter(a=>a.correct).length*10+completed.length*20;
 const accuracy=answers.length?Math.round(answers.filter(a=>a.correct).length/answers.length*100):0;
 const nextLesson=lessons.find(l=>!completed.includes(l.id))||lessons[0];
 return <div className="shell"><header className="top"><div className="logo"><span className="logo-icon">⌘</span><div>devprep<span className="accent">.</span><small>SOFTWARE LEARNING</small></div></div><div className="top-right"><button className="ai-trigger" aria-label="Open AI tutor" onClick={()=>setAiOpen(true)}>✦ <span>AI</span></button><span className={online?'online':'offline'}>● {online?'Online':'Offline'}</span><button className="icon" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>{dark?'☀️':'🌙'}</button></div></header><main>
 {message&&<p role="status" className="banner">{message}</p>}
 {!online&&<div className="banner">📴 Offline mode: lessons and quizzes are available.</div>}
 {needRefresh&&<div className="banner green">✨ New version ready! <button onClick={()=>void updateServiceWorker(true)}>Update now</button></div>}
 {quiz.length>0?finished?<div className="card result"><div className="giant">🏆</div><h1>Session complete!</h1><div className="big">{score}/{quiz.length}</div><p>{quizLessonId ? (score/quiz.length>=0.8?'✓ Lesson completed (80%+).':'Score at least 80% to complete this lesson.') : 'Mixed practice: results do not automatically complete lessons.'}</p><button className="primary" onClick={closeQuiz}>{quizLessonId?'Back to lesson':`Back to ${tab.toLowerCase()}`} →</button></div>:<div className="card"><div className="split"><span className="eyebrow">QUESTION {index+1} / {quiz.length}</span><button className="link" onClick={closeQuiz}>Exit</button></div><div className="bar"><span style={{width:`${(index+1)/quiz.length*100}%`}}/></div><h2><InlineCode text={quiz[index].prompt}/></h2>{quiz[index].code&&<CodeBlock source={quiz[index].code!}/>}<div className="choices">{quiz[index].options.map((option,i)=><button key={i} disabled={choice!==null} className={`choice ${choice!==null&&i===quiz[index].correct?'correct':''} ${choice===i&&i!==quiz[index].correct?'wrong':''}`} onClick={()=>void answer(i)}><b>{'ABCD'[i]}</b><span><InlineCode text={option}/></span></button>)}</div>{choice!==null&&<div className="feedback"><strong>{choice===quiz[index].correct?'✨ Correct!':'📚 Keep learning!'}</strong><p><InlineCode text={quiz[index].explanation}/></p><button ref={continueButton} className="primary quiz-continue" disabled={saving} onClick={()=>void next()}>{index===quiz.length-1?'See results':'Next question →'}</button></div>}</div>:
 lesson?<div className="lesson"><button className="link" onClick={()=>setLesson(null)}>← Back to lessons</button><div className="tag">{lesson.module} · {lesson.minutes} min</div><h1>{lesson.title}</h1>{[['01 / THE IDEA','In simple words',lesson.simple],['02 / GO DEEPER','How it works',lesson.details],['03 / REMEMBER IT','💡 Think of it like this',lesson.analogy],['04 / REAL CODE','Code example',lesson.code],['05 / SAY IT IN ENGLISH','Interview-ready answer',lesson.interview],['06 / COMMON MISTAKE','⚠️ Watch out',lesson.pitfall],['07 / IN PRACTICE','Where you use it',lesson.useCase || 'Apply this concept when its benefits fit the requirements of your project.'],['08 / TRADE-OFFS','When to avoid it',lesson.avoid || 'Avoid adding complexity when a simpler solution is sufficient.']].map(([label,title,body],i)=><section className="lesson-block" key={label}><span className="eyebrow">{label}</span><h3>{title}</h3>{i===3?<CodeBlock source={body}/>:i===4?<blockquote>“{body}”</blockquote>:<p>{body}</p>}</section>)}<button className="primary" onClick={()=>start(lesson.questions.map(q=>({...q,lessonId:lesson.id})),lesson.id)}>Test your knowledge →</button><button className="secondary" onClick={()=>void mark()}>{completed.includes(lesson.id)?'✓ Studied':'Mark as studied'}</button></div>:
 <>{tab==='Home'&&<><section className="hero"><span className="eyebrow">YOUR SOFTWARE ENGINEERING LEARNING SPACE</span><h1>Small lessons.<br/><em>Big progress.</em> ✨</h1><p>Build software engineering skills with bite-sized lessons, coding examples, and practice. Fully offline after installation.</p><div className="hero-badges"><span>⚡ {xp} XP</span><span>📚 {completed.length}/{lessons.length} lessons</span></div><button className="primary" onClick={()=>{setTab('Learn');setLesson(nextLesson);}}>Continue learning →</button></section><div className="section-title"><h2>Your focus today</h2><span>Start here</span></div><div className="grid2"><button className="action" onClick={()=>{setTab('Learn');setLesson(nextLesson);}}><span>📖</span><b>Next lesson</b><small>{nextLesson.title}</small><strong>→</strong></button><button className="action" onClick={()=>start(random(questions).slice(0,10))}><span>🎯</span><b>Quick challenge</b><small>10 mixed questions</small><strong>→</strong></button></div><div className="section-title"><h2>Study sprint</h2><span>Learn at your pace</span></div><div className="sprint"><div><span>FOUNDATIONS</span><b>Core Backend</b><small>C#, SOLID, ASP.NET Core, SQL</small></div><div><span>ADVANCED</span><b>Backend & Engineering</b><small>Dapper, NUnit, Selenium, CI/CD, risk</small></div></div></>}
 {tab==='Learn'&&<><div className="intro"><span className="eyebrow">YOUR LEARNING PATH</span><h1>Explore lessons 📚</h1><p>Short explanations, real code, and interview-ready answers.</p></div><div className="filters"><button className={filter==='All'?'active':''} onClick={()=>setFilter('All')}>All</button>{modules.map(m=><button key={m} className={filter===m?'active':''} onClick={()=>setFilter(m)}>{m}</button>)}</div><div className="list">{lessons.filter(l=>filter==='All'||l.module===filter).map(l=><button className="lesson-item" key={l.id} onClick={()=>setLesson(l)}><span className="number">{String(lessons.indexOf(l)+1).padStart(2,'0')}</span><span><b>{l.title}</b><small>{l.module} · {l.minutes} min</small></span><strong>{completed.includes(l.id)?'✓':'→'}</strong></button>)}</div></>}
 {tab==='Practice'&&<><div className="intro"><span className="eyebrow">TRAIN YOUR MEMORY</span><h1>Practice arena 🧠</h1><p>Make mistakes here, then understand why.</p></div><div className="grid2 practice">{[['⚡','Quick 10','10 random questions'],['🏆','Mock assessment','25 mixed questions'],['🔁','Scheduled review',`${pools.due.length} due · spaced repetition`],['🎯','Retry mistakes',`${pools.mistakes.length} unresolved · retry now`]].map(([emoji,title,desc],i)=><button className="action" key={title} onClick={()=>{const pool=i===2?pools.due:i===3?pools.mistakes:questions;start(random(pool).slice(0,i===1?25:i===0?10:15),null,i===2?'No scheduled reviews due yet. Correct answers return later; mistakes return after 10 minutes. You can retry mistakes now.':'No unresolved mistakes. Try Quick 10 for a new challenge.');}}><span>{emoji}</span><b>{title}</b><small>{desc}</small><strong>→</strong></button>)}</div><div className="card"><h3>How review works</h3><p><b>Scheduled review</b> brings questions back when they are due: mistakes after 10 minutes, correct answers after at least a day.</p><p><b>Retry mistakes</b> lets you immediately retry questions whose latest answer was wrong. A correct retry removes them from this list.</p><h3>🎤 Explain it out loud</h3><p>Open any lesson and explain the topic using <b>definition → benefit → example</b>. Compare your answer with the model.</p></div></>}
 {tab==='Progress'&&<><div className="intro"><span className="eyebrow">YOUR LEARNING JOURNEY</span><h1>Keep growing 📈</h1><p>Consistency beats cramming.</p></div><div className="grid2 stats">{[['⚡ XP',xp],['🎯 Accuracy',`${accuracy}%`],['📖 Lessons',`${completed.length}/${lessons.length}`],['🧠 Answers',answers.length]].map(([label,value])=><div className="stat" key={label}><small>{label}</small><strong>{value}</strong></div>)}</div><div className="card"><h3>Module progress</h3>{modules.map(m=>{const ls=lessons.filter(l=>l.module===m),done=ls.filter(l=>completed.includes(l.id)).length;return <div className="module" key={m}><div className="split"><span>{m}</span><small>{done}/{ls.length}</small></div><div className="bar"><span style={{width:`${done/ls.length*100}%`}}/></div></div>;})}</div><div className="card"><h3>Offline & updates</h3><p>Progress stays on this device in IndexedDB. Updating the app will not reset it.</p><button className="secondary" onClick={()=>void update()}>🔄 Check for updates</button><button className="danger" onClick={()=>{if(confirm('Delete all learning progress? This cannot be undone.'))void resetProgress().then(refresh);}}>Reset learning progress</button><p className="hint">Open once online, then install or revisit to study offline.</p></div></>}
 </>}
 </main>{aiOpen&&<div className="ai-overlay" role="dialog" aria-modal="true" aria-label="AI tutor"><div className="ai-drawer"><div className="ai-drawer-top"><strong>✦ AI Tutor</strong><button className="icon" aria-label="Close AI tutor" onClick={()=>setAiOpen(false)}>✕</button></div><AITutor/></div></div>}<nav className="nav">{[['🏠','Home'],['📚','Learn'],['🧠','Practice'],['📈','Progress']].map(([icon,name])=><button key={name} className={tab===name?'active':''} onClick={()=>{setTab(name);setLesson(null);setQuiz([]);setMessage('');}}><span>{icon}</span><small>{name}</small></button>)}</nav></div>;
}
