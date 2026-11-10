import { f as _sfc_main$1, i as _sfc_main$4, n as _sfc_main$2, u as _sfc_main$3 } from "../main.mjs";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/content/figures.vue
var _sfc_main = {
	__name: "figures",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ExampleCustom = _sfc_main$1;
			const _component_Placeholder = _sfc_main$2;
			const _component_ScssDocs = _sfc_main$3;
			const _component_DocsPager = _sfc_main$4;
			_push(`<!--[--><article class="bd-content"><h1>图片说明（Figures）</h1><p class="lead">在 Bootstrap 中使用 figure 组件展示相关图片和文字的文档与示例。</p><p> 每当你需要展示某段内容时——比如带可选说明文字的图片，都可以考虑使用 <code>&lt;figure&gt;</code>。 </p><p> 使用内置的 <code>.figure</code>、<code>.figure-img</code> 和 <code>.figure-caption</code> 类，为 HTML5 的 <code>&lt;figure&gt;</code> 和 <code>&lt;figcaption&gt;</code> 元素提供一些基础样式。图片说明中的图片没有明确尺寸，因此请务必为 <code>&lt;img&gt;</code> 添加 <code>.img-fluid</code> 类，使其具有响应式效果。 </p>`);
			_push(ssrRenderComponent(_component_ExampleCustom, { code: "<figure class=\"figure\">\r\n  <img src=\"...\" class=\"figure-img img-fluid rounded\" alt=\"...\">\r\n  <figcaption class=\"figure-caption\">A caption for the above image.</figcaption>\r\n</figure>" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<figure class="figure"${_scopeId}>`);
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "400",
							height: "300",
							class: "figure-img img-fluid rounded"
						}, null, _parent, _scopeId));
						_push(`<figcaption class="figure-caption"${_scopeId}>A caption for the above image.</figcaption></figure>`);
					} else return [createVNode("figure", { class: "figure" }, [createVNode(_component_Placeholder, {
						width: "400",
						height: "300",
						class: "figure-img img-fluid rounded"
					}), createVNode("figcaption", { class: "figure-caption" }, "A caption for the above image.")])];
				}),
				_: 1
			}, _parent));
			_push(`<p> 使用我们的<a href="/utilities/text#text-alignment">文本工具类</a>，即可轻松对齐图片说明。 </p>`);
			_push(ssrRenderComponent(_component_ExampleCustom, { code: "<figure class=\"figure\">\r\n  <img src=\"...\" class=\"figure-img img-fluid rounded\" alt=\"...\">\r\n  <figcaption class=\"figure-caption text-end\">A caption for the above image.</figcaption>\r\n</figure>" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<figure class="figure"${_scopeId}>`);
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "400",
							height: "300",
							class: "figure-img img-fluid rounded"
						}, null, _parent, _scopeId));
						_push(`<figcaption class="figure-caption text-end"${_scopeId}>A caption for the above image.</figcaption></figure>`);
					} else return [createVNode("figure", { class: "figure" }, [createVNode(_component_Placeholder, {
						width: "400",
						height: "300",
						class: "figure-img img-fluid rounded"
					}), createVNode("figcaption", { class: "figure-caption text-end" }, "A caption for the above image.")])];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "figure-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/content/figures.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
