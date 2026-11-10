import { i as _sfc_main$2, m as data_default, p as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$3 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/color-background.vue
var _sfc_main = {
	__name: "color-background",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$3;
			const _component_Example = _sfc_main$1;
			const _component_DocsPager = _sfc_main$2;
			_push(`<!--[--><article class="bd-content"><h1>颜色与背景</h1><p class="lead">设置带有对比前景色的背景色。</p><h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="概述链接"></a></h2><p> 颜色与背景工具类将 <a href="/utilities/colors"><code>.text-*</code> 工具类</a>和<a href="/utilities/background"><code>.bg-*</code> 工具类</a>的能力整合到一个类中。通过我们的 Sass <code>color-contrast()</code> 函数，我们会为特定的 <code>background-color</code> 自动确定对比度合适的 <code>color</code>。 </p>`);
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>请注意！</strong>目前尚不支持 CSS 原生的 <code${_scopeId}>color-contrast</code> 函数，因此我们通过 Sass 使用了自己的实现。这意味着通过 CSS 变量定制主题颜色可能会导致这些工具类出现颜色对比度问题。</p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "请注意！"),
						createTextVNode("目前尚不支持 CSS 原生的 "),
						createVNode("code", null, "color-contrast"),
						createTextVNode(" 函数，因此我们通过 Sass 使用了自己的实现。这意味着通过 CSS 变量定制主题颜色可能会导致这些工具类出现颜色对比度问题。")
					])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_Example, { code: unref(data_default)["theme-colors"].map((themeColor) => `<div class="text-bg-${themeColor.name} p-3">${themeColor.name} with contrasting color</div>`).join("\n") }, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { name: "warning-color-assistive-technologies" }, null, _parent));
			_push(`<h2 id="with-components">与组件配合使用<a class="anchor-link" href="#with-components" aria-label="与组件配合使用链接"></a></h2><p>可以用它们替代 <code>.text-*</code> 与 <code>.bg-*</code> 的组合类，例如在<a href="/components/badge#background-colors">徽章</a>上：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<span class=\"badge text-bg-primary\">Primary</span>\r\n<span class=\"badge text-bg-info\">Info</span>" }, null, _parent));
			_push(`<p>或者用在<a href="/components/card#background-and-color">卡片</a>上：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"card text-bg-primary mb-3\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-header\">Header</div>\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\r\n  </div>\r\n</div>\r\n<div class=\"card text-bg-info mb-3\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-header\">Header</div>\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\r\n  </div>\r\n</div>" }, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#overview">概述</a></li><li><a href="#with-components">与组件配合使用</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/color-background.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
