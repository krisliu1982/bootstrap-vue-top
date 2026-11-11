import { d as _sfc_main$2, i as _sfc_main$4, p as _sfc_main$1, u as _sfc_main$3 } from "../main.mjs";
import { t as _sfc_main$5 } from "./Callout-8L5ndyTZ.js";
import { t as _sfc_main$6 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/components/breadcrumb.vue
var _sfc_main = {
	__name: "breadcrumb",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_CodeWrapper = _sfc_main$6;
			const _component_Callout = _sfc_main$5;
			const _component_AddedIn = _sfc_main$2;
			const _component_ScssDocs = _sfc_main$3;
			const _component_DocsPager = _sfc_main$4;
			_push(`<!--[--><article class="bd-content"><h1>面包屑导航</h1><p class="lead">在导航层级中指示当前页面的位置，并通过 CSS 自动添加分隔符。</p><h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2><p>使用带有链接列表项的有序或无序列表，即可创建一个基础样式的面包屑导航。你可以根据需要，使用我们的工具类添加额外的样式。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Home</li>\r\n  </ol>\r\n</nav>\r\n\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\r\n  </ol>\r\n</nav>\r\n\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\r\n  </ol>\r\n</nav>" }, null, _parent));
			_push(`<h2 id="dividers">分隔符<a class="anchor-link" href="#dividers" aria-label="分隔符链接"></a></h2><p> 分隔符通过 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before"><code>::before</code></a>和<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content"><code>content</code></a> 在 CSS 中自动添加。你可以通过修改本地 CSS 自定义属性 <code>--bs-breadcrumb-divider</code> 来更改它们，或通过 <code>\$breadcrumb-divider</code> Sass 变量（如有需要，还可使用对应的 RTL 版本 <code>\$breadcrumb-divider-flipped</code>）。我们默认使用 Sass 变量，并将其设置为自定义属性的回退值。这样，你就能获得一个全局分隔符，随时可以覆盖它而无需重新编译 CSS。 </p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<nav style=\"--bs-breadcrumb-divider: '>';\" aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\r\n  </ol>\r\n</nav>" }, null, _parent));
			_push(`<p> 通过 Sass 修改时，需要使用 <a href="https://sass-lang.com/documentation/modules/string/#quote">quote</a>函数为字符串生成引号。例如，使用 <code>&gt;</code> 作为分隔符时，可以这样写： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "$breadcrumb-divider: quote(\">\");",
				lang: "scss"
			}, null, _parent));
			_push(`<p>也可以使用<strong>内嵌的 SVG 图标</strong>。可通过我们的 CSS 自定义属性应用，或使用 Sass 变量。</p>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>内联 SVG 需要正确转义的字符。</strong> 诸如 <code${_scopeId}>&lt;</code>、<code${_scopeId}>&gt;</code> 和 <code${_scopeId}>#</code> 等保留字符必须经过 URL 编码或转义。我们使用 <a href="/customize/sass#escape-svg"${_scopeId}><code${_scopeId}>escape-svg()</code> Sass 函数</a>通过 <code${_scopeId}>\$breadcrumb-divider</code> 变量完成了这一处理。在自定义 CSS 变量时，你必须自行处理这些字符。更多信息请阅读<a href="https://codepen.io/kevinweber/pen/dXWoRw"${_scopeId}>Kevin Weber 在 CodePen 上的说明</a>。 </p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "内联 SVG 需要正确转义的字符。"),
						createTextVNode(" 诸如 "),
						createVNode("code", null, "<"),
						createTextVNode("、"),
						createVNode("code", null, ">"),
						createTextVNode(" 和 "),
						createVNode("code", null, "#"),
						createTextVNode(" 等保留字符必须经过 URL 编码或转义。我们使用 "),
						createVNode("a", { href: "/customize/sass#escape-svg" }, [createVNode("code", null, "escape-svg()"), createTextVNode(" Sass 函数")]),
						createTextVNode("通过 "),
						createVNode("code", null, "$breadcrumb-divider"),
						createTextVNode(" 变量完成了这一处理。在自定义 CSS 变量时，你必须自行处理这些字符。更多信息请阅读"),
						createVNode("a", { href: "https://codepen.io/kevinweber/pen/dXWoRw" }, "Kevin Weber 在 CodePen 上的说明"),
						createTextVNode("。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_Example, { code: "<nav style=\"--bs-breadcrumb-divider: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"%236c757d\"/%3E%3C/svg%3E');\" aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\r\n  </ol>\r\n</nav>" }, null, _parent));
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "$breadcrumb-divider: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='#{$breadcrumb-divider-color}'/></svg>\");\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p>你也可以移除分隔符设置 <code>--bs-breadcrumb-divider: &#39;&#39;;</code>（CSS 自定义属性中的空字符串也算作一个值），或将 Sass 变量设置为 <code>\$breadcrumb-divider: none;</code>。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<nav style=\"--bs-breadcrumb-divider: '';\" aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\r\n  </ol>\r\n</nav>" }, null, _parent));
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "$breadcrumb-divider: none;\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<h2 id="accessibility">可访问性<a class="anchor-link" href="#accessibility" aria-label="可访问性链接"></a></h2><p> 由于面包屑导航提供导航功能，建议在 <code>&lt;nav&gt;</code> 元素中添加一个有意义的标签（如 <code>aria-label=&quot;breadcrumb&quot;</code>），以描述所提供的导航类型；同时为最后一项添加 <code>aria-current=&quot;page&quot;</code>，以表明它代表当前页面。 </p><p> 更多信息请参阅 <a href="https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/">ARIA 创作实践指南中的面包屑导航模式</a>。 </p><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_AddedIn, { version: "5.2.0" }, null, _parent));
			_push(`<p> 作为 Bootstrap 不断演进的 CSS 变量方案的一部分，面包屑导航现在在 <code>.breadcrumb</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。 </p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "breadcrumb-css-vars",
				file: "scss/_breadcrumb.scss"
			}, null, _parent));
			_push(`<h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "breadcrumb-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#example">示例</a></li><li><a href="#dividers">分隔符</a></li><li><a href="#accessibility">可访问性</a></li><li><a href="#css">CSS</a><ul><li><a href="#variables">变量</a></li><li><a href="#sass-variables">Sass 变量</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/components/breadcrumb.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
