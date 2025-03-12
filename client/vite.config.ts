import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // Matches API calls starting with /api
        target: 'http://localhost:8080', // Backend URL
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // Ignore HTTPS certificate errors (if any)
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: Remove "/api" prefix before forwarding
      }
    }
  }
})
