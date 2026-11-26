<template>
  <article class="docs-content">
    <h1>ListGroup 列表组</h1>
    <p class="lead">列表组是一个灵活而强大的组件，用于显示一系列内容。你可以修改和扩展它们，以支持几乎任意类型的内容。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>我们对列表组没有提供扩展，其官方 API 可直接使用。了解更多请阅读 <a href="https://bs53.bootstrap-vue.top/components/list-group" target="_blank">Bootstrap ListGroup</a>。</p>
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
