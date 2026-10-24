import postcssPrefixCustomProperties from 'postcss-prefix-custom-properties'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    postcssPrefixCustomProperties({
      prefix: 'bs-',
      ignore: [/^--bs-/, /^--docs-/]
    }),
    autoprefixer(),// 它会自动读取 .browserslistrc
  ]
}