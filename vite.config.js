import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/chess-facts/',  // Replace this with your actual repo name
  plugins: [react()],
})
