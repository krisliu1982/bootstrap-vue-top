<template>
    <article class="docs-content">

  <h1>Button 按钮</h1>
  <p class="lead">使用 Bootstrap 的自定义按钮样式，为表单、对话框等中的操作提供支持，并支持多种尺寸、状态等。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
  <p>我们对按钮没有提供扩展，其官方 API 可直接使用。了解更多请阅读 <a href="https://bs53.bootstrap-vue.top/components/buttons" target="_blank">Bootstrap Button</a>。</p>
    <div class="docs-example">
      <Example />
    </div>
    <CodeWrapper :code="ExampleCode" />  </article>

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
