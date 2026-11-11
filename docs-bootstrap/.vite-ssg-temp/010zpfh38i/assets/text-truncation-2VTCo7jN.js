import { i as _sfc_main$2, p as _sfc_main$1 } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/text-truncation.vue
var _sfc_main = {
	__name: "text-truncation",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_DocsPager = _sfc_main$2;
			_push(`<article${ssrRenderAttrs(mergeProps({ class: "bd-content" }, _attrs))}><h1>文本截断</h1><p class="lead">使用省略号截断长字符串文本。</p><p> 对于较长的内容，你可以添加 <code>.text-truncate</code> 类，用省略号截断文本。 <strong>需要 <code>display: inline-block</code> 或 <code>display: block</code>。</strong></p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<!-- Block level -->\r\n<div class=\"row\">\r\n  <div class=\"col-2 text-truncate\">\r\n    This text is quite long, and will be truncated once displayed.\r\n  </div>\r\n</div>\r\n\r\n<!-- Inline level -->\r\n<span class=\"d-inline-block text-truncate\" style=\"max-width: 150px;\">\r\n  This text is quite long, and will be truncated once displayed.\r\n</span>" }, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/text-truncation.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
