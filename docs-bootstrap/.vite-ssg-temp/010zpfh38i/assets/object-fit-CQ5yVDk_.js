import { f as _sfc_main$1, i as _sfc_main$4, n as _sfc_main$2, u as _sfc_main$3 } from "../main.mjs";
import { t as _sfc_main$5 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/utilities/object-fit.vue
var _sfc_main = {
	__name: "object-fit",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ExampleCustom = _sfc_main$1;
			const _component_Placeholder = _sfc_main$2;
			const _component_CodeWrapper = _sfc_main$5;
			const _component_ScssDocs = _sfc_main$3;
			const _component_DocsPager = _sfc_main$4;
			_push(`<!--[--><article class="bd-content"><h1>对象适配</h1><p class="lead">使用对象适配工具类来修改替换元素（如 <code>&lt;img&gt;</code> 或 <code>&lt;video&gt;</code>）的内容应如何调整尺寸以适应其容器。</p><h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2><p> 使用我们响应式的 <code>object-fit</code> 工具类更改 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"><code>object-fit</code> 属性</a>的值。该属性会以多种方式告知内容填充父容器，例如保持长宽比，或拉伸以尽可能占据更多空间。 </p><p><code>object-fit</code> 取值的类使用 <code>.object-fit-{value}</code> 格式命名。可从以下取值中选择：</p><ul><li><code>contain</code></li><li><code>cover</code></li><li><code>fill</code></li><li><code>scale</code>（用于 scale-down）</li><li><code>none</code></li></ul><h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2><p>为<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element">替换元素</a>添加 <code>object-fit-{value}</code> 类：</p>`);
			_push(ssrRenderComponent(_component_ExampleCustom, {
				class: "d-flex overflow-auto",
				code: "<img src=\"...\" class=\"object-fit-contain border rounded\" alt=\"...\">\r\n<img src=\"...\" class=\"object-fit-cover border rounded\" alt=\"...\">\r\n<img src=\"...\" class=\"object-fit-fill border rounded\" alt=\"...\">\r\n<img src=\"...\" class=\"object-fit-scale border rounded\" alt=\"...\">\r\n<img src=\"...\" class=\"object-fit-none border rounded\" alt=\"...\">"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-contain border rounded",
							text: "对象适配 contain",
							markup: "img"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-cover border rounded",
							text: "对象适配 cover",
							markup: "img"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-fill border rounded",
							text: "对象适配 fill",
							markup: "img"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-scale border rounded",
							text: "对象适配 scale down",
							markup: "img"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-none border rounded",
							text: "对象适配 none",
							markup: "img"
						}, null, _parent, _scopeId));
					} else return [
						createVNode(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-contain border rounded",
							text: "对象适配 contain",
							markup: "img"
						}),
						createVNode(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-cover border rounded",
							text: "对象适配 cover",
							markup: "img"
						}),
						createVNode(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-fill border rounded",
							text: "对象适配 fill",
							markup: "img"
						}),
						createVNode(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-scale border rounded",
							text: "对象适配 scale down",
							markup: "img"
						}),
						createVNode(_component_Placeholder, {
							width: "140",
							height: "120",
							class: "object-fit-none border rounded",
							text: "对象适配 none",
							markup: "img"
						})
					];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="响应式链接"></a></h2><p>每个 <code>object-fit</code> 取值都提供了响应式变体，使用 <code>.object-fit-{breakpoint}-{value}</code> 格式，适用于以下断点缩写：<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code>。可以根据需要组合类来实现各种效果。</p>`);
			_push(ssrRenderComponent(_component_ExampleCustom, {
				class: "d-flex overflow-auto",
				code: "<img src=\"...\" class=\"object-fit-sm-contain border rounded\" alt=\"...\">\r\n<img src=\"...\" class=\"object-fit-md-contain border rounded\" alt=\"...\">\r\n<img src=\"...\" class=\"object-fit-lg-contain border rounded\" alt=\"...\">\r\n<img src=\"...\" class=\"object-fit-xl-contain border rounded\" alt=\"...\">\r\n<img src=\"...\" class=\"object-fit-xxl-contain border rounded\" alt=\"...\">"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-sm-contain border rounded",
							text: "在 sm 上 contain",
							markup: "img"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-md-contain border rounded",
							text: "在 md 上 contain",
							markup: "img"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-lg-contain border rounded",
							text: "在 lg 上 contain",
							markup: "img"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-xl-contain border rounded",
							text: "在 xl 上 contain",
							markup: "img"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-xxl-contain border rounded",
							text: "在 xxl 上 contain",
							markup: "img"
						}, null, _parent, _scopeId));
					} else return [
						createVNode(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-sm-contain border rounded",
							text: "在 sm 上 contain",
							markup: "img"
						}),
						createVNode(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-md-contain border rounded",
							text: "在 md 上 contain",
							markup: "img"
						}),
						createVNode(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-lg-contain border rounded",
							text: "在 lg 上 contain",
							markup: "img"
						}),
						createVNode(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-xl-contain border rounded",
							text: "在 xl 上 contain",
							markup: "img"
						}),
						createVNode(_component_Placeholder, {
							width: "140",
							height: "80",
							class: "object-fit-xxl-contain border rounded",
							text: "在 xxl 上 contain",
							markup: "img"
						})
					];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="video">视频<a class="anchor-link" href="#video" aria-label="视频链接"></a></h2><p><code>.object-fit-{value}</code> 和响应式的 <code>.object-fit-{breakpoint}-{value}</code> 工具类也适用于 <code>&lt;video&gt;</code> 元素。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<video src=\"...\" class=\"object-fit-contain\" autoplay></video>\r\n<video src=\"...\" class=\"object-fit-cover\" autoplay></video>\r\n<video src=\"...\" class=\"object-fit-fill\" autoplay></video>\r\n<video src=\"...\" class=\"object-fit-scale\" autoplay></video>\r\n<video src=\"...\" class=\"object-fit-none\" autoplay></video>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2><h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 对象适配工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-object-fit",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#how-it-works">工作原理</a></li><li><a href="#examples">示例</a></li><li><a href="#responsive">响应式</a></li><li><a href="#video">视频</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/object-fit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
