import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as _sfc_main$4 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/utilities/sizing.vue
var _sfc_main = {
	__name: "sizing",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_CodeWrapper = _sfc_main$4;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>尺寸</h1><p class="lead">使用我们的宽度和高度工具类，可以轻松设置元素的宽度或高度。</p><h2 id="relative-to-the-parent">相对于父元素<a class="anchor-link" href="#relative-to-the-parent" aria-label="相对于父元素链接"></a></h2><p>宽度和高度工具类由 <code>_utilities.scss</code> 中的工具类 API 生成。默认支持 <code>25%</code>、<code>50%</code>、<code>75%</code>、<code>100%</code> 和 <code>auto</code>。根据需要修改这些值，即可在此处生成不同的工具类。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"w-25 p-3\">Width 25%</div>\r\n<div class=\"w-50 p-3\">Width 50%</div>\r\n<div class=\"w-75 p-3\">Width 75%</div>\r\n<div class=\"w-100 p-3\">Width 100%</div>\r\n<div class=\"w-auto p-3\">Width auto</div>"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div style=\"height: 100px;\">\r\n  <div class=\"h-25 d-inline-block\" style=\"width: 120px;\">Height 25%</div>\r\n  <div class=\"h-50 d-inline-block\" style=\"width: 120px;\">Height 50%</div>\r\n  <div class=\"h-75 d-inline-block\" style=\"width: 120px;\">Height 75%</div>\r\n  <div class=\"h-100 d-inline-block\" style=\"width: 120px;\">Height 100%</div>\r\n  <div class=\"h-auto d-inline-block\" style=\"width: 120px;\">Height auto</div>\r\n</div>"
			}, null, _parent));
			_push(`<p>你也可以根据需要将 <code>max-width: 100%;</code> 和 <code>max-height: 100%;</code> 作为工具类使用。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div style=\"width: 50%; height: 100px;\">\r\n  <div class=\"mw-100\" style=\"width: 200%;\">Max-width 100%</div>\r\n</div>"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div style=\"height: 100px;\">\r\n  <div class=\"mh-100\" style=\"width: 100px; height: 200px;\">Max-height 100%</div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="relative-to-the-viewport">相对于视口<a class="anchor-link" href="#relative-to-the-viewport" aria-label="相对于视口链接"></a></h2><p>你也可以使用工具类设置相对于视口的宽度和高度。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"min-vw-100\">Min-width 100vw</div>\r\n<div class=\"min-vh-100\">Min-height 100vh</div>\r\n<div class=\"vw-100\">Width 100vw</div>\r\n<div class=\"vh-100\">Height 100vh</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2><h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 尺寸工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-sizing",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#relative-to-the-parent">相对于父元素</a></li><li><a href="#relative-to-the-viewport">相对于视口</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/sizing.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
