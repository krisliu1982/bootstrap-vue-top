import { d as _sfc_main$2, i as _sfc_main$4, o as JsDataAttributes_default, p as _sfc_main$1, u as _sfc_main$3 } from "../main.mjs";
import { t as _sfc_main$5 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$6 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, onBeforeUnmount, onMounted, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/components/tooltips.vue
var _sfc_main = {
	__name: "tooltips",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		let articleEl = null;
		onMounted(() => {
			import("bootstrap").then((bootstrap) => {
				articleEl = document.querySelector("article.bd-content");
				[...articleEl.querySelectorAll("[data-bs-toggle=\"tooltip\"]")].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
			});
		});
		onBeforeUnmount(() => {
			const tooltipTriggerList = articleEl.querySelectorAll("[data-bs-toggle=\"tooltip\"]");
			import("bootstrap").then((bootstrap) => {
				[...tooltipTriggerList].map((tooltipTriggerEl) => bootstrap.Tooltip.getInstance(tooltipTriggerEl)).forEach((tooltip) => tooltip.dispose());
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$6;
			const _component_CodeWrapper = _sfc_main$5;
			const _component_Example = _sfc_main$1;
			const _component_AddedIn = _sfc_main$2;
			const _component_ScssDocs = _sfc_main$3;
			const _component_JsDataAttributes = JsDataAttributes_default;
			const _component_DocsPager = _sfc_main$4;
			_push(`<!--[--><article class="bd-content"><h1>工具提示</h1><p class="lead">如何使用 CSS 和 JavaScript 添加自定义 Bootstrap 工具提示的文档和示例，其中使用 CSS3 实现动画，并使用 data-bs-* 属性实现本地标题存储。</p><h2 id="overview">概览<a class="anchor-link" href="#overview" aria-label="概览链接"></a></h2><p>使用工具提示插件时需要了解的事项：</p><ul><li>工具提示依赖第三方库<a href="https://popper.js.org/docs/v2/">Popper</a>进行定位。你必须在 <code>bootstrap.js</code> 之前引入<a href="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js">popper.min.js</a>，或者使用包含 Popper 的 <code>bootstrap.bundle.min.js</code>。</li><li>出于性能原因，工具提示需要手动启用，因此<strong>你必须自行初始化它们</strong>。</li><li>标题为零长度的工具提示永远不会显示。</li><li>指定 <code>container: &#39;body&#39;</code> 以避免在更复杂的组件（例如我们的输入组、按钮组等）中出现渲染问题。</li><li>在隐藏的元素上触发工具提示不会生效。</li><li>为 <code>.disabled</code> 或 <code>disabled</code> 元素设置的工具提示必须在包裹元素上触发。</li><li> 当从跨越多行的超链接触发时，工具提示将居中显示。可以在 <code>&lt;a&gt;</code> 上使用 <code>white-space: nowrap;</code> 来避免此行为。 </li><li>工具提示必须在对应元素从 DOM 中移除之前隐藏。</li><li>工具提示可以通过 shadow DOM 内部的元素触发。</li></ul><p>都了解了吗？很好，让我们通过一些示例来看看它们是如何工作的。</p>`);
			_push(ssrRenderComponent(_component_Callout, { name: "info-sanitizer" }, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { name: "info-prefersreducedmotion" }, null, _parent));
			_push(`<h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2><h3 id="enable-tooltips">启用工具提示<a class="anchor-link" href="#enable-tooltips" aria-label="启用工具提示链接"></a></h3><p> 如上所述，你必须先初始化工具提示才能使用它们。在页面上初始化所有工具提示的一种方法是根据它们的 <code>data-bs-toggle</code> 属性来选择它们，如下所示： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle=\"tooltip\"]')\r\nconst tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h3 id="tooltips-on-links">链接上的工具提示<a class="anchor-link" href="#tooltips-on-links" aria-label="链接上的工具提示链接"></a></h3><p>将鼠标悬停在下面的链接上即可查看工具提示：</p>`);
			_push(ssrRenderComponent(_component_Example, {
				addStackblitzJs: "",
				class: "tooltip-demo",
				code: "<p class=\"muted\">Placeholder text to demonstrate some<a href=\"#\" data-bs-toggle=\"tooltip\" data-bs-title=\"Default tooltip\">inline links</a>with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of<a href=\"#\" data-bs-toggle=\"tooltip\" data-bs-title=\"Another tooltip\">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you’ve now seen how<a href=\"#\" data-bs-toggle=\"tooltip\" data-bs-title=\"Another one here too\">these tooltips on links</a>can work in practice, once you use them on<a href=\"#\" data-bs-toggle=\"tooltip\" data-bs-title=\"The last tip!\">your own</a>site or project.</p>"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Callout, {
				name: "warning-data-bs-title-vs-title",
				type: "warning"
			}, null, _parent));
			_push(`<h3 id="custom-tooltips">自定义工具提示<a class="anchor-link" href="#custom-tooltips" aria-label="自定义工具提示链接"></a></h3>`);
			_push(ssrRenderComponent(_component_AddedIn, { version: "5.2.0" }, null, _parent));
			_push(`<p>你可以使用<a href="#variables">CSS 变量</a>来自定义工具提示的外观。我们通过 <code>data-bs-custom-class=&quot;custom-tooltip&quot;</code> 设置一个自定义类，以限定自定义外观的作用范围，并用它来覆盖一个本地 CSS 变量。</p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "custom-tooltip",
				file: "site/src/scss/_component-examples.scss"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Example, {
				addStackblitzJs: "",
				class: "tooltip-demo",
				code: "<button type=\"button\" class=\"btn btn-secondary\"\r\n        data-bs-toggle=\"tooltip\" data-bs-placement=\"top\"\r\n        data-bs-custom-class=\"custom-tooltip\"\r\n        data-bs-title=\"This top tooltip is themed via CSS variables.\">\r\n  Custom tooltip\r\n</button>"
			}, null, _parent));
			_push(`<h3 id="directions">方向<a class="anchor-link" href="#directions" aria-label="方向链接"></a></h3><p>将鼠标悬停在下面的按钮上即可查看四个工具提示方向：上、右、下和左。在 RTL 中使用 Bootstrap 时，方向会镜像反转。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				addStackblitzJs: "",
				class: "tooltip-demo",
				code: "<button type=\"button\" class=\"btn btn-secondary\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" data-bs-title=\"Tooltip on top\">\r\n  Tooltip on top\r\n</button>\r\n<button type=\"button\" class=\"btn btn-secondary\" data-bs-toggle=\"tooltip\" data-bs-placement=\"right\" data-bs-title=\"Tooltip on right\">\r\n  Tooltip on right\r\n</button>\r\n<button type=\"button\" class=\"btn btn-secondary\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" data-bs-title=\"Tooltip on bottom\">\r\n  Tooltip on bottom\r\n</button>\r\n<button type=\"button\" class=\"btn btn-secondary\" data-bs-toggle=\"tooltip\" data-bs-placement=\"left\" data-bs-title=\"Tooltip on left\">\r\n  Tooltip on left\r\n</button>\r\n<button type=\"button\" class=\"btn btn-secondary\" data-bs-toggle=\"tooltip\" data-bs-html=\"true\" data-bs-title=\"<em>Tooltip</em> <u>with</u> <b>HTML</b>\">\r\n  Tooltip with HTML\r\n</button>"
			}, null, _parent));
			_push(`<p>使用 SVG：</p>`);
			_push(ssrRenderComponent(_component_Example, {
				showMarkup: false,
				class: "tooltip-demo",
				code: "<a href=\"#\" class=\"d-inline-block\" data-bs-toggle=\"tooltip\" data-bs-title=\"Default tooltip\" aria-label=\"Hover or focus to see default tooltip\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 100 100\" aria-hidden=\"true\"><rect width=\"100%\" height=\"100%\" fill=\"#563d7c\"></rect><circle cx=\"50\" cy=\"50\" r=\"30\" fill=\"#007bff\"></circle></svg></a>"
			}, null, _parent));
			_push(`<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_AddedIn, { version: "5.2.0" }, null, _parent));
			_push(`<p> 作为 Bootstrap 不断演进的 CSS 变量方案的一部分，工具提示现在在 <code>.tooltip</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。 </p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "tooltip-css-vars",
				file: "scss/_tooltip.scss"
			}, null, _parent));
			_push(`<h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "tooltip-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2><p>工具提示插件按需生成内容和标记，默认情况下将工具提示放置在触发元素之后。通过 JavaScript 触发工具提示：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const exampleEl = document.getElementById('example')\r\nconst tooltip = new bootstrap.Tooltip(exampleEl, options)\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<p${_scopeId}> 当父容器具有 <code${_scopeId}>overflow: auto</code> 或 <code${_scopeId}>overflow: scroll</code> 时，工具提示会自动尝试更改位置，但仍会保留原始位置的定位。将<a href="https://popper.js.org/docs/v2/modifiers/flip/#boundary"${_scopeId}><code${_scopeId}>boundary</code> 选项</a>（用于通过 <code${_scopeId}>popperConfig</code> 选项配置的 flip 修饰符）设置为任意 HTMLElement，以覆盖默认值 <code${_scopeId}>&#39;clippingParents&#39;</code>，例如 <code${_scopeId}>document.body</code>： </p>`);
						_push(ssrRenderComponent(_component_CodeWrapper, {
							code: "const tooltip = new bootstrap.Tooltip('#example', {\r\n  boundary: document.body // or document.querySelector('#boundary')\r\n})\r\n",
							lang: "javascript"
						}, null, _parent, _scopeId));
					} else return [createVNode("p", null, [
						createTextVNode(" 当父容器具有 "),
						createVNode("code", null, "overflow: auto"),
						createTextVNode(" 或 "),
						createVNode("code", null, "overflow: scroll"),
						createTextVNode(" 时，工具提示会自动尝试更改位置，但仍会保留原始位置的定位。将"),
						createVNode("a", { href: "https://popper.js.org/docs/v2/modifiers/flip/#boundary" }, [createVNode("code", null, "boundary"), createTextVNode(" 选项")]),
						createTextVNode("（用于通过 "),
						createVNode("code", null, "popperConfig"),
						createTextVNode(" 选项配置的 flip 修饰符）设置为任意 HTMLElement，以覆盖默认值 "),
						createVNode("code", null, "'clippingParents'"),
						createTextVNode("，例如 "),
						createVNode("code", null, "document.body"),
						createTextVNode("： ")
					]), createVNode(_component_CodeWrapper, {
						code: "const tooltip = new bootstrap.Tooltip('#example', {\r\n  boundary: document.body // or document.querySelector('#boundary')\r\n})\r\n",
						lang: "javascript"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<h3 id="markup">标记<a class="anchor-link" href="#markup" aria-label="标记链接"></a></h3><p>工具提示所需的标记仅仅是你希望具有工具提示的 HTML 元素上的一个 <code>data</code> 属性和 <code>title</code>。工具提示生成的标记相当简单，不过它确实需要一个位置（默认情况下由插件设置为 <code>top</code>）。</p>`);
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>确保键盘和辅助技术用户能够访问工具提示</strong>，只将它们添加到传统上可被键盘聚焦且具有交互性的 HTML 元素（例如链接或表单控件）上。虽然其他 HTML 元素可以通过添加 <code${_scopeId}>tabindex=&quot;0&quot;</code> 变为可聚焦，但这会给键盘用户在不具交互性的元素上制造烦人且 令人困惑的 Tab 停靠点，而且大多数辅助技术目前在此情况下不会播报工具提示。此外，不要仅依赖 <code${_scopeId}>hover</code> 作为工具提示的触发器，因为这会导致键盘用户无法触发它们。 </p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "确保键盘和辅助技术用户能够访问工具提示"),
						createTextVNode("，只将它们添加到传统上可被键盘聚焦且具有交互性的 HTML 元素（例如链接或表单控件）上。虽然其他 HTML 元素可以通过添加 "),
						createVNode("code", null, "tabindex=\"0\""),
						createTextVNode(" 变为可聚焦，但这会给键盘用户在不具交互性的元素上制造烦人且 令人困惑的 Tab 停靠点，而且大多数辅助技术目前在此情况下不会播报工具提示。此外，不要仅依赖 "),
						createVNode("code", null, "hover"),
						createTextVNode(" 作为工具提示的触发器，因为这会导致键盘用户无法触发它们。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<!-- HTML to write -->\r\n<a href=\"#\" data-bs-toggle=\"tooltip\" data-bs-title=\"Some tooltip text!\">Hover over me</a>\r\n\r\n<!-- Generated markup by the plugin -->\r\n<div class=\"tooltip bs-tooltip-auto\" role=\"tooltip\">\r\n  <div class=\"tooltip-arrow\"></div>\r\n  <div class=\"tooltip-inner\">\r\n    Some tooltip text!\r\n  </div>\r\n</div>",
				lang: "html"
			}, null, _parent));
			_push(`<h3 id="disabled-elements">禁用元素<a class="anchor-link" href="#disabled-elements" aria-label="禁用元素链接"></a></h3><p> 带有 <code>disabled</code> 属性的元素不可交互，这意味着用户无法通过聚焦、悬停或点击它们来触发工具提示（或弹出框）。作为变通方法，你可以从包裹的 <code>&lt;div&gt;</code> 或 <code>&lt;span&gt;</code> 触发工具提示，最好使用 <code>tabindex=&quot;0&quot;</code> 使其可被键盘聚焦。 </p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "tooltip-demo",
				code: "<span class=\"d-inline-block\" tabindex=\"0\" data-bs-toggle=\"tooltip\" data-bs-title=\"Disabled tooltip\">\r\n  <button class=\"btn btn-primary\" type=\"button\" disabled>Disabled button</button>\r\n</span>"
			}, null, _parent));
			_push(`<h3 id="options">选项<a class="anchor-link" href="#options" aria-label="选项链接"></a></h3>`);
			_push(ssrRenderComponent(_component_JsDataAttributes, null, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}>请注意，出于安全原因，<code${_scopeId}>sanitize</code>、<code${_scopeId}>sanitizeFn</code> 和 <code${_scopeId}>allowList</code> 选项不能通过数据属性提供。</p>`);
					else return [createVNode("p", null, [
						createTextVNode("请注意，出于安全原因，"),
						createVNode("code", null, "sanitize"),
						createTextVNode("、"),
						createVNode("code", null, "sanitizeFn"),
						createTextVNode(" 和 "),
						createVNode("code", null, "allowList"),
						createTextVNode(" 选项不能通过数据属性提供。")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="table-responsive"><table class="table"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>allowList</code></td><td>object</td><td><a href="/getting-started/javascript#sanitizer">默认值</a></td><td> 一个包含允许的标签和属性的对象。未明确允许的标签和属性将被 <a href="/getting-started/javascript#sanitizer">内容清理器</a>移除。 `);
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong${_scopeId}>向此列表添加内容时要格外谨慎。</strong>更多信息请参阅 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"${_scopeId}>OWASP 的跨站脚本攻击防御速查表</a>。 `);
					else return [
						createVNode("strong", null, "向此列表添加内容时要格外谨慎。"),
						createTextVNode("更多信息请参阅 "),
						createVNode("a", { href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" }, "OWASP 的跨站脚本攻击防御速查表"),
						createTextVNode("。 ")
					];
				}),
				_: 1
			}, _parent));
			_push(`</td></tr><tr><td><code>animation</code></td><td>boolean</td><td><code>true</code></td><td>为工具提示应用 CSS 淡入过渡效果。</td></tr><tr><td><code>boundary</code></td><td>string, element</td><td><code>&#39;clippingParents&#39;</code></td><td> 工具提示的溢出约束边界（仅适用于 Popper 的 preventOverflow 修饰符）。默认值为 <code>&#39;clippingParents&#39;</code>，可以接受 HTMLElement 引用（仅限通过 JavaScript）。更多信息请参阅 Popper 的 <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow 文档</a>。 </td></tr><tr><td><code>container</code></td><td>string, element, false</td><td><code>false</code></td><td> 将工具提示追加到特定元素。示例：<code>container: &#39;body&#39;</code>。此选项的特别之处在于，它允许你将工具提示放置在文档流中靠近触发元素的位置——这可以防止工具提示在窗口 调整大小时从触发元素处漂移。 </td></tr><tr><td><code>customClass</code></td><td>string, function</td><td><code>&#39;&#39;</code></td><td> 在工具提示显示时为其添加类。请注意，这些类将附加到模板中指定的任何类之上。要添加多个类，请用空格分隔： <code>&#39;class-1 class-2&#39;</code>。你也可以传入一个函数，该函数应返回包含额外类名的单个字符串。 </td></tr><tr><td><code>delay</code></td><td>number, object</td><td><code>0</code></td><td> 延迟显示和隐藏工具提示的时间（毫秒）——不适用于 manual 触发类型。如果提供的是数字，则延迟会同时应用于隐藏和显示。对象结构为： <code>delay: { &quot;show&quot;: 500, &quot;hide&quot;: 100 }</code>。 </td></tr><tr><td><code>fallbackPlacements</code></td><td>array</td><td><code>[&#39;top&#39;, &#39;right&#39;, &#39;bottom&#39;, &#39;left&#39;]</code></td><td> 通过在数组中提供一系列位置（按优先级顺序）来定义备选位置。更多信息请参阅 Popper 的 <a href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements">行为文档</a>。 </td></tr><tr><td><code>html</code></td><td>boolean</td><td><code>false</code></td><td> 允许在工具提示中使用 HTML。如果为 true，工具提示 <code>title</code> 中的 HTML 标签将在工具提示中渲染。如果为 false，将使用 <code>innerText</code> 属性将内容插入 DOM。处理用户生成的输入时，倾向于使用文本，以 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">防止 XSS 攻击</a>。 </td></tr><tr><td><code>offset</code></td><td>array, string, function</td><td><code>[0, 6]</code></td><td> 工具提示相对于其目标的偏移量。你可以在数据属性中传入以逗号分隔值的字符串，例如： <code>data-bs-offset=&quot;10,20&quot;</code>。当使用函数来确定偏移量时，调用该函数时会将包含 popper 位置、引用元素和 popper 矩形信息的对象作为其第一个参数。触发元素的 DOM 节点作为第二个参数传入。该函数必须返回一个包含两个数字的数组： <a href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>、<a href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>。更多信息请参阅 Popper 的<a href="https://popper.js.org/docs/v2/modifiers/offset/#options">偏移量文档</a>。 </td></tr><tr><td><code>placement</code></td><td>string, function</td><td><code>&#39;top&#39;</code></td><td> 如何定位工具提示：auto、top、bottom、left、right。当指定 <code>auto</code> 时，将动态重新调整工具提示的方向。当使用函数来确定位置时，调用该函数时会将工具提示 DOM 节点作为第一个参数，将触发元素 DOM 节点作为第二个参数。<code>this</code> 上下文 将被设置为工具提示实例。 </td></tr><tr><td><code>popperConfig</code></td><td>null, object, function</td><td><code>null</code></td><td> 要更改 Bootstrap 的默认 Popper 配置，请参阅 <a href="https://popper.js.org/docs/v2/constructors/#options">Popper 的配置</a>。当使用函数来创建 Popper 配置时，调用该函数时会将包含 Bootstrap 默认 Popper 配置的对象作为参数传入。这有助于你将默认配置与自己的配置结合使用并合并。该函数必须返回一个 用于 Popper 的配置对象。 </td></tr><tr><td><code>sanitize</code></td><td>boolean</td><td><code>true</code></td><td> 启用<a href="/getting-started/javascript#sanitizer">内容清理</a>。如果为 true，则会对 <code>template</code>、<code>content</code> 和 <code>title</code> 选项进行清理。 `);
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong${_scopeId}>禁用内容清理时要格外谨慎。</strong>更多信息请参阅 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"${_scopeId}>OWASP 的跨站脚本攻击防御速查表</a>。仅因禁用内容清理而导致的漏洞不属于 Bootstrap 安全模型的范围。 `);
					else return [
						createVNode("strong", null, "禁用内容清理时要格外谨慎。"),
						createTextVNode("更多信息请参阅 "),
						createVNode("a", { href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" }, "OWASP 的跨站脚本攻击防御速查表"),
						createTextVNode("。仅因禁用内容清理而导致的漏洞不属于 Bootstrap 安全模型的范围。 ")
					];
				}),
				_: 1
			}, _parent));
			_push(`</td></tr><tr><td><code>sanitizeFn</code></td><td>null, function</td><td><code>null</code></td><td> 提供一个替代的 <a href="/getting-started/javascript#sanitizer">内容清理</a>函数。如果你倾向于使用专门的库来执行清理，这会很有用。 </td></tr><tr><td><code>selector</code></td><td>string, false</td><td><code>false</code></td><td> 如果提供了选择器，工具提示对象将被委托到指定的目标上。在实践中，这被用于将工具提示同时应用于动态添加的 DOM 元素（<code>jQuery.on</code> 支持）。请参阅<a href="https://github.com/twbs/bootstrap/issues/4215">此 issue</a>和 <a href="https://codepen.io/Johann-S/pen/djJYPb">一个说明性的示例</a>。<strong>注意</strong>：<code>title</code> 属性不能用作选择器。 </td></tr><tr><td><code>template</code></td><td>string</td><td><code>&#39;&lt;div class=&quot;tooltip&quot; role=&quot;tooltip&quot;&gt;&lt;div class=&quot;tooltip-arrow&quot;&gt;&lt;/div&gt;&lt;div class=&quot;tooltip-inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;</code></td><td>创建工具提示时使用的基础 HTML。工具提示的 <code>title</code> 将被注入到 <code>.tooltip-inner</code> 中。<code>.tooltip-arrow</code> 将成为工具提示的箭头。最外层的包裹元素应具有 <code>.tooltip</code> 类和 <code>role=&quot;tooltip&quot;</code>。</td></tr><tr><td><code>title</code></td><td>string, element, function</td><td><code>&#39;&#39;</code></td><td>工具提示标题。如果提供的是函数，则调用该函数时，其 <code>this</code> 引用将被设置为工具提示所附加到的元素。</td></tr><tr><td><code>trigger</code></td><td>string</td><td><code>&#39;hover focus&#39;</code></td><td> 工具提示的触发方式：click、hover、focus、manual。你可以传入多个触发器；用空格分隔。<code>&#39;manual&#39;</code> 表示工具提示将通过 <code>.tooltip(&#39;show&#39;)</code>、<code>.tooltip(&#39;hide&#39;)</code> 和 <code>.tooltip(&#39;toggle&#39;)</code> 方法以编程方式触发；此值不能与任何其他触发器组合使用。单独使用 <code>&#39;hover&#39;</code> 会导致工具提示无法通过键盘触发，只有在存在其他方式为键盘用户传达相同信息时才应使用。 </td></tr></tbody></table></div>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h4 id="data-attributes-for-individual-tooltips"${_scopeId}>单个工具提示的数据属性</h4><p${_scopeId}>单个工具提示的选项也可以通过使用数据属性来指定，如上所述。</p>`);
					else return [createVNode("h4", { id: "data-attributes-for-individual-tooltips" }, "单个工具提示的数据属性"), createVNode("p", null, "单个工具提示的选项也可以通过使用数据属性来指定，如上所述。")];
				}),
				_: 1
			}, _parent));
			_push(`<h4 id="using-function-with-popperconfig">在 <code>popperConfig</code> 中使用函数</h4>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const tooltip = new bootstrap.Tooltip(element, {\r\n  popperConfig(defaultBsPopperConfig) {\r\n    // const newPopperConfig = {...}\r\n    // use defaultBsPopperConfig if needed...\r\n    // return newPopperConfig\r\n  }\r\n})\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>`);
			_push(ssrRenderComponent(_component_Callout, {
				name: "danger-async-methods",
				type: "danger"
			}, null, _parent));
			_push(`<div class="table-responsive"><table class="table"><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>disable</code></td><td>移除元素工具提示的显示能力。只有在重新启用后，工具提示才能再次显示。</td></tr><tr><td><code>dispose</code></td><td> 隐藏并销毁元素的工具提示（移除 DOM 元素上存储的数据）。使用委托的工具提示（通过 <a href="#options"><code>selector</code> 选项</a>创建）无法在派生的触发器元素上单独销毁。 </td></tr><tr><td><code>enable</code></td><td>赋予元素工具提示以显示的能力。<strong>工具提示默认处于启用状态。</strong></td></tr><tr><td><code>getInstance</code></td><td><em>静态</em>方法，允许你获取与 DOM 元素关联的工具提示实例。</td></tr><tr><td><code>getOrCreateInstance</code></td><td><em>静态</em>方法，允许你获取与 DOM 元素关联的工具提示实例，如果尚未初始化，则创建一个新的实例。</td></tr><tr><td><code>hide</code></td><td> 隐藏元素的工具提示。 <strong>在工具提示实际被隐藏之前就返回给调用者</strong>（即在 <code>hidden.bs.tooltip</code> 事件发生之前）。这被认为是工具提示的“手动”触发。 </td></tr><tr><td><code>setContent</code></td><td>提供了一种在工具提示初始化后更改其内容的方法。</td></tr><tr><td><code>show</code></td><td> 显示元素的工具提示。 <strong>在工具提示实际被显示之前就返回给调用者</strong>（即在 <code>shown.bs.tooltip</code> 事件发生之前）。这被认为是工具提示的“手动”触发。标题为零长度的工具提示永远不会显示。 </td></tr><tr><td><code>toggle</code></td><td> 切换元素的工具提示。 <strong>在工具提示实际被显示或隐藏之前就返回给调用者</strong>（即在 <code>shown.bs.tooltip</code> 或 <code>hidden.bs.tooltip</code> 事件发生之前）。这被认为是工具提示的“手动”触发。 </td></tr><tr><td><code>toggleEnabled</code></td><td>切换元素工具提示的显示或隐藏能力。</td></tr><tr><td><code>update</code></td><td>更新元素工具提示的位置。</td></tr></tbody></table></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const tooltip = bootstrap.Tooltip.getInstance('#example') // Returns a Bootstrap tooltip instance\r\n\r\n// setContent example\r\ntooltip.setContent({ '.tooltip-inner': 'another title' })\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><code${_scopeId}>setContent</code> 方法接受一个 <code${_scopeId}>object</code> 参数，其中每个属性键都是工具提示模板中有效的 <code${_scopeId}>string</code> 选择器，每个相关的属性值可以是 <code${_scopeId}>string</code> | <code${_scopeId}>element</code> | <code${_scopeId}>function</code> | <code${_scopeId}>null</code></p>`);
					else return [createVNode("p", null, [
						createVNode("code", null, "setContent"),
						createTextVNode(" 方法接受一个 "),
						createVNode("code", null, "object"),
						createTextVNode(" 参数，其中每个属性键都是工具提示模板中有效的 "),
						createVNode("code", null, "string"),
						createTextVNode(" 选择器，每个相关的属性值可以是 "),
						createVNode("code", null, "string"),
						createTextVNode(" | "),
						createVNode("code", null, "element"),
						createTextVNode(" | "),
						createVNode("code", null, "function"),
						createTextVNode(" | "),
						createVNode("code", null, "null")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3><div class="table-responsive"><table class="table"><thead><tr><th>事件</th><th>描述</th></tr></thead><tbody><tr><td><code>hide.bs.tooltip</code></td><td>当 <code>hide</code> 实例方法被调用时立即触发此事件。</td></tr><tr><td><code>hidden.bs.tooltip</code></td><td>当工具提示完成从用户处隐藏后触发此事件（将等待 CSS 过渡完成）。</td></tr><tr><td><code>inserted.bs.tooltip</code></td><td>当工具提示模板被添加到 DOM 后，在 <code>show.bs.tooltip</code> 事件之后触发此事件。</td></tr><tr><td><code>show.bs.tooltip</code></td><td>当 <code>show</code> 实例方法被调用时立即触发此事件。</td></tr><tr><td><code>shown.bs.tooltip</code></td><td>当工具提示对用户可见后触发此事件（将等待 CSS 过渡完成）。</td></tr></tbody></table></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const myTooltipEl = document.getElementById('myTooltip')\r\nconst tooltip = bootstrap.Tooltip.getOrCreateInstance(myTooltipEl)\r\n\r\nmyTooltipEl.addEventListener('hidden.bs.tooltip', () => {\r\n  // do something...\r\n})\r\n\r\ntooltip.hide()\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#overview">概览</a></li><li><a href="#examples">示例</a><ul><li><a href="#enable-tooltips">启用工具提示</a></li><li><a href="#tooltips-on-links">链接上的工具提示</a></li><li><a href="#custom-tooltips">自定义工具提示</a></li><li><a href="#directions">方向</a></li></ul></li><li><a href="#css">CSS</a><ul><li><a href="#variables">变量</a></li><li><a href="#sass-variables">Sass 变量</a></li></ul></li><li><a href="#usage">用法</a><ul><li><a href="#markup">标记</a></li><li><a href="#disabled-elements">禁用元素</a></li><li><a href="#options">选项</a></li><li><a href="#methods">方法</a></li><li><a href="#events">事件</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/components/tooltips.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
