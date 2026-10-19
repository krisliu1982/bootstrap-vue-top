<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-visibility">
      <a href="#visibility-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-visibility" class="docs-content">
    <h1>Visibility 可见性</h1>
    <p class="fs-4 fw-light">
      利用可见性工具来控制元素的可见性，而无需修改其显示方式。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/visibility/" target="_blank">Bootstrap Visibility</a>
    </p>

    <h2 id="visibility-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#visibility-about"> </a>
    </h2>
    <p>
      使用我们的可见性工具来设置元素的可见性。这些工具类完全不会修改 <code>display</code> 值，也不会影响布局——<code
        >.invisible</code
      >
      元素仍然会在页面中占据空间。
    </p>
    <p class="text-bg-warning">
      带有 <code>.invisible</code> 类的元素将会在视觉上以及对于辅助技术/屏幕阅读器用户而言被隐藏起来。
    </p>
    <p>根据需要使用 <code>.visible</code> 或 <code>.invisible</code> 。</p>
    <code-highlight type="html" :code="aboutCode" label="html" />
    <code-highlight type="css" :code="css1Code" label="css" />
  </div>
</template>

<script setup>
const aboutCode = `
<div class="visible">...</div>
<div class="invisible">...</div>`;

const css1Code = `
// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}`;
</script>
