import { i as _sfc_main$4, m as data_default, n as _sfc_main$1, p as _sfc_main$2, u as _sfc_main$3 } from "../main.mjs";
import { t as _sfc_main$5 } from "./Callout-8L5ndyTZ.js";
import { t as _sfc_main$6 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/components/placeholders.vue
var _sfc_main = {
	__name: "placeholders",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Placeholder = _sfc_main$1;
			const _component_CodeWrapper = _sfc_main$6;
			const _component_Example = _sfc_main$2;
			const _component_Callout = _sfc_main$5;
			const _component_ScssDocs = _sfc_main$3;
			const _component_DocsPager = _sfc_main$4;
			_push(`<!--[--><article class="bd-content"><h1>占位符</h1><p class="lead">为你的组件或页面使用加载占位符（骨架屏加载器），以表示某些内容可能仍在加载中。</p><h2 id="about">关于<a class="anchor-link" href="#about" aria-label="关于链接"></a></h2><p>占位符可用于提升应用程序的用户体验。它们仅由 HTML 和 CSS 构建，这意味着你不需要任何 JavaScript 就能创建它们。不过，你仍需要一些自定义 JavaScript 来切换它们的可见性。它们的外观、颜色和尺寸可以通过我们的工具类轻松自定义。</p><h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2><p>在下面的示例中，我们取一个典型的卡片组件，应用占位符重新创建它，从而打造一张“加载中卡片”。两者的尺寸和比例完全相同。</p><div class="bd-code-snippet"><div class="bd-example border rounded-top bd-example-placeholder-cards d-flex justify-content-around"><div class="card">`);
			_push(ssrRenderComponent(_component_Placeholder, {
				width: "100%",
				height: "180",
				class: "card-img-top",
				text: false,
				background: "#20c997"
			}, null, _parent));
			_push(`<div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div><div class="card" aria-hidden="true">`);
			_push(ssrRenderComponent(_component_Placeholder, {
				width: "100%",
				height: "180",
				class: "card-img-top",
				text: false
			}, null, _parent));
			_push(`<div class="card-body"><div class="h5 card-title placeholder-glow"><span class="placeholder col-6"></span></div><p class="card-text placeholder-glow"><span class="placeholder col-7"></span><span class="placeholder col-4"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span><span class="placeholder col-8"></span></p><a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a></div></div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"card\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Card title</h5>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\" aria-hidden=\"true\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title placeholder-glow\">\r\n      <span class=\"placeholder col-6\"></span>\r\n    </h5>\r\n    <p class=\"card-text placeholder-glow\">\r\n      <span class=\"placeholder col-7\"></span>\r\n      <span class=\"placeholder col-4\"></span>\r\n      <span class=\"placeholder col-4\"></span>\r\n      <span class=\"placeholder col-6\"></span>\r\n      <span class=\"placeholder col-8\"></span>\r\n    </p>\r\n   <a class=\"btn btn-primary disabled placeholder col-6\" aria-disabled=\"true\"></a>\r\n  </div>\r\n</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2><p>使用 <code>.placeholder</code> 类和网格列类（例如 <code>.col-6</code>）创建占位符来设置 <code>width</code>。它们可以替换元素内的文本，也可以作为修饰类添加到现有组件中。</p><p>我们通过 <code>::before</code> 为 <code>.btn</code> 应用额外的样式，以确保 <code>height</code> 得到遵循。你可以根据需要将此模式扩展到其他情况，或者在元素内添加 <code>&amp;nbsp;</code>，以便在其位置渲染实际文本时反映高度。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<p aria-hidden=\"true\">\r\n  <span class=\"placeholder col-6\"></span>\r\n</p>\r\n\r\n<a class=\"btn btn-primary disabled placeholder col-4\" aria-disabled=\"true\"></a>" }, null, _parent));
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}> 使用 <code${_scopeId}>aria-hidden=&quot;true&quot;</code> 仅表示该元素应对屏幕阅读器隐藏。占位符的<em${_scopeId}>加载</em>行为取决于作者实际如何使用占位符样式、计划如何更新内容等。可能需要一些 JavaScript 代码来<em${_scopeId}>切换</em>占位符的状态，并将更新告知 AT 用户。 </p>`);
					else return [createVNode("p", null, [
						createTextVNode(" 使用 "),
						createVNode("code", null, "aria-hidden=\"true\""),
						createTextVNode(" 仅表示该元素应对屏幕阅读器隐藏。占位符的"),
						createVNode("em", null, "加载"),
						createTextVNode("行为取决于作者实际如何使用占位符样式、计划如何更新内容等。可能需要一些 JavaScript 代码来"),
						createVNode("em", null, "切换"),
						createTextVNode("占位符的状态，并将更新告知 AT 用户。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<h3 id="width">宽度<a class="anchor-link" href="#width" aria-label="宽度链接"></a></h3><p>你可以通过网格列类、宽度工具类或内联样式更改 <code>width</code>。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<span class=\"placeholder col-6\"></span>\r\n<span class=\"placeholder w-75\"></span>\r\n<span class=\"placeholder\" style=\"width: 25%;\"></span>" }, null, _parent));
			_push(`<h3 id="color">颜色<a class="anchor-link" href="#color" aria-label="颜色链接"></a></h3><p>默认情况下，<code>placeholder</code> 使用 <code>currentColor</code>。可以通过自定义颜色或工具类来覆盖。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: [`<span class="placeholder col-12"></span>
  `, ...unref(data_default)["theme-colors"].map((themeColor) => `<span class="placeholder col-12 bg-${themeColor.name}"></span>`)].join("\n") }, null, _parent));
			_push(`<h3 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h3><p><code>.placeholder</code> 的尺寸基于父元素的排版样式。你可以使用尺寸修饰符来自定义它们：<code>.placeholder-lg</code>、<code>.placeholder-sm</code> 或 <code>.placeholder-xs</code>。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<span class=\"placeholder col-12 placeholder-lg\"></span>\r\n<span class=\"placeholder col-12\"></span>\r\n<span class=\"placeholder col-12 placeholder-sm\"></span>\r\n<span class=\"placeholder col-12 placeholder-xs\"></span>" }, null, _parent));
			_push(`<h3 id="animation">动画<a class="anchor-link" href="#animation" aria-label="动画链接"></a></h3><p>使用 <code>.placeholder-glow</code> 或 <code>.placeholder-wave</code> 为占位符添加动画，从而更好地传达某些内容正在<em>积极</em>加载的感觉。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<p class=\"placeholder-glow\">\r\n  <span class=\"placeholder col-12\"></span>\r\n</p>\r\n\r\n<p class=\"placeholder-wave\">\r\n  <span class=\"placeholder col-12\"></span>\r\n</p>" }, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "placeholders",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#about">关于</a></li><li><a href="#example">示例</a></li><li><a href="#how-it-works">工作原理</a><ul><li><a href="#width">宽度</a></li><li><a href="#color">颜色</a></li><li><a href="#sizing">尺寸</a></li><li><a href="#animation">动画</a></li></ul></li><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/components/placeholders.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
