import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { inject, minify } from '../core/dist/index'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      data: {
        title: '测试demo',
        isLocal: true,
      },
      sources: [
        {
          type: 'css',
          url: 'http://xxxx',
        },
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
