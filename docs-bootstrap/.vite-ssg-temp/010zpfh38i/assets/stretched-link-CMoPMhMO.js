import { f as _sfc_main$1, i as _sfc_main$4, n as _sfc_main$2, p as _sfc_main$3 } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/stretched-link.vue
var _sfc_main = {
	__name: "stretched-link",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ExampleCustom = _sfc_main$1;
			const _component_Placeholder = _sfc_main$2;
			const _component_Example = _sfc_main$3;
			const _component_DocsPager = _sfc_main$4;
			_push(`<!--[--><article class="bd-content"><h1>拉伸链接</h1><p class="lead">通过 CSS 将嵌套的链接“拉伸”，让任意 HTML 元素或 Bootstrap 组件都可被点击。</p><p> 为链接添加 <code>.stretched-link</code>，即可通过 <code>::after</code> 伪元素让其<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block">包含块</a>可点击。在大多数情况下，这意味着一个带有 <code>position: relative;</code> 且包含带有 <code>.stretched-link</code> 类链接的元素是可点击的。请注意，鉴于<a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-position">CSS <code>position</code> 的工作方式</a>，<code>.stretched-link</code> 不能与大多数表格元素混用。 </p><p>在 Bootstrap 中，卡片默认具有 <code>position: relative</code>，因此这种情况下你可以安全地为卡片中的链接添加 <code>.stretched-link</code> 类，而无需其他 HTML 改动。</p><p>不建议在拉伸链接中使用多个链接和点击目标。不过，如果确实需要，一些 <code>position</code> 和 <code>z-index</code> 样式可能会有所帮助。</p>`);
			_push(ssrRenderComponent(_component_ExampleCustom, { code: "<div class=\"card\" style=\"width: 18rem;\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Card with stretched link</h5>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\r\n   <a href=\"#\" class=\"btn btn-primary stretched-link\">Go somewhere</a>\r\n  </div>\r\n</div>" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="card" style="width:18rem;"${_scopeId}>`);
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "100%",
							height: "180",
							class: "card-img-top",
							text: false,
							title: "卡片图片占位"
						}, null, _parent, _scopeId));
						_push(`<div class="card-body"${_scopeId}><h5 class="card-title"${_scopeId}>带有拉伸链接的卡片</h5><p class="card-text"${_scopeId}>一些快速示例文本，用于在卡片标题的基础上扩充内容，构成卡片内容的主体。</p><a href="#" class="btn btn-primary stretched-link"${_scopeId}>前往某处</a></div></div>`);
					} else return [createVNode("div", {
						class: "card",
						style: { "width": "18rem" }
					}, [createVNode(_component_Placeholder, {
						width: "100%",
						height: "180",
						class: "card-img-top",
						text: false,
						title: "卡片图片占位"
					}), createVNode("div", { class: "card-body" }, [
						createVNode("h5", { class: "card-title" }, "带有拉伸链接的卡片"),
						createVNode("p", { class: "card-text" }, "一些快速示例文本，用于在卡片标题的基础上扩充内容，构成卡片内容的主体。"),
						createVNode("a", {
							href: "#",
							class: "btn btn-primary stretched-link"
						}, "前往某处")
					])])];
				}),
				_: 1
			}, _parent));
			_push(`<p>大多数自定义组件默认没有 <code>position: relative</code>，因此我们需要在这里添加 <code>.position-relative</code>，以防止链接拉伸到父元素之外。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "" }, null, _parent));
			_push(ssrRenderComponent(_component_ExampleCustom, { code: "<div class=\"card\" style=\"width: 18rem;\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Card with stretched link</h5>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\r\n   <a href=\"#\" class=\"btn btn-primary stretched-link\">Go somewhere</a>\r\n  </div>\r\n</div>" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="d-flex position-relative"${_scopeId}>`);
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "144",
							height: "144",
							class: "flex-shrink-0 me-3",
							text: false,
							title: "通用占位图片22222"
						}, null, _parent, _scopeId));
						_push(`<div${_scopeId}><h5 class="mt-0"${_scopeId}>带有拉伸链接的自定义组件</h5><p${_scopeId}>这是自定义组件的一些占位内容。它旨在模拟真实世界内容的样子，我们在这里用它为组件增添一些内容和尺寸。</p><a href="#" class="stretched-link"${_scopeId}>前往某处</a></div></div>`);
					} else return [createVNode("div", { class: "d-flex position-relative" }, [createVNode(_component_Placeholder, {
						width: "144",
						height: "144",
						class: "flex-shrink-0 me-3",
						text: false,
						title: "通用占位图片22222"
					}), createVNode("div", null, [
						createVNode("h5", { class: "mt-0" }, "带有拉伸链接的自定义组件"),
						createVNode("p", null, "这是自定义组件的一些占位内容。它旨在模拟真实世界内容的样子，我们在这里用它为组件增添一些内容和尺寸。"),
						createVNode("a", {
							href: "#",
							class: "stretched-link"
						}, "前往某处")
					])])];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="identifying-the-containing-block">识别包含块<a class="anchor-link" href="#identifying-the-containing-block" aria-label="识别包含块链接"></a></h2><p> 如果拉伸链接似乎不起作用， <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block">包含块</a> 很可能是原因所在。以下 CSS 属性会使元素成为包含块： </p><ul><li><code>position</code> 值不为 <code>static</code></li><li><code>transform</code> 或 <code>perspective</code> 值不为 <code>none</code></li><li><code>will-change</code> 值为 <code>transform</code> 或 <code>perspective</code></li><li><code>filter</code> 值不为 <code>none</code>，或 <code>will-change</code> 值为 <code>filter</code>（仅在 Firefox 上有效）</li></ul>`);
			_push(ssrRenderComponent(_component_ExampleCustom, { code: "<div class=\"card\" style=\"width: 18rem;\">\r\n  <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Card with stretched links</h5>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\r\n    <p class=\"card-text\">\r\n     <a href=\"#\" class=\"stretched-link text-danger\" style=\"position: relative;\">Stretched link will not work here, because <code>position: relative</code> is added to the link</a>\r\n    </p>\r\n    <p class=\"card-text bg-body-tertiary\" style=\"transform: rotate(0);\">\r\n      This<a href=\"#\" class=\"text-warning stretched-link\">stretched link</a>will only be spread over the <code>p</code>-tag, because a transform is applied to it.\r\n    </p>\r\n  </div>\r\n</div>" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="card" style="width:18rem;"${_scopeId}>`);
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "100%",
							height: "180",
							class: "card-img-top",
							text: false,
							title: "卡片图片占位"
						}, null, _parent, _scopeId));
						_push(`<div class="card-body"${_scopeId}><h5 class="card-title"${_scopeId}>带有拉伸链接的卡片</h5><p class="card-text"${_scopeId}>一些快速示例文本，用于在卡片标题的基础上扩充内容，构成卡片内容的主体。</p><p class="card-text"${_scopeId}><a href="#" class="stretched-link text-danger" style="position:relative;"${_scopeId}>此处的拉伸链接将无法生效，因为链接被添加了 <code${_scopeId}>position: relative</code></a></p><p class="card-text bg-body-tertiary" style="transform:rotate(0);"${_scopeId}>这个<a href="#" class="text-warning stretched-link"${_scopeId}>拉伸链接</a>只会铺满 <code${_scopeId}>p</code> 标签的范围，因为该标签被应用了 transform。</p></div></div>`);
					} else return [createVNode("div", {
						class: "card",
						style: { "width": "18rem" }
					}, [createVNode(_component_Placeholder, {
						width: "100%",
						height: "180",
						class: "card-img-top",
						text: false,
						title: "卡片图片占位"
					}), createVNode("div", { class: "card-body" }, [
						createVNode("h5", { class: "card-title" }, "带有拉伸链接的卡片"),
						createVNode("p", { class: "card-text" }, "一些快速示例文本，用于在卡片标题的基础上扩充内容，构成卡片内容的主体。"),
						createVNode("p", { class: "card-text" }, [createVNode("a", {
							href: "#",
							class: "stretched-link text-danger",
							style: { "position": "relative" }
						}, [createTextVNode("此处的拉伸链接将无法生效，因为链接被添加了 "), createVNode("code", null, "position: relative")])]),
						createVNode("p", {
							class: "card-text bg-body-tertiary",
							style: { "transform": "rotate(0)" }
						}, [
							createTextVNode("这个"),
							createVNode("a", {
								href: "#",
								class: "text-warning stretched-link"
							}, "拉伸链接"),
							createTextVNode("只会铺满 "),
							createVNode("code", null, "p"),
							createTextVNode(" 标签的范围，因为该标签被应用了 transform。")
						])
					])])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#identifying-the-containing-block">识别包含块</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/stretched-link.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
