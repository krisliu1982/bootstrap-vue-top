import { d as _sfc_main$3, i as _sfc_main$5, l as _sfc_main$2, p as _sfc_main$1, u as _sfc_main$4 } from "../main.mjs";
import { t as _sfc_main$6 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/components/close-button.vue
var _sfc_main = {
	__name: "close-button",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_DeprecatedIn = _sfc_main$2;
			const _component_Callout = _sfc_main$6;
			const _component_AddedIn = _sfc_main$3;
			const _component_ScssDocs = _sfc_main$4;
			const _component_DocsPager = _sfc_main$5;
			_push(`<!--[--><article class="bd-content"><h1>关闭按钮</h1><p class="lead">一个通用的关闭按钮，用于关闭模态框和警告框等内容。</p><h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2><p>使用 <code>.btn-close</code> 为组件提供关闭或隐藏选项。默认样式较为简单，但高度可自定义。修改 Sass 变量即可替换默认的 <code>background-image</code>。<strong>务必为屏幕阅读器提供文本</strong>，就像我们使用 <code>aria-label</code> 所做的那样。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<button type=\"button\" class=\"btn-close\" aria-label=\"Close\"></button>" }, null, _parent));
			_push(`<h2 id="disabled-state">禁用状态<a class="anchor-link" href="#disabled-state" aria-label="禁用状态链接"></a></h2><p>被禁用的关闭按钮会改变其 <code>opacity</code>。我们还应用了 <code>pointer-events: none</code> 和 <code>user-select: none</code>，以防止触发悬停和激活状态。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<button type=\"button\" class=\"btn-close\" disabled aria-label=\"Close\"></button>" }, null, _parent));
			_push(`<h2 id="dark-variant">深色变体<a class="anchor-link" href="#dark-variant" aria-label="深色变体链接"></a></h2>`);
			_push(ssrRenderComponent(_component_DeprecatedIn, { version: "5.3.0" }, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>请注意！</strong> 自 v5.3.0 起，<code${_scopeId}>.btn-close-white</code> 类已废弃。请改用 <code${_scopeId}>data-bs-theme=&quot;dark&quot;</code> 来更改关闭按钮的颜色模式。</p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "请注意！"),
						createTextVNode(" 自 v5.3.0 起，"),
						createVNode("code", null, ".btn-close-white"),
						createTextVNode(" 类已废弃。请改用 "),
						createVNode("code", null, "data-bs-theme=\"dark\""),
						createTextVNode(" 来更改关闭按钮的颜色模式。")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<p>在 <code>.btn-close</code> 或其父元素上添加 <code>data-bs-theme=&quot;dark&quot;</code> 即可反转关闭按钮。这会使用 <code>filter</code> 属性反转 <code>background-image</code>，而不会覆盖其值。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bg-dark",
				code: "<div data-bs-theme=\"dark\">\r\n  <button type=\"button\" class=\"btn-close\" aria-label=\"Close\"></button>\r\n  <button type=\"button\" class=\"btn-close\" disabled aria-label=\"Close\"></button>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_AddedIn, { version: "5.3.0" }, null, _parent));
			_push(`<p> 作为 Bootstrap 不断演进的 CSS 变量方案的一部分，关闭按钮现在在 <code>.btn-close</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。 </p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "close-css-vars",
				file: "scss/_close.scss"
			}, null, _parent));
			_push(`<h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "close-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#example">示例</a></li><li><a href="#disabled-state">禁用状态</a></li><li><a href="#dark-variant">深色变体</a></li><li><a href="#css">CSS</a><ul><li><a href="#variables">变量</a></li><li><a href="#sass-variables">Sass 变量</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/components/close-button.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
