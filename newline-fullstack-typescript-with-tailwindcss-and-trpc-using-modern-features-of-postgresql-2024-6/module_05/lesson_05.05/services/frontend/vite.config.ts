import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/trpc': {
        target: 'http://localhost:3000/trpc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/trpc/, ''),
      },
    },
  },
});
