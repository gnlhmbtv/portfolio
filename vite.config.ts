import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://gnlhmbtv.github.io/portfolio/
// Local/dev keeps base "/".
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio/' : '/',
}))
