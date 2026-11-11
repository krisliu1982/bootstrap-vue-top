import { i as _sfc_main$2, u as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$3 } from "./Callout-8L5ndyTZ.js";
import { t as _sfc_main$4 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/layout/breakpoints.vue
var _sfc_main = {
	__name: "breakpoints",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ScssDocs = _sfc_main$1;
			const _component_CodeWrapper = _sfc_main$4;
			const _component_Callout = _sfc_main$3;
			const _component_DocsPager = _sfc_main$2;
			_push(`<!--[--><article class="bd-content"><h1>断点</h1><p class="lead">断点是可自定义的宽度，用于决定响应式布局在 Bootstrap 中跨设备或视口尺寸时的表现。</p><h2 id="core-concepts">核心概念<a class="anchor-link" href="#core-concepts" aria-label="核心概念链接"></a></h2><ul><li><p><strong>断点是响应式设计的基本构件。</strong> 使用它们来控制布局在特定视口或设备尺寸下何时进行调整。</p></li><li><p><strong>使用媒体查询按断点构建你的 CSS。</strong> 媒体查询是 CSS 的一项特性，允许你根据一组浏览器和操作系统参数有条件地应用样式。我们在媒体查询中最常使用 <code>min-width</code>。</p></li><li><p><strong>移动优先、响应式设计是目标。</strong> Bootstrap 的 CSS 旨在应用最少的样式，使布局在最小断点下正常运作，然后在此基础上叠加样式，以适应更大设备的设计。这可以优化你的 CSS、改善渲染时间，并为访问者提供出色的体验。 </p></li></ul><h2 id="available-breakpoints">可用断点<a class="anchor-link" href="#available-breakpoints" aria-label="可用断点链接"></a></h2><p>Bootstrap 包含六个默认断点，有时称为<em>网格层级</em>，用于构建响应式布局。如果你使用我们的 Sass 源文件，可以自定义这些断点。</p><div class="table-responsive"><table class="table"><thead><tr><th>断点</th><th>类中缀</th><th>尺寸</th></tr></thead><tbody><tr><td>超小</td><td><em>无</em></td><td>&lt;576px</td></tr><tr><td>小</td><td><code>sm</code></td><td>≥576px</td></tr><tr><td>中</td><td><code>md</code></td><td>≥768px</td></tr><tr><td>大</td><td><code>lg</code></td><td>≥992px</td></tr><tr><td>超大</td><td><code>xl</code></td><td>≥1200px</td></tr><tr><td>特大</td><td><code>xxl</code></td><td>≥1400px</td></tr></tbody></table></div><p> 每个断点的选取都旨在舒适地容纳宽度为 12 的倍数的容器。断点也代表了常见设备尺寸和视口尺寸的一个子集——它们并不专门针对每一种用例或设备。相反，这些范围提供了一个强大且一致的基础，几乎可以在此基础上为任何设备构建布局。 </p><p> 这些断点可以通过 Sass 自定义——你可以在我们的 <code>_variables.scss</code> 样式表中的 Sass map 里找到它们。 </p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "grid-breakpoints",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<p> 有关如何修改我们的 Sass map 和变量的更多信息和示例，请参阅<a href="/layout/grid#css">网格文档的 CSS 部分</a>。 </p><h2 id="media-queries">媒体查询<a class="anchor-link" href="#media-queries" aria-label="媒体查询链接"></a></h2><p> 由于 Bootstrap 是以移动优先的方式开发的，我们使用了一些 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries">媒体查询</a> 来为我们的布局和界面创建合理的断点。这些断点主要基于最小视口宽度，允许我们在视口变化时放大元素。 </p><h3 id="min-width">最小宽度（Min-width）<a class="anchor-link" href="#min-width" aria-label="最小宽度链接"></a></h3><p>Bootstrap 在用于布局、网格系统和组件的 Sass 源文件中主要使用以下媒体查询范围——即断点。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Source mixins\r\n\r\n// No media query necessary for xs breakpoint as it’s effectively `@media (min-width: 0) { ... }`\r\n@include media-breakpoint-up(sm) { ... }\r\n@include media-breakpoint-up(md) { ... }\r\n@include media-breakpoint-up(lg) { ... }\r\n@include media-breakpoint-up(xl) { ... }\r\n@include media-breakpoint-up(xxl) { ... }\r\n\r\n// Usage\r\n\r\n// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint\r\n.custom-class {\r\n  display: none;\r\n}\r\n@include media-breakpoint-up(sm) {\r\n  .custom-class {\r\n    display: block;\r\n  }\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p>这些 Sass mixin 在我们编译后的 CSS 中使用 Sass 变量中声明的值进行转换。例如：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// X-Small devices (portrait phones, less than 576px)\r\n// No media query for `xs` since this is the default in Bootstrap\r\n\r\n// Small devices (landscape phones, 576px and up)\r\n@media (min-width: 576px) { ... }\r\n\r\n// Medium devices (tablets, 768px and up)\r\n@media (min-width: 768px) { ... }\r\n\r\n// Large devices (desktops, 992px and up)\r\n@media (min-width: 992px) { ... }\r\n\r\n// X-Large devices (large desktops, 1200px and up)\r\n@media (min-width: 1200px) { ... }\r\n\r\n// XX-Large devices (larger desktops, 1400px and up)\r\n@media (min-width: 1400px) { ... }\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<h3 id="max-width">最大宽度（Max-width）<a class="anchor-link" href="#max-width" aria-label="最大宽度链接"></a></h3><p>我们偶尔会使用相反方向的媒体查询（给定的屏幕尺寸<em>或更小</em>）：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// No media query necessary for xs breakpoint as it’s effectively `@media (max-width: 0) { ... }`\r\n@include media-breakpoint-down(sm) { ... }\r\n@include media-breakpoint-down(md) { ... }\r\n@include media-breakpoint-down(lg) { ... }\r\n@include media-breakpoint-down(xl) { ... }\r\n@include media-breakpoint-down(xxl) { ... }\r\n\r\n// Example: Style from medium breakpoint and down\r\n@include media-breakpoint-down(md) {\r\n  .custom-class {\r\n    display: block;\r\n  }\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p>这些 mixin 会采用所声明的断点，从中减去 <code>.02px</code>，并将其用作我们的 <code>max-width</code> 值。例如：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// `xs` returns only a ruleset and no media query\r\n// ... { ... }\r\n\r\n// `sm` applies to x-small devices (portrait phones, less than 576px)\r\n@media (max-width: 575.98px) { ... }\r\n\r\n// `md` applies to small devices (landscape phones, less than 768px)\r\n@media (max-width: 767.98px) { ... }\r\n\r\n// `lg` applies to medium devices (tablets, less than 992px)\r\n@media (max-width: 991.98px) { ... }\r\n\r\n// `xl` applies to large devices (desktops, less than 1200px)\r\n@media (max-width: 1199.98px) { ... }\r\n\r\n// `xxl` applies to x-large devices (large desktops, less than 1400px)\r\n@media (max-width: 1399.98px) { ... }\r\n",
				lang: "scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Callout, {
				name: "info-mediaqueries-breakpoints",
				type: "warning"
			}, null, _parent));
			_push(`<h3 id="single-breakpoint">单一断点<a class="anchor-link" href="#single-breakpoint" aria-label="单一断点链接"></a></h3><p>此外还有媒体查询和 mixin，用于通过最小和最大断点宽度来针对单个屏幕尺寸区段。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "@include media-breakpoint-only(xs) { ... }\r\n@include media-breakpoint-only(sm) { ... }\r\n@include media-breakpoint-only(md) { ... }\r\n@include media-breakpoint-only(lg) { ... }\r\n@include media-breakpoint-only(xl) { ... }\r\n@include media-breakpoint-only(xxl) { ... }\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p>例如 <code>@include media-breakpoint-only(md) { ... }</code> 的结果为：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "@media (min-width: 768px) and (max-width: 991.98px) { ... }\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<h3 id="between-breakpoints">断点之间<a class="anchor-link" href="#between-breakpoints" aria-label="断点之间链接"></a></h3><p>类似地，媒体查询可以跨越多个断点宽度：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "@include media-breakpoint-between(md, xl) { ... }\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p>其结果为：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Example\r\n// Apply styles starting from medium devices and up to extra large devices\r\n@media (min-width: 768px) and (max-width: 1199.98px) { ... }\r\n",
				lang: "scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#core-concepts">核心概念</a></li><li><a href="#available-breakpoints">可用断点</a></li><li><a href="#media-queries">媒体查询</a><ul><li><a href="#min-width">最小宽度（Min-width）</a></li><li><a href="#max-width">最大宽度（Max-width）</a></li><li><a href="#single-breakpoint">单一断点</a></li><li><a href="#between-breakpoints">断点之间</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/layout/breakpoints.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
