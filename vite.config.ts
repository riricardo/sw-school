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
      globPatterns: ['**/*.{js,css,html,svg,webmanifest,json,woff2}'],
      navigateFallback: 'index.html',
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      cleanupOutdatedCaches: true,
      skipWaiting: false,
      clientsClaim: true
    }
  })]
}));
