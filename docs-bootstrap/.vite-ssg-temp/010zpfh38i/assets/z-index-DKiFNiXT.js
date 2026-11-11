import { i as _sfc_main$2, u as _sfc_main$1 } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/layout/z-index.vue
var _sfc_main = {
	__name: "z-index",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ScssDocs = _sfc_main$1;
			const _component_DocsPager = _sfc_main$2;
			_push(`<article${ssrRenderAttrs(mergeProps({ class: "bd-content" }, _attrs))}><h1>Z-index</h1><p class="lead">虽然 z-index 并不属于 Bootstrap 网格系统的一部分，但它在组件如何相互叠加和交互方面起着重要作用。</p><p>多个 Bootstrap 组件都用到了 <code>z-index</code>，这个 CSS 属性通过提供第三条轴来排列内容，从而帮助控制布局。Bootstrap 使用了一套默认的 z-index 层级，旨在正确地对导航、工具提示和弹出框、模态框等进行分层。</p><p> 这些较高的值从一个任意数字开始，足够高且足够具体，以尽可能避免冲突。我们需要在我们的分层组件——工具提示、弹出框、导航栏、下拉菜单、模态框——中拥有一套标准的这类值，以便在行为上保持合理的一致性。我们没有理由不能使用 <code>100</code>+ 或 <code>500</code>+。 </p><p>我们不鼓励自定义这些单独的值；如果你改动了其中一个，很可能需要把所有的都改掉。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "zindex-stack",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<p> 为了处理组件内部重叠的边框（例如输入框组中的按钮和输入框），我们在默认、悬停和激活状态下使用 <code>1</code>、<code>2</code> 和 <code>3</code> 这样较小的个位数 <code>z-index</code> 值。在悬停/聚焦/激活时，我们会通过更高的 <code>z-index</code> 值将特定元素置于最前面，以便其边框显示在同级元素之上。 </p>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/layout/z-index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
