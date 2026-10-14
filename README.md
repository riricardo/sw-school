# Software Learning — Offline PWA

A mobile-first React + TypeScript learning app with **offline-first lessons and quizzes**. Optional tiny local AI runs separately in a Web Worker and never blocks core learning.

## Deploy to GitHub Pages

1. Create a public repository. Upload **the contents** of this project to the root of the `main` branch.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. Push to `main`. The included workflow installs dependencies, builds, and deploys the site.
4. Visit the deployed site online once and allow it to finish caching; then test airplane mode.

No `gh-pages` branch or manual publish command. Vite computes the GitHub Pages base path from `GITHUB_REPOSITORY` in Actions.

## Local development

```bash
npm install
npm run dev
npm run build
```

## Offline guarantees and limits

- Lessons, code examples, quizzes, and saved progress are local after the PWA installs.
- Progress is in IndexedDB and is **not** deleted by normal app updates. Browser data clearing can erase it.
- **Check for updates** checks/installs the Service Worker registration, including on first use. It requires internet.
- The optional AI is **never imported or downloaded** until opening AI Tutor and tapping Download. It runs in its own Worker.
- AI model: `onnx-community/SmolLM2-135M-Instruct-ONNX`, quantized q4 on WASM. Hugging Face model files are cached by Transformers.js in browser storage when supported. This may take significant space, may run slowly, may fail on some Android devices, and may be evicted.
- **AI offline availability is best-effort**, dependent on complete model cache and browser behavior; quizzes and lessons remain available regardless.
- The tiny AI is experimental and may hallucinate; use the curated lessons for reliable fundamentals.

## Architecture

- `src/data/lessons.ts`: all learning content, including additional practical interview questions.
- `src/components/AITutor.tsx`: optional AI user interface.
- `src/ai.worker.ts`: local model loading and inference off the main thread.
- `src/services/database.ts`: Dexie progress and spaced review.
- `vite.config.ts`: offline precache and PWA configuration.
- `.github/workflows/deploy.yml`: GitHub Actions deployment.
