import { i as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$2 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/getting-started/contents.vue
var _sfc_main = {
	__name: "contents",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$2;
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>目录内容</h1><p class="lead">了解 Bootstrap 包含的内容，包括编译版本和源代码版本。</p><h2 id="compiled-bootstrap">编译后的 Bootstrap<a class="anchor-link" href="#compiled-bootstrap" aria-label="编译后的 Bootstrap 链接"></a></h2><p>下载后，解压压缩包，你会看到类似下面的目录结构：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "bootstrap/\r\n├── css/\r\n│   ├── bootstrap-grid.css\r\n│   ├── bootstrap-grid.css.map\r\n│   ├── bootstrap-grid.min.css\r\n│   ├── bootstrap-grid.min.css.map\r\n│   ├── bootstrap-grid.rtl.css\r\n│   ├── bootstrap-grid.rtl.css.map\r\n│   ├── bootstrap-grid.rtl.min.css\r\n│   ├── bootstrap-grid.rtl.min.css.map\r\n│   ├── bootstrap-reboot.css\r\n│   ├── bootstrap-reboot.css.map\r\n│   ├── bootstrap-reboot.min.css\r\n│   ├── bootstrap-reboot.min.css.map\r\n│   ├── bootstrap-reboot.rtl.css\r\n│   ├── bootstrap-reboot.rtl.css.map\r\n│   ├── bootstrap-reboot.rtl.min.css\r\n│   ├── bootstrap-reboot.rtl.min.css.map\r\n│   ├── bootstrap-utilities.css\r\n│   ├── bootstrap-utilities.css.map\r\n│   ├── bootstrap-utilities.min.css\r\n│   ├── bootstrap-utilities.min.css.map\r\n│   ├── bootstrap-utilities.rtl.css\r\n│   ├── bootstrap-utilities.rtl.css.map\r\n│   ├── bootstrap-utilities.rtl.min.css\r\n│   ├── bootstrap-utilities.rtl.min.css.map\r\n│   ├── bootstrap.css\r\n│   ├── bootstrap.css.map\r\n│   ├── bootstrap.min.css\r\n│   ├── bootstrap.min.css.map\r\n│   ├── bootstrap.rtl.css\r\n│   ├── bootstrap.rtl.css.map\r\n│   ├── bootstrap.rtl.min.css\r\n│   └── bootstrap.rtl.min.css.map\r\n└── js/\r\n    ├── bootstrap.bundle.js\r\n    ├── bootstrap.bundle.js.map\r\n    ├── bootstrap.bundle.min.js\r\n    ├── bootstrap.bundle.min.js.map\r\n    ├── bootstrap.esm.js\r\n    ├── bootstrap.esm.js.map\r\n    ├── bootstrap.esm.min.js\r\n    ├── bootstrap.esm.min.js.map\r\n    ├── bootstrap.js\r\n    ├── bootstrap.js.map\r\n    ├── bootstrap.min.js\r\n    └── bootstrap.min.js.map\r\n",
				lang: "text"
			}, null, _parent));
			_push(`<p> 这是 Bootstrap 最基本的形式：编译好的文件，可直接嵌入几乎任何 Web 项目中快速使用。我们提供了编译后的 CSS 和 JS（<code>bootstrap.*</code>），以及编译并压缩后的 CSS 和 JS（<code>bootstrap.min.*</code>）。<a href="https://web.dev/articles/source-maps">Source map</a>（<code>bootstrap.*.map</code>）可用于某些浏览器的开发者工具。打包的 JS 文件（<code>bootstrap.bundle.js</code> 和压缩版 <code>bootstrap.bundle.min.js</code>）包含<a href="https://popper.js.org/docs/v2/">Popper</a>。 </p><h3 id="css-files">CSS 文件<a class="anchor-link" href="#css-files" aria-label="CSS 文件链接"></a></h3><p>Bootstrap 提供了多种选项，可用于引入我们的部分或全部编译后 CSS。</p><div class="table-responsive"><table class="table"><thead><tr><th>CSS 文件</th><th>布局</th><th>内容</th><th>组件</th><th>工具类</th></tr></thead><tbody><tr><td><code>bootstrap.css</code><br><code>bootstrap.min.css</code><br><code>bootstrap.rtl.css</code><br><code>bootstrap.rtl.min.css</code></td><td>Included</td><td>Included</td><td>Included</td><td>Included</td></tr><tr><td><code>bootstrap-grid.css</code><br><code>bootstrap-grid.rtl.css</code><br><code>bootstrap-grid.min.css</code><br><code>bootstrap-grid.rtl.min.css</code></td><td><a href="/layout/grid">仅网格系统</a></td><td>—</td><td>—</td><td><a href="/utilities/flex">仅 flex 工具类</a></td></tr><tr><td><code>bootstrap-utilities.css</code><br><code>bootstrap-utilities.rtl.css</code><br><code>bootstrap-utilities.min.css</code><br><code>bootstrap-utilities.rtl.min.css</code></td><td>—</td><td>—</td><td>—</td><td>Included</td></tr><tr><td><code>bootstrap-reboot.css</code><br><code>bootstrap-reboot.rtl.css</code><br><code>bootstrap-reboot.min.css</code><br><code>bootstrap-reboot.rtl.min.css</code></td><td>—</td><td><a href="/content/reboot">仅 Reboot</a></td><td>—</td><td>—</td></tr></tbody></table></div><h3 id="js-files">JS 文件<a class="anchor-link" href="#js-files" aria-label="JS 文件链接"></a></h3><p>同样，我们也提供了多种选项，可用于引入我们的部分或全部编译后 JavaScript。</p><div class="table-responsive"><table class="table"><thead><tr><th>JS 文件</th><th>Popper</th></tr></thead><tbody><tr><td><code>bootstrap.bundle.js</code><br><code>bootstrap.bundle.min.js</code><br></td><td>Included</td></tr><tr><td><code>bootstrap.js</code><br><code>bootstrap.min.js</code><br></td><td>–</td></tr></tbody></table></div><h2 id="bootstrap-source-code">Bootstrap 源代码<a class="anchor-link" href="#bootstrap-source-code" aria-label="Bootstrap 源代码链接"></a></h2><p>Bootstrap 源代码下载包包含编译后的 CSS 和 JavaScript 资源，以及 Sass、JavaScript 源代码和文档。更具体地说，它包含以下内容等：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "bootstrap/\r\n├── dist/\r\n│   ├── css/\r\n│   └── js/\r\n├── site/\r\n│   └──content/\r\n│      └── docs/\r\n│          └── 5.3/\r\n│              └── examples/\r\n├── js/\r\n└── scss/\r\n",
				lang: "text"
			}, null, _parent));
			_push(`<p><code>scss/</code> 和 <code>js/</code> 是我们 CSS 和 JavaScript 的源代码。<code>dist/</code> 文件夹包含上面编译下载部分列出的所有内容。<code>site/content/docs/</code> 文件夹包含我们托管的文档的源代码，包括 Bootstrap 用法的实时示例。</p><p>除此之外，其他任何包含的文件都为软件包、许可信息和开发提供支持。</p>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#compiled-bootstrap">编译后的 Bootstrap</a><ul><li><a href="#css-files">CSS 文件</a></li><li><a href="#js-files">JS 文件</a></li></ul></li><li><a href="#bootstrap-source-code">Bootstrap 源代码</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/getting-started/contents.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
