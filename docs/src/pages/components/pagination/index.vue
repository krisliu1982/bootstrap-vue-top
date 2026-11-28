<template>
  <article class="docs-content">
    <h1>Pagination 分页</h1>
    <p class="lead">用于展示分页、表示一系列相关内容分布在多个页面上的文档和示例。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/pagination" target="_blank">Bootstrap Pagination</a>。</p>

    <h2 id="base-mode">基础模式<a class="anchor-link" href="#base-mode" aria-label="基础模式"></a></h2>
    <p>设置 <code>mode="base"</code>。</p>
    <div class="docs-example"><BaseMode /></div>
    <CodeWrapper :code="BaseModeCode" />

    <h2 id="full-mode">全量模式<a class="anchor-link" href="#full-mode" aria-label="全量模式"></a></h2>
    <p>设置 <code>mode="full"</code>。</p>
    <div class="docs-example"><FullMode /></div>
    <CodeWrapper :code="FullModeCode" />

    <h2 id="simple-mode">简单模式<a class="anchor-link" href="#simple-mode" aria-label="简单模式"></a></h2>
    <p>设置 <code>mode="simple"</code>。</p>
    <div class="docs-example"><SimpleMode /></div>
    <CodeWrapper :code="SimpleModeCode" />

    <h2 id="alignment">横向对齐<a class="anchor-link" href="#alignment" aria-label="横向对齐"></a></h2>
    <p>通过 <code>position</code> 属性改变横向对齐方向，<code>center</code> 为居中，<code>end</code> 为居右。</p>
    <div class="docs-example"><Alignment /></div>
    <CodeWrapper :code="AlignmentCode" />

    <h2 id="optional-size">可选尺寸<a class="anchor-link" href="#optional-size" aria-label="可选尺寸"></a></h2>
    <p>通过 <code>size</code> 属性改变尺寸大小，<code>lg</code> 为大尺寸，<code>sm</code> 为小尺寸。</p>
    <div class="docs-example"><OptionalSize /></div>
    <CodeWrapper :code="OptionalSizeCode" />

    <h2 id="optional-pager-count">可选页码数<a class="anchor-link" href="#optional-pager-count" aria-label="可选页码数"></a></h2>
    <p>通过 <code>pager-count</code> 属性设置页码数，取值范围为 <code>5-21</code>，必须是奇数，默认是 <code>7</code>。</p>
    <div class="docs-example"><OptionalPagerCount /></div>
    <CodeWrapper :code="OptionalPagerCountCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#base-mode">基础模式</a></li>
      <li><a href="#full-mode">全量模式</a></li>
      <li><a href="#simple-mode">简单模式</a></li>
      <li><a href="#alignment">横向对齐</a></li>
      <li><a href="#optional-size">可选尺寸</a></li>
      <li><a href="#optional-pager-count">可选页码数</a></li>
    </ul>
  </nav>
</template>

<script setup>
import Alignment from './alignment.vue';
import BaseMode from './base-mode.vue';
import FullMode from './full-mode.vue';
import SimpleMode from './simple-mode.vue';
import OptionalSize from './optional-size.vue';
import OptionalPagerCount from './optional-pager-count.vue';

import AlignmentCode from './alignment.vue?raw';
import BaseModeCode from './base-mode.vue?raw';
import FullModeCode from './full-mode.vue?raw';
import SimpleModeCode from './simple-mode.vue?raw';
import OptionalSizeCode from './optional-size.vue?raw';
import OptionalPagerCountCode from './optional-pager-count.vue?raw';
</script>
