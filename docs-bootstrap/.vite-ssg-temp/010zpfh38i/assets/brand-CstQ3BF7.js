import { i as _sfc_main$1 } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/about/brand.vue
var _sfc_main = {
	__name: "brand",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>品牌指南</h1><p class="lead">Bootstrap 徽标与品牌使用指南的文档和示例。</p><p>需要 Bootstrap 的品牌资源吗？太棒了！我们只遵循几条指南，也希望你同样遵守。</p><h2 id="logo">徽标<a class="anchor-link" href="#logo" aria-label="徽标链接"></a></h2><p>引用 Bootstrap 时，请使用我们的徽标图形。请勿以任何方式修改我们的徽标。请勿将 Bootstrap 品牌用于你自己的开源或闭源项目。</p><div class="bd-brand-item px-2 py-5 mb-3 border rounded-3"><img class="d-block img-fluid mx-auto" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="256" height="204"></div><p>我们的徽标图形也提供黑白版本。主徽标的所有规则同样适用于这些版本。</p><div class="bd-brand-logos d-sm-flex text-center bg-light rounded-3 overflow-hidden w-100 mb-3"><div class="bd-brand-item w-100 px-2 py-5"><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-black.svg" alt="Bootstrap" width="128" height="102" loading="lazy"></div><div class="bd-brand-item w-100 px-2 py-5 inverse"><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-white.svg" alt="Bootstrap" width="128" height="102" loading="lazy"></div></div><h2 id="name">名称<a class="anchor-link" href="#name" aria-label="名称链接"></a></h2><p>Bootstrap 应始终仅写作 <strong>Bootstrap</strong>。字母 <em>s</em> 不大写。</p><div class="bd-brand-logos d-sm-flex text-center border rounded-3 overflow-hidden w-100 mb-3"><div class="bd-brand-item w-100 px-2 py-5"><div class="h3">Bootstrap</div><strong class="text-success">正确</strong></div><div class="bd-brand-item w-100 px-2 py-5"><div class="h3 text-body-secondary">BootStrap</div><strong class="text-danger">错误</strong></div></div>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#logo">徽标</a></li><li><a href="#name">名称</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/about/brand.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
