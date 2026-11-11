import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/forms/range.vue
var _sfc_main = {
	__name: "range",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>范围滑块</h1><p class="lead">使用我们自定义的范围输入框，获得一致的跨浏览器样式和内置的自定义能力。</p><h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="概述链接"></a></h2><p> 使用 <code>.form-range</code> 创建自定义的 <code>&lt;input type=&quot;range&quot;&gt;</code> 控件。轨道（背景）和滑块（数值）都经过样式处理，以便在各浏览器中外观一致。由于只有 Firefox 支持从滑块左侧或右侧“填充”轨道来直观表示进度，我们目前暂不支持该效果。 </p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<label for=\"range1\" class=\"form-label\">Example range</label>\r\n<input type=\"range\" class=\"form-range\" id=\"range1\">" }, null, _parent));
			_push(`<h2 id="disabled">禁用状态<a class="anchor-link" href="#disabled" aria-label="禁用状态链接"></a></h2><p>在输入框上添加 <code>disabled</code> 布尔属性，可使其呈现灰色外观、移除指针事件并阻止获得焦点。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<label for=\"disabledRange\" class=\"form-label\">Disabled range</label>\r\n<input type=\"range\" class=\"form-range\" id=\"disabledRange\" disabled>" }, null, _parent));
			_push(`<h2 id="min-and-max">最小值与最大值<a class="anchor-link" href="#min-and-max" aria-label="最小值与最大值链接"></a></h2><p>范围输入框对 <code>min</code> 和 <code>max</code> 有隐式值，分别为 <code>0</code> 和 <code>100</code>。你可以使用 <code>min</code> 和 <code>max</code> 属性为它们指定新值。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<label for=\"range2\" class=\"form-label\">Example range</label>\r\n<input type=\"range\" class=\"form-range\" min=\"0\" max=\"5\" id=\"range2\">" }, null, _parent));
			_push(`<h2 id="steps">步长<a class="anchor-link" href="#steps" aria-label="步长链接"></a></h2><p>默认情况下，范围输入框会“吸附”到整数值。要改变这一点，你可以指定 <code>step</code> 值。在下面的示例中，我们通过 <code>step=&quot;0.5&quot;</code> 将步数翻倍。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<label for=\"range3\" class=\"form-label\">Example range</label>\r\n<input type=\"range\" class=\"form-range\" min=\"0\" max=\"5\" step=\"0.5\" id=\"range3\">" }, null, _parent));
			_push(`<h2 id="output-value">输出值<a class="anchor-link" href="#output-value" aria-label="输出值链接"></a></h2><p>可以使用 <code>output</code> 元素配合少量 JavaScript 来显示范围输入框的值。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<label for=\"range4\" class=\"form-label\">Example range</label>\r\n<input type=\"range\" class=\"form-range\" min=\"0\" max=\"100\" value=\"50\" id=\"range4\">\r\n<output for=\"range4\" id=\"rangeValue\" aria-hidden=\"true\"></output>\r\n\r\n<script>\r\n  // This is an example script, please modify as needed\r\n  const rangeInput = document.getElementById('range4');\r\n  const rangeOutput = document.getElementById('rangeValue');\r\n\r\n  // Set initial value\r\n  rangeOutput.textContent = rangeInput.value;\r\n\r\n  rangeInput.addEventListener('input', function() {\r\n    rangeOutput.textContent = this.value;\r\n  });\r\n\r\n\r\n<\/script>" }, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "form-range-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#overview">概述</a></li><li><a href="#disabled">禁用状态</a></li><li><a href="#min-and-max">最小值与最大值</a></li><li><a href="#steps">步长</a></li><li><a href="#output-value">输出值</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/forms/range.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
