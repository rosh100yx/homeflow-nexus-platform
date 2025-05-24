import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/homeflow-nexus-platform/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Add other large dependencies here
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase from default 500kb if needed
  }
})