import { a as GuideFooter_default, i as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$2 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$3 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/getting-started/parcel.vue
var _sfc_main = {
	__name: "parcel",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$3;
			const _component_CodeWrapper = _sfc_main$2;
			const _component_GuideFooter = GuideFooter_default;
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>Bootstrap 与 Parcel</h1><p class="lead">关于如何使用 Parcel 在项目中引入并打包 Bootstrap 的 CSS 和 JavaScript 的官方指南。</p><img class="d-block mx-auto mb-4 img-fluid rounded-3" srcset="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-parcel.png, https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-parcel@2x.png 2x" src="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-parcel.png" width="100%" alt="">`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>想直接跳到结尾？</strong>从<a href="https://github.com/twbs/examples/tree/main/parcel"${_scopeId}>twbs/examples 仓库</a>下载本指南的源代码和可运行的演示。你也可以 <a href="https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=index.html"${_scopeId}>在 StackBlitz 中打开示例</a>， 但无法在其中运行，因为 StackBlitz 目前尚不支持 Parcel。 </p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "想直接跳到结尾？"),
						createTextVNode("从"),
						createVNode("a", { href: "https://github.com/twbs/examples/tree/main/parcel" }, "twbs/examples 仓库"),
						createTextVNode("下载本指南的源代码和可运行的演示。你也可以 "),
						createVNode("a", { href: "https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=index.html" }, "在 StackBlitz 中打开示例"),
						createTextVNode("， 但无法在其中运行，因为 StackBlitz 目前尚不支持 Parcel。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="what-is-parcel">什么是 Parcel？<a class="anchor-link" href="#what-is-parcel" aria-label="什么是 Parcel？链接"></a></h2><p><a href="https://parceljs.org/">Parcel</a>是一个 Web 应用打包工具，开箱即用的零配置即可简化开发流程。它提供了更高级打包工具中的特性，同时专注于易用性，非常适合希望快速上手的开发者。</p><h2 id="setup">搭建<a class="anchor-link" href="#setup" aria-label="搭建链接"></a></h2><p>我们将从零开始构建一个使用 Bootstrap 的 Parcel 项目，因此在真正开始之前还有一些前置条件和准备步骤。本指南要求你已安装 Node.js，并熟悉终端操作。</p><ol><li><p><strong>创建项目文件夹并初始化 npm。</strong>我们将创建 <code>my-project</code> 文件夹，并使用 <code>-y</code> 参数初始化 npm，以避免它询问各种交互式问题。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "mkdir my-project && cd my-project\r\nnpm init -y\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`</li><li><p><strong>安装 Parcel。</strong>与我们的 Webpack 指南不同，这里只有一个构建工具依赖。Parcel 会在检测到语言转换器（如 Sass）时自动安装它们。我们使用 <code>--save-dev</code> 来表示该依赖仅用于开发阶段，不用于生产环境。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "npm i --save-dev parcel\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`</li><li><p><strong>安装 Bootstrap。</strong>现在我们可以安装 Bootstrap 了。我们还会安装 Popper，因为下拉菜单、弹出框和工具提示都依赖它来定位。如果你不打算使用这些组件，可以在这里省略 Popper。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "npm i --save bootstrap @popperjs/core\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`</li></ol><p>现在所有必要的依赖都已安装完毕，我们可以开始创建项目文件并导入 Bootstrap 了。</p><h2 id="project-structure">项目结构<a class="anchor-link" href="#project-structure" aria-label="项目结构链接"></a></h2><p>我们已经创建了 <code>my-project</code> 文件夹并初始化了 npm。现在我们将创建 <code>src</code> 文件夹、样式表和 JavaScript 文件，以完善项目结构。请在 <code>my-project</code> 中运行以下命令，或按下图手动创建文件夹和文件结构。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "mkdir {src,src/js,src/scss}\r\ntouch src/index.html src/js/main.js src/scss/styles.scss\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<p>完成后，你的完整项目结构应如下所示：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "my-project/\r\n├── src/\r\n│   ├── js/\r\n│   │   └── main.js\r\n│   ├── scss/\r\n│   │   └── styles.scss\r\n│   └── index.html\r\n├── package-lock.json\r\n└── package.json\r\n",
				lang: "text"
			}, null, _parent));
			_push(`<p>到这里，所有文件都已就位，但 Parcel 还需要一个 HTML 页面和 npm 脚本才能启动服务器。</p><h2 id="configure-parcel">配置 Parcel<a class="anchor-link" href="#configure-parcel" aria-label="配置 Parcel 链接"></a></h2><p>依赖已安装完毕，项目文件夹也已准备好开始编码，现在我们可以配置 Parcel 并在本地运行项目了。Parcel 本身按设计无需配置文件，但我们确实需要一个 npm 脚本和一个 HTML 文件来启动服务器。</p><ol><li><p><strong>填写 <code>src/index.html</code> 文件。</strong>Parcel 需要一个页面来渲染，所以我们使用 <code>index.html</code> 页面来搭建一些基本的 HTML，并包含我们的 CSS 和 JavaScript 文件。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <title>Bootstrap w/ Parcel</title>\r\n    <link rel=\"stylesheet\" href=\"scss/styles.scss\">\r\n    <script type=\"module\" src=\"js/main.js\"><\/script>\r\n  </head>\r\n  <body>\r\n    <div class=\"container py-4 px-3 mx-auto\">\r\n      <h1>Hello, Bootstrap and Parcel!</h1>\r\n      <button class=\"btn btn-primary\">Primary button</button>\r\n    </div>\r\n  </body>\r\n</html>",
				lang: "html"
			}, null, _parent));
			_push(`<p> 我们在这里通过 <code>div class=&quot;container&quot;</code> 和 <code>&lt;button&gt;</code> 加入了一点 Bootstrap 样式，以便能看到 Parcel 何时加载了 Bootstrap 的 CSS。 </p><p> Parcel 会自动检测到我们使用了 Sass，并安装 <a href="https://parceljs.org/languages/sass/">Sass Parcel 插件</a>以支持它。不过，如果你愿意，也可以手动运行 <code>npm i --save-dev @parcel/transformer-sass</code>。 </p></li><li><p><strong>添加 Parcel 的 npm 脚本。</strong>打开 <code>package.json</code>，在 <code>scripts</code> 对象中添加以下 <code>start</code> 脚本。我们将使用该脚本启动 Parcel 开发服务器，并渲染编译到 <code>dist</code> 目录后我们创建的 HTML 文件。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "{\r\n   // ...\r\n   \"scripts\": {\r\n     \"start\": \"parcel serve src/index.html --public-url / --dist-dir dist\",\r\n     \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\r\n   },\r\n   // ...\r\n}\r\n",
				lang: "json"
			}, null, _parent));
			_push(`</li><li><p><strong>最后，我们可以启动 Parcel 了。</strong>在终端中进入 <code>my-project</code> 文件夹，运行刚刚添加的 npm 脚本：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "npm start\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/parcel-dev-server.png" alt="Parcel 开发服务器正在运行"></li></ol><p>在本指南接下来的最后一节中，我们将导入 Bootstrap 的全部 CSS 和 JavaScript。</p><h2 id="import-bootstrap">导入 Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="导入 Bootstrap 链接"></a></h2><p>将 Bootstrap 导入 Parcel 需要两处导入：一处导入 <code>styles.scss</code>，一处导入 <code>main.js</code>。</p><ol><li><p><strong>导入 Bootstrap 的 CSS。</strong>将以下内容添加到 <code>src/scss/styles.scss</code>，以导入 Bootstrap 的所有源 Sass。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Import all of Bootstrap’s CSS\r\n@import \"bootstrap/scss/bootstrap\";\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p><em>如果你愿意，也可以单独导入各个样式表。详情请参阅<a href="/customize/sass#importing">我们的 Sass 导入文档</a>。</em></p><p><strong>可选：</strong>使用最新版本的 Dart Sass 时，你可能会看到 Sass 弃用警告。可以通过在根文件夹的 <code>.sassrc.js</code> 文件中添加以下配置来消除这些警告：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "module.exports = {\r\n  silenceDeprecations: ['import', 'mixed-decls', 'color-functions', 'global-builtin']\r\n}\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`</li><li><p><strong>导入 Bootstrap 的 JS。</strong>将以下内容添加到 <code>src/js/main.js</code>，以导入 Bootstrap 的所有 JS。Popper 会通过 Bootstrap 自动导入。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Import all of Bootstrap’s JS\r\nimport * as bootstrap from 'bootstrap'\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p>你也可以按需单独导入 JavaScript 插件，以减小打包体积：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "import Alert from 'bootstrap/js/dist/alert'\r\n\r\n// or, specify which plugins you need:\r\nimport { Tooltip, Toast, Popover } from 'bootstrap'\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p><em><a href="/getting-started/javascript/">阅读我们的 JavaScript 文档</a>，了解更多关于如何使用 Bootstrap 插件的信息。</em></p></li><li><p><strong>大功告成！🎉</strong>Bootstrap 的源 Sass 和 JS 已完全加载，你的本地开发服务器现在应该如下所示：</p><img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/parcel-dev-server-bootstrap.png" alt="Parcel 开发服务器正在运行并加载了 Bootstrap"><p> 现在你可以开始添加任何想要使用的 Bootstrap 组件了。请务必 <a href="https://github.com/twbs/examples/tree/main/parcel">查看完整的 Parcel 示例项目</a>， 了解如何引入额外的自定义 Sass，以及如何仅导入所需的 Bootstrap CSS 和 JS 部分来优化构建。 </p></li></ol>`);
			_push(ssrRenderComponent(_component_GuideFooter, null, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#what-is-parcel">什么是 Parcel？</a></li><li><a href="#setup">搭建</a></li><li><a href="#project-structure">项目结构</a></li><li><a href="#configure-parcel">配置 Parcel</a></li><li><a href="#import-bootstrap">导入 Bootstrap</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/getting-started/parcel.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
