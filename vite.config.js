import { defineConfig } from 'vite'
// 修改这一行，把 @vue 改成 @vitejs
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    open: true,
  },
})