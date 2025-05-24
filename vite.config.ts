import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/homeflow-nexus-platform/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
      // Remove any duplicate '@' aliases
    }
  }
})