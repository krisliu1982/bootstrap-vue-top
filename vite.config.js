import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3',
      scale: 1, // SVG缩放比例
      defaultClass: 'bv-bi' // 默认 class
    }),
    Components({
      resolvers: [IconsResolver({ prefix: false, enabledCollections: ['bi'] })]
    }),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@lib': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
          'if-function'
        ],
      },
    },
  },
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.js'),
      name: 'BootstrapVueTop',
      fileName: 'bootstrap-vue-top',
    },
    rolldownOptions: {
      external: ['vue', 'bootstrap'],
      output: {
        globals: {
          vue: 'Vue',
          bootstrap: 'bootstrap'
        },
        exports: 'named'
      }
    }
  }
})