<template>
  <article class="bd-content">
    <h1>滚动监听</h1>
    <p class="lead">根据滚动位置自动更新 Bootstrap 导航或列表组组件，以指示视口中当前处于活动状态的链接。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>
      当锚点的 <code>href</code> 所引用的 <code>id</code> 对应元素滚动进入视图时，滚动监听会切换锚点（<code>&lt;a&gt;</code>）元素上的 <code>.active</code> 类。滚动监听最适合与 Bootstrap 的<a href="/components/navs-tabs">导航组件</a>或
     <a href="/components/list-group">列表组</a>配合使用，但它也可用于当前页面中的任何锚点元素。它的工作方式如下。
    </p>
    <ul>
      <li>
        <p>
          首先，滚动监听需要两样东西：一个导航、列表组或一组简单的链接，以及一个可滚动容器。可滚动容器可以是
          <code>&lt;body&gt;</code>，也可以是设置了 <code>height</code> 和 <code>overflow-y: scroll</code> 的自定义元素。
        </p>
      </li>
      <li>
        <p>
          在可滚动容器上添加 <code>data-bs-spy=&quot;scroll&quot;</code> 和 <code>data-bs-target=&quot;#navId&quot;</code>，其中 <code>navId</code> 是所关联导航的唯一 <code>id</code>。如果元素内部没有可聚焦元素，请务必同时包含 <code>tabindex=&quot;0&quot;</code> 以确保键盘可访问性。
        </p>
      </li>
      <li>
        <p>
          当你滚动被“监视”的容器时，关联导航中的锚点链接会添加或移除 <code>.active</code> 类。链接必须具有可解析的 <code>id</code> 目标，否则将被忽略。例如，<code>&lt;a href=&quot;#home&quot;&gt;home&lt;/a&gt;</code> 必须对应 DOM 中的某个元素，如
          <code>&lt;div id=&quot;home&quot;&gt;&lt;/div&gt;</code>
        </p>
      </li>
      <li>
        <p>
          不可见的目标元素将被忽略。请参阅下面的
         <a href="#non-visible-elements">不可见元素</a>部分。
        </p>
      </li>
    </ul>
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <h3 id="navbar">导航栏<a class="anchor-link" href="#navbar" aria-label="导航栏链接"></a></h3>
    <p>滚动导航栏下方的区域，观察活动类的变化。打开下拉菜单，观察下拉菜单项也会被高亮显示。</p>
    <Example
      :showMarkup="false"
      code='<nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3 rounded-2">
   <a class="navbar-brand" href="#">Navbar</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
       <a class="nav-link" href="#scrollspyHeading1">First</a>
      </li>
      <li class="nav-item">
       <a class="nav-link" href="#scrollspyHeading2">Second</a>
      </li>
      <li class="nav-item dropdown">
       <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
          <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div class="scrollspy-example bg-body-tertiary p-3 rounded-2" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
    <h4 id="scrollspyHeading1">First heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  </div>'
    />
    <CodeWrapper
      code='&lt;nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3"&gt;
  &lt;a class="navbar-brand" href="#"&gt;Navbar&lt;/a&gt;
  &lt;ul class="nav nav-pills"&gt;
    &lt;li class="nav-item"&gt;
      &lt;a class="nav-link" href="#scrollspyHeading1"&gt;First&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
      &lt;a class="nav-link" href="#scrollspyHeading2"&gt;Second&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item dropdown"&gt;
      &lt;a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"&gt;Dropdown&lt;/a&gt;
      &lt;ul class="dropdown-menu"&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#scrollspyHeading3"&gt;Third&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#scrollspyHeading4"&gt;Fourth&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#scrollspyHeading5"&gt;Fifth&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
&lt;div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0"&gt;
  &lt;h4 id="scrollspyHeading1"&gt;First heading&lt;/h4&gt;
  &lt;p&gt;...&lt;/p&gt;
  &lt;h4 id="scrollspyHeading2"&gt;Second heading&lt;/h4&gt;
  &lt;p&gt;...&lt;/p&gt;
  &lt;h4 id="scrollspyHeading3"&gt;Third heading&lt;/h4&gt;
  &lt;p&gt;...&lt;/p&gt;
  &lt;h4 id="scrollspyHeading4"&gt;Fourth heading&lt;/h4&gt;
  &lt;p&gt;...&lt;/p&gt;
  &lt;h4 id="scrollspyHeading5"&gt;Fifth heading&lt;/h4&gt;
  &lt;p&gt;...&lt;/p&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="nested-nav">嵌套导航<a class="anchor-link" href="#nested-nav" aria-label="嵌套导航链接"></a></h3>
    <p>滚动监听也适用于嵌套的 <code>.nav</code>。如果嵌套的 <code>.nav</code> 处于 <code>.active</code> 状态，它的父级也会处于 <code>.active</code> 状态。滚动导航栏旁边的区域，观察活动类的变化。</p>
    <Example
      :showMarkup="false"
      code='<div class="row">
  <div class="col-4">
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav class="nav nav-pills flex-column">
       <a class="nav-link" href="#item-1">Item 1</a>
        <nav class="nav nav-pills flex-column">
         <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
         <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
        </nav>
       <a class="nav-link" href="#item-2">Item 2</a>
       <a class="nav-link" href="#item-3">Item 3</a>
        <nav class="nav nav-pills flex-column">
         <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
         <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
        </nav>
      </nav>
    </nav>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <h4>Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
      </div>
      <div id="item-1-1">
        <h5>Item 1-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
      </div>
      <div id="item-1-2">
        <h5>Item 1-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
      </div>
      <div id="item-2">
        <h4>Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
      </div>
      <div id="item-3">
        <h4>Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
      </div>
      <div id="item-3-1">
        <h5>Item 3-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
      </div>
      <div id="item-3-2">
        <h5>Item 3-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <p>Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
      </div>
    </div>
  </div>
</div>
'
    />
    <CodeWrapper
      code='&lt;div class="row"&gt;
  &lt;div class="col-4"&gt;
    &lt;nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end"&gt;
      &lt;nav class="nav nav-pills flex-column"&gt;
        &lt;a class="nav-link" href="#item-1"&gt;Item 1&lt;/a&gt;
        &lt;nav class="nav nav-pills flex-column"&gt;
          &lt;a class="nav-link ms-3 my-1" href="#item-1-1"&gt;Item 1-1&lt;/a&gt;
          &lt;a class="nav-link ms-3 my-1" href="#item-1-2"&gt;Item 1-2&lt;/a&gt;
        &lt;/nav&gt;
        &lt;a class="nav-link" href="#item-2"&gt;Item 2&lt;/a&gt;
        &lt;a class="nav-link" href="#item-3"&gt;Item 3&lt;/a&gt;
        &lt;nav class="nav nav-pills flex-column"&gt;
          &lt;a class="nav-link ms-3 my-1" href="#item-3-1"&gt;Item 3-1&lt;/a&gt;
          &lt;a class="nav-link ms-3 my-1" href="#item-3-2"&gt;Item 3-2&lt;/a&gt;
        &lt;/nav&gt;
      &lt;/nav&gt;
    &lt;/nav&gt;
  &lt;/div&gt;

  &lt;div class="col-8"&gt;
    &lt;div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0"&gt;
      &lt;div id="item-1"&gt;
        &lt;h4&gt;Item 1&lt;/h4&gt;
        &lt;p&gt;...&lt;/p&gt;
      &lt;/div&gt;
      &lt;div id="item-1-1"&gt;
        &lt;h5&gt;Item 1-1&lt;/h5&gt;
        &lt;p&gt;...&lt;/p&gt;
      &lt;/div&gt;
      &lt;div id="item-1-2"&gt;
        &lt;h5&gt;Item 1-2&lt;/h5&gt;
        &lt;p&gt;...&lt;/p&gt;
      &lt;/div&gt;
      &lt;div id="item-2"&gt;
        &lt;h4&gt;Item 2&lt;/h4&gt;
        &lt;p&gt;...&lt;/p&gt;
      &lt;/div&gt;
      &lt;div id="item-3"&gt;
        &lt;h4&gt;Item 3&lt;/h4&gt;
        &lt;p&gt;...&lt;/p&gt;
      &lt;/div&gt;
      &lt;div id="item-3-1"&gt;
        &lt;h5&gt;Item 3-1&lt;/h5&gt;
        &lt;p&gt;...&lt;/p&gt;
      &lt;/div&gt;
      &lt;div id="item-3-2"&gt;
        &lt;h5&gt;Item 3-2&lt;/h5&gt;
        &lt;p&gt;...&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="list-group">列表组<a class="anchor-link" href="#list-group" aria-label="列表组链接"></a></h3>
    <p>滚动监听也适用于 <code>.list-group</code>。滚动列表组旁边的区域，观察活动类的变化。</p>
    <Example
      :showMarkup="false"
      code='<div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
     <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
     <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
     <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
     <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">Item 1</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="list-item-2">Item 2</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="list-item-3">Item 3</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="list-item-4">Item 4</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    </div>
  </div>
</div>
'
    />
    <CodeWrapper
      code='&lt;div class="row"&gt;
  &lt;div class="col-4"&gt;
    &lt;div id="list-example" class="list-group"&gt;
      &lt;a class="list-group-item list-group-item-action" href="#list-item-1"&gt;Item 1&lt;/a&gt;
      &lt;a class="list-group-item list-group-item-action" href="#list-item-2"&gt;Item 2&lt;/a&gt;
      &lt;a class="list-group-item list-group-item-action" href="#list-item-3"&gt;Item 3&lt;/a&gt;
      &lt;a class="list-group-item list-group-item-action" href="#list-item-4"&gt;Item 4&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-8"&gt;
    &lt;div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0"&gt;
      &lt;h4 id="list-item-1"&gt;Item 1&lt;/h4&gt;
      &lt;p&gt;...&lt;/p&gt;
      &lt;h4 id="list-item-2"&gt;Item 2&lt;/h4&gt;
      &lt;p&gt;...&lt;/p&gt;
      &lt;h4 id="list-item-3"&gt;Item 3&lt;/h4&gt;
      &lt;p&gt;...&lt;/p&gt;
      &lt;h4 id="list-item-4"&gt;Item 4&lt;/h4&gt;
      &lt;p&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="simple-anchors">简单锚点<a class="anchor-link" href="#simple-anchors" aria-label="简单锚点链接"></a></h3>
    <p>滚动监听并不限于导航组件和列表组，它适用于当前 articleEl 中的任何 <code>&lt;a&gt;</code> 锚点元素。滚动该区域，观察 <code>.active</code> 类的变化。</p>
    <Example
      :showMarkup="false"
      code='<div class="row">
  <div class="col-4">
    <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
     <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
     <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
     <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
     <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
     <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="simple-list-item-1">Item 1</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="simple-list-item-2">Item 2</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="simple-list-item-3">Item 3</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="simple-list-item-4">Item 4</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      <h4 id="simple-list-item-5">Item 5</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    </div>
  </div>
</div>
'
    />
    <CodeWrapper
      code='&lt;div class="row"&gt;
  &lt;div class="col-4"&gt;
    &lt;div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"&gt;
      &lt;a class="p-1 rounded" href="#simple-list-item-1"&gt;Item 1&lt;/a&gt;
      &lt;a class="p-1 rounded" href="#simple-list-item-2"&gt;Item 2&lt;/a&gt;
      &lt;a class="p-1 rounded" href="#simple-list-item-3"&gt;Item 3&lt;/a&gt;
      &lt;a class="p-1 rounded" href="#simple-list-item-4"&gt;Item 4&lt;/a&gt;
      &lt;a class="p-1 rounded" href="#simple-list-item-5"&gt;Item 5&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-8"&gt;
    &lt;div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0"&gt;
      &lt;h4 id="simple-list-item-1"&gt;Item 1&lt;/h4&gt;
      &lt;p&gt;...&lt;/p&gt;
      &lt;h4 id="simple-list-item-2"&gt;Item 2&lt;/h4&gt;
      &lt;p&gt;...&lt;/p&gt;
      &lt;h4 id="simple-list-item-3"&gt;Item 3&lt;/h4&gt;
      &lt;p&gt;...&lt;/p&gt;
      &lt;h4 id="simple-list-item-4"&gt;Item 4&lt;/h4&gt;
      &lt;p&gt;...&lt;/p&gt;
      &lt;h4 id="simple-list-item-5"&gt;Item 5&lt;/h4&gt;
      &lt;p&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h2 id="non-visible-elements">不可见元素<a class="anchor-link" href="#non-visible-elements" aria-label="不可见元素链接"></a></h2>
    <p>
      不可见的目标元素将被忽略，其对应的导航项也不会获得
      <code>.active</code> 类。在不可见包裹元素中初始化的滚动监听实例将忽略所有目标元素。一旦包裹元素变得可见，请使用 <code>refresh</code> 方法来检查可观察的元素。
    </p>
    <CodeWrapper
      code='document.querySelectorAll(&#39;#nav-tab&gt;[data-bs-toggle="tab"]&#39;).forEach(el =&gt; {
  el.addEventListener(&#39;shown.bs.tab&#39;, () =&gt; {
    const target = el.getAttribute(&#39;data-bs-target&#39;)
    const scrollElem = articleEl.querySelector(`${target} [data-bs-spy="scroll"]`)
    bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
  })
})
'
      lang="javascript"
    />
    <h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2>
    <h3 id="via-data-attributes">通过 data 属性<a class="anchor-link" href="#via-data-attributes" aria-label="通过 data 属性链接"></a></h3>
    <p>
      要为顶部导航栏轻松添加滚动监听行为，请为你想要监视的元素（通常最典型的是 <code>&lt;body&gt;</code>）添加 <code>data-bs-spy=&quot;scroll&quot;</code>。然后添加 <code>data-bs-target</code> 属性，其值为任意 Bootstrap
      <code>.nav</code> 组件父元素的 <code>id</code> 或类名。
    </p>
    <CodeWrapper
      code='&lt;body data-bs-spy="scroll" data-bs-target="#navbar-example"&gt;
  ...
  &lt;div id="navbar-example"&gt;
    &lt;ul class="nav nav-tabs" role="tablist"&gt;
      ...
    &lt;/ul&gt;
  &lt;/div&gt;
  ...
&lt;/body&gt;'
      lang="html"
    />
    <h3 id="via-javascript">通过 JavaScript<a class="anchor-link" href="#via-javascript" aria-label="通过 JavaScript 链接"></a></h3>
    <CodeWrapper
      code="const scrollSpy = new bootstrap.ScrollSpy(articleEl.body, {
  target: &#39;#navbar-example&#39;
})
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
            <td><code>rootMargin</code></td>
            <td>字符串</td>
            <td><code>0px 0px -25%</code></td>
            <td>
              计算滚动位置时使用的 Intersection Observer
             <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin">rootMargin</a>
              有效单位。
            </td>
          </tr>
          <tr>
            <td><code>smoothScroll</code></td>
            <td>布尔值</td>
            <td><code>false</code></td>
            <td>当用户点击指向 ScrollSpy 可观察元素的链接时，启用平滑滚动。</td>
          </tr>
          <tr>
            <td><code>target</code></td>
            <td>字符串、DOM 元素</td>
            <td><code>null</code></td>
            <td>指定要应用滚动监听插件的元素。</td>
          </tr>
          <tr>
            <td><code>threshold</code></td>
            <td>数组</td>
            <td><code>[0.1, 0.5, 1]</code></td>
            <td>
              计算滚动位置时使用的 <code>IntersectionObserver</code>
             <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold">threshold</a>
              有效输入。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Callout type="warning">
      <p><strong>已弃用的选项</strong></p>
      <p>直到 v5.1.3，我们一直使用 <code>offset</code> 和 <code>method</code> 选项，它们现在已被弃用并替换为 <code>rootMargin</code>。为保持向后兼容，我们将继续把给定的 <code>offset</code> 解析为 <code>rootMargin</code>，但此功能将在 <strong>v6</strong> 中移除。</p>
    </Callout>
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
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
            <td>销毁元素的滚动监听。（移除 DOM 元素上存储的数据）</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td><em>静态</em>方法，用于获取与某个 DOM 元素关联的滚动监听实例。</td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td><em>静态</em>方法，用于获取与某个 DOM 元素关联的滚动监听实例，如果尚未初始化，则创建一个新实例。</td>
          </tr>
          <tr>
            <td><code>refresh</code></td>
            <td>在 DOM 中添加或移除元素时，你需要调用 refresh 方法。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>以下是一个使用 refresh 方法的示例：</p>
    <CodeWrapper
      code='const dataSpyList = document.querySelectorAll(&#39;[data-bs-spy="scroll"]&#39;)
dataSpyList.forEach(dataSpyEl =&gt; {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})
'
      lang="javascript"
    />
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
            <td><code>activate.bs.scrollspy</code></td>
            <td>当滚动监听激活某个锚点时，会在滚动元素上触发此事件。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code='const firstScrollSpyEl = articleEl.querySelector(&#39;[data-bs-spy="scroll"]&#39;)
firstScrollSpyEl.addEventListener(&#39;activate.bs.scrollspy&#39;, () =&gt; {
  // do something...
})
'
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
          <li><a href="#navbar">导航栏</a></li>
          <li><a href="#nested-nav">嵌套导航</a></li>
          <li><a href="#list-group">列表组</a></li>
          <li><a href="#simple-anchors">简单锚点</a></li>
        </ul>
      </li>
      <li><a href="#non-visible-elements">不可见元素</a></li>
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

import { onMounted, onBeforeUnmount } from 'vue';

let articleEl = null;

onMounted(() => {
  import('bootstrap').then((bootstrap) => {
    articleEl = document.querySelector('article.bd-content');

    const dataSpyList = articleEl.querySelectorAll('[data-bs-spy="scroll"]');
    dataSpyList.forEach((dataSpyEl) => {
      new bootstrap.ScrollSpy(dataSpyEl);
    });
  });
});

onBeforeUnmount(() => {
  import('bootstrap').then((bootstrap) => {
    const dataSpyList = articleEl.querySelectorAll('[data-bs-spy="scroll"]');
    dataSpyList.forEach((dataSpyEl) => {
      bootstrap.ScrollSpy.getInstance(dataSpyEl).dispose();
    });
  });
});
</script>
