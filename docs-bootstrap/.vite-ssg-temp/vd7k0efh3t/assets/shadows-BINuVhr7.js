import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/utilities/shadows.vue
var _sfc_main = {
	__name: "shadows",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>阴影</h1><p class="lead">使用 box-shadow 工具类为元素添加或移除阴影。</p><h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2><p> 虽然组件的阴影在 Bootstrap 中默认是禁用的，并且可以通过 <code>\$enable-shadows</code> 启用，但你也可以使用我们的 <code>box-shadow</code> 工具类快速添加或移除阴影。其中包含对 <code>.shadow-none</code> 和三种默认尺寸的支持（它们都有对应的变量）。 </p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "overflow-hidden",
				code: "<div class=\"shadow-none p-3 mb-5 bg-body-tertiary rounded\">No shadow</div>\r\n<div class=\"shadow-sm p-3 mb-5 bg-body-tertiary rounded\">Small shadow</div>\r\n<div class=\"shadow p-3 mb-5 bg-body-tertiary rounded\">Regular shadow</div>\r\n<div class=\"shadow-lg p-3 mb-5 bg-body-tertiary rounded\">Larger shadow</div>"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "box-shadow-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 阴影工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-shadow",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#examples">示例</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/shadows.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
