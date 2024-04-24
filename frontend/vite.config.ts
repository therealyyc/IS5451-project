import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5010',  // backend server
        changeOrigin: true,  // needed for virtual hosted sites
      }
    }
  }
});
