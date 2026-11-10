import { i as _sfc_main$2, p as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$3 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/visually-hidden.vue
var _sfc_main = {
	__name: "visually-hidden",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_CodeWrapper = _sfc_main$3;
			const _component_DocsPager = _sfc_main$2;
			_push(`<article${ssrRenderAttrs(mergeProps({ class: "bd-content" }, _attrs))}><h1>视觉上隐藏</h1><p class="lead">使用这些工具类可以在视觉上隐藏元素，同时保持其对辅助技术的可访问性。</p><p> 使用 <code>.visually-hidden</code> 可以在视觉上隐藏元素，同时仍然允许其暴露给辅助技术（如屏幕阅读器）。使用 <code>.visually-hidden-focusable</code> 可以默认在视觉上隐藏元素，但在其获得焦点时（例如由仅使用键盘的用户操作）显示它。 <code>.visually-hidden-focusable</code> 也可以应用到容器上——得益于 <code>:focus-within</code>，当容器内的任意子元素获得焦点时，该容器就会显示。 </p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<h2 class=\"visually-hidden\">Title for screen readers</h2>\r\n<a class=\"visually-hidden-focusable\" href=\"#content\">Skip to main content</a>\r\n<div class=\"visually-hidden-focusable\">A container with a<a href=\"#\">focusable element</a>.</div>" }, null, _parent));
			_push(`<p><code>visually-hidden</code> 和 <code>visually-hidden-focusable</code> 也都可以作为 mixin 使用。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Usage as a mixin\r\n\r\n.visually-hidden-title {\r\n  @include visually-hidden;\r\n}\r\n\r\n.skip-navigation {\r\n  @include visually-hidden-focusable;\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/visually-hidden.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
