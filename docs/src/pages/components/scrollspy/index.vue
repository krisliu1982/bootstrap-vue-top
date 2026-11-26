<template>
  <article class="docs-content">
    <h1>Scrollspy 滚动监听</h1>
    <p class="lead">根据滚动位置自动更新 Bootstrap 导航或列表组组件，以指示视口中当前处于活动状态的链接。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>我们对导滚动监听没有提供扩展，其官方 API 可直接使用。了解更多请阅读 <a href="https://bs53.bootstrap-vue.top/components/scrollspy" target="_blank">Bootstrap Scrollspy</a>。</p>
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
