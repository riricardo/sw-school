# Software Learning — Offline PWA

A mobile-first React + TypeScript learning app with **offline-first lessons and quizzes**. Optional tiny local AI runs separately in a Web Worker and never blocks core learning.

## Deploy to GitHub Pages

1. Create a public repository. Upload **the contents** of this project to the root of the `main` branch.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. Push to `main`. The included workflow installs dependencies, builds, and deploys the site.
4. Visit the deployed site online once and allow it to finish caching; then test airplane mode.

No `gh-pages` branch or manual publish command. Vite computes the GitHub Pages base path from `GITHUB_REPOSITORY` in Actions. Local production builds and `npm run preview` default to `/sw-school/`. Development uses `/`.

## Local development

```bash
npm install
npm run dev
npm run build
```

## Offline guarantees and limits

- Lessons, code examples, quizzes, and saved progress are local after the PWA installs.
- The production Service Worker precaches the full app shell and generated assets, so users do not need to visit every tab before going offline.
- Progress is in IndexedDB and is **not** deleted by normal app updates. Browser data clearing can erase it.
- **Check for updates** checks the existing Service Worker registration. It requires internet; if registration has not finished, reload online and try again.
- The optional AI is **never imported or downloaded** until opening AI Tutor and tapping Download. It runs in its own Worker.
- AI model: `onnx-community/SmolLM2-135M-Instruct-ONNX`, quantized q4 on WASM. The app caches generated WASM assets during PWA install, and Hugging Face model files are cached after the user downloads the model. This may take significant space, may run slowly, may fail on some Android devices, and may be evicted.
- **AI offline availability is best-effort**, dependent on complete model cache and browser behavior; quizzes and lessons remain available regardless.
- The tiny AI is experimental and may hallucinate; use the curated lessons for reliable fundamentals.

## Architecture

- `src/data/lessons.ts`: all learning content, including additional practical interview questions.
- `src/components/AITutor.tsx`: optional AI user interface.
- `src/ai.worker.ts`: local model loading and inference off the main thread.
- `src/services/database.ts`: Dexie progress and spaced review.
- `vite.config.ts`: offline precache and PWA configuration.
- `.github/workflows/deploy.yml`: GitHub Actions deployment.

## Optional online tutor

AI Tutor also offers an online mode for an HTTPS chat completions endpoint you choose. The provider must allow browser requests (CORS). Online mode sends the question and up to eight previous messages to that endpoint. The API key stays in component memory and is cleared when the tutor closes; it is not saved with conversations. Requests time out after 60 seconds and are canceled when the tutor closes. Use a personal, limited credential; do not embed shared secrets in this public static app. No provider or key is configured by the project.
