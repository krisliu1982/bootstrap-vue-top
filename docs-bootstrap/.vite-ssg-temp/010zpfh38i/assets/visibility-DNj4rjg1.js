import { i as _sfc_main$2, u as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$3 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$4 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/utilities/visibility.vue
var _sfc_main = {
	__name: "visibility",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$4;
			const _component_CodeWrapper = _sfc_main$3;
			const _component_ScssDocs = _sfc_main$1;
			const _component_DocsPager = _sfc_main$2;
			_push(`<!--[--><article class="bd-content"><h1>可见性</h1><p class="lead">使用可见性工具类在不修改元素显示方式的情况下控制元素的可见性。</p><p>使用我们的可见性工具类设置元素的 <code>visibility</code>。这些工具类完全不修改 <code>display</code> 值，也不影响布局——<code>.invisible</code> 元素仍会在页面中占据空间。</p>`);
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}>带有 <code${_scopeId}>.invisible</code> 类的元素将<em${_scopeId}>同时</em>在视觉上和辅助技术/屏幕阅读器用户面前被隐藏。</p>`);
					else return [createVNode("p", null, [
						createTextVNode("带有 "),
						createVNode("code", null, ".invisible"),
						createTextVNode(" 类的元素将"),
						createVNode("em", null, "同时"),
						createTextVNode("在视觉上和辅助技术/屏幕阅读器用户面前被隐藏。")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<p>根据需要应用 <code>.visible</code> 或 <code>.invisible</code>。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"visible\">...</div>\r\n<div class=\"invisible\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Class\r\n.visible {\r\n  visibility: visible !important;\r\n}\r\n.invisible {\r\n  visibility: hidden !important;\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2><h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 可见性工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-visibility",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#css">CSS</a><ul><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/visibility.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
