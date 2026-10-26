// markdown-placeholder.js
// 将 md 中的 [[key]] 占位符替换为 map 中对应的数据：
// - [[docsref:/path]] 文档内部链接（自动拼接 baseURL + docsDir + /docs/docs_version）
// - [[config:a.b]]    读取扁平化后的 config 数据，如 [[config:cdn.css]]
// - [[key]]           直接匹配 map 中的键
// 默认在 markdown-it 解析前替换，因此正文、行内代码、代码块、HTML、链接地址以及
// frontmatter（yaml 头信息）都会被处理；且替换结果不会被再次解析为 markdown。
export default function placeholderPlugin(md, options = {}) {
  const map = options.map || {}
  const docsrefPrefix = options.docsrefPrefix || ''
  const linkPlaceholder = options.linkPlaceholder || 'docsref'

  // 先按长度降序，避免短键先匹配长键前缀（如 cdn.js 与 cdn.js_bundle）
  const keys = Object.keys(map)
    .filter((key) => map[key] !== undefined && map[key] !== null)
    .sort((a, b) => b.length - a.length)

  // 单次扫描：[[name]] / [[name:arg]]，保证已替换的结果不会被二次解析
  const placeholderRE = /\[\[([a-zA-Z0-9_.-]+)(?::([^\]]*))?\]\]/g
  const linkPrefix = `[[${linkPlaceholder}:`

  function lookup(name, arg) {
    if (arg === undefined) {
      return map[name]
    }
    if (name === linkPlaceholder) {
      const path = arg.startsWith('/') ? arg : `/${arg}`
      return `${docsrefPrefix}${path}`
    }
    return map[`${name}:${arg}`]
  }

  function replace(text) {
    if (typeof text !== 'string') return text
    // 快速跳过不含占位符的文本
    if (!text.includes('[[') || (!text.includes(linkPrefix) && !keys.some((key) => text.includes(key)))) {
      return text
    }
    return text.replace(placeholderRE, (match, name, arg) => {
      const value = lookup(name, arg)
      return value === undefined || value === null ? match : String(value)
    })
  }

  function replaceTokens(tokens) {
    for (const token of tokens) {
      // 正文、代码块、行内代码、html_block 等
      if (typeof token.content === 'string') {
        token.content = replace(token.content)
      }
      // token 自身属性（链接 href、图片 src、代码块语言等）
      if (token.attrs) {
        for (const attr of token.attrs) {
          if (typeof attr[1] === 'string') {
            attr[1] = replace(attr[1])
          }
        }
      }
      // inline token 的子节点
      if (token.children) {
        replaceTokens(token.children)
      }
    }
  }

  if (options.frontmatter !== false) {
    // ========== 预处理：解析前替换整段来源（含 frontmatter） ==========
    md.core.ruler.before('normalize', 'placeholder_replace', (state) => {
      state.src = replace(state.src)
    })
  } else {
    // ========== Core 阶段：仅替换 token 中的内容 ==========
    md.core.ruler.push('placeholder_replace', (state) => {
      replaceTokens(state.tokens)
    })
  }
}
