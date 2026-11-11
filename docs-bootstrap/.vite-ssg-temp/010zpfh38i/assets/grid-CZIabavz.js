import { i as _sfc_main$3, p as _sfc_main$1, u as _sfc_main$2 } from "../main.mjs";
import { t as _sfc_main$4 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$5 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/layout/grid.vue
var _sfc_main = {
	__name: "grid",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$5;
			const _component_Example = _sfc_main$1;
			const _component_CodeWrapper = _sfc_main$4;
			const _component_ScssDocs = _sfc_main$2;
			const _component_DocsPager = _sfc_main$3;
			_push(`<!--[--><article class="bd-content"><h1>网格系统</h1><p class="lead">借助十二列系统、六个默认响应式层级、Sass 变量和 mixin 以及数十个预定义类，使用我们强大的移动优先 flexbox 网格来构建各种形状和大小的布局。</p><h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2><p> Bootstrap 的网格系统使用一系列容器、行和列来布局和对齐内容。它使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">flexbox</a> 构建，完全响应式。下面是一个示例，以及关于网格系统如何组合而成的深入说明。 </p>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>刚接触或不熟悉 flexbox？</strong><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background"${_scopeId}>阅读这篇 CSS Tricks flexbox 指南</a> 了解背景、术语、准则和代码片段。 </p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "刚接触或不熟悉 flexbox？"),
						createVNode("a", { href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background" }, "阅读这篇 CSS Tricks flexbox 指南"),
						createTextVNode(" 了解背景、术语、准则和代码片段。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      Column\r\n    </div>\r\n    <div class=\"col\">\r\n      Column\r\n    </div>\r\n    <div class=\"col\">\r\n      Column\r\n    </div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<p> 上面的示例使用我们预定义的网格类，在所有设备和视口上创建了三个等宽的列。这些列通过父级 <code>.container</code> 在页面中居中。 </p><h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2><p>将它拆解开来，网格系统是这样组合而成的：</p><ul><li><p><strong>我们的网格支持<a href="/layout/breakpoints">六个响应式断点</a>。</strong> 断点基于 <code>min-width</code> 媒体查询，这意味着它们会影响该断点及其以上的所有断点（例如，<code>.col-sm-4</code> 适用于 <code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code>）。这意味着你可以按每个断点控制容器和列的尺寸与行为。 </p></li><li><p><strong>容器会使内容居中并进行水平填充。</strong> 使用 <code>.container</code> 获得响应式像素宽度，使用 <code>.container-fluid</code> 在所有视口和设备上获得 <code>width: 100%</code>，或使用响应式容器（例如 <code>.container-md</code>）获得流式与像素宽度的组合。</p></li><li><p><strong>行是列的包裹元素。</strong> 每一列都有水平 <code>padding</code>（称为间距 gutter），用于控制它们之间的空间。然后通过负外边距在行上抵消此 <code>padding</code>，以确保列中的内容在左侧视觉上对齐。行还支持修饰类来<a href="#row-columns">统一应用列尺寸</a>，以及<a href="/layout/gutters">间距类</a>来更改内容的间隔。 </p></li><li><p><strong>列非常灵活。</strong> 每行有 12 个模板列可用，允许你创建跨越任意列数的元素的不同组合。列类指示要跨越的模板列数（例如，<code>col-4</code> 跨越四列）。<code>width</code> 以百分比设置，因此你始终拥有相同的相对尺寸。 </p></li><li><p><strong>间距同样是响应式且可自定义的。</strong><a href="/layout/gutters">间距类在所有断点上均可用</a>，其尺寸与我们的<a href="/utilities/spacing">外边距和内边距间隔</a>相同。使用 <code>.gx-*</code> 类更改水平间距，使用 <code>.gy-*</code> 更改垂直间距，或使用 <code>.g-*</code> 类更改所有间距。 还可以使用 <code>.g-0</code> 移除间距。 </p></li><li><p><strong>Sass 变量、map 和 mixin 驱动着网格。</strong> 如果你不想使用 Bootstrap 中预定义的网格类，可以使用我们的<a href="#sass-variables">网格 Sass 源码</a>创建具有更语义化标记的自定义网格。我们还包含了一些 CSS 自定义属性，供你使用这些 Sass 变量，为你提供更大的灵活性。 </p></li></ul><p>请注意 flexbox 的局限性和<a href="https://github.com/philipwalton/flexbugs">相关缺陷</a>，例如<a href="https://github.com/philipwalton/flexbugs#flexbug-9">无法将某些 HTML 元素用作 flex 容器</a>。</p><h2 id="grid-options">网格选项<a class="anchor-link" href="#grid-options" aria-label="网格选项链接"></a></h2><p>Bootstrap 的网格系统可以适应所有六个默认断点以及你自定义的任何断点。六个默认网格层级如下：</p><ul><li>超小（xs）</li><li>小（sm）</li><li>中（md）</li><li>大（lg）</li><li>超大（xl）</li><li>特大（xxl）</li></ul><p>如上所述，这些断点中的每一个都有自己的容器、唯一的类前缀和修饰符。以下是网格在这些断点间的变化方式：</p><div class="table-responsive"><table class="table mb-4"><thead><tr><th scope="col"></th><th scope="col">xs<br><span class="fw-normal">&lt;576px</span></th><th scope="col">sm<br><span class="fw-normal">≥576px</span></th><th scope="col">md<br><span class="fw-normal">≥768px</span></th><th scope="col">lg<br><span class="fw-normal">≥992px</span></th><th scope="col">xl<br><span class="fw-normal">≥1200px</span></th><th scope="col">xxl<br><span class="fw-normal">≥1400px</span></th></tr></thead><tbody><tr><th class="text-nowrap" scope="row">容器 <code class="fw-normal">max-width</code></th><td>无（auto）</td><td>540px</td><td>720px</td><td>960px</td><td>1140px</td><td>1320px</td></tr><tr><th class="text-nowrap" scope="row">类前缀</th><td><code>.col-</code></td><td><code>.col-sm-</code></td><td><code>.col-md-</code></td><td><code>.col-lg-</code></td><td><code>.col-xl-</code></td><td><code>.col-xxl-</code></td></tr><tr><th class="text-nowrap" scope="row">列数</th><td colspan="6">12</td></tr><tr><th class="text-nowrap" scope="row">间距宽度</th><td colspan="6">1.5rem（左右各 .75rem）</td></tr><tr><th class="text-nowrap" scope="row">自定义间距</th><td colspan="6"><a href="/layout/gutters">支持</a></td></tr><tr><th class="text-nowrap" scope="row">可嵌套</th><td colspan="6"><a href="#nesting">支持</a></td></tr><tr><th class="text-nowrap" scope="row">列排序</th><td colspan="6"><a href="/layout/columns#reordering">支持</a></td></tr></tbody></table></div><h2 id="auto-layout-columns">自动布局列<a class="anchor-link" href="#auto-layout-columns" aria-label="自动布局列链接"></a></h2><p> 利用特定断点的列类，无需像 <code>.col-sm-6</code> 这样显式的带数字类，即可轻松设置列尺寸。 </p><h3 id="equal-width">等宽<a class="anchor-link" href="#equal-width" aria-label="等宽链接"></a></h3><p>例如，以下两个网格布局适用于从 <code>xs</code> 到 <code>xxl</code> 的每台设备和每个视口。为所需的每个断点添加任意数量的无单位类，每一列都将具有相同的宽度。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      1 of 2\r\n    </div>\r\n    <div class=\"col\">\r\n      2 of 2\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      1 of 3\r\n    </div>\r\n    <div class=\"col\">\r\n      2 of 3\r\n    </div>\r\n    <div class=\"col\">\r\n      3 of 3\r\n    </div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<h3 id="setting-one-column-width">设置单列宽度<a class="anchor-link" href="#setting-one-column-width" aria-label="设置单列宽度链接"></a></h3><p>flexbox 网格列的自动布局还意味着你可以设置一列的宽度，并让相邻的列围绕它自动调整尺寸。你可以使用预定义的网格类（如下所示）、网格 mixin 或内联宽度。请注意，无论中间列的宽度如何，其他列都会调整尺寸。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      1 of 3\r\n    </div>\r\n    <div class=\"col-6\">\r\n      2 of 3 (wider)\r\n    </div>\r\n    <div class=\"col\">\r\n      3 of 3\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      1 of 3\r\n    </div>\r\n    <div class=\"col-5\">\r\n      2 of 3 (wider)\r\n    </div>\r\n    <div class=\"col\">\r\n      3 of 3\r\n    </div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<h3 id="variable-width-content">可变宽度内容<a class="anchor-link" href="#variable-width-content" aria-label="可变宽度内容链接"></a></h3><p>使用 <code>col-{breakpoint}-auto</code> 类，根据内容的自然宽度来设置列的尺寸。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row justify-content-md-center\">\r\n    <div class=\"col col-lg-2\">\r\n      1 of 3\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      Variable width content\r\n    </div>\r\n    <div class=\"col col-lg-2\">\r\n      3 of 3\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      1 of 3\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      Variable width content\r\n    </div>\r\n    <div class=\"col col-lg-2\">\r\n      3 of 3\r\n    </div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="responsive-classes">响应式类<a class="anchor-link" href="#responsive-classes" aria-label="响应式类链接"></a></h2><p>Bootstrap 的网格包含六个层级的预定义类，用于构建复杂的响应式布局。你可以在超小、小、中、大或超大设备上随意自定义列的尺寸。</p><h3 id="all-breakpoints">所有断点<a class="anchor-link" href="#all-breakpoints" aria-label="所有断点链接"></a></h3><p>对于从最小的设备到最大的设备都相同的网格，请使用 <code>.col</code> 和 <code>.col-*</code> 类。当你需要特定尺寸的列时，请指定带数字的类；否则，尽可以使用 <code>.col</code>。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">col</div>\r\n    <div class=\"col\">col</div>\r\n    <div class=\"col\">col</div>\r\n    <div class=\"col\">col</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-8\">col-8</div>\r\n    <div class=\"col-4\">col-4</div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<h3 id="stacked-to-horizontal">从堆叠到水平<a class="anchor-link" href="#stacked-to-horizontal" aria-label="从堆叠到水平链接"></a></h3><p>使用一组 <code>.col-sm-*</code> 类，你可以创建一个基本的网格系统，它一开始是堆叠的，在小断点（<code>sm</code>）处变为水平排列。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-8\">col-sm-8</div>\r\n    <div class=\"col-sm-4\">col-sm-4</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">col-sm</div>\r\n    <div class=\"col-sm\">col-sm</div>\r\n    <div class=\"col-sm\">col-sm</div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<h3 id="mix-and-match">混合匹配<a class="anchor-link" href="#mix-and-match" aria-label="混合匹配链接"></a></h3><p>不想让你的列在某些网格层级中只是简单堆叠？根据需要对每个层级使用不同类的组合。查看下面的示例，更好地了解整体的工作方式。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <!-- Stack the columns on mobile by making one full-width and the other half-width -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8\">.col-md-8</div>\r\n    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\r\n  </div>\r\n\r\n  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->\r\n  <div class=\"row\">\r\n    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\r\n    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\r\n    <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\r\n  </div>\r\n\r\n  <!-- Columns are always 50% wide, on mobile and desktop -->\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">.col-6</div>\r\n    <div class=\"col-6\">.col-6</div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<h3 id="row-columns">行内列（Row columns）<a class="anchor-link" href="#row-columns" aria-label="行内列链接"></a></h3><p> 使用响应式 <code>.row-cols-*</code> 类，快速设置最能呈现你的内容和布局的列数。普通的 <code>.col-*</code> 类应用于单个列（例如 <code>.col-md-4</code>），而行内列类则作为快捷方式设置在父级 <code>.row</code> 上。使用 <code>.row-cols-auto</code> 可以让列采用其自然宽度。 </p><p>使用这些行内列类可以快速创建基本的网格布局，或控制你的卡片布局。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row row-cols-2\">\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row row-cols-3\">\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row row-cols-auto\">\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row row-cols-4\">\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row row-cols-4\">\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col-6\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-4\">\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n    <div class=\"col\">Column</div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<p>你也可以使用随附的 Sass mixin <code>row-cols()</code>：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".element {\r\n  // Three columns to start\r\n  @include row-cols(3);\r\n\r\n  // Five columns from medium breakpoint up\r\n  @include media-breakpoint-up(md) {\r\n    @include row-cols(5);\r\n  }\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<h2 id="nesting">嵌套<a class="anchor-link" href="#nesting" aria-label="嵌套链接"></a></h2><p>要使用默认网格嵌套内容，请在现有的 <code>.col-sm-*</code> 列中添加一个新的 <code>.row</code> 和一组 <code>.col-sm-*</code> 列。嵌套行应包含一组加起来不超过 12 的列（并不要求你使用全部 12 个可用列）。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-row",
				code: "<div class=\"container text-center\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      Level 1: .col-sm-3\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <div class=\"row\">\r\n        <div class=\"col-8 col-sm-6\">\r\n          Level 2: .col-8 .col-sm-6\r\n        </div>\r\n        <div class=\"col-4 col-sm-6\">\r\n          Level 2: .col-4 .col-sm-6\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><p>使用 Bootstrap 的 Sass 源文件时，你可以选择使用 Sass 变量和 mixin 来创建自定义、语义化且响应式的页面布局。我们预定义的网格类使用这些相同的变量和 mixin，提供了一整套现成的类，用于快速构建响应式布局。</p><h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3><p>变量和 map 决定列数、间距宽度，以及开始浮动列的媒体查询点。我们使用它们来生成上面记录的预定义网格类，以及下面列出的自定义 mixin。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "$grid-columns:      12;\r\n$grid-gutter-width: 1.5rem;\r\n$grid-row-columns:  6;\r\n",
				lang: "scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "grid-breakpoints",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "container-max-widths",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin 链接"></a></h3><p>Mixin 与网格变量结合使用，为各个网格列生成语义化的 CSS。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// Creates a wrapper for a series of columns\r\n@include make-row();\r\n\r\n// Make the element grid-ready (applying everything but the width)\r\n@include make-col-ready();\r\n\r\n// Without optional size values, the mixin will create equal columns (similar to using .col)\r\n@include make-col();\r\n@include make-col($size, $columns: $grid-columns);\r\n\r\n// Offset with margins\r\n@include make-col-offset($size, $columns: $grid-columns);\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<h3 id="example-usage">用法示例<a class="anchor-link" href="#example-usage" aria-label="用法示例链接"></a></h3><p>你可以将变量修改为自己自定义的值，或者直接使用带有默认值的 mixin。下面是一个使用默认设置创建带间隙的两列布局的示例。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: ".example-container {\r\n  @include make-container();\r\n  // Make sure to define this width after the mixin to override\r\n  // `width: 100%` generated by `make-container()`\r\n  width: 800px;\r\n}\r\n\r\n.example-row {\r\n  @include make-row();\r\n}\r\n\r\n.example-content-main {\r\n  @include make-col-ready();\r\n\r\n  @include media-breakpoint-up(sm) {\r\n    @include make-col(6);\r\n  }\r\n  @include media-breakpoint-up(lg) {\r\n    @include make-col(8);\r\n  }\r\n}\r\n\r\n.example-content-secondary {\r\n  @include make-col-ready();\r\n\r\n  @include media-breakpoint-up(sm) {\r\n    @include make-col(6);\r\n  }\r\n  @include media-breakpoint-up(lg) {\r\n    @include make-col(4);\r\n  }\r\n}\r\n",
				lang: "scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"example-container\">\r\n  <div class=\"example-row\">\r\n    <div class=\"example-content-main\">Main content</div>\r\n    <div class=\"example-content-secondary\">Secondary content</div>\r\n  </div>\r\n</div>" }, null, _parent));
			_push(`<h2 id="customizing-the-grid">自定义网格<a class="anchor-link" href="#customizing-the-grid" aria-label="自定义网格链接"></a></h2><p>使用我们内置的网格 Sass 变量和 map，你可以完全自定义预定义的网格类。更改层级数量、媒体查询尺寸和容器宽度——然后重新编译。</p><h3 id="columns-and-gutters">列与间距<a class="anchor-link" href="#columns-and-gutters" aria-label="列与间距链接"></a></h3><p> 网格列数可以通过 Sass 变量修改。<code>\$grid-columns</code> 用于生成每个单独列的宽度（以百分比表示），而 <code>\$grid-gutter-width</code> 设置列间距的宽度。<code>\$grid-row-columns</code> 用于设置 <code>.row-cols-*</code> 的最大列数，超过此限制的任何数字都将被忽略。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "$grid-columns: 12 !default;\r\n$grid-gutter-width: 1.5rem !default;\r\n$grid-row-columns: 6 !default;\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<h3 id="grid-tiers">网格层级<a class="anchor-link" href="#grid-tiers" aria-label="网格层级链接"></a></h3><p>除了列本身，你还可以自定义网格层级的数量。如果你只想要四个网格层级，可以将 <code>\$grid-breakpoints</code> 和 <code>\$container-max-widths</code> 更新为类似下面的内容：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "$grid-breakpoints: (\r\n  xs: 0,\r\n  sm: 480px,\r\n  md: 768px,\r\n  lg: 1024px\r\n);\r\n\r\n$container-max-widths: (\r\n  sm: 420px,\r\n  md: 720px,\r\n  lg: 960px\r\n);\r\n",
				lang: "scss"
			}, null, _parent));
			_push(`<p> 对 Sass 变量或 map 做出任何更改时，你需要保存更改并重新编译。这样做将输出一套全新的预定义网格类，用于列宽、偏移和排序。响应式可见性工具类也会更新为使用自定义断点。请确保以 <code>px</code> 设置网格值（而非 <code>rem</code>、<code>em</code> 或 <code>%</code>）。 </p>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#example">示例</a></li><li><a href="#how-it-works">工作原理</a></li><li><a href="#grid-options">网格选项</a></li><li><a href="#auto-layout-columns">自动布局列</a><ul><li><a href="#equal-width">等宽</a></li><li><a href="#setting-one-column-width">设置单列宽度</a></li><li><a href="#variable-width-content">可变宽度内容</a></li></ul></li><li><a href="#responsive-classes">响应式类</a><ul><li><a href="#all-breakpoints">所有断点</a></li><li><a href="#stacked-to-horizontal">从堆叠到水平</a></li><li><a href="#mix-and-match">混合匹配</a></li><li><a href="#row-columns">行内列（Row columns）</a></li></ul></li><li><a href="#nesting">嵌套</a></li><li><a href="#css">CSS</a><ul><li><a href="#sass-variables">Sass 变量</a></li><li><a href="#sass-mixins">Sass mixin</a></li><li><a href="#example-usage">用法示例</a></li></ul></li><li><a href="#customizing-the-grid">自定义网格</a><ul><li><a href="#columns-and-gutters">列与间距</a></li><li><a href="#grid-tiers">网格层级</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/layout/grid.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
