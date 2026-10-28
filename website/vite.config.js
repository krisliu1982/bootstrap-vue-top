import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItTOC from 'markdown-it-table-of-contents'
import PlaceholderPlugin from './markdown-placeholder.js'
import { pinyin } from 'pinyin-pro'
import config from './src/data/config.js'

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

  // 正文包裹占位符
  map['config:tag-start'] = '<div v-scrollspy data-bs-target="#table-of-contents" class="docs-content prose" data-pagefind-body>'
  map['config:tag-end'] = '<LinksNav /></div>'
  return map
}

function pinyinSlugify(title) {
  const pinyinText = pinyin(title, { toneType: 'none', nonZh: 'consecutive' })
  
  return pinyinText
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // 空格→连字符（英文短语变成 hello-world，单词不被拆）
    .replace(/[^a-z0-9-]/g, '')  // 去掉特殊字符，不碰字母数字和连字符
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    || 'heading'}

// docsref 占位符指向的文档站点根地址
const docsrefPrefix = `${config.baseURL.replace(/\/$/, '')}/${[config.docsDir, config.docs_version, 'docs'].filter(Boolean).join('/')}`

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      wrapperDiv: false,
      headEnabled: true,
      async markdownSetup(md) {
        md.renderer.rules.table_open = () => {
          return '<div class="table-responsive"><table class="table md:table-stacked">\n'
        }
        md.renderer.rules.table_close = () => {
          return '</table></div>\n'
        }

                  // 占位符替换
          md.use(PlaceholderPlugin, {
            docsrefPrefix,
            map: flattenConfig(config)
          })

        // 1. 先注册 anchor，让标题生成 id
        md.use(MarkdownItAnchor, {
          permalink: MarkdownItAnchor.permalink.headerLink(),
          level: [2, 3], // 只处理 h2 和 h3
          slugify: pinyinSlugify
        }),

        // 2. 再注册 TOC，它会基于已有的 id 生成目录链接
        md.use(MarkdownItTOC, {
          // 只收录 h2 和 h3
          includeLevel: [2, 3],
            transformContainerOpen: () => {
    return '<nav id="table-of-contents" aria-label="Table of contents" class="docs-toc">';
  },
  transformContainerClose: () => {
    return '</nav>';
  }
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
    })
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
