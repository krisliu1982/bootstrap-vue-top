import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/forms/floating-labels.vue
var _sfc_main = {
	__name: "floating-labels",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>浮动标签</h1><p class="lead">创建简洁美观、浮动在输入框上方的表单标签。</p><h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2><p>将一对 <code>&lt;input class=&quot;form-control&quot;&gt;</code> 和 <code>&lt;label&gt;</code> 元素包裹在 <code>.form-floating</code> 中，即可为 Bootstrap 的文本表单字段启用浮动标签。</p><p>每个 <code>&lt;input&gt;</code> 都需要一个非空的 <code>placeholder</code> 属性，因为我们纯 CSS 的浮动标签实现依赖 <code>:placeholder-shown</code> 伪元素来检测输入框是否为空。占位文本本身不可见，用户只能看到 <code>&lt;label&gt;</code>。</p><p>另外请注意，<code>&lt;input&gt;</code> 必须放在前面，这样我们才能使用兄弟选择器（即 <code>~</code>）。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"form-floating mb-3\">\r\n  <input type=\"email\" class=\"form-control\" id=\"floatingInput\" placeholder=\"name@example.com\">\r\n  <label for=\"floatingInput\">Email address</label>\r\n</div>\r\n<div class=\"form-floating\">\r\n  <input type=\"password\" class=\"form-control\" id=\"floatingPassword\" placeholder=\"Password\">\r\n  <label for=\"floatingPassword\">Password</label>\r\n</div>" }, null, _parent));
			_push(`<p>如果已定义了 <code>value</code>，<code>&lt;label&gt;</code> 会自动调整到浮动位置。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<form class=\"form-floating\">\r\n  <input type=\"email\" class=\"form-control\" id=\"floatingInputValue\" placeholder=\"name@example.com\" value=\"test@example.com\">\r\n  <label for=\"floatingInputValue\">Input with value</label>\r\n</form>" }, null, _parent));
			_push(`<p>表单校验样式也能正常生效。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<form class=\"form-floating\">\r\n  <input type=\"email\" class=\"form-control is-invalid\" id=\"floatingInputInvalid\" placeholder=\"name@example.com\" value=\"test@example.com\">\r\n  <label for=\"floatingInputInvalid\">Invalid input</label>\r\n</form>" }, null, _parent));
			_push(`<h2 id="textareas">文本域<a class="anchor-link" href="#textareas" aria-label="文本域链接"></a></h2><p>默认情况下，带有 <code>.form-control</code> 的 <code>&lt;textarea&gt;</code> 与 <code>&lt;input&gt;</code> 高度相同。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"form-floating\">\r\n  <textarea class=\"form-control\" placeholder=\"Leave a comment here\" id=\"floatingTextarea\"></textarea>\r\n  <label for=\"floatingTextarea\">Comments</label>\r\n</div>" }, null, _parent));
			_push(`<p>要为 <code>&lt;textarea&gt;</code> 设置自定义高度，请不要使用 <code>rows</code> 属性，而应显式设置 <code>height</code>（内联样式或自定义 CSS 均可）。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"form-floating\">\r\n  <textarea class=\"form-control\" placeholder=\"Leave a comment here\" id=\"floatingTextarea2\" style=\"height: 100px\"></textarea>\r\n  <label for=\"floatingTextarea2\">Comments</label>\r\n</div>" }, null, _parent));
			_push(`<h2 id="selects">选择框<a class="anchor-link" href="#selects" aria-label="选择框链接"></a></h2><p> 除 <code>.form-control</code> 外，浮动标签仅适用于 <code>.form-select</code>。它们的工作方式相同，但与 <code>&lt;input&gt;</code> 不同的是，<code>&lt;label&gt;</code> 将始终显示为浮动状态。<strong>不支持使用 <code>size</code> 和 <code>multiple</code> 的选择框。</strong></p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"form-floating\">\r\n  <select class=\"form-select\" id=\"floatingSelect\" aria-label=\"Floating label select example\">\r\n    <option selected>Open this select menu</option>\r\n    <option value=\"1\">One</option>\r\n    <option value=\"2\">Two</option>\r\n    <option value=\"3\">Three</option>\r\n  </select>\r\n  <label for=\"floatingSelect\">Works with selects</label>\r\n</div>" }, null, _parent));
			_push(`<h2 id="disabled">禁用状态<a class="anchor-link" href="#disabled" aria-label="禁用状态链接"></a></h2><p>在输入框、文本域或选择框上添加 <code>disabled</code> 布尔属性，可使其呈现灰色外观、移除指针事件并阻止获得焦点。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"form-floating mb-3\">\r\n  <input type=\"email\" class=\"form-control\" id=\"floatingInputDisabled\" placeholder=\"name@example.com\" disabled>\r\n  <label for=\"floatingInputDisabled\">Email address</label>\r\n</div>\r\n<div class=\"form-floating mb-3\">\r\n  <textarea class=\"form-control\" placeholder=\"Leave a comment here\" id=\"floatingTextareaDisabled\" disabled></textarea>\r\n  <label for=\"floatingTextareaDisabled\">Comments</label>\r\n</div>\r\n<div class=\"form-floating mb-3\">\r\n  <textarea class=\"form-control\" placeholder=\"Leave a comment here\" id=\"floatingTextarea2Disabled\" style=\"height: 100px\" disabled>Disabled textarea with some text inside</textarea>\r\n  <label for=\"floatingTextarea2Disabled\">Comments</label>\r\n</div>\r\n<div class=\"form-floating\">\r\n  <select class=\"form-select\" id=\"floatingSelectDisabled\" aria-label=\"Floating label disabled select example\" disabled>\r\n    <option selected>Open this select menu</option>\r\n    <option value=\"1\">One</option>\r\n    <option value=\"2\">Two</option>\r\n    <option value=\"3\">Three</option>\r\n  </select>\r\n  <label for=\"floatingSelectDisabled\">Works with selects</label>\r\n</div>" }, null, _parent));
			_push(`<h2 id="readonly-plaintext">只读纯文本<a class="anchor-link" href="#readonly-plaintext" aria-label="只读纯文本链接"></a></h2><p>浮动标签同样支持 <code>.form-control-plaintext</code>，这有助于在不影响页面布局的情况下，从可编辑的 <code>&lt;input&gt;</code> 切换为纯文本值。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"form-floating mb-3\">\r\n  <input type=\"email\" readonly class=\"form-control-plaintext\" id=\"floatingEmptyPlaintextInput\" placeholder=\"name@example.com\">\r\n  <label for=\"floatingEmptyPlaintextInput\">Empty input</label>\r\n</div>\r\n<div class=\"form-floating mb-3\">\r\n  <input type=\"email\" readonly class=\"form-control-plaintext\" id=\"floatingPlaintextInput\" placeholder=\"name@example.com\" value=\"name@example.com\">\r\n  <label for=\"floatingPlaintextInput\">Input with value</label>\r\n</div>" }, null, _parent));
			_push(`<h2 id="input-groups">输入框组<a class="anchor-link" href="#input-groups" aria-label="输入框组链接"></a></h2><p>浮动标签同样支持 <code>.input-group</code>。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"input-group mb-3\">\r\n  <span class=\"input-group-text\">@</span>\r\n  <div class=\"form-floating\">\r\n    <input type=\"text\" class=\"form-control\" id=\"floatingInputGroup1\" placeholder=\"Username\">\r\n    <label for=\"floatingInputGroup1\">Username</label>\r\n  </div>\r\n</div>" }, null, _parent));
			_push(`<p>在同时使用 <code>.input-group</code>、<code>.form-floating</code> 和表单校验时，<code>-feedback</code> 应放在 <code>.form-floating</code> 外部，但位于 <code>.input-group</code> 内部。这意味着反馈信息需要通过 JavaScript 显示。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"input-group has-validation\">\r\n  <span class=\"input-group-text\">@</span>\r\n  <div class=\"form-floating is-invalid\">\r\n    <input type=\"text\" class=\"form-control is-invalid\" id=\"floatingInputGroup2\" placeholder=\"Username\" required>\r\n    <label for=\"floatingInputGroup2\">Username</label>\r\n  </div>\r\n  <div class=\"invalid-feedback\">\r\n    Please choose a username.\r\n  </div>\r\n</div>" }, null, _parent));
			_push(`<h2 id="layout">布局<a class="anchor-link" href="#layout" aria-label="布局链接"></a></h2><p>在使用 Bootstrap 网格系统时，请务必将表单元素放在列类中。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"row g-2\">\r\n  <div class=\"col-md\">\r\n    <div class=\"form-floating\">\r\n      <input type=\"email\" class=\"form-control\" id=\"floatingInputGrid\" placeholder=\"name@example.com\" value=\"mdo@example.com\">\r\n      <label for=\"floatingInputGrid\">Email address</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md\">\r\n    <div class=\"form-floating\">\r\n      <select class=\"form-select\" id=\"floatingSelectGrid\">\r\n        <option selected>Open this select menu</option>\r\n        <option value=\"1\">One</option>\r\n        <option value=\"2\">Two</option>\r\n        <option value=\"3\">Three</option>\r\n      </select>\r\n      <label for=\"floatingSelectGrid\">Works with selects</label>\r\n    </div>\r\n  </div>\r\n</div>" }, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "form-floating-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#example">示例</a></li><li><a href="#textareas">文本域</a></li><li><a href="#selects">选择框</a></li><li><a href="#disabled">禁用状态</a></li><li><a href="#readonly-plaintext">只读纯文本</a></li><li><a href="#input-groups">输入框组</a></li><li><a href="#layout">布局</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/forms/floating-labels.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
