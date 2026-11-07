<template>
  <article class="bd-content">
    <h1>Scrollspy</h1>
    <p>Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.</p>

    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>
      Scrollspy toggles the <code>.active</code> class on anchor (<code>&lt;a&gt;</code>) elements when the element with the <code>id</code> referenced by the anchor’s
      <code>href</code> is scrolled into view. Scrollspy is best used in conjunction with a Bootstrap <a href="/docs-bootstrap/5.3/components/navs-tabs">nav component</a> or
      <a href="/docs-bootstrap/5.3/components/list-group">list group</a>, but it will also work with any anchor elements in the current page. Here’s how it works.
    </p>
    <ul>
      <li>
        <p>
          To start, scrollspy requires two things: a navigation, list group, or a simple set of links, plus a scrollable container. The scrollable container can be the
          <code>&lt;body&gt;</code> or a custom element with a set <code>height</code> and <code>overflow-y: scroll</code>.
        </p>
      </li>
      <li>
        <p>
          On the scrollable container, add <code>data-bs-spy=&quot;scroll&quot;</code> and <code>data-bs-target=&quot;#navId&quot;</code> where <code>navId</code> is the unique
          <code>id</code> of the associated navigation. If there is no focusable element inside the element, be sure to also include a <code>tabindex=&quot;0&quot;</code> to ensure
          keyboard access.
        </p>
      </li>
      <li>
        <p>
          As you scroll the “spied” container, an <code>.active</code> class is added and removed from anchor links within the associated navigation. Links must have resolvable
          <code>id</code> targets, otherwise they’re ignored. For example, a <code>&lt;a href=&quot;#home&quot;&gt;home&lt;/a&gt;</code> must correspond to something in the DOM
          like <code>&lt;div id=&quot;home&quot;&gt;&lt;/div&gt;</code>
        </p>
      </li>
      <li>
        <p>
          Target elements that are not visible will be ignored. See the
          <a href="#non-visible-elements">Non-visible elements</a> section below.
        </p>
      </li>
    </ul>
    <h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <h3 id="navbar">Navbar<a class="anchor-link" href="#navbar" aria-label="Link to Navbar"></a></h3>
    <p>Scroll the area below the navbar and watch the active class change. Open the dropdown menu and watch the dropdown items be highlighted as well.</p>
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
    <h3 id="nested-nav">Nested nav<a class="anchor-link" href="#nested-nav" aria-label="Link to Nested nav"></a></h3>
    <p>
      Scrollspy also works with nested <code>.nav</code>s. If a nested <code>.nav</code> is <code>.active</code>, its parents will also be <code>.active</code>. Scroll the area
      next to the navbar and watch the active class change.
    </p>
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
    <h3 id="list-group">List group<a class="anchor-link" href="#list-group" aria-label="Link to List group"></a></h3>
    <p>Scrollspy also works with <code>.list-group</code>s. Scroll the area next to the list group and watch the active class change.</p>
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
    <h3 id="simple-anchors">Simple anchors<a class="anchor-link" href="#simple-anchors" aria-label="Link to Simple anchors"></a></h3>
    <p>
      Scrollspy is not limited to nav components and list groups, so it will work on any <code>&lt;a&gt;</code> anchor elements in the current articleEl. Scroll the area and watch
      the <code>.active</code> class change.
    </p>
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
    <h2 id="non-visible-elements">Non-visible elements<a class="anchor-link" href="#non-visible-elements" aria-label="Link to Non-visible elements"></a></h2>
    <p>
      Target elements that aren’t visible will be ignored and their corresponding nav items won’t receive an
      <code>.active</code> class. Scrollspy instances initialized in a non-visible wrapper will ignore all target elements. Use the <code>refresh</code> method to check for
      observable elements once the wrapper becomes visible.
    </p>
    <CodeWrapper
      code='articleEl.querySelectorAll(&#39;#nav-tab&gt;[data-bs-toggle="tab"]&#39;).forEach(el =&gt; {
  el.addEventListener(&#39;shown.bs.tab&#39;, () =&gt; {
    const target = el.getAttribute(&#39;data-bs-target&#39;)
    const scrollElem = articleEl.querySelector(`${target} [data-bs-spy="scroll"]`)
    bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
  })
})
'
      lang="javascript"
    />
    <h2 id="usage">Usage<a class="anchor-link" href="#usage" aria-label="Link to Usage"></a></h2>
    <h3 id="via-data-attributes">Via data attributes<a class="anchor-link" href="#via-data-attributes" aria-label="Link to Via data attributes"></a></h3>
    <p>
      To easily add scrollspy behavior to your topbar navigation, add <code>data-bs-spy=&quot;scroll&quot;</code> to the element you want to spy on (most typically this would be
      the <code>&lt;body&gt;</code>). Then add the <code>data-bs-target</code> attribute with the <code>id</code> or class name of the parent element of any Bootstrap
      <code>.nav</code> component.
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
    <h3 id="via-javascript">Via JavaScript<a class="anchor-link" href="#via-javascript" aria-label="Link to Via JavaScript"></a></h3>
    <CodeWrapper
      code="const scrollSpy = new bootstrap.ScrollSpy(articleEl.body, {
  target: &#39;#navbar-example&#39;
})
"
      lang="javascript"
    />
    <h3 id="options">Options<a class="anchor-link" href="#options" aria-label="Link to Options"></a></h3>
    <JsDataAttributes />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>rootMargin</code></td>
            <td>string</td>
            <td><code>0px 0px -25%</code></td>
            <td>
              Intersection Observer
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin">rootMargin</a>
              valid units, when calculating scroll position.
            </td>
          </tr>
          <tr>
            <td><code>smoothScroll</code></td>
            <td>boolean</td>
            <td><code>false</code></td>
            <td>Enables smooth scrolling when a user clicks on a link that refers to ScrollSpy observables.</td>
          </tr>
          <tr>
            <td><code>target</code></td>
            <td>string, DOM element</td>
            <td><code>null</code></td>
            <td>Specifies element to apply Scrollspy plugin.</td>
          </tr>
          <tr>
            <td><code>threshold</code></td>
            <td>array</td>
            <td><code>[0.1, 0.5, 1]</code></td>
            <td>
              <code>IntersectionObserver</code>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold">threshold</a>
              valid input, when calculating scroll position.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Callout type="warning">
      <p><strong>Deprecated Options</strong></p>
      <p>
        Up until v5.1.3 we were using <code>offset</code> &amp; <code>method</code> options, which are now deprecated and replaced by <code>rootMargin</code>. To keep backwards
        compatibility, we will continue to parse a given <code>offset</code> to <code>rootMargin</code>, but this feature will be removed in <strong>v6</strong>.
      </p>
    </Callout>
    <h3 id="methods">Methods<a class="anchor-link" href="#methods" aria-label="Link to Methods"></a></h3>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>dispose</code></td>
            <td>Destroys an element’s scrollspy. (Removes stored data on the DOM element)</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td><em>Static</em> method to get the scrollspy instance associated with a DOM element.</td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td><em>Static</em> method to get the scrollspy instance associated with a DOM element, or to create a new one in case it wasn’t initialized.</td>
          </tr>
          <tr>
            <td><code>refresh</code></td>
            <td>When adding or removing elements in the DOM, you’ll need to call the refresh method.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Here’s an example using the refresh method:</p>
    <CodeWrapper
      code='const dataSpyList = articleEl.querySelectorAll(&#39;[data-bs-spy="scroll"]&#39;)
dataSpyList.forEach(dataSpyEl =&gt; {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})
'
      lang="javascript"
    />
    <h3 id="events">Events<a class="anchor-link" href="#events" aria-label="Link to Events"></a></h3>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>activate.bs.scrollspy</code></td>
            <td>This event fires on the scroll element whenever an anchor is activated by the scrollspy.</td>
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
  <DocsPager /></article>

  <nav class="bd-toc" aria-label="On this page">
    <h6>On this page</h6>
    <ul>
      <li><a href="#how-it-works">How it works</a></li>
      <li>
        <a href="#examples">Examples</a>
        <ul>
          <li><a href="#navbar">Navbar</a></li>
          <li><a href="#nested-nav">Nested nav</a></li>
          <li><a href="#list-group">List group</a></li>
          <li><a href="#simple-anchors">Simple anchors</a></li>
        </ul>
      </li>
      <li><a href="#non-visible-elements">Non-visible elements</a></li>
      <li>
        <a href="#usage">Usage</a>
        <ul>
          <li><a href="#via-data-attributes">Via data attributes</a></li>
          <li><a href="#via-javascript">Via JavaScript</a></li>
          <li><a href="#options">Options</a></li>
          <li><a href="#methods">Methods</a></li>
          <li><a href="#events">Events</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>
