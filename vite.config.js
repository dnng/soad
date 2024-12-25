import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/soad/', // Update this to match your GitHub repository name
  build: {
    outDir: 'dist', // Output folder for the build
    rollupOptions: {
      input: 'index.html', // Entry point for the build
    },
  },
  server: {
    host: true, // Allow external access for local testing
  },
  css: {
    postcss: './postcss.config.js',
  },
});
