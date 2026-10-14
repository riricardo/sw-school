/** Optional local inference. Never imported by the main learning application. */
import { env, pipeline } from '@huggingface/transformers';

const MODEL = 'onnx-community/SmolLM2-135M-Instruct-ONNX';
env.allowRemoteModels = true;
env.useBrowserCache = true;
let generator: any = null;
const send = (type: string, message?: string) => self.postMessage({type, message});

self.onmessage = async (event: MessageEvent<{type:string; question?:string; history?:Array<{role:string;content:string}>}>) => {
  try {
    if (event.data.type === 'load') {
      send('status','Loading model. This may take a while on the first launch…');
      generator ??= await pipeline('text-generation', MODEL, {
        device: 'wasm', dtype: 'q4',
        progress_callback: (p: any) => {
          if (p.status === 'progress') send('progress', `${p.file ?? 'Model'}: ${Math.round(p.progress ?? 0)}%`);
          else if (p.status === 'initiate' || p.status === 'download') send('progress', `Preparing ${p.file ?? 'model'}…`);
        }
      });
      send('ready');
    } else if (event.data.type === 'ask') {
      if (!generator) throw new Error('Load the model before asking a question.');
      send('status','Generating response locally…');
      const question = (event.data.question ?? '').trim().slice(0,900);
      if (!question) throw new Error('Please enter a question.');
      // Use a plain instruction prompt for predictable output parsing across runtimes.
      const prompt = `You are a software engineering tutor. Answer accurately in simple English. Give a short example if useful. If unsure, say so.\n\nQuestion: ${question}\nAnswer:`;
      const result = await generator(prompt, {max_new_tokens:192, do_sample:false, return_full_text:false});
      const value = result?.[0]?.generated_text;
      const reply = typeof value === 'string' ? value : Array.isArray(value) ? value.map((v:any)=>v.content ?? '').join(' ') : '';
      send('answer', reply.trim() || 'The model returned no text. Try a shorter question.');
    }
  } catch (error) {
    send('error', error instanceof Error ? error.message : String(error));
  }
};
