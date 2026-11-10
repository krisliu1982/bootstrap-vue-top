import { i as _sfc_main$3, p as _sfc_main$2, u as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$4 } from "./Callout-8L5ndyTZ.js";
import { t as _sfc_main$5 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/customize/components.vue
var _sfc_main = {
	__name: "components",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ScssDocs = _sfc_main$1;
			const _component_Example = _sfc_main$2;
			const _component_CodeWrapper = _sfc_main$5;
			const _component_Callout = _sfc_main$4;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>组件</h1><p class="lead">了解我们为何以及如何以响应式方式、使用基础类和修饰类来构建几乎所有组件。</p><h2 id="base-classes">基础类<a class="anchor-link" href="#base-classes" aria-label="基础类"></a></h2><p>Bootstrap 的组件在很大程度上采用基础-修饰（base-modifier）命名法构建。我们将尽可能多的共享属性归入一个基础类，例如 <code>.btn</code>，然后将每个变体的单独样式归入修饰类，例如 <code>.btn-primary</code> 或 <code>.btn-success</code>。</p><p> 为了构建修饰类，我们使用 Sass 的 <code>@each</code> 循环遍历 Sass 映射。这对于根据 <code>\$theme-colors</code> 生成组件的变体，以及为每个断点创建响应式变体特别有帮助。当你自定义这些 Sass 映射并重新编译时，你会自动看到这些循环中反映出你的更改。 </p><p>请查阅<a href="/customize/sass#maps-and-loops">我们的 Sass 映射和循环文档</a>，了解如何自定义这些循环，并将 Bootstrap 的基础-修饰方法扩展到你的代码中。</p><h2 id="modifiers">修饰类<a class="anchor-link" href="#modifiers" aria-label="修饰类"></a></h2><p> Bootstrap 的许多组件都采用基础-修饰类方法构建。这意味着大部分样式集中在基础类中（例如 <code>.btn</code>），而样式变体则限定在修饰类中（例如 <code>.btn-danger</code>）。这些修饰类由 <code>\$theme-colors</code> 映射构建，便于自定义修饰类的数量和名称。 </p><p>下面通过两个示例展示我们如何遍历 <code>\$theme-colors</code> 映射，为 <code>.alert</code> 和 <code>.list-group</code> 组件生成修饰类。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "alert-modifiers",
				file: "scss/_alert.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "list-group-modifiers",
				file: "scss/_list-group.scss"
			}, null, _parent));
			_push(`<h2 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="响应式"></a></h2><p>这些 Sass 循环也不限于颜色映射。你还可以为组件生成响应式变体。例如，我们对下拉菜单的响应式对齐，其中将 <code>\$grid-breakpoints</code> Sass 映射的 <code>@each</code> 循环与媒体查询 include 结合使用。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "responsive-breakpoints",
				file: "scss/_dropdown.scss"
			}, null, _parent));
			_push(`<p>如果你修改了 <code>\$grid-breakpoints</code>，你的更改将应用于所有遍历该映射的循环。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "grid-breakpoints",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<p> 有关如何修改 Sass 映射和变量的更多信息和示例，请参阅 <a href="/layout/grid#css">栅格文档的 CSS 部分</a>。 </p><h2 id="creating-your-own">创建你自己的组件<a class="anchor-link" href="#creating-your-own" aria-label="创建你自己的组件"></a></h2><p>我们鼓励你在使用 Bootstrap 创建自己的组件时遵循这些指导原则。我们已在文档和示例中的自定义组件上扩展了这种方法。像我们的提示框（callout）这样的组件，其构建方式与我们提供的组件完全一样，都使用基础类和修饰类。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				showMarkup: false,
				code: "<div class=\"bd-callout my-0\">\r\n      <strong>This is a callout.</strong> We built it custom for our docs so our messages to you stand out. It has three variants via modifier classes.\r\n    </div>\r\n    "
			}, null, _parent));
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"callout\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<p> 在你的 CSS 中，大致如下所示，大部分样式通过 <code>.callout</code> 完成。然后，每个变体之间的独特样式通过修饰类控制。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Base class\r\n.callout {}\r\n\r\n// Modifier classes\r\n.callout-info {}\r\n.callout-warning {}\r\n.callout-danger {}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p>对于这些提示框，其独特样式只是一个 <code>border-left-color</code>。当把该基础类与其中一个修饰类组合时，你就得到了完整的组件族：</p>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>这是一个信息提示框。</strong>用于展示其效果的示例文本。</p>`);
					else return [createVNode("p", null, [createVNode("strong", null, "这是一个信息提示框。"), createTextVNode("用于展示其效果的示例文本。")])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>这是一个警告提示框。</strong>用于展示其效果的示例文本。</p>`);
					else return [createVNode("p", null, [createVNode("strong", null, "这是一个警告提示框。"), createTextVNode("用于展示其效果的示例文本。")])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "danger" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>这是一个危险提示框。</strong>用于展示其效果的示例文本。</p>`);
					else return [createVNode("p", null, [createVNode("strong", null, "这是一个危险提示框。"), createTextVNode("用于展示其效果的示例文本。")])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#base-classes">基础类</a></li><li><a href="#modifiers">修饰类</a></li><li><a href="#responsive">响应式</a></li><li><a href="#creating-your-own">创建你自己的组件</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/customize/components.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
