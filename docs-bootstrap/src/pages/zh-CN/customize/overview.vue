<template>
  <article class="bd-content">
    <h1>自定义</h1>
    <p>了解如何使用 Sass、大量全局选项、扩展的颜色系统等来设置 Bootstrap 主题、自定义和扩展 Bootstrap。</p>

    <h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="概述"></a></h2>
    <p>自定义 Bootstrap 有多种方式。最佳选择取决于你的项目、构建工具的复杂度、所使用的 Bootstrap 版本、浏览器支持等因素。</p>
    <p>我们推荐的两种方式是：</p>
    <ol>
      <li>
        通过<a href="/getting-started/download#package-managers">包管理器</a>使用 Bootstrap，以便你可以使用并扩展我们的源文件。
      </li>
      <li>
        使用 Bootstrap 的编译发行文件或
       <a href="/getting-started/download#cdn-via-jsdelivr">jsDelivr</a>，以便你可以追加或覆盖 Bootstrap 的样式。
      </li>
    </ol>
    <p>
      由于篇幅所限，我们无法在此详细介绍如何使用每一种包管理器，但可以提供一些关于<a href="/customize/sass">将 Bootstrap 与你自己的 Sass 编译器配合使用</a>的指导。
    </p>
    <p>
      如果你希望使用发行文件，请查看<a href="/getting-started/introduction">入门页面</a>，了解如何引入这些文件以及一个示例 HTML 页面。之后，请查阅布局、组件和行为相关的文档。
    </p>
    <p>当你逐渐熟悉 Bootstrap 后，可以继续探索本节，了解更多细节：如何使用全局选项、使用和更改我们的颜色系统、我们如何构建组件、如何使用不断增加的 CSS 自定义属性列表，以及如何在使用 Bootstrap 构建时优化代码。</p>
    <h2 id="csps-and-embedded-svgs">CSP 与内嵌 SVG<a class="anchor-link" href="#csps-and-embedded-svgs" aria-label="CSP 与内嵌 SVG"></a></h2>
    <p>
      若干 Bootstrap 组件在 CSS 中包含内嵌的 SVG，以便在不同浏览器和设备上一致且轻松地设置组件样式。
      <strong>对于 <abbr title="Content Security Policy">CSP</abbr> 配置更严格的组织</strong>，我们记录了所有内嵌 SVG 的位置（它们都通过 <code>background-image</code> 应用），以便你更全面地评估你的选项。
    </p>
    <ul>
      <li><a href="/components/accordion">折叠面板</a></li>
      <li><a href="/components/carousel#with-controls">轮播控件</a></li>
      <li><a href="/components/close-button">关闭按钮</a>（用于警告框和模态框）</li>
      <li><a href="/forms/checks-radios">表单复选框和单选按钮</a></li>
      <li><a href="/forms/checks-radios#switches">表单开关</a></li>
      <li><a href="/forms/validation#server-side">表单验证图标</a></li>
      <li><a href="/components/navbar#responsive-behaviors">导航栏切换按钮</a></li>
      <li><a href="/forms/select">选择菜单</a></li>
    </ul>
    <p>
      根据<a href="https://github.com/twbs/bootstrap/issues/25394">社区讨论</a>，在你自己的代码库中解决此问题的一些选项包括：<a href="/getting-started/webpack#extracting-svg-files">将 URL 替换为本地托管的资源</a>、移除图片并使用内联图片（并非所有组件都可行），以及修改你的 CSP。我们建议仔细审查你自己的安全策略，并在必要时决定最佳方案。
    </p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#overview">概述</a></li>
      <li>
       <a href="#csps-and-embedded-svgs">CSP 与内嵌 SVG</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
