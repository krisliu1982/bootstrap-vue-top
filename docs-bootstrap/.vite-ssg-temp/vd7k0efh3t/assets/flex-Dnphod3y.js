import { f as _sfc_main$2, i as _sfc_main$5, m as data_default, n as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$4 } from "../main.mjs";
import { t as _sfc_main$6 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createVNode, unref, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// src/pages/zh-CN/utilities/flex.vue
var _sfc_main = {
	__name: "flex",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Example = _sfc_main$1;
			const _component_CodeWrapper = _sfc_main$6;
			const _component_ExampleCustom = _sfc_main$2;
			const _component_Placeholder = _sfc_main$3;
			const _component_ScssDocs = _sfc_main$4;
			const _component_DocsPager = _sfc_main$5;
			_push(`<!--[--><article class="bd-content"><h1>弹性布局 (Flex)</h1><p class="lead">借助一整套响应式弹性布局工具类，快速管理网格列、导航、组件等的布局、对齐和尺寸。对于更复杂的实现，可能需要自定义 CSS。</p><h2 id="enable-flex-behaviors">启用弹性布局行为<a class="anchor-link" href="#enable-flex-behaviors" aria-label="启用弹性布局行为链接"></a></h2><p>应用 <code>display</code> 工具类创建一个弹性布局容器，并将<strong>直接子元素</strong>转换为弹性项目。弹性容器和项目还可以通过额外的弹性属性进一步修改。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-flex p-2\">I'm a flexbox container!</div>"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-inline-flex p-2\">I'm an inline flexbox container!</div>"
			}, null, _parent));
			_push(`<p><code>.d-flex</code> 和 <code>.d-inline-flex</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<!--[--><li><code>.d${ssrInterpolate(breakpoint.abbr)}-flex</code></li><li><code>.d${ssrInterpolate(breakpoint.abbr)}-inline-flex</code></li><!--]-->`);
			});
			_push(`<!--]--></ul><h2 id="direction">方向<a class="anchor-link" href="#direction" aria-label="方向链接"></a></h2><p>使用方向工具类设置弹性容器中弹性项目的方向。在大多数情况下，你可以省略这里的水平类，因为浏览器默认值就是 <code>row</code>。不过，你可能会遇到需要显式设置该值的情况（例如响应式布局）。</p><p>使用 <code>.flex-row</code> 设置水平方向（浏览器默认值），或使用 <code>.flex-row-reverse</code> 从相反一侧开始设置水平方向。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-flex flex-row mb-3\">\r\n  <div class=\"p-2\">Flex item 1</div>\r\n  <div class=\"p-2\">Flex item 2</div>\r\n  <div class=\"p-2\">Flex item 3</div>\r\n</div>\r\n<div class=\"d-flex flex-row-reverse\">\r\n  <div class=\"p-2\">Flex item 1</div>\r\n  <div class=\"p-2\">Flex item 2</div>\r\n  <div class=\"p-2\">Flex item 3</div>\r\n</div>"
			}, null, _parent));
			_push(`<p>使用 <code>.flex-column</code> 设置垂直方向，或使用 <code>.flex-column-reverse</code> 从相反一侧开始设置垂直方向。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-flex flex-column mb-3\">\r\n  <div class=\"p-2\">Flex item 1</div>\r\n  <div class=\"p-2\">Flex item 2</div>\r\n  <div class=\"p-2\">Flex item 3</div>\r\n</div>\r\n<div class=\"d-flex flex-column-reverse\">\r\n  <div class=\"p-2\">Flex item 1</div>\r\n  <div class=\"p-2\">Flex item 2</div>\r\n  <div class=\"p-2\">Flex item 3</div>\r\n</div>"
			}, null, _parent));
			_push(`<p><code>flex-direction</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<!--[--><li><code>.flex${ssrInterpolate(breakpoint.abbr)}-row</code></li><li><code>.flex${ssrInterpolate(breakpoint.abbr)}-row-reverse</code></li><li><code>.flex${ssrInterpolate(breakpoint.abbr)}-column</code></li><li><code>.flex${ssrInterpolate(breakpoint.abbr)}-column-reverse</code></li><!--]-->`);
			});
			_push(`<!--]--></ul><h2 id="justify-content">主轴对齐<a class="anchor-link" href="#justify-content" aria-label="主轴对齐链接"></a></h2><p> 在弹性布局容器上使用 <code>justify-content</code> 工具类，可以更改弹性项目在主轴上的对齐方式（起始为 x 轴，如果 <code>flex-direction: column</code> 则为 y 轴）。可选择 <code>start</code>（浏览器默认值）、<code>end</code>、<code>center</code>、<code>between</code>、<code>around</code> 或 <code>evenly</code>。 </p><div class="bd-example bd-example-flex"><div class="d-flex justify-content-start mb-3"><div class="p-2 bd-highlight">Justify</div><div class="p-2 bd-highlight">Content</div><div class="p-2 bd-highlight">Start</div></div><div class="d-flex justify-content-end mb-3"><div class="p-2 bd-highlight">Justify</div><div class="p-2 bd-highlight">Content</div><div class="p-2 bd-highlight">End</div></div><div class="d-flex justify-content-center mb-3"><div class="p-2 bd-highlight">Justify</div><div class="p-2 bd-highlight">Content</div><div class="p-2 bd-highlight">Center</div></div><div class="d-flex justify-content-between mb-3"><div class="p-2 bd-highlight">Justify</div><div class="p-2 bd-highlight">Content</div><div class="p-2 bd-highlight">Between</div></div><div class="d-flex justify-content-around mb-3"><div class="p-2 bd-highlight">Justify</div><div class="p-2 bd-highlight">Content</div><div class="p-2 bd-highlight">Around</div></div><div class="d-flex justify-content-evenly"><div class="p-2 bd-highlight">Justify</div><div class="p-2 bd-highlight">Content</div><div class="p-2 bd-highlight">Evenly</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex justify-content-start\">...</div>\r\n<div class=\"d-flex justify-content-end\">...</div>\r\n<div class=\"d-flex justify-content-center\">...</div>\r\n<div class=\"d-flex justify-content-between\">...</div>\r\n<div class=\"d-flex justify-content-around\">...</div>\r\n<div class=\"d-flex justify-content-evenly\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<p><code>justify-content</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<!--[--><li><code>.justify-content${ssrInterpolate(breakpoint.abbr)}-start</code></li><li><code>.justify-content${ssrInterpolate(breakpoint.abbr)}-end</code></li><li><code>.justify-content${ssrInterpolate(breakpoint.abbr)}-center</code></li><li><code>.justify-content${ssrInterpolate(breakpoint.abbr)}-between</code></li><li><code>.justify-content${ssrInterpolate(breakpoint.abbr)}-around</code></li><li><code>.justify-content${ssrInterpolate(breakpoint.abbr)}-evenly</code></li><!--]-->`);
			});
			_push(`<!--]--></ul><h2 id="align-items">交叉轴对齐<a class="anchor-link" href="#align-items" aria-label="交叉轴对齐链接"></a></h2><p>在弹性布局容器上使用 <code>align-items</code> 工具类，可以更改弹性项目在交叉轴上的对齐方式（起始为 y 轴，如果 <code>flex-direction: column</code> 则为 x 轴）。可选择 <code>start</code>、<code>end</code>、<code>center</code>、<code>baseline</code> 或 <code>stretch</code>（浏览器默认值）。</p><div class="bd-example bd-example-flex"><div class="d-flex align-items-start mb-3" style="height:100px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div><div class="d-flex align-items-end mb-3" style="height:100px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div><div class="d-flex align-items-center mb-3" style="height:100px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div><div class="d-flex align-items-baseline mb-3" style="height:100px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div><div class="d-flex align-items-stretch" style="height:100px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex align-items-start\">...</div>\r\n<div class=\"d-flex align-items-end\">...</div>\r\n<div class=\"d-flex align-items-center\">...</div>\r\n<div class=\"d-flex align-items-baseline\">...</div>\r\n<div class=\"d-flex align-items-stretch\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<p><code>align-items</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<!--[--><li><code>.align-items${ssrInterpolate(breakpoint.abbr)}-start</code></li><li><code>.align-items${ssrInterpolate(breakpoint.abbr)}-end</code></li><li><code>.align-items${ssrInterpolate(breakpoint.abbr)}-center</code></li><li><code>.align-items${ssrInterpolate(breakpoint.abbr)}-baseline</code></li><li><code>.align-items${ssrInterpolate(breakpoint.abbr)}-stretch</code></li><!--]-->`);
			});
			_push(`<!--]--></ul><h2 id="align-self">单项对齐<a class="anchor-link" href="#align-self" aria-label="单项对齐链接"></a></h2><p> 在弹性项目上使用 <code>align-self</code> 工具类，可以单独更改其在交叉轴上的对齐方式（起始为 y 轴，如果 <code>flex-direction: column</code> 则为 x 轴）。可选择与 <code>align-items</code> 相同的选项：<code>start</code>、<code>end</code>、<code>center</code>、<code>baseline</code> 或 <code>stretch</code>（浏览器默认值）。 </p><div class="bd-example bd-example-flex"><div class="d-flex mb-3" style="height:100px;"><div class="p-2">弹性项目</div><div class="align-self-start p-2">Aligned flex item</div><div class="p-2">弹性项目</div></div><div class="d-flex mb-3" style="height:100px;"><div class="p-2">弹性项目</div><div class="align-self-end p-2">Aligned flex item</div><div class="p-2">弹性项目</div></div><div class="d-flex mb-3" style="height:100px;"><div class="p-2">弹性项目</div><div class="align-self-center p-2">Aligned flex item</div><div class="p-2">弹性项目</div></div><div class="d-flex mb-3" style="height:100px;"><div class="p-2">弹性项目</div><div class="align-self-baseline p-2">Aligned flex item</div><div class="p-2">弹性项目</div></div><div class="d-flex" style="height:100px;"><div class="p-2">弹性项目</div><div class="align-self-stretch p-2">Aligned flex item</div><div class="p-2">弹性项目</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"align-self-start\">Aligned flex item</div>\r\n<div class=\"align-self-end\">Aligned flex item</div>\r\n<div class=\"align-self-center\">Aligned flex item</div>\r\n<div class=\"align-self-baseline\">Aligned flex item</div>\r\n<div class=\"align-self-stretch\">Aligned flex item</div>",
				lang: "html"
			}, null, _parent));
			_push(`<p><code>align-self</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<!--[--><li><code>.align-self${ssrInterpolate(breakpoint.abbr)}-start</code></li><li><code>.align-self${ssrInterpolate(breakpoint.abbr)}-end</code></li><li><code>.align-self${ssrInterpolate(breakpoint.abbr)}-center</code></li><li><code>.align-self${ssrInterpolate(breakpoint.abbr)}-baseline</code></li><li><code>.align-self${ssrInterpolate(breakpoint.abbr)}-stretch</code></li><!--]-->`);
			});
			_push(`<!--]--></ul><h2 id="fill">填充<a class="anchor-link" href="#fill" aria-label="填充链接"></a></h2><p>在一组同级元素上使用 <code>.flex-fill</code> 类，可强制它们采用与其内容相等的宽度（如果它们的内容不超过其边框盒，则宽度相等），同时占据所有可用的水平空间。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-flex\">\r\n  <div class=\"p-2 flex-fill\">Flex item with a lot of content</div>\r\n  <div class=\"p-2 flex-fill\">Flex item</div>\r\n  <div class=\"p-2 flex-fill\">Flex item</div>\r\n</div>"
			}, null, _parent));
			_push(`<p><code>flex-fill</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<li><code>.flex${ssrInterpolate(breakpoint.abbr)}-fill</code></li>`);
			});
			_push(`<!--]--></ul><h2 id="grow-and-shrink">增长与收缩<a class="anchor-link" href="#grow-and-shrink" aria-label="增长与收缩链接"></a></h2><p>使用 <code>.flex-grow-*</code> 工具类切换弹性项目填充可用空间的能力。在下面的示例中，<code>.flex-grow-1</code> 元素会尽可能使用所有可用空间，同时为其余两个弹性项目保留其必要的空间。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-flex\">\r\n  <div class=\"p-2 flex-grow-1\">Flex item</div>\r\n  <div class=\"p-2\">Flex item</div>\r\n  <div class=\"p-2\">Third flex item</div>\r\n</div>"
			}, null, _parent));
			_push(`<p>使用 <code>.flex-shrink-*</code> 工具类切换弹性项目在需要时收缩的能力。在下面的示例中，带有 <code>.flex-shrink-1</code> 的第二个弹性项目被迫将其内容换行到新的一行，通过“收缩”为前一个带有 <code>.w-100</code> 的弹性项目腾出更多空间。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-flex\">\r\n  <div class=\"p-2 w-100\">Flex item</div>\r\n  <div class=\"p-2 flex-shrink-1\">Flex item</div>\r\n</div>"
			}, null, _parent));
			_push(`<p><code>flex-grow</code> 和 <code>flex-shrink</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<!--[--><li><code>.flex${ssrInterpolate(breakpoint.abbr)}-{&#39;{&#39;}grow|shrink{&#39;}&#39;}-0</code></li><li><code>.flex${ssrInterpolate(breakpoint.abbr)}-{&#39;{&#39;}grow|shrink{&#39;}&#39;}-1</code></li><!--]-->`);
			});
			_push(`<!--]--></ul><h2 id="auto-margins">自动外边距<a class="anchor-link" href="#auto-margins" aria-label="自动外边距链接"></a></h2><p>将弹性对齐与自动外边距结合使用时，弹性布局能实现非常出色的效果。下面展示了通过自动外边距控制弹性项目的三个示例：默认（无自动外边距）、将两个项目推到右侧（<code>.me-auto</code>）、将两个项目推到左侧（<code>.ms-auto</code>）。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-flex mb-3\">\r\n        <div class=\"p-2\">Flex item</div>\r\n        <div class=\"p-2\">Flex item</div>\r\n        <div class=\"p-2\">Flex item</div>\r\n      </div>\r\n\r\n      <div class=\"d-flex mb-3\">\r\n        <div class=\"me-auto p-2\">Flex item</div>\r\n        <div class=\"p-2\">Flex item</div>\r\n        <div class=\"p-2\">Flex item</div>\r\n      </div>\r\n\r\n      <div class=\"d-flex mb-3\">\r\n        <div class=\"p-2\">Flex item</div>\r\n        <div class=\"p-2\">Flex item</div>\r\n        <div class=\"ms-auto p-2\">Flex item</div>\r\n      </div>"
			}, null, _parent));
			_push(`<h3 id="with-align-items">配合 align-items 使用<a class="anchor-link" href="#with-align-items" aria-label="配合 align-items 使用链接"></a></h3><p>通过混合使用 <code>align-items</code>、<code>flex-direction: column</code> 以及 <code>margin-top: auto</code> 或 <code>margin-bottom: auto</code>，可以将某个弹性项目垂直移动到容器的顶部或底部。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-flex align-items-start flex-column mb-3\" style=\"height: 200px;\">\r\n  <div class=\"mb-auto p-2\">Flex item</div>\r\n  <div class=\"p-2\">Flex item</div>\r\n  <div class=\"p-2\">Flex item</div>\r\n</div>\r\n\r\n<div class=\"d-flex align-items-end flex-column mb-3\" style=\"height: 200px;\">\r\n  <div class=\"p-2\">Flex item</div>\r\n  <div class=\"p-2\">Flex item</div>\r\n  <div class=\"mt-auto p-2\">Flex item</div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="wrap">换行<a class="anchor-link" href="#wrap" aria-label="换行链接"></a></h2><p> 更改弹性容器中弹性项目的换行方式。可选择完全不换行（浏览器默认值） <code>.flex-nowrap</code>、换行 <code>.flex-wrap</code>，或反向换行 <code>.flex-wrap-reverse</code>。 </p><div class="bd-example bd-example-flex"><div class="d-flex flex-nowrap" style="width:8rem;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex flex-nowrap\">\r\n  ...\r\n</div>",
				lang: "html"
			}, null, _parent));
			_push(`<div class="bd-example bd-example-flex"><div class="d-flex flex-wrap"><div class="p-2">Flex item 1</div><div class="p-2">Flex item 2</div><div class="p-2">Flex item 3</div><div class="p-2">Flex item 4</div><div class="p-2">Flex item 5</div><div class="p-2">Flex item 6</div><div class="p-2">Flex item 7</div><div class="p-2">Flex item 8</div><div class="p-2">Flex item 9</div><div class="p-2">Flex item 10</div><div class="p-2">Flex item 11</div><div class="p-2">Flex item 12</div><div class="p-2">Flex item 13</div><div class="p-2">Flex item 14</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex flex-wrap\">\r\n  ...\r\n</div>",
				lang: "html"
			}, null, _parent));
			_push(`<div class="bd-example bd-example-flex"><div class="d-flex flex-wrap-reverse"><div class="p-2">Flex item 1</div><div class="p-2">Flex item 2</div><div class="p-2">Flex item 3</div><div class="p-2">Flex item 4</div><div class="p-2">Flex item 5</div><div class="p-2">Flex item 6</div><div class="p-2">Flex item 7</div><div class="p-2">Flex item 8</div><div class="p-2">Flex item 9</div><div class="p-2">Flex item 10</div><div class="p-2">Flex item 11</div><div class="p-2">Flex item 12</div><div class="p-2">Flex item 13</div><div class="p-2">Flex item 14</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex flex-wrap-reverse\">\r\n  ...\r\n</div>",
				lang: "html"
			}, null, _parent));
			_push(`<p><code>flex-wrap</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<!--[--><li><code>.flex${ssrInterpolate(breakpoint.abbr)}-nowrap</code></li><li><code>.flex${ssrInterpolate(breakpoint.abbr)}-wrap</code></li><li><code>.flex${ssrInterpolate(breakpoint.abbr)}-wrap-reverse</code></li><!--]-->`);
			});
			_push(`<!--]--></ul><h2 id="order">排序<a class="anchor-link" href="#order" aria-label="排序链接"></a></h2><p>使用一些 <code>order</code> 工具类更改特定弹性项目的<em>视觉</em>顺序。我们仅提供将项目置于最前或最后的选项，以及恢复使用 DOM 顺序的重置选项。由于 <code>order</code> 接受从 0 到 5 的任意整数值，如需其他值请添加自定义 CSS。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-flex",
				code: "<div class=\"d-flex flex-nowrap\">\r\n  <div class=\"order-3 p-2\">First flex item</div>\r\n  <div class=\"order-2 p-2\">Second flex item</div>\r\n  <div class=\"order-1 p-2\">Third flex item</div>\r\n</div>"
			}, null, _parent));
			_push(`<p><code>order</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<li><code>.order${ssrInterpolate(breakpoint.abbr)}-{value}</code></li>`);
			});
			_push(`<!--]--></ul><p>此外，还有响应式的 <code>.order-first</code> 和 <code>.order-last</code> 类，它们分别通过应用 <code>order: -1</code> 和 <code>order: 6</code> 来更改元素的 <code>order</code>。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<li><code>.order${ssrInterpolate(breakpoint.abbr)}-{value}</code></li>`);
			});
			_push(`<!--]--></ul><h2 id="align-content">内容对齐<a class="anchor-link" href="#align-content" aria-label="内容对齐链接"></a></h2><p> 在弹性布局容器上使用 <code>align-content</code> 工具类，可将弹性项目在交叉轴上<em>整体</em>对齐。可选择 <code>start</code>（浏览器默认值）、<code>end</code>、<code>center</code>、<code>between</code>、<code>around</code> 或 <code>stretch</code>。为了演示这些工具类，我们强制设置了 <code>flex-wrap: wrap</code> 并增加了弹性项目的数量。 </p><p><strong>请注意！</strong>该属性对单行弹性项目没有任何效果。</p><div class="bd-example bd-example-flex"><div class="d-flex align-content-start flex-wrap mb-3" style="height:200px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex align-content-start flex-wrap\">\r\n  ...\r\n</div>",
				lang: "html"
			}, null, _parent));
			_push(`<div class="bd-example bd-example-flex"><div class="d-flex align-content-end flex-wrap mb-3" style="height:200px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex align-content-end flex-wrap\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<div class="bd-example bd-example-flex"><div class="d-flex align-content-center flex-wrap mb-3" style="height:200px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex align-content-center flex-wrap\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<div class="bd-example bd-example-flex"><div class="d-flex align-content-between flex-wrap mb-3" style="height:200px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex align-content-between flex-wrap\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<div class="bd-example bd-example-flex"><div class="d-flex align-content-around flex-wrap mb-3" style="height:200px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex align-content-around flex-wrap\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<div class="bd-example bd-example-flex"><div class="d-flex align-content-stretch flex-wrap mb-3" style="height:200px;"><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div><div class="p-2">弹性项目</div></div></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"d-flex align-content-stretch flex-wrap\">...</div>",
				lang: "html"
			}, null, _parent));
			_push(`<p><code>align-content</code> 也提供了响应式变体。</p><ul><!--[-->`);
			ssrRenderList(unref(data_default)["breakpoints"], (breakpoint) => {
				_push(`<!--[--><li><code>.align-content${ssrInterpolate(breakpoint.abbr)}-start</code></li><li><code>.align-content${ssrInterpolate(breakpoint.abbr)}-end</code></li><li><code>.align-content${ssrInterpolate(breakpoint.abbr)}-center</code></li><li><code>.align-content${ssrInterpolate(breakpoint.abbr)}-between</code></li><li><code>.align-content${ssrInterpolate(breakpoint.abbr)}-around</code></li><li><code>.align-content${ssrInterpolate(breakpoint.abbr)}-stretch</code></li><!--]-->`);
			});
			_push(`<!--]--></ul><h2 id="media-object">媒体对象<a class="anchor-link" href="#media-object" aria-label="媒体对象链接"></a></h2><p> 想在 Bootstrap 4 中复刻 <a href="https://getbootstrap.com/docs/4.6/components/media-object/">媒体对象组件</a>吗？借助几个弹性布局工具类，你就能立即重现它，而且比以往更加灵活、更易于定制。 </p>`);
			_push(ssrRenderComponent(_component_ExampleCustom, { code: "<div class=\"d-flex\">\r\n  <div class=\"flex-shrink-0\">\r\n    <img src=\"...\" alt=\"...\">\r\n  </div>\r\n  <div class=\"flex-grow-1 ms-3\">\r\n    This is some content from a media component. You can replace this with any content and adjust it as needed.\r\n  </div>\r\n</div>" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="d-flex"${_scopeId}><div class="flex-shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "100",
							height: "100",
							color: "#999",
							background: "#e5e5e5",
							text: "图片"
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex-grow-1 ms-3"${_scopeId}>这是媒体组件中的一些内容。你可以将其替换为任意内容，并按需调整。</div></div>`);
					} else return [createVNode("div", { class: "d-flex" }, [createVNode("div", { class: "flex-shrink-0" }, [createVNode(_component_Placeholder, {
						width: "100",
						height: "100",
						color: "#999",
						background: "#e5e5e5",
						text: "图片"
					})]), createVNode("div", { class: "flex-grow-1 ms-3" }, "这是媒体组件中的一些内容。你可以将其替换为任意内容，并按需调整。")])];
				}),
				_: 1
			}, _parent));
			_push(`<p>假设你想让图片旁边的内容垂直居中：</p>`);
			_push(ssrRenderComponent(_component_ExampleCustom, { code: "<div class=\"d-flex align-items-center\">\r\n  <div class=\"flex-shrink-0\">\r\n    <img src=\"...\" alt=\"...\">\r\n  </div>\r\n  <div class=\"flex-grow-1 ms-3\">\r\n    This is some content from a media component. You can replace this with any content and adjust it as needed.\r\n  </div>\r\n</div>" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="d-flex align-items-center"${_scopeId}><div class="flex-shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(_component_Placeholder, {
							width: "100",
							height: "100",
							color: "#999",
							background: "#e5e5e5",
							text: "图片"
						}, null, _parent, _scopeId));
						_push(`</div><div class="flex-grow-1 ms-3"${_scopeId}>这是媒体组件中的一些内容。你可以将其替换为任意内容，并按需调整。</div></div>`);
					} else return [createVNode("div", { class: "d-flex align-items-center" }, [createVNode("div", { class: "flex-shrink-0" }, [createVNode(_component_Placeholder, {
						width: "100",
						height: "100",
						color: "#999",
						background: "#e5e5e5",
						text: "图片"
					})]), createVNode("div", { class: "flex-grow-1 ms-3" }, "这是媒体组件中的一些内容。你可以将其替换为任意内容，并按需调整。")])];
				}),
				_: 1
			}, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2><h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3><p> 弹性布局工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。 <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a></p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "utils-flex",
				file: "scss/_utilities.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#enable-flex-behaviors">启用弹性布局行为</a></li><li><a href="#direction">方向</a></li><li><a href="#justify-content">主轴对齐</a></li><li><a href="#align-items">交叉轴对齐</a></li><li><a href="#align-self">单项对齐</a></li><li><a href="#fill">填充</a></li><li><a href="#grow-and-shrink">增长与收缩</a></li><li><a href="#auto-margins">自动外边距</a><ul><li><a href="#with-align-items">配合 align-items 使用</a></li></ul></li><li><a href="#wrap">换行</a></li><li><a href="#order">排序</a></li><li><a href="#align-content">内容对齐</a></li><li><a href="#media-object">媒体对象</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-utilities-api">Sass 工具类 API</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/utilities/flex.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
