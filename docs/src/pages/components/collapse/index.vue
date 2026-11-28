<template>
  <article class="docs-content">
    <h1>Collapse 折叠</h1>
    <p class="lead">使用少量类和我们的 JavaScript 插件，即可在整个项目中切换内容的可见性。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      我们对折叠没有提供扩展，其官方 API 可直接使用。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/collapse" target="_blank">Bootstrap Collapse</a>。
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
