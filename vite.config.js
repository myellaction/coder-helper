import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@sass": path.resolve(__dirname, "./src/assets/sass"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  //base: "/coder-helper",
})
