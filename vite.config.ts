import alias from '@rollup/plugin-alias'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 10086,
    open: false,
    cors: true,
  },
  build: {
    outDir: 'dist',
    target: ['edge90', 'chrome90', 'firefox90', 'safari15'],
    chunkSizeWarningLimit: 1500,
  },
  // optimizeDeps: { exclude: ["swiper/vue", "swiper/types"], },
})
