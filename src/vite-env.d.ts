import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Moor-Home/',  // <-- set this to your repo name
  plugins: [react()],
})