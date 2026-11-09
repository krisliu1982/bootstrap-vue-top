<template>
  <article class="bd-content">
    <h1>画布外菜单</h1>
    <p>只需几个类和我们提供的 JavaScript 插件，即可在项目中构建用于导航、购物车等的隐藏侧边栏。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>画布外菜单是一个侧边栏组件，可以通过 JavaScript 切换，从视口的左侧、右侧、顶部或底部边缘出现。按钮或锚点用作触发器并附加到你要切换的特定元素上，同时使用 <code>data</code> 属性来调用我们的 JavaScript。</p>
    <ul>
      <li>画布外菜单与模态框共享部分相同的 JavaScript 代码。从概念上讲，它们非常相似，但它们是独立的插件。</li>
      <li>同样，画布外菜单样式和尺寸的一些<a href="#sass-variables">源 Sass</a> 变量继承自模态框的变量。</li>
      <li>显示时，画布外菜单包含一个默认的背景遮罩，点击它可以隐藏画布外菜单。</li>
      <li>与模态框类似，同一时间只能显示一个画布外菜单。</li>
    </ul>
    <p><strong>请注意！</strong>鉴于 CSS 处理动画的方式，你不能在 <code>.offcanvas</code> 元素上使用 <code>margin</code> 或 <code>translate</code>。请将该类用作独立的包裹元素。</p>
    <Callout name="info-prefersreducedmotion" />
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <h3 id="offcanvas-components">画布外菜单组件<a class="anchor-link" href="#offcanvas-components" aria-label="画布外菜单组件链接"></a></h3>
    <p>
      下面是一个默认显示（通过在 <code>.offcanvas</code> 上添加 <code>.show</code>）的画布外菜单示例。画布外菜单支持包含关闭按钮的头部，以及一个可选的 body 类来设置一些初始 <code>padding</code>。我们建议尽可能为画布外菜单包含带有关闭操作的头部，或提供一个明确的关闭操作。
    </p>
    <Example
      class="bd-example-offcanvas p-0 bg-body-tertiary overflow-hidden"
      code='<div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div>'
    />
    <h3 id="live-demo">实时演示<a class="anchor-link" href="#live-demo" aria-label="实时演示链接"></a></h3>
    <p>
      使用下面的按钮通过 JavaScript 显示和隐藏画布外菜单元素，该 JavaScript 会切换带有 <code>.offcanvas</code> 类的元素上的
      <code>.show</code> 类。
    </p>
    <ul>
      <li><code>.offcanvas</code> 隐藏内容（默认）</li>
      <li><code>.offcanvas.show</code> 显示内容</li>
    </ul>
    <p>
      你可以使用带有 <code>href</code> 属性的链接，或带有 <code>data-bs-target</code>
      属性的按钮。在两种情况下，都必须使用
      <code>data-bs-toggle=&quot;offcanvas&quot;</code>。
    </p>
    <Example
      code='<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>'
    />
    <h3 id="body-scrolling">页面主体滚动<a class="anchor-link" href="#body-scrolling" aria-label="页面主体滚动链接"></a></h3>
    <p>当画布外菜单及其背景遮罩可见时，<code>&lt;body&gt;</code> 元素的滚动会被禁用。使用 <code>data-bs-scroll</code> 属性来启用 <code>&lt;body&gt;</code> 滚动。</p>
    <Example
      code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>'
    />
    <h3 id="body-scrolling-and-backdrop">页面主体滚动与背景遮罩<a class="anchor-link" href="#body-scrolling-and-backdrop" aria-label="页面主体滚动与背景遮罩链接"></a></h3>
    <p>你也可以在背景遮罩可见的情况下启用 <code>&lt;body&gt;</code> 滚动。</p>
    <Example
      code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>'
    />
    <h3 id="static-backdrop">静态背景遮罩<a class="anchor-link" href="#static-backdrop" aria-label="静态背景遮罩链接"></a></h3>
    <p>当背景遮罩设置为静态时，点击画布外菜单外部不会关闭它。</p>
    <Example
      code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div>'
    />
    <h2 id="dark-offcanvas">深色画布外菜单<a class="anchor-link" href="#dark-offcanvas" aria-label="深色画布外菜单链接"></a></h2>
    <DeprecatedIn version="5.3.0" class="me-2" />
    <AddedIn version="5.2.0" />
    <p>
      使用工具类更改画布外菜单的外观，使其更好地匹配深色导航栏等不同场景。这里我们为 <code>.offcanvas</code> 添加 <code>.text-bg-dark</code>，并为 <code>.btn-close</code> 添加 <code>.btn-close-white</code>，以在深色画布外菜单中获得正确的样式。如果其中包含下拉菜单，请考虑同时为
      <code>.dropdown-menu</code> 添加 <code>.dropdown-menu-dark</code>。
    </p>
    <Callout type="warning">
      <p><strong>请注意！</strong>随着颜色模式的引入，组件的深色变体在 v5.3.0 中已弃用。与其手动添加上面提到的类，不如在根元素、父级包裹元素或组件自身上设置 <code>data-bs-theme=&quot;dark&quot;</code>。</p>
    </Callout>
    <Example
      class="bd-example-offcanvas p-0 bg-body-secondary overflow-hidden"
      code='<div class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Place offcanvas content here.</p>
  </div>
</div>'
    />
    <h2 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="响应式链接"></a></h2>
    <AddedIn version="5.2.0" />
    <p>
      响应式画布外菜单类会在指定的断点及以下隐藏视口之外的内容。在该断点之上，其中的内容将照常显示。例如，<code>.offcanvas-lg</code> 在 <code>lg</code> 断点以下以画布外菜单形式隐藏内容，但在 <code>lg</code> 断点以上显示内容。每个断点都有对应的响应式画布外菜单类。
    </p>
    <ul>
      <li><code>.offcanvas</code></li>
      <li><code>.offcanvas-sm</code></li>
      <li><code>.offcanvas-md</code></li>
      <li><code>.offcanvas-lg</code></li>
      <li><code>.offcanvas-xl</code></li>
      <li><code>.offcanvas-xxl</code></li>
    </ul>
    <p>要创建响应式画布外菜单，请将 <code>.offcanvas</code> 基础类替换为响应式变体，并确保你的关闭按钮具有显式的 <code>data-bs-target</code>。</p>
    <Example
      code='<button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>

<div class="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

<div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
  </div>
</div>'
    />
    <h2 id="placement">位置<a class="anchor-link" href="#placement" aria-label="位置链接"></a></h2>
    <p>画布外菜单组件没有默认位置，因此你必须添加下面其中一个修饰类。</p>
    <ul>
      <li><code>.offcanvas-start</code> 将画布外菜单放置在视口左侧（如上所示）</li>
      <li><code>.offcanvas-end</code> 将画布外菜单放置在视口右侧</li>
      <li><code>.offcanvas-top</code> 将画布外菜单放置在视口顶部</li>
      <li><code>.offcanvas-bottom</code> 将画布外菜单放置在视口底部</li>
    </ul>
    <p>请在下面尝试顶部、右侧和底部示例。</p>
    <Example
      code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>'
    />
    <Example
      code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      ...
    </div>
  </div>'
    />
    <Example
      code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    ...
  </div>
</div>'
    />
    <h2 id="accessibility">无障碍访问<a class="anchor-link" href="#accessibility" aria-label="无障碍访问链接"></a></h2>
    <p>
      由于画布外面板在概念上是一个模态对话框，请务必为 <code>.offcanvas</code> 添加
      <code>aria-labelledby=&quot;...&quot;</code>——引用画布外菜单的标题。请注意，你无需添加 <code>role=&quot;dialog&quot;</code>，因为我们已经通过 JavaScript 添加了它。
    </p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，画布外菜单现在在
      <code>.offcanvas</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="offcanvas-css-vars" file="scss/_offcanvas.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="offcanvas-variables" file="scss/_variables.scss" />
    <h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2>
    <p>画布外菜单插件利用一些类和属性来完成主要工作：</p>
    <ul>
      <li><code>.offcanvas</code> 隐藏内容</li>
      <li><code>.offcanvas.show</code> 显示内容</li>
      <li><code>.offcanvas-start</code> 在左侧隐藏画布外菜单</li>
      <li><code>.offcanvas-end</code> 在右侧隐藏画布外菜单</li>
      <li><code>.offcanvas-top</code> 在顶部隐藏画布外菜单</li>
      <li><code>.offcanvas-bottom</code> 在底部隐藏画布外菜单</li>
    </ul>
    <p>使用 <code>data-bs-dismiss=&quot;offcanvas&quot;</code> 属性添加一个关闭按钮，它会触发 JavaScript 功能。请务必配合使用 <code>&lt;button&gt;</code> 元素，以确保在所有设备上的行为正确。</p>
    <h3 id="via-data-attributes">通过 data 属性<a class="anchor-link" href="#via-data-attributes" aria-label="通过 data 属性链接"></a></h3>
    <h4 id="toggle">切换</h4>
    <p>
      为元素添加 <code>data-bs-toggle=&quot;offcanvas&quot;</code> 以及 <code>data-bs-target</code> 或 <code>href</code>，即可自动为其分配对某个画布外菜单元素的控制权。<code>data-bs-target</code> 属性接受一个 CSS 选择器，用于指定应用画布外菜单的目标。请务必为画布外菜单元素添加类 <code>offcanvas</code>。如果你希望它默认打开，请添加额外的类 <code>show</code>。
    </p>
    <h4 id="dismiss">关闭</h4>
    <JsDismiss name="offcanvas" />
    <Callout type="warning">
      <p>
        虽然两种关闭画布外菜单的方式都受支持，但请注意，从画布外菜单外部关闭并不符合
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/">ARIA Authoring Practices Guide 对话框（模态）模式</a>。请自行承担风险。
      </p>
    </Callout>
    <h3 id="via-javascript">通过 JavaScript<a class="anchor-link" href="#via-javascript" aria-label="通过 JavaScript 链接"></a></h3>
    <p>手动启用：</p>
    <CodeWrapper
      code="const offcanvasElementList = document.querySelectorAll(&#39;.offcanvas&#39;)
const offcanvasList = [...offcanvasElementList].map(offcanvasEl =&gt; new bootstrap.Offcanvas(offcanvasEl))
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
            <td><code>backdrop</code></td>
            <td>布尔值或字符串 <code>static</code></td>
            <td><code>true</code></td>
            <td>画布外菜单打开时在 body 上应用背景遮罩。或者，指定 <code>static</code> 作为背景遮罩，此时点击不会关闭画布外菜单。</td>
          </tr>
          <tr>
            <td><code>keyboard</code></td>
            <td>布尔值</td>
            <td><code>true</code></td>
            <td>按下 Escape 键时关闭画布外菜单。</td>
          </tr>
          <tr>
            <td><code>scroll</code></td>
            <td>布尔值</td>
            <td><code>false</code></td>
            <td>画布外菜单打开时允许页面主体滚动。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
    <Callout name="danger-async-methods" type="danger" />
    <p>将你的内容激活为画布外菜单元素。接受一个可选的选项 <code>object</code>。</p>
    <p>你可以通过构造函数创建画布外菜单实例，例如：</p>
    <CodeWrapper
      code="const bsOffcanvas = new bootstrap.Offcanvas(&#39;#myOffcanvas&#39;)
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
            <td>销毁元素的画布外菜单。</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td><em>静态</em>方法，允许你获取与某个 DOM 元素关联的画布外菜单实例。</td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td><em>静态</em>方法，允许你获取与某个 DOM 元素关联的画布外菜单实例，如果尚未初始化，则创建一个新实例。</td>
          </tr>
          <tr>
            <td><code>hide</code></td>
            <td>
              隐藏画布外菜单元素。
              <strong>在画布外菜单元素实际隐藏之前就返回给调用方</strong>（即在 <code>hidden.bs.offcanvas</code> 事件发生之前）。
            </td>
          </tr>
          <tr>
            <td><code>show</code></td>
            <td>
              显示画布外菜单元素。
              <strong>在画布外菜单元素实际显示之前就返回给调用方</strong>（即在 <code>shown.bs.offcanvas</code> 事件发生之前）。
            </td>
          </tr>
          <tr>
            <td><code>toggle</code></td>
            <td>
              将画布外菜单元素切换为显示或隐藏。
              <strong>在画布外菜单元素实际显示或隐藏之前就返回给调用方</strong>
              （即在 <code>shown.bs.offcanvas</code> 或 <code>hidden.bs.offcanvas</code> 事件发生之前）。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3>
    <p>Bootstrap 的画布外菜单类暴露了几个事件，可用于接入画布外菜单的功能。</p>
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
            <td><code>hide.bs.offcanvas</code></td>
            <td>当调用 <code>hide</code> 方法时立即触发此事件。</td>
          </tr>
          <tr>
            <td><code>hidden.bs.offcanvas</code></td>
            <td>当画布外菜单元素已从用户视图中隐藏时触发此事件（会等待 CSS 过渡完成）。</td>
          </tr>
          <tr>
            <td><code>hidePrevented.bs.offcanvas</code></td>
            <td>当画布外菜单已显示、其背景遮罩为 <code>static</code>，且用户点击了画布外菜单外部时触发此事件。当按下 Escape 键且 <code>keyboard</code> 选项设置为 <code>false</code> 时也会触发此事件。</td>
          </tr>
          <tr>
            <td><code>show.bs.offcanvas</code></td>
            <td>当调用 <code>show</code> 实例方法时立即触发此事件。</td>
          </tr>
          <tr>
            <td><code>shown.bs.offcanvas</code></td>
            <td>当画布外菜单元素已对用户可见时触发此事件（会等待 CSS 过渡完成）。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code="const myOffcanvas = document.getElementById(&#39;myOffcanvas&#39;)
myOffcanvas.addEventListener(&#39;hidden.bs.offcanvas&#39;, event =&gt; {
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
        <a href="#examples">示例</a>
        <ul>
          <li><a href="#offcanvas-components">画布外菜单组件</a></li>
          <li><a href="#live-demo">实时演示</a></li>
          <li><a href="#body-scrolling">页面主体滚动</a></li>
          <li><a href="#body-scrolling-and-backdrop">页面主体滚动与背景遮罩</a></li>
          <li><a href="#static-backdrop">静态背景遮罩</a></li>
        </ul>
      </li>
      <li><a href="#dark-offcanvas">深色画布外菜单</a></li>
      <li><a href="#responsive">响应式</a></li>
      <li><a href="#placement">位置</a></li>
      <li><a href="#accessibility">无障碍访问</a></li>
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

import { onMounted } from 'vue';

onMounted(() => {
  const myOffcanvas = document.querySelectorAll('.bd-example-offcanvas .offcanvas');
  if (myOffcanvas) {
    myOffcanvas.forEach((offcanvas) => {
      offcanvas.classList.remove('show');
    });
  }
});
</script>
