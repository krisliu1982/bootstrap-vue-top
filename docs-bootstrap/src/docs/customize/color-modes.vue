<template>
<article class="docs-content prose">
   <h1>颜色模式</h1>
<p>Bootstrap 支持浅色和深色两种颜色模式。页面默认跟随访问者的系统偏好，你也可以使用 <code>data-bs-theme</code> 属性在全局或按组件强制指定模式。</p>

<div class="callout">
    <p><strong>亲自试一试！</strong> 从 <a href="https://github.com/twbs/examples/tree/main/color-modes">twbs/examples 仓库</a>下载使用 Stylelint 配合 Bootstrap 以及颜色模式的源代码和可运行示例。你也可以<a href="https://stackblitz.com/github/twbs/examples/tree/main/color-modes?file=index.html">在 StackBlitz 中打开该示例</a>。</p>
</div>

<h2 id="dark-mode">深色模式<a class="anchor-link" href="#dark-mode" aria-label="链接到 深色模式"></a></h2>

<p><strong>Bootstrap 开箱即支持浅色和深色颜色模式。</strong> 它们构建于原生 CSS <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/light-dark"><code>light-dark()</code></a> 函数和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/color-scheme"><code>color-scheme</code></a> 属性之上，因此我们的颜色令牌会自动解析为浅色或深色值——无需重新编译，也无需重复的样式表。</p>

<p>这让你两全其美，且无需设置任何标志：</p>

<ul>
    <li><strong>默认跟随系统偏好。</strong> 我们的 <code>:root</code> 声明为 <code>color-scheme: light dark</code>，因此页面会自动跟随访问者的操作系统偏好（<code>prefers-color-scheme</code>），就像媒体查询实现一样。</li>
    <li><strong>使用数据属性覆盖。</strong> 在 <code>&lt;html&gt;</code> 元素上设置 <code>data-bs-theme="light"</code> 或 <code>data-bs-theme="dark"</code> 以强制整个页面使用某种模式，或在任何元素或组件上设置以将该模式限定到该子树。</li>
</ul>

<p>你不必在媒体查询和数据属性之间做选择——因为颜色模式由 <code>color-scheme</code> 驱动，系统偏好和任何 <code>data-bs-theme</code> 覆盖可以协同工作。</p>

<h2 id="example">示例<a class="anchor-link" href="#example" aria-label="链接到 示例"></a></h2>

<p>例如，要更改菜单的颜色模式，请向父元素添加 <code>data-bs-theme="light"</code> 或 <code>data-bs-theme="dark"</code>。这样，无论全局颜色模式如何，这些菜单都会以指定的主题值显示。</p>

<pre><code class="language-html">&lt;div data-bs-theme="light"&gt;
  &lt;button class="btn-solid theme-secondary" type="button" data-bs-toggle="menu" aria-expanded="false"&gt;
    Default menu
  &lt;/button&gt;
  &lt;div class="menu"&gt;
    &lt;a class="menu-item active" href="#"&gt;Action&lt;/a&gt;
    &lt;a class="menu-item" href="#"&gt;Action&lt;/a&gt;
    &lt;a class="menu-item" href="#"&gt;Another action&lt;/a&gt;
    &lt;a class="menu-item" href="#"&gt;Something else here&lt;/a&gt;
    &lt;hr class="menu-divider"&gt;
    &lt;a class="menu-item" href="#"&gt;Separated link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div data-bs-theme="dark"&gt;
  &lt;button class="btn-solid theme-secondary" type="button" data-bs-toggle="menu" aria-expanded="false"&gt;
    Dark menu
  &lt;/button&gt;
  &lt;div class="menu"&gt;
    &lt;a class="menu-item active" href="#"&gt;Action&lt;/a&gt;
    &lt;a class="menu-item" href="#"&gt;Action&lt;/a&gt;
    &lt;a class="menu-item" href="#"&gt;Another action&lt;/a&gt;
    &lt;a class="menu-item" href="#"&gt;Something else here&lt;/a&gt;
    &lt;hr class="menu-divider"&gt;
    &lt;a class="menu-item" href="#"&gt;Separated link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="链接到 工作原理"></a></h2>

<ul>
    <li>我们的颜色令牌在 <code>:root</code> 中使用 CSS <code>light-dark()</code> 函数一次性定义，例如 <code>--bs-border-color: light-dark(var(--bs-gray-200), var(--bs-gray-700))</code>。每个令牌同时携带其浅色和深色值，浏览器根据元素使用的颜色方案解析出正确的值。</li>
    <li><code>:root</code> 元素设置为 <code>color-scheme: light dark</code>，因此页面默认尊重访问者的系统偏好。自动深色模式无需其他配置。</li>
    <li><code>data-bs-theme</code> 属性会覆盖其所设置元素及其后代的 <code>color-scheme</code>——<code>[data-bs-theme="dark"]</code> 设置 <code>color-scheme: dark</code>，<code>[data-bs-theme="light"]</code> 设置 <code>color-scheme: light</code>。这会强制该子树中每个 <code>light-dark()</code> 令牌解析为所选模式，这就是为什么你可以从 <code>&lt;html&gt;</code> 翻转整个页面，或仅重新着色单个组件（如上所示）。</li>
    <li>对于无法用令牌表达的样式——自定义组件，或你自己的额外颜色模式——请使用 <code>color-mode()</code> Sass mixin 将规则限定到某个模式。参见<a href="#building-with-sass">使用 Sass 构建</a>。</li>
</ul>

<h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="链接到 用法"></a></h2>

<h3 id="enable-dark-mode">启用深色模式<a class="anchor-link" href="#enable-dark-mode" aria-label="链接到 启用深色模式"></a></h3>

<p>默认情况下 Bootstrap 已跟随访问者的系统偏好，因此你无需做任何事情即可获得自动深色模式。要<strong>强制</strong>深色模式（无论其系统设置如何），请向 <code>&lt;html&gt;</code> 元素添加 <code>data-bs-theme="dark"</code> 属性。这会将深色颜色模式应用于所有组件和元素，但具有自己 <code>data-bs-theme</code> 属性的元素除外。基于<a href="[[docsref:/guides/quickstart/]]">快速入门模板</a>：</p>

<pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang="en" data-bs-theme="dark"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Bootstrap demo&lt;/title&gt;
    &lt;link href="[[config:cdn.css]]" rel="stylesheet" integrity="[[config:cdn.css_hash]]" crossorigin="anonymous"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;
    &lt;script type="module" src="[[config:cdn.js_bundle]]" integrity="[[config:cdn.js_bundle_hash]]" crossorigin="anonymous"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Bootstrap 目前尚未内置颜色模式选择器，但如果你愿意，可以使用我们自己的文档中的选择器。<a href="#javascript">在 JavaScript 部分了解更多。</a></p>

<h3 id="building-with-sass">使用 Sass 构建<a class="anchor-link" href="#building-with-sass" aria-label="链接到 使用 Sass 构建"></a></h3>

<p>我们内置的浅色和深色令牌通过 <code>light-dark()</code> 自动切换，因此你不需要 Sass 即可获得自动深色模式。<code>color-mode()</code> mixin 用于额外情况：无法用令牌捕获的样式，或你自己的额外自定义颜色模式。</p>

<p>该 mixin 可以通过 <code>$color-mode-type</code> Sass 变量控制，以两种方式输出其规则：</p>

<ul>
    <li><code>media-query</code>（默认）将你的样式包裹在 <code>@media (prefers-color-scheme: …)</code> 块中，因此它们跟随系统偏好。</li>
    <li><code>data</code> 将你的样式限定到 <code>[data-bs-theme="…"]</code> 选择器，因此可以按页面或按组件切换。</li>
</ul>

<p>例如，选择 <code>data</code> 属性方式会生成一个限定作用域的选择器：</p>

<pre><code class="language-scss">$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-fg-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}</code></pre>

<p>输出为：</p>

<pre><code class="language-css">[data-bs-theme=dark] .element {
  color: var(--bs-primary-fg-emphasis);
  background-color: var(--bs-primary-bg-subtle);
}</code></pre>

<p>而使用默认的 <code>media-query</code> 类型时，同样的 mixin 输出会被包裹在媒体查询中：</p>

<pre><code class="language-scss">$color-mode-type: media-query;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-fg-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}</code></pre>

<p>输出为：</p>

<pre><code class="language-css">@media (prefers-color-scheme: dark) {
  .element {
    color: var(--bs-primary-fg-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}</code></pre>

<h2 id="custom-color-modes">自定义颜色模式<a class="anchor-link" href="#custom-color-modes" aria-label="链接到 自定义颜色模式"></a></h2>

<p>虽然颜色模式的主要用例是浅色和深色模式，但也可以实现自定义颜色模式。用自定义值作为颜色模式名称创建你自己的 <code>data-bs-theme</code> 选择器，然后根据需要修改我们的 Sass 和 CSS 变量。Bootstrap 内置的深色模式使用 <code>_root.scss</code> 和 <code>_theme.scss</code>，但你可以在自己的样式表中遵循相同的模式。</p>

<p>例如，你可以创建一个使用选择器 <code>data-bs-theme="blue"</code> 的“蓝色主题”。在你的自定义 Sass 或 CSS 文件中，添加新选择器并按需覆盖任何全局或组件 CSS 变量。如果你使用 Sass，还可以在 CSS 变量覆盖中使用 Sass 函数。</p>

<pre><code class="language-scss">// site/src/scss/_content.scss（节选）
[data-bs-theme="blue"] {
  --bs-body-color: var(--bs-white);
  --bs-body-bg: var(--bs-blue-900);
  --bs-border-color: var(--bs-blue-700);
  // ...
}</code></pre>

<pre><code class="language-html">&lt;div class="p-5 fg-body bg-body rounded-3" data-bs-theme="blue"&gt;
  &lt;div class="h4"&gt;Example blue theme&lt;/div&gt;
  &lt;p&gt;Some paragraph text to show how the blue theme might look with written copy.&lt;/p&gt;

  &lt;hr class="my-4"/&gt;

  &lt;div&gt;
    &lt;button class="btn-solid theme-secondary" type="button" data-bs-toggle="menu" aria-expanded="false"&gt;
      Menu
    &lt;/button&gt;
    &lt;div class="menu"&gt;
      &lt;a class="menu-item active" href="#"&gt;Action&lt;/a&gt;
      &lt;a class="menu-item" href="#"&gt;Action&lt;/a&gt;
      &lt;a class="menu-item" href="#"&gt;Another action&lt;/a&gt;
      &lt;a class="menu-item" href="#"&gt;Something else here&lt;/a&gt;
      &lt;hr class="menu-divider"&gt;
      &lt;a class="menu-item" href="#"&gt;Separated link&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<pre><code class="language-html">&lt;div data-bs-theme="blue"&gt;
  ...
&lt;/div&gt;</code></pre>

<h2 id="javascript">JavaScript<a class="anchor-link" href="#javascript" aria-label="链接到 JavaScript"></a></h2>

<p>要允许访问者或用户切换颜色模式，你需要创建一个切换元素来控制根元素 <code>&lt;html&gt;</code> 上的 <code>data-bs-theme</code> 属性。我们在文档中构建了一个切换器，它最初遵循用户当前的系统颜色模式，但提供了覆盖该设置并选择特定颜色模式的选项。</p>

<p>以下是驱动它的 JavaScript。欢迎检查我们自己的文档导航栏，了解如何使用我们自己的组件中的 HTML 和 CSS 实现它。建议将 JavaScript 包含在页面顶部，以减少站点重新加载期间潜在的屏幕闪烁。请注意，如果你决定为颜色模式使用媒体查询，且你偏好隐式控制，则你的 JavaScript 可能需要修改或移除。</p>

<pre><code class="language-js">// static/docs/[version]/assets/js/color-modes.js（节选）
(() =&gt; {
  'use strict'

  const getStoredTheme = () =&gt; localStorage.getItem('theme')
  const setStoredTheme = theme =&gt; localStorage.setItem('theme', theme)

  const getPreferredTheme = () =&gt; {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme =&gt; {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  // ...（事件监听与切换逻辑）
})()</code></pre>

<h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="链接到 CSS"></a></h2>

<h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="链接到 变量"></a></h3>

<p>数十个根级 CSS 变量通过 <code>light-dark()</code> 同时携带浅色和深色值，因此单个 <code>:root</code> 声明即可覆盖两种模式——无需重复的深色模式覆盖。在为你自己的自定义颜色模式定义令牌时，可将这些作为参考。</p>

<!-- 原文档使用 <ScssDocs name="root-dark-mode-vars" file="scss/_root.scss" /> 动态展示，此处占位说明。 -->
<p><em>（根级深色模式变量：原文档通过 <code>&lt;ScssDocs&gt;</code> 组件展示 <code>scss/_root.scss</code> 中的相关变量，此处略去具体内容。）</em></p>

<h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="链接到 Sass 变量"></a></h3>

<p>我们的浅色和深色颜色令牌在 <code>_root.scss</code> 和 <code>_theme.scss</code> 中由 Sass 生成，其中大部分以 <code>light-dark()</code> 值输出，因此会自动解析。通过 CSS 遮罩绘制图标的组件（轮播控件、关闭按钮等）继承当前颜色并适应激活模式，无需按模式覆盖。</p>

<!-- 原文档使用 <ScssDocs name="sass-dark-mode-vars" file="scss/_config.scss" /> 动态展示，此处占位说明。 -->
<p><em>（Sass 深色模式变量：原文档通过 <code>&lt;ScssDocs&gt;</code> 组件展示 <code>scss/_config.scss</code> 中的相关变量，此处略去具体内容。）</em></p>

<h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="链接到 Sass mixin"></a></h3>

<p>深色模式的样式以及你创建的任何自定义颜色模式，都可以使用可自定义的 <code>color-mode()</code> mixin 适当地限定到 <code>data-bs-theme</code> 属性选择器或媒体查询。更多详情请参阅<a href="#building-with-sass">Sass 用法部分</a>。</p>

<pre><code class="language-scss">// scss/mixins/_color-mode.scss（节选）
@mixin color-mode($mode: light, $root: false) {
  @if $color-mode-type == "media-query" {
    @if $root == true {
      @media (prefers-color-scheme: $mode) {
        :root {
          @content;
        }
      }
    } @else {
      @media (prefers-color-scheme: $mode) {
        @content;
      }
    }
  } @else {
    [data-bs-theme="#{$mode}"] {
      @content;
    }
  }
}</code></pre>
  </article>
  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#dark-mode">深色模式</a></li>
        <li><a href="#example">示例</a></li>
        <li><a href="#how-it-works">工作原理</a></li>
        <li><a href="#usage">用法</a>
            <ul>
                <li><a href="#enable-dark-mode">启用深色模式</a></li>
                <li><a href="#building-with-sass">使用 Sass 构建</a></li>
            </ul>
        </li>
        <li><a href="#custom-color-modes">自定义颜色模式</a></li>
        <li><a href="#javascript">JavaScript</a></li>
        <li><a href="#css">CSS</a>
            <ul>
                <li><a href="#variables">变量</a></li>
                <li><a href="#sass-variables">Sass 变量</a></li>
                <li><a href="#sass-mixins">Sass mixin</a></li>
            </ul>
        </li>
    </ul>
</nav> 
  </template>