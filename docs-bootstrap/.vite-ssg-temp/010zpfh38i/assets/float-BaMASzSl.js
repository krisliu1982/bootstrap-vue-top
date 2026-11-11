import { i as _sfc_main$3, m as data_default, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// src/pages/zh-CN/utilities/float.vue
var _sfc_main = {
	__name: "float",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>浮动</h1><p class="lead">使用我们的响应式浮动工具类，可在任意断点上切换任意元素的浮动状态。</p><h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="概述链接"></a></h2><p> 这些工具类会根据当前视口尺寸使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">CSS <code>float</code> 属性</a>将元素向左或向右浮动，或禁用浮动。其中包含了 <code>!important</code> 以避免优先级问题。它们与我们网格系统使用相同的视口断点。请注意，浮动工具类对弹性项目没有任何效果。 </p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"float-start\">Float start on all viewport sizes</div><br>\r\n<div class=\"float-end\">Float end on all viewport sizes</div><br>\r\n<div class=\"float-none\">Don’t float on all viewport sizes</div>" }, null, _parent));
			_push(`<p>在父元素上使用<a href="/helpers/clearfix">清除浮动工具类</a>来清除浮动。</p><h2 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="响应式链接"></a></h2><p>每个 <code>float</code> 取值都提供了响应式变体。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"float-sm-end\">Float end on viewports sized SM (small) or wider</div><br>\r\n<div class=\"float-md-end\">Float end on viewports sized MD (medium) or wider</div><br>\r\n<div class=\"float-lg-end\">Float end on viewports sized LG (large) or wider</div><br>\r\n<div class=\"float-xl-end\">Float end on viewports sized XL (extra large) or wider</div><br>\r\n<div class=\"float-xxl-end\">Float end on viewports sized XXL (extra extra large) or wider</div><br>" }, null, _parent));
			_push(`<p>以下是所有支持的类：</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<!--[--><li><code>.float${ssrInterpolate(breakpoint.abbr)}-start</code></li><li><code>.float${ssrInterpolate(breakpoint.abbr)}-end</code></li><li><code>.float${ssrInterpolate(breakpoint.abbr)}-none</code></li><!--]-->`);
			});
			_push(`<!--]--></ul><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2><h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 浮动工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-float",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#overview">概述</a></li><li><a href="#responsive">响应式</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/float.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
