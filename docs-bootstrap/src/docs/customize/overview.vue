<template>
<article class="docs-content prose">
  <h1>自定义</h1>
<p>了解 Bootstrap 的颜色如何驱动我们的设计系统主题。使用 Sass、大量全局选项以及丰富的全局和组件专用 CSS 变量来定制和扩展 Bootstrap。</p>

<ul>
    <li><strong>Sass</strong>——利用我们的源 Sass 文件，发挥变量、映射、mixin 和函数的优势。</li>
    <li><strong>选项</strong>——使用内置变量轻松切换全局 CSS 偏好，自定义 Bootstrap。</li>
    <li><strong>颜色</strong>——Bootstrap 的颜色系统包含 14 种颜色、每种 11 个色调，可用于驱动我们的主题。</li>
    <li><strong>主题</strong>——语义颜色、排版、设置等，均可自定义以契合你的品牌。</li>
    <li><strong>颜色模式</strong>——构建浅色模式、深色模式或两者兼具。</li>
    <li><strong>组件</strong>——了解我们如何以响应式方式、使用基础类和修饰类构建几乎全部组件。</li>
    <li><strong>CSS 变量</strong>——使用 Bootstrap 的 CSS 自定义属性，实现快速且前瞻性的设计与开发。</li>
    <li><strong>优化</strong>——让项目保持精简、响应式且可维护，从而交付最佳体验。</li>
</ul>

<h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="链接到 概述"></a></h2>

<p>自定义 Bootstrap 有多种方式。最佳路径取决于你的项目、构建工具的复杂程度、所使用的 Bootstrap 版本、浏览器支持等因素。</p>

<p>我们推荐的两种方式是：</p>

<ol>
    <li>通过<a href="/docs/getting-started/install">包管理器</a>使用 Bootstrap，以便使用和扩展我们的源文件。</li>
    <li>使用 Bootstrap 的编译分发文件或 <a href="/docs/getting-started/install#cdn">jsDelivr</a>，以便在 Bootstrap 样式之上添加或覆盖。</li>
</ol>

<p>虽然我们无法在此详述每种包管理器的用法，但可以就<a href="/docs/customize/sass">使用你自己的 Sass 编译器配合 Bootstrap</a> 提供一些指引。</p>

<p>对于希望使用分发文件的用户，请查阅<a href="/docs/guides/quickstart">入门页面</a>了解如何引入这些文件以及示例 HTML 页面。然后，查阅你所需使用的布局、组件和行为的相关文档。</p>

<p>在熟悉 Bootstrap 的过程中，请继续探索本节内容，了解更多关于如何使用全局选项、使用和更改我们的颜色系统、我们如何构建组件、如何使用不断增长的 CSS 自定义属性列表，以及在使用 Bootstrap 构建时如何优化代码的详细信息。</p>

<h2 id="sass-vs-css">Sass 与 CSS<a class="anchor-link" href="#sass-vs-css" aria-label="链接到 Sass 与 CSS"></a></h2>

<p>当 Bootstrap 5 首次引入 CSS 变量时，Sass 与 CSS 变量的设置有些令人困惑，也略显局限。因此，Sass 与 CSS 变量之间的关系很不清晰。在 Bootstrap 6 中，我们澄清了这一点——以下是两者的交互方式。</p>

<ul>
    <li>在高层面上，Sass 是一种管理<a href="/docs/customize/options">全局配置选项</a>的方式，并为我们的工具类、组件、排版、自定义属性（即 CSS 变量）等生成 CSS。</li>
    <li>我们将 CSS 变量视为用户的<strong>一等自定义层</strong>。</li>
    <li>几乎每个组件都有对应的 Sass 变量——例如复选框新增的 <code>$check-*</code> 变量。这些 Sass 变量随后被相关选择器上的 CSS 变量消费（例如 <code>.check</code> 上的 <code>--bs-check-bg: #{$check-bg}</code>），并通过各种属性应用。</li>
    <li>CSS 变量从 Sass 变量或 CSS 变量获取值，具体取决于上下文。</li>
    <li>Sass 也帮助我们生成 CSS 变量。可以想见主题和配置值，但跨组件而言，Sass 是在消费 CSS 变量。这为你提供了两条更清晰的自定义途径。</li>
</ul>

<p>基于此，你可以通过 CSS 或 Sass 自定义 Bootstrap 6，得益于革新的颜色系统和主题配置，两者都比以往更加容易。</p>

<h2 id="csps-and-embedded-svgs">CSP 与内嵌 SVG<a class="anchor-link" href="#csps-and-embedded-svgs" aria-label="链接到 CSP 与内嵌 SVG"></a></h2>

<p>若干 Bootstrap 组件在 CSS 中内嵌了 SVG，以便跨浏览器和设备一致、轻松地为组件设置样式。<strong>对于具有更严格 <abbr title="Content Security Policy">CSP</abbr> 配置的组织</strong>，我们记录了所有内嵌 SVG 的实例（全部通过 <code>background-image</code> 应用），以便你更彻底地审查自己的选项。</p>

<ul>
    <li><a href="/docs/components/accordion">手风琴</a></li>
    <li><a href="/docs/components/carousel#with-controls">轮播控件</a></li>
    <li><a href="/docs/components/close-button">关闭按钮</a>（用于警告框和模态框）</li>
    <li><a href="/docs/forms/validation#server-side">表单验证图标</a></li>
    <li><a href="/docs/components/navbar#responsive-behaviors">导航栏切换按钮</a></li>
</ul>

<p>基于<a href="https://github.com/twbs/bootstrap/issues/25394">社区讨论</a>，在你自己的代码库中处理此问题的一些选项包括：<a href="/docs/guides/webpack#extracting-svg-files">将 URL 替换为本地托管的资源</a>、移除图片并使用内联图片（并非所有组件都可行），以及修改你的 CSP。我们的建议是仔细审查你自己的安全策略，必要时决定最佳的前进路径。</p>
</article>
<nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#overview">概述</a></li>
        <li><a href="#sass-vs-css">Sass 与 CSS</a></li>
        <li><a href="#csps-and-embedded-svgs">CSP 与内嵌 SVG</a></li>
    </ul>
</nav>
</template>
