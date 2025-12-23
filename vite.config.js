import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Importante para GitHub Pages: ajusta o caminho base dos assets
  // para o repositório `monique-site-test`
  base: '/monique-site-test/',
  server: {
    port: 3000,
    open: true
  }
})
