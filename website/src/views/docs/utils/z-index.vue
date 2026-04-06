<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-z-index">
      <a href="#z-index-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-z-index" class="docs-content">
    <h1>Z-index 层级</h1>
    <p class="fs-4 fw-light">
      使用我们的低级 <code>z-index</code> 工具，可以轻松更改元素或组件的堆叠层级。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/z-index/" target="_blank">Boostrap Z-index</a>
    </p>

    <h2 id="z-index-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#z-index-about"> </a>
    </h2>
    <p>
      使用 <code>z-index</code> 元素属性可将多个元素叠放在一起。此功能需要元素的 <code>position</code> 属性不是
      <code>static</code> ，该属性可以通过自定义样式设置，或者使用我们的
      <a href="https://getbootstrap.com/docs/5.3/utilities/position/" target="_blank">position utilities</a> 来实现。
    </p>
    <p class="text-bg-info">
      我们把这些称为“低级别” <code>z-index</code> 工具，因为它们的默认值为 <code>-1</code> 到
      <code>3</code> ，我们用这些值来布局重叠的组件。而高级别的
      <code>z-index</code> 值则用于诸如模态框和提示框之类的覆盖式组件。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="position-relative" style="height: 15rem">
          <div class="z-3 position-absolute p-5 rounded-3 text-bg-primary border" style="top: 1.5rem; left: 1.5rem">
            <span style="position: absolute; right: 5px; bottom: 0">z-3</span>
          </div>
          <div class="z-2 position-absolute p-5 rounded-3 text-bg-primary border" style="top: 3rem; left: 3rem">
            <span style="position: absolute; right: 5px; bottom: 0">z-2</span>
          </div>
          <div class="z-1 position-absolute p-5 rounded-3 text-bg-primary border" style="top: 4.5rem; left: 4.5rem">
            <span style="position: absolute; right: 5px; bottom: 0">z-1</span>
          </div>
          <div class="z-0 position-absolute p-5 rounded-3 text-bg-primary border" style="top: 6rem; left: 6rem">
            <span style="position: absolute; right: 5px; bottom: 0">z-0</span>
          </div>
          <div class="z-n1 position-absolute p-5 rounded-3 text-bg-primary border" style="top: 7.5rem; left: 7.5rem">
            <span style="position: absolute; right: 5px; bottom: 0">z-n1</span>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="aboutCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const aboutCode = `
<div class="z-3 position-absolute p-5 rounded-3"><span>z-3</span></div>
<div class="z-2 position-absolute p-5 rounded-3"><span>z-2</span></div>
<div class="z-1 position-absolute p-5 rounded-3"><span>z-1</span></div>
<div class="z-0 position-absolute p-5 rounded-3"><span>z-0</span></div>
<div class="z-n1 position-absolute p-5 rounded-3"><span>z-n1</span></div>`;
</script>
