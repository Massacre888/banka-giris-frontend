import { defineConfig } from 'vite'

// Using a relative base keeps the build portable across hosting targets:
// - Railway (served from the domain root via server.js)
// - GitHub Pages (served from a repository subpath)
export default defineConfig({
  base: './',
})
