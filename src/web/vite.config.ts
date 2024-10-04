import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'


export default defineConfig(({command, mode}) => {
 
  // habilita acesso ao process.env
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: "/",
    plugins: [react()],
    preview: {
      port: 5555,
      strictPort: true,
    },
    server: {
      port: 9000,
      strictPort: true,
      host: true,
      origin: "http://0.0.0.0:9000",
    },
    define: {
      'process.env.API_BASE_URL': JSON.stringify(env.API_BASE_URL)
    }
  }
});