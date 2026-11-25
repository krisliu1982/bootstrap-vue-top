<template>
  <article class="docs-content">
    <h1>Alert 警示框</h1>
    <p class="lead">使用少量灵活可用的警告消息，为典型的用户操作提供情境反馈。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>我们对警示框没有提供扩展，其官方 API 可直接使用。了解更多请阅读 <a href="https://bs53.bootstrap-vue.top/components/alerts" target="_blank">Bootstrap Alert</a>。</p>
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
