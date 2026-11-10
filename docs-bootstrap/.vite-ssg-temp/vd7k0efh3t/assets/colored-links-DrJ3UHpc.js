import { d as _sfc_main$2, i as _sfc_main$3, m as data_default, p as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$4 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/colored-links.vue
var _sfc_main = {
	__name: "colored-links",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$4;
			const _component_Example = _sfc_main$1;
			const _component_AddedIn = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>彩色链接</h1><p class="lead">带有悬停状态的彩色链接</p><h2 id="link-colors">链接颜色<a class="anchor-link" href="#link-colors" aria-label="链接颜色链接"></a></h2><p> 你可以使用 <code>.link-*</code> 类为链接着色。与<a href="/utilities/colors"><code>.text-*</code> 类</a>不同，这些类具有 <code>:hover</code> 和 <code>:focus</code> 状态。部分链接样式使用相对较浅的前景色，因此只能用于深色背景，以保证 足够的对比度。 </p>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>请注意！</strong><code${_scopeId}>.link-body-emphasis</code> 是目前唯一能适应颜色模式的彩色链接。在 v6 发布、我们能够针对颜色模式更全面地重构主题颜色之前，它被视为一个特例。在此之前，它是一种独特的高对比度链接颜色，带有自定义的 <code${_scopeId}>:hover</code> 和 <code${_scopeId}>:focus</code> 样式。不过，它仍然会响应新的链接工具类。 </p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "请注意！"),
						createVNode("code", null, ".link-body-emphasis"),
						createTextVNode(" 是目前唯一能适应颜色模式的彩色链接。在 v6 发布、我们能够针对颜色模式更全面地重构主题颜色之前，它被视为一个特例。在此之前，它是一种独特的高对比度链接颜色，带有自定义的 "),
						createVNode("code", null, ":hover"),
						createTextVNode(" 和 "),
						createVNode("code", null, ":focus"),
						createTextVNode(" 样式。不过，它仍然会响应新的链接工具类。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_Example, { code: [...unref(data_default)["theme-colors"].map((themeColor) => `<p><a href="#" class="link-${themeColor.name}">${themeColor.name} link</a></p>`), `<p><a href="#" class="link-body-emphasis">Emphasis link</a></p>`].join("\n") }, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { name: "warning-color-assistive-technologies" }, null, _parent));
			_push(`<h2 id="link-utilities">链接工具类<a class="anchor-link" href="#link-utilities" aria-label="链接工具类链接"></a></h2>`);
			_push(ssrRenderComponent(_component_AddedIn, { version: "5.3.0" }, null, _parent));
			_push(`<p>彩色链接也可以通过我们的<a href="/utilities/link/">链接工具类</a>进行修改。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: [...unref(data_default)["theme-colors"].map((themeColor) => `<p><a href="#" class="link-${themeColor.name} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">${themeColor.name} link</a></p>`), `<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>`].join("\n") }, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#link-colors">链接颜色</a></li><li><a href="#link-utilities">链接工具类</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/colored-links.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
