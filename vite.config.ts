import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/sw-school/' : '/',
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: 'auto',
    includeAssets: ['icons/icon.svg','icons/icon-fullbleed-192.png','icons/icon-fullbleed-512.png','icons/icon-maskable-fullbleed-512.png'],
    manifest: {
      name: 'Software Learning — Offline', short_name: 'DevPrep', description: 'Offline-first software engineering learning and optional local AI',
      theme_color: '#101429', background_color: '#101429', display: 'standalone',
      icons: [{src:'icons/icon-fullbleed-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'icons/icon-fullbleed-512.png',sizes:'512x512',type:'image/png',purpose:'any'},{src:'icons/icon-maskable-fullbleed-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,webmanifest,json,woff2,wasm}'],
      navigateFallback: 'index.html',
      navigateFallbackDenylist: [/^\/[^/]+\/api\//],
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
