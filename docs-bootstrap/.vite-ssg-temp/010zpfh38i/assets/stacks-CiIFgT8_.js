import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as _sfc_main$4 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/stacks.vue
var _sfc_main = {
	__name: "stacks",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$4;
			const _component_Example = _sfc_main$1;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>堆叠 (Stacks)</h1><p class="lead">构建在弹性布局工具类基础上的简写工具类，让组件布局比以往更快、更简单。</p><p> 堆叠组件为应用一系列弹性布局属性提供了捷径，可快速轻松地在 Bootstrap 中创建布局。该概念和实现的灵感归功于开源 <a href="https://almonk.github.io/pylon/">Pylon 项目</a>。 </p>`);
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>请注意！</strong>在 Safari 14.5 之前的版本中，不支持弹性布局的间隔（gap）工具类，因此请考虑验证目标浏览器的支持情况。网格布局应该没有问题。<a href="https://caniuse.com/flexbox-gap"${_scopeId}>了解更多</a>。</p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "请注意！"),
						createTextVNode("在 Safari 14.5 之前的版本中，不支持弹性布局的间隔（gap）工具类，因此请考虑验证目标浏览器的支持情况。网格布局应该没有问题。"),
						createVNode("a", { href: "https://caniuse.com/flexbox-gap" }, "了解更多"),
						createTextVNode("。")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="vertical">垂直<a class="anchor-link" href="#vertical" aria-label="垂直链接"></a></h2><p>使用 <code>.vstack</code> 创建垂直布局。堆叠的项目默认占满宽度。使用 <code>.gap-*</code> 工具类在项目之间添加间距。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"vstack gap-3\">\r\n  <div class=\"p-2\">First item</div>\r\n  <div class=\"p-2\">Second item</div>\r\n  <div class=\"p-2\">Third item</div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="horizontal">水平<a class="anchor-link" href="#horizontal" aria-label="水平链接"></a></h2><p>使用 <code>.hstack</code> 创建水平布局。堆叠的项目默认垂直居中，且仅占据所需的宽度。使用 <code>.gap-*</code> 工具类在项目之间添加间距。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"hstack gap-3\">\r\n  <div class=\"p-2\">First item</div>\r\n  <div class=\"p-2\">Second item</div>\r\n  <div class=\"p-2\">Third item</div>\r\n</div>"
			}, null, _parent));
			_push(`<p>使用像 <code>.ms-auto</code> 这样的水平外边距工具类作为间隔：</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"hstack gap-3\">\r\n  <div class=\"p-2\">First item</div>\r\n  <div class=\"p-2 ms-auto\">Second item</div>\r\n  <div class=\"p-2\">Third item</div>\r\n</div>"
			}, null, _parent));
			_push(`<p>以及配合<a href="/helpers/vertical-rule">竖直分隔线</a>使用：</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"hstack gap-3\">\r\n  <div class=\"p-2\">First item</div>\r\n  <div class=\"p-2 ms-auto\">Second item</div>\r\n  <div class=\"vr\"></div>\r\n  <div class=\"p-2\">Third item</div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2><p>使用 <code>.vstack</code> 堆叠按钮和其他元素：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"vstack gap-2 col-md-5 mx-auto\">\r\n  <button type=\"button\" class=\"btn btn-secondary\">Save changes</button>\r\n  <button type=\"button\" class=\"btn btn-outline-secondary\">Cancel</button>\r\n</div>" }, null, _parent));
			_push(`<p>使用 <code>.hstack</code> 创建内联表单：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"hstack gap-3\">\r\n  <input class=\"form-control me-auto\" type=\"text\" placeholder=\"Add your item here...\" aria-label=\"Add your item here...\">\r\n  <button type=\"button\" class=\"btn btn-secondary\">Submit</button>\r\n  <div class=\"vr\"></div>\r\n  <button type=\"button\" class=\"btn btn-outline-danger\">Reset</button>\r\n</div>" }, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "stacks",
				file: "scss/helpers/_stacks.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#vertical">垂直</a></li><li><a href="#horizontal">水平</a></li><li><a href="#examples">示例</a></li><li><a href="#css">CSS</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/stacks.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
