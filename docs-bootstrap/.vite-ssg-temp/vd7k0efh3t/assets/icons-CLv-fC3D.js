import { i as _sfc_main$1, m as data_default } from "../main.mjs";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// src/pages/zh-CN/extend/icons.vue
var _sfc_main = {
	__name: "icons",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>图标</h1><p class="lead">关于在 Bootstrap 中使用外部图标库的指导和建议。</p><p>虽然 Bootstrap 默认不包含图标集，但我们确实有自己的综合性图标库，名为 Bootstrap Icons。你可以随意在你的项目中使用它们或任何其他图标集。下面我们列出了 Bootstrap Icons 以及其他首选图标集的详细信息。</p><p>虽然大多数图标集包含多种文件格式，但我们更青睐 SVG 实现，因为它们具有更好的可访问性和矢量支持。</p><h2 id="bootstrap-icons">Bootstrap Icons<a class="anchor-link" href="#bootstrap-icons" aria-label="Bootstrap Icons 链接"></a></h2><p> Bootstrap Icons 是一个不断丰富的 SVG 图标库，由 <a href="https://github.com/mdo">@mdo</a>设计，并由<a href="https://github.com/orgs/twbs/people">Bootstrap 团队</a>维护。这个图标集的起点来自 Bootstrap 自身的组件——我们的表单、轮播等。Bootstrap 开箱即用的图标需求很少，因此我们并不需要太多。然而，一旦开始，我们就停不下来地制作更多图标。 </p><p>哦，我们有没有提到它们是完全开源的？就像 Bootstrap 一样，我们的图标集基于 MIT 许可，向所有人开放。</p><p><a href="https://icons.getbootstrap.com/">进一步了解 Bootstrap Icons</a>，包括如何安装它们以及推荐用法。</p><h2 id="alternatives">替代方案<a class="anchor-link" href="#alternatives" aria-label="替代方案链接"></a></h2><p>以下这些图标集我们亲自测试并使用过，是 Bootstrap Icons 的首选替代品。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["icons"].preferred, (icon) => {
				_push(`<li><a${ssrRenderAttr("href", icon.website)}>${ssrInterpolate(icon.name)}</a></li>`);
			});
			_push(`<!--]--></ul><h2 id="more-options">更多选项<a class="anchor-link" href="#more-options" aria-label="更多选项链接"></a></h2><p>虽然我们尚未亲自尝试这些，但它们看起来很有前景，并提供了多种格式，包括 SVG。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["icons"].more, (icon) => {
				_push(`<li><a${ssrRenderAttr("href", icon.website)}>${ssrInterpolate(icon.name)}</a></li>`);
			});
			_push(`<!--]--></ul>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#bootstrap-icons">Bootstrap Icons</a></li><li><a href="#alternatives">替代方案</a></li><li><a href="#more-options">更多选项</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/extend/icons.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
