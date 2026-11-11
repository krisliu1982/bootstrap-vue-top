import { i as _sfc_main$2, o as JsDataAttributes_default, r as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$3 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$4 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/getting-started/javascript.vue
var _sfc_main = {
	__name: "javascript",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$4;
			const _component_CodeWrapper = _sfc_main$3;
			const _component_JsDataAttributes = JsDataAttributes_default;
			const _component_JsDocs = _sfc_main$1;
			const _component_DocsPager = _sfc_main$2;
			_push(`<!--[--><article class="bd-content"><h1>JavaScript</h1><p class="lead">使用我们可选的 JavaScript 插件，让 Bootstrap 生动起来。了解每个插件、我们的数据 API 与编程式 API 选项等内容。</p><h2 id="individual-or-compiled">单独引入或编译版本<a class="anchor-link" href="#individual-or-compiled" aria-label="单独引入或编译版本链接"></a></h2><p>插件可以单独引入（使用 Bootstrap 各自的 <code>js/dist/*.js</code>），也可以通过 <code>bootstrap.js</code> 或压缩版 <code>bootstrap.min.js</code> 一次性全部引入（不要同时引入两者）。</p><p>如果你使用打包工具（Webpack、Parcel、Vite……），可以使用已支持 UMD 的 <code>/js/dist/*.js</code> 文件。</p><h2 id="usage-with-javascript-frameworks">与 JavaScript 框架一起使用<a class="anchor-link" href="#usage-with-javascript-frameworks" aria-label="与 JavaScript 框架一起使用链接"></a></h2><p> 虽然 Bootstrap CSS 可用于任何框架，但 <strong>Bootstrap JavaScript 与 React、Vue 和 Angular 等 JavaScript 框架并不完全兼容</strong>， 因为这些框架假定自己有对 DOM 的完整掌控权。Bootstrap 和框架都可能尝试修改同一个 DOM 元素，从而导致诸如下拉菜单卡在&quot;打开&quot;位置之类的问题。 </p><p> 对于使用此类框架的用户来说，更好的选择是使用针对该框架的专用包， <strong>而不是</strong> Bootstrap JavaScript。以下是一些最流行的选项： </p><ul><li> React:<a href="https://react-bootstrap.github.io/">React Bootstrap</a>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<strong${_scopeId}>亲自试一试吧！</strong>从<a href="https://github.com/twbs/examples/tree/main/react-nextjs"${_scopeId}>twbs/examples 仓库</a>下载在 React、Next.js 和 React Bootstrap 中使用 Bootstrap 的源码和可运行演示。你也可以 <a href="https://stackblitz.com/github/twbs/examples/tree/main/react-nextjs?file=src%2Fpages%2Findex.tsx"${_scopeId}>在 StackBlitz 中打开该示例</a>。`);
					else return [
						createVNode("strong", null, "亲自试一试吧！"),
						createTextVNode("从"),
						createVNode("a", { href: "https://github.com/twbs/examples/tree/main/react-nextjs" }, "twbs/examples 仓库"),
						createTextVNode("下载在 React、Next.js 和 React Bootstrap 中使用 Bootstrap 的源码和可运行演示。你也可以 "),
						createVNode("a", { href: "https://stackblitz.com/github/twbs/examples/tree/main/react-nextjs?file=src%2Fpages%2Findex.tsx" }, "在 StackBlitz 中打开该示例"),
						createTextVNode("。")
					];
				}),
				_: 1
			}, _parent));
			_push(`</li><li>Vue：<a href="https://bootstrap-vue.org/">BootstrapVue</a>（Bootstrap 4）</li><li>Vue 3：<a href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/">BootstrapVueNext</a>（Bootstrap 5，目前处于 alpha 阶段）</li><li> Angular：<a href="https://ng-bootstrap.github.io/">ng-bootstrap</a>或 <a href="https://valor-software.com/ngx-bootstrap">ngx-bootstrap</a></li></ul><h2 id="using-bootstrap-as-a-module">将 Bootstrap 作为模块使用<a class="anchor-link" href="#using-bootstrap-as-a-module" aria-label="将 Bootstrap 作为模块使用链接"></a></h2>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>亲自试一试吧！</strong>从<a href="https://github.com/twbs/examples/tree/main/sass-js-esm"${_scopeId}>twbs/examples 仓库</a>下载将 Bootstrap 作为 ES 模块使用的源码和可运行演示。你也可以 <a href="https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html"${_scopeId}>在 StackBlitz 中打开该示例</a>。 </p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "亲自试一试吧！"),
						createTextVNode("从"),
						createVNode("a", { href: "https://github.com/twbs/examples/tree/main/sass-js-esm" }, "twbs/examples 仓库"),
						createTextVNode("下载将 Bootstrap 作为 ES 模块使用的源码和可运行演示。你也可以 "),
						createVNode("a", { href: "https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html" }, "在 StackBlitz 中打开该示例"),
						createTextVNode("。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<p>我们提供了一个以 <code>ESM</code> 形式构建的 Bootstrap 版本（<code>bootstrap.esm.js</code> 和 <code>bootstrap.esm.min.js</code>），如果你的<a href="https://caniuse.com/es6-module">目标浏览器支持</a>，就可以在浏览器中将 Bootstrap 作为模块使用。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<script type=\"module\">\r\n  import { Toast } from 'bootstrap.esm.min.js'\r\n\r\n  Array.from(document.querySelectorAll('.toast'))\r\n    .forEach(toastNode => new Toast(toastNode))\r\n<\/script>",
				lang: "html"
			}, null, _parent));
			_push(`<p> 与 JS 打包工具相比，在浏览器中使用 ESM 需要你使用完整路径和文件名，而不是模块名。 <a href="https://v8.dev/features/modules#specifiers">进一步了解浏览器中的 JS 模块。</a>这就是为什么上面的代码中使用 <code>&#39;bootstrap.esm.min.js&#39;</code> 而不是 <code>&#39;bootstrap&#39;</code>。不过，我们的 Popper 依赖让这件事变得更加复杂，它像这样将 Popper 导入到我们的 JavaScript 中： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "import * as Popper from \"@popperjs/core\"\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p>如果你照原样尝试，控制台中会出现类似下面的错误：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "Uncaught TypeError: Failed to resolve module specifier \"@popperjs/core\". Relative references must start with either \"/\", \"./\", or \"../\".\r\n",
				lang: "text"
			}, null, _parent));
			_push(`<p> 要解决这个问题，你可以使用 <code>importmap</code> 将任意模块名解析为完整路径。如果你的<a href="https://caniuse.com/?search=importmap">目标浏览器</a>不支持 <code>importmap</code>，则需要使用<a href="https://github.com/guybedford/es-module-shims">es-module-shims</a>项目。下面是它对 Bootstrap 和 Popper 生效的方式： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB\" crossorigin=\"anonymous\">\r\n    <title>Hello, modularity!</title>\r\n  </head>\r\n  <body>\r\n    <h1>Hello, modularity!</h1>\r\n    <button id=\"popoverButton\" type=\"button\" class=\"btn btn-primary btn-lg\" data-bs-toggle=\"popover\" title=\"ESM in Browser\" data-bs-content=\"Bang!\">Custom popover</button>\r\n\r\n    <script async src=\"https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js\" crossorigin=\"anonymous\"><\/script>\r\n    <script type=\"importmap\">\r\n    {\r\n      \"imports\": {\r\n        \"@popperjs/core\": \"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/esm/popper.min.js\",\r\n        \"bootstrap\": \"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.esm.min.js\"\r\n      }\r\n    }\r\n    <\/script>\r\n    <script type=\"module\">\r\n      import * as bootstrap from 'bootstrap'\r\n\r\n      new bootstrap.Popover(document.getElementById('popoverButton'))\r\n    <\/script>\r\n  </body>\r\n</html>",
				lang: "html"
			}, null, _parent));
			_push(`<h2 id="dependencies">依赖<a class="anchor-link" href="#dependencies" aria-label="依赖链接"></a></h2><p>部分插件和 CSS 组件依赖于其他插件。如果你单独引入插件，请务必在文档中查看这些依赖关系。</p><p>我们的下拉菜单、弹出框和工具提示还依赖于<a href="https://popper.js.org/docs/v2/">Popper</a>。</p><h2 id="data-attributes">数据属性<a class="anchor-link" href="#data-attributes" aria-label="数据属性链接"></a></h2><p> 几乎所有 Bootstrap 插件都可以仅通过 HTML 和 data 数据属性来启用和配置（这是我们认为使用 JavaScript 功能的首选方式）。请务必 <strong>只在单个元素上使用一组数据属性</strong>（例如，你无法用同一个按钮同时触发工具提示和模态框。） </p>`);
			_push(ssrRenderComponent(_component_JsDataAttributes, null, null, _parent));
			_push(`<h2 id="selectors">选择器<a class="anchor-link" href="#selectors" aria-label="选择器链接"></a></h2><p>出于性能考虑，我们使用原生的 <code>querySelector</code> 和 <code>querySelectorAll</code> 方法来查询 DOM 元素，因此你必须使用<a href="https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier">有效的选择器</a>。如果你使用 <code>collapse:Example</code> 这类特殊选择器，请务必对其进行转义。</p><h2 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h2><p> Bootstrap 为大多数插件的独有操作提供了自定义事件。通常，这些事件以不定式和过去分词两种形式出现——其中不定式（例如 <code>show</code>）在事件开始时触发，其过去分词形式（例如 <code>shown</code>）在操作完成时触发。 </p><p> 所有不定式事件都提供 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault"><code>preventDefault()</code></a> 功能。这让我们能够在某个操作开始之前阻止其执行。从事件处理函数中返回 false 也会自动调用 <code>preventDefault()</code>。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const myModal = document.querySelector('#myModal')\r\n\r\nmyModal.addEventListener('show.bs.modal', event => {\r\n  return event.preventDefault() // stops modal from being shown\r\n})\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h2 id="programmatic-api">编程式 API<a class="anchor-link" href="#programmatic-api" aria-label="编程式 API 链接"></a></h2><p>所有构造函数都接受一个可选的选项对象，或什么都不传（这将以默认行为初始化插件）：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const myModalEl = document.querySelector('#myModal')\r\nconst modal = new bootstrap.Modal(myModalEl) // initialized with defaults\r\n\r\nconst configObject = { keyboard: false }\r\nconst modal1 = new bootstrap.Modal(myModalEl, configObject) // initialized with no keyboard\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p>如果你想获取某个特定的插件实例，每个插件都暴露了一个 <code>getInstance</code> 方法。例如，直接从元素中获取实例：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "bootstrap.Popover.getInstance(myPopoverEl)\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p>如果请求的元素上尚未初始化实例，该方法将返回 <code>null</code>。</p><p>或者，可以使用 <code>getOrCreateInstance</code> 获取与 DOM 元素关联的实例，或者在尚未初始化时创建一个新实例。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "bootstrap.Popover.getOrCreateInstance(myPopoverEl, configObject)\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p>如果实例尚未初始化，它还可以接受并使用一个可选的配置对象作为第二个参数。</p><h3 id="css-selectors-in-constructors">构造函数中的 CSS 选择器<a class="anchor-link" href="#css-selectors-in-constructors" aria-label="构造函数中的 CSS 选择器链接"></a></h3><p>除了 <code>getInstance</code> 和 <code>getOrCreateInstance</code> 方法之外，所有插件构造函数都接受 DOM 元素或有效的<a href="#selectors">CSS 选择器</a>作为第一个参数。由于我们的插件仅支持单个元素，因此插件元素通过 <code>querySelector</code> 方法查找。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const modal = new bootstrap.Modal('#myModal')\r\nconst dropdown = new bootstrap.Dropdown('[data-bs-toggle=\"dropdown\"]')\r\nconst offcanvas = bootstrap.Offcanvas.getInstance('#myOffcanvas')\r\nconst alert = bootstrap.Alert.getOrCreateInstance('#myAlert')\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h3 id="asynchronous-functions-and-transitions">异步函数和过渡<a class="anchor-link" href="#asynchronous-functions-and-transitions" aria-label="异步函数和过渡链接"></a></h3><p>所有编程式 API 方法都是<strong>异步的</strong>，它们在过渡开始时（但在<strong>过渡结束之前</strong>）就返回给调用者。如果要在过渡完成后执行某个操作，你可以监听相应的事件。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const myCollapseEl = document.querySelector('#myCollapse')\r\n\r\nmyCollapseEl.addEventListener('shown.bs.collapse', event => {\r\n  // Action to execute once the collapsible area is expanded\r\n})\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p>此外，对<strong>正在过渡的组件调用方法将被忽略</strong>。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const myCarouselEl = document.querySelector('#myCarousel')\r\nconst carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance\r\n\r\nmyCarouselEl.addEventListener('slid.bs.carousel', event => {\r\n  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished\r\n})\r\n\r\ncarousel.to('1') // Will start sliding to the slide 1 and returns to the caller\r\ncarousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h4 id="dispose-method"><code>dispose</code> 方法</h4><p>虽然在 <code>hide()</code> 之后立即调用 <code>dispose</code> 方法看起来是正确的，但这会导致错误的结果。下面是一个有问题的用法示例：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const myModal = document.querySelector('#myModal')\r\nmyModal.hide() // it is asynchronous\r\n\r\nmyModal.addEventListener('shown.bs.hidden', event => {\r\n  myModal.dispose()\r\n})\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h3 id="default-settings">默认设置<a class="anchor-link" href="#default-settings" aria-label="默认设置链接"></a></h3><p> 你可以通过修改插件的 <code>Constructor.Default</code> 对象来更改插件的默认设置： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// changes default for the modal plugin’s `keyboard` option to false\r\nbootstrap.Modal.Default.keyboard = false\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h2 id="methods-and-properties">方法和属性<a class="anchor-link" href="#methods-and-properties" aria-label="方法和属性链接"></a></h2><p>每个 Bootstrap 插件都暴露以下方法和静态属性。</p><div class="table-responsive"><table class="table"><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>dispose</code></td><td>销毁元素的模态框。（移除 DOM 元素上存储的数据）</td></tr><tr><td><code>getInstance</code></td><td><em>静态</em>方法，允许你获取与 DOM 元素关联的模态框实例。</td></tr><tr><td><code>getOrCreateInstance</code></td><td><em>静态</em>方法，允许你获取与 DOM 元素关联的模态框实例，或者在尚未初始化时创建一个新实例。</td></tr></tbody></table></div><div class="table-responsive"><table class="table"><thead><tr><th>静态属性</th><th>描述</th></tr></thead><tbody><tr><td><code>NAME</code></td><td>返回插件名称。（例如：<code>bootstrap.Tooltip.NAME</code>）</td></tr><tr><td><code>VERSION</code></td><td>可以通过插件构造函数的 <code>VERSION</code> 属性访问每个 Bootstrap 插件的版本（例如：<code>bootstrap.Tooltip.VERSION</code>）。</td></tr></tbody></table></div><h2 id="sanitizer">清理器<a class="anchor-link" href="#sanitizer" aria-label="清理器链接"></a></h2><p>如果进行了相应配置，我们的工具提示和弹出框组件可以在页面上渲染任意 HTML。为防止跨站脚本（XSS）攻击，这些组件会在将接受 HTML 的选项渲染到页面之前，使用内置的内容清理器对其进行清理。内容清理默认启用。</p><p>默认允许的标签和属性如下。任何未显式允许的标签或属性都会在清理过程中被移除：</p>`);
			_push(ssrRenderComponent(_component_JsDocs, {
				name: "allow-list",
				file: "js/sanitizer.js"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>使用这些高级选项时请务必小心。</strong>有关更多信息，请参阅 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"${_scopeId}>OWASP 的跨站脚本防护速查表</a>。 仅因禁用或修改内容清理而引起的漏洞不在 Bootstrap 安全模型的考虑范围之内。 </p>`);
					else return [createVNode("p", null, [
						createVNode("strong", null, "使用这些高级选项时请务必小心。"),
						createTextVNode("有关更多信息，请参阅 "),
						createVNode("a", { href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" }, "OWASP 的跨站脚本防护速查表"),
						createTextVNode("。 仅因禁用或修改内容清理而引起的漏洞不在 Bootstrap 安全模型的考虑范围之内。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<p>你可以向默认的 <code>allowList</code> 添加新值：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const myDefaultAllowList = bootstrap.Tooltip.Default.allowList\r\n\r\n// To allow table elements\r\nmyDefaultAllowList.table = []\r\n\r\n// To allow td elements and data-bs-option attributes on td elements\r\nmyDefaultAllowList.td = ['data-bs-option']\r\n\r\n// You can push your custom regex to validate your attributes.\r\n// Be careful about your regular expressions being too lax\r\nconst myCustomRegex = /^data-my-app-[\\w-]+/\r\nmyDefaultAllowList['*'].push(myCustomRegex)\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p> 你也可以用专门的库替换我们的清理器，例如 <a href="https://www.npmjs.com/package/dompurify">DOMPurify</a>： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const yourTooltipEl = document.querySelector('#yourTooltip')\r\nconst tooltip = new bootstrap.Tooltip(yourTooltipEl, {\r\n  sanitizeFn(content) {\r\n    return DOMPurify.sanitize(content)\r\n  }\r\n})\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h2 id="optionally-using-jquery">可选地使用 jQuery<a class="anchor-link" href="#optionally-using-jquery" aria-label="可选地使用 jQuery 链接"></a></h2><p><strong>在 Bootstrap 5 中你不需要 jQuery</strong>，但仍然可以将我们的组件与 jQuery 一起使用。如果 Bootstrap 在 <code>window</code> 对象中检测到 <code>jQuery</code>，它就会将所有组件添加到 jQuery 的插件系统中。这让你可以执行以下操作：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "// to enable tooltips with the default configuration\r\n$('[data-bs-toggle=\"tooltip\"]').tooltip()\r\n\r\n// to initialize tooltips with given configuration\r\n$('[data-bs-toggle=\"tooltip\"]').tooltip({\r\n  boundary: 'clippingParents',\r\n  customClass: 'myClass'\r\n})\r\n\r\n// to trigger the `show` method\r\n$('#myTooltip').tooltip('show')\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p>我们的其他组件也是如此。</p><h3 id="no-conflict">避免冲突<a class="anchor-link" href="#no-conflict" aria-label="避免冲突链接"></a></h3><p>有时需要将 Bootstrap 插件与其他 UI 框架一起使用。在这种情况下，偶尔会出现命名空间冲突。如果发生这种情况，你可以调用希望还原值的插件上的 <code>.noConflict</code>。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value\r\n$.fn.bootstrapBtn = bootstrapButton // give $().bootstrapBtn the Bootstrap functionality\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<p> Bootstrap 官方并不支持 Prototype 或 jQuery UI 等第三方 JavaScript 库。尽管有 <code>.noConflict</code> 和命名空间事件，仍可能存在你需要自行修复的兼容性问题。 </p><h3 id="jquery-events">jQuery 事件<a class="anchor-link" href="#jquery-events" aria-label="jQuery 事件链接"></a></h3><p> 如果 <code>window</code> 对象中存在 <code>jQuery</code>，且 <code>&lt;body&gt;</code> 上没有设置 <code>data-bs-no-jquery</code> 属性，Bootstrap 就会检测到 jQuery。如果找到 jQuery，Bootstrap 会借助 jQuery 的事件系统来触发事件。因此，如果你想监听 Bootstrap 的事件，必须使用 jQuery 方法（<code>.on</code>、<code>.one</code>）而不是 <code>addEventListener</code>。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "$('#myTab a').on('shown.bs.tab', () => {\r\n  // do something...\r\n})\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h2 id="disabled-javascript">禁用 JavaScript 时<a class="anchor-link" href="#disabled-javascript" aria-label="禁用 JavaScript 时链接"></a></h2><p> 当 JavaScript 被禁用时，Bootstrap 的插件没有特殊的降级方案。如果你在意这种情况下的用户体验，可以使用 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript"><code>&lt;noscript&gt;</code></a>向用户说明情况（以及如何重新启用 JavaScript），和/或添加你自己的自定义降级方案。 </p>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#individual-or-compiled">单独引入或编译版本</a></li><li><a href="#usage-with-javascript-frameworks">与 JavaScript 框架一起使用</a></li><li><a href="#using-bootstrap-as-a-module">将 Bootstrap 作为模块使用</a></li><li><a href="#dependencies">依赖</a></li><li><a href="#data-attributes">数据属性</a></li><li><a href="#selectors">选择器</a></li><li><a href="#events">事件</a></li><li><a href="#programmatic-api">编程式 API</a><ul><li><a href="#css-selectors-in-constructors">构造函数中的 CSS 选择器</a></li><li><a href="#asynchronous-functions-and-transitions">异步函数和过渡</a></li><li><a href="#default-settings">默认设置</a></li></ul></li><li><a href="#methods-and-properties">方法和属性</a></li><li><a href="#sanitizer">清理器</a></li><li><a href="#optionally-using-jquery">可选地使用 jQuery</a><ul><li><a href="#no-conflict">避免冲突</a></li><li><a href="#jquery-events">jQuery 事件</a></li></ul></li><li><a href="#disabled-javascript">禁用 JavaScript 时</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/getting-started/javascript.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
