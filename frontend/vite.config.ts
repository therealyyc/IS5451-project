import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://172.20.10.4:5010',  // backend server
        changeOrigin: true,  // needed for virtual hosted sites
      }
    }
  }
});
