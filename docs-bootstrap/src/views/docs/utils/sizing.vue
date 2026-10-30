<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-sizing">
      <a href="#sizing-parent">相对于父级</a>
      <a href="#sizing-viewport">相对于视口</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-sizing" class="docs-content">
    <h1>Sizing 尺寸规格</h1>
    <p class="fs-4 fw-light">
      利用我们的“宽度”和“高度”工具，您可以轻松地将元素设置为任意宽或任意高。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/sizing/" target="_blank">Bootstrap Sizing</a>
    </p>

    <h2 id="sizing-parent">
      相对于父级<a class="anchor-link" aria-label="Link to this section: 相对于父级" href="#sizing-parent"> </a>
    </h2>
    <p>默认情况下支持 25%、50%、75%、100% 以及 auto。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="w-25 p-3 border border-primary">Width 25%</div>
        <div class="w-50 p-3 border border-primary">Width 50%</div>
        <div class="w-75 p-3 border border-primary">Width 75%</div>
        <div class="w-100 p-3 border border-primary">Width 100%</div>
        <div class="w-auto p-3 border border-primary">Width auto</div>
      </div>
      <code-highlight type="html" :code="parent1Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="border border-primary" style="height: 100px">
          <div class="h-25 d-inline-block border border-primary" style="width: 120px">Height 25%</div>
          <div class="h-50 d-inline-block border border-primary" style="width: 120px">Height 50%</div>
          <div class="h-75 d-inline-block border border-primary" style="width: 120px">Height 75%</div>
          <div class="h-100 d-inline-block border border-primary" style="width: 120px">Height 100%</div>
          <div class="h-auto d-inline-block border border-primary" style="width: 120px">Height auto</div>
        </div>
      </div>
      <code-highlight type="html" :code="parent2Code" label="html" />
    </div>
    <p>您还可以根据需要使用 <code>max-width: 100%;</code> 和 <code>max-height: 100%;</code> 这些样式属性。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="border border-primary" style="width: 50%; height: 100px">
          <div class="mw-100 border border-primary" style="width: 200%">Max-width 100%</div>
        </div>
        <br />
        <div class="border border-primary" style="height: 100px">
          <div class="mh-100 border border-primary" style="width: 100px; height: 200px">Max-height 100%</div>
        </div>
      </div>
      <code-highlight type="html" :code="parent3Code" label="html" />
    </div>

    <h2 id="sizing-viewport">
      相对于视口<a class="anchor-link" aria-label="Link to this section: 相对于视口" href="#sizing-viewport"> </a>
    </h2>
    <p>您还可以使用工具来根据视口设定宽度和高度。</p>
    <code-highlight type="html" :code="viewportCode" label="html" />
  </div>
</template>

<script setup>
const parent1Code = `
<div class="w-25 p-3">Width 25%</div>
<div class="w-50 p-3">Width 50%</div>
<div class="w-75 p-3">Width 75%</div>
<div class="w-100 p-3">Width 100%</div>
<div class="w-auto p-3">Width auto</div>`;

const parent2Code = `
<div style="height: 100px;">
  <div class="h-25 d-inline-block" style="width: 120px;">Height 25%</div>
  <div class="h-50 d-inline-block" style="width: 120px;">Height 50%</div>
  <div class="h-75 d-inline-block" style="width: 120px;">Height 75%</div>
  <div class="h-100 d-inline-block" style="width: 120px;">Height 100%</div>
  <div class="h-auto d-inline-block" style="width: 120px;">Height auto</div>
</div>`;

const parent3Code = `
<div style="width: 50%; height: 100px;">
  <div class="mw-100" style="width: 200%;">Max-width 100%</div>
</div>

<div style="height: 100px;">
  <div class="mh-100" style="width: 100px; height: 200px;">Max-height 100%</div>
</div>
`;

const viewportCode = `
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
`;
</script>
