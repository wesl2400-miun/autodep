import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        gallery: 'gallery.html',
        workflow: 'workflow.html'
      }
    }
  },
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