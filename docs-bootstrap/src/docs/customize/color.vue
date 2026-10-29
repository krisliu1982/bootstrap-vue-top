<template>
<article class="docs-content prose">
    <h1>颜色</h1>
<p>Bootstrap 由一套丰富的颜色系统支撑，驱动我们革新的主题、组件和颜色模式。这为任何项目提供了更全面的自定义和扩展能力。</p>

<h2 id="colors">颜色<a class="anchor-link" href="#colors" aria-label="链接到 颜色"></a></h2>

<p>Bootstrap 新的颜色系统包含 16 种颜色、每种 13 个色调，这意味着使用 Bootstrap 时我们有 208 种颜色可供使用。</p>

<p>所有 Bootstrap 颜色都可以作为 Sass 变量和 <code>scss/_config.scss</code> 文件中的 Sass 映射使用。为避免文件体积增加，我们不会为每个变量都创建文本或背景颜色类。相反，我们从中选取一个子集用于<a href="[[docsref:/customize/theme]]">主题调色板</a>。</p>

<p>自定义颜色时请务必监控对比度。如下所示，我们为主要颜色各自添加了三个对比度值——一个针对色板当前颜色，一个针对白色，一个针对黑色。</p>

<!-- 原文档使用 JSX 动态渲染色板网格（getData('colors')、Swatch 组件等），
     在静态 HTML 中无法执行，故此处以说明性占位呈现。 -->
<div class="grid bd-colors-grid">
    <p><em>（色板网格：16 种颜色 × 13 个色调，另含 white、black 两个附加颜色。原文档通过 JavaScript 动态渲染，此处略去具体色块。）</em></p>
</div>

<h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="链接到 工作原理"></a></h2>

<p>Bootstrap 从一系列 Sass 变量和 <code>scss/_colors.scss</code> 中名为 <code>$colors</code> 的 Sass 映射生成颜色。这些是我们的基础颜色——蓝色、靛蓝、紫罗兰等——用于生成你上方看到的每种颜色的浅色调和深色调。你可以通过向 <code>$colors</code> 映射添加或移除颜色来自定义这些颜色。</p>

<h3 id="default-colors">默认颜色<a class="anchor-link" href="#default-colors" aria-label="链接到 默认颜色"></a></h3>

<p>以下是我们默认的颜色列表。Bootstrap 中颜色的独特之处在于它们默认仍然是 Sass 变量。此外，它们采用 <code>oklch()</code> 格式，这是一种旨在实现感知均匀性的现代颜色空间。</p>

<pre><code class="language-scss">// scss/_colors.scss（节选）
$blue:    oklch(60% 0.24 240);
$indigo:  oklch(55% 0.25 275);
$violet:  oklch(58% 0.24 300);
$purple:  oklch(55% 0.25 320);
$pink:    oklch(65% 0.26 350);
$red:     oklch(60% 0.26 25);
$orange:  oklch(70% 0.22 50);
$yellow:  oklch(85% 0.18 90);
$green:   oklch(65% 0.22 150);
$teal:    oklch(60% 0.18 190);
$cyan:    oklch(70% 0.16 210);
// ...</code></pre>

<p>上述颜色随后被转换为名为 <code>$colors</code> 的 Sass 映射。</p>

<pre><code class="language-scss">// scss/_colors.scss（节选）
$colors: (
  "blue": $blue,
  "indigo": $indigo,
  "violet": $violet,
  "purple": $purple,
  "pink": $pink,
  "red": $red,
  "orange": $orange,
  "yellow": $yellow,
  "green": $green,
  "teal": $teal,
  "cyan": $cyan,
  // ...
) !default;</code></pre>

<h3 id="color-mixing">颜色混合<a class="anchor-link" href="#color-mixing" aria-label="链接到 颜色混合"></a></h3>

<p>如前所述，我们使用 <code>color-mix()</code> 函数为每种颜色生成较浅（浅色调）和较深（深色调）的版本。这让我们能够快速轻松地生成完整的颜色刻度。</p>

<p>浅色调和深色调的停靠点、<code>color-mix()</code> 颜色空间以及混合颜色都是可自定义的。</p>

<pre><code class="language-scss">// scss/_colors.scss（节选）
$color-mix-space: lab !default;
$color-tints: (
  025: 94%,
  050: 90%,
  100: 80%,
  // ...
) !default;
$color-shades: (
  900: 64%,
  950: 76%,
  975: 88%,
  // ...
) !default;
$color-mix-white: var(--bs-white) !default;
$color-mix-black: var(--bs-black) !default;</code></pre>

<p>这些选项和 <code>$colors</code> 映射用于生成 <code>$color-tokens</code> 映射，后者作为 CSS 自定义属性输出到 <code>:root</code> 上。</p>

<pre><code class="language-scss">// scss/_colors.scss（节选）
$color-tokens: () !default;
@each $name, $value in $colors {
  @each $stop, $mix in $color-tints {
    $color-tokens: map-merge($color-tokens, ("--bs-#{$name}-#{$stop}": color-mix(in #{$color-mix-space}, #{$color-mix-white} #{$mix}, #{$value})));
  }
  $color-tokens: map-merge($color-tokens, ("--bs-#{$name}-500": $value));
  @each $stop, $mix in $color-shades {
    $color-tokens: map-merge($color-tokens, ("--bs-#{$name}-#{$stop}": color-mix(in #{$color-mix-space}, #{$color-mix-black} #{$mix}, #{$value})));
  }
}</code></pre>

<p>在实践中，由此输出的 CSS 变量看起来如下：</p>

<pre><code class="language-scss">// 从 _colors.scss 生成的 CSS 自定义属性示例
--bs-blue-025: color-mix(in lab, var(--bs-white) 94%, oklch(60% 0.24 240));
--bs-blue-050: color-mix(in lab, var(--bs-white) 90%, oklch(60% 0.24 240));
--bs-blue-100: color-mix(in lab, var(--bs-white) 80%, oklch(60% 0.24 240));
// ...
--bs-blue-500: oklch(60% 0.24 240);
// ...
--bs-blue-900: color-mix(in lab, var(--bs-black) 64%, oklch(60% 0.24 240));
--bs-blue-975: color-mix(in lab, var(--bs-black) 88%, oklch(60% 0.24 240));</code></pre>

<div class="callout">
    <p>我们使用 CSS 变量 <code>var(--bs-white)</code> 和 <code>var(--bs-black)</code> 来防止 LightningCSS 将实时混合转换为静态的 <code>lab()</code> 值。遗憾的是，目前无法在 LightningCSS 中禁用此特性。</p>
</div>

<h2 id="customizing">自定义<a class="anchor-link" href="#customizing" aria-label="链接到 自定义"></a></h2>

<p>你可以通过向 <code>$colors</code> 映射添加或移除颜色来自定义颜色。你也可以自定义浅色调和深色调的停靠点、<code>color-mix()</code> 颜色空间以及混合颜色。假设你想添加另一种蓝灰色，比如石板灰（slate）。</p>

<ol>
    <li>为这个新颜色创建一个新的 Sass 变量，采用 <code>oklch()</code> 格式。</li>
    <li>将新颜色添加到 <code>$colors</code> 映射。</li>
    <li>重新编译源 Sass 以生成新颜色。</li>
</ol>

<p>具体做法如下：</p>

<pre><code class="language-scss">$slate: oklch(55% 0.07 260);

@use "bootstrap" as * with (
  $colors: (
    "slate": $slate,
  ),
);</code></pre>

<p>要移除一种颜色，将其值设置为 <code>null</code>。</p>

<pre><code class="language-scss">@use "bootstrap" as * with (
  $colors: (
    "pewter": null,
  ),
);</code></pre>

<h2 id="from-colors-to-theme">从颜色到主题<a class="anchor-link" href="#from-colors-to-theme" aria-label="链接到 从颜色到主题"></a></h2>

<p>上述 <code>--bs-{color}-{stop}</code> 令牌是原始调色板。它们本身并不为组件设置样式——Bootstrap 将选定的子集送入<strong>主题层</strong>，在那里它们被赋予语义角色（背景、前景、边框等），并作为组件读取的 <code>.theme-*</code> 类暴露出来。</p>

<p>完整流水线如下：</p>

<ol>
    <li><strong><code>$colors</code></strong>（<code>scss/_colors.scss</code>）定义基础色相并生成 <code>--bs-{color}-{stop}</code> 令牌（例如 <code>--bs-blue-500</code>）。</li>
    <li><strong><code>$theme-colors</code></strong>（<code>scss/_theme.scss</code>）将语义名称（<code>primary</code>、<code>success</code>、<code>danger</code> 等）逐一映射到这些令牌上（<code>base</code>、<code>fg</code>、<code>bg</code>、<code>bg-subtle</code>、<code>border</code>、<code>contrast</code> 等），大部分包裹在 <code>light-dark()</code> 中以便适应颜色模式。</li>
    <li>这些角色被输出为 <strong><code>--bs-{name}-{role}</code></strong> 令牌（例如 <code>--bs-primary-bg</code>）。</li>
    <li><strong><code>.theme-{name}</code></strong> 类将它们重新映射到通用的 <strong><code>--bs-theme-{role}</code></strong> 令牌（例如 <code>.theme-primary</code> 设置 <code>--bs-theme-bg: var(--bs-primary-bg)</code>）。</li>
    <li><strong>组件</strong>读取 <code>--bs-theme-*</code> 令牌，因此单个 <code>.theme-primary</code> 类就能为任何感知主题的组件重新设置样式。</li>
</ol>

<p>主题层——语义令牌、<code>.theme-*</code> 类、层颜色和颜色模式——在<a href="[[docsref:/customize/theme]]">主题页面</a>中有完整文档。本页其余部分仍停留在基础颜色层。</p>

<h2 id="generating-utilities">生成工具类<a class="anchor-link" href="#generating-utilities" aria-label="链接到 生成工具类"></a></h2>

<p>Bootstrap 不会为每个调色板令牌都发布 <code>color</code> 和 <code>background-color</code> 工具类——那会添加大量很少使用的 CSS。如果你需要几个特定色调作为工具类，请通过<a href="[[docsref:/utilities/api]]">工具类 API</a> 添加一个工具类组。在导入 <code>utilities</code> 时配置 <code>$utilities</code> 映射，然后加载 <code>utilities/api</code> 以输出 CSS。每个值指向一个生成的 color 令牌（<code>--bs-{color}-{stop}</code>）：</p>

<pre><code class="language-scss">@use "../node_modules/bootstrap/scss/utilities" with (
  $utilities: (
    "fg-palette": (
      property: color,
      class: fg,
      values: (
        "purple-300": var(--bs-purple-300),
        "purple-500": var(--bs-purple-500),
        "purple-700": var(--bs-purple-700),
      ),
    ),
  )
);
@use "../node_modules/bootstrap/scss/utilities/api";</code></pre>

<p>这会添加 <code>.fg-purple-300</code>、<code>.fg-purple-500</code> 和 <code>.fg-purple-700</code>。Bootstrap 将你的条目合并到默认 <code>$utilities</code> 映射之上，因此内置工具类保持不变。按需列出任意数量的色调，并将 <code>property: background-color</code> 与 <code>class: bg</code> 一起设置以生成背景。（颜色令牌本身来自你的主 Bootstrap 导入；此片段仅输出额外的工具类。）</p>

  </article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#colors">颜色</a></li>
        <li><a href="#how-it-works">工作原理</a>
            <ul>
                <li><a href="#default-colors">默认颜色</a></li>
                <li><a href="#color-mixing">颜色混合</a></li>
            </ul>
        </li>
        <li><a href="#customizing">自定义</a></li>
        <li><a href="#from-colors-to-theme">从颜色到主题</a></li>
        <li><a href="#generating-utilities">生成工具类</a></li>
    </ul>
</nav>
  </template>