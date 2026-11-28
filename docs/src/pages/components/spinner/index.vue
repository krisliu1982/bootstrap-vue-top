<template>
  <article class="docs-content">
    <h1>Spinner 加载动画</h1>
    <p class="lead">使用 Bootstrap 加载动画指示组件或页面的加载状态，完全由 HTML 和 CSS 构建，无需 JavaScript。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      我们对加载动画没有提供扩展，其官方 API 可直接使用。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/spinners" target="_blank">Bootstrap Spinner</a>。
    </p>
    <div class="docs-example"><Example /></div>
    <CodeWrapper :code="ExampleCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#example">示例</a></li>
    </ul>
  </nav>
</template>

<script setup>
import Example from './example.vue';
import ExampleCode from './example.vue?raw';
</script>
