import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inject, minify } from 'vite-plugin-parse-html'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject([
      {
        data: {
          title: 'main index project',
          isLocal: true,
        },
        sources: [
          'http://xxxx.css',
          'http://xxxx.js',
          {
            type: 'javascript',
            url: 'http://yyyy',
          },
        ],
      },
      {
        path: '/nested/index.html',
        data: {
          title: 'nest page',
          isLocal: true,
        },
        sources: [
          'http://xxxx.css',
          'http://xxxx.js',
          {
            type: 'javascript',
            url: 'http://yyyy',
          },
        ],
      },
    ]),
    minify({
      isMinify: true,
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nest: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})
