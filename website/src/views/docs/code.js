import { codeToHtml } from 'shiki'

export default {
  props: ['code', 'lang'],
  setup(props) {
    return to(props.code, props.lang)
  }
}

async function to(code, lang) {
return await codeToHtml(code, {
    lang: lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    defaultColor: 'light-dark()'
  });
}