<template>
  <h1>Pagination 分页</h1>
  <p class="lead">数据分页导航。</p>

  <h2>基础模式</h2>
  <p>设置 <code>mode="base"</code>。</p>
  <BaseMode />

  <h2>全量模式</h2>
  <p>设置 <code>mode="full"</code>。</p>
  <FullMode />

  <h2>简单模式</h2>
  <p>设置 <code>mode="simple"</code>。</p>
  <SimpleMode />

  <h2>横向对齐</h2>
  <p>通过 <code>position</code> 属性改变横向对齐方向，<code>center</code> 为居中，<code>end</code> 为居右。</p>
  <Alignment />

  <h2>可选尺寸</h2>
  <p>通过 <code>size</code> 属性改变尺寸大小，<code>lg</code> 为大尺寸，<code>sm</code> 为小尺寸。</p>
  <OptionalSize />

  <h2>可选页码数</h2>
  <p>通过 <code>pager-count</code> 属性设置页码数，取值范围为 <code>5-21</code>，必须是奇数，默认是 <code>7</code>。</p>
  <OptionalPagerCount />
</template>

<script setup>
import Alignment from './alignment.vue';
import BaseMode from './base-mode.vue';
import FullMode from './full-mode.vue';
import SimpleMode from './simple-mode.vue';
import OptionalSize from './optional-size.vue';
import OptionalPagerCount from './optional-pager-count.vue';
</script>
