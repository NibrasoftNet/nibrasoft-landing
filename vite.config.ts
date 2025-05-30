import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    port: 3003,
    strictPort: true,
  },
  server: {
    port: 3003,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:3003',
  },
});
