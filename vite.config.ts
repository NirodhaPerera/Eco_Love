import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Put Lottie in its own file
          if (id.includes('lottie-web')) {
            return 'lottie-player';
          }
          // Put UI icons in their own file
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          // Put core React and Router in a 'vendor' file
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
