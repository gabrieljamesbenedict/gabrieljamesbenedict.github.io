import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Note to self: User pages in GitHub don't need anything else except this /
  plugins: [react()],
  // Keep modern CSS (e.g. unprefixed backdrop-filter) intact in the build output
  build: {
    cssTarget: 'chrome111'
  },
  server: {
    port: 3000
  }
})
