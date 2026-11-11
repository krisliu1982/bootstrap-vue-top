import { i as _sfc_main$1, m as data_default } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// src/pages/zh-CN/about/translations.vue
var _sfc_main = {
	__name: "translations",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_DocsPager = _sfc_main$1;
			_push(`<article${ssrRenderAttrs(mergeProps({ class: "bd-content" }, _attrs))}><h1>翻译</h1><p class="lead">链接到由社区翻译的 Bootstrap 文档站点。</p><p>社区成员已将 Bootstrap 的文档翻译成多种语言。这些翻译均未获得官方支持，且可能并非始终是最新的。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default).translations, (translation) => {
				_push(`<li><a${ssrRenderAttr("href", translation.url)}${ssrRenderAttr("hreflang", translation.code)}${ssrRenderAttr("lang", translation.code)}>${ssrInterpolate(translation.description)} (${ssrInterpolate(translation.name)})</a></li>`);
			});
			_push(`<!--]--></ul><p><strong>我们不负责组织或托管翻译，仅提供链接。</strong></p><p>完成了新的或更好的翻译？请提交 pull request 将其添加到我们的列表中。</p>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/about/translations.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
