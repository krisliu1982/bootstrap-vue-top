import { i as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$2 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/position.vue
var _sfc_main = {
	__name: "position",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$2;
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>定位</h1><p class="lead">使用这些工具类可以快速配置元素的位置。</p><h2 id="fixed-top">固定顶部<a class="anchor-link" href="#fixed-top" aria-label="固定顶部链接"></a></h2><p>将元素定位在视口顶部，横跨整个宽度。请务必理解项目中固定定位的影响；你可能需要添加额外的 CSS。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"fixed-top\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="fixed-bottom">固定底部<a class="anchor-link" href="#fixed-bottom" aria-label="固定底部链接"></a></h2><p>将元素定位在视口底部，横跨整个宽度。请务必理解项目中固定定位的影响；你可能需要添加额外的 CSS。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"fixed-bottom\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="sticky-top">粘性顶部<a class="anchor-link" href="#sticky-top" aria-label="粘性顶部链接"></a></h2><p>将元素定位在视口顶部，横跨整个宽度，但仅在滚动越过它之后才会固定。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"sticky-top\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="responsive-sticky-top">响应式粘性顶部<a class="anchor-link" href="#responsive-sticky-top" aria-label="响应式粘性顶部链接"></a></h2><p><code>.sticky-top</code> 工具类也提供了响应式变体。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"sticky-sm-top\">Stick to the top on viewports sized SM (small) or wider</div>\r\n<div class=\"sticky-md-top\">Stick to the top on viewports sized MD (medium) or wider</div>\r\n<div class=\"sticky-lg-top\">Stick to the top on viewports sized LG (large) or wider</div>\r\n<div class=\"sticky-xl-top\">Stick to the top on viewports sized XL (extra-large) or wider</div>\r\n<div class=\"sticky-xxl-top\">Stick to the top on viewports sized XXL (extra-extra-large) or wider</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="sticky-bottom">粘性底部<a class="anchor-link" href="#sticky-bottom" aria-label="粘性底部链接"></a></h2><p>将元素定位在视口底部，横跨整个宽度，但仅在滚动越过它之后才会固定。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"sticky-bottom\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="responsive-sticky-bottom">响应式粘性底部<a class="anchor-link" href="#responsive-sticky-bottom" aria-label="响应式粘性底部链接"></a></h2><p><code>.sticky-bottom</code> 工具类也提供了响应式变体。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"sticky-sm-bottom\">Stick to the bottom on viewports sized SM (small) or wider</div>\r\n<div class=\"sticky-md-bottom\">Stick to the bottom on viewports sized MD (medium) or wider</div>\r\n<div class=\"sticky-lg-bottom\">Stick to the bottom on viewports sized LG (large) or wider</div>\r\n<div class=\"sticky-xl-bottom\">Stick to the bottom on viewports sized XL (extra-large) or wider</div>\r\n<div class=\"sticky-xxl-bottom\">Stick to the bottom on viewports sized XXL (extra-extra-large) or wider</div>",
				lang: "html"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#fixed-top">固定顶部</a></li><li><a href="#fixed-bottom">固定底部</a></li><li><a href="#sticky-top">粘性顶部</a></li><li><a href="#responsive-sticky-top">响应式粘性顶部</a></li><li><a href="#sticky-bottom">粘性底部</a></li><li><a href="#responsive-sticky-bottom">响应式粘性底部</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/position.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
