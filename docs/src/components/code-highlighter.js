import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const highlighterPromise = createHighlighterCore({
  themes: [import('@shikijs/themes/github-light'), import('@shikijs/themes/github-dark')],
  langs: [import('@shikijs/langs/html'), import('@shikijs/langs/javascript'), import('@shikijs/langs/powershell')],
  engine: createJavaScriptRegexEngine()
});

export async function highlightCode(code, lang) {
  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(code, {
    // 这里必须是一个对象
    lang: lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark'
    },
    defaultColor: 'light-dark()'
  });
}
