<template>
<article class="docs-content prose">
    <h1>RTL（从右到左）</h1>
<p>了解如何在 Bootstrap 的布局、组件和工具类中启用对从右到左文本的支持。</p>

<div class="callout">
    <p><strong>专业提示：</strong> 在使用 RTL 之前，请先通过我们的<a href="[[docsref:/getting-started/]]">入门指南</a>熟悉 Bootstrap。</p>
</div>

<h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="链接到 工作原理"></a></h2>

<p>Bootstrap 在整个框架中使用 <strong>CSS 逻辑属性</strong>，使 RTL 支持原生且自动。在你的 HTML 元素上设置 <code>dir="rtl"</code> 并添加 <code>lang</code> 属性（如 <code>lang="ar"</code>），浏览器就会为你处理方向性布局变化。无需单独的样式表。</p>

<p>逻辑属性是能够适应内容书写模式和方向的 CSS 属性。它们不使用 <code>left</code> 和 <code>right</code> 等物理方向，而是使用 <code>start</code> 和 <code>end</code> 等逻辑概念：</p>

<ul>
    <li><code>margin-left</code> → <code>margin-inline-start</code></li>
    <li><code>margin-right</code> → <code>margin-inline-end</code></li>
    <li><code>padding-left</code> → <code>padding-inline-start</code></li>
    <li><code>border-right</code> → <code>border-inline-end</code></li>
</ul>

<p>当你设置 <code>dir="rtl"</code> 时，这些逻辑属性会自动翻转为匹配从右到左的布局，无需任何额外的 CSS 转换。只需更改 HTML 即可。</p>

<h3 id="required-html">必需的 HTML<a class="anchor-link" href="#required-html" aria-label="链接到 必需的 HTML"></a></h3>

<p>只需对 HTML 做一行更改即可启用 RTL。Bootstrap 随后会使用逻辑属性自动适应 RTL 方向。</p>

<pre><code class="language-html">&lt;html lang="en"&gt;
&lt;html lang="ar" dir="rtl"&gt;&lt;!-- [!code highlight] --&gt;</code></pre>

<h3 id="live-demo">实时演示<a class="anchor-link" href="#live-demo" aria-label="链接到 实时演示"></a></h3>

<p>在此页面上切换 LTR 和 RTL，以查看 Bootstrap 逻辑属性的实际效果：</p>

<div class="bd-example-snippet bd-code-snippet not-prose">
    <div class="bd-example">
        <div class="form-field">
            <div class="switch">
                <input type="checkbox" value="" id="rtlSwitch" role="switch" switch />
            </div>
            <label for="rtlSwitch">Enable RTL mode</label>
        </div>
    </div>
</div>

<pre><code class="language-js">(function() {
  const rtlSwitch = document.getElementById('rtlSwitch');
  const htmlElement = document.documentElement;

  // Check current direction on load
  if (htmlElement.getAttribute('dir') === 'rtl') {
    rtlSwitch.checked = true;
  }

  rtlSwitch.addEventListener('change', function() {
    if (this.checked) {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', 'en');
    }
  });
})();</code></pre>

<h2 id="switching-directions">切换方向<a class="anchor-link" href="#switching-directions" aria-label="链接到 切换方向"></a></h2>

<p><strong>需要在同一页面上同时使用 LTR 和 RTL？</strong> 将你的内容包裹在具有不同 <code>dir</code> 属性的容器中：</p>

<pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;link rel="stylesheet" href="[[config:cdn.css]]" integrity="[[config:cdn.css_hash]]" crossorigin="anonymous"&gt;
    &lt;title&gt;LTR and RTL&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- LTR content --&gt;
    &lt;div dir="ltr" lang="en"&gt;
      &lt;!-- … --&gt;
    &lt;/div&gt;

    &lt;!-- RTL content --&gt;
    &lt;div dir="rtl" lang="ar"&gt;
      &lt;!-- … --&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<h2 id="additional-resources">其他资源<a class="anchor-link" href="#additional-resources" aria-label="链接到 其他资源"></a></h2>

<ul>
    <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Logical_Properties">MDN：CSS 逻辑属性与值</a></li>
    <li><a href="https://web.dev/learn/css/logical-properties/">CSS 逻辑属性 - web.dev</a></li>
    <li><a href="https://rtlstyling.com/posts/rtl-styling">RTL 样式 101</a></li>
</ul>
  </article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#how-it-works">工作原理</a>
            <ul>
                <li><a href="#required-html">必需的 HTML</a></li>
                <li><a href="#live-demo">实时演示</a></li>
            </ul>
        </li>
        <li><a href="#switching-directions">切换方向</a></li>
        <li><a href="#additional-resources">其他资源</a></li>
    </ul>
</nav>
  </template>