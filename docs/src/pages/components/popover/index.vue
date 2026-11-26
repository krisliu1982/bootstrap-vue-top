<template>
    <article class="docs-content">
  <h1>Popover 弹出框</h1>
  <p class="lead">Bootstrap Popovers 组件出于性能原因，需要手动启用。为了简化启用方式，我们提供 <code>v-popover</code> 指令启用弹出框。</p>

      <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
  <p>我们仅提供启用指令，其官方 API 可直接使用。了解更多请阅读 <a href="https://bs53.bootstrap-vue.top/components/popovers" target="_blank">Bootstrap Popovers</a>。</p>
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
