import { i as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$2 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/getting-started/accessibility.vue
var _sfc_main = {
	__name: "accessibility",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$2;
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>无障碍访问</h1><p class="lead">简要概述 Bootstrap 在创建无障碍内容方面的特性和局限。</p><p>Bootstrap 提供了一套易于使用的框架，包含现成的样式、布局工具和交互组件，让开发者开箱即用地创建美观、功能丰富且无障碍的网站和应用程序。</p><h2 id="overview-and-limitations">概述与局限<a class="anchor-link" href="#overview-and-limitations" aria-label="概述与局限链接"></a></h2><p> 使用 Bootstrap 构建的任何项目，其整体的无障碍性在很大程度上取决于作者提供的标记结构、附加样式和脚本。但是，只要这些都实现得当，就完全可以使用 Bootstrap 创建满足<a href="https://www.w3.org/TR/WCAG/"><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.2</a>（A/AA/AAA）、<a href="https://www.section508.gov/">Section 508</a>及类似无障碍标准与要求的网站和应用程序。 </p><h3 id="structural-markup">结构化标记<a class="anchor-link" href="#structural-markup" aria-label="结构化标记链接"></a></h3><p>Bootstrap 的样式和布局可应用于多种多样的标记结构。本文档旨在为开发者提供最佳实践示例，以展示 Bootstrap 本身的用法并说明恰当的语义化标记，包括解决潜在无障碍问题的方式。</p><h3 id="interactive-components">交互组件<a class="anchor-link" href="#interactive-components" aria-label="交互组件链接"></a></h3><p> Bootstrap 的交互组件（例如模态对话框、下拉菜单和自定义工具提示）均为触屏、鼠标和键盘用户而设计。通过使用相关的<a href="https://www.w3.org/WAI/standards-guidelines/aria/"><abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr></a>角色和属性，这些组件也应能被辅助技术（如屏幕阅读器）所理解并操作。 </p><p> 由于 Bootstrap 的组件刻意设计得较为通用，作者可能需要添加更多 <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 角色和属性以及 JavaScript 行为，以更准确地传达其组件的具体性质和功能。这一点通常会在文档中注明。 </p><h3 id="color-contrast">颜色对比度<a class="anchor-link" href="#color-contrast" aria-label="颜色对比度链接"></a></h3><p> 构成 Bootstrap 默认调色板的一些颜色组合（在整个框架中用于按钮变体、警告框变体、表单校验指示器等），可能导致颜色对比<em>不足</em>（低于建议的<a href="https://www.w3.org/TR/WCAG/#contrast-minimum">WCAG 2.2 文本颜色对比度 4.5:1</a>和<a href="https://www.w3.org/TR/WCAG/#non-text-contrast">WCAG 2.2 非文本颜色对比度 3:1</a>），尤其是在浅色背景上使用时。我们鼓励作者测试自己的具体颜色用法，并在必要时手动修改/扩展这些默认颜色，以确保足够的颜色对比度。 </p><h3 id="visually-hidden-content">视觉隐藏内容<a class="anchor-link" href="#visually-hidden-content" aria-label="视觉隐藏内容链接"></a></h3><p> 对于应在视觉上隐藏、但仍需能被屏幕阅读器等辅助技术访问的内容，可以使用 <code>.visually-hidden</code> 类进行样式设置。在需要将额外的视觉信息或提示（例如通过颜色表示的含义）也传达给非视觉用户时，这会很有用。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<p class=\"text-danger\">\r\n  <span class=\"visually-hidden\">Danger: </span>\r\n  This action is not reversible\r\n</p>",
				lang: "html"
			}, null, _parent));
			_push(`<p> 对于视觉隐藏的交互控件（如传统的“跳过”链接），请使用 <code>.visually-hidden-focusable</code> 类。这可确保控件在获得焦点时变得可见（对使用键盘的视力正常用户而言）。<strong>请注意，与过去版本中对应的 <code>.sr-only</code> 和 <code>.sr-only-focusable</code> 类不同，Bootstrap 5 的 <code>.visually-hidden-focusable</code> 是一个独立的类，不得与 <code>.visually-hidden</code> 类一起使用。</strong></p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<a class=\"visually-hidden-focusable\" href=\"#content\">Skip to main content</a>",
				lang: "html"
			}, null, _parent));
			_push(`<h3 id="reduced-motion">减少动效<a class="anchor-link" href="#reduced-motion" aria-label="减少动效链接"></a></h3><p> Bootstrap 支持<a href="https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion"><code>prefers-reduced-motion</code> 媒体特性</a>。在允许用户指定减少动效偏好的浏览器/环境中，Bootstrap 中的大多数 CSS 过渡效果（例如模态对话框打开或关闭时，或轮播的滑动动画）将被禁用，而有意义的动画（如加载指示器）将变慢。 </p><p>在支持 <code>prefers-reduced-motion</code> 且用户<em>未</em>明确表示偏好减少动效（即 <code>prefers-reduced-motion: no-preference</code>）的浏览器上，Bootstrap 会使用 <code>scroll-behavior</code> 属性启用平滑滚动。</p><h2 id="additional-resources">其他资源<a class="anchor-link" href="#additional-resources" aria-label="其他资源链接"></a></h2><ul><li><a href="https://www.w3.org/TR/WCAG/">万维网内容无障碍指南（WCAG）2.2</a></li><li><a href="https://www.a11yproject.com/">The A11Y Project</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">MDN 无障碍文档</a></li><li><a href="https://www.tpgi.com/color-contrast-checker/">颜色对比度分析器（CCA）</a></li><li><a href="https://github.com/squizlabs/HTML_CodeSniffer">用于识别无障碍问题的“HTML Codesniffer”书签小工具</a></li><li><a href="https://accessibilityinsights.io/">Microsoft Accessibility Insights</a></li><li><a href="https://www.deque.com/axe/">Deque Axe 测试工具</a></li><li><a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">无障碍网页入门</a></li></ul>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#overview-and-limitations">概述与局限</a><ul><li><a href="#structural-markup">结构化标记</a></li><li><a href="#interactive-components">交互组件</a></li><li><a href="#color-contrast">颜色对比度</a></li><li><a href="#visually-hidden-content">视觉隐藏内容</a></li><li><a href="#reduced-motion">减少动效</a></li></ul></li><li><a href="#additional-resources">其他资源</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/getting-started/accessibility.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
