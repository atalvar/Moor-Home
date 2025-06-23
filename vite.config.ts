import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Moor-Home/',  // IMPORTANT: your repo name with leading and trailing slash
  plugins: [react()],
})