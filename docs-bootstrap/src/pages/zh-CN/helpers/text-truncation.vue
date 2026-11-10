<template>
  <article class="bd-content">
    <h1>文本截断</h1>
    <p class="lead">使用省略号截断长字符串文本。</p>

    <p>
      对于较长的内容，你可以添加 <code>.text-truncate</code> 类，用省略号截断文本。
      <strong>需要 <code>display: inline-block</code> 或 <code>display: block</code>。</strong>
    </p>
    <Example
      code='<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    This text is quite long, and will be truncated once displayed.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  This text is quite long, and will be truncated once displayed.
</span>'
    />
    <DocsPager />
  </article>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
