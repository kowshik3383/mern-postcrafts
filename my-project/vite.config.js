import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:6000/', // Maps requests to /api to your actual API server
    },
  },
  // ... other configurations
});
