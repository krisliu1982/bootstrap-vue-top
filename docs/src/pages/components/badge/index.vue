<template>
  <article class="docs-content">
    <h1>Badge 徽章</h1>
    <p class="lead">徽章的文档和示例，这是我们用于计数和标记的小型组件。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/badge" target="_blank">Bootstrap Badge</a>。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      我们对徽章没有提供扩展，其官方 API 可直接使用。
    </p>
    <div class="docs-example">
      <Example />
    </div>
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
