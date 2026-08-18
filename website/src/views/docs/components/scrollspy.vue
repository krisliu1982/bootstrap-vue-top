<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-scrollspy">
      <a href="#scrollspy-about">使用说明</a>
      <a href="#scrollspy-nav">导航锚点</a>
      <a href="#scrollspy-list">列表锚点</a>
      <a href="#scrollspy-custom">自定义激活样式</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-scrollspy" class="docs-content">
    <h1>Scrollspy 滚动监听</h1>
    <p class="fs-4 fw-light">
      使用 <code>v-scrollspy</code> 指令激活滚动监听。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/scrollspy/" target="_blank">Bootstrap Scrollspy</a>
    </p>

    <h2 id="scrollspy-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#scrollspy-about"> </a>
    </h2>
    <p>
      当滚动到与锚点的 “href” 属性所引用的 “id” 相匹配的元素时，Scrollspy 会为锚点（<code>&lt;a&gt;</code>）元素添加
      <code>.active</code> 类。Scrollspy 最适合与 Bootstrap 的
      <a href="https://getbootstrap.com/docs/5.3/components/navs-tabs">nav component</a>
      或
      <a href="https://getbootstrap.com/docs/5.3/components/list-group">list group</a>
      结合使用，但它也能与当前页面中的任何锚点元素一起使用。下面是它的工作原理：
    </p>
    <ul class="docs-content-list">
      <li>
        首先，scrollspy 需要两样东西：导航列表组或一组简单的链接，以及一个可滚动的容器。可滚动容器可以是
        <code>&lt;body&gt;</code> 元素，也可以是具有设定的 <code>height</code> 和
        <code>overflow-y: scroll</code> 属性的自定义元素。
      </li>
      <li>
        在可滚动容器上添加 <code>v-scrollspy</code> (有 <code>.self</code> 修饰符是滚动监听自己，否则是
        <code>body</code>) 和 <code>data-bs-target="#navId"</code>，其中 <code>navId</code> 是相关导航的唯一
        <code>id</code>。如果该元素内部没有可聚焦的元素，请务必同时添加 <code>tabindex="0"</code> 以确保键盘访问性。
      </li>
      <li>
        当您滚动被监视的容器时，会为关联导航中的锚链接添加和移除
        <code>.active</code> 类。链接必须有可解析的 <code>id</code> 目标，否则它们将被忽略。例如，<code
          >&lt;a href="#home"&gt;home&lt;/a&gt;</code
        >
        必须对应于 DOM 中的某个元素，如
        <code>&lt;div id="home"&gt;&lt;/div&gt;</code>
      </li>
      <li>不可见的目标元素将被忽略。</li>
    </ul>
    <p class="text-bg-warning">
      <strong>注意！</strong>如果滚动容器为 <code>body</code> 时, 页面上又有 <code>position: fixed;</code> 或
      <code>position: sticky;</code> 头部的时候，须为锚点目标元素添加
      <code>scroll-margin-top</code>
      样式，其中为头部的高度。(主要避免锚点目标元素被头部遮挡)
    </p>
    <code-highlight type="vue" :code="bodyCode" label="vue" />

    <h2 id="scrollspy-nav">
      导航锚点<a class="anchor-link" aria-label="Link to this section: 导航锚点" href="#scrollspy-nav"> </a>
    </h2>
    <p>滚动导航栏下方的区域，会看到激活类发生变化。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">First</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">Second</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3">Third</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading4">Fourth</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading5">Fifth</a>
            </li>
          </ul>
        </nav>
        <div
          v-scrollspy.self
          data-bs-target="#navbar-example2"
          style="height: 200px; overflow-y: scroll"
          class="bg-body-tertiary p-3 rounded-2"
          tabindex="0"
        >
          <h4 id="scrollspyHeading1">First heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
          <h4 id="scrollspyHeading2">Second heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
          <h4 id="scrollspyHeading3">Third heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
          <h4 id="scrollspyHeading4">Fourth heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
          <h4 id="scrollspyHeading5">Fifth heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
            appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep adding
            some more example copy here to emphasize the scrolling and highlighting.
          </p>
        </div>
      </div>
      <code-highlight type="vue" :code="navCode" label="vue" />
    </div>

    <h2 id="scrollspy-list">
      列表锚点<a class="anchor-link" aria-label="Link to this section: 列表锚点" href="#scrollspy-list"> </a>
    </h2>
    <p>
      Scrollspy 还能与
      <code>.list-group</code>
      元素配合使用。滚动列表组旁边的区域，就会看到激活类发生变化。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row">
          <div class="col-3">
            <div id="list-example" class="list-group">
              <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
              <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
              <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
              <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
            </div>
          </div>
          <div class="col-9">
            <div v-scrollspy.self data-bs-target="#list-example" style="height: 300px; overflow-y: scroll" tabindex="0">
              <h4 id="list-item-1">Item 1</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <h4 id="list-item-2">Item 2</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <h4 id="list-item-3">Item 3</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <h4 id="list-item-4">Item 4</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="vue" :code="listCode" label="vue" />
    </div>

    <h2 id="scrollspy-custom">
      自定义激活样式<a class="anchor-link" aria-label="Link to this section: 自定义激活样式" href="#scrollspy-custom">
      </a>
    </h2>
    <p>
      Scrollspy 不仅适用于导航组件和列表组，还能在当前文档中的任何
      <code>&lt;a&gt;</code> 锚元素上正常工作。滚动该区域，然后观察 <code>.active</code> 类会如何变化。从而自定义
      <code>.active</code> 样式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row">
          <div class="col-3">
            <div id="custom-list-example" class="d-flex flex-column gap-2 custom-list-example-scrollspy text-center">
              <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
              <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
              <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
              <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
              <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
            </div>
          </div>
          <div class="col-9">
            <div
              v-scrollspy.self
              data-bs-target="#custom-list-example"
              style="height: 300px; overflow-y: scroll"
              tabindex="0"
            >
              <h4 id="simple-list-item-1">Item 1</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <h4 id="simple-list-item-2">Item 2</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <h4 id="simple-list-item-3">Item 3</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <h4 id="simple-list-item-4">Item 4</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <h4 id="simple-list-item-5">Item 5</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
              <p>
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
                appropriate navigation link is highlighted. It’s repeated throughout the component example. We keep
                adding some more example copy here to emphasize the scrolling and highlighting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="vue" :code="customCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
const bodyCode = `
<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-scrollspy">
      <a href="#scrollspy-about">使用说明</a>
      <a href="#scrollspy-nav">导航锚点</a>
      <a href="#scrollspy-list">列表锚点</a>
      <a href="#scrollspy-custom">自定义激活样式</a>
    </nav>
    <div 
      v-scrollspy
      data-bs-target="#docs-nav-scrollspy" class="docs-content">
      <h2 id="scrollspy-about">使用说明</h2>
      ...
      <h2 id="scrollspy-nav">导航锚点</h2>
      ...
      <h2 id="scrollspy-list">列表锚点</h2>
      ...
      <h2 id="scrollspy-custom">自定义激活样式</h2>
      ...
    </div>
  </div>
</template>`;

const navCode = `
<template>
  <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading1">First</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading2">Second</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading3">Third</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading4">Fourth</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading5">Fifth</a>
      </li>
    </ul>
  </nav>
  <div 
    v-scrollspy.self 
    data-bs-target="#navbar-example2" 
    style="height: 200px;overflow-y: scroll;" tabindex="0"
    class="bg-body-tertiary p-3 rounded-2">
    <h4 id="scrollspyHeading1">First heading</h4>
    ...
    <h4 id="scrollspyHeading2">Second heading</h4>
    ...
    <h4 id="scrollspyHeading3">Third heading</h4>
    ...
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    ...
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    ...
  </div>
</template>`;

const listCode = `
<template>
  <div class="row">
    <div class="col-3">
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
        <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
      </div>
    </div>
    <div class="col-9">
      <div v-scrollspy.self 
        data-bs-target="#list-example" 
        style="height: 300px;overflow-y: scroll;" 
        tabindex="0">
        <h4 id="list-item-1">Item 1</h4>
        ...
        <h4 id="list-item-2">Item 2</h4>
        ...
        <h4 id="list-item-3">Item 3</h4>
        ...
        <h4 id="list-item-4">Item 4</h4>
        ...
      </div>
    </div>
  </div>
</template>`;

const customCode = `
<template>
  <div class="row">
    <div class="col-3">
      <div id="custom-list-example" 
        class="d-flex flex-column gap-2 custom-list-example-scrollspy text-center">
        <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
        <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
        <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
        <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
        <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
      </div>
    </div>
    <div class="col-9">
      <div v-scrollspy.self 
        data-bs-target="#custom-list-example" 
        style="height: 300px;overflow-y: scroll;"
        tabindex="0">
        <h4 id="simple-list-item-1">Item 1</h4>
        ...
        <h4 id="simple-list-item-2">Item 2</h4>
        ...
        <h4 id="simple-list-item-3">Item 3</h4>
        ...
        <h4 id="simple-list-item-4">Item 4</h4>
        ...
        <h4 id="simple-list-item-5">Item 5</h4>
        ...
      </div>
    </div>
  </div>
</template>

<style lang="css">
.custom-list-example-scrollspy a.active {
  background-color: var(--bs-danger);
  color: var(--bs-white);
}
</style>`;
</script>

<style lang="css">
.custom-list-example-scrollspy a.active {
  background-color: var(--bs-danger);
  color: var(--bs-white);
}
</style>
