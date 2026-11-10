import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/utilities/interactions.vue
var _sfc_main = {
	__name: "interactions",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>交互</h1><p class="lead">用于更改用户与网站内容交互方式的工具类。</p><h2 id="text-selection">文本选择<a class="anchor-link" href="#text-selection" aria-label="文本选择链接"></a></h2><p>更改用户与内容交互时选择内容的方式。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<p class=\"user-select-all\">This paragraph will be entirely selected when clicked by the user.</p>\r\n<p class=\"user-select-auto\">This paragraph has default select behavior.</p>\r\n<p class=\"user-select-none\">This paragraph will not be selectable when clicked by the user.</p>" }, null, _parent));
			_push(`<h2 id="pointer-events">指针事件<a class="anchor-link" href="#pointer-events" aria-label="指针事件链接"></a></h2><p>Bootstrap 提供了 <code>.pe-none</code> 和 <code>.pe-auto</code> 类，用于阻止或添加元素交互。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<p><a href=\"#\" class=\"pe-none\" tabindex=\"-1\" aria-disabled=\"true\">This link</a>can not be clicked.</p>\r\n<p><a href=\"#\" class=\"pe-auto\">This link</a>can be clicked (this is default behavior).</p>\r\n<p class=\"pe-none\"><a href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">This link</a>can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However,<a href=\"#\" class=\"pe-auto\">this link</a>has a <code>pe-auto</code> class and can be clicked.</p>" }, null, _parent));
			_push(`<p><code>.pe-none</code> 类（及其设置的 <code>pointer-events</code> CSS 属性）只会阻止与指针（鼠标、触控笔、触摸）的交互。带有 <code>.pe-none</code> 的链接和控件默认仍然可供键盘用户聚焦和操作。要确保即使对键盘用户也完全失效，你可能需要添加额外的属性，例如 <code>tabindex=&quot;-1&quot;</code>（阻止它们获得键盘焦点）和 <code>aria-disabled=&quot;true&quot;</code>（向辅助技术传达它们实际上已被禁用的信息），并且可能需要使用 JavaScript 来完全阻止其可操作性。 </p><p>如果可能的话，更简单的解决方案是：</p><ul><li>对于表单控件，添加 <code>disabled</code> HTML 属性。</li><li>对于链接，移除 <code>href</code> 属性，使其成为不可交互的锚点或占位链接。</li></ul><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2><h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 交互工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-interaction",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#text-selection">文本选择</a></li><li><a href="#pointer-events">指针事件</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/interactions.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
