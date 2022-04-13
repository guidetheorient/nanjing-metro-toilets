import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// vite build: require is not defined，按照里面修改了仍然解决不了
// https://github.com/originjs/vite-plugins/issues/9

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteCommonjs()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
