// vite.config.ts
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
var projectRootDir = resolve("C:\\Users\\bruna\\Documents\\GitHub\\institutional-website-vuejs");
var vite_config_default = defineConfig({
  plugins: [
    alias(),
    vue(),
    Pages({
      onRoutesGenerated: (routes) => generateSitemap({ routes })
    })
  ],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src")
    }
  },
  server: {
    host: "0.0.0.0",
    port: 10086,
    open: false,
    cors: true
  },
  build: {
    outDir: "dist",
    target: ["edge90", "chrome90", "firefox90", "safari15"],
    chunkSizeWarningLimit: 1500
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgYWxpYXMgZnJvbSBcIkByb2xsdXAvcGx1Z2luLWFsaWFzXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXHJcbmltcG9ydCBnZW5lcmF0ZVNpdGVtYXAgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMtc2l0ZW1hcCdcclxuXHJcbmNvbnN0IHByb2plY3RSb290RGlyID0gcmVzb2x2ZShcIkM6XFxcXFVzZXJzXFxcXGJydW5hXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcaW5zdGl0dXRpb25hbC13ZWJzaXRlLXZ1ZWpzXCIpO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBhbGlhcygpLFxyXG4gICAgdnVlKCksXHJcbiAgICBQYWdlcyh7XHJcbiAgICAgIG9uUm91dGVzR2VuZXJhdGVkOiByb3V0ZXMgPT4gKGdlbmVyYXRlU2l0ZW1hcCh7IHJvdXRlcyB9KSksXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiByZXNvbHZlKHByb2plY3RSb290RGlyLCBcInNyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgcG9ydDogMTAwODYsXHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICAgIGNvcnM6IHRydWUsXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiBcImRpc3RcIixcclxuICAgIHRhcmdldDpbJ2VkZ2U5MCcsJ2Nocm9tZTkwJywnZmlyZWZveDkwJywnc2FmYXJpMTUnXSxcclxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDoxNTAwLFxyXG4gIH0sXHJcbiAgLy8gb3B0aW1pemVEZXBzOiB7IGV4Y2x1ZGU6IFtcInN3aXBlci92dWVcIiwgXCJzd2lwZXIvdHlwZXNcIl0sIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTSxpQkFBaUIsUUFBUSxrRUFBa0U7QUFHakcsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osTUFBTTtBQUFBLE1BQ0osbUJBQW1CLFlBQVcsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDO0FBQUEsSUFDMUQsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxnQkFBZ0IsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQU8sQ0FBQyxVQUFTLFlBQVcsYUFBWSxVQUFVO0FBQUEsSUFDbEQsdUJBQXNCO0FBQUEsRUFDeEI7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
