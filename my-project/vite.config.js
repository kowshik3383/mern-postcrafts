import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteCors } from 'vite-plugin-cors';

export default defineConfig({
  server: {
    proxy: {
      '/server': {
        target: 'http://localhost:6000',
        secure: false
      }
    }
  },
  plugins: [
    react(),
    viteCors({
      origin: '*',
      methods: 'GET,POST,PUT,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type,Authorization,X-Requested-With',
      exposedHeaders: '',
      credentials: false,
      maxAge: 86400,
      preflightContinue: false,
      optionsSuccessStatus: 204
    })
  ]
});
