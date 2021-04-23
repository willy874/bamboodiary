import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
/**
 * {@link https://vitejs.dev/config vitejs}
 */
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/variables";`,
      },
    },
  },
  resolve: {
    alias: {
      '@base': resolve(__dirname, 'src'),
    },
  },
})
