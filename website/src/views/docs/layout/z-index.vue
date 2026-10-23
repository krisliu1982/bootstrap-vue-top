<template>
  <div class="docs-intro">
    <h1>Z-index</h1>
    <p>虽然 z-index 不是 Bootstrap 网格系统的一部分，但它在我们的组件如何叠加以及相互交互方面起着重要作用。</p>
  </div>
  <div class="docs-toc">
  </div>
  <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents" data-pagefind-body>
    <p>多个 Bootstrap 组件使用了 <code>z-index</code>，这是一个 CSS 属性，通过提供第三个轴来排列内容，从而帮助控制布局。我们在 Bootstrap 中使用了一套默认的 z-index 比例，旨在正确地为导航、工具提示和弹出框、模态框等分层。</p>
    <p>这些较高的值从一个任意数字开始，足够高且足够具体，以理想情况下避免冲突。我们需要在我们的分层组件（工具提示、弹出框、导航栏、菜单、模态框）中有一套标准的值，以便我们能够在行为上保持合理的一致性。我们没有理由不能使用 <code>100</code>+ 或
      <code>500</code>+。
    </p>
    <p>我们不鼓励自定义这些单独的值；如果你更改了其中一个，你可能需要全部更改。</p>
    <div class="docs-code-snippet docs-example-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`$zindex-levels: (
  n1: -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  menu: 1000,
  sticky: 1010,
  fixed: 1020,
  drawer: 1030,
  dialog: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070,
);`' lang="scss" label="scss/_config.scss"></CodeHighlight>
    </div>
    <p>为了处理组件内重叠的边框（例如输入组中的按钮和输入框），我们使用低个位数的 <code>z-index</code> 值 <code>1</code>、<code>2</code> 和 <code>3</code> 分别用于默认、悬停和活动状态。在悬停/聚焦/活动时，我们通过更高的
      <code>z-index</code> 值将特定元素带到最前面，以显示其边框位于同级元素之上。
    </p>

    <nav class="docs-links-nav py-9">
      <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/utilities/"
          class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
          <div class="fg-3">← 上一页</div>
          <div class="fw-semibold">工具</div>
          <div class="fg-3">布局</div>
        </a><a href="/docs/6.0/layout/css-grid/" class="d-flex flex-column gap-3 text-decoration-none flex-grow-1"
          rel="next">
          <div class="fg-3">下一页 →</div>
          <div class="fw-semibold">CSS Grid</div>
          <div class="fg-3">布局</div>
        </a></div>
    </nav>
  </div>
</template>