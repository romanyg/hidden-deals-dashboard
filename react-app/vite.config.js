import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "build",
    assetsDir: "",
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        assetFileNames: "index.css"
      },
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    },
  },
})
