import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : './' : '/',
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: 'auto',
    includeAssets: ['icons/icon.svg'],
    manifest: {
      name: 'Software Learning — Offline', short_name: 'DevPrep', description: 'Offline-first software engineering learning and optional local AI',
      theme_color: '#101429', background_color: '#101429', display: 'standalone',
      icons: [{ src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,webmanifest,json,woff2,wasm}'],
      navigateFallback: 'index.html',
      maximumFileSizeToCacheInBytes: 32 * 1024 * 1024,
      cleanupOutdatedCaches: true,
      skipWaiting: false,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: ({url}) => url.origin === 'https://huggingface.co' || url.hostname.endsWith('.huggingface.co') || url.hostname.endsWith('.hf.co'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'devprep-ai-models',
            expiration: {
              maxEntries: 80,
              maxAgeSeconds: 60 * 60 * 24 * 365
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  })]
}));
