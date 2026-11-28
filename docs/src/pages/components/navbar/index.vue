<template>
  <article class="docs-content">
    <h1>Navbar 导航栏</h1>
    <p class="lead">Bootstrap 强大且响应式的导航头部——导航栏的文档与示例。包含对品牌、导航等内容的支持，也包括对我们折叠插件的支持。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/navbar" target="_blank">Bootstrap Navbar</a>。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      我们对导航栏没有提供扩展，其官方 API 可直接使用。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/navbar" target="_blank">Bootstrap Navbar</a>。
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
