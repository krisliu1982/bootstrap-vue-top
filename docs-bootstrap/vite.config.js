import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3',
      scale: 1, // SVG缩放比例
      defaultClass: 'bi' // 默认 class
    }),
    Components({
      resolvers: [IconsResolver({ prefix: false, enabledCollections: ['bi'] })]
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
    },
  },
  server: {//开发配置  npm run dev
    port: 8885,//端口号
    host: '0.0.0.0',
    open: true,//是否自动打开浏览器
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
    target: 'es2015'
  }
})
