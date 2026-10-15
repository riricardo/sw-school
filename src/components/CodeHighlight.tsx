import React from 'react';
// Lightweight C# tokenizer; no external CSS/JS/CDN required, works offline.
const TOKEN=/\/\/[^\n]*|\/\*[\s\S]*?\*\/|@?"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])'|\b(?:public|private|protected|internal|class|interface|abstract|sealed|override|virtual|async|await|return|new|void|int|string|bool|decimal|double|float|var|if|else|for|foreach|while|using|namespace|static|readonly|null|true|false|throw|try|catch|Task|List|IEnumerable|Console)\b|\b\d+(?:\.\d+)?\b/g;
export function highlightCode(source:string):React.ReactNode[] {
 const output:React.ReactNode[]=[];let last=0;let i=0;
 for(const match of source.matchAll(TOKEN)){
  const start=match.index ?? 0;if(start>last)output.push(source.slice(last,start));
  const t=match[0];const cls=t.startsWith('//')||t.startsWith('/*')?'comment':t.startsWith('"')||t.startsWith('@"')||t.startsWith("'")?'string':/^\d/.test(t)?'number':'keyword';
  output.push(<span key={i++} className={'syntax-'+cls}>{t}</span>);last=start+t.length;
 }
 if(last<source.length)output.push(source.slice(last));return output;
}
