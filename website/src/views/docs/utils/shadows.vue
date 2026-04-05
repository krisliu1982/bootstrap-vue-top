<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-shadows">
      <a href="#shadows-example">示例</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-shadows" class="docs-content">
    <h1>Shadows 阴影</h1>
    <p class="fs-4 fw-light">
      使用“box-shadow”样式可为元素添加或移除阴影效果。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/shadows/" target="_blank"
        >Boostrap Shadows</a
      >
    </p>

    <h2 id="shadows-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#shadows-example"> </a>
    </h2>
    <p>
      在 Bootstrap 中，默认情况下组件上的阴影是被禁用的，但可以通过 <code>$enable-shadows</code> 来启用。此外，您还可以使用我们的 <code>box-shadow</code> 实用类快速添加或移除阴影。该功能还支持 <code>.shadow-none</code> 类以及三种默认尺寸（它们都有相应的变量与之匹配）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
<div class="shadow-none p-3 mb-5 bg-body-tertiary rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body-tertiary rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Larger shadow</div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const exampleCode = `
<div class="shadow-none p-3 mb-5 bg-body-tertiary rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body-tertiary rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Larger shadow</div>`;
</script>
