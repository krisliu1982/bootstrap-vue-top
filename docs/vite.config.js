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
      autoInstall: true, // 自动安装图标集
      scale: 1, // SVG缩放比例
      defaultClass: 'bi', // 默认 class
      // 只启用 Bootstrap Icons
      collections: {
        'bi': () => import('@iconify-json/bi/icons.json').then(i => i.default),
      }
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: '', // 组件前缀
          enabledCollections: ['bi'], // 只启用 Bootstrap Icons
        })
      ],
      dts: false, // 生成类型声明文件
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'bootstrap-vue-ui': fileURLToPath(new URL('../src/index.js', import.meta.url)),
    },
  },
  server: {//开发配置  npm run dev
    port: 8888,//端口号
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
