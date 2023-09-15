import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias(),
    vue(),
    Pages({
      onRoutesGenerated: routes => (generateSitemap({ routes })),
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 10086,
    open: false,
    cors: true,
  },
  build: {
    outDir: "dist",
    target:['edge90','chrome90','firefox90','safari15'],
    chunkSizeWarningLimit:1500,
  },
});
