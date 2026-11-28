<template>
  <article class="docs-content">
    <h1>Breadcrumb 面包屑导航</h1>
    <p class="lead">在导航层级中指示当前页面的位置，并通过 CSS 自动添加分隔符。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/breadcrumb" target="_blank">Bootstrap Breadcrumb</a>。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      我们对面包屑导航没有提供扩展，其官方 API 可直接使用。
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
