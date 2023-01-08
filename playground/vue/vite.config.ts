import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { inject, minify } from 'vite-plugin-parse-html'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      data: {
        title: 'test project',
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
    }),
    minify({
      isMinify: true,
    }),
    react() as PluginOption | PluginOption[],
  ],
})
