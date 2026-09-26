import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/gabrieljamesbenedict/gabrieljamesbenedict.github.io',
  plugins: [react()],
  server: {
    port: 3000
  }
})
