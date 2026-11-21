<template>
  <h1>Accordion 折叠面板</h1>
  <p class="lead">可垂直折叠的折叠面板。</p>
  <p class="d-inline-flex gap-1">
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> Link with href </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Button with data-bs-target</button>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</div>
  </div>
  <h2>基础用法</h2>
  <p>默认展开单个面板。通过 <code>init-active-index</code> 属性设置初始打开第几个面板。</p>
  <BasicUsage />

  <h2>齐平样式</h2>
  <p>添加 <code>.accordion-flush</code> 样式类到 <code>accordion-class</code> 属性上。</p>
  <FlushStyle />

  <h2>保持打开</h2>
  <p>通过设置 <code>always</code> 属性，以便在打开另一个项目时，折叠面板其他项目保持打开状态。</p>
  <AlwaysOpen />
</template>

<script setup>
import AlwaysOpen from './always-open.vue';
import BasicUsage from './basic-usage.vue';
import FlushStyle from './flush-style.vue';
</script>
