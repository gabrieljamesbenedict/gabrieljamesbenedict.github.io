import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Note to self: User pages in GitHub don't need anything else except this /
  plugins: [react()],
  server: {
    port: 3000
  }
})
