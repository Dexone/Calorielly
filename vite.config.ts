import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //импортирует автоматически переиспользуемые стили во все компоненты
        additionalData: `
        @use "@/styles/variables" as *;
        @use "@/styles/transitions" as *;
        `,
      },
    },
  },
})
