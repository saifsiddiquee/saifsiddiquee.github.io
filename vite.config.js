import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        quietDeps: true,
        silenceDeprecations: [
          'if-function',
          'import',
          'global-builtin',
          'color-functions',
          'legacy-js-api',
        ],
      },
    },
  },
})
