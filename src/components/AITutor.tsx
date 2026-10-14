import {useEffect,useRef,useState} from 'react';

type Message = {role:'user'|'assistant';content:string};
type Conversation = {id:string;title:string;messages:Message[]};
const KEY = 'devprep-ai-conversations-v3';
function restore():Conversation[]{try {return JSON.parse(localStorage.getItem(KEY) || '[]') as Conversation[];}catch{return [];}}
export default function AITutor(){
 const worker=useRef<Worker|null>(null);
 const [conversations,setConversations]=useState<Conversation[]>(restore);
 const [active,setActive]=useState<string|null>(null);
 const [question,setQuestion]=useState('');
 const [status,setStatus]=useState('Model not loaded in this session');
 const [ready,setReady]=useState(false);
 const [busy,setBusy]=useState(false);
 const [thinking,setThinking]=useState(false);
 const current=conversations.find(c=>c.id===active);
 useEffect(()=>{localStorage.setItem(KEY,JSON.stringify(conversations));},[conversations]);
 useEffect(()=>()=>worker.current?.terminate(),[]);
 const ensureWorker=()=>{
  if(!worker.current){
   const w=new Worker(new URL('../ai.worker.ts',import.meta.url),{type:'module'});
   w.onmessage=(e:MessageEvent<{type:string;message?:string}>)=>{
    const {type,message}=e.data;
    if(type==='status'||type==='progress')setStatus(message||'Working…');
    if(type==='ready'){setReady(true);setBusy(false);setStatus('Model ready · Local inference enabled');}
    if(type==='answer'){
      setConversations(old=>old.map(c=>c.id===activeId.current?{...c,messages:[...c.messages,{role:'assistant',content:message||'No response generated.'}]}:c));
      setThinking(false);setBusy(false);setStatus('Model ready · Local inference enabled');
    }
    if(type==='error'){setStatus(`AI error: ${message||'Unknown error'}`);setThinking(false);setBusy(false);}
   };
   w.onerror=e=>{setStatus(`Worker error: ${e.message||'Could not start AI'}`);setThinking(false);setBusy(false);};
   worker.current=w;
  }
  return worker.current;
 };
 const activeId=useRef<string|null>(null);
 const load=()=>{setBusy(true);setStatus('Starting model…');ensureWorker().postMessage({type:'load'});};
 const newChat=()=>{const id=String(Date.now());setConversations(old=>[{id,title:'New conversation',messages:[]},...old]);setActive(id);};
 const send=()=>{
  const q=question.trim();if(!q||!ready||busy)return;
  let id=active;
  if(!id){id=String(Date.now());setConversations(old=>[{id:id!,title:q.slice(0,36),messages:[{role:'user',content:q}]},...old]);setActive(id);}
  else setConversations(old=>old.map(c=>c.id===id?{...c,title:c.messages.length?c.title:q.slice(0,36),messages:[...c.messages,{role:'user',content:q}]}:c));
  activeId.current=id;setQuestion('');setBusy(true);setThinking(true);
  ensureWorker().postMessage({type:'ask',question:q});
 };
 return <div className="intro ai-page"><span className="eyebrow">OPTIONAL · PRIVATE · OFFLINE AFTER DOWNLOAD</span><h1>Study Buddy ✦</h1><p>Chat with a small local model. Your lessons and quizzes work even if AI fails.</p>
 <div className="card"><h3>Local model · SmolLM2 135M</h3><p className="hint" role="status">{status}</p><button className="primary" disabled={busy||ready} onClick={load}>{ready?'✓ Model ready':busy?'Preparing…':'⬇ Load / download model'}</button><p className="hint">Requires internet for the initial download. The browser may remove cached model files. This experimental model can be slow or inaccurate, especially for code.</p></div>
 <div className="split"><h3>Conversations</h3><button className="secondary" onClick={newChat}>+ New chat</button></div>
 <div className="ai-history">{conversations.map(c=><button key={c.id} onClick={()=>setActive(c.id)} aria-pressed={active===c.id}>{c.title}</button>)}</div>
 <div className="ai-chat-messages" aria-live="polite">{current?.messages.length?current.messages.map((m,i)=><div key={i} className={`ai-bubble ${m.role}`}>{m.content}</div>):<p className="hint">Ask about C#, APIs, SQL, testing, or software architecture.</p>}{thinking&&<div className="ai-bubble">Thinking locally…</div>}</div>
 <label htmlFor="tutor-question">Your question</label><textarea id="tutor-question" value={question} onChange={e=>setQuestion(e.target.value)} rows={3} maxLength={900} placeholder="Explain dependency injection in C#…"/><button className="primary" disabled={!ready||busy||!question.trim()} onClick={send}>Send →</button>
 <p className="hint">Conversation history is stored on this device. The model currently answers each question independently; previous messages are displayed but not passed into its context.</p>
 </div>;
}
