# DevPrep — ITDS Edition

A mobile-first, English-language, offline-first React + TypeScript PWA for junior .NET backend interviews.

## Included
- 30 micro-lessons across C#, SOLID, ASP.NET Core, SQL, Dapper, EF Core, NUnit, Selenium, Git, Azure DevOps, risk and interview English.
- 150 multiple-choice recall and comprehension prompts (5 per lesson). The question formats repeat intentionally; these are practice prompts, **not** 150 independently researched technical interview questions.
- Interview-ready sample answers, short C# / SQL examples, quizzes, XP, topic progress, due reviews.
- IndexedDB (Dexie) progress storage, offline precaching (vite-plugin-pwa), user-prompted app updates.
- GitHub Actions deploy to GitHub Pages on push to `main`.

## Publish with GitHub Actions
1. Create a **public** GitHub repository, e.g. `devprep`.
2. Upload **the contents of this folder** to the repository root (not the containing folder).
3. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
4. Push to `main`. The workflow installs packages, builds, and publishes `dist` automatically.
5. Visit `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/` online once, wait for the page to finish loading, and add it to your phone's Home Screen.
6. Test offline by turning on airplane mode and reopening the installed app. Browser/device storage policies can remove offline data, so don't treat this as permanent backup.

No `gh-pages` branch, PAT, or manual deploy command is required. The build base path is computed from `GITHUB_REPOSITORY`.

## Development
```bash
npm install
npm run dev
npm run build
```

## Updating
Push a new commit to `main`. When connected, the PWA checks for a new Service Worker. In **Progress → Check for updates**, force a registration check; if an update is found, tap **Update now**. Offline users keep the previous cached build until they reconnect. IndexedDB progress is separate from the app cache.

## Content editing
Edit `src/data/lessons.ts`. Each lesson includes a module, definition, detailed explanation, analogy, code example, interview response, pitfall, and 5 questions. The entire lesson dataset is compiled into the app and precached for offline use.

## Important limitations
- Offline functionality requires HTTPS (GitHub Pages provides it) and an initial successful online visit. It is not guaranteed against user-cleared data, storage eviction, or browser restrictions.
- Progress is local to the current browser/device and is not synced or backed up.
- Text answers and speaking are self-practice only; there is no AI grading.
- The update button checks the service worker; it cannot guarantee an update is already available or override browser caching policies.
- No automated browser/device QA was run in this environment. Validate the GitHub Actions build and offline behavior after publishing.
