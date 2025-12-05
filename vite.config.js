import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-plantshop/',   // <-- REQUIRED for GitHub Pages
  plugins: [react()],
});
