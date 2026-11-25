<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-introduction">
      <a href="#introduction-features">主要特点</a>
      <a href="#introduction-browser">浏览器支持</a>
      <a href="#introduction-issues">意见反馈</a>
      <a href="#introduction-license">开源协议</a>
    </nav>
  </div>

  <div v-docsscrollspy data-docs-target="#docs-nav-introduction" class="docs-content">
    <h1>Introduction 介绍</h1>
    <p class="fs-4 fw-light">这是一个融合了 Bootstrap 5.3.x 和 Vue 3.5.x 的现代化前端框架解决方案。</p>

    <h2 id="introduction-features">主要特点<a class="anchor-link" aria-label="Link to this section: 主要特点" href="#introduction-features"> </a></h2>
    <ul class="docs-content-list">
      <li>
        <p>对 Bootstrap 做 vue 扩展，只扩展不改变。依旧可以使用 Bootstrap 快速设计和定制响应式移动优先网站，同时也可以利用扩展来提高开发效率。</p>
      </li>
      <li>
        <p>交互性比较强 HTML 组件和书写比较繁琐原生 HTML 元素才被声明为 Vue 组件。避免组件臃肿，组件过度封装和组件复杂通信。</p>
      </li>
      <li>
        <p>我们对 bootstrap 样式自定义系统没有做任何改变，如果你熟悉 sass，可以下载源码，设计出自己喜欢的主题。如果你不熟悉sass，可以通过 css 变量进行设计。 </p>
      </li>
    </ul>

    <h2 id="introduction-browser">浏览器支持<a class="anchor-link" aria-label="Link to this section: 浏览器支持" href="#introduction-browser"> </a></h2>
    <p>支持的浏览器范围遵循现代Web开发实践，具体涵盖以下版本：</p>
    <ul class="docs-content-list">
      <li><p>支持Chrome >= 84、Firefox >= 63、Firefox ESR、iOS >= 14.5、Safari >= 14.1。</p></li>
      <li><p>兼容每个主流浏览器的最近两个主要版本（last 2 major versions）。</p></li>
      <li><p>所有支持的浏览器版本均需满足“not dead”条件，即拥有一定的市场使用份额且仍被官方维护。</p></li>
      <li><p>不再支持Internet Explorer，也不支持KaiOS <= 2.5。</p></li>
    </ul>

    <h2 id="introduction-issues">意见反馈<a class="anchor-link" aria-label="Link to this section: 意见反馈" href="#introduction-issues"> </a></h2>
    <p>请将您的意见通过此邮箱发送给我们 <a href="mailto:394178500@qq.com">394178500@qq.com</a>。</p>

    <h2 id="introduction-license">开源协议<a class="anchor-link" aria-label="Link to this section: 开源协议" href="#introduction-license"> </a></h2>
    <p>本项目基于 <strong>MIT</strong> 协议，请自由地享受和参与开源。</p>
  </div>
</template>
