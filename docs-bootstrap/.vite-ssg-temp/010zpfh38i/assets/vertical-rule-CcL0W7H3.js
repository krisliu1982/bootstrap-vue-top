import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/vertical-rule.vue
var _sfc_main = {
	__name: "vertical-rule",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>垂直分隔线</h1><p class="lead">使用自定义的垂直分隔线工具类创建类似 \`&lt;hr&gt;\` 元素的垂直分隔线。</p><h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2><p>垂直分隔线的灵感来自 <code>&lt;hr&gt;</code> 元素，让你可以在常见布局中创建垂直分隔线。它们的样式与 <code>&lt;hr&gt;</code> 元素类似：</p><ul><li>宽度为 <code>1px</code></li><li><code>min-height</code> 为 <code>1em</code></li><li>颜色通过 <code>currentColor</code> 和 <code>opacity</code> 设置</li></ul><p>可根据需要使用额外的样式进行定制。</p><h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"vr\"></div>" }, null, _parent));
			_push(`<p>垂直分隔线在弹性布局中会按比例缩放高度：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"d-flex\" style=\"height: 200px;\">\r\n  <div class=\"vr\"></div>\r\n</div>" }, null, _parent));
			_push(`<h2 id="with-stacks">与堆叠配合使用<a class="anchor-link" href="#with-stacks" aria-label="与堆叠配合使用链接"></a></h2><p>它们也可以用在<a href="/helpers/stacks">堆叠</a>中：</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"hstack gap-3\">\r\n  <div class=\"p-2\">First item</div>\r\n  <div class=\"p-2 ms-auto\">Second item</div>\r\n  <div class=\"vr\"></div>\r\n  <div class=\"p-2\">Third item</div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3><p>定制垂直分隔线的 Sass 变量以更改其宽度。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "vr-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#how-it-works">工作原理</a></li><li><a href="#example">示例</a></li><li><a href="#with-stacks">与堆叠配合使用</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/vertical-rule.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
