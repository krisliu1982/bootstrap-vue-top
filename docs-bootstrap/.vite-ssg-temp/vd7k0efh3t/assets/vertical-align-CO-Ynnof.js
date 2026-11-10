import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/utilities/vertical-align.vue
var _sfc_main = {
	__name: "vertical-align",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>垂直对齐</h1><p class="lead">轻松更改内联、内联块、内联表格和表格单元格元素的垂直对齐方式。</p><p> 使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align"><code>vertical-alignment</code></a> 工具类更改元素的对齐方式。请注意，vertical-align 仅影响内联、内联块、内联表格和表格单元格元素。 </p><p>根据需要从 <code>.align-baseline</code>、<code>.align-top</code>、<code>.align-middle</code>、<code>.align-bottom</code>、<code>.align-text-bottom</code> 和 <code>.align-text-top</code> 中选择。</p><p>要将非内联内容（如 <code>&lt;div&gt;</code> 等）垂直居中，请使用我们的<a href="/utilities/flex#align-items">弹性布局工具类</a>。</p><p>与内联元素配合使用：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<span class=\"align-baseline\">baseline</span>\r\n<span class=\"align-top\">top</span>\r\n<span class=\"align-middle\">middle</span>\r\n<span class=\"align-bottom\">bottom</span>\r\n<span class=\"align-text-top\">text-top</span>\r\n<span class=\"align-text-bottom\">text-bottom</span>" }, null, _parent));
			_push(`<p>与表格单元格配合使用：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<table style=\"height: 100px;\">\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"align-baseline\">baseline</td>\r\n      <td class=\"align-top\">top</td>\r\n      <td class=\"align-middle\">middle</td>\r\n      <td class=\"align-bottom\">bottom</td>\r\n      <td class=\"align-text-top\">text-top</td>\r\n      <td class=\"align-text-bottom\">text-bottom</td>\r\n    </tr>\r\n  </tbody>\r\n</table>" }, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2><h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 垂直对齐工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-vertical-align",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#css">CSS</a><ul><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/vertical-align.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
