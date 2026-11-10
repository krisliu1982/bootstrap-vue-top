import { d as _sfc_main$3, i as _sfc_main$6, o as JsDataAttributes_default, p as _sfc_main$1, r as _sfc_main$2, s as _sfc_main$5, u as _sfc_main$4 } from "../main.mjs";
import { t as _sfc_main$7 } from "./CodeWrapper-BADWE8fG.js";
import { t as _sfc_main$8 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, onBeforeUnmount, onMounted, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/components/toasts.vue
var _sfc_main = {
	__name: "toasts",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		let articleEl = null;
		onMounted(() => {
			import("bootstrap").then((bootstrap) => {
				articleEl = document.querySelector("article.bd-content");
				const toastList = [...articleEl.querySelectorAll(".bd-example .toast")].map((toastEl) => new bootstrap.Toast(toastEl, { autohide: false }));
				for (const toast of toastList) toast.show();
				const toastTrigger = document.getElementById("liveToastBtn");
				const toastLiveExample = document.getElementById("liveToast");
				if (toastTrigger) toastTrigger.addEventListener("click", () => {
					new bootstrap.Toast(toastLiveExample).show();
				});
				const toastPlacement = document.getElementById("toastPlacement");
				if (toastPlacement) document.getElementById("selectToastPlacement").addEventListener("change", function() {
					if (!toastPlacement.dataset.originalClass) toastPlacement.dataset.originalClass = toastPlacement.className;
					toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`;
				});
			});
		});
		onBeforeUnmount(() => {
			import("bootstrap").then((bootstrap) => {
				const toastList = [...articleEl.querySelectorAll(".bd-example .toast")].map((toastEl) => bootstrap.Toast.getInstance(toastEl));
				for (const toast of toastList) toast.dispose();
				const toastLiveExample = document.getElementById("liveToast");
				const liveToastInstance = bootstrap.Toast.getInstance(toastLiveExample);
				if (liveToastInstance) liveToastInstance.dispose();
			});
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$8;
			const _component_Example = _sfc_main$1;
			const _component_JsDocs = _sfc_main$2;
			const _component_CodeWrapper = _sfc_main$7;
			const _component_AddedIn = _sfc_main$3;
			const _component_ScssDocs = _sfc_main$4;
			const _component_JsDismiss = _sfc_main$5;
			const _component_JsDataAttributes = JsDataAttributes_default;
			const _component_DocsPager = _sfc_main$6;
			_push(`<!--[--><article class="bd-content"><h1>轻提示</h1><p class="lead">使用轻提示向访客推送通知，它是一种轻量且易于自定义的提示消息。</p><p>轻提示是一种轻量级通知，旨在模仿移动端和桌面操作系统中流行的推送通知。它们基于 flexbox 构建，因此易于对齐和定位。</p><h2 id="overview">概览<a class="anchor-link" href="#overview" aria-label="概览链接"></a></h2><p>使用轻提示插件时需要注意的事项：</p><ul><li>出于性能考虑，轻提示需要手动启用，因此<strong>你必须自行初始化它们</strong>。</li><li>如果你未指定 <code>autohide: false</code>，轻提示将自动隐藏。</li></ul>`);
			_push(ssrRenderComponent(_component_Callout, { name: "info-prefersreducedmotion" }, null, _parent));
			_push(`<h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2><h3 id="basic">基本用法<a class="anchor-link" href="#basic" aria-label="基本用法链接"></a></h3><p> 为了鼓励构建可扩展且可预测的轻提示，我们建议包含头部和正文。轻提示头部使用 <code>display: flex</code>，借助我们的 margin 和 flexbox 工具类可以轻松对齐内容。 </p><p>轻提示可以按需灵活使用，所需的标记非常少。至少，我们需要一个元素来包含你的“提示”内容，并强烈建议添加一个关闭按钮。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n  <div class=\"toast-header\">\r\n    <span class=\"text-primary me-2\">✓</span>\r\n    <strong class=\"me-auto\">Bootstrap</strong>\r\n    <small>11 mins ago</small>\r\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n  </div>\r\n  <div class=\"toast-body\">\r\n    Hello, world! This is a toast message.\r\n  </div>\r\n</div>" }, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}> 以前，我们的脚本会动态添加 <code${_scopeId}>.hide</code> 类来完全隐藏轻提示（使用 <code${_scopeId}>display:none</code>，而不只是 <code${_scopeId}>opacity:0</code>）。现在这已不再需要。但是，为了向后兼容，我们的脚本会继续切换该类（尽管实际上并不需要 它），直到下一个主版本。 </p>`);
					else return [createVNode("p", null, [
						createTextVNode(" 以前，我们的脚本会动态添加 "),
						createVNode("code", null, ".hide"),
						createTextVNode(" 类来完全隐藏轻提示（使用 "),
						createVNode("code", null, "display:none"),
						createTextVNode("，而不只是 "),
						createVNode("code", null, "opacity:0"),
						createTextVNode("）。现在这已不再需要。但是，为了向后兼容，我们的脚本会继续切换该类（尽管实际上并不需要 它），直到下一个主版本。 ")
					])];
				}),
				_: 1
			}, _parent));
			_push(`<h3 id="live-example">实时示例<a class="anchor-link" href="#live-example" aria-label="实时示例链接"></a></h3><p>点击下方按钮显示一个轻提示（使用我们的工具类将其定位于右下角），该轻提示默认处于隐藏状态。</p><div class="toast-container position-fixed bottom-0 end-0 p-3"><div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><span title="image placeholder" class="text-primary me-2">✓</span><strong class="me-auto">Bootstrap</strong><small>11 mins ago</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div><div class="toast-body">Hello, world! This is a toast message.</div></div></div>`);
			_push(ssrRenderComponent(_component_Example, { code: "<button type=\"button\" class=\"btn btn-primary\" id=\"liveToastBtn\">Show live toast</button>" }, null, _parent));
			_push(`<p>我们使用以下 JavaScript 来触发我们的实时轻提示演示：</p>`);
			_push(ssrRenderComponent(_component_JsDocs, {
				name: "live-toast",
				file: "site/src/assets/partials/snippets.js"
			}, null, _parent));
			_push(`<h3 id="translucent">半透明<a class="anchor-link" href="#translucent" aria-label="半透明链接"></a></h3><p>轻提示略微半透明，以便与其下方的元素融为一体。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				code: "<div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n  <div class=\"toast-header\">\r\n    <span title=\"image placeholder\" class=\"text-primary me-2\">✓</span>\r\n    <strong class=\"me-auto\">Bootstrap</strong>\r\n    <small class=\"text-body-secondary\">11 mins ago</small>\r\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n  </div>\r\n  <div class=\"toast-body\">\r\n    Hello, world! This is a toast message.\r\n  </div>\r\n</div>",
				class: "bg-dark"
			}, null, _parent));
			_push(`<h3 id="stacking">堆叠<a class="anchor-link" href="#stacking" aria-label="堆叠链接"></a></h3><p>你可以将轻提示包裹在一个轻提示容器中来实现堆叠，容器会垂直地添加一些间距。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"toast-container position-static\">\r\n  <div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n    <div class=\"toast-header\">\r\n      <span title=\"image placeholder\" class=\"text-primary me-2\">✓</span>\r\n      <strong class=\"me-auto\">Bootstrap</strong>\r\n      <small class=\"text-body-secondary\">just now</small>\r\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n    </div>\r\n    <div class=\"toast-body\">\r\n      See? Just like this.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n    <div class=\"toast-header\">\r\n      <span title=\"image placeholder\" class=\"text-primary me-2\">✓</span>\r\n      <strong class=\"me-auto\">Bootstrap</strong>\r\n      <small class=\"text-body-secondary\">2 seconds ago</small>\r\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n    </div>\r\n    <div class=\"toast-body\">\r\n      Heads up, toasts will stack automatically\r\n    </div>\r\n  </div>\r\n</div>" }, null, _parent));
			_push(`<h3 id="custom-content">自定义内容<a class="anchor-link" href="#custom-content" aria-label="自定义内容链接"></a></h3><p> 你可以通过移除子组件、使用 <a href="/utilities/api">工具类</a>进行调整，或添加自己的标记来自定义轻提示。这里，我们通过移除默认的 <code>.toast-header</code>、添加来自<a href="https://icons.getbootstrap.com/">Bootstrap Icons</a>的自定义隐藏图标，以及使用一些<a href="/utilities/flex">flexbox 工具类</a>调整布局，创建了一个更简洁的轻提示。 </p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"toast align-items-center\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n  <div class=\"d-flex\">\r\n    <div class=\"toast-body\">\r\n      Hello, world! This is a toast message.\r\n    </div>\r\n    <button type=\"button\" class=\"btn-close me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n  </div>\r\n</div>" }, null, _parent));
			_push(`<p>或者，你也可以向轻提示添加额外的控件和组件。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n  <div class=\"toast-body\">\r\n    Hello, world! This is a toast message.\r\n    <div class=\"mt-2 pt-2 border-top\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-sm\">Take action</button>\r\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-bs-dismiss=\"toast\">Close</button>\r\n    </div>\r\n  </div>\r\n</div>" }, null, _parent));
			_push(`<h3 id="color-schemes">配色方案<a class="anchor-link" href="#color-schemes" aria-label="配色方案链接"></a></h3><p> 在上面的示例基础上，你可以使用我们的 <a href="/utilities/colors">颜色</a>和<a href="/utilities/background">背景</a>工具类创建不同的轻提示配色方案。这里，我们为 <code>.toast</code> 添加了 <code>.text-bg-primary</code>，然后为关闭按钮添加了 <code>.btn-close-white</code>。为了获得清晰的边缘，我们使用 <code>.border-0</code> 移除了默认边框。 </p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div class=\"toast align-items-center text-bg-primary border-0\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n  <div class=\"d-flex\">\r\n    <div class=\"toast-body\">\r\n      Hello, world! This is a toast message.\r\n    </div>\r\n    <button type=\"button\" class=\"btn-close btn-close-white me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n  </div>\r\n</div>" }, null, _parent));
			_push(`<h2 id="placement">位置<a class="anchor-link" href="#placement" aria-label="位置链接"></a></h2><p> 你可以按需使用自定义 CSS 放置轻提示。右上角常用于显示通知，顶部居中也不例外。如果你一次只会显示一个轻提示，可直接将定位样式写在 <code>.toast</code> 上。 </p>`);
			_push(ssrRenderComponent(_component_Example, {
				addStackblitzJs: "",
				code: "<form>\r\n  <div class=\"mb-3\">\r\n    <label for=\"selectToastPlacement\">Toast placement</label>\r\n    <select class=\"form-select mt-2\" id=\"selectToastPlacement\">\r\n      <option value=\"\" selected>Select a position...</option>\r\n      <option value=\"top-0 start-0\">Top left</option>\r\n      <option value=\"top-0 start-50 translate-middle-x\">Top center</option>\r\n      <option value=\"top-0 end-0\">Top right</option>\r\n      <option value=\"top-50 start-0 translate-middle-y\">Middle left</option>\r\n      <option value=\"top-50 start-50 translate-middle\">Middle center</option>\r\n      <option value=\"top-50 end-0 translate-middle-y\">Middle right</option>\r\n      <option value=\"bottom-0 start-0\">Bottom left</option>\r\n      <option value=\"bottom-0 start-50 translate-middle-x\">Bottom center</option>\r\n      <option value=\"bottom-0 end-0\">Bottom right</option>\r\n    </select>\r\n  </div>\r\n</form>\r\n<div aria-live=\"polite\" aria-atomic=\"true\" class=\"bg-body-secondary position-relative bd-example-toasts rounded-3\">\r\n  <div class=\"toast-container p-3\" id=\"toastPlacement\">\r\n    <div class=\"toast\">\r\n      <div class=\"toast-header\">\r\n        <span title=\"image placeholder\" class=\"text-primary me-2\">✓</span>\r\n        <strong class=\"me-auto\">Bootstrap</strong>\r\n        <small>11 mins ago</small>\r\n      </div>\r\n      <div class=\"toast-body\">\r\n        Hello, world! This is a toast message.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<p>对于会产生更多通知的系统，考虑使用一个包裹元素，以便它们能轻松堆叠。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-toasts p-0",
				code: "<div aria-live=\"polite\" aria-atomic=\"true\" class=\"position-relative\">\r\n  <!-- Position it: -->\r\n  <!-- - `.toast-container` for spacing between toasts -->\r\n  <!-- - `top-0` & `end-0` to position the toasts in the upper right corner -->\r\n  <!-- - `.p-3` to prevent the toasts from sticking to the edge of the container  -->\r\n  <div class=\"toast-container top-0 end-0 p-3\">\r\n\r\n    <!-- Then put toasts within -->\r\n    <div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n      <div class=\"toast-header\">\r\n        <span title=\"image placeholder\" class=\"text-primary me-2\">✓</span>\r\n        <strong class=\"me-auto\">Bootstrap</strong>\r\n        <small class=\"text-body-secondary\">just now</small>\r\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n      </div>\r\n      <div class=\"toast-body\">\r\n        See? Just like this.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n      <div class=\"toast-header\">\r\n        <span title=\"image placeholder\" class=\"text-primary me-2\">✓</span>\r\n        <strong class=\"me-auto\">Bootstrap</strong>\r\n        <small class=\"text-body-secondary\">2 seconds ago</small>\r\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n      </div>\r\n      <div class=\"toast-body\">\r\n        Heads up, toasts will stack automatically\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<p>你还可以借助 flexbox 工具类，水平或垂直地对齐轻提示。</p>`);
			_push(ssrRenderComponent(_component_Example, {
				class: "bd-example-toasts d-flex",
				code: "<!-- Flexbox container for aligning the toasts -->\r\n<div aria-live=\"polite\" aria-atomic=\"true\" class=\"d-flex justify-content-center align-items-center w-100\">\r\n\r\n  <!-- Then put toasts within -->\r\n  <div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\r\n    <div class=\"toast-header\">\r\n      <span title=\"image placeholder\" class=\"text-primary me-2\">✓</span>\r\n      <strong class=\"me-auto\">Bootstrap</strong>\r\n      <small>11 mins ago</small>\r\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n    </div>\r\n    <div class=\"toast-body\">\r\n      Hello, world! This is a toast message.\r\n    </div>\r\n  </div>\r\n</div>"
			}, null, _parent));
			_push(`<h2 id="accessibility">无障碍访问<a class="anchor-link" href="#accessibility" aria-label="无障碍访问链接"></a></h2><p> 轻提示旨在对你的访客或用户造成较小的打断，因此，为了帮助使用屏幕阅读器和类似辅助技术的用户，你应将轻提示包裹在一个 <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"><code>aria-live</code> 区域</a>中。实时区域的变更（例如注入或更新轻提示组件）将由屏幕阅读器自动播报，无需移动用户的焦点或以其他方式打断用户。此外，请包含 <code>aria-atomic=&quot;true&quot;</code>，以确保整个轻提示始终作为一个单一的（原子）单元进行播报，而不是只播报发生变更的部分（如果你只更新轻提示的局部内容，或在稍后再次显示相同的轻提示内容，这可能会导致问题）。如果所需信息 对流程很重要，例如表单中的错误列表，那么请改用<a href="/components/alerts">警告框组件</a>，而不是轻提示。 </p><p>请注意，实时区域必须在轻提示生成或更新<em>之前</em>就已存在于标记中。如果你同时动态生成两者并将它们注入页面，辅助技术通常不会播报它们。</p><p>你还需要根据内容调整 <code>role</code> 和 <code>aria-live</code> 级别。如果是像错误这样重要的消息，使用 <code>role=&quot;alert&quot; aria-live=&quot;assertive&quot;</code> 属性，否则使用 <code>role=&quot;status&quot; aria-live=&quot;polite&quot;</code> 属性。</p><p> 随着你展示的内容发生变化，请务必更新 <a href="#options"><code>delay</code> 超时时间</a>，以便用户有足够的时间阅读轻提示。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<div class=\"toast\" role=\"alert\" aria-live=\"polite\" aria-atomic=\"true\" data-bs-delay=\"10000\">\r\n<div role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">...</div>\r\n</div>",
				lang: "html"
			}, null, _parent));
			_push(`<p>使用 <code>autohide: false</code> 时，你必须添加一个关闭按钮，以便用户能够关闭轻提示。</p>`);
			_push(ssrRenderComponent(_component_Example, { code: "<div role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" class=\"toast\" data-bs-autohide=\"false\">\r\n  <div class=\"toast-header\">\r\n    <span title=\"image placeholder\" class=\"text-primary me-2\">✓</span>\r\n    <strong class=\"me-auto\">Bootstrap</strong>\r\n    <small>11 mins ago</small>\r\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\r\n  </div>\r\n  <div class=\"toast-body\">\r\n    Hello, world! This is a toast message.\r\n  </div>\r\n</div>" }, null, _parent));
			_push(`<p> 虽然从技术上讲，你可以在轻提示中添加可聚焦或可操作的控件（例如额外的按钮或链接），但应避免在自动隐藏的轻提示中这样做。即便你为轻提示设置了较长的 <a href="#options"><code>delay</code> 超时时间</a>，键盘用户和辅助技术用户也可能难以在限定时间内抵达轻提示进行操作（因为轻提示显示时不会获得焦点）。如果你确实需要更多控件，我们建议使用带有 <code>autohide: false</code> 的轻提示。 </p><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2><h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_AddedIn, { version: "5.2.0" }, null, _parent));
			_push(`<p> 作为 Bootstrap 不断演进的 CSS 变量方案的一部分，轻提示现在在 <code>.toast</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。 </p>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "toast-css-vars",
				file: "scss/_toasts.scss"
			}, null, _parent));
			_push(`<h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>`);
			_push(ssrRenderComponent(_component_ScssDocs, {
				name: "toast-variables",
				file: "scss/_variables.scss"
			}, null, _parent));
			_push(`<h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2><p>通过 JavaScript 初始化轻提示：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const toastElList = document.querySelectorAll('.toast')\r\nconst toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))\r\n",
				lang: "javascript"
			}, null, _parent));
			_push(`<h3 id="triggers">触发器<a class="anchor-link" href="#triggers" aria-label="触发器链接"></a></h3>`);
			_push(ssrRenderComponent(_component_JsDismiss, { name: "toast" }, null, _parent));
			_push(`<h3 id="options">选项<a class="anchor-link" href="#options" aria-label="选项链接"></a></h3>`);
			_push(ssrRenderComponent(_component_JsDataAttributes, null, null, _parent));
			_push(`<div class="table-responsive"><table class="table"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>animation</code></td><td>boolean</td><td><code>true</code></td><td>为轻提示应用 CSS 淡入淡出过渡。</td></tr><tr><td><code>autohide</code></td><td>boolean</td><td><code>true</code></td><td>在延迟之后自动隐藏轻提示。</td></tr><tr><td><code>delay</code></td><td>number</td><td><code>5000</code></td><td>隐藏轻提示前的延迟毫秒数。</td></tr></tbody></table></div><h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>`);
			_push(ssrRenderComponent(_component_Callout, {
				name: "danger-async-methods",
				type: "danger"
			}, null, _parent));
			_push(`<div class="table-responsive"><table class="table"><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>dispose</code></td><td>隐藏元素的轻提示。你的轻提示将保留在 DOM 中，但不再显示。</td></tr><tr><td><code>getInstance</code></td><td><em>静态</em>方法，允许你获取与某个 DOM 元素关联的轻提示实例。 <br> 例如：<code>const myToastEl = articleEl.getElementById(&#39;myToastEl&#39;)</code> <code>const myToast = bootstrap.Toast.getInstance(myToastEl)</code> 返回一个 Bootstrap 轻提示实例。 </td></tr><tr><td><code>getOrCreateInstance</code></td><td><em>静态</em>方法，允许你获取与某个 DOM 元素关联的轻提示实例，或者在该实例尚未初始化时创建一个新实例。 <br><code>const myToastEl = articleEl.getElementById(&#39;myToastEl&#39;)</code> <code>const myToast = bootstrap.Toast.getOrCreateInstance(myToastEl)</code> 返回一个 Bootstrap 轻提示 实例。 </td></tr><tr><td><code>hide</code></td><td> 隐藏元素的轻提示。 <strong>在轻提示实际隐藏之前就返回给调用者</strong>（即在 <code>hidden.bs.toast</code> 事件发生之前）。如果你将 <code>autohide</code> 设为 <code>false</code>，则必须手动调用此方法。 </td></tr><tr><td><code>isShown</code></td><td>根据轻提示的可见状态返回一个布尔值。</td></tr><tr><td><code>show</code></td><td> 显示元素的轻提示。 <strong>在轻提示实际显示之前就返回给调用者</strong>（即在 <code>shown.bs.toast</code> 事件发生之前）。你必须手动调用此方法，否则你的轻提示不会显示。 </td></tr></tbody></table></div><h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3><div class="table-responsive"><table class="table"><thead><tr><th>事件</th><th>描述</th></tr></thead><tbody><tr><td><code>hide.bs.toast</code></td><td>当调用 <code>hide</code> 实例方法时立即触发此事件。</td></tr><tr><td><code>hidden.bs.toast</code></td><td>当轻提示已完成对用户隐藏时触发此事件。</td></tr><tr><td><code>show.bs.toast</code></td><td>当调用 <code>show</code> 实例方法时立即触发此事件。</td></tr><tr><td><code>shown.bs.toast</code></td><td>当轻提示已向用户显示时触发此事件。</td></tr></tbody></table></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "const myToastEl = articleEl.getElementById('myToast')\r\nmyToastEl.addEventListener('hidden.bs.toast', () => {\r\n  // do something...\r\n})",
				lang: "javascript"
			}, null, _parent));
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#overview">概览</a></li><li><a href="#examples">示例</a><ul><li><a href="#basic">基本用法</a></li><li><a href="#live-example">实时示例</a></li><li><a href="#translucent">半透明</a></li><li><a href="#stacking">堆叠</a></li><li><a href="#custom-content">自定义内容</a></li><li><a href="#color-schemes">配色方案</a></li></ul></li><li><a href="#placement">位置</a></li><li><a href="#accessibility">无障碍访问</a></li><li><a href="#css">CSS</a><ul><li><a href="#variables">变量</a></li><li><a href="#sass-variables">Sass 变量</a></li></ul></li><li><a href="#usage">用法</a><ul><li><a href="#triggers">触发器</a></li><li><a href="#options">选项</a></li><li><a href="#methods">方法</a></li><li><a href="#events">事件</a></li></ul></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/components/toasts.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
