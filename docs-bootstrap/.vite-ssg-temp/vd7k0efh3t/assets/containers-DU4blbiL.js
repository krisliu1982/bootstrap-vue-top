import { i as _sfc_main$2, u as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$3 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/layout/containers.vue
var _sfc_main = {
	__name: "containers",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$3;
			const _component_ScssDocs = _sfc_main$1;
			const _component_DocsPager = _sfc_main$2;
			_push(`<!--[--><article class="bd-content"><h1>容器</h1><p class="lead">容器是 Bootstrap 的基本构建块，用于在给定设备或视口内包含、填充和对齐你的内容。</p><h2 id="how-they-work">工作原理<a class="anchor-link" href="#how-they-work" aria-label="工作原理链接"></a></h2><p> 容器是 Bootstrap 中最基本的布局元素，在<strong>使用我们的默认网格系统时是必需的</strong>。容器用于包含、填充以及（有时）在内部居中对齐内容。虽然容器<em>可以</em>嵌套，但大多数布局并不需要嵌套容器。 </p><p>Bootstrap 提供三种不同的容器：</p><ul><li><code>.container</code>，在每个响应式断点设置一个 <code>max-width</code></li><li><code>.container-{breakpoint}</code>，在达到指定断点之前为 <code>width: 100%</code></li><li><code>.container-fluid</code>，在所有断点下均为 <code>width: 100%</code></li></ul><p>下表展示了各容器的 <code>max-width</code> 在每个断点下与原始 <code>.container</code> 和 <code>.container-fluid</code> 的对比。</p><p> 在我们的<a href="https://getbootstrap.com/docs/5.3/examples/grid/#containers">网格示例</a>中查看它们的实际效果并进行比较。 </p><div class="table-responsive"><table class="table"><thead><tr><th></th><th> 超小 <div class="fw-normal">&lt;576px</div></th><th> 小 <div class="fw-normal">≥576px</div></th><th> 中 <div class="fw-normal">≥768px</div></th><th> 大 <div class="fw-normal">≥992px</div></th><th> 超大 <div class="fw-normal">≥1200px</div></th><th> 特大 <div class="fw-normal">≥1400px</div></th></tr></thead><tbody><tr><td><code>.container</code></td><td><span class="text-body-secondary">100%</span></td><td>540px</td><td>720px</td><td>960px</td><td>1140px</td><td>1320px</td></tr><tr><td><code>.container-sm</code></td><td><span class="text-body-secondary">100%</span></td><td>540px</td><td>720px</td><td>960px</td><td>1140px</td><td>1320px</td></tr><tr><td><code>.container-md</code></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td>720px</td><td>960px</td><td>1140px</td><td>1320px</td></tr><tr><td><code>.container-lg</code></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td>960px</td><td>1140px</td><td>1320px</td></tr><tr><td><code>.container-xl</code></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td>1140px</td><td>1320px</td></tr><tr><td><code>.container-xxl</code></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td>1320px</td></tr><tr><td><code>.container-fluid</code></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td><td><span class="text-body-secondary">100%</span></td></tr></tbody></table></div><h2 id="default-container">默认容器<a class="anchor-link" href="#default-container" aria-label="默认容器链接"></a></h2><p>我们的默认 <code>.container</code> 类是一个响应式、固定宽度的容器，这意味着它的 <code>max-width</code> 会在每个断点发生变化。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"container\">\r\n  <!-- Content here -->\r\n</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="responsive-containers">响应式容器<a class="anchor-link" href="#responsive-containers" aria-label="响应式容器链接"></a></h2><p> 响应式容器允许你指定一个类，它在达到指定断点之前宽度为 100%，之后我们会为每个更高的断点应用 <code>max-width</code>。例如，<code>.container-sm</code> 一开始为 100% 宽，直到达到 <code>sm</code> 断点，此后它将随 <code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code> 一起放大。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"container-sm\">100% wide until small breakpoint</div>\r\n<div class=\"container-md\">100% wide until medium breakpoint</div>\r\n<div class=\"container-lg\">100% wide until large breakpoint</div>\r\n<div class=\"container-xl\">100% wide until extra large breakpoint</div>\r\n<div class=\"container-xxl\">100% wide until extra extra large breakpoint</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="fluid-containers">流式容器<a class="anchor-link" href="#fluid-containers" aria-label="流式容器链接"></a></h2><p>使用 <code>.container-fluid</code> 实现全宽容器，横跨视口的整个宽度。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"container-fluid\">\r\n  ...\r\n</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3><p> 如上所示，Bootstrap 生成了一系列预定义的容器类，以帮助你构建所需的布局。你可以通过修改支撑它们的 Sass map（位于 <code>_variables.scss</code> 中）来自定义这些预定义容器类： </p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "container-max-widths",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<p> 有关如何修改我们的 Sass map 和变量的更多信息和示例，请参阅<a href="/layout/grid#css">网格文档的 Sass 部分</a>。 </p><h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin 链接"></a></h3><p>除了自定义 Sass 之外，你还可以使用我们的 Sass mixin 创建自己的容器。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Source mixin\r\n@mixin make-container($padding-x: $container-padding-x) {\r\n  width: 100%;\r\n  padding-right: $padding-x;\r\n  padding-left: $padding-x;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n// Usage\r\n.custom-container {\r\n  @include make-container();\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#how-they-work">工作原理</a></li><li><a href="#default-container">默认容器</a></li><li><a href="#responsive-containers">响应式容器</a></li><li><a href="#fluid-containers">流式容器</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li><li><a href="#sass-mixins">Sass mixin</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/layout/containers.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
