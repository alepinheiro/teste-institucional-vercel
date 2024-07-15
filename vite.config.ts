import alias from '@rollup/plugin-alias';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { convertImagesToWebP } from './src/plugins/convertImagesToWebP';
import { findUnusedImages } from './src/plugins/findUnusedImages';
import { generateResponsiveImages } from './src/plugins/generateResponsiveImages';
import vercel from 'vite-plugin-vercel';

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },
  plugins: [alias(), vue(), vercel(), generateResponsiveImages()],
  // vercel: {
  //   images: {
  //     sizes: [320, 420, 640, 750, 828, 1080, 1200],
  //     domains: [],
  //     minimumCacheTTL: 60,
  //     formats: ['image/avif', 'image/webp'],
  //   },
  // },
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
});
