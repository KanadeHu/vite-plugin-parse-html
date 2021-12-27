import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
// import Inspect from 'vite-plugin-inspect'
import html from '../core/dist/index'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    html({
      inject: {
        data: {
          title: '测试demo',
        },
      },
    }),
    react(),
  ],
})
