import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure the root is set to the current directory
  build: {
    outDir: 'dist', // Output folder
    rollupOptions: {
      input: 'index.html', // Entry point for the build
    },
  },
});
