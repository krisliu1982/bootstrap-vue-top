<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-vertical-rule">
      <a href="#vertical-rule-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-vertical-rule" class="docs-content">
    <h1>Vertical rule 垂直分割线</h1>
    <p class="fs-4 fw-light">
      使用自定义垂直分隔线辅助工具来创建类似于 <code>&lt;hr&gt;</code> 元素那样的垂直分隔线。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/helpers/vertical-rule/" target="_blank">Bootstrap Vertical rule</a>
    </p>

    <h2 id="vertical-rule-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#vertical-rule-about"> </a>
    </h2>
    <p>
      垂直分隔线的设计灵感来源于 <code>&lt;hr&gt;</code> 元素，使您能够在常见的布局中创建垂直分隔线。它们的样式与
      <code>&lt;hr&gt;</code> 元素完全一致：
    </p>
    <ul class="docs-content-list">
      <li>它们的宽度为 1 px。</li>
      <li>它们的最小高度为 1 px。</li>
      <li>其颜色通过 <code>currentColor</code> 和 <code>opacity</code> 来设定。</li>
    </ul>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="vr"></div>
      </div>
      <code-highlight type="html" :code="about1Code" label="html" />
    </div>
    <p>在弹性布局中，垂直分隔线会根据内容自动调整其高度：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="d-flex" style="height: 200px">
          <div class="vr"></div>
        </div>
      </div>
      <code-highlight type="html" :code="about2Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const about1Code = `
<div class="vr"></div>`;

const about2Code = `
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>`;
</script>
