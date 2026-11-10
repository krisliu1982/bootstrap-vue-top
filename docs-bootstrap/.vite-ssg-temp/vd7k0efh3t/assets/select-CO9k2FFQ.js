import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/forms/select.vue
var _sfc_main = {
	__name: "select",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>选择框</h1><p class="lead">使用自定义 CSS 定制原生 \`&lt;select&gt;\`，改变元素的初始外观。</p><h2 id="default">默认<a class="anchor-link" href="#default" aria-label="默认链接"></a></h2><p>自定义 <code>&lt;select&gt;</code> 菜单只需一个自定义类 <code>.form-select</code> 即可触发自定义样式。由于浏览器限制，自定义样式仅限于 <code>&lt;select&gt;</code> 的初始外观，无法修改 <code>&lt;option&gt;</code>。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<select class=\"form-select\" aria-label=\"Default select example\">\r\n  <option selected>Open this select menu</option>\r\n  <option value=\"1\">One</option>\r\n  <option value=\"2\">Two</option>\r\n  <option value=\"3\">Three</option>\r\n</select>" }, null, _parent));
			_push(`<h2 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h2><p>你还可以选择小型和大型自定义选择框，以匹配尺寸相同的文本输入框。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<select class=\"form-select form-select-lg mb-3\" aria-label=\"Large select example\">\r\n  <option selected>Open this select menu</option>\r\n  <option value=\"1\">One</option>\r\n  <option value=\"2\">Two</option>\r\n  <option value=\"3\">Three</option>\r\n</select>\r\n\r\n<select class=\"form-select form-select-sm\" aria-label=\"Small select example\">\r\n  <option selected>Open this select menu</option>\r\n  <option value=\"1\">One</option>\r\n  <option value=\"2\">Two</option>\r\n  <option value=\"3\">Three</option>\r\n</select>" }, null, _parent));
			_push(`<p>同样支持 <code>multiple</code> 属性：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<select class=\"form-select\" multiple aria-label=\"Multiple select example\">\r\n  <option selected>Open this select menu</option>\r\n  <option value=\"1\">One</option>\r\n  <option value=\"2\">Two</option>\r\n  <option value=\"3\">Three</option>\r\n</select>" }, null, _parent));
			_push(`<p><code>size</code> 属性也是如此：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<select class=\"form-select\" size=\"3\" aria-label=\"Size 3 select example\">\r\n  <option selected>Open this select menu</option>\r\n  <option value=\"1\">One</option>\r\n  <option value=\"2\">Two</option>\r\n  <option value=\"3\">Three</option>\r\n</select>" }, null, _parent));
			_push(`<h2 id="disabled">禁用状态<a class="anchor-link" href="#disabled" aria-label="禁用状态链接"></a></h2><p>在选择框上添加 <code>disabled</code> 布尔属性，可使其呈现灰色外观并移除指针事件。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<select class=\"form-select\" aria-label=\"Disabled select example\" disabled>\r\n  <option selected>Open this select menu</option>\r\n  <option value=\"1\">One</option>\r\n  <option value=\"2\">Two</option>\r\n  <option value=\"3\">Three</option>\r\n</select>" }, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "form-select-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#default">默认</a></li><li><a href="#sizing">尺寸</a></li><li><a href="#disabled">禁用状态</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/forms/select.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
