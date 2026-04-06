<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-visually-hidden">
      <a href="#visually-hidden-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-visually-hidden" class="docs-content">
    <h1>Visually hidden 视觉隐藏</h1>
    <p class="fs-4 fw-light">
      使用这些辅助工具来实现元素的可视化隐藏，同时确保这些元素仍对辅助技术可用，以提供更好的用户体验。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/helpers/visually-hidden/" target="_blank">Boostrap Visually hidden</a>
    </p>

    <h2 id="visually-hidden-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#visually-hidden-about"> </a>
    </h2>
    <p>
      通过使用 <code>.visually-hidden</code> 可以在视觉上隐藏一个元素，同时仍允许其被辅助技术（如屏幕阅读器）访问。使用
      <code>.visually-hidden-focusable</code>
      可以默认将元素视觉隐藏，但在元素获得焦点时（例如仅通过键盘操作的用户）会显示出来。
      <code>.visually-hidden-focusable</code> 也可以应用于容器——借助
      <code>:focus-within</code>，当容器的任何子元素获得焦点时，容器也会被显示出来。
    </p>

    <div class="docs-example">
      <div class="docs-example-data">
        <h2 class="visually-hidden">Title for screen readers</h2>
        <a class="visually-hidden-focusable" href="#content">Skip to main content</a>
        <div class="visually-hidden-focusable">A container with a <a href="#">focusable element</a>.</div>
      </div>
      <code-highlight type="html" :code="aboutCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const aboutCode = `
<h2 class="visually-hidden">Title for screen readers</h2>
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
<div class="visually-hidden-focusable">A container with a <a href="#">focusable element</a>.</div>`;
</script>
