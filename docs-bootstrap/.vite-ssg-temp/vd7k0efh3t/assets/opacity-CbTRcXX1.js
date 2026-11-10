import { i as _sfc_main$2, u as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$3 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/utilities/opacity.vue
var _sfc_main = {
	__name: "opacity",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$3;
			const _component_ScssDocs = _sfc_main$1;
			const _component_DocsPager = _sfc_main$2;
			_push(`<!--[--><article class="bd-content"><h1>不透明度</h1><p class="lead">控制元素的不透明度。</p><p><code>opacity</code> 属性用于设置元素的不透明度级别。不透明度级别描述透明程度，其中 <code>1</code> 表示完全不透明，<code>.5</code> 表示 50% 可见，<code>0</code> 表示完全透明。</p><p>使用 <code>.opacity-{value}</code> 工具类设置元素的 <code>opacity</code>。</p><div class="bd-example d-sm-flex"><div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">100%</div><div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">75%</div><div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">50%</div><div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">25%</div><div class="opacity-0 p-3 m-2 bg-primary text-light fw-bold rounded">0%</div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"opacity-100\">...</div>\r\n<div class=\"opacity-75\">...</div>\r\n<div class=\"opacity-50\">...</div>\r\n<div class=\"opacity-25\">...</div>\r\n<div class=\"opacity-0\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2><h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 不透明度工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-opacity",
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/opacity.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
