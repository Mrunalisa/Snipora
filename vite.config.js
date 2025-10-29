import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
>>>>>>> d85bbff2dec2daad079d3defac003ca6e488db1b
})
