<template>
<article class="docs-content prose">
    <h1>组件</h1>
<p>了解我们如何以及为何以响应式方式、使用基础类和修饰类来构建几乎全部组件。</p>

<h2 id="base-classes">基础类<a class="anchor-link" href="#base-classes" aria-label="链接到 基础类"></a></h2>

<p>Bootstrap 组件通常使用可组合的类构建：一个共享的基础类、变体类以及可选的 主题类。例如，按钮可以从 <code>.btn</code> 开始，并将 <code>.btn-solid</code> 或 <code>.btn-outline</code> 等变体类与 <code>.theme-primary</code> 或 <code>.theme-success</code> 等主题类组合使用。</p>

<p>其中许多类是通过 Sass <code>@each</code> 循环遍历组件映射（用于变体和尺寸等）和主题映射生成的。这使类 API 在各组件之间保持一致，并让一次映射更改就能同时更新所有相关选择器，包括适用的响应式变体。</p>

<p>请查看<a href="[[docsref:/customize/sass#maps-and-loops]]">我们的 Sass 映射与循环文档</a>，了解如何自定义这些循环，并将 Bootstrap 的基础-修饰类方法扩展到自己的代码中。</p>

<h2 id="theme-variants">主题变体<a class="anchor-link" href="#theme-variants" aria-label="链接到 主题变体"></a></h2>

<p>可主题化的组件支持<strong>主题变体</strong>——一族可组合的 <code>.theme-*</code> 类，无需硬编码的按组件颜色类即可为组件重新着色。这用一套一致的 API 取代了以往将颜色烘焙到每个组件中的模式（<code>.btn-primary</code>、<code>.alert-success</code>、<code>.bg-warning</code> 等）。</p>

<p>可主题化组件读取一组共享的通用 <code>--bs-theme-*</code> 令牌，用于其背景、前景、边框和焦点样式——每个令牌都回退到组件自身的默认令牌。当不存在主题类时，应用回退值。向组件（或祖先元素）添加 <code>.theme-*</code> 类，它就会改用该主题的颜色。向嵌套子树添加 <code>.theme-reset</code> 可返回这些组件默认值。</p>

<table class="table">
    <thead>
        <tr><th>令牌</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td><code>--bs-theme-base</code></td><td>主题所派生的原始基础色</td></tr>
        <tr><td><code>--bs-theme-bg</code></td><td>实色背景色，例如实心按钮或徽章</td></tr>
        <tr><td><code>--bs-theme-bg-subtle</code></td><td>用于低强调表面的微妙背景色调</td></tr>
        <tr><td><code>--bs-theme-bg-muted</code></td><td>柔和背景，介于微妙与实色之间</td></tr>
        <tr><td><code>--bs-theme-fg</code></td><td>默认表面上的前景/文本颜色</td></tr>
        <tr><td><code>--bs-theme-fg-emphasis</code></td><td>更高对比度的前景颜色</td></tr>
        <tr><td><code>--bs-theme-border</code></td><td>边框颜色</td></tr>
        <tr><td><code>--bs-theme-contrast</code></td><td>位于实色 <code>--bs-theme-bg</code> 上的文本/图标的对比色</td></tr>
        <tr><td><code>--bs-theme-focus-ring</code></td><td>焦点环颜色</td></tr>
    </tbody>
</table>

<p><a href="[[docsref:/customize/theme#theme-utility-classes]]"><code>.theme-{name}</code> 类</a>镜像我们的语义<a href="[[docsref:/customize/theme#theme-colors]]">主题颜色</a>——<code>.theme-primary</code>、<code>.theme-secondary</code>、<code>.theme-success</code>、<code>.theme-danger</code> 等。它们从 <code>$theme-colors</code> Sass 映射生成，因此添加或重命名主题颜色会自动生成匹配的 <code>.theme-*</code> 类。每个条目通过 <code>light-dark()</code> 为浅色和深色模式定义上述令牌：</p>

<pre><code class="language-scss">// …
// scss/_theme.scss 中 $theme-colors 的一个条目
"primary": (
  "base": var(--blue-500),
  "fg": light-dark(var(--blue-600), var(--blue-400)),
  "fg-emphasis": light-dark(var(--blue-800), var(--blue-200)),
  "bg": var(--blue-500),
  "bg-subtle": light-dark(var(--blue-100), var(--blue-900)),
  "bg-muted": light-dark(var(--blue-200), var(--blue-800)),
  "border": light-dark(var(--blue-300), var(--blue-600)),
  "focus-ring": light-dark(color-mix(in oklch, var(--blue-500) 50%, var(--bg-body)), color-mix(in oklch, var(--blue-500) 75%, var(--bg-body))),
  "contrast": var(--white)
),
// …</code></pre>

<p>要了解组件如何使用这些令牌，以下是 <code>scss/_badge.scss</code> 中的徽章。其 <code>color</code> 和 <code>background-color</code> 各自首先读取主题令牌，回退到徽章自身的默认值（Sass 源中 CSS 变量不带 <code>--bs-</code> 前缀编写；PostCSS 在构建时添加）：</p>

<pre><code class="language-scss">.badge {
  // …
  color: var(--theme-contrast, var(--badge-color));
  background-color: var(--theme-bg, var(--badge-bg));
}</code></pre>

<p>没有主题类时，徽章使用自己的默认值（<code>--badge-bg</code>、<code>--badge-color</code>）。添加 <code>.theme-success</code>，同一个元素就会将 <code>--theme-bg</code> 和 <code>--theme-contrast</code> 解析为成功角色令牌——无需徽章专用的 <code>.badge-success</code> 选择器：</p>

<pre><code class="language-html">&lt;span class="badge"&gt;Default badge&lt;/span&gt;
&lt;span class="badge theme-success"&gt;Success badge&lt;/span&gt;</code></pre>

<p>对于带有变体的组件，将变体类与主题类组合即可为其着色。对于按钮，这意味着将 <code>.btn-solid</code> 或 <code>.btn-outline</code> 等变体与主题配对：</p>

<pre><code class="language-html">&lt;button type="button" class="btn-solid theme-primary"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn-outline theme-success"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn-subtle theme-danger"&gt;Danger&lt;/button&gt;</code></pre>

<p>由于主题令牌是普通的 CSS 变量，你还可以将主题限定到容器并让其中所有内容继承它，或为一次性样式覆盖个别令牌——无需 Sass 编译：</p>

<pre><code class="language-css">.my-brand {
  --bs-theme-bg: #6f42c1;
  --bs-theme-contrast: #fff;
}</code></pre>

<p>要让你自己的某个组件可主题化，请遵循相同的模式：为每个颜色属性读取 <code>var(--theme-{role}, var(--my-component-{role}))</code>，它就会响应设置在其自身或祖先上的任何 <code>.theme-*</code> 类。完整角色令牌列表和建议配对请参阅<a href="[[docsref:/customize/theme]]">主题页面</a>。</p>

<h2 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="链接到 响应式"></a></h2>

<p>这些 Sass 循环也不限于颜色映射。你还可以生成组件的响应式变体。以我们的响应式导航栏展开类为例，我们将 <code>$breakpoints</code> Sass 映射的 <code>@each</code> 循环与媒体查询 include 混合使用。</p>

<pre><code class="language-scss">// scss/_navbar.scss（节选）
@each $breakpoint in map-keys($breakpoints) {
  $prefix: breakpoint-prefix($breakpoint, $breakpoints);

  .#{$prefix}navbar-expand {
    @include media-breakpoint-up($breakpoint, $breakpoints) {
      flex-wrap: nowrap;
      // …
    }
  }
}</code></pre>

<p>如果你修改 <code>$breakpoints</code>，你的更改将应用于所有遍历该映射的循环。</p>

<pre><code class="language-scss">// scss/_config.scss（节选）
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  "2xl": 1536px,
) !default;</code></pre>

<p>关于如何修改我们的 Sass 映射和变量的更多信息和示例，请参阅<a href="[[docsref:/layout/grid#css]]">网格文档的 CSS 部分</a>。</p>

<h2 id="creating-your-own">创建你自己的组件<a class="anchor-link" href="#creating-your-own" aria-label="链接到 创建你自己的组件"></a></h2>

<p>我们鼓励你在使用 Bootstrap 构建自己的组件时采用这些准则。我们已将这种方法扩展到我们文档和示例中的自定义组件。像我们的 callout 这样的组件，其构建方式与我们提供的组件一样，使用基础类和修饰类。</p>

<pre><code class="language-html">&lt;div class="bd-callout my-0"&gt;
  &lt;strong&gt;This is a callout.&lt;/strong&gt; We built it custom for our docs so our messages to you stand out. It has three variants via modifier classes.
&lt;/div&gt;</code></pre>

<pre><code class="language-html">&lt;div class="callout"&gt;...&lt;/div&gt;</code></pre>

<p>在你的 CSS 中，你会看到类似以下内容：大部分样式通过 <code>.callout</code> 完成。然后，每个变体之间的独特样式通过修饰类控制。</p>

<pre><code class="language-scss">// 基础类
.callout {}

// 修饰类
.callout-info {}
.callout-warning {}
.callout-danger {}</code></pre>

<p>对于 callout，其独特样式只是一个 <code>border-left-color</code>。当你将该基础类与其中一个修饰类组合时，就得到了完整的组件家族：</p>

<div class="callout">
    <p><strong>这是一个信息 callout。</strong> 示例文本以展示其效果。</p>
</div>

<div class="callout">
    <p><strong>这是一个警告 callout。</strong> 示例文本以展示其效果。</p>
</div>

<div class="callout">
    <p><strong>这是一个危险 callout。</strong> 示例文本以展示其效果。</p>
</div>
  </article>
  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#base-classes">基础类</a></li>
        <li><a href="#theme-variants">主题变体</a></li>
        <li><a href="#responsive">响应式</a></li>
        <li><a href="#creating-your-own">创建你自己的组件</a></li>
    </ul>
</nav>
  </template>