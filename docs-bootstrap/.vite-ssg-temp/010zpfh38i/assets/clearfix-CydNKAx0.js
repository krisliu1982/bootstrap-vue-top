import { i as _sfc_main$3, p as _sfc_main$2, u as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$4 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/clearfix.vue
var _sfc_main = {
	__name: "clearfix",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$4;
			const _component_ScssDocs = _sfc_main$1;
			const _component_Example = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<article${ssrRenderAttrs(mergeProps({ class: "bd-content" }, _attrs))}><h1>清除浮动</h1><p class="lead">通过添加清除浮动工具类，快速轻松地清除容器内的浮动内容。</p><p>为<strong>父元素</strong>添加 <code>.clearfix</code> 即可轻松清除 <code>float</code> 浮动。它也可以作为 mixin 使用。</p><p>在 HTML 中的用法：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"clearfix\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<p>mixin 源代码：</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "clearfix",
				file: "scss/mixins/_clearfix.scss"
			}, null, _parent));
			_push(`<p>在 SCSS 中使用该 mixin：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".element {\r\n  @include clearfix;\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p>以下示例演示了清除浮动的用法。如果不使用清除浮动，外层 div 将无法包裹按钮，从而导致布局错乱。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"bg-info clearfix\">\r\n  <button type=\"button\" class=\"btn btn-secondary float-start\">Example Button floated left</button>\r\n  <button type=\"button\" class=\"btn btn-secondary float-end\">Example Button floated right</button>\r\n</div>" }, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/clearfix.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
