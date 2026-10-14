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
      name: 'DevPrep — ITDS Interview', short_name: 'DevPrep', description: 'Offline-first .NET interview study companion',
      theme_color: '#101429', background_color: '#101429', display: 'standalone',
      icons: [{ src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,webmanifest,json,woff2}'],
      navigateFallback: 'index.html',
      cleanupOutdatedCaches: true,
      skipWaiting: false,
      clientsClaim: true
    }
  })]
}));
