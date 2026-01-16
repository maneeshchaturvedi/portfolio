import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment:
  // - If deploying to https://username.github.io/repo-name/, set base to '/repo-name/'
  // - If deploying to https://username.github.io/ (user site), set base to '/'
  base: '/portfolio/',  // Change 'portfolio' to your repo name
})
