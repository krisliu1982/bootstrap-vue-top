<template>
      <article class="docs-content prose">
<h1>Bootstrap 与 Webpack</h1>
<p>使用 Webpack 在项目中引入并打包 Bootstrap 的 CSS 和 JavaScript 的官方指南。</p>

<Callout type="info">
    <p><strong>想直接跳到结尾？</strong> 从 <a href="https://github.com/twbs/examples/tree/main/webpack">twbs/examples 仓库</a>下载本指南的源代码和可运行示例。你也可以<a href="https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index.html">在 StackBlitz 中打开该示例</a>进行实时编辑。</p>
</Callout>

<Callout type="info">
    <p><strong>使用 AI 编程代理？</strong> 让它指向我们的 <a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-webpack"><code>bootstrap-webpack</code> 技能</a>以自动化此设置。有关所有可用技能，请参阅 <a href="/docs/getting-started/ai">AI</a>。</p>
</Callout>

<h2 id="what-is-webpack">什么是 Webpack？<a class="anchor-link" href="#what-is-webpack" aria-label="链接到 什么是 Webpack？"></a></h2>

<p><a href="https://webpack.js.org/">Webpack</a> 是一个 JavaScript 模块打包工具，它处理模块及其依赖关系以生成静态资源。它简化了管理具有多个文件和依赖项的复杂 Web 应用程序的工作。</p>

<h2 id="setup">设置<a class="anchor-link" href="#setup" aria-label="链接到 设置"></a></h2>

<p>我们将从零开始构建一个使用 Bootstrap 的 Webpack 项目，因此在真正开始之前有一些前提条件和前期步骤。本指南要求你已安装 Node.js 并对终端有一定熟悉度。</p>

<ol>
    <li>
        <p><strong>创建项目文件夹并设置 npm。</strong> 我们将创建 <code>my-project</code> 文件夹并使用 <code>-y</code> 参数初始化 npm，以避免它询问所有交互式问题。</p>
        <CodeWrapper code="mkdir my-project && cd my-project
npm init -y" lang="shell" class="my-5" />
    </li>
    <li>
        <p><strong>安装 Webpack。</strong> 接下来我们需要安装 Webpack 开发依赖项：<code>webpack</code> 作为 Webpack 核心，<code>webpack-cli</code> 以便从终端运行 Webpack 命令，<code>webpack-dev-server</code> 以便运行本地开发服务器。此外，我们还会安装 <code>html-webpack-plugin</code>，以便将 <code>index.html</code> 存放在 <code>src</code> 目录中，而非默认的 <code>dist</code> 目录。我们使用 <code>--save-dev</code> 表示这些依赖项仅用于开发而非生产环境。</p>
              <CodeWrapper code="npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin" lang="shell" class="my-5" />  
    </li>
    <li>
        <p><strong>安装 Bootstrap。</strong> 现在我们可以安装 Bootstrap。我们还会安装 Floating UI 和 Vanilla Calendar Pro，因为我们的一些组件依赖它们。如果你不打算使用菜单、弹出框或工具提示，可以省略 Floating UI。如果你不打算使用日期选择器，可以省略 Vanilla Calendar Pro。</p>
        <CodeWrapper code="npm i --save bootstrap @floating-ui/dom vanilla-calendar-pro" lang="shell" class="my-5" />
    </li>
    <li>
        <p><strong>安装额外依赖项。</strong> 除了 Webpack 和 Bootstrap 之外，我们还需要一些其他依赖项来正确导入和打包 Bootstrap 的 CSS 和 JS。这些包括 Sass、一些加载器和 Autoprefixer。</p>
        <CodeWrapper code="npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader" lang="shell" class="my-5" />
    </li>
</ol>

<p>现在我们已经安装了所有必要的依赖项，可以开始创建项目文件并导入 Bootstrap 了。</p>

<h2 id="project-structure">项目结构<a class="anchor-link" href="#project-structure" aria-label="链接到 项目结构"></a></h2>

<p>我们已经创建了 <code>my-project</code> 文件夹并初始化了 npm。现在我们将创建 <code>src</code> 和 <code>dist</code> 文件夹，以完善项目结构。在 <code>my-project</code> 中运行以下命令，或手动创建下面显示的文件夹和文件结构。</p>

<CodeWrapper code="mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss webpack.config.js" lang="shell" />

<p>完成后，你的完整项目应如下所示：</p>

<CodeWrapper code="my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
├── package-lock.json
├── package.json
└── webpack.config.js" lang="text" />

<p>此时，所有内容都在正确的位置，但 Webpack 还无法工作，因为我们尚未填写 <code>webpack.config.js</code>。</p>

<h2 id="configure-webpack">配置 Webpack<a class="anchor-link" href="#configure-webpack" aria-label="链接到 配置 Webpack"></a></h2>

<p>依赖项已安装，项目文件夹已准备好开始编码，我们现在可以配置 Webpack 并在本地运行项目。</p>

<ol>
    <li>
        <p><strong>在编辑器中打开 <code>webpack.config.js</code>。</strong> 由于它是空的，我们需要添加一些样板配置以便启动服务器。这部分配置告诉 Webpack 在哪里查找项目的 JavaScript、将编译后的代码输出到哪里（<code>dist</code>），以及开发服务器应如何行为（从 <code>dist</code> 文件夹拉取并支持热重载）。</p>
        <CodeWrapper code="'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}" lang="javascript" class="my-5" />
    </li>
    <li>
        <p><strong>接下来填写 <code>src/index.html</code>。</strong> 这是 Webpack 将在浏览器中加载的 HTML 页面，用于使用我们将在后续步骤中添加的打包 CSS 和 JS。在此之前，我们必须给它一些可渲染的内容，并包含上一步生成的 <code>output</code> JS。</p>
        <CodeWrapper code='<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ Webpack</title>
  </head>
  <body>
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Webpack!</h1>
      <button class="btn-solid theme-primary">Primary button</button>
    </div>
  </body>
</html>' lang="html" class="my-5" />
        <p>我们在这里通过 <code>div class="container"</code> 和 <code>&lt;button&gt;</code> 引入了一点 Bootstrap 样式，以便我们看到 Bootstrap 的 CSS 已被 Webpack 加载。</p>
    </li>
    <li>
        <p><strong>现在我们需要一个 npm 脚本来运行 Webpack。</strong> 打开 <code>package.json</code> 并添加下面显示的 <code>start</code> 脚本（你应该已经有 test 脚本了）。我们将使用此脚本启动本地 Webpack 开发服务器。你也可以添加下面显示的 <code>build</code> 脚本来构建项目。</p>
        <CodeWrapper code='{
  // ...
  "scripts": {
    "start": "webpack serve",
    "build": "webpack build --mode=production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ...
}' lang="json" class="my-5" />
    </li>
    <li>
        <p><strong>最后，我们可以启动 Webpack 了。</strong> 在终端中从 <code>my-project</code> 文件夹运行新添加的 npm 脚本：</p>
        <CodeWrapper code="npm start" lang="shell" class="my-5" />
    </li>
</ol>

<p>在本指南的下一节也是最后一节中，我们将设置 Webpack 加载器并导入 Bootstrap 的所有 CSS 和 JavaScript。</p>

<h2 id="import-bootstrap">导入 Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="链接到 导入 Bootstrap"></a></h2>

<p>将 Bootstrap 导入 Webpack 需要我们在第一节中安装的加载器。我们已经用 npm 安装了它们，但现在需要配置 Webpack 以使用它们。</p>

<ol>
    <li>
        <p><strong>在 <code>webpack.config.js</code> 中设置加载器。</strong> 你的配置文件现在已完成，应与下面的代码片段匹配。这里唯一新增的部分是 <code>module</code> 部分。</p>
        <CodeWrapper code="'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}" lang="javascript" class="my-5" />
        <p>以下是为什么我们需要所有这些加载器的简要回顾。<code>style-loader</code> 将 CSS 注入到 HTML 页面 <code>&lt;head&gt;</code> 中的 <code>&lt;style&gt;</code> 元素中，<code>css-loader</code> 帮助处理 <code>@import</code> 和 <code>url()</code>，<code>postcss-loader</code> 是 Autoprefixer 所需的，而 <code>sass-loader</code> 允许我们使用 Sass。</p>
    </li>
    <li>
        <p><strong>现在，让我们导入 Bootstrap 的 CSS。</strong> 将以下内容添加到 <code>src/scss/styles.scss</code> 以导入 Bootstrap 的所有源 Sass。</p>
        <CodeWrapper code='// Import all of Bootstrap’s CSS
@use "bootstrap/scss/bootstrap";' lang="scss" class="my-5" />
        <p><em>如果你愿意，也可以单独导入我们的样式表。<a href="/docs/customize/sass#importing">阅读我们的 Sass 导入文档</a>了解详情。</em></p>
    </li>
    <li>
        <p><strong>接下来加载 CSS 并导入 Bootstrap 的 JavaScript。</strong> 将以下内容添加到 <code>src/js/main.js</code> 以加载 CSS 并导入 Bootstrap 的所有 JS。Floating UI 和 Vanilla Calendar Pro 将通过 Bootstrap 自动导入。</p>
                <CodeWrapper code="// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'" lang="javascript" class="my-5" />
        <p>你也可以根据需要单独导入 JavaScript 插件以减小打包体积：</p>
                        <CodeWrapper code="import Alert from 'bootstrap/js/dist/alert'

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap'" lang="javascript" class="my-5" />
        <p><em><a href="/docs/getting-started/javascript/">阅读我们的 JavaScript 文档</a>以了解有关如何使用 Bootstrap 插件的更多信息。</em></p>
    </li>
    <li>
        <p><strong>大功告成！🎉</strong> Bootstrap 的源 Sass 和 JS 已完全加载，你的本地开发服务器现在应如下所示：</p>
        <p>现在你可以开始添加任何你想使用的 Bootstrap 组件了。请务必<a href="https://github.com/twbs/examples/tree/main/webpack">查看完整的 Webpack 示例项目</a>，了解如何包含额外的自定义 Sass，以及通过仅导入你需要的 Bootstrap CSS 和 JS 部分来优化构建。</p>
    </li>
</ol>

<h2 id="production-optimizations">生产环境优化<a class="anchor-link" href="#production-optimizations" aria-label="链接到 生产环境优化"></a></h2>

<p>根据你的配置，你可能需要实施一些额外的安全和速度优化，以便在生产环境中运行项目。请注意，这些优化并未应用于<a href="https://github.com/twbs/examples/tree/main/webpack">Webpack 示例项目</a>，需要你自行实施。</p>

<h3 id="extracting-css">提取 CSS<a class="anchor-link" href="#extracting-css" aria-label="链接到 提取 CSS"></a></h3>

<p>我们上面配置的 <code>style-loader</code> 会方便地将 CSS 输出到打包文件中，因此无需在 <code>dist/index.html</code> 中手动加载 CSS 文件。然而，这种方法可能不适用于严格的内容安全策略（CSP），并且由于打包体积较大，可能会成为应用程序的瓶颈。</p>

<p>要将 CSS 分离出来以便直接从 <code>dist/index.html</code> 加载，请使用 <code>mini-css-extract-plugin</code> Webpack 插件。</p>

<p>首先，安装插件：</p>

                <CodeWrapper code="npm install --save-dev mini-css-extract-plugin" lang="shell" />

<p>然后在 Webpack 配置中实例化并使用该插件：</p>

                <CodeWrapper code='--- a/dist/index.html
+++ b/dist/index.html
@@ -3,6 +3,7 @@
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
+    <link rel="stylesheet" href="./main.css">
     <title>Bootstrap w/ Webpack</title>
   </head>
   <body>' lang="diff" />

<h3 id="extracting-svg-files">提取 SVG 文件<a class="anchor-link" href="#extracting-svg-files" aria-label="链接到 提取 SVG 文件"></a></h3>

<p>Bootstrap 的 CSS 通过内联 <code>data:</code> URI 多次引用 SVG 文件——主要是作为 <code>mask-image</code> 图标（关闭按钮、轮播控件等），还有少数剩余的 <code>background-image</code> 情况，例如 select 箭头。如果你为项目定义了阻止图像使用 <code>data:</code> URI 的内容安全策略，那么这些 SVG 文件将无法加载。你可以使用 Webpack 的资源模块功能提取内联 SVG 文件来绕过此问题。</p>

<p>像这样配置 Webpack 以提取内联 SVG 文件：</p>

                <CodeWrapper code="--- a/webpack.config.js
+++ b/webpack.config.js
@@ -23,6 +23,14 @@ module.exports = {
   },
   module: {
     rules: [
+      {
+        mimetype: 'image/svg+xml',
+        scheme: 'data',
+        type: 'asset/resource',
+        generator: {
+          filename: 'icons/[hash].svg'
+        }
+      },
       {
         test: /\.(scss)$/,
         use: [" lang="diff" />

<p>再次运行 <code>npm run build</code> 后，你将发现 SVG 文件被提取到 <code>dist/icons</code> 中，并从 CSS 中正确引用。</p>
</article>

<nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#what-is-webpack">什么是 Webpack？</a></li>
        <li><a href="#setup">设置</a></li>
        <li><a href="#project-structure">项目结构</a></li>
        <li><a href="#configure-webpack">配置 Webpack</a></li>
        <li><a href="#import-bootstrap">导入 Bootstrap</a></li>
        <li><a href="#production-optimizations">生产环境优化</a>
            <ul>
                <li><a href="#extracting-css">提取 CSS</a></li>
                <li><a href="#extracting-svg-files">提取 SVG 文件</a></li>
            </ul>
        </li>
    </ul>
</nav>
</template>