<template>
<article class="docs-content prose">
    <h1>主题</h1>
<p>Bootstrap 主题是一组以语义命名的令牌，用于为我们的组件、工具类等设置样式。主题可配置、响应颜色模式，并可通过 Sass 或 CSS 使用。</p>

<h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="链接到 工作原理"></a></h2>

<p>主题颜色在 <code>$theme-colors</code> Sass 映射中定义。该映射用于生成我们的主题颜色值。你可以在 <code>_theme.scss</code> 文件中找到这些值。我们在这里定义 Bootstrap 的设计令牌，涵盖浅色和深色两种颜色模式。</p>

<p>主题颜色包括以下语义颜色：</p>

<table class="table">
    <thead>
        <tr><th>主题颜色</th><th>默认值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td><code>primary</code></td><td><code>var(--bs-blue-500)</code></td><td>主要操作的主品牌色</td></tr>
        <tr><td><code>accent</code></td><td><code>var(--bs-indigo-500)</code></td><td>补充品牌色选项</td></tr>
        <tr><td><code>success</code></td><td><code>var(--bs-green-500)</code></td><td>正向操作和成功状态</td></tr>
        <tr><td><code>danger</code></td><td><code>var(--bs-red-500)</code></td><td>破坏性操作和错误状态</td></tr>
        <tr><td><code>warning</code></td><td><code>var(--bs-yellow-500)</code></td><td>警告消息和状态</td></tr>
        <tr><td><code>info</code></td><td><code>var(--bs-cyan-500)</code></td><td>信息消息和中性状态</td></tr>
        <tr><td><code>inverse</code></td><td><code>var(--bs-gray-900)</code></td><td>通过反转前景和背景实现高对比度</td></tr>
        <tr><td><code>secondary</code></td><td><code>var(--bs-gray-300)</code></td><td>较不突出的操作和状态</td></tr>
    </tbody>
</table>

<p>在每个语义主题颜色内部，你会找到以下键，其中大部分是颜色模式自适应的：</p>

<table class="table">
    <thead>
        <tr><th>主题令牌</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td><code>base</code></td><td>语义颜色的默认颜色值</td></tr>
        <tr><td><code>fg</code></td><td>可访问的文本颜色（针对 body，以及 <code>subtle</code> 和 <code>muted</code> 颜色令牌）</td></tr>
        <tr><td><code>fg-emphasis</code></td><td>强调文本颜色，用于配合 <code>muted</code> 背景令牌</td></tr>
        <tr><td><code>bg</code></td><td>用于高对比度的实色背景</td></tr>
        <tr><td><code>bg-subtle</code></td><td>最低对比度的背景，通常与 <code>fg</code> 键配对用于文本颜色</td></tr>
        <tr><td><code>bg-muted</code></td><td>较低对比度的背景，常用于禁用状态</td></tr>
        <tr><td><code>border</code></td><td>边框和分隔线</td></tr>
        <tr><td><code>focus-ring</code></td><td>用于可见焦点指示器和轮廓样式</td></tr>
        <tr><td><code>contrast</code></td><td>需要在 <code>base</code> 和 <code>bg</code> 颜色上保持可读性的文本颜色</td></tr>
    </tbody>
</table>

<h2 id="token-playground">令牌演练场<a class="anchor-link" href="#token-playground" aria-label="链接到 令牌演练场"></a></h2>

<p>每个组件读取相同的主题和布局令牌，因此一次更改会影响到整个组。更改下方的圆角、间距或主色，观察按钮、输入框、警告框和卡片一起更新。</p>

<!-- 原文档使用 <TokenPlayground /> 动态交互组件，静态 HTML 无法执行，此处占位说明。 -->
<div class="callout">
    <p><em>（令牌演练场：原文档通过交互式 <code>&lt;TokenPlayground /&gt;</code> 组件呈现，可实时调整圆角、间距和主色并观察组件更新。此处略去具体交互。）</em></p>
</div>

<p><strong>Remint</strong> 控件展示了主题当前的工作方式。将其设置为 <strong>All</strong> 时，每种颜色会重述每个派生令牌——<code>bg-subtle</code>、<code>fg</code>、<code>border</code> 等——因此整个预览都会跟随变化。将其设置为 <strong>Base</strong> 时，只有 <code>--bs-primary-base</code> 和 <code>--bs-primary-bg</code> 改变。实心按钮会重新着色，但警告框保持编译时的蓝色配对，因为其 <code>bg-subtle</code>、<code>fg</code> 和 <code>border</code> 令牌仍指向 <code>:root</code> 上的蓝色调色板。</p>

<h2 id="theme-colors">主题颜色<a class="anchor-link" href="#theme-colors" aria-label="链接到 主题颜色"></a></h2>

<p>每个令牌都可作为 CSS 变量使用，其中大部分随后被我们的工具类和组件消费。因此对于 <code>primary</code> 颜色，你有以下颜色：</p>

<!-- 原文档使用 getData('theme-colors').map(...) 和 <Swatch> 动态渲染色板网格，静态 HTML 无法执行，此处占位说明。 -->
<div class="grid bd-theme-colors-grid small">
    <p><em>（主题颜色色板网格：展示 8 种语义主题颜色 × 9 个主题令牌（base、fg、fg-emphasis、bg、bg-subtle、bg-muted、border、focus-ring、contrast）。原文档通过 JavaScript 动态渲染，此处略去具体色块。）</em></p>
</div>

<h3 id="pairings">配对<a class="anchor-link" href="#pairings" aria-label="链接到 配对"></a></h3>

<p>由于可访问性、颜色对比度和一般美学考虑，并非所有颜色都可用于所有用途。以下是一些推荐的配对。</p>

<ul>
    <li><code>contrast</code> 最适合搭配 <code>bg</code></li>
    <li><code>fg</code> 最适合搭配 <code>subtle</code></li>
    <li><code>fg-emphasis</code> 最适合搭配 <code>muted</code></li>
    <li><code>border</code> 最适合搭配 <code>subtle</code>，但也可以搭配 <code>muted</code></li>
</ul>

<pre><code class="language-html">&lt;div class="theme-primary vstack gap-3"&gt;
  &lt;div style="color: var(--bs-theme-contrast); background: var(--bs-theme-bg);" class="p-3 rounded-5"&gt;
    Example element with theme color
  &lt;/div&gt;
  &lt;div style="color: var(--bs-theme-fg-emphasis); background: var(--bs-theme-bg-muted); border: 1px solid var(--bs-theme-border);" class="p-3 rounded-5"&gt;
    Example element with theme color
  &lt;/div&gt;
  &lt;div style="color: var(--bs-theme-fg); background: var(--bs-theme-bg-subtle); border: 1px solid var(--bs-theme-border);" class="p-3 rounded-5"&gt;
    Example element with theme color
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<h2 id="layer-colors">层颜色<a class="anchor-link" href="#layer-colors" aria-label="链接到 层颜色"></a></h2>

<p>用于前景、背景和边框颜色的颜色令牌在 Bootstrap 中称为<strong>主题层颜色</strong>。这些层颜色在 <code>$theme-colors</code> Sass 映射之外各自的 Sass 映射中配置，因为它们有更细致的主题化用例。</p>

<p>这三种主题的令牌在 <code>$theme-fgs</code>、<code>$theme-bgs</code> 和 <code>$theme-borders</code> Sass 映射中定义。这些映射用于生成颜色模式自适应的 <code>color</code>、<code>background-color</code> 和 <code>border-color</code> 值，随后被我们的工具类和组件消费。你可以在 <code>_theme.scss</code> 文件中找到这些值。</p>

<h3 id="background">背景<a class="anchor-link" href="#background" aria-label="链接到 背景"></a></h3>

<p>主题背景包括几个实用和语义颜色选项。</p>

<table class="table">
    <thead>
        <tr><th>背景</th><th>默认值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td><code>body</code></td><td><code>bg-body</code></td><td>默认背景色</td></tr>
        <tr><td><code>secondary</code></td><td><code>bg-1</code></td><td>最低对比度背景色</td></tr>
        <tr><td><code>subtle</code></td><td><code>bg-2</code></td><td>较低对比度背景色</td></tr>
        <tr><td><code>muted</code></td><td><code>bg-3</code></td><td>中等对比度背景色，通常用于禁用状态</td></tr>
        <tr><td><code>white</code></td><td><code>bg-white</code></td><td>纯白背景色</td></tr>
        <tr><td><code>black</code></td><td><code>bg-black</code></td><td>纯黑背景色</td></tr>
        <tr><td><code>transparent</code></td><td><code>bg-transparent</code></td><td>透明背景色</td></tr>
        <tr><td><code>inherit</code></td><td><code>inherit</code></td><td>继承的背景色</td></tr>
    </tbody>
</table>

<h3 id="foreground">前景<a class="anchor-link" href="#foreground" aria-label="链接到 前景"></a></h3>

<p>几乎所有这些选项也适用于前景文本颜色。</p>

<table class="table">
    <thead>
        <tr><th>前景</th><th>默认值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td><code>body</code></td><td><code>fg-body</code></td><td>默认前景色</td></tr>
        <tr><td><code>secondary</code></td><td><code>fg-1</code></td><td>最低对比度前景色</td></tr>
        <tr><td><code>subtle</code></td><td><code>fg-2</code></td><td>较低对比度前景色</td></tr>
        <tr><td><code>muted</code></td><td><code>fg-3</code></td><td>中等对比度前景色</td></tr>
        <tr><td><code>white</code></td><td><code>fg-white</code></td><td>纯白前景色</td></tr>
        <tr><td><code>black</code></td><td><code>fg-black</code></td><td>纯黑前景色</td></tr>
        <tr><td><code>inherit</code></td><td><code>inherit</code></td><td>继承的前景色</td></tr>
    </tbody>
</table>

<h3 id="border">边框<a class="anchor-link" href="#border" aria-label="链接到 边框"></a></h3>

<p>边框颜色有类似的层级，但命名不同。</p>

<table class="table">
    <thead>
        <tr><th>边框</th><th>默认值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td><code>bg</code></td><td><code>border-bg</code></td><td>与 body 背景色匹配的边框</td></tr>
        <tr><td><code>body</code></td><td><code>border-body</code></td><td>body 内容的默认边框色</td></tr>
        <tr><td><code>muted</code></td><td><code>border-muted</code></td><td>柔和、较低对比度的边框色，常用于禁用状态</td></tr>
        <tr><td><code>subtle</code></td><td><code>border-subtle</code></td><td>微妙、最低对比度的边框色</td></tr>
        <tr><td><code>emphasized</code></td><td><code>border-emphasized</code></td><td>强调、较高对比度的边框色</td></tr>
        <tr><td><code>white</code></td><td><code>border-white</code></td><td>纯白边框色</td></tr>
        <tr><td><code>black</code></td><td><code>border-black</code></td><td>纯黑边框色</td></tr>
    </tbody>
</table>

<h3 id="examples">示例<a class="anchor-link" href="#examples" aria-label="链接到 示例"></a></h3>

<p>由于可访问性、颜色对比度和一般美学考虑，并非所有颜色都可用于所有用途。以下是一些推荐的配对。</p>

<ul>
    <li><code>fg-body</code> 适用于所有 <code>bg</code> 颜色</li>
    <li><code>fg-1</code> 适用于 <code>bg-body</code>、<code>bg-1</code>、<code>bg-2</code> 和 <code>bg-3</code></li>
    <li><code>fg-2</code> 适用于 <code>bg-body</code>、<code>bg-1</code> 和 <code>bg-2</code></li>
    <li><code>fg-3</code> 适用于 <code>bg-body</code>、<code>bg-1</code></li>
</ul>

<p>以下是一些展示它们组合在一起的示例。</p>

<pre><code class="language-html">&lt;div class="vstack gap-3"&gt;
  &lt;div class="p-3 rounded-5 bg-body fg-body border border-subtle"&gt;
    fg-body on bg-body with border-subtle
  &lt;/div&gt;
  &lt;div class="p-3 rounded-5 bg-body fg-body border"&gt;
    fg-body on bg-body
  &lt;/div&gt;
  &lt;div class="p-3 rounded-5 bg-1 fg-3 border"&gt;
    fg-3 on bg-1
  &lt;/div&gt;
  &lt;div class="p-3 rounded-5 bg-2 fg-2 border"&gt;
    fg-2 on bg-2
  &lt;/div&gt;
  &lt;div class="p-3 rounded-5 bg-3 fg-1 border"&gt;
    fg-1 on bg-3
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<h2 id="color-modes">颜色模式<a class="anchor-link" href="#color-modes" aria-label="链接到 颜色模式"></a></h2>

<p>得益于我们使用 CSS 的 <code>light-dark()</code> 函数，Bootstrap 的主题和层颜色是<strong>颜色模式自适应的</strong>。这让我们可以为一个组件同时指定两种颜色，一种用于浅色模式，一种用于深色模式。通过使用 <code>data-bs-theme</code> 属性将 <code>color-scheme</code> 属性设置为 <code>light</code> 或 <code>dark</code> 来切换这些颜色。</p>

<p>默认情况下，<code>color-scheme: light dark</code> 设置在 <code>:root</code> 元素上，意味着 Bootstrap 尊重用户的系统偏好。你可以在任何层级上通过在任何元素上设置 <code>data-bs-theme="light"</code> 或 <code>data-bs-theme="dark"</code> 来强制该子树使用特定模式。根据元素的不同，你可能需要包含 <code>.bg-body</code>、<code>.fg-body</code> 或类似工具类以确保颜色正确应用。</p>

<p>以下是同一组组件在浅色和深色模式下并排渲染的效果。注意背景使用了 <code>.bg-body</code>。没有它，浅色模式演示将没有白色背景——只是深色背景上的浅色模式组件。</p>

<pre><code class="language-html">&lt;div class="row g-0"&gt;
  &lt;div class="md:col-6 vstack gap-3 p-4 bg-body fg-body" data-bs-theme="light"&gt;
    &lt;h6 class="fw-semibold"&gt;Light mode&lt;/h6&gt;
    &lt;div class="card"&gt;
      &lt;div class="card-body"&gt;
        &lt;h5 class="card-title"&gt;Card title&lt;/h5&gt;
        &lt;p class="card-text"&gt;Some quick example text to build on the card title and make up the bulk of the card’s content.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="alert theme-primary"&gt;&lt;p&gt;This is a primary alert.&lt;/p&gt;&lt;/div&gt;
    &lt;input type="text" class="form-control" placeholder="Form control"&gt;
    &lt;div class="form-field"&gt;
      &lt;input type="checkbox" id="checkLabel" class="check" /&gt;
      &lt;label for="checkLabel"&gt;Example new checkbox&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="vstack gap-2"&gt;
      &lt;button type="button" class="btn-solid theme-primary"&gt;Primary&lt;/button&gt;
      &lt;button type="button" class="btn-subtle theme-secondary"&gt;Secondary&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="md:col-6 vstack gap-3 p-4 bg-body fg-body" data-bs-theme="dark"&gt;
    &lt;h6 class="fw-semibold"&gt;Dark mode&lt;/h6&gt;
    &lt;div class="card"&gt;
      &lt;div class="card-body"&gt;
        &lt;h5 class="card-title"&gt;Card title&lt;/h5&gt;
        &lt;p class="card-text"&gt;Some quick example text to build on the card title and make up the bulk of the card’s content.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="alert theme-primary"&gt;&lt;p&gt;This is a primary alert.&lt;/p&gt;&lt;/div&gt;
    &lt;input type="text" class="form-control" placeholder="Form control"&gt;
    &lt;div class="form-field"&gt;
      &lt;input type="checkbox" id="checkDarkLabel" class="check" /&gt;
      &lt;label for="checkDarkLabel"&gt;Example new checkbox&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="vstack gap-2"&gt;
      &lt;button type="button" class="btn-solid theme-primary"&gt;Primary&lt;/button&gt;
      &lt;button type="button" class="btn-subtle theme-secondary"&gt;Secondary&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<p>在底层，像 <code>--bs-primary-fg</code> 这样的令牌值会根据激活的颜色模式以不同方式解析。例如，在我们的 <code>_theme.scss</code> 中，主文本颜色定义为：</p>

<pre><code class="language-scss">"fg": light-dark(var(--blue-600), var(--blue-400)),</code></pre>

<p>当 <code>data-bs-theme="light"</code> 处于激活状态（或用户系统偏好为浅色）时，它解析为 <code>var(--blue-600)</code>。在深色模式下，它解析为 <code>var(--blue-400)</code>——一种在深色背景上保持可读性的较浅色调。相同的模式适用于背景、边框和所有其他自适应令牌。</p>

<p>关于全局切换颜色模式、构建自定义模式以及 JavaScript 切换器示例的更多详细信息，请参阅<a href="[[docsref:/customize/color-modes/]]">颜色模式文档</a>。</p>

<h2 id="theme-utility-classes">主题工具类<a class="anchor-link" href="#theme-utility-classes" aria-label="链接到 主题工具类"></a></h2>

<p>我们从 <code>$theme-colors</code> Sass 映射生成主题工具类，使所有主题颜色令牌都可作为 CSS 变量使用。我们在组件变体中使用这些工具类，以便通过单个全局类快速实现主题化。这要求组件支持主题颜色，但并非每个组件都支持。</p>

<p>借助主题工具类，你可以用单个类为元素应用主题颜色。</p>

<pre><code class="language-html">&lt;div class="alert theme-primary"&gt;&lt;p&gt;Primary alert&lt;/p&gt;&lt;/div&gt;
&lt;div&gt;
  &lt;button type="button" class="btn-solid theme-primary"&gt;Primary button&lt;/button&gt;
  &lt;button type="button" class="btn-outline theme-primary"&gt;Primary outline button&lt;/button&gt;
  &lt;button type="button" class="btn-subtle theme-primary"&gt;Primary subtle button&lt;/button&gt;
  &lt;button type="button" class="btn-text theme-primary"&gt;Primary text button&lt;/button&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;span class="badge theme-primary"&gt;Primary badge&lt;/span&gt;
  &lt;span class="badge badge-subtle theme-primary"&gt;Primary subtle badge&lt;/span&gt;
&lt;/div&gt;</code></pre>

<p>你还可以将主题颜色工具类应用于容器，任何感知主题的子元素都会继承该主题颜色。</p>

<pre><code class="language-html">&lt;div class="vstack gap-3 theme-primary"&gt;
  &lt;div class="alert"&gt;&lt;p&gt;Primary alert&lt;/p&gt;&lt;/div&gt;
  &lt;div&gt;
    &lt;button type="button" class="btn-solid"&gt;Primary button&lt;/button&gt;
    &lt;button type="button" class="btn-outline"&gt;Primary outline button&lt;/button&gt;
    &lt;button type="button" class="btn-subtle"&gt;Primary subtle button&lt;/button&gt;
    &lt;button type="button" class="btn-text"&gt;Primary text button&lt;/button&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;span class="badge"&gt;Primary badge&lt;/span&gt;
    &lt;span class="badge badge-subtle"&gt;Primary subtle badge&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<p>这也意味着你可以在特定组件上用另一个主题颜色覆盖容器的主题颜色。</p>

<pre><code class="language-html">&lt;div class="vstack gap-3 theme-primary"&gt;
  &lt;div class="alert"&gt;&lt;p&gt;Primary alert&lt;/p&gt;&lt;/div&gt;
  &lt;div&gt;
    &lt;button type="button" class="btn-solid theme-inverse"&gt;Inverse button&lt;/button&gt;
    &lt;button type="button" class="btn-outline"&gt;Primary outline button&lt;/button&gt;
    &lt;button type="button" class="btn-subtle theme-danger"&gt;Danger subtle button&lt;/button&gt;
    &lt;button type="button" class="btn-text"&gt;Primary text button&lt;/button&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;span class="badge theme-success"&gt;Success badge&lt;/span&gt;
    &lt;span class="badge badge-subtle"&gt;Primary subtle badge&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<h3 id="reset">重置<a class="anchor-link" href="#reset" aria-label="链接到 重置"></a></h3>

<p>在嵌套容器上使用 <code>.theme-reset</code> 以停止继承这些令牌。感知主题的子元素随后会再次使用其组件默认值。</p>

<pre><code class="language-html">&lt;div class="vstack gap-3 theme-primary"&gt;
  &lt;div class="alert"&gt;&lt;p&gt;Primary alert&lt;/p&gt;&lt;/div&gt;
  &lt;div&gt;
    &lt;button type="button" class="btn-solid"&gt;Primary button&lt;/button&gt;
    &lt;span class="badge"&gt;Primary badge&lt;/span&gt;
  &lt;/div&gt;

  &lt;div class="vstack gap-3 theme-reset"&gt;
    &lt;div class="alert"&gt;&lt;p&gt;Default alert&lt;/p&gt;&lt;/div&gt;
    &lt;div&gt;
      &lt;button type="button" class="btn-solid"&gt;Default button&lt;/button&gt;
      &lt;span class="badge"&gt;Default badge&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<p>该类将每个 <code>--theme-*</code> 自定义属性设置为 <code>initial</code>。这会使属性无效，因此 <code>var(--theme-bg, fallback)</code> 会使用回退值。不要在这里使用 <code>unset</code>——<code>unset</code> 会再次从父级继承。</p>

<h2 id="theme-sass-map">主题 Sass 映射<a class="anchor-link" href="#theme-sass-map" aria-label="链接到 主题 Sass 映射"></a></h2>

<p>我们使用一个大型嵌套 Sass 映射来生成主题颜色值。</p>

<pre><code class="language-scss">// scss/_theme.scss（节选）
$theme-colors: (
  "primary": (
    "base": var(--bs-blue-500),
    "fg": light-dark(var(--blue-600), var(--blue-400)),
    "fg-emphasis": light-dark(var(--blue-800), var(--blue-300)),
    "bg": var(--bs-blue-500),
    "bg-subtle": light-dark(var(--blue-100), var(--blue-900)),
    "bg-muted": light-dark(var(--blue-200), var(--blue-800)),
    "border": light-dark(var(--blue-300), var(--blue-600)),
    "focus-ring": ...,
    "contrast": var(--bs-white),
  ),
  // ...
) !default;</code></pre>

<h3 id="customize-the-map">自定义映射<a class="anchor-link" href="#customize-the-map" aria-label="链接到 自定义映射"></a></h3>

<p>通过主入口点使用 <code>@use ... with ()</code> 配置 <code>$theme-colors</code>。我们的 <code>defaults()</code> 函数将你的映射合并到内置映射之上，因此标准主题保持不变，你只需添加所需内容。层映射（<code>$theme-bgs</code>、<code>$theme-fgs</code> 和 <code>$theme-borders</code>）的工作方式相同。</p>

<pre><code class="language-scss">@use "../node_modules/bootstrap/scss/bootstrap" with (
  $theme-colors: (
    // 添加一个新的主题颜色
    "brand": (
      "base": var(--indigo-500),
      "bg": var(--indigo-500),
      "contrast": var(--white)
    ),
    // 移除一个内置主题颜色
    "info": null
  )
);</code></pre>

<p>每个主题颜色是一个嵌套映射，因此合并只有一层深度。要更改内置主题的一个子键，请传递该主题的整个子映射。更多详情请参阅 <a href="[[docsref:/customize/sass#theme-color-map]]">Sass 自定义文档</a>。</p>

<h2 id="css-variables">CSS 变量<a class="anchor-link" href="#css-variables" aria-label="链接到 CSS 变量"></a></h2>

<p>CSS 变量在 <code>_root.scss</code> 中通过 Sass 循环从 <code>$theme-colors</code> Sass 映射在 <code>:root</code> 层级生成。</p>

<pre><code class="language-scss">// scss/_root.scss（节选）
:root,
:host {
  @each $name, $theme in $theme-colors {
    @each $key, $value in $theme {
      --bs-#{$name}-#{$key}: #{$value};
    }
  }
}</code></pre>

  </article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#how-it-works">工作原理</a></li>
        <li><a href="#token-playground">令牌演练场</a></li>
        <li><a href="#theme-colors">主题颜色</a>
            <ul>
                <li><a href="#pairings">配对</a></li>
            </ul>
        </li>
        <li><a href="#layer-colors">层颜色</a>
            <ul>
                <li><a href="#background">背景</a></li>
                <li><a href="#foreground">前景</a></li>
                <li><a href="#border">边框</a></li>
                <li><a href="#examples">示例</a></li>
            </ul>
        </li>
        <li><a href="#color-modes">颜色模式</a></li>
        <li><a href="#theme-utility-classes">主题工具类</a>
            <ul>
                <li><a href="#reset">重置</a></li>
            </ul>
        </li>
        <li><a href="#theme-sass-map">主题 Sass 映射</a>
            <ul>
                <li><a href="#customize-the-map">自定义映射</a></li>
            </ul>
        </li>
        <li><a href="#css-variables">CSS 变量</a></li>
    </ul>
</nav>
  </template>