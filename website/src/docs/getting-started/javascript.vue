
<template>
<article class="docs-content prose">
<h1>JavaScript</h1>
<p>用我们可选的 JavaScript 插件让 Bootstrap 焕发生机。了解每个插件、我们的数据与编程 API 选项等更多内容。</p>

<h2 id="js-components">JS 组件 <a class="anchor-link" href="#js-components" aria-label="链接到 JS 组件"></a></h2>
<p>想知道哪些组件明确需要我们的 JavaScript 和 Floating UI 或 Vanilla Calendar Pro？</p>
<ul>
  <li>Alerts（警告框）——用于关闭</li>
  <li>Buttons（按钮）——用于切换状态以及复选框/单选框功能</li>
  <li>Carousel（轮播）——用于所有幻灯片行为、控件和指示器</li>
  <li>Collapse（折叠）——用于切换内容可见性</li>
  <li>Datepicker（日期选择器）——用于日期选择（还需要 <a href="https://vanilla-calendar.pro/">Vanilla Calendar Pro</a>）</li>
  <li><a href="[[docsref:/components/dialog]]">Dialog（对话框）</a>——用于显示、定位和滚动行为</li>
  <li>Menus（菜单）——用于显示和定位（还需要 <a href="https://floating-ui.com/">Floating UI</a>）</li>
  <li>Navbar（导航栏）——扩展我们的 Collapse 和 Drawer 插件以实现响应式行为</li>
  <li><a href="[[docsref:/components/nav]]">Nav（导航）</a>——用于导航标记和样式；<a href="[[docsref:/components/tab]]">Tab（标签页）</a>插件用于切换标签面板</li>
  <li>Drawers（抽屉）——用于显示、定位和滚动行为</li>
  <li>Scrollspy（滚动监听）——用于滚动行为和导航更新</li>
  <li>Toasts（轻提示）——用于显示和关闭</li>
  <li>Tooltips 和 popovers（工具提示和弹出框）——用于显示和定位（还需要 <a href="https://floating-ui.com/">Floating UI</a>）</li>
</ul>

<h2 id="individual-or-compiled">单独引入或编译引入 <a class="anchor-link" href="#individual-or-compiled" aria-label="链接到 单独引入或编译引入"></a></h2>
<p>插件可以单独引入（使用 Bootstrap 单独的 <code>js/dist/*.js</code>），也可以一次性全部引入，使用 <code>bootstrap.js</code> 或压缩版 <code>bootstrap.min.js</code>（不要同时引入两者）。</p>
<p>如果你使用打包工具（Webpack、Parcel、Vite……），你可以只导入需要的插件，打包工具会自动对其余部分进行 tree-shaking：</p>

<CodeWrapper code="import { Toast, Tooltip } from 'bootstrap'" lang="javascript" />

<h2 id="typescript">TypeScript <a class="anchor-link" href="#typescript" aria-label="链接到 TypeScript"></a></h2>
<p>Bootstrap 的插件使用 TypeScript 编写，并内置类型声明——无需 <code>@types/bootstrap</code> 包。主入口以及 <code>js/dist/*.js</code> 下的每个单独插件都完全类型化，包括每个插件的配置选项：</p>

<CodeWrapper code="import { Tooltip } from 'bootstrap'

const tooltip = Tooltip.getOrCreateInstance('#example')
tooltip.show()" lang="typescript" />

<p>如果你需要为自己的包装器添加类型，每个插件模块还会导出其配置对象类型（例如 <code>TooltipConfig</code>）。</p>

<h2 id="usage-with-javascript-frameworks">与 JavaScript 框架一起使用 <a class="anchor-link" href="#usage-with-javascript-frameworks" aria-label="链接到 与 JavaScript 框架一起使用"></a></h2>
<p>虽然 Bootstrap CSS 可以与任何框架一起使用，但 <strong>Bootstrap JavaScript 与 React、Vue 和 Angular 等 JavaScript 框架并不完全兼容</strong>，这些框架假定对 DOM 有完全的了解。Bootstrap 和框架都可能尝试修改同一个 DOM 元素，导致菜单卡在“打开”位置之类的 bug。</p>
<p>对于使用这类框架的用户，更好的替代方案是使用框架专属的包，<strong>而不是</strong> Bootstrap JavaScript。以下是一些最流行的选项：</p>
<ul>
  <li>React：<a href="https://react-bootstrap.github.io/">React Bootstrap</a>（Bootstrap 5）</li>
  <li>Vue 2：<a href="https://bootstrap-vue.org/">BootstrapVue</a>（Bootstrap 4）</li>
  <li>Vue 3：<a href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/">BootstrapVueNext</a>（Bootstrap 5）</li>
  <li>Angular：<a href="https://ng-bootstrap.github.io/">ng-bootstrap</a>（Bootstrap 5）或 <a href="https://valor-software.com/ngx-bootstrap">ngx-bootstrap</a>（Bootstrap 5）</li>
</ul>

<h2 id="using-bootstrap-as-a-module">将 Bootstrap 作为模块使用 <a class="anchor-link" href="#using-bootstrap-as-a-module" aria-label="链接到 将 Bootstrap 作为模块使用"></a></h2>
<Callout>
  <p><strong>自己试试看！</strong>从 <a href="https://github.com/twbs/examples/tree/main/sass-js-esm">twbs/examples 仓库</a>下载将 Bootstrap 作为 ES 模块使用的源代码和可运行演示。你也可以<a href="https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html">在 StackBlitz 中打开示例</a>。</p>
</Callout>
<p>Bootstrap 的 JavaScript 以原生 ES 模块构建（<code>bootstrap.js</code> 和 <code>bootstrap.min.js</code>）。使用 <code>&lt;script type="module"&gt;</code> 在浏览器中加载 Bootstrap：</p>
  <CodeWrapper :code="code1" lang="html" />

<p>在浏览器中使用 ESM 需要完整路径，或者为 <code>@floating-ui/dom</code> 和 <code>vanilla-calendar-pro</code> 这样的裸模块说明符使用<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap">导入映射</a>。以下是使用导入映射的完整示例：</p>
<CodeWrapper :code="code2" lang="html" />
<p>不依赖 Floating UI 的组件（如 Toast、Alert、Collapse 等）可以单独导入，无需任何导入映射：</p>
<CodeWrapper :code="code3" lang="javascript" label="html" />

<h2 id="dependencies">依赖项 <a class="anchor-link" href="#dependencies" aria-label="链接到 依赖项"></a></h2>
<p>一些插件和 CSS 组件依赖于其他插件。如果单独引入插件，请务必在文档中检查这些依赖关系。</p>
<p>我们的菜单、弹出框和工具提示还依赖于 <a href="https://floating-ui.com/">Floating UI</a>。我们的日期选择器还依赖于 <a href="https://vanilla-calendar.pro/">Vanilla Calendar Pro</a>。</p>

<h2 id="data-attributes">数据属性 <a class="anchor-link" href="#data-attributes" aria-label="链接到 数据属性"></a></h2>
<p>几乎所有 Bootstrap 插件都可以仅通过 HTML 数据属性来启用和配置（这是我们使用 JavaScript 功能的首选方式）。请确保<strong>在单个元素上只使用一组数据属性</strong>（例如，你不能从同一个按钮触发工具提示和对话框。）</p>
<p>由于选项可以通过数据属性或 JavaScript 传递，你可以在 <code>data-bs-</code> 后面附加选项名称，例如 <code>data-bs-animation="{value}"</code>。通过数据属性传递选项时，请务必将选项名称的大小写形式从“<em>camelCase</em>”（驼峰式）改为“<em>kebab-case</em>”（短横线式）。例如，应使用 <code>data-bs-custom-class="beautifier"</code>，而不是 <code>data-bs-customClass="beautifier"</code>。</p>
<p>所有组件都支持一个保留的数据属性 <code>data-bs-config</code>，它可以用 JSON 字符串的形式存放简单的组件配置。当一个元素同时具有 <code>data-bs-config='{"delay":0, "title":123}'</code> 和 <code>data-bs-title="456"</code> 属性时，最终的 <code>title</code> 值将是 <code>456</code>，并且独立的数据属性会覆盖 <code>data-bs-config</code> 中给出的值。此外，现有数据属性也可以存放 JSON 值，例如 <code>data-bs-delay='{"show":0,"hide":150}'</code>。</p>

<h2 id="selectors">选择器 <a class="anchor-link" href="#selectors" aria-label="链接到 选择器"></a></h2>
<p>出于性能原因，我们使用原生 <code>querySelector</code> 和 <code>querySelectorAll</code> 方法查询 DOM 元素，因此你必须使用<a href="https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier">有效的选择器</a>。如果使用像 <code>collapse:Example</code> 这样的特殊选择器，请务必对其进行转义。</p>

<h2 id="events">事件 <a class="anchor-link" href="#events" aria-label="链接到 事件"></a></h2>
<p>Bootstrap 为大多数插件的独特操作提供了自定义事件。通常，这些事件以不定式和过去分词形式出现——其中不定式（例如 <code>show</code>）在事件开始时触发，其过去分词形式（例如 <code>shown</code>）在操作完成时触发。</p>
<p>所有不定式事件都提供 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault"><code>preventDefault()</code></a> 功能。这提供了在操作开始之前停止执行的能力。从事件处理程序返回 false 也会自动调用 <code>preventDefault()</code>。</p>
<CodeWrapper code="const myDialogEl = document.querySelector('#myDialog')

myDialogEl.addEventListener('show.bs.dialog', event => {
  return event.preventDefault() // stops dialog from being shown
})" lang="javascript" />

<h2 id="programmatic-api">编程 API <a class="anchor-link" href="#programmatic-api" aria-label="链接到 编程 API"></a></h2>
<p>所有构造函数都接受一个可选的选项对象，或者什么都不传（这会以默认行为初始化插件）：</p>
<CodeWrapper code="const myDialogEl = document.querySelector('#myDialog')
const dialog = new bootstrap.Dialog(myDialogEl) // initialized with defaults

const configObject = { keyboard: false }
const dialog1 = new bootstrap.Dialog(myDialogEl, configObject) // initialized with no keyboard" lang="javascript" />

<p>如果你想获取特定的插件实例，每个插件都暴露了一个 <code>getInstance</code> 方法。例如，直接从元素检索实例：</p>
<CodeWrapper code="bootstrap.Popover.getInstance(myPopoverEl)" lang="javascript" />

<p>如果请求的元素上未启动实例，此方法将返回 <code>null</code>。</p>
<p>或者，可以使用 <code>getOrCreateInstance</code> 获取与 DOM 元素关联的实例，或者在未初始化的情况下创建一个新实例。</p>
<CodeWrapper code="bootstrap.Popover.getOrCreateInstance(myPopoverEl, configObject)" lang="javascript" />

<p>如果实例未初始化，它可以接受并使用一个可选的配置对象作为第二个参数。</p>

<h3 id="css-selectors-in-constructors">构造函数中的 CSS 选择器 <a class="anchor-link" href="#css-selectors-in-constructors" aria-label="链接到 构造函数中的 CSS 选择器"></a></h3>
<p>除了 <code>getInstance</code> 和 <code>getOrCreateInstance</code> 方法之外，所有插件构造函数都可以接受 DOM 元素或有效的 <a href="#selectors">CSS 选择器</a>作为第一个参数。由于我们的插件只支持单个元素，插件元素通过 <code>querySelector</code> 方法查找。</p>
<CodeWrapper :code="code3" lang="javascript" />

<h3 id="promises-and-transitions">Promise & 过渡 <a class="anchor-link" href="#promises-and-transitions" aria-label="链接到 Promise & 过渡"></a></h3>
<p>所有编程 API 方法都是<strong>异步的</strong>，在过渡开始时返回给调用者，但<strong>在过渡结束之前</strong>。</p>
<p>显示或隐藏组件的方法返回一个 <strong>promise</strong>。promise 在过渡结束时 resolve，因此你可以 <code>await</code> 该方法，而不是监听事件。</p>
<CodeWrapper code="const collapse = bootstrap.Collapse.getOrCreateInstance('#myCollapse')

await collapse.show()
// The collapsible area is now expanded" lang="javascript" />

<p>这些方法返回 promise：</p>
<table class="table">
  <thead>
    <tr>
      <th>方法</th>
      <th>组件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>show</code>、<code>hide</code>、<code>toggle</code></td>
      <td>Collapse、Combobox、Datepicker、Dialog、Drawer、Menu、Popover、Tooltip</td>
    </tr>
    <tr>
      <td><code>show</code>、<code>hide</code></td>
      <td>Toast</td>
    </tr>
    <tr>
      <td><code>show</code></td>
      <td>Tab</td>
    </tr>
    <tr>
      <td><code>close</code></td>
      <td>Alert</td>
    </tr>
  </tbody>
</table>
<p>promise 不携带值地 resolve。它在匹配的 <code>shown.bs.*</code>、<code>hidden.bs.*</code> 或 <code>closed.bs.*</code> 事件触发的同一时刻 resolve，因此两种方式会在同一时间运行你的代码。当你必须对每一次变化（包括不是由你自己的代码发起的）做出反应时，请使用事件。</p>
<CodeWrapper code="const myDrawerEl = document.querySelector('#myDrawer')
const drawer = bootstrap.Drawer.getOrCreateInstance(myDrawerEl)

// Await the method you called…
await drawer.hide()
saveState()

// …or listen for every hide, whoever started it
myDrawerEl.addEventListener('hidden.bs.drawer', () => {
  saveState()
})" lang="javascript" />

<p>因为每个方法都返回 promise，你可以按顺序运行步骤，而无需嵌套监听器。</p>
<CodeWrapper code="const dialog = bootstrap.Dialog.getOrCreateInstance('#myDialog')
const toast = bootstrap.Toast.getOrCreateInstance('#myToast')

await dialog.hide()
await toast.show()" lang="javascript" />

<p>当调用什么都不做时，promise 也会 resolve——例如组件已经打开、监听器在 <code>show.bs.*</code> 事件上调用了 <code>preventDefault()</code>，或者你在过渡中途销毁了组件。因此 <code>await</code> 永远不会挂起，但它也不会告诉你状态是否改变。当这一点很重要时，请自行检查状态。</p>
<p>此外，对<strong>正在过渡的组件</strong>调用方法将被忽略。对于上述返回 promise 的方法，此类调用会立即 resolve。它不会等待正在运行的过渡结束。</p>
<CodeWrapper code="const myCarouselEl = document.querySelector('#myCarousel')
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', event => {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!" lang="javascript" />

<h3 id="default-settings">默认设置 <a class="anchor-link" href="#default-settings" aria-label="链接到 默认设置"></a></h3>
<p>你可以通过修改插件的 <code>Constructor.Default</code> 对象来更改插件的默认设置：</p>
<CodeWrapper code="// changes default for the toast plugin's `autohide` option to false
bootstrap.Toast.Default.autohide = false" lang="javascript" />

<h2 id="methods-and-properties">方法和属性 <a class="anchor-link" href="#methods-and-properties" aria-label="链接到 方法和属性"></a></h2>
<p>每个 Bootstrap 插件都暴露以下方法和静态属性。</p>
<table class="table">
  <thead>
    <tr>
      <th>方法</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>dispose</code></td>
      <td>销毁元素的插件实例。（移除 DOM 元素上存储的数据）</td>
    </tr>
    <tr>
      <td><code>getInstance</code></td>
      <td><em>静态</em>方法，允许你获取与 DOM 元素关联的插件实例。</td>
    </tr>
    <tr>
      <td><code>getOrCreateInstance</code></td>
      <td><em>静态</em>方法，允许你获取与 DOM 元素关联的插件实例，或者在未初始化的情况下创建一个新实例。</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr>
      <th>静态属性</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NAME</code></td>
      <td>返回插件名称。（示例：<code>bootstrap.Tooltip.NAME</code>）</td>
    </tr>
    <tr>
      <td><code>VERSION</code></td>
      <td>每个 Bootstrap 插件的版本可以通过插件构造函数的 <code>VERSION</code> 属性访问（示例：<code>bootstrap.Tooltip.VERSION</code>）</td>
    </tr>
  </tbody>
</table>

<h2 id="sanitizer">清理器 <a class="anchor-link" href="#sanitizer" aria-label="链接到 清理器"></a></h2>
<p>一些 JavaScript 组件可以在其配置中渲染或接受任意 HTML。为了防止跨站脚本（XSS）攻击，这些组件使用我们内置的内容清理器，在将任何接受 HTML 的选项渲染到页面之前对其进行清理。内容清理默认启用。具体来说：</p>
<ul>
  <li>Popovers 和 Tooltips 如果配置为这样做，可以在页面上渲染任意 HTML。</li>
  <li>Chips 和 Nav overflow 可以为其图标选项（<code>dismissIcon</code>、<code>moreIcon</code> 和 <code>[data-bs-overflow-icon]</code>）接受 HTML。</li>
</ul>
<p>工具提示和弹出框内容默认允许的标签和属性如下。任何未明确允许的标签或属性将在清理过程中被移除：</p>
<CodeWrapper code="const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

export const DefaultAllowlist: SanitizerAllowList = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}" lang="typescript" label="js/src/util/sanitizer.ts" />
<p>图标选项使用单独的、更严格的允许列表，涵盖默认 SVG 图标和常见的行内图标标记：</p>
<CodeWrapper code="/**
 * Allowlist for icon HTML options (Chips `dismissIcon`, NavOverflow `moreIcon`,
 * and markup supplied via `[data-bs-overflow-icon]`). Covers the default SVG
 * icons plus common inline-icon markup. Event-handler attributes and tags not
 * listed here are stripped by `sanitizeHtml`.
 */
export const DefaultIconAllowlist: SanitizerAllowList = {
  '*': ['class', 'role', ARIA_ATTRIBUTE_PATTERN],
  // Attribute names are matched lowercased (see allowedAttribute). `viewBox` is
  // listed as `viewbox` so the default SVG icons keep their coordinate system.
  svg: ['xmlns', 'width', 'height', 'viewbox', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'focusable'],
  path: ['d', 'fill', 'stroke', 'stroke-width', 'fill-rule', 'clip-rule'],
  line: ['x1', 'y1', 'x2', 'y2', 'stroke', 'stroke-width', 'stroke-linecap'],
  circle: ['cx', 'cy', 'r', 'fill', 'stroke', 'stroke-width'],
  rect: ['x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'stroke', 'stroke-width'],
  polyline: ['points', 'fill', 'stroke', 'stroke-width'],
  polygon: ['points', 'fill', 'stroke', 'stroke-width'],
  g: ['fill', 'stroke', 'stroke-width', 'transform'],
  // No `use` here: `href` / `xlink:href` on <use> can load external SVG
  // fragments. Apps that need sprites can extend this allowlist deliberately.
  span: [],
  i: []
}" lang="typescript" label="js/src/util/sanitizer.ts" />
<callout type="warning">
  <p><strong>使用这些高级选项时请谨慎。</strong>有关更多信息，请参阅 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">OWASP 的跨站脚本防御速查表</a>。仅因禁用或修改内容清理而导致的漏洞不在 Bootstrap 安全模型的范围内。</p>
</callout>
<p>你可以向默认的 <code>allowList</code> 添加新值：</p>
<CodeWrapper code="const myDefaultAllowList = bootstrap.Tooltip.Default.allowList

// To allow table elements
myDefaultAllowList.table = []

// To allow td elements and data-bs-option attributes on td elements
myDefaultAllowList.td = ['data-bs-option']

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
const myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)" lang="javascript" />
<p>你也可以用专门的库替换我们的清理器，例如 <a href="https://www.npmjs.com/package/dompurify">DOMPurify</a>：</p>
<CodeWrapper code="const myTooltipEl = document.querySelector('#myTooltip')
const tooltip = new bootstrap.Tooltip(myTooltipEl, {
  sanitizeFn(content) {
    return DOMPurify.sanitize(content)
  }
})" lang="javascript" />

<h2 id="disabled-javascript">禁用 JavaScript <a class="anchor-link" href="#disabled-javascript" aria-label="链接到 禁用 JavaScript"></a></h2>
<p>当 JavaScript 被禁用时，Bootstrap 的插件没有特殊的回退方案。如果你关心这种情况下的用户体验，请使用 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript"><code>&lt;noscript&gt;</code></a> 向用户解释情况（以及如何重新启用 JavaScript），和/或添加你自己的自定义回退方案。</p>
  </article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
  <ul>
    <li><a href="#js-components">JS 组件</a></li>
    <li><a href="#individual-or-compiled">单独引入或编译引入</a></li>
    <li><a href="#typescript">TypeScript</a></li>
    <li><a href="#usage-with-javascript-frameworks">与 JavaScript 框架一起使用</a></li>
    <li><a href="#using-bootstrap-as-a-module">将 Bootstrap 作为模块使用</a></li>
    <li><a href="#dependencies">依赖项</a></li>
    <li><a href="#data-attributes">数据属性</a></li>
    <li><a href="#selectors">选择器</a></li>
    <li><a href="#events">事件</a></li>
    <li>
      <a href="#programmatic-api">编程 API</a>
      <ul>
        <li><a href="#css-selectors-in-constructors">构造函数中的 CSS 选择器</a></li>
        <li><a href="#promises-and-transitions">Promise & 过渡</a></li>
        <li><a href="#default-settings">默认设置</a></li>
      </ul>
    </li>
    <li><a href="#methods-and-properties">方法和属性</a></li>
    <li><a href="#sanitizer">清理器</a></li>
    <li><a href="#disabled-javascript">禁用 JavaScript</a></li>
  </ul>
</nav>
</template>
<script setup>
const code1 = `<script type="module">
  import { Toast } from './bootstrap.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
<\/script>`

const code2 = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">
    <title>Hello, modularity!</title>
  </head>
  <body>
    <h1>Hello, modularity!</h1>
    <button id="popoverButton" type="button" class="btn-solid theme-primary btn-lg" data-bs-toggle="popover" title="ESM in Browser" data-bs-content="Bang!">Custom popover</button>

    <script type="importmap">
    {
      "imports": {
        "@floating-ui/dom": "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.7.6/dist/floating-ui.dom.esm.min.js",
        "vanilla-calendar-pro": "https://cdn.jsdelivr.net/npm/vanilla-calendar-pro@3.4.0/index.mjs",
        "bootstrap": "https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.min.js"
      }
    }
    <\/script>
    <script type="module">
      import * as bootstrap from 'bootstrap'

      new bootstrap.Popover(document.getElementById('popoverButton'))
    <\/script>
  </body>
</html>`;

const code3 = `const dialog = new bootstrap.Dialog('#myDialog')
const menu = new bootstrap.Menu('[data-bs-toggle="menu"]')
const drawer = bootstrap.Drawer.getInstance('#myDrawer')
const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')`
</script>