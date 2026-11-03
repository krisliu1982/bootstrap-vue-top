import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const highlighterPromise = createHighlighterCore({
  themes: [import('@shikijs/themes/light-plus'), import('@shikijs/themes/dark-plus')],
  langs: [
    import('@shikijs/langs/html'),
    import('@shikijs/langs/javascript'),
    import('@shikijs/langs/css'),
    import('@shikijs/langs/scss'),
    import('@shikijs/langs/json'),
    import('@shikijs/langs/shell'),
    import('@shikijs/langs/powershell'),
    import('@shikijs/langs/ruby'),
    import('@shikijs/langs/diff')
  ],
  engine: createJavaScriptRegexEngine()
});

export async function highlightCode(code, lang) {
  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(code, {
    // 这里必须是一个对象
    lang: lang,
    themes: {
      light: 'light-plus',
      dark: 'dark-plus'
    },
    defaultColor: 'light-dark()'
  });
}
