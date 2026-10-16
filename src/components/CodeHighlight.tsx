import React from 'react';
// Small offline tokenizer for the C#, SQL, shell and YAML examples.
const TOKEN=/\/\/[^\n]*|\/\*[\s\S]*?\*\/|@?"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:public|private|protected|internal|class|interface|abstract|sealed|override|virtual|async|await|return|new|void|int|string|bool|decimal|double|float|var|if|else|for|foreach|while|using|namespace|static|readonly|record|null|true|false|throw|try|catch|Task|List|IEnumerable|Console|SELECT|FROM|WHERE|ORDER|BY|LEFT|INNER|JOIN|ON|CREATE|INDEX|BEGIN|TRANSACTION|UPDATE|SET|COMMIT|ROLLBACK|AND|AS|git|checkout|add|commit|push|steps|script|dotnet|restore|build|test)\b|\b\d+(?:\.\d+)?\b/g;
export function highlightCode(source:string):React.ReactNode[] {
 const output:React.ReactNode[]=[];let last=0;let i=0;
 for(const match of source.matchAll(TOKEN)){
  const start=match.index ?? 0;if(start>last)output.push(source.slice(last,start));
  const t=match[0];const cls=t.startsWith('//')||t.startsWith('/*')?'comment':t.startsWith('"')||t.startsWith('@"')||t.startsWith("'")?'string':/^\d/.test(t)?'number':'keyword';
  output.push(<span key={i++} className={'syntax-'+cls}>{t}</span>);last=start+t.length;
 }
 if(last<source.length)output.push(source.slice(last));return output;
}

export function CodeBlock({source}: {source: string}) {
 return <pre className="code-example" tabIndex={0} aria-label="Code example"><code>{highlightCode(source)}</code></pre>;
}

export function InlineCode({text}: {text: string}) {
 return <>{text.split(/(`[^`]+`)/g).map((part, index) => part.startsWith('`') && part.endsWith('`')
  ? <code className="inline-code" key={index}>{highlightCode(part.slice(1, -1))}</code>
  : part)}</>;
}
