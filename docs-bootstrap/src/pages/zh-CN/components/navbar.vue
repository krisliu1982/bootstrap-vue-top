<template>
  <article class="bd-content">
    <h1>导航栏</h1>
    <p class="lead">Bootstrap 强大且响应式的导航头部——导航栏的文档与示例。包含对品牌、导航等内容的支持，也包括对我们折叠插件的支持。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>以下是开始使用导航栏之前你需要了解的内容：</p>
    <ul>
      <li>导航栏需要一个包裹的 <code>.navbar</code>，并配合 <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl}</code> 以实现响应式折叠，以及<a href="#color-schemes">配色方案</a>类。</li>
      <li>导航栏及其内容默认是流式的。更改<a href="#containers">容器</a>以不同方式限制其水平宽度。</li>
      <li>使用我们的<a href="/utilities/spacing">间距</a>和<a href="/utilities/flex">弹性盒子</a>工具类来控制导航栏内的间距和对齐。</li>
      <li>导航栏默认是响应式的，但你可以轻松修改它们来改变这一点。响应式行为依赖于我们的折叠（Collapse）JavaScript 插件。</li>
      <li>使用 <code>&lt;nav&gt;</code> 元素来确保无障碍性；如果使用更通用的元素（如 <code>&lt;div&gt;</code>），请为每个导航栏添加 <code>role=&quot;navigation&quot;</code>，以便向辅助技术用户明确标识其为地标区域。</li>
      <li>使用 <code>aria-current=&quot;page&quot;</code> 表示当前页面，或使用 <code>aria-current=&quot;true&quot;</code> 表示一组中的当前项，以此指示当前项。</li>
      <li><strong>v5.2.0 新增：</strong>导航栏可以使用限定在 <code>.navbar</code> 基类上的 CSS 变量进行主题设置。<code>.navbar-light</code> 已弃用，<code>.navbar-dark</code> 已被重写为覆盖 CSS 变量，而不是添加额外样式。</li>
    </ul>
    <Callout name="info-prefersreducedmotion" />
    <h2 id="supported-content">支持的内容<a class="anchor-link" href="#supported-content" aria-label="支持的内容链接"></a></h2>
    <p>导航栏内置支持若干子组件。根据需要从以下内容中选择：</p>
    <ul>
      <li><code>.navbar-brand</code> 用于你的公司、产品或项目名称。</li>
      <li><code>.navbar-nav</code> 用于全高且轻量的导航（包括对下拉菜单的支持）。</li>
      <li><code>.navbar-toggler</code> 用于我们的折叠插件及其他<a href="#responsive-behaviors">导航切换</a>行为。</li>
      <li>用于任何表单控件和操作的弹性盒子与间距工具类。</li>
      <li><code>.navbar-text</code> 用于添加垂直居中的文本字符串。</li>
      <li><code>.collapse.navbar-collapse</code> 用于按父级断点分组和隐藏导航栏内容。</li>
      <li>可选地添加 <code>.navbar-nav-scroll</code> 以设置 <code>max-height</code> 并<a href="#scrolling">滚动展开的导航栏内容</a>。</li>
    </ul>
    <p>下面是一个包含所有子组件的示例，位于一个浅色主题的响应式导航栏中，该导航栏会在 <code>lg</code>（大）断点处自动折叠。</p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
         <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>'
    />
    <p>
      此示例使用了
     <a href="/utilities/background">背景</a>（<code>bg-body-tertiary</code>）和<a href="/utilities/spacing">间距</a>（<code>me-auto</code>、<code>mb-2</code>、<code>mb-lg-0</code>、<code>me-2</code>）工具类。
    </p>
    <h3 id="brand">品牌<a class="anchor-link" href="#brand" aria-label="品牌链接"></a></h3>
    <p><code>.navbar-brand</code> 可应用于大多数元素，但锚点（anchor）效果最佳，因为有些元素可能需要工具类或自定义样式。</p>
    <h4 id="text">文本</h4>
    <p>在带有 <code>.navbar-brand</code> 类的元素中添加你的文本。</p>
    <Example
      code='<!-- As a link -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

<!-- As a heading -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>'
    />
    <h4 id="image">图片</h4>
    <p>你可以将 <code>.navbar-brand</code> 中的文本替换为 <code>&lt;img&gt;</code>。</p>
    <Example
      code='<nav class="navbar bg-body-tertiary">
  <div class="container">
   <a class="navbar-brand" href="#">
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
    </a>
  </div>
</nav>'
    />
    <h4 id="image-and-text">图片与文本</h4>
    <p>
      你还可以使用一些额外的工具类来同时添加图片和文本。注意在 <code>&lt;img&gt;</code> 上添加了
      <code>.d-inline-block</code> 和 <code>.align-text-top</code>。
    </p>
    <Example
      code='<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>'
    />
    <h3 id="nav">导航<a class="anchor-link" href="#nav" aria-label="导航链接"></a></h3>
    <p>导航栏导航链接基于我们的 <code>.nav</code> 选项，具有自己的修饰类，并需要使用<a href="#toggler">切换器类</a>才能获得正确的响应式样式。<strong>导航栏中的导航还会增长以占据尽可能多的水平空间</strong>，以使你的导航栏内容保持紧密对齐。</p>
    <p>在 <code>.nav-link</code> 上添加 <code>.active</code> 类以指示当前页面。</p>
    <p>请注意，你还应在激活的 <code>.nav-link</code> 上添加 <code>aria-current</code> 属性。</p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
         <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>'
    />
    <p>而且因为我们对导航使用了类，如果你愿意，完全可以避免基于列表的方式。</p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       <a class="nav-link active" aria-current="page" href="#">Home</a>
       <a class="nav-link" href="#">Features</a>
       <a class="nav-link" href="#">Pricing</a>
       <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>'
    />
    <p>
      你也可以在导航栏中使用下拉菜单。下拉菜单需要一个包裹元素来定位，因此请务必像下面这样为
      <code>.nav-item</code> 和 <code>.nav-link</code> 使用独立且嵌套的元素。
    </p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>'
    />
    <h3 id="forms">表单<a class="anchor-link" href="#forms" aria-label="表单链接"></a></h3>
    <p>在导航栏中放置各种表单控件和组件：</p>
    <Example
      code='<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>'
    />
    <p><code>.navbar</code> 的直接子元素使用弹性布局，并默认使用 <code>justify-content: space-between</code>。可根据需要使用额外的<a href="/utilities/flex">弹性盒子工具类</a>来调整此行为。</p>
    <Example
      code='<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>'
    />
    <p>
      输入组也可以使用。如果你的导航栏本身就是一个完整的表单，或主要是一个表单，你可以使用
      <code>&lt;form&gt;</code> 元素作为容器，从而节省一些 HTML。
    </p>
    <Example
      code='<nav class="navbar bg-body-tertiary">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
</nav>'
    />
    <p>这些导航栏表单中也支持各种按钮。这也很好地提醒了我们，可以使用垂直对齐工具类来对齐不同尺寸的元素。</p>
    <Example
      code='<nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button">Main button</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
  </form>
</nav>'
    />
    <h3 id="text-1">文本<a class="anchor-link" href="#text-1" aria-label="文本链接"></a></h3>
    <p>借助 <code>.navbar-text</code>，导航栏可以包含一些文本片段。该类会调整文本字符串的垂直对齐和水平间距。</p>
    <Example
      code='<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>'
    />
    <p>根据需要与其他组件和工具类组合搭配。</p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>'
    />
    <h2 id="color-schemes">配色方案<a class="anchor-link" href="#color-schemes" aria-label="配色方案链接"></a></h2>
    <Callout type="warning">
      <p>
        <strong>v5.3.0 新增深色导航栏——</strong>我们已弃用 <code>.navbar-dark</code>，改用新的 <code>data-bs-theme=&quot;dark&quot;</code>。将 <code>data-bs-theme=&quot;dark&quot;</code> 添加到 <code>.navbar</code> 即可启用组件特定的颜色模式。
       <a href="/customize/color-modes">了解有关颜色模式的更多信息。</a>
      </p>
      <hr />
      <p><strong>v5.2.0 新增——</strong>导航栏主题现在由 CSS 变量驱动，且 <code>.navbar-light</code> 已弃用。CSS 变量应用于 <code>.navbar</code>，默认为“浅色”外观，并可通过 <code>.navbar-dark</code> 覆盖。</p>
    </Callout>
    <p>
      得益于 Bootstrap 对 Sass 和 CSS 变量的结合，导航栏主题比以往任何时候都更简单。默认是用于浅色背景的“浅色导航栏”，但你也可以将
      <code>data-bs-theme=&quot;dark&quot;</code> 应用于 <code>.navbar</code> 父元素以配合深色背景。然后，使用 <code>.bg-*</code> 和其他工具类进行自定义。
    </p>
    <Example
      :showMarkup="false"
      code='
<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;" data-bs-theme="light">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>'
    />
    <CodeWrapper
      code='&lt;nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark"&gt;
  &lt;!-- Navbar content --&gt;
&lt;/nav&gt;

&lt;nav class="navbar bg-primary" data-bs-theme="dark"&gt;
  &lt;!-- Navbar content --&gt;
&lt;/nav&gt;

&lt;nav class="navbar" style="background-color: #e3f2fd;" data-bs-theme="light"&gt;
  &lt;!-- Navbar content --&gt;
&lt;/nav&gt;'
      lang="html"
    />
    <h2 id="containers">容器<a class="anchor-link" href="#containers" aria-label="容器链接"></a></h2>
    <p>虽然不是必需的，但你可以将导航栏包裹在 <code>.container</code> 中以在页面上居中——不过请注意仍然需要内部的容器。或者，你可以在 <code>.navbar</code> 内部添加容器，仅使<a href="#placement">固定或静态顶部导航栏</a>的内容居中。</p>
    <Example
      code='<div class="container">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
     <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>'
    />
    <p>使用任意响应式容器来更改导航栏内容的呈现宽度。</p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-md">
   <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>'
    />
    <h2 id="placement">定位<a class="anchor-link" href="#placement" aria-label="定位链接"></a></h2>
    <p>使用我们的<a href="/utilities/position">定位工具类</a>将导航栏放置在非静态位置。可从固定顶部、固定底部、粘性顶部（随页面滚动直到到达顶部，然后停留在那里）或粘性底部（随页面滚动直到到达底部，然后停留在那里）中选择。</p>
    <p>固定导航栏使用 <code>position: fixed</code>，这意味着它们会脱离 DOM 的正常文档流，可能需要自定义 CSS（例如在 <code>&lt;body&gt;</code> 上设置 <code>padding-top</code>）以防止与其他元素重叠。</p>
    <Example
      code='<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Default</a>
  </div>
</nav>'
    /><Example
      code='<nav class="navbar fixed-top bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>'
    /><Example
      code='<nav class="navbar fixed-bottom bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>'
    /><Example
      code='<nav class="navbar sticky-top bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Sticky top</a>
  </div>
</nav>'
    /><Example
      code='<nav class="navbar sticky-bottom bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Sticky bottom</a>
  </div>
</nav>'
    />
    <h2 id="scrolling">滚动<a class="anchor-link" href="#scrolling" aria-label="滚动链接"></a></h2>
    <p>
      为 <code>.navbar-nav</code>（或其他导航栏子组件）添加 <code>.navbar-nav-scroll</code>，以在折叠导航栏的可切换内容中启用垂直滚动。默认情况下，当高度达到 <code>75vh</code>（即视口高度的 75%）时开始滚动，但你可以通过本地 CSS 自定义属性
      <code>--bs-navbar-height</code> 或自定义样式来覆盖它。在导航栏展开的较大视口中，内容将像在默认导航栏中一样显示。
    </p>
    <p>请注意，此行为会带来 <code>overflow</code> 的潜在缺点——当设置 <code>overflow-y: auto</code>（此处滚动内容所必需的）时，<code>overflow-x</code> 等同于 <code>auto</code>，会裁剪部分水平内容。</p>
    <p>下面是一个使用 <code>.navbar-nav-scroll</code> 并设置 <code>style=&quot;--bs-scroll-height: 100px;&quot;</code> 的示例导航栏，还使用了一些额外外边距工具类以获得最佳间距。</p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
         <a class="nav-link disabled" aria-disabled="true">Link</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>'
    />
    <h2 id="responsive-behaviors">响应式行为<a class="anchor-link" href="#responsive-behaviors" aria-label="响应式行为链接"></a></h2>
    <p>导航栏可以使用 <code>.navbar-toggler</code>、<code>.navbar-collapse</code> 和 <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl}</code> 类来决定其内容何时折叠到按钮之后。结合其他工具类，你可以轻松选择何时显示或隐藏特定元素。</p>
    <p>对于永不折叠的导航栏，请在导航栏上添加 <code>.navbar-expand</code> 类。对于始终折叠的导航栏，请不要添加任何 <code>.navbar-expand</code> 类。</p>
    <h3 id="toggler">切换器<a class="anchor-link" href="#toggler" aria-label="切换器链接"></a></h3>
    <p>
      导航栏切换器默认左对齐，但如果它们跟在诸如
      <code>.navbar-brand</code> 的兄弟元素之后，则会自动靠右对齐。反转标记将反转切换器的位置。以下是不同切换样式的示例。
    </p>
    <p>在最小断点处不显示 <code>.navbar-brand</code>：</p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
     <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
         <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>'
    />
    <p>左侧显示品牌名称，切换器位于右侧：</p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
         <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>'
    />
    <p>切换器位于左侧，品牌名称位于右侧：</p>
    <Example
      code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
         <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>'
    />
    <h3 id="external-content">外部内容<a class="anchor-link" href="#external-content" aria-label="外部内容链接"></a></h3>
    <p>有时你想使用折叠插件来触发一个在结构上位于 <code>.navbar</code> 之外的容器元素。由于我们的插件基于 <code>id</code> 和 <code>data-bs-target</code> 的匹配工作，这很容易做到！</p>
    <Example
      code='<div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div class="bg-dark p-4">
    <h5 class="text-body-emphasis h4">Collapsed content</h5>
    <span class="text-body-secondary">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>'
    />
    <p>
      这样做时，我们建议加入额外的 JavaScript，在容器打开时以编程方式将焦点移动到容器上。否则，键盘用户和辅助技术用户可能很难找到新显示的内容——特别是当打开的容器在文档结构中位于切换器<em>之前</em>时。我们还建议确保切换器具有 <code>aria-controls</code> 属性，指向内容容器的 <code>id</code>。理论上，这允许辅助技术用户直接从切换器跳转到它所控制的容器——但目前对此的支持还相当不完善。
    </p>
    <h3 id="offcanvas">抽屉<a class="anchor-link" href="#offcanvas" aria-label="抽屉链接"></a></h3>
    <p>
      使用<a href="/components/offcanvas">抽屉组件</a>将你展开和折叠的导航栏转换为画布外抽屉。我们既扩展了抽屉的默认样式，又使用 <code>.navbar-expand-*</code> 类来创建动态且灵活的导航侧边栏。
    </p>
    <p>
      在下面的示例中，要创建一个在所有断点下都始终折叠的画布外导航栏，请完全省略
      <code>.navbar-expand-*</code> 类。
    </p>
    <Example
      code='<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>'
    />
    <p>要创建一个在特定断点（如 <code>lg</code>）处展开为普通导航栏的画布外导航栏，请使用 <code>.navbar-expand-lg</code>。</p>
    <CodeWrapper
      code='&lt;nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top"&gt;
  &lt;a class="navbar-brand" href="#"&gt;Offcanvas navbar&lt;/a&gt;
  &lt;button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation"&gt;
    &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel"&gt;
    ...
  &lt;/div&gt;
&lt;/nav&gt;'
      lang="html"
    />
    <p>
      在深色导航栏中使用抽屉时，请注意你可能需要为抽屉内容设置深色背景，以避免文本变得难以辨认。在下面的示例中，我们为 <code>.navbar</code> 添加 <code>.navbar-dark</code> 和 <code>.bg-dark</code>，为 <code>.offcanvas</code> 添加 <code>.text-bg-dark</code>，
      为 <code>.dropdown-menu</code> 添加 <code>.dropdown-menu-dark</code>，为 <code>.btn-close</code> 添加 <code>.btn-close-white</code>，以便在深色抽屉下获得正确的样式。
    </p>
    <Example
      code='<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，导航栏现在在
      <code>.navbar</code> 上使用局部 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此依然支持 Sass 自定义。
    </p>
    <ScssDocs name="navbar-css-vars" file="scss/_navbar.scss" />
    <p><code>.navbar-nav</code> 上还额外提供了一些 CSS 变量：</p>
    <ScssDocs name="navbar-nav-css-vars" file="scss/_navbar.scss" />
    <p>通过 CSS 变量进行自定义的方式可以在 <code>.navbar-dark</code> 类中看到，其中我们在不添加重复 CSS 选择器的情况下覆盖了特定值。</p>
    <ScssDocs name="navbar-dark-css-vars" file="scss/_navbar.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>所有导航栏的变量：</p>
    <ScssDocs name="navbar-variables" file="scss/_variables.scss" />
    <p><a href="#color-schemes">深色导航栏</a>的变量：</p>
    <ScssDocs name="navbar-dark-variables" file="scss/_variables.scss" />
    <h3 id="sass-loops">Sass 循环<a class="anchor-link" href="#sass-loops" aria-label="Sass 循环链接"></a></h3>
    <p><a href="#responsive-behaviors">响应式导航栏展开/折叠类</a>（例如 <code>.navbar-expand-lg</code>）与 <code>$breakpoints</code> 映射结合，并通过 <code>scss/_navbar.scss</code> 中的一个循环生成。</p>
    <ScssDocs name="navbar-expand-loop" file="scss/_navbar.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#how-it-works">工作原理</a></li>
      <li>
       <a href="#supported-content">支持的内容</a>
        <ul>
          <li><a href="#brand">品牌</a></li>
          <li><a href="#nav">导航</a></li>
          <li><a href="#forms">表单</a></li>
          <li><a href="#text-1">文本</a></li>
        </ul>
      </li>
      <li><a href="#color-schemes">配色方案</a></li>
      <li><a href="#containers">容器</a></li>
      <li><a href="#placement">定位</a></li>
      <li><a href="#scrolling">滚动</a></li>
      <li>
       <a href="#responsive-behaviors">响应式行为</a>
        <ul>
          <li><a href="#toggler">切换器</a></li>
          <li><a href="#external-content">外部内容</a></li>
          <li><a href="#offcanvas">抽屉</a></li>
        </ul>
      </li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-loops">Sass 循环</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
