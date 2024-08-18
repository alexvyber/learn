/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    sequence: {
      hooks: 'stack',
    },
    setupFiles: ['src/test-helpers/setup.ts'],
    environment: 'jsdom',
  },
});
