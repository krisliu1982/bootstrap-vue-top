import { d as _sfc_main$2, f as _sfc_main$3, i as _sfc_main$6, m as data_default, n as _sfc_main$4, p as _sfc_main$1, u as _sfc_main$5 } from "../main.mjs";
import { t as _sfc_main$7 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$8 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, unref, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/utilities/borders.vue
var _sfc_main = {
	__name: "borders",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_Callout = _sfc_main$8;
			const _component_AddedIn = _sfc_main$2;
			const _component_CodeWrapper = _sfc_main$7;
			const _component_ExampleCustom = _sfc_main$3;
			const _component_Placeholder = _sfc_main$4;
			const _component_ScssDocs = _sfc_main$5;
			const _component_DocsPager = _sfc_main$6;
			_push(`<!--[--><article class="bd-content"><h1>边框</h1><p class="lead">使用边框工具类可以快速设置元素的边框及圆角。非常适合图片、按钮或任何其他元素。</p><h2 id="border">边框<a class="anchor-link" href="#border" aria-label="边框链接"></a></h2><p>使用边框工具类添加或移除元素的边框。可选择全部边框，或逐条设置。</p><h3 id="additive">添加<a class="anchor-link" href="#additive" aria-label="添加链接"></a></h3><p>为自定义元素添加边框：</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-border-utils",
				code: "<span class=\"border\"></span>\r\n<span class=\"border-top\"></span>\r\n<span class=\"border-end\"></span>\r\n<span class=\"border-bottom\"></span>\r\n<span class=\"border-start\"></span>"
			}, null, _parent));
			_push(`<h3 id="subtractive">移除<a class="anchor-link" href="#subtractive" aria-label="移除链接"></a></h3><p>或者移除边框：</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-border-utils",
				code: "<span class=\"border border-0\"></span>\r\n<span class=\"border border-top-0\"></span>\r\n<span class=\"border border-end-0\"></span>\r\n<span class=\"border border-bottom-0\"></span>\r\n<span class=\"border border-start-0\"></span>"
			}, null, _parent));
			_push(`<h2 id="color">颜色<a class="anchor-link" href="#color" aria-label="颜色链接"></a></h2>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}>由我们最初的 <code${_scopeId}>\$theme-colors</code> Sass 映射生成的 <code${_scopeId}>.border-*</code> 之类的边框工具类尚不能响应颜色模式，不过任何 <code${_scopeId}>.border-*-subtle</code> 工具类则可以。此问题将在 v6 中解决。</p>`);
					else return [createVNode("p", null, [
						createTextVNode("由我们最初的 "),
						createVNode("code", null, "$theme-colors"),
						createTextVNode(" Sass 映射生成的 "),
						createVNode("code", null, ".border-*"),
						createTextVNode(" 之类的边框工具类尚不能响应颜色模式，不过任何 "),
						createVNode("code", null, ".border-*-subtle"),
						createTextVNode(" 工具类则可以。此问题将在 v6 中解决。")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<p>使用基于主题颜色构建的工具类更改边框颜色。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-border-utils",
				code: [...unref(data_default)["theme-colors"].map((themeColor) => `<span class="border border-${themeColor.name}"></span>
<span class="border border-${themeColor.name}-subtle"></span>`), `<span class="border border-black"></span>
<span class="border border-white"></span>`].join("\n")
			}, null, _parent));
			_push(`<p>或者修改组件的默认 <code>border-color</code>：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"mb-4\">\r\n  <label for=\"exampleFormControlInput1\" class=\"form-label\">Email address</label>\r\n  <input type=\"email\" class=\"form-control border-success\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\r\n</div>\r\n\r\n<div class=\"h4 pb-2 mb-4 text-danger border-bottom border-danger\">\r\n  Dangerous heading\r\n</div>\r\n\r\n<div class=\"p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end\">\r\n  Changing border color and width\r\n</div>" }, null, _parent));
			_push(`<h2 id="opacity">不透明度<a class="anchor-link" href="#opacity" aria-label="不透明度链接"></a></h2>`);
			_push(ssrRenderComponent(_component_AddedIn, { version: "5.2.0" }, null, _parent));
			_push(`<p>Bootstrap 的 <code>border-{color}</code> 工具类使用 Sass 配合 CSS 变量生成。这样无需编译即可实时更改颜色，并实现动态 alpha 透明度变化。</p><h3 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h3><p>以我们默认的 <code>.border-success</code> 工具类为例。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".border-success {\r\n  --bs-border-opacity: 1;\r\n  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;\r\n}\r\n",
				lang: "css"
			}, null, _parent));
			_push(`<p> 我们使用 <code>--bs-success</code> 的 RGB 版本（值为 <code>25, 135, 84</code>）CSS 变量，并附加第二个 CSS 变量 <code>--bs-border-opacity</code> 用于 alpha 透明度（得益于局部 CSS 变量，其默认值为 <code>1</code>）。这意味着你现在每次使用 <code>.border-success</code> 时，计算得到的 <code>color</code> 值都是 <code>rgba(25, 135, 84, 1)</code>。每个 <code>.border-*</code> 类内部的局部 CSS 变量可避免继承问题，因此嵌套的工具类实例不会自动带有被修改的 alpha 透明度。 </p><h3 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h3><p>要更改该不透明度，可通过自定义样式或内联样式覆盖 <code>--bs-border-opacity</code>。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"border border-success p-2 mb-2\">This is default success border</div>\r\n    <div class=\"border border-success p-2\" style=\"--bs-border-opacity: .5;\">This is 50% opacity success border</div>" }, null, _parent));
			_push(`<p>或者，从任意 <code>.border-opacity</code> 工具类中选择：</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"border border-success p-2 mb-2\">This is default success border</div>\r\n<div class=\"border border-success p-2 mb-2 border-opacity-75\">This is 75% opacity success border</div>\r\n<div class=\"border border-success p-2 mb-2 border-opacity-50\">This is 50% opacity success border</div>\r\n<div class=\"border border-success p-2 mb-2 border-opacity-25\">This is 25% opacity success border</div>\r\n<div class=\"border border-success p-2 border-opacity-10\">This is 10% opacity success border</div>" }, null, _parent));
			_push(`<h2 id="width">宽度<a class="anchor-link" href="#width" aria-label="宽度链接"></a></h2>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-border-utils",
				code: "<span class=\"border border-1\"></span>\r\n<span class=\"border border-2\"></span>\r\n<span class=\"border border-3\"></span>\r\n<span class=\"border border-4\"></span>\r\n<span class=\"border border-5\"></span>"
			}, null, _parent));
			_push(`<h2 id="radius">圆角<a class="anchor-link" href="#radius" aria-label="圆角链接"></a></h2><p>为元素添加类即可轻松圆角化。</p>`);
			_push(ssrRenderComponent(_component_ExampleCustom, {
				class: "bd-example-rounded-utils",
				code: "<img src=\"...\" class=\"rounded\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-top\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-end\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-bottom\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-start\" alt=\"...\">"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded",
							title: "圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-top",
							title: "顶部圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-end",
							title: "右侧圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-bottom",
							title: "底部圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-start",
							title: "左侧圆角图片示例"
						}, null, _parent, _scopeId));
					} else return [
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded",
							title: "圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-top",
							title: "顶部圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-end",
							title: "右侧圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-bottom",
							title: "底部圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-start",
							title: "左侧圆角图片示例"
						})
					];
				}),
				_: 1
			}, _parent));
			_push(`<h3 id="sizes">尺寸<a class="anchor-link" href="#sizes" aria-label="尺寸链接"></a></h3><p>使用缩放类可以获得更大或更小的圆角。尺寸范围从 <code>0</code> 到 <code>5</code>，还包括 <code>circle</code> 和 <code>pill</code>，可以通过修改工具类 API 进行配置。</p>`);
			_push(ssrRenderComponent(_component_ExampleCustom, {
				class: "bd-example-rounded-utils",
				code: "<img src=\"...\" class=\"rounded-0\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-1\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-2\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-3\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-4\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-5\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-circle\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-pill\" alt=\"...\">"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-0",
							title: "无圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-1",
							title: "小圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-2",
							title: "默认圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-3",
							title: "大圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-4",
							title: "更大圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-5",
							title: "超大圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-circle",
							title: "完全圆形图片"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "150",
							height: "75",
							class: "rounded-pill",
							title: "胶囊形圆角图片"
						}, null, _parent, _scopeId));
					} else return [
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-0",
							title: "无圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-1",
							title: "小圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-2",
							title: "默认圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-3",
							title: "大圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-4",
							title: "更大圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-5",
							title: "超大圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-circle",
							title: "完全圆形图片"
						}),
						createVNode(_component_Placeholder, {
							width: "150",
							height: "75",
							class: "rounded-pill",
							title: "胶囊形圆角图片"
						})
					];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_ExampleCustom, {
				class: "bd-example-rounded-utils",
				code: "<img src=\"...\" class=\"rounded-bottom-1\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-start-2\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-end-circle\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-start-pill\" alt=\"...\">\r\n<img src=\"...\" class=\"rounded-5 rounded-top-0\" alt=\"...\">"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-bottom-1",
							title: "小圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-start-2",
							title: "左侧默认圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-end-circle",
							title: "右侧完全圆形图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-start-pill",
							title: "左侧胶囊形圆角图片示例"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-5 rounded-top-0",
							title: "超大顶部无圆角图片示例"
						}, null, _parent, _scopeId));
					} else return [
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-bottom-1",
							title: "小圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-start-2",
							title: "左侧默认圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-end-circle",
							title: "右侧完全圆形图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-start-pill",
							title: "左侧胶囊形圆角图片示例"
						}),
						createVNode(_component_Placeholder, {
							width: "75",
							height: "75",
							class: "rounded-5 rounded-top-0",
							title: "超大顶部无圆角图片示例"
						})
					];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2><h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_AddedIn, { version: "5.2.0" }, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "root-border-var",
				file: "scss/_root.scss"
			}, null, _parent));
			_push(`<h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "border-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "border-radius-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<p>用于在浅色和深色模式下设置 <code>.border-*-subtle</code> 工具类中 <code>border-color</code> 的变量：</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-border-subtle-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-border-subtle-dark-variables",
				file: "scss/_variables-dark.scss"
			}, null, _parent));
			_push(`<h3 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射链接"></a></h3><p>颜色模式自适应的边框颜色也可以作为 Sass 映射使用：</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-border-subtle-map",
				file: "scss/_maps.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "theme-border-subtle-dark-map",
				file: "scss/_maps.scss"
			}, null, _parent));
			_push(`<h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "border-radius-mixins",
				file: "scss/mixins/_border-radius.scss"
			}, null, _parent));
			_push(`<h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 边框工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-borders",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-border-radius",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(` `);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#border">边框</a><ul><li><a href="#additive">添加</a></li><li><a href="#subtractive">移除</a></li></ul></li><li><a href="#color">颜色</a></li><li><a href="#opacity">不透明度</a><ul><li><a href="#how-it-works">工作原理</a></li><li><a href="#example">示例</a></li></ul></li><li><a href="#width">宽度</a></li><li><a href="#radius">圆角</a><ul><li><a href="#sizes">尺寸</a></li></ul></li><li><a href="#css">CSS</a><ul><li><a href="#variables">变量</a></li><li><a href="#sass-variables">Sass 变量</a></li><li><a href="#sass-maps">Sass 映射</a></li><li><a href="#sass-mixins">Sass mixin</a></li><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/borders.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
