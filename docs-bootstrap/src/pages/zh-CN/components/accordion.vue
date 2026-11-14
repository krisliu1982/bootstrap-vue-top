<template>
  <article class="bd-content" data-pagefind-body>
    <h1>折叠面板</h1>
    <p class="lead">结合我们的折叠 JavaScript 插件，创建可垂直折叠的折叠面板。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>折叠面板内部使用 <a href="/components/collapse">折叠</a> 来使其可折叠。</p>
    <Callout name="info-prefersreducedmotion" />
    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>点击下面的折叠面板来展开/折叠其内容。</p>
    <p>要渲染一个默认展开的折叠面板：</p>
    <ul>
      <li>在 <code>.accordion-collapse</code> 元素上添加 <code>.show</code> 类。</li>
      <li>从 <code>.accordion-button</code> 元素上移除 <code>.collapsed</code> 类，并将其 <code>aria-expanded</code> 属性设置为 <code>true</code>。</li>
    </ul>
    <Example
      code='<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>'
    />
    <h3 id="flush">贴边显示<a class="anchor-link" href="#flush" aria-label="贴边显示链接"></a></h3>
    <p>添加 <code>.accordion-flush</code> 以移除部分边框和圆角，使折叠面板与其父容器边缘贴合。</p>
    <Example
      class="bg-body-secondary"
      code='<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>'
    />
    <h3 id="always-open">始终展开<a class="anchor-link" href="#always-open" aria-label="始终展开链接"></a></h3>
    <p>省略每个 <code>.accordion-collapse</code> 上的 <code>data-bs-parent</code> 属性，即可在打开某个折叠面板项时保持其他项展开。</p>
    <Example
      code='<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>'
    />
    <h2 id="accessibility">无障碍<a class="anchor-link" href="#accessibility" aria-label="无障碍链接"></a></h2>
    <p>
      请阅读
      <a href="/components/collapse#accessibility">折叠无障碍章节</a> 以了解更多信息。
    </p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，折叠面板现在在
      <code>.accordion</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值由 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="accordion-css-vars" file="scss/_accordion.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="accordion-variables" file="scss/_variables.scss" />
    <h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2>
    <p>折叠插件使用几个类来完成主要工作：</p>
    <ul>
      <li><code>.collapse</code> 隐藏内容</li>
      <li><code>.collapse.show</code> 显示内容</li>
      <li><code>.collapsing</code> 在过渡开始时添加，在过渡结束时移除</li>
    </ul>
    <p>这些类可以在 <code>_transitions.scss</code> 中找到。</p>
    <h3 id="via-data-attributes">通过 data 属性<a class="anchor-link" href="#via-data-attributes" aria-label="通过 data 属性链接"></a></h3>
    <p>只需在元素上添加 <code>data-bs-toggle=&quot;collapse&quot;</code> 和 <code>data-bs-target</code>，即可自动为一个或多个可折叠元素分配控制权。<code>data-bs-target</code> 属性接受一个 CSS 选择器，用于指定要应用折叠的目标。请确保为可折叠元素添加 <code>collapse</code> 类。如果你希望它默认展开，请额外添加 <code>show</code> 类。</p>
    <p>
      要为可折叠区域添加折叠面板组管理，请添加数据属性
      <code>data-bs-parent=&quot;#selector&quot;</code>。
    </p>
    <h3 id="via-javascript">通过 JavaScript<a class="anchor-link" href="#via-javascript" aria-label="通过 JavaScript链接"></a></h3>
    <p>手动启用：</p>
    <CodeWrapper
      code="const accordionCollapseElementList = document.querySelectorAll(&#39;#myAccordion .collapse&#39;)
const accordionCollapseList = [...accordionCollapseElementList].map(accordionCollapseEl =&gt; new bootstrap.Collapse(accordionCollapseEl))
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
            <td>如果提供了 parent，那么当此可折叠项显示时，指定 parent 下的所有可折叠元素都将被关闭。该属性必须设置在目标可折叠区域上。</td>
          </tr>
          <tr>
            <td><code>toggle</code></td>
            <td>布尔值</td>
            <td><code>true</code></td>
            <td>在调用时切换可折叠元素。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
    <Callout name="danger-async-methods" type="danger" />
    <p>将您的内容激活为可折叠元素。接受一个可选的选项 <code>object</code>。</p>
    <p>你可以使用构造函数创建一个折叠实例，例如：</p>
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
            <td>销毁元素的折叠功能。（移除 DOM 元素上存储的数据）</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td>
              静态方法，用于获取与某个 DOM 元素关联的折叠实例，可以这样使用：
              <code>bootstrap.Collapse.getInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td>
              静态方法，返回与某个 DOM 元素关联的折叠实例，如果尚未初始化则创建一个新实例。可以这样使用：
              <code>bootstrap.Collapse.getOrCreateInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>hide</code></td>
            <td>
              隐藏可折叠元素。
              <strong>在可折叠元素实际隐藏之前就返回给调用者</strong>（例如在 <code>hidden.bs.collapse</code> 事件发生之前）。
            </td>
          </tr>
          <tr>
            <td><code>show</code></td>
            <td>
              显示可折叠元素。
              <strong>在可折叠元素实际显示之前就返回给调用者</strong>（例如在 <code>shown.bs.collapse</code> 事件发生之前）。
            </td>
          </tr>
          <tr>
            <td><code>toggle</code></td>
            <td>
              将可折叠元素切换为显示或隐藏。
              <strong>在可折叠元素实际显示或隐藏之前就返回给调用者</strong>
              （即在 <code>shown.bs.collapse</code> 或 <code>hidden.bs.collapse</code> 事件发生之前）。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3>
    <p>Bootstrap 的折叠（collapse）类暴露了几个事件，用于挂接折叠功能。</p>
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
            <td>当调用 <code>hide</code> 方法时会立即触发此事件。</td>
          </tr>
          <tr>
            <td><code>hidden.bs.collapse</code></td>
            <td>当折叠元素对用户隐藏完成后触发此事件（会等待 CSS 过渡完成）。</td>
          </tr>
          <tr>
            <td><code>show.bs.collapse</code></td>
            <td>当调用 <code>show</code> 实例方法时立即触发此事件。</td>
          </tr>
          <tr>
            <td><code>shown.bs.collapse</code></td>
            <td>当折叠元素已对用户可见后触发此事件（会等待 CSS 过渡完成）。</td>
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
      <li>
        <a href="#example">示例</a>
        <ul>
          <li><a href="#flush">贴边显示</a></li>
          <li><a href="#always-open">始终展开</a></li>
        </ul>
      </li>
      <li><a href="#accessibility">无障碍</a></li>
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
