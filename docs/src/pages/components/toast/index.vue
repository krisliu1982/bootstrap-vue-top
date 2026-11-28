<template>
  <article class="docs-content">
    <h1>Toast 消息提示</h1>
    <p class="lead">通过弹出提示的方式向您的访客发送通知，这是一种简洁且易于自定义的提醒信息。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/toasts" target="_blank">Bootstrap Toasts</a>。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>
      通过提供 <code>toast</code> 方法，它接受一个 <code>Object</code> 作为其参数。 通过 <code>title</code> 和 <code>message</code> 属性来设置通知的标题和正文。
      默认情况下，通知在 5000 毫秒后自动关闭，但你可以通过 <code>duration</code> 属性来自定义通知的展示时间。 如果你将它设置为
      <code>0</code>，那么通知将不会自动关闭。 需要注意的是 <code>duration</code> 属性接收一个 <code>Number</code>，单位为毫秒。
    </p>
    <div class="docs-example"><BasicUsage /></div>
    <CodeWrapper :code="BasicUsageCode" />

    <h2 id="optional-type">可选类型<a class="anchor-link" href="#optional-type" aria-label="可选类型"></a></h2>
    <p>通过 <code>type</code> 属性来设置类型， 我们提供了四种不同类型: <code>success | danger | warning | info</code>，默认为 <code>info</code>。</p>
    <div class="docs-example"><OptionalType /></div>
    <CodeWrapper :code="OptionalTypeCode" />

    <h2 id="optional-position">可选位置<a class="anchor-link" href="#optional-position" aria-label="可选位置"></a></h2>
    <p>
      通过 <code>position</code> 属性来设置位置， 支持五个选项: <code>top-right | top-left | top-center | bottom-right | bottom-left</code>， 默认为
      <code>top-right</code>。
    </p>
    <div class="docs-example"><OptionalPosition /></div>
    <CodeWrapper :code="OptionalPositionCode" />

    <h2 id="html-content">HTML 正文<a class="anchor-link" href="#html-content" aria-label="HTML 正文"></a></h2>
    <p>设置 <code>message</code> 属性为 HTML 正文。</p>
    <p class="text-bg-danger">在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。永远不要使用用户提供的 HTML 内容。</p>
    <div class="docs-example"><HtmlContent /></div>
    <CodeWrapper :code="HtmlContentCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#optional-type">可选类型</a></li>
      <li><a href="#optional-position">可选位置</a></li>
      <li><a href="#html-content">HTML 正文</a></li>
    </ul>
  </nav>
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import HtmlContent from './html-content.vue';
import OptionalPosition from './optional-position.vue';
import OptionalType from './optional-type.vue';

import BasicUsageCode from './basic-usage.vue?raw';
import HtmlContentCode from './html-content.vue?raw';
import OptionalPositionCode from './optional-position.vue?raw';
import OptionalTypeCode from './optional-type.vue?raw';
</script>
