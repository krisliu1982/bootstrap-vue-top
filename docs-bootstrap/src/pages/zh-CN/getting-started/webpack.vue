<template>
  <article class="bd-content" data-pagefind-body>
    <h1>Bootstrap 与 Webpack</h1>
    <p class="lead">本官方指南介绍如何使用 Webpack 在项目中引入和打包 Bootstrap 的 CSS 和 JavaScript。</p>

    <img class="d-block mx-auto mb-4 img-fluid rounded-3" srcset="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack.png, https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack@2x.png 2x" src="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack.png" width="100%" alt="" /><Callout>
      <p>
        <strong>想直接跳到结尾？</strong>从 <a href="https://github.com/twbs/examples/tree/main/webpack">twbs/examples 仓库</a> 下载本指南的源码和可运行演示。你也可以
        <a href="https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index.html">在 StackBlitz 中打开该示例</a>
        进行实时编辑。
      </p>
    </Callout>
    <h2 id="what-is-webpack">什么是 Webpack？<a class="anchor-link" href="#what-is-webpack" aria-label="什么是 Webpack？链接"></a></h2>
    <p><a href="https://webpack.js.org/">Webpack</a> 是一个 JavaScript 模块打包工具，它处理模块及其依赖以生成静态资源。它简化了对包含多个文件和依赖的复杂 Web 应用的管理。</p>
    <h2 id="setup">准备工作<a class="anchor-link" href="#setup" aria-label="准备工作链接"></a></h2>
    <p>我们将从头开始构建一个使用 Bootstrap 的 Webpack 项目，因此在真正开始之前有一些前提条件和前期步骤。本指南要求你已安装 Node.js，并熟悉终端操作。</p>
    <ol>
      <li>
        <p><strong>创建项目文件夹并设置 npm。</strong>我们将创建 <code>my-project</code> 文件夹，并使用 <code>-y</code> 参数初始化 npm，以避免它向我们询问各种交互式问题。</p>
        <CodeWrapper
          code="mkdir my-project &amp;&amp; cd my-project
npm init -y
"
          lang="shell"
        />
      </li>
      <li>
        <p>
          <strong>安装 Webpack。</strong>接下来我们需要安装 Webpack 的开发依赖：<code>webpack</code> 作为 Webpack 的核心，<code>webpack-cli</code> 用于在终端中运行 Webpack 命令，以及 <code>webpack-dev-server</code> 用于运行本地开发服务器。此外，我们还会安装 <code>html-webpack-plugin</code>，以便将 <code>index.html</code> 存放在
          <code>src</code> 目录中，而不是默认的 <code>dist</code> 目录。我们使用 <code>--save-dev</code> 来表明这些依赖仅用于开发，而不用于生产环境。
        </p>
        <CodeWrapper
          code="npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
"
          lang="shell"
        />
      </li>
      <li>
        <p><strong>安装 Bootstrap。</strong>现在可以安装 Bootstrap 了。我们还会安装 Popper，因为我们的下拉菜单、弹出框和工具提示依赖它来定位。如果你不打算使用这些组件，可以在此省略 Popper。</p>
        <CodeWrapper
          code="npm i --save bootstrap @popperjs/core
"
          lang="shell"
        />
      </li>
      <li>
        <p><strong>安装其他依赖。</strong>除了 Webpack 和 Bootstrap 之外，我们还需要一些其他依赖，以便正确地用 Webpack 导入和打包 Bootstrap 的 CSS 和 JS。这些依赖包括 Sass、一些加载器和 Autoprefixer。</p>
        <CodeWrapper
          code="npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader
"
          lang="shell"
        />
      </li>
    </ol>
    <p>现在所有必要的依赖都已安装完毕，我们可以着手创建项目文件并导入 Bootstrap 了。</p>
    <h2 id="project-structure">项目结构<a class="anchor-link" href="#project-structure" aria-label="项目结构链接"></a></h2>
    <p>我们已经创建了 <code>my-project</code> 文件夹并初始化了 npm。现在我们将再创建 <code>src</code> 和 <code>dist</code> 文件夹，以完善项目结构。在 <code>my-project</code> 中运行以下命令，或按下面所示手动创建文件夹和文件结构。</p>
    <CodeWrapper
      code="mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss webpack.config.js
"
      lang="shell"
    />
    <p>完成后，你的完整项目应该如下所示：</p>
    <CodeWrapper
      code="my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
├── package-lock.json
├── package.json
└── webpack.config.js
"
      lang="text"
    />
    <p>
      至此，一切都在正确的位置上，但 Webpack 无法运行，因为我们还没有填写
      <code>webpack.config.js</code>。
    </p>
    <h2 id="configure-webpack">配置 Webpack<a class="anchor-link" href="#configure-webpack" aria-label="配置 Webpack 链接"></a></h2>
    <p>依赖已安装，项目文件夹也已准备好开始编码，现在我们可以配置 Webpack 并在本地运行项目了。</p>
    <ol>
      <li>
        <p>
          <strong>在你的编辑器中打开 <code>webpack.config.js</code>。</strong>由于它是空白的，我们需要添加一些样板配置，以便启动服务器。配置的这一部分告诉 Webpack 在哪里查找项目的 JavaScript、将编译后的代码输出到哪里（<code>dist</code>），以及开发服务器 应该如何运行（从 <code>dist</code> 文件夹读取并支持热重载）。
        </p>
        <CodeWrapper
          code="&#39;use strict&#39;

const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)

module.exports = {
  mode: &#39;development&#39;,
  entry: &#39;./src/js/main.js&#39;,
  output: {
    filename: &#39;main.js&#39;,
    path: path.resolve(__dirname, &#39;dist&#39;)
  },
  devServer: {
    static: path.resolve(__dirname, &#39;dist&#39;),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })
  ]
}
"
          lang="javascript"
        />
      </li>
      <li>
        <p>
          <strong>接下来我们填写 <code>src/index.html</code>。</strong>这是 Webpack 将在浏览器中加载的 HTML 页面，用于使用我们稍后步骤中添加的打包 CSS 和 JS。在此之前，我们必须给它一些可渲染的内容，并引入上一步生成的 <code>output</code> JS。
        </p>
        <CodeWrapper
          code='&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Bootstrap w/ Webpack&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="container py-4 px-3 mx-auto"&gt;
      &lt;h1&gt;Hello, Bootstrap and Webpack!&lt;/h1&gt;
      &lt;button class="btn btn-primary"&gt;Primary button&lt;/button&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;'
          lang="html"
        />
        <p>
          我们在这里通过
          <code>div class=&quot;container&quot;</code> 和 <code>&lt;button&gt;</code> 加入了一点 Bootstrap 样式，以便在 Webpack 加载 Bootstrap 的 CSS 时能够看出效果。
        </p>
      </li>
      <li>
        <p><strong>现在我们需要一个 npm 脚本来运行 Webpack。</strong>打开 <code>package.json</code> 并添加下面所示的 <code>start</code> 脚本（你应该已经有 test 脚本了）。我们将使用这个脚本启动本地 Webpack 开发服务器。你也可以添加下面所示的 <code>build</code> 脚本以构建项目。</p>
        <CodeWrapper
          code='{
  // ...
  "scripts": {
    "start": "webpack serve",
    "build": "webpack build --mode=production",
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  // ...
}
'
          lang="json"
        />
      </li>
      <li>
        <p><strong>最后，我们就可以启动 Webpack 了。</strong>在终端的 <code>my-project</code> 文件夹中，运行刚刚添加的 npm 脚本：</p>
        <CodeWrapper
          code="npm start
"
          lang="shell"
        />
        <img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/webpack-dev-server.png" alt="正在运行的 Webpack 开发服务器" />
      </li>
    </ol>
    <p>在本指南接下来的最后一节中，我们将配置 Webpack 加载器，并导入 Bootstrap 的所有 CSS 和 JavaScript。</p>
    <h2 id="import-bootstrap">导入 Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="导入 Bootstrap 链接"></a></h2>
    <p>将 Bootstrap 导入 Webpack 需要用到我们在第一节中安装的加载器。我们已经通过 npm 安装了它们，但现在还需要配置 Webpack 来使用它们。</p>
    <ol>
      <li>
        <p>
          <strong>在 <code>webpack.config.js</code> 中设置加载器。</strong>你的配置文件现在已完成，应与下面的代码片段一致。这里唯一新增的部分是 <code>module</code> 段。
        </p>
        <CodeWrapper
          code="&#39;use strict&#39;

const path = require(&#39;path&#39;)
const autoprefixer = require(&#39;autoprefixer&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)

module.exports = {
  mode: &#39;development&#39;,
  entry: &#39;./src/js/main.js&#39;,
  output: {
    filename: &#39;main.js&#39;,
    path: path.resolve(__dirname, &#39;dist&#39;)
  },
  devServer: {
    static: path.resolve(__dirname, &#39;dist&#39;),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `&lt;style&gt;` tag
            loader: &#39;style-loader&#39;
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: &#39;css-loader&#39;
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: &#39;postcss-loader&#39;,
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
            loader: &#39;sass-loader&#39;,
            options: {
              sassOptions: {
                // Optional: Silence Sass deprecation warnings. See note below.
                silenceDeprecations: [
                  &#39;mixed-decls&#39;,
                  &#39;color-functions&#39;,
                  &#39;global-builtin&#39;,
                  &#39;import&#39;
                ]
              }
            }
          }
        ]
      }
    ]
  }
}
"
          lang="javascript"
        />
        <p>
          下面简要回顾一下为什么我们需要所有这些加载器。<code>style-loader</code> 将 CSS 注入到 HTML 页面 <code>&lt;head&gt;</code> 中的 <code>&lt;style&gt;</code> 元素里，<code>css-loader</code> 帮助处理 <code>@import</code> 和 <code>url()</code>，<code>postcss-loader</code> 是 Autoprefixer 所必需的，而 <code>sass-loader</code> 让我们可以使用
          Sass。
        </p>
        <p><strong>注意：</strong>使用最新版本的 Dart Sass 编译源 Sass 文件时会显示 Sass 弃用警告。这不会阻止 Bootstrap 的编译或使用。我们正在 <a href="https://github.com/twbs/bootstrap/issues/40962">着手进行长期修复</a> ，但在此期间可以 忽略这些弃用提示。</p>
      </li>
      <li>
        <p><strong>现在，让我们导入 Bootstrap 的 CSS。</strong>在 <code>src/scss/styles.scss</code> 中添加以下内容，以导入 Bootstrap 的所有源 Sass。</p>
        <CodeWrapper
          code='// Import all of Bootstrap’s CSS
@import "bootstrap/scss/bootstrap";
'
          lang="scss"
        />
        <p>
          <em>如果你愿意，也可以单独导入我们的样式表。 <a href="/customize/sass#importing">阅读我们的 Sass 导入文档</a> 了解详情。</em>
        </p>
      </li>
      <li>
        <p><strong>接下来我们加载 CSS 并导入 Bootstrap 的 JavaScript。</strong>在 <code>src/js/main.js</code> 中添加以下内容，以加载 CSS 并导入 Bootstrap 的所有 JS。Popper 将通过 Bootstrap 自动导入。</p>
        <CodeWrapper
          code="// Import our custom CSS
import &#39;../scss/styles.scss&#39;

// Import all of Bootstrap’s JS
import * as bootstrap from &#39;bootstrap&#39;
"
          lang="javascript"
        />
        <p>你也可以按需单独导入 JavaScript 插件，以减小打包体积：</p>
        <CodeWrapper
          code="import Alert from &#39;bootstrap/js/dist/alert&#39;

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from &#39;bootstrap&#39;
"
          lang="javascript"
        />
        <p>
          <em> <a href="/getting-started/javascript/">阅读我们的 JavaScript 文档</a> ，了解有关如何使用 Bootstrap 插件的更多信息。</em>
        </p>
      </li>
      <li>
        <p><strong>大功告成！🎉</strong>Bootstrap 的源 Sass 和 JS 已完全加载，你的本地开发服务器现在应该如下所示：</p>
        <img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/webpack-dev-server-bootstrap.png" alt="正在运行 Bootstrap 的 Webpack 开发服务器" />
        <p>
          现在你可以开始添加任何想要使用的 Bootstrap 组件了。请务必
          <a href="https://github.com/twbs/examples/tree/main/webpack">查看完整的 Webpack 示例项目</a> ， 了解如何引入额外的自定义 Sass，以及如何通过仅导入所需的 Bootstrap CSS 和 JS 部分来优化构建。
        </p>
      </li>
    </ol>
    <h2 id="production-optimizations">生产环境优化<a class="anchor-link" href="#production-optimizations" aria-label="生产环境优化链接"></a></h2>
    <p>
      根据你的配置，你可能希望实施一些额外的安全性和速度优化，以便在生产环境中运行项目。请注意，这些优化并未应用于
      <a href="https://github.com/twbs/examples/tree/main/webpack">Webpack 示例项目</a> ，需由你自行实施。
    </p>
    <h3 id="extracting-css">提取 CSS<a class="anchor-link" href="#extracting-css" aria-label="提取 CSS 链接"></a></h3>
    <p>我们上面配置的 <code>style-loader</code> 会方便地将 CSS 输出到打包文件中，因此无需在 <code>dist/index.html</code> 中手动加载 CSS 文件。不过，这种方式可能无法与严格的内容安全策略（CSP）配合使用，而且由于打包体积较大，它可能会成为应用程序的瓶颈。</p>
    <p>要将 CSS 分离出来，以便直接从 <code>dist/index.html</code> 中加载，请使用 <code>mini-css-extract-loader</code> Webpack 插件。</p>
    <p>首先，安装该插件：</p>
    <CodeWrapper
      code="npm install --save-dev mini-css-extract-plugin
"
      lang="shell"
    />
    <p>然后在 Webpack 配置中实例化并使用该插件：</p>
    <CodeWrapper
      code="--- a/webpack.config.js
+++ b/webpack.config.js
@@ -3,6 +3,7 @@
 const path = require(&#39;path&#39;)
 const autoprefixer = require(&#39;autoprefixer&#39;)
 const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
+const miniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;)

 module.exports = {
   mode: &#39;development&#39;,
@@ -17,7 +18,8 @@ module.exports = {
     hot: true
   },
   plugins: [
-    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })
+    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; }),
+    new miniCssExtractPlugin()
   ],
   module: {
     rules: [
@@ -25,8 +27,8 @@ module.exports = {
         test: /\.(scss)$/,
         use: [
           {
-            // Adds CSS to the DOM by injecting a `&lt;style&gt;` tag
-            loader: &#39;style-loader&#39;
+            // Extracts CSS for each JS file that includes CSS
+            loader: miniCssExtractPlugin.loader
           },
           {
"
      lang="diff"
    />
    <p>再次运行 <code>npm run build</code> 后，会出现一个新文件 <code>dist/main.css</code>，其中包含 <code>src/js/main.js</code> 导入的所有 CSS。如果你现在在浏览器中查看 <code>dist/index.html</code>，样式会缺失，因为它现在位于 <code>dist/main.css</code> 中。你可以像这样在 <code>dist/index.html</code> 中包含生成的 CSS：</p>
    <CodeWrapper
      code='--- a/dist/index.html
+++ b/dist/index.html
@@ -3,6 +3,7 @@
   &lt;head&gt;
     &lt;meta charset="utf-8"&gt;
     &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
+    &lt;link rel="stylesheet" href="./main.css"&gt;
     &lt;title&gt;Bootstrap w/ Webpack&lt;/title&gt;
   &lt;/head&gt;
   &lt;body&gt;
'
      lang="diff"
    />
    <h3 id="extracting-svg-files">提取 SVG 文件<a class="anchor-link" href="#extracting-svg-files" aria-label="提取 SVG 文件链接"></a></h3>
    <p>Bootstrap 的 CSS 通过内联的 <code>data:</code> URI 多次引用了 SVG 文件。如果你为项目定义了阻止图片使用 <code>data:</code> URI 的内容安全策略，那么这些 SVG 文件将无法加载。你可以使用 Webpack 的资源模块（asset modules）功能提取这些内联 SVG 文件，从而解决此问题。</p>
    <p>像下面这样配置 Webpack 来提取内联 SVG 文件：</p>
    <CodeWrapper
      code="--- a/webpack.config.js
+++ b/webpack.config.js
@@ -23,6 +23,14 @@ module.exports = {
   },
   module: {
     rules: [
+      {
+        mimetype: &#39;image/svg+xml&#39;,
+        scheme: &#39;data&#39;,
+        type: &#39;asset/resource&#39;,
+        generator: {
+          filename: &#39;icons/[hash].svg&#39;
+        }
+      },
       {
         test: /\.(scss)$/,
         use: [
"
      lang="diff"
    />
    <p>再次运行 <code>npm run build</code> 后，你会发现 SVG 文件已被提取到 <code>dist/icons</code>，并在 CSS 中被正确引用。</p>
    <GuideFooter />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#what-is-webpack">什么是 Webpack？</a></li>
      <li><a href="#setup">准备工作</a></li>
      <li><a href="#project-structure">项目结构</a></li>
      <li><a href="#configure-webpack">配置 Webpack</a></li>
      <li><a href="#import-bootstrap">导入 Bootstrap</a></li>
      <li>
        <a href="#production-optimizations">生产环境优化</a>
        <ul>
          <li><a href="#extracting-css">提取 CSS</a></li>
          <li><a href="#extracting-svg-files">提取 SVG 文件</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
