import { i as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$2 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/getting-started/rfs.vue
var _sfc_main = {
	__name: "rfs",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$2;
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>RFS</h1><p class="lead">Bootstrap 的尺寸调整引擎会响应式地缩放常用 CSS 属性，以便在各种视口和设备上更好地利用可用空间。</p><h2 id="what-is-rfs">什么是 RFS？<a class="anchor-link" href="#what-is-rfs" aria-label="什么是 RFS？链接"></a></h2><p> Bootstrap 的附属项目<a href="https://github.com/twbs/rfs/tree/v10.0.0">RFS</a>是一个单位尺寸调整引擎，最初是为了调整字体大小而开发的（因此其缩写为 Responsive Font Sizes，即响应式字体大小）。如今，RFS 能够重新缩放大多数带单位值的 CSS 属性，例如 <code>margin</code>、<code>padding</code>、<code>border-radius</code>，甚至 <code>box-shadow</code>。 </p><p>该机制会根据浏览器视口的尺寸自动计算合适的值。它会被编译成混合使用 <code>rem</code> 和视口单位的 <code>calc()</code> 函数，从而实现响应式缩放行为。</p><h2 id="using-rfs">使用 RFS<a class="anchor-link" href="#using-rfs" aria-label="使用 RFS 链接"></a></h2><p>这些 mixin 已包含在 Bootstrap 中，引入 Bootstrap 的 <code>scss</code> 后即可使用。如有需要，RFS 也可以<a href="https://github.com/twbs/rfs/tree/v10.0.0#installation">单独安装</a>。</p><h3 id="using-the-mixins">使用 mixin<a class="anchor-link" href="#using-the-mixins" aria-label="使用 mixin 链接"></a></h3><p><code>rfs()</code> mixin 为 <code>font-size</code>、<code>margin</code>、<code>margin-top</code>、<code>margin-right</code>、<code>margin-bottom</code>、<code>margin-left</code>、<code>padding</code>、<code>padding-top</code>、<code>padding-right</code>、<code>padding-bottom</code> 和 <code>padding-left</code> 提供了简写形式。下面的示例展示了 Sass 源码和编译后的 CSS。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".title {\r\n  @include font-size(4rem);\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".title {\r\n  font-size: calc(1.525rem + 3.3vw);\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .title {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n",
				lang: "css"
			}, null, _parent));
			_push(`<p>其他任何属性都可以像下面这样传给 <code>rfs()</code> mixin：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".selector {\r\n  @include rfs(4rem, border-radius);\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p><code>!important</code> 也可以直接添加到任何你想要的值后面：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".selector {\r\n  @include padding(2.5rem !important);\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<h3 id="using-the-functions">使用函数<a class="anchor-link" href="#using-the-functions" aria-label="使用函数链接"></a></h3><p>如果你不想使用 include，还有两个函数可用：</p><ul><li>如果传入的是 <code>px</code> 值，<code>rfs-value()</code> 会将其转换为 <code>rem</code> 值，其他情况下则返回相同的结果。</li><li>如果该属性需要重新缩放，<code>rfs-fluid-value()</code> 会返回值的流体版本。</li></ul><p> 在这个示例中，我们使用 Bootstrap 内置的<a href="/layout/breakpoints">响应式断点 mixin</a>，仅在 <code>lg</code> 断点以下应用样式。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".selector {\r\n  @include media-breakpoint-down(lg) {\r\n    padding: rfs-fluid-value(2rem);\r\n    font-size: rfs-fluid-value(1.125rem);\r\n  }\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "@media (max-width: 991.98px) {\r\n  .selector {\r\n    padding: calc(1.325rem + 0.9vw);\r\n    font-size: 1.125rem; /* 1.125rem is small enough, so RFS won’t rescale this */\r\n  }\r\n}\r\n",
				lang: "css"
			}, null, _parent));
			_push(`<h2 id="extended-documentation">扩展文档<a class="anchor-link" href="#extended-documentation" aria-label="扩展文档链接"></a></h2><p> RFS 是 Bootstrap 组织下的一个独立项目。关于 RFS 及其配置的更多信息，请参阅其<a href="https://github.com/twbs/rfs/tree/v10.0.0">GitHub 仓库</a>。 </p>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#what-is-rfs">什么是 RFS？</a></li><li><a href="#using-rfs">使用 RFS</a><ul><li><a href="#using-the-mixins">使用 mixin</a></li><li><a href="#using-the-functions">使用函数</a></li></ul></li><li><a href="#extended-documentation">扩展文档</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/getting-started/rfs.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
