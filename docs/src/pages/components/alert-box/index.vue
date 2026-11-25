<template>
  <article class="docs-content">
    <h1>AlertBox 警示弹窗</h1>
    <p class="lead">模拟浏览器原生 alert 消息提示框而实现的弹窗组件, 用于重要信息提示。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法链接"></a></h2>
    <p>使用 <code>alertBox</code> 方法，它接受一个 <code>Object</code> 作为其参数。通过 <code>message</code> 属性设置警示内容。</p>
    <div class="docs-example">
      <BasicUsage />
    </div>
    <CodeWrapper :code="BasicUsageCode" />

  </article>
  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
    </ul>
  </nav>
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import BasicUsageCode from './basic-usage.vue?raw';
</script>
