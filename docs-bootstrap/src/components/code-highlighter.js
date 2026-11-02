import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

const highlighterPromise = createHighlighterCore({themes: [
    import('@shikijs/themes/light-plus'),
    import('@shikijs/themes/dark-plus'),
  ],
  langs: [
    import('@shikijs/langs/html'),
    import('@shikijs/langs/javascript'),
    import('@shikijs/langs/css'),
    import('@shikijs/langs/scss'),
    import('@shikijs/langs/json'),
    import('@shikijs/langs/shell'),
    import('@shikijs/langs/powershell'),
    import('@shikijs/langs/ruby'),
    import('@shikijs/langs/diff'),
  ],
  engine: createJavaScriptRegexEngine()})

export async function highlightCode(code, lang) {
  const highlighter = await highlighterPromise
  return highlighter.codeToHtml(code, {
    lang: lang,           // 这里必须是一个对象
    theme: 'light-plus',  // 需要指定一个已加载的主题
  })
}