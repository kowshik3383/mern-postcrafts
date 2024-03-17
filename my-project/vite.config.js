import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://mern-postcrafts.vercel.app/', // Maps requests to /api to your actual API server
    },
  },
  // ... other configurations
});
