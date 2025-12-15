import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Using '.' is equivalent to process.cwd() in this context and avoids type issues
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // This injects the API_KEY from Cloudflare Environment Variables into the client-side code
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY || env.API_KEY)
    }
  };
});