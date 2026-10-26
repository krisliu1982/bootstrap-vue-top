import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItAnchor from 'markdown-it-anchor'
import PlaceholderPlugin from './markdown-placeholder.js'
import { cloudflare } from "@cloudflare/vite-plugin";
import config from './config.json' with { type: 'json' }

// 将 config.json 扁平化为 'cdn.css' -> '...' 形式的占位符映射
function flattenConfig(source, prefix = '') {
  const map = {}
  for (const [key, value] of Object.entries(source)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      map[`config:${path}`] = JSON.stringify(value)
      Object.assign(map, flattenConfig(value, path))
    } else {
      map[`config:${path}`] = String(value)
    }
  }
  return map
}

// docsref 占位符指向的文档站点根地址
const docsrefPrefix = `${config.baseURL.replace(/\/$/, '')}/${[config.docsDir, config.docs_version, 'docs'].filter(Boolean).join('/')}`

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      wrapperComponent: (id) => {
        // id 通常是文件路径或唯一标识
        if (id.includes('/website/src/docs/')) {
          return 'MdWrapper'
        }
        return null;
      },
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
        }),
          // 占位符替换
          md.use(PlaceholderPlugin, {
            docsrefPrefix,
            map: flattenConfig(config)
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
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      'bootstrap-vue-top': fileURLToPath(new URL('../src/index.js', import.meta.url))
    },
  },
  server: {//开发配置  npm run dev
    port: 8888,//端口号
    host: '0.0.0.0',
    open: true,//是否自动打开浏览器
  }
})
