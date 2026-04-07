import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  base: '/autodep/',
  plugins: [
    ViteImageOptimizer({
      jpeg: { quality: 90},
      webp: { quality: 90},
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'sortAttrs'}
        ]
      }
    })
  ]
});