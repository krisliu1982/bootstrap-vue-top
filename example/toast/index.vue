<template>
  <h1>Toast 轻提示</h1>
  <p class="lead">通过弹出提示的方式向您的访客发送通知，这是一种简洁且易于自定义的提醒信息。</p>

  <h2>基础用法</h2>
  <p>
    通过提供 <code>toast</code> 方法，它接受一个 <code>Object</code> 作为其参数。 通过 <code>title</code> 和 <code>message</code> 属性来设置通知的标题和正文。 默认情况下，通知在 5000
    毫秒后自动关闭，但你可以通过 <code>duration</code> 属性来自定义通知的展示时间。 如果你将它设置为 <code>0</code>，那么通知将不会自动关闭。 需要注意的是 <code>duration</code> 属性接收一个
    <code>Number</code>，单位为毫秒。
  </p>
  <BasicUsage />

  <h2>可选类型</h2>
  <p>通过 <code>type</code> 属性来设置类型， 我们提供了四种不同类型: <code>success | danger | warning | info</code>，默认为 <code>info</code>。</p>
  <BasicUsage />

  <h2>可选位置</h2>
  <p>通过 <code>position</code> 属性来设置位置， 支持五个选项: <code>top-right | top-left | top-center | bottom-right | bottom-left</code>， 默认为 <code>top-right</code>。</p>
  <OptionalPosition />

  <h2>HTML 正文</h2>
  <p>设置 <code>message</code> 属性为 HTML 正文。</p>
  <p class="text-bg-danger">在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。永远不要使用用户提供的 HTML 内容。</p>
  <HtmlContent />
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import HtmlContent from './html-content.vue';
import OptionalPosition from './optional-position.vue';
</script>
