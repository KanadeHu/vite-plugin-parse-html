import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import parseHtml, { inject } from '../core/dist/index'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      data: {
        title: '测试demo',
      },
      sources: [
        {
          type: 'css',
          url: 'http://xxxx',
        },
        {
          type: 'javaScript',
          url: 'http://yyyy',
        },
      ],
    }),
    react(),
  ],
})
