<template>
  <article class="bd-content" data-pagefind-body>
    <h1>弹出框</h1>
    <p class="lead">如何向站点中的任意元素添加 Bootstrap 弹出框（类似 iOS 中的弹出框）的文档和示例。</p>

    <h2 id="overview">概览<a class="anchor-link" href="#overview" aria-label="概览链接"></a></h2>
    <p>使用弹出框插件时需要了解的事项：</p>
    <ul>
      <li>弹出框依赖第三方库<a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/index.md">Popper</a>进行定位。你必须在 <code>bootstrap.js</code> 之前引入<a href="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js">popper.min.js</a>，或者使用包含 Popper 的 <code>bootstrap.bundle.min.js</code>。</li>
      <li>弹出框需要<a href="/components/popovers">弹出框插件</a>作为依赖。</li>
      <li>出于性能原因，弹出框需要手动启用，因此<strong>你必须自行初始化它们</strong>。</li>
      <li><code>title</code> 和 <code>content</code> 的值为零长度时，永远不会显示弹出框。</li>
      <li>指定 <code>container: &#39;body&#39;</code> 以避免在更复杂的组件（例如我们的输入组、按钮组等）中出现渲染问题。</li>
      <li>在隐藏的元素上触发弹出框不会生效。</li>
      <li>为 <code>.disabled</code> 或 <code>disabled</code> 元素设置的弹出框必须在包裹元素上触发。</li>
      <li>当从跨越多行的锚点链接触发时，弹出框将居中显示在锚点的整体宽度范围内。可以在 <code>&lt;a&gt;</code> 上使用 <code>.text-nowrap</code> 来避免此行为。</li>
      <li>弹出框必须在对应元素从 DOM 中移除之前隐藏。</li>
      <li>弹出框可以通过 shadow DOM 内部的元素触发。</li>
    </ul>
    <Callout name="info-sanitizer" />
    <Callout name="info-prefersreducedmotion" />
    <p>继续阅读，了解弹出框如何通过一些示例工作。</p>
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <h3 id="enable-popovers">启用弹出框<a class="anchor-link" href="#enable-popovers" aria-label="启用弹出框链接"></a></h3>
    <p>
      如上所述，你必须先初始化弹出框才能使用它们。在页面上初始化所有弹出框的一种方法是根据它们的
      <code>data-bs-toggle</code> 属性来选择它们，如下所示：
    </p>
    <CodeWrapper
      code='const popoverTriggerList = document.querySelectorAll(&#39;[data-bs-toggle="popover"]&#39;)
const popoverList = [...popoverTriggerList].map(popoverTriggerEl =&gt; new bootstrap.Popover(popoverTriggerEl))
'
      lang="javascript"
    />
    <h3 id="live-demo">在线演示<a class="anchor-link" href="#live-demo" aria-label="在线演示链接"></a></h3>
    <p>
      我们使用与上面代码片段类似的 JavaScript 来渲染以下实时弹出框。标题通过
      <code>data-bs-title</code> 设置，主体内容通过 <code>data-bs-content</code> 设置。
    </p>
    <Callout name="warning-data-bs-title-vs-title" type="warning" />
    <Example addStackblitzJs code='<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here’s some amazing content. It’s very engaging. Right?">Click to toggle popover</button>' />
    <h3 id="four-directions">四个方向<a class="anchor-link" href="#four-directions" aria-label="四个方向链接"></a></h3>
    <p>
      有四个选项可用：上、右、下和左。在 RTL 中使用 Bootstrap 时，方向会镜像反转。设置
      <code>data-bs-placement</code> 可以改变方向。
    </p>
    <Example
      addStackblitzJs
      code='<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
  Popover on top
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
  Popover on right
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
  Popover on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
  Popover on left
</button>'
    />
    <h3 id="custom-container">自定义 <code>container</code><a class="anchor-link" href="#custom-container" aria-label="自定义 container 链接"></a></h3>
    <p>
      当父元素上的一些样式会干扰弹出框时，你可能会想指定一个自定义的
      <code>container</code>，使弹出框的 HTML 改为出现在该元素内部。这种情况常见于响应式表格、输入组以及类似组件。
    </p>
    <CodeWrapper
      code="const popover = new bootstrap.Popover(&#39;.example-popover&#39;, {
  container: &#39;body&#39;
})
"
      lang="javascript"
    />
    <p>另一种需要显式设置自定义 <code>container</code> 的情况是将弹出框放在<a href="/components/modal">模态对话框</a>内，以确保弹出框本身被追加到模态框中。这对于包含交互元素的弹出框尤为重要——模态对话框会捕获焦点，因此除非 弹出框是模态框的子元素，否则用户将无法聚焦或激活这些交互元素。</p>
    <CodeWrapper
      code="const popover = new bootstrap.Popover(&#39;.example-popover&#39;, {
  container: &#39;.modal-body&#39;
})
"
      lang="javascript"
    />
    <h3 id="custom-popovers">自定义弹出框<a class="anchor-link" href="#custom-popovers" aria-label="自定义弹出框链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>你可以使用<a href="#variables">CSS 变量</a>来自定义弹出框的外观。我们通过 <code>data-bs-custom-class=&quot;custom-popover&quot;</code> 设置一个自定义类，以限定自定义外观的作用范围，并用它来覆盖部分本地 CSS 变量。</p>
    <ScssDocs name="custom-popovers" file="site/src/scss/_component-examples.scss" />
    <Example
      addStackblitzJs
      class="custom-popover-demo"
      code='<button type="button" class="btn btn-secondary"
        data-bs-toggle="popover" data-bs-placement="right"
        data-bs-custom-class="custom-popover"
        data-bs-title="Custom popover"
        data-bs-content="This popover is themed via CSS variables.">
  Custom popover
</button>'
    />
    <h3 id="dismiss-on-next-click">下次点击时关闭<a class="anchor-link" href="#dismiss-on-next-click" aria-label="下次点击时关闭链接"></a></h3>
    <p>使用 <code>focus</code> 触发器，用户下次点击除切换元素之外的其他元素时即可关闭弹出框。</p>
    <Callout type="danger">
      <p>
        <strong>下次点击时关闭需要特定的 HTML，才能确保跨浏览器和跨平台的正确行为。</strong>
        你只能使用 <code>&lt;a&gt;</code> 元素，而不能使用 <code>&lt;button&gt;</code>，并且必须包含<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"><code>tabindex</code></a
        >。
      </p>
    </Callout>
    <Example addStackblitzJs code='<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Dismissible popover" data-bs-content="And here’s some amazing content. It’s very engaging. Right?">Dismissible popover</a>' />
    <CodeWrapper
      code="const popover = new bootstrap.Popover(&#39;.popover-dismiss&#39;, {
  trigger: &#39;focus&#39;
})
"
      lang="javascript"
    />
    <h3 id="disabled-elements">禁用元素<a class="anchor-link" href="#disabled-elements" aria-label="禁用元素链接"></a></h3>
    <p>带有 <code>disabled</code> 属性的元素不可交互，这意味着用户无法通过聚焦、悬停或点击它们来触发弹出框（或工具提示）。作为变通方法，你可以从包裹的 <code>&lt;div&gt;</code> 或 <code>&lt;span&gt;</code> 触发弹出框，最好使用 <code>tabindex=&quot;0&quot;</code> 使其可被键盘聚焦。</p>
    <p>对于禁用元素的弹出框触发器，你可能还需要设置 <code>data-bs-trigger=&quot;hover focus&quot;</code>，这样弹出框会作为即时视觉反馈呈现给用户，因为他们可能并不期望<em>点击</em>一个禁用元素。</p>
    <Example
      addStackblitzJs
      code='<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
  <button class="btn btn-primary" type="button" disabled>Disabled button</button>
</span>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，弹出框现在在
      <code>.popover</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="popover-css-vars" file="scss/_popover.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="popover-variables" file="scss/_variables.scss" />
    <h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2>
    <p>通过 JavaScript 启用弹出框：</p>
    <CodeWrapper
      code="const exampleEl = articleEl.getElementById(&#39;example&#39;)
const popover = new bootstrap.Popover(exampleEl, options)
"
      lang="javascript"
    />
    <Callout type="warning">
      <p>
        <strong>确保键盘和辅助技术用户能够访问弹出框</strong>，只将它们添加到传统上可被键盘聚焦且具有交互性的 HTML 元素（例如链接或表单控件）上。虽然其他 HTML 元素可以通过添加 <code>tabindex=&quot;0&quot;</code> 变为可聚焦，但这会给键盘用户在不具交互性的元素上制造烦人且 令人困惑的 Tab
        停靠点，而且大多数辅助技术目前在此情况下不会播报弹出框。此外，不要仅依赖 <code>hover</code> 作为弹出框的触发器，因为这会导致键盘用户无法触发它们。
      </p>
      <p>避免在使用 <code>html</code> 选项的弹出框中添加过多内容。弹出框显示后，其内容通过 <code>aria-describedby</code> 属性与触发器元素关联，这会导致弹出框的所有内容作为一段冗长、不间断的内容一次性播报给辅助技术用户。</p>
      <p>弹出框不管理键盘焦点顺序，且它们在 DOM 中的位置可能是随机的，因此在添加交互元素（如表单或链接）时要格外小心，因为这可能导致不合逻辑的焦点顺序，或者使弹出框内容本身对键盘用户完全不可访问。如果必须使用这些元素，请考虑改用 模态对话框。</p>
    </Callout>
    <h3 id="options">选项<a class="anchor-link" href="#options" aria-label="选项链接"></a></h3>
    <JsDataAttributes />
    <Callout type="warning">
      <p>请注意，出于安全原因，<code>sanitize</code>、<code>sanitizeFn</code> 和 <code>allowList</code> 选项不能通过数据属性提供。</p>
    </Callout>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>名称</th>
            <th>类型</th>
            <th>默认值</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>allowList</code></td>
            <td>object</td>
            <td><a href="/getting-started/javascript#sanitizer">默认值</a></td>
            <td>
              一个包含允许的标签和属性的对象。未明确允许的标签和属性将被
              <a href="/getting-started/javascript#sanitizer">内容清理器</a>移除。
              <Callout type="warning"><strong>向此列表添加内容时要格外谨慎。</strong>更多信息请参阅 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">OWASP 的跨站脚本攻击防御速查表</a>。</Callout>
            </td>
          </tr>
          <tr>
            <td><code>animation</code></td>
            <td>boolean</td>
            <td><code>true</code></td>
            <td>为弹出框应用 CSS 淡入过渡效果。</td>
          </tr>
          <tr>
            <td><code>boundary</code></td>
            <td>string, element</td>
            <td><code>&#39;clippingParents&#39;</code></td>
            <td>弹出框的溢出约束边界（仅适用于 Popper 的 preventOverflow 修饰符）。默认值为 <code>&#39;clippingParents&#39;</code>，可以接受 HTMLElement 引用（仅限通过 JavaScript）。更多信息请参阅 Popper 的<a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/utils/detect-overflow/#boundary">detectOverflow 文档</a>。</td>
          </tr>
          <tr>
            <td><code>container</code></td>
            <td>string, element, false</td>
            <td><code>false</code></td>
            <td>将弹出框追加到特定元素。示例：<code>container: &#39;body&#39;</code>。此选项的特别之处在于，它允许你将弹出框放置在文档流中靠近触发元素的位置——这可以防止弹出框在窗口 调整大小时从触发元素处漂移。</td>
          </tr>
          <tr>
            <td><code>content</code></td>
            <td>null, string, element, function</td>
            <td><code>&#39;&#39;</code></td>
            <td>弹出框的文本内容。如果提供的是函数，则调用该函数时，其 <code>this</code> 引用将被设置为弹出框所附加到的元素。</td>
          </tr>
          <tr>
            <td><code>customClass</code></td>
            <td>string, function</td>
            <td><code>&#39;&#39;</code></td>
            <td>
              在弹出框显示时为其添加类。请注意，这些类将附加到模板中指定的任何类之上。要添加多个类，请用空格分隔：
              <code>&#39;class-1 class-2&#39;</code>。你也可以传入一个函数，该函数应返回包含额外类名的单个字符串。
            </td>
          </tr>
          <tr>
            <td><code>delay</code></td>
            <td>number, object</td>
            <td><code>0</code></td>
            <td>
              延迟显示和隐藏弹出框的时间（毫秒）——不适用于 manual 触发类型。如果提供的是数字，则延迟会同时应用于隐藏和显示。对象结构为：
              <code>delay: { &quot;show&quot;: 500, &quot;hide&quot;: 100 }</code>。
            </td>
          </tr>
          <tr>
            <td><code>fallbackPlacements</code></td>
            <td>array</td>
            <td><code>[&#39;top&#39;, &#39;right&#39;, &#39;bottom&#39;, &#39;left&#39;]</code></td>
            <td>
              通过在数组中提供一系列位置（按优先级顺序）来定义备选位置。更多信息请参阅 Popper 的
              <a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/modifiers/flip/#fallbackplacements">行为文档</a>。
            </td>
          </tr>
          <tr>
            <td><code>html</code></td>
            <td>boolean</td>
            <td><code>false</code></td>
            <td>允许在弹出框中使用 HTML。如果为 true，弹出框 <code>title</code> 中的 HTML 标签将在弹出框中渲染。如果为 false，将使用 <code>innerText</code> 属性 将内容插入 DOM。处理用户生成的输入时，倾向于使用文本，以<a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">防止 XSS 攻击</a>。</td>
          </tr>
          <tr>
            <td><code>offset</code></td>
            <td>array, string, function</td>
            <td><code>[0, 8]</code></td>
            <td>
              弹出框相对于其目标的偏移量。你可以在数据属性中传入以逗号分隔值的字符串，例如：
              <code>data-bs-offset=&quot;10,20&quot;</code>。当使用函数来确定偏移量时，调用该函数时会将包含 popper 位置、引用元素和 popper 矩形信息的对象作为其第一个参数。触发元素的 DOM 节点作为第二个参数传入。该函数必须返回一个包含两个数字的数组：
              <a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/modifiers/offset/#skidding-1">skidding</a>、<a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/modifiers/offset/#distance-1">distance</a>。更多信息请参阅 Popper 的<a
                href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/modifiers/offset/#options"
                >偏移量文档</a
              >。
            </td>
          </tr>
          <tr>
            <td><code>placement</code></td>
            <td>string, function</td>
            <td><code>&#39;right&#39;</code></td>
            <td>如何定位弹出框：auto、top、bottom、left、right。当指定 <code>auto</code> 时，将动态重新调整弹出框的方向。当使用函数来确定位置时，调用该函数时会将弹出框 DOM 节点作为第一个参数，将触发元素 DOM 节点作为第二个参数。<code>this</code> 上下文 将被设置为弹出框实例。</td>
          </tr>
          <tr>
            <td><code>popperConfig</code></td>
            <td>null, object, function</td>
            <td><code>null</code></td>
            <td>
              要更改 Bootstrap 的默认 Popper 配置，请参阅<a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/constructors/#options">Popper 的配置</a>。当使用函数来创建 Popper 配置时，调用该函数时会将包含 Bootstrap 默认 Popper 配置的对象作为参数传入。这有助于你将默认配置与自己的配置结合使用并合并。该函数必须返回一个 用于 Popper
              的配置对象。
            </td>
          </tr>
          <tr>
            <td><code>sanitize</code></td>
            <td>boolean</td>
            <td><code>true</code></td>
            <td>
              启用<a href="/getting-started/javascript#sanitizer">内容清理</a>。如果为 true，则会对 <code>template</code>、<code>content</code> 和 <code>title</code> 选项进行清理。
              <Callout type="warning"><strong>禁用内容清理时要格外谨慎。</strong>更多信息请参阅 <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">OWASP 的跨站脚本攻击防御速查表</a>。仅因禁用内容清理而导致的漏洞不属于 Bootstrap 安全模型的范围。</Callout>
            </td>
          </tr>
          <tr>
            <td><code>sanitizeFn</code></td>
            <td>null, function</td>
            <td><code>null</code></td>
            <td>
              提供一个替代的
              <a href="/getting-started/javascript#sanitizer">内容清理</a>函数。如果你倾向于使用专门的库来执行清理，这会很有用。
            </td>
          </tr>
          <tr>
            <td><code>selector</code></td>
            <td>string, false</td>
            <td><code>false</code></td>
            <td>
              如果提供了选择器，弹出框对象将被委托到指定的目标上。在实践中，这被用于将弹出框同时应用于动态添加的 DOM 元素（<code>jQuery.on</code> 支持）。请参阅<a href="https://github.com/twbs/bootstrap/issues/4215">此 issue</a>和 <a href="https://codepen.io/Johann-S/pen/djJYPb">一个说明性的示例</a>。<strong>注意</strong>：<code>title</code>
              属性不能用作选择器。
            </td>
          </tr>
          <tr>
            <td><code>template</code></td>
            <td>string</td>
            <td>
              <code>&#39;&lt;div class=&quot;popover&quot; role=&quot;tooltip&quot;&gt;&lt;div class=&quot;popover-arrow&quot;&gt;&lt;/div&gt;&lt;h3 class=&quot;popover-header&quot;&gt;&lt;/h3&gt;&lt;div class=&quot;popover-body&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;</code>
            </td>
            <td>创建弹出框时使用的基础 HTML。弹出框的 <code>title</code> 将被注入到 <code>.popover-header</code> 中。弹出框的 <code>content</code> 将被注入到 <code>.popover-body</code> 中。<code>.popover-arrow</code> 将成为弹出框的箭头。最外层的包裹元素应具有 <code>.popover</code> 类和 <code>role=&quot;tooltip&quot;</code>。</td>
          </tr>
          <tr>
            <td><code>title</code></td>
            <td>string, element, function</td>
            <td><code>&#39;&#39;</code></td>
            <td>弹出框标题。如果提供的是函数，则调用该函数时，其 <code>this</code> 引用将被设置为弹出框所附加到的元素。</td>
          </tr>
          <tr>
            <td><code>trigger</code></td>
            <td>string</td>
            <td><code>&#39;click&#39;</code></td>
            <td>
              弹出框的触发方式：click、hover、focus、manual。你可以传入多个触发器；用空格分隔。<code>&#39;manual&#39;</code> 表示弹出框将通过 <code>.popover(&#39;show&#39;)</code>、<code>.popover(&#39;hide&#39;)</code> 和 <code>.popover(&#39;toggle&#39;)</code> 方法以编程方式触发；此值不能与任何其他触发器组合使用。单独使用
              <code>&#39;hover&#39;</code> 会导致弹出框无法通过键盘触发，只有在存在其他方式为键盘用户传达相同信息时才应使用。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Callout>
      <h4 id="data-attributes-for-individual-popovers">单个弹出框的数据属性</h4>
      <p>单个弹出框的选项也可以通过使用数据属性来指定，如上所述。</p>
    </Callout>
    <h4 id="using-function-with-popperconfig">在 <code>popperConfig</code> 中使用函数</h4>
    <CodeWrapper
      code="const popover = new bootstrap.Popover(element, {
  popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
"
      lang="javascript"
    />
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
    <Callout name="danger-async-methods" type="danger" />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>方法</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>disable</code></td>
            <td>移除元素弹出框的显示能力。只有在重新启用后，弹出框才能再次显示。</td>
          </tr>
          <tr>
            <td><code>dispose</code></td>
            <td>
              隐藏并销毁元素的弹出框（移除 DOM 元素上存储的数据）。使用委托的弹出框（通过
              <a href="#options"><code>selector</code> 选项</a>创建）无法在派生的触发器元素上单独销毁。
            </td>
          </tr>
          <tr>
            <td><code>enable</code></td>
            <td>赋予元素弹出框以显示的能力。<strong>弹出框默认处于启用状态。</strong></td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td><em>静态</em>方法，允许你获取与 DOM 元素关联的弹出框实例。</td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td><em>静态</em>方法，允许你获取与 DOM 元素关联的弹出框实例，如果尚未初始化，则创建一个新的实例。</td>
          </tr>
          <tr>
            <td><code>hide</code></td>
            <td>
              隐藏元素的弹出框。
              <strong>在弹出框实际被隐藏之前就返回给调用者</strong>（即在 <code>hidden.bs.popover</code> 事件发生之前）。这被认为是弹出框的“手动”触发。
            </td>
          </tr>
          <tr>
            <td><code>setContent</code></td>
            <td>提供了一种在弹出框初始化后更改其内容的方法。</td>
          </tr>
          <tr>
            <td><code>show</code></td>
            <td>
              显示元素的弹出框。
              <strong>在弹出框实际被显示之前就返回给调用者</strong>（即在 <code>shown.bs.popover</code> 事件发生之前）。这被认为是弹出框的“手动”触发。标题和内容均为零长度的弹出框永远不会显示。
            </td>
          </tr>
          <tr>
            <td><code>toggle</code></td>
            <td>
              切换元素的弹出框。
              <strong>在弹出框实际被显示或隐藏之前就返回给调用者</strong>（即在 <code>shown.bs.popover</code> 或 <code>hidden.bs.popover</code> 事件发生之前）。这被认为是弹出框的“手动”触发。
            </td>
          </tr>
          <tr>
            <td><code>toggleEnabled</code></td>
            <td>切换元素弹出框的显示或隐藏能力。</td>
          </tr>
          <tr>
            <td><code>update</code></td>
            <td>更新元素弹出框的位置。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code="// getOrCreateInstance example
const popover = bootstrap.Popover.getOrCreateInstance(&#39;#example&#39;) // Returns a Bootstrap popover instance

// setContent example
popover.setContent({
  &#39;.popover-header&#39;: &#39;another title&#39;,
  &#39;.popover-body&#39;: &#39;another content&#39;
})
"
      lang="javascript"
    />
    <Callout>
      <p>
        <code>setContent</code> 方法接受一个 <code>object</code> 参数，其中每个属性键都是弹出框模板中有效的 <code>string</code> 选择器，每个相关的属性值可以是 <code>string</code> | <code>element</code> | <code>function</code> |
        <code>null</code>
      </p>
    </Callout>
    <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>事件</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>hide.bs.popover</code></td>
            <td>当 <code>hide</code> 实例方法被调用时立即触发此事件。</td>
          </tr>
          <tr>
            <td><code>hidden.bs.popover</code></td>
            <td>当弹出框完成从用户处隐藏后触发此事件（将等待 CSS 过渡完成）。</td>
          </tr>
          <tr>
            <td><code>inserted.bs.popover</code></td>
            <td>当弹出框模板被添加到 DOM 后，在 <code>show.bs.popover</code> 事件之后触发此事件。</td>
          </tr>
          <tr>
            <td><code>show.bs.popover</code></td>
            <td>当 <code>show</code> 实例方法被调用时立即触发此事件。</td>
          </tr>
          <tr>
            <td><code>shown.bs.popover</code></td>
            <td>当弹出框对用户可见后触发此事件（将等待 CSS 过渡完成）。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code="const myPopoverTrigger = articleEl.getElementById(&#39;myPopover&#39;)
myPopoverTrigger.addEventListener(&#39;hidden.bs.popover&#39;, () =&gt; {
  // do something...
})
"
      lang="javascript"
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#overview">概览</a></li>
      <li>
        <a href="#examples">示例</a>
        <ul>
          <li><a href="#enable-popovers">启用弹出框</a></li>
          <li><a href="#live-demo">在线演示</a></li>
          <li><a href="#four-directions">四个方向</a></li>
          <li>
            <a href="#custom-container">自定义 <code>container</code></a>
          </li>
          <li><a href="#custom-popovers">自定义弹出框</a></li>
          <li><a href="#dismiss-on-next-click">下次点击时关闭</a></li>
          <li><a href="#disabled-elements">禁用元素</a></li>
        </ul>
      </li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
        </ul>
      </li>
      <li>
        <a href="#usage">用法</a>
        <ul>
          <li><a href="#options">选项</a></li>
          <li><a href="#methods">方法</a></li>
          <li><a href="#events">事件</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import { onMounted, onBeforeUnmount } from 'vue';

let articleEl = null;

onMounted(() => {
  import('bootstrap').then((bootstrap) => {
    articleEl = document.querySelector('article.bd-content');

    const popoverTriggerList = articleEl.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
  });
});
onBeforeUnmount(() => {
  import('bootstrap').then((bootstrap) => {
    const popoverList = articleEl.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverInstances = [...popoverList].map((popoverEl) => bootstrap.Popover.getInstance(popoverEl));
    popoverInstances.forEach((popover) => popover.dispose());
  });
});
</script>
