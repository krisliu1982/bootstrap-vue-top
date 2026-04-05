<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-opacity">
      <a href="#opacity-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-opacity" class="docs-content">
    <h1>Opacity 透明度</h1>
    <p class="fs-4 fw-light">
      控制元素的透明度。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/opacity/" target="_blank">Boostrap Opacity</a>
    </p>

    <h2 id="opacity-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#opacity-about"> </a>
    </h2>
    <p><code>opacity</code> 属性用于设置元素的透明度级别。透明度级别描述了透明度的程度，其中 <code>1</code> 表示完全不透明，<code>.5</code> 表示 50% 可见，而
      <code>0</code> 则表示完全透明。</p>
    <p>使用 <code>.opacity-{value}</code> 通配符来设置元素的 <code>透明度</code> 。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">100%</div>
          <div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">75%</div>
          <div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">50%</div>
          <div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">25%</div>
          <div class="opacity-0 p-3 m-2 bg-primary text-light fw-bold rounded">0%</div>
        </div>
      </div>
      <code-highlight type="html" :code="aboutCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const aboutCode = `
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
<div class="opacity-0">...</div>`;
</script>
