import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItTocDoneRight from 'markdown-it-toc-done-right'
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      wrapperComponent: 'MdWrapper',
      wrapperDiv: false,
      markdownSetup(md) {
        md.renderer.rules.table_open = () => {
          return '<div class="table-responsive"><table class="table md:table-stacked">\n'
        }
        md.renderer.rules.table_close = () => {
          return '</table></div>\n'
        }
        // 先加载 anchor，为标题生成 id
        md.use(MarkdownItAnchor, {
          permalink: MarkdownItAnchor.permalink.headerLink()
        })
        // 再加载 TOC 插件
        md.use(MarkdownItTocDoneRight, {
          // 可选配置：例如只收录 h2 和 h3
          level: [2, 3],
          listType: 'ul', // 无序列表，默认是有序列表 ol
          containerClass: 'table-of-contents'
        })
      },
      markdownOptions: {
        html: true
      }
    }),
    Icons({
      compiler: 'vue3',
      scale: 1, // SVG缩放比例
      defaultClass: 'bi' // 默认 class
    }),
    Components({
      resolvers: [IconsResolver({ prefix: false, enabledCollections: ['bi'] })]
    }),
    cloudflare()
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'bootstrap-vue-top': fileURLToPath(new URL('../src/index.js', import.meta.url))
    },
  },
  server: {//开发配置  npm run dev
    port: 8888,//端口号
    host: '0.0.0.0',
    open: true,//是否自动打开浏览器
  }
})
