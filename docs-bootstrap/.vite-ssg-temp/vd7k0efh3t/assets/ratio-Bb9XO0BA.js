import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as _sfc_main$4 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$5 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/helpers/ratio.vue
var _sfc_main = {
	__name: "ratio",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$5;
			const _component_Example = _sfc_main$1;
			const _component_CodeWrapper = _sfc_main$4;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>比例</h1><p class="lead">使用生成的伪元素让元素保持你选择的长宽比。非常适合根据父元素宽度响应式地处理视频或幻灯片嵌入内容。</p><h2 id="about">关于<a class="anchor-link" href="#about" aria-label="关于链接"></a></h2><p> 使用比例工具类可以管理外部内容（如 <code>&lt;iframe&gt;</code>、<code>&lt;embed&gt;</code>、<code>&lt;video&gt;</code> 和 <code>&lt;object&gt;</code>）的长宽比。这些工具类也可用于任何标准 HTML 子元素（例如 <code>&lt;div&gt;</code> 或 <code>&lt;img&gt;</code>）。样式会从父级的 <code>.ratio</code> 类直接应用到子元素。 </p><p> 长宽比在 Sass 映射中声明，并通过 CSS 变量包含在每个类中，这也支持 <a href="#custom-ratios">自定义长宽比</a>。 </p>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>专业提示！</strong>你无需在 <code${_scopeId}>&lt;iframe&gt;</code> 上添加 <code${_scopeId}>frameborder=&quot;0&quot;</code>，因为我们在<a href="/content/reboot"${_scopeId}>Reboot</a>中已经为你覆盖了该设置。</p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "专业提示！"),
						createTextVNode("你无需在 "),
						createVNode("code", null, "<iframe>"),
						createTextVNode(" 上添加 "),
						createVNode("code", null, "frameborder=\"0\""),
						createTextVNode("，因为我们在"),
						createVNode("a", { href: "/content/reboot" }, "Reboot"),
						createTextVNode("中已经为你覆盖了该设置。")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2><p>将任意嵌入内容（如 <code>&lt;iframe&gt;</code>）包裹在带有 <code>.ratio</code> 和长宽比类的父元素中。得益于通配选择器 <code>.ratio &gt; *</code>，直接子元素会自动调整尺寸。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"ratio ratio-16x9\">\r\n  <iframe src=\"https://player.bilibili.com/player.html?bvid=BV15Kxu6nE9f\" title=\"bilibili video\" allowfullscreen></iframe>\r\n</div>" }, null, _parent));
			_push(`<h2 id="aspect-ratios">长宽比<a class="anchor-link" href="#aspect-ratios" aria-label="长宽比链接"></a></h2><p>可以使用修饰类来自定义长宽比。默认提供以下比例类：</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-ratios",
				code: "<div class=\"ratio ratio-1x1\">\r\n  <div>1x1</div>\r\n</div>\r\n<div class=\"ratio ratio-4x3\">\r\n  <div>4x3</div>\r\n</div>\r\n<div class=\"ratio ratio-16x9\">\r\n  <div>16x9</div>\r\n</div>\r\n<div class=\"ratio ratio-21x9\">\r\n  <div>21x9</div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="custom-ratios">自定义比例<a class="anchor-link" href="#custom-ratios" aria-label="自定义比例链接"></a></h2><p>每个 <code>.ratio-*</code> 类的选择器中都包含一个 CSS 自定义属性（或 CSS 变量）。你可以覆盖这个 CSS 变量，自己做一些简单的计算，就能即时创建自定义长宽比。</p><p>例如，要创建一个 2x1 的长宽比，可在 <code>.ratio</code> 上设置 <code>--bs-aspect-ratio: 50%</code>。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-ratios",
				code: "<div class=\"ratio\" style=\"--bs-aspect-ratio: 50%;\">\r\n  <div>2x1</div>\r\n</div>"
			}, null, _parent));
			_push(`<p>这个 CSS 变量使得跨断点修改长宽比变得非常方便。下面的示例起始为 4x3，但在中等断点时会变为自定义的 2x1。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".ratio-4x3 {\r\n  @include media-breakpoint-up(md) {\r\n    --bs-aspect-ratio: 50%; // 2x1\r\n  }\r\n}",
				lang: "scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-ratios bd-example-ratios-breakpoint",
				code: "<div class=\"ratio ratio-4x3\">\r\n  <div>4x3, then 2x1</div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射链接"></a></h2><p>在 <code>_variables.scss</code> 中，你可以修改想要使用的长宽比。以下是我们默认的 <code>\$ratio-aspect-ratios</code> 映射。按需修改该映射并重新编译 Sass 即可使用。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "aspect-ratios",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#about">关于</a></li><li><a href="#example">示例</a></li><li><a href="#aspect-ratios">长宽比</a></li><li><a href="#custom-ratios">自定义比例</a></li><li><a href="#sass-maps">Sass 映射</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/helpers/ratio.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
