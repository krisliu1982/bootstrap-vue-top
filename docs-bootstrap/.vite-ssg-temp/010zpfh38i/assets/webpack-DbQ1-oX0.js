import { a as GuideFooter_default, i as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$2 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$3 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/getting-started/webpack.vue
var _sfc_main = {
	__name: "webpack",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$3;
			const _component_CodeWrapper = _sfc_main$2;
			const _component_GuideFooter = GuideFooter_default;
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>Bootstrap 与 Webpack</h1><p class="lead">本官方指南介绍如何使用 Webpack 在项目中引入和打包 Bootstrap 的 CSS 和 JavaScript。</p><img class="d-block mx-auto mb-4 img-fluid rounded-3" srcset="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack.png, https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack@2x.png 2x" src="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack.png" width="100%" alt="">`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>想直接跳到结尾？</strong>从<a href="https://github.com/twbs/examples/tree/main/webpack"${_scopeId}>twbs/examples 仓库</a>下载本指南的源码和可运行演示。你也可以 <a href="https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index.html"${_scopeId}>在 StackBlitz 中打开该示例</a> 进行实时编辑。 </p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "想直接跳到结尾？"),
						createTextVNode("从"),
						createVNode("a", { href: "https://github.com/twbs/examples/tree/main/webpack" }, "twbs/examples 仓库"),
						createTextVNode("下载本指南的源码和可运行演示。你也可以 "),
						createVNode("a", { href: "https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index.html" }, "在 StackBlitz 中打开该示例"),
						createTextVNode(" 进行实时编辑。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="what-is-webpack">什么是 Webpack？<a class="anchor-link" href="#what-is-webpack" aria-label="什么是 Webpack？链接"></a></h2><p><a href="https://webpack.js.org/">Webpack</a>是一个 JavaScript 模块打包工具，它处理模块及其依赖以生成静态资源。它简化了对包含多个文件和依赖的复杂 Web 应用的管理。</p><h2 id="setup">准备工作<a class="anchor-link" href="#setup" aria-label="准备工作链接"></a></h2><p>我们将从头开始构建一个使用 Bootstrap 的 Webpack 项目，因此在真正开始之前有一些前提条件和前期步骤。本指南要求你已安装 Node.js，并熟悉终端操作。</p><ol><li><p><strong>创建项目文件夹并设置 npm。</strong>我们将创建 <code>my-project</code> 文件夹，并使用 <code>-y</code> 参数初始化 npm，以避免它向我们询问各种交互式问题。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "mkdir my-project && cd my-project\r\nnpm init -y\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`</li><li><p><strong>安装 Webpack。</strong>接下来我们需要安装 Webpack 的开发依赖：<code>webpack</code> 作为 Webpack 的核心，<code>webpack-cli</code> 用于在终端中运行 Webpack 命令，以及 <code>webpack-dev-server</code> 用于运行本地开发服务器。此外，我们还会安装 <code>html-webpack-plugin</code>，以便将 <code>index.html</code> 存放在 <code>src</code> 目录中，而不是默认的 <code>dist</code> 目录。我们使用 <code>--save-dev</code> 来表明这些依赖仅用于开发，而不用于生产环境。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`</li><li><p><strong>安装 Bootstrap。</strong>现在可以安装 Bootstrap 了。我们还会安装 Popper，因为我们的下拉菜单、弹出框和工具提示依赖它来定位。如果你不打算使用这些组件，可以在此省略 Popper。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "npm i --save bootstrap @popperjs/core\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`</li><li><p><strong>安装其他依赖。</strong>除了 Webpack 和 Bootstrap 之外，我们还需要一些其他依赖，以便正确地用 Webpack 导入和打包 Bootstrap 的 CSS 和 JS。这些依赖包括 Sass、一些加载器和 Autoprefixer。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`</li></ol><p>现在所有必要的依赖都已安装完毕，我们可以着手创建项目文件并导入 Bootstrap 了。</p><h2 id="project-structure">项目结构<a class="anchor-link" href="#project-structure" aria-label="项目结构链接"></a></h2><p>我们已经创建了 <code>my-project</code> 文件夹并初始化了 npm。现在我们将再创建 <code>src</code> 和 <code>dist</code> 文件夹，以完善项目结构。在 <code>my-project</code> 中运行以下命令，或按下面所示手动创建文件夹和文件结构。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "mkdir {src,src/js,src/scss}\r\ntouch src/index.html src/js/main.js src/scss/styles.scss webpack.config.js\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<p>完成后，你的完整项目应该如下所示：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "my-project/\r\n├── src/\r\n│   ├── js/\r\n│   │   └── main.js\r\n│   ├── scss/\r\n│   │   └── styles.scss\r\n│   └── index.html\r\n├── package-lock.json\r\n├── package.json\r\n└── webpack.config.js\r\n",
				lang: "text"
			}, null, _parent));
			_push(`<p> 至此，一切都在正确的位置上，但 Webpack 无法运行，因为我们还没有填写 <code>webpack.config.js</code>。 </p><h2 id="configure-webpack">配置 Webpack<a class="anchor-link" href="#configure-webpack" aria-label="配置 Webpack 链接"></a></h2><p>依赖已安装，项目文件夹也已准备好开始编码，现在我们可以配置 Webpack 并在本地运行项目了。</p><ol><li><p><strong>在你的编辑器中打开 <code>webpack.config.js</code>。</strong>由于它是空白的，我们需要添加一些样板配置，以便启动服务器。配置的这一部分告诉 Webpack 在哪里查找项目的 JavaScript、将编译后的代码输出到哪里（<code>dist</code>），以及开发服务器 应该如何运行（从 <code>dist</code> 文件夹读取并支持热重载）。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "'use strict'\r\n\r\nconst path = require('path')\r\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\r\n\r\nmodule.exports = {\r\n  mode: 'development',\r\n  entry: './src/js/main.js',\r\n  output: {\r\n    filename: 'main.js',\r\n    path: path.resolve(__dirname, 'dist')\r\n  },\r\n  devServer: {\r\n    static: path.resolve(__dirname, 'dist'),\r\n    port: 8080,\r\n    hot: true\r\n  },\r\n  plugins: [\r\n    new HtmlWebpackPlugin({ template: './src/index.html' })\r\n  ]\r\n}\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`</li><li><p><strong>接下来我们填写 <code>src/index.html</code>。</strong>这是 Webpack 将在浏览器中加载的 HTML 页面，用于使用我们稍后步骤中添加的打包 CSS 和 JS。在此之前，我们必须给它一些可渲染的内容，并引入上一步生成的 <code>output</code> JS。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <title>Bootstrap w/ Webpack</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"container py-4 px-3 mx-auto\">\r\n      <h1>Hello, Bootstrap and Webpack!</h1>\r\n      <button class=\"btn btn-primary\">Primary button</button>\r\n    </div>\r\n  </body>\r\n</html>",
				lang: "html"
			}, null, _parent));
			_push(`<p> 我们在这里通过 <code>div class=&quot;container&quot;</code> 和 <code>&lt;button&gt;</code> 加入了一点 Bootstrap 样式，以便在 Webpack 加载 Bootstrap 的 CSS 时能够看出效果。 </p></li><li><p><strong>现在我们需要一个 npm 脚本来运行 Webpack。</strong>打开 <code>package.json</code> 并添加下面所示的 <code>start</code> 脚本（你应该已经有 test 脚本了）。我们将使用这个脚本启动本地 Webpack 开发服务器。你也可以添加下面所示的 <code>build</code> 脚本以构建项目。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "{\r\n  // ...\r\n  \"scripts\": {\r\n    \"start\": \"webpack serve\",\r\n    \"build\": \"webpack build --mode=production\",\r\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\r\n  },\r\n  // ...\r\n}\r\n",
				lang: "json"
			}, null, _parent));
			_push(`</li><li><p><strong>最后，我们就可以启动 Webpack 了。</strong>在终端的 <code>my-project</code> 文件夹中，运行刚刚添加的 npm 脚本：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "npm start\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/webpack-dev-server.png" alt="正在运行的 Webpack 开发服务器"></li></ol><p>在本指南接下来的最后一节中，我们将配置 Webpack 加载器，并导入 Bootstrap 的所有 CSS 和 JavaScript。</p><h2 id="import-bootstrap">导入 Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="导入 Bootstrap 链接"></a></h2><p>将 Bootstrap 导入 Webpack 需要用到我们在第一节中安装的加载器。我们已经通过 npm 安装了它们，但现在还需要配置 Webpack 来使用它们。</p><ol><li><p><strong>在 <code>webpack.config.js</code> 中设置加载器。</strong>你的配置文件现在已完成，应与下面的代码片段一致。这里唯一新增的部分是 <code>module</code> 段。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "'use strict'\r\n\r\nconst path = require('path')\r\nconst autoprefixer = require('autoprefixer')\r\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\r\n\r\nmodule.exports = {\r\n  mode: 'development',\r\n  entry: './src/js/main.js',\r\n  output: {\r\n    filename: 'main.js',\r\n    path: path.resolve(__dirname, 'dist')\r\n  },\r\n  devServer: {\r\n    static: path.resolve(__dirname, 'dist'),\r\n    port: 8080,\r\n    hot: true\r\n  },\r\n  plugins: [\r\n    new HtmlWebpackPlugin({ template: './src/index.html' })\r\n  ],\r\n  module: {\r\n    rules: [\r\n      {\r\n        test: /\\.(scss)$/,\r\n        use: [\r\n          {\r\n            // Adds CSS to the DOM by injecting a `<style>` tag\r\n            loader: 'style-loader'\r\n          },\r\n          {\r\n            // Interprets `@import` and `url()` like `import/require()` and will resolve them\r\n            loader: 'css-loader'\r\n          },\r\n          {\r\n            // Loader for webpack to process CSS with PostCSS\r\n            loader: 'postcss-loader',\r\n            options: {\r\n              postcssOptions: {\r\n                plugins: [\r\n                  autoprefixer\r\n                ]\r\n              }\r\n            }\r\n          },\r\n          {\r\n            // Loads a SASS/SCSS file and compiles it to CSS\r\n            loader: 'sass-loader',\r\n            options: {\r\n              sassOptions: {\r\n                // Optional: Silence Sass deprecation warnings. See note below.\r\n                silenceDeprecations: [\r\n                  'mixed-decls',\r\n                  'color-functions',\r\n                  'global-builtin',\r\n                  'import'\r\n                ]\r\n              }\r\n            }\r\n          }\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p> 下面简要回顾一下为什么我们需要所有这些加载器。<code>style-loader</code> 将 CSS 注入到 HTML 页面 <code>&lt;head&gt;</code> 中的 <code>&lt;style&gt;</code> 元素里，<code>css-loader</code> 帮助处理 <code>@import</code> 和 <code>url()</code>，<code>postcss-loader</code> 是 Autoprefixer 所必需的，而 <code>sass-loader</code> 让我们可以使用 Sass。 </p><p><strong>注意：</strong>使用最新版本的 Dart Sass 编译源 Sass 文件时会显示 Sass 弃用警告。这不会阻止 Bootstrap 的编译或使用。我们正在<a href="https://github.com/twbs/bootstrap/issues/40962">着手进行长期修复</a>，但在此期间可以 忽略这些弃用提示。 </p></li><li><p><strong>现在，让我们导入 Bootstrap 的 CSS。</strong>在 <code>src/scss/styles.scss</code> 中添加以下内容，以导入 Bootstrap 的所有源 Sass。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Import all of Bootstrap’s CSS\r\n@import \"bootstrap/scss/bootstrap\";\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p><em>如果你愿意，也可以单独导入我们的样式表。<a href="/customize/sass#importing">阅读我们的 Sass 导入文档</a>了解详情。</em></p></li><li><p><strong>接下来我们加载 CSS 并导入 Bootstrap 的 JavaScript。</strong>在 <code>src/js/main.js</code> 中添加以下内容，以加载 CSS 并导入 Bootstrap 的所有 JS。Popper 将通过 Bootstrap 自动导入。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Import our custom CSS\r\nimport '../scss/styles.scss'\r\n\r\n// Import all of Bootstrap’s JS\r\nimport * as bootstrap from 'bootstrap'\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p>你也可以按需单独导入 JavaScript 插件，以减小打包体积：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "import Alert from 'bootstrap/js/dist/alert'\r\n\r\n// or, specify which plugins you need:\r\nimport { Tooltip, Toast, Popover } from 'bootstrap'\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p><em><a href="/getting-started/javascript/">阅读我们的 JavaScript 文档</a>，了解有关如何使用 Bootstrap 插件的更多信息。</em></p></li><li><p><strong>大功告成！🎉</strong>Bootstrap 的源 Sass 和 JS 已完全加载，你的本地开发服务器现在应该如下所示：</p><img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/webpack-dev-server-bootstrap.png" alt="正在运行 Bootstrap 的 Webpack 开发服务器"><p> 现在你可以开始添加任何想要使用的 Bootstrap 组件了。请务必 <a href="https://github.com/twbs/examples/tree/main/webpack">查看完整的 Webpack 示例项目</a>， 了解如何引入额外的自定义 Sass，以及如何通过仅导入所需的 Bootstrap CSS 和 JS 部分来优化构建。 </p></li></ol><h2 id="production-optimizations">生产环境优化<a class="anchor-link" href="#production-optimizations" aria-label="生产环境优化链接"></a></h2><p> 根据你的配置，你可能希望实施一些额外的安全性和速度优化，以便在生产环境中运行项目。请注意，这些优化并未应用于 <a href="https://github.com/twbs/examples/tree/main/webpack">Webpack 示例项目</a>，需由你自行实施。 </p><h3 id="extracting-css">提取 CSS<a class="anchor-link" href="#extracting-css" aria-label="提取 CSS 链接"></a></h3><p>我们上面配置的 <code>style-loader</code> 会方便地将 CSS 输出到打包文件中，因此无需在 <code>dist/index.html</code> 中手动加载 CSS 文件。不过，这种方式可能无法与严格的内容安全策略（CSP）配合使用，而且由于打包体积较大，它可能会成为应用程序的瓶颈。</p><p>要将 CSS 分离出来，以便直接从 <code>dist/index.html</code> 中加载，请使用 <code>mini-css-extract-loader</code> Webpack 插件。</p><p>首先，安装该插件：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "npm install --save-dev mini-css-extract-plugin\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<p>然后在 Webpack 配置中实例化并使用该插件：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "--- a/webpack.config.js\r\n+++ b/webpack.config.js\r\n@@ -3,6 +3,7 @@\r\n const path = require('path')\r\n const autoprefixer = require('autoprefixer')\r\n const HtmlWebpackPlugin = require('html-webpack-plugin')\r\n+const miniCssExtractPlugin = require('mini-css-extract-plugin')\r\n\r\n module.exports = {\r\n   mode: 'development',\r\n@@ -17,7 +18,8 @@ module.exports = {\r\n     hot: true\r\n   },\r\n   plugins: [\r\n-    new HtmlWebpackPlugin({ template: './src/index.html' })\r\n+    new HtmlWebpackPlugin({ template: './src/index.html' }),\r\n+    new miniCssExtractPlugin()\r\n   ],\r\n   module: {\r\n     rules: [\r\n@@ -25,8 +27,8 @@ module.exports = {\r\n         test: /\\.(scss)$/,\r\n         use: [\r\n           {\r\n-            // Adds CSS to the DOM by injecting a `<style>` tag\r\n-            loader: 'style-loader'\r\n+            // Extracts CSS for each JS file that includes CSS\r\n+            loader: miniCssExtractPlugin.loader\r\n           },\r\n           {\r\n",
				lang: "diff"
			}, null, _parent));
			_push(`<p> 再次运行 <code>npm run build</code> 后，会出现一个新文件 <code>dist/main.css</code>，其中包含 <code>src/js/main.js</code> 导入的所有 CSS。如果你现在在浏览器中查看 <code>dist/index.html</code>，样式会缺失，因为它现在位于 <code>dist/main.css</code> 中。你可以像这样在 <code>dist/index.html</code> 中包含生成的 CSS： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "--- a/dist/index.html\r\n+++ b/dist/index.html\r\n@@ -3,6 +3,7 @@\r\n   <head>\r\n     <meta charset=\"utf-8\">\r\n     <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n+    <link rel=\"stylesheet\" href=\"./main.css\">\r\n     <title>Bootstrap w/ Webpack</title>\r\n   </head>\r\n   <body>\r\n",
				lang: "diff"
			}, null, _parent));
			_push(`<h3 id="extracting-svg-files">提取 SVG 文件<a class="anchor-link" href="#extracting-svg-files" aria-label="提取 SVG 文件链接"></a></h3><p> Bootstrap 的 CSS 通过内联的 <code>data:</code> URI 多次引用了 SVG 文件。如果你为项目定义了阻止图片使用 <code>data:</code> URI 的内容安全策略，那么这些 SVG 文件将无法加载。你可以使用 Webpack 的资源模块（asset modules）功能提取这些内联 SVG 文件，从而解决此问题。 </p><p>像下面这样配置 Webpack 来提取内联 SVG 文件：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "--- a/webpack.config.js\r\n+++ b/webpack.config.js\r\n@@ -23,6 +23,14 @@ module.exports = {\r\n   },\r\n   module: {\r\n     rules: [\r\n+      {\r\n+        mimetype: 'image/svg+xml',\r\n+        scheme: 'data',\r\n+        type: 'asset/resource',\r\n+        generator: {\r\n+          filename: 'icons/[hash].svg'\r\n+        }\r\n+      },\r\n       {\r\n         test: /\\.(scss)$/,\r\n         use: [\r\n",
				lang: "diff"
			}, null, _parent));
			_push(`<p>再次运行 <code>npm run build</code> 后，你会发现 SVG 文件已被提取到 <code>dist/icons</code>，并在 CSS 中被正确引用。</p>`);
			_push(ssrRenderComponent(_component_GuideFooter, null, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#what-is-webpack">什么是 Webpack？</a></li><li><a href="#setup">准备工作</a></li><li><a href="#project-structure">项目结构</a></li><li><a href="#configure-webpack">配置 Webpack</a></li><li><a href="#import-bootstrap">导入 Bootstrap</a></li><li><a href="#production-optimizations">生产环境优化</a><ul><li><a href="#extracting-css">提取 CSS</a></li><li><a href="#extracting-svg-files">提取 SVG 文件</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/getting-started/webpack.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
