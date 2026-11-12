<template>
  <article class="bd-content" data-pagefind-body>
    <h1>折叠</h1>
    <p class="lead">使用少量类和我们的 JavaScript 插件，即可在整个项目中切换内容的可见性。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>折叠 JavaScript 插件用于显示和隐藏内容。按钮或锚点用作触发器，并映射到你要切换的特定元素。折叠元素时，会将 <code>height</code> 从其当前值动画过渡到 <code>0</code>。鉴于 CSS 处理动画的方式，你不能在 <code>.collapse</code> 元素上使用 <code>padding</code>。相反，应将该类用作独立的包装元素。</p>
    <Callout name="info-prefersreducedmotion" />
    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>点击下面的按钮，通过类更改来显示和隐藏另一个元素：</p>
    <ul>
      <li><code>.collapse</code> 隐藏内容</li>
      <li><code>.collapsing</code> 在过渡期间应用</li>
      <li><code>.collapse.show</code> 显示内容</li>
    </ul>
    <p>通常，我们推荐使用带有 <code>data-bs-target</code> 属性的 <code>&lt;button&gt;</code>。虽然从语义角度不推荐，但你也可以使用带有 <code>href</code> 属性的 <code>&lt;a&gt;</code> 链接（以及 <code>role=&quot;button&quot;</code>）。在两种情况下，都需要 <code>data-bs-toggle=&quot;collapse&quot;</code>。</p>
    <Example
      code='<p class="d-inline-flex gap-1">
 <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>'
    />
    <h2 id="horizontal">水平方向<a class="anchor-link" href="#horizontal" aria-label="水平方向链接"></a></h2>
    <p>折叠插件支持水平折叠。添加 <code>.collapse-horizontal</code> 修饰类，以过渡 <code>width</code> 而不是 <code>height</code>，并在直接子元素上设置 <code>width</code>。你可以随意编写自己的自定义 Sass、使用内联样式，或使用我们的 <a href="/utilities/sizing">宽度工具类</a>。</p>
    <Callout>
      <p>
        请注意，虽然下面的示例设置了 <code>min-height</code>，以避免在我们的文档中出现过多的重绘，但这并不是明确要求的。
        <strong>只有子元素上的 <code>width</code> 是必需的。</strong>
      </p> </Callout
    ><Example
      code='<p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px;">
      This is some placeholder content for a horizontal collapse. It’s hidden by default and shown when triggered.
    </div>
  </div>
</div>'
    />
    <h2 id="multiple-toggles-and-targets">多个切换器和目标<a class="anchor-link" href="#multiple-toggles-and-targets" aria-label="多个切换器和目标链接"></a></h2>
    <p>
      <code>&lt;button&gt;</code> 或 <code>&lt;a&gt;</code> 元素可以通过在其 <code>data-bs-target</code> 或 <code>href</code> 属性中使用选择器引用多个元素，从而显示和隐藏这些元素。反之，多个 <code>&lt;button&gt;</code> 或 <code>&lt;a&gt;</code> 元素如果各自通过其 <code>data-bs-target</code> 或 <code>href</code> 属性引用同一元素，
      也可以显示和隐藏该元素。
    </p>
    <Example
      code='<p class="d-inline-flex gap-1">
 <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>'
    />
    <h2 id="accessibility">无障碍访问<a class="anchor-link" href="#accessibility" aria-label="无障碍访问链接"></a></h2>
    <p>
      请务必为控件元素添加 <code>aria-expanded</code>。该属性向屏幕阅读器和类似的辅助技术明确传达与该控件关联的折叠元素的当前状态。如果折叠元素默认处于关闭状态，则控件元素上的该属性应具有 <code>aria-expanded=&quot;false&quot;</code> 的值。如果你使用 <code>show</code> 类将折叠元素设置为默认打开，则应在控件上设置
      <code>aria-expanded=&quot;true&quot;</code>。插件将根据折叠元素是否已打开或关闭，自动切换控件上的此属性 （通过 JavaScript，或由于用户触发了另一个同样关联到相同折叠元素的控件元素）。如果控件元素的 HTML 元素不是按钮（例如 <code>&lt;a&gt;</code> 或 <code>&lt;div&gt;</code>），则应为该元素添加 <code>role=&quot;button&quot;</code> 属性。
    </p>
    <p>如果你的控件元素只针对单个折叠元素（即 <code>data-bs-target</code> 属性指向一个 <code>id</code> 选择器），则应为控件元素添加 <code>aria-controls</code> 属性，其中包含折叠元素的 <code>id</code>。现代屏幕阅读器和类似的辅助 技术利用此属性为用户提供额外的快捷方式，以直接导航到折叠元素本身。</p>
    <p>
      请注意，Bootstrap 当前的实现并未涵盖
      <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">ARIA Authoring Practices Guide 折叠面板模式</a>
      中描述的各种<em>可选</em>键盘交互，你需要使用自定义 JavaScript 自行实现这些交互。
    </p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="collapse-transition" file="scss/_variables.scss" />
    <h3 id="classes">类<a class="anchor-link" href="#classes" aria-label="类链接"></a></h3>
    <p>折叠过渡类可以在 <code>scss/_transitions.scss</code> 中找到，因为这些类在多个组件（折叠和折叠面板）之间共享。</p>
    <ScssDocs name="collapse-classes" file="scss/_transitions.scss" />
    <h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2>
    <p>折叠插件利用了几个类来处理繁重的工作：</p>
    <ul>
      <li><code>.collapse</code> 隐藏内容</li>
      <li><code>.collapse.show</code> 显示内容</li>
      <li><code>.collapsing</code> 在过渡开始时添加，在过渡结束时移除</li>
    </ul>
    <p>这些类可以在 <code>_transitions.scss</code> 中找到。</p>
    <h3 id="via-data-attributes">通过 data 属性<a class="anchor-link" href="#via-data-attributes" aria-label="通过 data 属性链接"></a></h3>
    <p>只需为元素添加 <code>data-bs-toggle=&quot;collapse&quot;</code> 和一个 <code>data-bs-target</code>，即可自动将一个或多个折叠元素的控制权分配给该元素。<code>data-bs-target</code> 属性接受一个 CSS 选择器，以应用折叠效果。请确保为折叠元素添加 <code>collapse</code> 类。如果你希望它默认打开， 请添加额外的 <code>show</code> 类。</p>
    <p>
      要为可折叠区域添加类似折叠面板的分组管理，请添加 data 属性
      <code>data-bs-parent=&quot;#selector&quot;</code>。有关更多信息，请参阅<a href="/components/accordion">折叠面板页面</a>。
    </p>
    <h3 id="via-javascript">通过 JavaScript<a class="anchor-link" href="#via-javascript" aria-label="通过 JavaScript 链接"></a></h3>
    <p>手动启用：</p>
    <CodeWrapper
      code="const collapseElementList = document.querySelectorAll(&#39;.collapse&#39;)
const collapseList = [...collapseElementList].map(collapseEl =&gt; new bootstrap.Collapse(collapseEl))
"
      lang="javascript"
    />
    <h3 id="options">选项<a class="anchor-link" href="#options" aria-label="选项链接"></a></h3>
    <JsDataAttributes />
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
            <td><code>parent</code></td>
            <td>选择器、DOM 元素</td>
            <td><code>null</code></td>
            <td>
              如果提供了 parent，则当此折叠项显示时，指定父元素下的所有折叠元素都将关闭。（这类似于传统的折叠面板行为，取决于
              <code>card</code> 类）。该属性必须设置在目标可折叠区域上。
            </td>
          </tr>
          <tr>
            <td><code>toggle</code></td>
            <td>布尔值</td>
            <td><code>true</code></td>
            <td>在调用时切换折叠元素。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
    <Callout name="danger-async-methods" type="danger" />
    <p>将你的内容激活为折叠元素。接受一个可选的选项 <code>object</code>。</p>
    <p>你可以使用构造函数创建折叠实例，例如：</p>
    <CodeWrapper
      code="const bsCollapse = new bootstrap.Collapse(&#39;#myCollapse&#39;, {
  toggle: false
})
"
      lang="javascript"
    />
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
            <td><code>dispose</code></td>
            <td>销毁元素的折叠。（移除 DOM 元素上存储的数据）</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td>
              静态方法，用于获取与 DOM 元素关联的折叠实例，可以这样使用：
              <code>bootstrap.Collapse.getInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td>
              静态方法，返回与 DOM 元素关联的折叠实例，如果尚未初始化则创建一个新实例。可以这样使用：
              <code>bootstrap.Collapse.getOrCreateInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>hide</code></td>
            <td>
              隐藏折叠元素。
              <strong>在折叠元素实际隐藏之前返回给调用者</strong>（例如，在 <code>hidden.bs.collapse</code> 事件触发之前）。
            </td>
          </tr>
          <tr>
            <td><code>show</code></td>
            <td>
              显示折叠元素。
              <strong>在折叠元素实际显示之前返回给调用者</strong>（例如，在 <code>shown.bs.collapse</code> 事件触发之前）。
            </td>
          </tr>
          <tr>
            <td><code>toggle</code></td>
            <td>
              切换折叠元素的显示或隐藏状态。
              <strong>在折叠元素实际显示或隐藏之前返回给调用者</strong>
              （即在 <code>shown.bs.collapse</code> 或 <code>hidden.bs.collapse</code> 事件触发之前）。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3>
    <p>Bootstrap 的折叠类公开了几个事件，用于挂钩到折叠功能。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>事件类型</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>hide.bs.collapse</code></td>
            <td>当调用 <code>hide</code> 方法时立即触发此事件。</td>
          </tr>
          <tr>
            <td><code>hidden.bs.collapse</code></td>
            <td>当折叠元素已对用户隐藏时触发此事件（将等待 CSS 过渡完成）。</td>
          </tr>
          <tr>
            <td><code>show.bs.collapse</code></td>
            <td>当调用 <code>show</code> 实例方法时立即触发此事件。</td>
          </tr>
          <tr>
            <td><code>shown.bs.collapse</code></td>
            <td>当折叠元素已对用户可见时触发此事件（将等待 CSS 过渡完成）。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code="const myCollapsible = document.getElementById(&#39;myCollapsible&#39;)
myCollapsible.addEventListener(&#39;hidden.bs.collapse&#39;, event =&gt; {
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
      <li><a href="#how-it-works">工作原理</a></li>
      <li><a href="#example">示例</a></li>
      <li><a href="#horizontal">水平方向</a></li>
      <li><a href="#multiple-toggles-and-targets">多个切换器和目标</a></li>
      <li><a href="#accessibility">无障碍访问</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#classes">类</a></li>
        </ul>
      </li>
      <li>
        <a href="#usage">用法</a>
        <ul>
          <li><a href="#via-data-attributes">通过 data 属性</a></li>
          <li><a href="#via-javascript">通过 JavaScript</a></li>
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
</script>
