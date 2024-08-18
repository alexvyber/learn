import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const backendUrl = process.env.NEWLINE_APP_BACKEND_URL || 'http://localhost:3003';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/trpc': {
        target: backendUrl + '/trpc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/trpc/, ''),
      },
    },
  },
});
