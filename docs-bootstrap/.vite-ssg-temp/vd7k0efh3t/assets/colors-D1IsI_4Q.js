import { d as _sfc_main$2, i as _sfc_main$4, m as data_default, p as _sfc_main$1, u as _sfc_main$3 } from "../main.mjs";
import { t as _sfc_main$5 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$6 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/utilities/colors.vue
var _sfc_main = {
	__name: "colors",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$6;
			const _component_Example = _sfc_main$1;
			const _component_AddedIn = _sfc_main$2;
			const _component_CodeWrapper = _sfc_main$5;
			const _component_ScssDocs = _sfc_main$3;
			const _component_DocsPager = _sfc_main$4;
			_push(`<!--[--><article class="bd-content"><h1>颜色</h1><p class="lead">通过一些颜色工具类，用 \`color\` 传达含义。同时还支持为链接设置带有悬停状态的样式。</p>`);
			_push(ssrRenderComponent(_component_Callout, { name: "warning-color-assistive-technologies" }, null, _parent));
			_push(`<h2 id="colors">颜色<a class="anchor-link" href="#colors" aria-label="颜色链接"></a></h2><p> 使用颜色工具类为文本着色。如果你想为链接着色，可以使用 <a href="/helpers/colored-links"><code>.link-*</code> 工具类</a>，它们具有 <code>:hover</code> 和 <code>:focus</code> 状态。 </p>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}>由我们最初的 <code${_scopeId}>\$theme-colors</code> Sass 映射生成的 <code${_scopeId}>.text-*</code> 之类的颜色工具类尚不能响应颜色模式，不过任何 <code${_scopeId}>.text-*-emphasis</code> 工具类则可以。此问题将在 v6 中解决。</p>`);
					else return [createVNode("p", null, [
						createTextVNode("由我们最初的 "),
						createVNode("code", null, "$theme-colors"),
						createTextVNode(" Sass 映射生成的 "),
						createVNode("code", null, ".text-*"),
						createTextVNode(" 之类的颜色工具类尚不能响应颜色模式，不过任何 "),
						createVNode("code", null, ".text-*-emphasis"),
						createTextVNode(" 工具类则可以。此问题将在 v6 中解决。")
					])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_Example, { code: [...unref(data_default)["theme-colors"].map((themeColor) => `<p class="text-${themeColor.name}${themeColor.contrast_color ? ` bg-${themeColor.contrast_color}` : ``}">.text-${themeColor.name}</p>
<p class="text-${themeColor.name}-emphasis">.text-${themeColor.name}-emphasis</p>`), `<p class="text-body">.text-body</p>
<p class="text-body-emphasis">.text-body-emphasis</p>
<p class="text-body-secondary">.text-body-secondary</p>
<p class="text-body-tertiary">.text-body-tertiary</p>

<p class="text-black bg-white">.text-black</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black-50 bg-white">.text-black-50</p>
<p class="text-white-50 bg-dark">.text-white-50</p>`].join("\n") }, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>弃用：</strong>随着 <code${_scopeId}>.text-opacity-*</code> 工具类和文本工具类 CSS 变量的加入，<code${_scopeId}>.text-black-50</code> 和 <code${_scopeId}>.text-white-50</code> 自 v5.1.0 起已被弃用。它们将在 v6.0.0 中移除。</p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "弃用："),
						createTextVNode("随着 "),
						createVNode("code", null, ".text-opacity-*"),
						createTextVNode(" 工具类和文本工具类 CSS 变量的加入，"),
						createVNode("code", null, ".text-black-50"),
						createTextVNode(" 和 "),
						createVNode("code", null, ".text-white-50"),
						createTextVNode(" 自 v5.1.0 起已被弃用。它们将在 v6.0.0 中移除。")
					])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>弃用：</strong>随着扩展主题颜色和变量的加入，<code${_scopeId}>.text-muted</code> 工具类自 v5.3.0 起已被弃用。其默认值也已重新分配给新的 <code${_scopeId}>--bs-secondary-color</code> CSS 变量，以更好地支持颜色模式。它将在 v6.0.0 中移除。</p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "弃用："),
						createTextVNode("随着扩展主题颜色和变量的加入，"),
						createVNode("code", null, ".text-muted"),
						createTextVNode(" 工具类自 v5.3.0 起已被弃用。其默认值也已重新分配给新的 "),
						createVNode("code", null, "--bs-secondary-color"),
						createTextVNode(" CSS 变量，以更好地支持颜色模式。它将在 v6.0.0 中移除。")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="opacity">不透明度<a class="anchor-link" href="#opacity" aria-label="不透明度链接"></a></h2>`);
			_push(ssrRenderComponent(_component_AddedIn, { version: "5.1.0" }, null, _parent));
			_push(`<p>从 v5.1.0 起，文本颜色工具类使用 Sass 配合 CSS 变量生成。这样无需编译即可实时更改颜色，并实现动态 alpha 透明度变化。</p><h3 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h3><p>以我们默认的 <code>.text-primary</code> 工具类为例。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".text-primary {\r\n  --bs-text-opacity: 1;\r\n  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;\r\n}\r\n",
				lang: "css"
			}, null, _parent));
			_push(`<p> 我们使用 <code>--bs-primary</code> 的 RGB 版本（值为 <code>13, 110, 253</code>）CSS 变量，并附加第二个 CSS 变量 <code>--bs-text-opacity</code> 用于 alpha 透明度（得益于局部 CSS 变量，其默认值为 <code>1</code>）。这意味着你现在每次使用 <code>.text-primary</code> 时，计算得到的 <code>color</code> 值都是 <code>rgba(13, 110, 253, 1)</code>。每个 <code>.text-*</code> 类内部的局部 CSS 变量可避免继承问题，因此嵌套的工具类实例不会自动带有被修改的 alpha 透明度。 </p><h3 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h3><p>要更改该不透明度，可通过自定义样式或内联样式覆盖 <code>--bs-text-opacity</code>。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"text-primary\">This is default primary text</div>\r\n<div class=\"text-primary\" style=\"--bs-text-opacity: .5;\">This is 50% opacity primary text</div>" }, null, _parent));
			_push(`<p>或者，从任意 <code>.text-opacity</code> 工具类中选择：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"text-primary\">This is default primary text</div>\r\n<div class=\"text-primary text-opacity-75\">This is 75% opacity primary text</div>\r\n<div class=\"text-primary text-opacity-50\">This is 50% opacity primary text</div>\r\n<div class=\"text-primary text-opacity-25\">This is 25% opacity primary text</div>" }, null, _parent));
			_push(`<h2 id="specificity">优先级<a class="anchor-link" href="#specificity" aria-label="优先级链接"></a></h2><p> 有时由于另一个选择器的优先级，上下文类无法生效。在某些情况下，一个足够的变通方法是将元素的内容包裹在带有目标类的 <code>&lt;div&gt;</code> 或更具语义的元素中。 </p><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2><p> 除了以下 Sass 功能之外，建议阅读有关我们内置的 <a href="/customize/css-variables">CSS 自定义属性</a>（又称 CSS 变量）的内容，了解更多颜色等信息。 </p><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3><p>大多数 <code>color</code> 工具类由我们的主题颜色生成，这些主题颜色是从通用调色板变量重新分配的。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "color-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-color-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<p>灰度颜色也是可用的，但只有一部分会被用于生成工具类。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "gray-color-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-text-map",
				file: "scss/_maps.scss"
			}, null, _parent));
			_push(`<p>用于在浅色和深色模式下设置 <code>.text-*-emphasis</code> 工具类中颜色的变量：</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-text-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-text-dark-variables",
				file: "scss/_variables-dark.scss"
			}, null, _parent));
			_push(`<h3 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射链接"></a></h3><p>随后主题颜色会被放入 Sass 映射中，以便我们遍历它们来生成工具类、组件修饰符等。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-colors-map",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<p> 灰度颜色也可以作为 Sass 映射使用。 <strong>该映射不用于生成任何工具类。</strong></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "gray-colors-map",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<p>RGB 颜色由另一个独立的 Sass 映射生成：</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-colors-rgb",
				file: "scss/_maps.scss"
			}, null, _parent));
			_push(`<p>颜色不透明度在此基础上构建，使用它们自己的映射，并由工具类 API 使用：</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utilities-text-colors",
				file: "scss/_maps.scss"
			}, null, _parent));
			_push(`<p>颜色模式自适应的文本颜色也可以作为 Sass 映射使用：</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-text-map",
				file: "scss/_maps.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-text-dark-map",
				file: "scss/_maps.scss"
			}, null, _parent));
			_push(`<h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 颜色工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-color",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#colors">颜色</a></li><li><a href="#opacity">不透明度</a><ul><li><a href="#how-it-works">工作原理</a></li><li><a href="#example">示例</a></li></ul></li><li><a href="#specificity">优先级</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li><li><a href="#sass-maps">Sass 映射</a></li><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/colors.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
