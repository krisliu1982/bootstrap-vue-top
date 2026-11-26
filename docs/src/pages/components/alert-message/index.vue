<template>
  <article class="docs-content">
    <h1>AlertMessage 警示消息</h1>
    <p class="lead">常用于主动操作后的反馈提示。通常在操作强度较大的场景中使用（如管理后台）。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>使用 <code>alertMessage</code> 方法，它接受一个 <code>Object</code> 作为其参数。 通过 <code>message</code> 属性设置消息内容。</p>
    <div class="docs-example">
      <BasicUsage />
    </div>
    <CodeWrapper :code="BasicUsageCode" />

    <h2 id="optional-style">可选样式<a class="anchor-link" href="#optional-style" aria-label="可选样式"></a></h2>
    <p>通过 <code>type</code> 属性设置样式。提供八种样式为：<code>primary | secondary | success | danger | warning | info | light | dark</code>，默认为 <code>info</code>。</p>
    <div class="docs-example"><OptionalStyle /></div>
    <CodeWrapper :code="OptionalStyleCode" />

    <h2 id="show-time">显示时间<a class="anchor-link" href="#show-time" aria-label="显示时间"></a></h2>
    <p>通过 <code>duration</code> 属性设置显示时间。默认为 <code>3000</code> 毫秒。</p>
    <div class="docs-example"><ShowTime /></div>
    <CodeWrapper :code="ShowTimeCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#optional-style">可选样式</a></li>
      <li><a href="#show-time">显示时间</a></li>
    </ul>
  </nav>
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import OptionalStyle from './optional-style.vue';
import ShowTime from './show-time.vue';

import BasicUsageCode from './basic-usage.vue?raw';
import OptionalStyleCode from './optional-style.vue?raw';
import ShowTimeCode from './show-time.vue?raw';
</script>
