import {useEffect,useRef,useState} from 'react';

type Message = {role:'user'|'assistant';content:string};
type Conversation = {id:string;title:string;messages:Message[]};
const KEY = 'devprep-ai-conversations-v3';
function restore():Conversation[]{
 try {
  const saved:unknown=JSON.parse(localStorage.getItem(KEY)||'[]');
  if(!Array.isArray(saved))return [];
  return saved.filter((c):c is Conversation=>c!==null&&typeof c==='object'&&typeof c.id==='string'&&typeof c.title==='string'&&Array.isArray(c.messages)&&c.messages.every((m:Message)=>m&&['user','assistant'].includes(m.role)&&typeof m.content==='string'));
 }catch{return [];}
}
export default function AITutor(){
 const worker=useRef<Worker|null>(null);
 const request=useRef<AbortController|null>(null);
 const [conversations,setConversations]=useState<Conversation[]>(restore);
 const [active,setActive]=useState<string|null>(null);
 const [question,setQuestion]=useState('');
 const [status,setStatus]=useState('Model not loaded in this session');
 const [ready,setReady]=useState(false);
 const [mode,setMode]=useState<'local'|'online'>('local');
 const [endpoint,setEndpoint]=useState('');const [modelName,setModelName]=useState('');const [apiKey,setApiKey]=useState('');
 const [busy,setBusy]=useState(false);
 const [thinking,setThinking]=useState(false);
 const current=conversations.find(c=>c.id===active);
 useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(conversations));}catch{setStatus('Conversation history could not be saved. Check browser storage.');}},[conversations]);
 useEffect(()=>()=>{worker.current?.terminate();request.current?.abort();},[]);
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
 const newChat=()=>{const id=crypto.randomUUID();setConversations(old=>[{id,title:'New conversation',messages:[]},...old]);setActive(id);};
 const send=()=>{
  const q=question.trim();if(!q||(mode==='local'&&!ready)||busy)return;
  let id=active;
  if(!id){id=crypto.randomUUID();setConversations(old=>[{id:id!,title:q.slice(0,36),messages:[{role:'user',content:q}]},...old]);setActive(id);}
  else setConversations(old=>old.map(c=>c.id===id?{...c,title:c.messages.length?c.title:q.slice(0,36),messages:[...c.messages,{role:'user',content:q}]}:c));
  activeId.current=id;setQuestion('');setBusy(true);setThinking(true);
  if(mode==='local')ensureWorker().postMessage({type:'ask',question:q});
  else {const target=id;const history=(conversations.find(c=>c.id===target)?.messages||[]).slice(-8);
   const controller=new AbortController();request.current=controller;
   const timeout=window.setTimeout(()=>controller.abort(),60000);
   void (async()=>{try{
    const url=new URL(endpoint);if(url.protocol!=='https:')throw new Error('Online endpoint must use HTTPS.');
    const response=await fetch(url.toString(),{method:'POST',signal:controller.signal,headers:{'Content-Type':'application/json',...(apiKey?{'Authorization':`Bearer ${apiKey}`}:{})},body:JSON.stringify({model:modelName,messages:[{role:'system',content:'You are a concise software engineering tutor.'},...history,{role:'user',content:q}]})});
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    const json=await response.json();const reply=json?.choices?.[0]?.message?.content;
    if(typeof reply!=='string')throw new Error('Provider response format is not compatible.');
    setConversations(old=>old.map(c=>c.id===target?{...c,messages:[...c.messages,{role:'assistant',content:reply}]}:c));setStatus('Online response received');
   }catch(e){setStatus('Online AI error: '+(e instanceof Error?e.message:String(e)));}finally{window.clearTimeout(timeout);request.current=null;setBusy(false);setThinking(false);}})();
  }
 };
 return <div className="intro ai-page"><span className="eyebrow">OPTIONAL · LOCAL MODEL OR ONLINE API</span><h1>Study Buddy ✦</h1><p className="hint" role="status">{status}</p><p>Chat with a small local model. Your lessons and quizzes work even if AI fails.</p>
 <div className="card"><h3>AI mode</h3><button className="secondary" disabled={busy} onClick={()=>setMode('local')} aria-pressed={mode==='local'}>Offline model</button> <button className="secondary" disabled={busy} onClick={()=>setMode('online')} aria-pressed={mode==='online'}>Online API</button>{mode==='online'&&<div><p className="hint">Optional OpenAI-compatible endpoint. Requires your own provider/account. Your questions are sent to that provider; keys are held only in this tab. Never use a public/shared key.</p><label>HTTPS chat completions endpoint<input value={endpoint} onChange={e=>setEndpoint(e.target.value)} placeholder="https://provider.example/v1/chat/completions"/></label><label>Model<input value={modelName} onChange={e=>setModelName(e.target.value)} placeholder="Provider model ID"/></label><label>API key (optional)<input type="password" value={apiKey} onChange={e=>setApiKey(e.target.value)} /></label></div>}</div>
 {mode==='local'&&<div className="card"><h3>Local model · SmolLM2 135M</h3><button className="primary" disabled={busy||ready} onClick={load}>{ready?'✓ Model ready':busy?'Preparing…':'⬇ Load / download model'}</button><p className="hint">Requires internet for the initial download. The browser may remove cached model files. This experimental model can be slow or inaccurate, especially for code.</p></div>}
 <div className="split"><h3>Conversations</h3><button className="secondary" onClick={newChat}>+ New chat</button></div>
 <div className="ai-history">{conversations.map(c=><button key={c.id} onClick={()=>setActive(c.id)} aria-pressed={active===c.id}>{c.title}</button>)}</div>
 <div className="ai-chat-messages" aria-live="polite">{current?.messages.length?current.messages.map((m,i)=><div key={i} className={`ai-bubble ${m.role}`}>{m.content}</div>):<p className="hint">Ask about C#, APIs, SQL, testing, or software architecture.</p>}{thinking&&<div className="ai-bubble">{mode==='local'?'Thinking locally…':'Waiting for online provider…'}</div>}</div>
 <label htmlFor="tutor-question">Your question</label><textarea id="tutor-question" value={question} onChange={e=>setQuestion(e.target.value)} rows={3} maxLength={900} placeholder="Explain dependency injection in C#…"/><button className="primary" disabled={(mode==='local'&&!ready)||(mode==='online'&&(!endpoint||!modelName))||busy||!question.trim()} onClick={send}>Send →</button>
 <p className="hint">Conversation history is stored on this device. The local model answers each question independently. Online mode sends your question and up to eight previous messages to the endpoint you choose.</p>
 </div>;
}
