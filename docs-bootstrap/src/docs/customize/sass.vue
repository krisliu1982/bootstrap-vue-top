<template>
<article class="docs-content prose">
    <h1>Sass</h1>
<p>利用我们的源 Sass 文件，发挥变量、映射、mixin 和函数的优势，帮助你更快地构建并自定义项目。</p>

<h2 id="about-sass">关于 Sass<a class="anchor-link" href="#about-sass" aria-label="链接到 关于 Sass"></a></h2>

<p><a href="https://sass-lang.com/">Sass</a> 是一个 CSS 预处理器，为标准 CSS 增加了变量、嵌套、mixin 和函数等特性。你编写 <code>.scss</code> 文件并编译它们，输出的是浏览器能够理解的普通 CSS。如果你是 Sass 新手，请查阅 <a href="https://sass-lang.com/guide/">Sass 文档</a>学习基础知识。</p>

<p>Bootstrap 使用 Sass 编写。我们的源 <code>.scss</code> 文件使用 Sass 映射定义设计令牌，使用 mixin 生成重复的 CSS 模式，并使用 <code>@use</code>/<code>@forward</code> 模块系统来组织一切。编译时，这些 Sass 文件生成驱动每个 Bootstrap 组件和工具类的 CSS。这让你能够覆盖令牌值、移除未使用的组件，或用自己的添加扩展系统。如果你不需要这种级别的控制，可以完全跳过 Sass，改为在运行时<a href="[[docsref:/getting-started/css-variables]]">通过 CSS 自定义属性自定义</a>。</p>

<div class="callout">
    <p><strong>初次使用 Sass 和 Bootstrap？</strong> 从<a href="[[docsref:/guides/npm]]">我们的 npm 指南</a>开始，获得分步设置，或查看我们的<a href="https://github.com/twbs/examples">示例仓库</a>获取即用型入门项目。</p>
</div>

<h2 id="file-structure">文件结构<a class="anchor-link" href="#file-structure" aria-label="链接到 文件结构"></a></h2>

<p>尽可能避免修改 Bootstrap 的核心文件。对于 Sass 而言，这意味着创建你自己的样式表来导入 Bootstrap，以便修改和扩展它。假设你使用 <a href="https://www.npmjs.com/">npm</a> 或 <a href="https://yarnpkg.com/">yarn</a> 等包管理器，你的文件结构将如下所示：</p>

<pre><code class="language-text">your-project/
├── scss/
│   └── custom.scss
└── node_modules/
│   └── bootstrap/
│       ├── js/
│       └── scss/
└── index.html</code></pre>

<p>如果你下载了我们的源文件且未使用包管理器，你需要手动创建类似的结构，将 Bootstrap 的源文件与你自己的文件分开。</p>

<pre><code class="language-text">your-project/
├── scss/
│   └── custom.scss
├── bootstrap/
│   ├── js/
│   └── scss/
└── index.html</code></pre>

<h2 id="importing">导入<a class="anchor-link" href="#importing" aria-label="链接到 导入"></a></h2>

<p>在你的 <code>custom.scss</code> 中，你将导入 Bootstrap 的源 Sass 文件。你有两个选择：包含整个 Bootstrap，或只挑选你需要的部分。我们鼓励后者，但请注意我们的组件之间存在一些要求和依赖关系。你还需要为我们的插件包含一些 JavaScript。</p>

<pre><code class="language-scss">// Custom.scss
// 选项 A：包含整个 Bootstrap

@use "../node_modules/bootstrap/scss/bootstrap";

// 然后在此处添加额外的自定义代码</code></pre>

<pre><code class="language-scss">// Custom.scss
// 选项 B：包含 Bootstrap 的部分内容

// 1. 首先包含 root（配置、颜色、令牌和 CSS 层）
@use "../node_modules/bootstrap/scss/root";

// 2. 按需包含任何其他局部文件
@use "../node_modules/bootstrap/scss/content";
@use "../node_modules/bootstrap/scss/layout";
@use "../node_modules/bootstrap/scss/forms";
@use "../node_modules/bootstrap/scss/buttons";

// 3. 组件
@use "../node_modules/bootstrap/scss/alert";
@use "../node_modules/bootstrap/scss/card";
// ...

// 4. 辅助类和工具类
@use "../node_modules/bootstrap/scss/helpers";
@use "../node_modules/bootstrap/scss/utilities/api";

// 5. 在此处添加额外的自定义代码</code></pre>

<p>设置就绪后，你就可以开始修改 <code>custom.scss</code> 中的任何 Sass 令牌映射。我们建议以 <code>bootstrap.scss</code> 文件中的完整导入栈作为起点。</p>

<pre><code class="language-scss">// scss/bootstrap.scss（节选）
@forward "root";
@forward "content";
@forward "layout";
@forward "forms";
@forward "buttons";
@forward "alert";
@forward "card";
// ...
@forward "helpers";
@forward "utilities/api";</code></pre>

<h2 id="compiling">编译<a class="anchor-link" href="#compiling" aria-label="链接到 编译"></a></h2>

<p>为了在浏览器中将你的自定义 Sass 代码用作 CSS，你需要一个 Sass 编译器。Sass 以 CLI 包的形式发布，但你也可以使用 <a href="https://gulpjs.com/">Gulp</a> 或 <a href="https://webpack.js.org/">Webpack</a> 等其他构建工具，或 GUI 应用程序来编译它。一些 IDE 也内置了 Sass 编译器，或提供可下载的扩展。</p>

<p>我们喜欢使用 CLI 编译 Sass，但你可以使用你偏好的任何方法。从命令行运行以下命令：</p>

<pre><code class="language-sh"># 全局安装 Sass
npm install -g sass

# 监视你的自定义 Sass 更改并编译为 CSS
sass --watch ./scss/custom.scss ./css/custom.css</code></pre>

<p>在 <a href="https://sass-lang.com/install/">sass-lang.com/install</a> 和<a href="https://code.visualstudio.com/docs/languages/css#_transpiling-sass-and-less-into-css">使用 VS Code 编译</a>了解更多选项。</p>

<div class="callout">
    <p><strong>使用其他构建工具配合 Bootstrap？</strong> 考虑阅读我们关于使用 <a href="[[docsref:/guides/webpack]]">Webpack</a>、<a href="[[docsref:/guides/parcel]]">Parcel</a> 或 <a href="[[docsref:/guides/vite]]">Vite</a> 编译的指南。我们还在 <a href="https://github.com/twbs/examples">GitHub 上的示例仓库</a>中提供了生产就绪的演示。</p>
</div>

<h2 id="including">引入<a class="anchor-link" href="#including" aria-label="链接到 引入"></a></h2>

<p>CSS 编译完成后，你可以在 HTML 文件中引入它。在 <code>index.html</code> 中，你需要引入编译后的 CSS 文件。如果你更改了编译后 CSS 文件的路径，请务必更新。</p>

<pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Custom Bootstrap&lt;/title&gt;
    &lt;link href="/css/custom.css" rel="stylesheet"&gt;&lt;!-- [!code highlight] --&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<h2 id="token-architecture">令牌架构<a class="anchor-link" href="#token-architecture" aria-label="链接到 令牌架构"></a></h2>

<p>Bootstrap v6 使用构建于 CSS 自定义属性之上的分层令牌系统。Sass 映射在编译时定义令牌，CSS 自定义属性从这些映射生成以供运行时使用。</p>

<p>各层从低到高如下：</p>

<ol>
    <li><strong>颜色刻度</strong>（<code>_colors.scss</code>）——在 <code>oklch()</code> 中定义的基础色相变量使用 <code>color-mix()</code> 生成完整色阶（025–975）作为 CSS 自定义属性。例如 <code>--blue-500</code>、<code>--red-200</code>、<code>--gray-900</code>。</li>
    <li><strong>主题颜色</strong>（<code>_theme.scss</code>）——<code>$theme-colors</code> 映射定义语义颜色角色，如 <code>primary</code>、<code>success</code> 和 <code>danger</code>。每个主题颜色是一个嵌套映射，包含子键：<code>base</code>、<code>text</code>、<code>text-emphasis</code>、<code>bg</code>、<code>bg-subtle</code>、<code>bg-muted</code>、<code>border</code>、<code>focus-ring</code> 和 <code>contrast</code>。</li>
    <li><strong>全局令牌</strong>（<code>_theme.scss</code> 和 <code>_root.scss</code>）——用于背景（<code>$theme-bgs</code>）、前景（<code>$theme-fgs</code>）和边框（<code>$theme-borders</code>）的语义令牌与 <code>$root-tokens</code> 映射一起定义，后者将所有内容聚合到 <code>:root</code> CSS 自定义属性中。</li>
    <li><strong>组件令牌</strong>（例如 <code>_alert.scss</code>）——每个组件定义自己的 <code>$*-tokens</code> 映射（例如 <code>$alert-tokens</code>），输出为作用于组件类的 CSS 自定义属性。</li>
</ol>

<h2 id="token-defaults">令牌默认值<a class="anchor-link" href="#token-defaults" aria-label="链接到 令牌默认值"></a></h2>

<p>Bootstrap 中的每个令牌映射都包含 <code>!default</code> 标志，允许你在加载 Bootstrap 文件之前覆盖值。由于 Bootstrap 使用 Sass 模块（<code>@use</code>/<code>@forward</code>），你可以使用 <code>with ()</code> 语法覆盖 <code>!default</code> 变量。对于 CSS 自定义属性令牌，你有两条自定义路径：</p>

<ol>
    <li><strong>编译时</strong>——覆盖生成 CSS 自定义属性的 Sass 映射。</li>
    <li><strong>运行时</strong>——直接在你的样式表中覆盖 CSS 自定义属性，无需 Sass。</li>
</ol>

<h3 id="compile-time-overrides">编译时覆盖<a class="anchor-link" href="#compile-time-overrides" aria-label="链接到 编译时覆盖"></a></h3>

<p>要在编译时覆盖令牌值，请在导入 Bootstrap 时使用 <code>@use ... with ()</code>。你只需包含想要更改的键——Bootstrap 使用 <code>defaults()</code> 函数将你的覆盖与其默认值合并，因此所有其他令牌保持不变。</p>

<pre><code class="language-scss">@use "../node_modules/bootstrap/scss/bootstrap" with (
  $root-tokens: (
    --border-radius: .25rem,
    --spacer: 1.5rem,
  ),
  $alert-tokens: (
    --alert-padding-x: 2rem,
    --alert-border-radius: 1rem,
  )
);</code></pre>

<p>在底层，每个令牌映射使用两步模式：</p>

<pre><code class="language-scss">$alert-tokens: () !default;
$alert-tokens: defaults(
  (
    // 此处为默认令牌
  ),
  $alert-tokens
);</code></pre>

<p><code>() !default</code> 声明接收你的 <code>with()</code> 覆盖。然后 <code>defaults()</code> 将你的条目合并到内置默认值之上，因此未指定的键保留其原始值。任何设置为 <code>null</code> 的键会从映射中完全移除，让你可以丢弃不需要的令牌。</p>

<h3 id="runtime-overrides">运行时覆盖<a class="anchor-link" href="#runtime-overrides" aria-label="链接到 运行时覆盖"></a></h3>

<p>由于令牌作为 CSS 自定义属性输出，你可以直接在 CSS 中覆盖它们，无需任何 Sass 编译：</p>

<pre><code class="language-css">:root {
  --border-radius: .25rem;
  --primary-base: oklch(55% 0.25 260);
  --bg-body: #f8f9fa;
}</code></pre>

<p>你也可以将覆盖作用域限定到特定组件：</p>

<pre><code class="language-css">.alert {
  --alert-padding-x: 2rem;
  --alert-padding-y: 1.5rem;
  --alert-border-radius: 1rem;
}</code></pre>

<div class="callout">
</div>

<h2 id="maps-and-loops">映射与循环<a class="anchor-link" href="#maps-and-loops" aria-label="链接到 映射与循环"></a></h2>

<p>Bootstrap 包含几个 Sass 映射，用于生成相关的 CSS 自定义属性族。这些映射都包含 <code>!default</code> 标志，可以覆盖。</p>

<h3 id="theme-color-map">主题颜色映射<a class="anchor-link" href="#theme-color-map" aria-label="链接到 主题颜色映射"></a></h3>

<p><code>$theme-colors</code> 映射定义语义调色板。每个条目是一个嵌套映射，包含 <code>base</code>、<code>text</code>、<code>bg</code>、<code>border</code> 等子键。完整映射、子键参考和使用示例请参阅<a href="[[docsref:/customize/theme]]">主题文档</a>。</p>

<p>要在编译时添加、修改或移除主题颜色，请通过主入口点使用 <code>@use ... with ()</code> 配置 <code>$theme-colors</code>。<code>defaults()</code> 将你的映射合并到内置映射之上，因此标准主题保持不变，你只需添加所需内容：</p>

<pre><code class="language-scss">@use "../node_modules/bootstrap/scss/bootstrap" with (
  $theme-colors: (
    "brand": (
      "base": var(--indigo-500),
      "fg": light-dark(var(--indigo-600), var(--indigo-400)),
      "fg-emphasis": light-dark(var(--indigo-800), var(--indigo-300)),
      "bg": var(--indigo-500),
      "bg-subtle": light-dark(var(--indigo-100), var(--indigo-900)),
      "bg-muted": light-dark(var(--indigo-200), var(--indigo-800)),
      "border": light-dark(var(--indigo-300), var(--indigo-600)),
      "focus-ring": light-dark(color-mix(in oklch, var(--indigo-500) 50%, var(--bg-body)), color-mix(in oklch, var(--indigo-500) 75%, var(--bg-body))),
      "contrast": var(--white)
    )
  )
);</code></pre>

<div class="callout">
    <p>每个主题颜色是一个<strong>嵌套</strong>映射，因此合并只有一层深度。要更改内置主题的一个子键，请传递该主题的整个子映射。部分子映射会替换主题的其他子键，而非与其合并。要移除主题，请将其键设置为 <code>null</code>。</p>
</div>

<h3 id="global-token-maps">全局令牌映射<a class="anchor-link" href="#global-token-maps" aria-label="链接到 全局令牌映射"></a></h3>

<p>背景（<code>$theme-bgs</code>）、前景（<code>$theme-fgs</code>）和边框（<code>$theme-borders</code>）令牌映射定义语义层颜色。这些也在<a href="[[docsref:/customize/theme#layer-colors]]">主题文档</a>中涵盖。</p>

<h3 id="root-tokens">根令牌（<code>$root-tokens</code>）<a class="anchor-link" href="#root-tokens" aria-label="链接到 根令牌"></a></h3>

<p><code>$root-tokens</code> 映射聚合字体、间距、边框和表单变量等全局设计令牌。主题颜色、背景、前景和边框令牌在输出前合并到其中。</p>

<pre><code class="language-scss">// scss/_root.scss（节选）
$root-tokens: (
  --body-font-family: ...,
  --body-font-size: 1rem,
  --border-radius: ...,
  --spacer: ...,
  // ...
) !default;</code></pre>

<p>所有根令牌都作为 CSS 自定义属性输出到 <code>:root</code>：</p>

<pre><code class="language-scss">// scss/_root.scss（节选）
:root,
:host {
  @include tokens($root-tokens);
}</code></pre>

<h2 id="component-tokens">组件令牌<a class="anchor-link" href="#component-tokens" aria-label="链接到 组件令牌"></a></h2>

<p>每个组件定义自己的令牌映射，输出为作用于组件类的 CSS 自定义属性。这使组件自包含且易于自定义。</p>

<p>以下是警告框组件作为示例：</p>

<pre><code class="language-scss">// scss/_alert.scss（节选）
$alert-tokens: (
  --alert-padding-x: 1rem,
  --alert-padding-y: .75rem,
  --alert-color: ...,
  --alert-bg: ...,
  --alert-border: ...,
  --alert-border-radius: ...,
  // ...
) !default;</code></pre>

<p>令牌使用 <code>tokens()</code> mixin 输出到 <code>.alert</code> 类上：</p>

<pre><code class="language-scss">.alert {
  @include tokens($alert-tokens);

  padding: var(--alert-padding-y) var(--alert-padding-x);
  color: var(--alert-color);
  background-color: var(--alert-bg);
  border: var(--alert-border);
  // ...
}</code></pre>

<h3 id="override-sass-tokens">覆盖 Sass 令牌<a class="anchor-link" href="#override-sass-tokens" aria-label="链接到 覆盖 Sass 令牌"></a></h3>

<p>使用 <code>with ()</code> 在编译时用 Sass 覆盖特定组件令牌值。你的覆盖与默认值合并，因此你只需指定想要更改的键：</p>

<pre><code class="language-scss">@use "../node_modules/bootstrap/scss/bootstrap" with (
  $alert-tokens: (
    --alert-padding-x: 2rem,
    --alert-bg: var(--bg-2),
    --alert-border-radius: 0,
  )
);</code></pre>

<p>这适用于每个组件：<code>$card-tokens</code>、<code>$button-tokens</code>、<code>$menu-tokens</code>、<code>$nav-tokens</code> 等等——任何 <code>$*-tokens</code> 映射都通过相同的合并模式支持部分覆盖。</p>

<h3 id="remove-tokens-with-null">使用 <code>null</code> 移除令牌<a class="anchor-link" href="#remove-tokens-with-null" aria-label="链接到 使用 null 移除令牌"></a></h3>

<p>将任何映射键设置为 <code>null</code> 以完全移除它。<code>defaults()</code> 函数在映射使用前剥离 null 条目，因此不会为这些键生成 CSS：</p>

<pre><code class="language-scss">@use "../node_modules/bootstrap/scss/bootstrap" with (
  $alert-tokens: (
    --alert-margin-bottom: null,
  )
);</code></pre>

<h3 id="override-css-tokens">覆盖 CSS 令牌<a class="anchor-link" href="#override-css-tokens" aria-label="链接到 覆盖 CSS 令牌"></a></h3>

<p>你也可以直接覆盖 CSS 自定义属性，无需 Sass：</p>

<pre><code class="language-css">.alert {
  --alert-padding-x: 2rem;
  --alert-bg: var(--bg-2);
  --alert-border-radius: 0;
}</code></pre>

<h2 id="size-maps">尺寸映射<a class="anchor-link" href="#size-maps" aria-label="链接到 尺寸映射"></a></h2>

<p>除了令牌映射之外，Bootstrap 还使用尺寸映射生成尺寸变体类，如 <code>.btn-sm</code>、<code>.btn-lg</code>、<code>.form-control-sm</code> 等。这些使用相同的 <code>defaults()</code> 函数，并支持相同的覆盖和移除模式。</p>

<p>尺寸映射接受简单的尺寸名称列表：</p>

<pre><code class="language-scss">$button-sizes: () !default;
$button-sizes: defaults(
  ("xs", "sm", "lg"),
  $button-sizes
);</code></pre>

<p>然后循环从每个尺寸名称派生 CSS 自定义属性值：</p>

<pre><code class="language-scss">@each $size, $_ in $button-sizes {
  .btn-#{$size} {
    --btn-min-height: var(--btn-input-#{$size}-min-height);
    --btn-padding-y: var(--btn-input-#{$size}-padding-y);
    // ...
  }
}</code></pre>

<p>要移除某个尺寸，请通过 <code>with()</code> 将其键设置为 <code>null</code>：</p>

<pre><code class="language-scss">@use "../node_modules/bootstrap/scss/bootstrap" with (
  $button-sizes: ("xs": null),
);</code></pre>

<h2 id="variant-maps">变体映射<a class="anchor-link" href="#variant-maps" aria-label="链接到 变体映射"></a></h2>

<p>一些组件使用变体映射生成样式变体。例如，<code>$button-variants</code> 定义 <code>solid</code>、<code>outline</code>、<code>subtle</code> 和 <code>text</code> 按钮样式。这些也由 <code>defaults()</code> 处理，并支持 <code>null</code> 移除：</p>

<pre><code class="language-scss">@use "../node_modules/bootstrap/scss/bootstrap" with (
  $button-variants: (
    "text": null,
    "subtle": null,
  ),
);</code></pre>

<p>这会从编译后的 CSS 中移除 <code>.btn-text</code> 和 <code>.btn-subtle</code> 类，同时保持 <code>.btn-solid</code> 和 <code>.btn-outline</code> 不变。</p>

<h2 id="required-keys">必需的键<a class="anchor-link" href="#required-keys" aria-label="链接到 必需的键"></a></h2>

<p>Bootstrap 假定 Sass 映射中存在一些特定的键，因为我们自己使用和扩展它们。在自定义包含的映射时，你可能会遇到使用特定 Sass 映射键的错误。</p>

<p>对于 <code>$theme-colors</code>，<code>primary</code>、<code>success</code> 和 <code>danger</code> 键是链接、按钮和表单状态所必需的。替换这些键的值应该没有问题，但移除它们可能导致 Sass 编译问题。</p>

<h2 id="functions">函数<a class="anchor-link" href="#functions" aria-label="链接到 函数"></a></h2>

<h3 id="defaults">Defaults<a class="anchor-link" href="#defaults" aria-label="链接到 Defaults"></a></h3>

<p><code>defaults()</code> 函数是 Bootstrap 自定义系统的支柱。它将用户覆盖合并到内置默认令牌之上，并从结果中剥离任何 <code>null</code> 条目。每个令牌映射、尺寸映射和变体映射都使用它：</p>

<pre><code class="language-scss">@function defaults($defaults, $overrides) { ... }</code></pre>

<p>它接受映射或列表作为第一个参数。列表会自动转换为值为 <code>true</code> 的映射，这就是 <code>$button-sizes</code> 等尺寸映射使用简洁的 <code>("xs", "sm", "lg")</code> 语法的方式。</p>

<p><code>defaults()</code> 在特定选择器上通过 <a href="#tokens"><code>tokens()</code> mixin</a> 生成。</p>

<h3 id="color-contrast">颜色对比度<a class="anchor-link" href="#color-contrast" aria-label="链接到 颜色对比度"></a></h3>

<p>为了满足<a href="https://www.w3.org/TR/WCAG/">Web 内容无障碍指南（WCAG）</a>的对比度要求，作者<strong>必须</strong>提供最低<a href="https://www.w3.org/TR/WCAG/#contrast-minimum">文本颜色对比度 4.5:1</a> 和最低<a href="https://www.w3.org/TR/WCAG/#non-text-contrast">非文本颜色对比度 3:1</a>，例外极少。</p>

<p>为此，我们在 Bootstrap 中包含了 <code>color-contrast</code> 函数。它使用 <a href="https://www.w3.org/TR/WCAG/#dfn-contrast-ratio">WCAG 对比度算法</a>，基于 <code>sRGB</code> 颜色空间中的<a href="https://www.w3.org/TR/WCAG/#dfn-relative-luminance">相对亮度</a>计算对比度阈值，根据指定的基础颜色自动返回浅色（<code>#fff</code>）、深色（<code>#212529</code>）或黑色（<code>#000</code>）对比色。此函数对于生成多个类的 mixin 或循环特别有用。</p>

<p>例如，从我们的 <code>$theme-colors</code> 映射生成色板：</p>

<pre><code class="language-scss">@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast(map.get($value, "base"));
  }
}</code></pre>

<h3 id="escape-svg">转义 SVG<a class="anchor-link" href="#escape-svg" aria-label="链接到 转义 SVG"></a></h3>

<p>我们使用 <code>escape-svg</code> 函数为 SVG 背景图像转义 <code>&lt;</code>、<code>&gt;</code> 和 <code>#</code> 字符。使用 <code>escape-svg</code> 函数时，data URI 必须加引号。</p>

<pre><code class="language-scss">// 输入——包含特殊字符的内联 SVG
$icon: url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'&gt;&lt;path fill='none' stroke='#00000080' stroke-width='2' d='m2 5 6 6 6-6'/&gt;&lt;/svg&gt;");

// escape-svg() 之后，&lt;、&gt; 和 # 字符被百分号编码
// 因此 data URI 在 CSS 中可靠工作（例如作为 mask-image 或 background-image）
.element {
  mask-image: escape-svg($icon);
}</code></pre>

<h3 id="map-helpers">映射辅助函数<a class="anchor-link" href="#map-helpers" aria-label="链接到 映射辅助函数"></a></h3>

<p>我们包含几个用于处理映射的 Sass 函数，超越 Sass 原生提供的能力。</p>

<table class="table">
    <thead>
        <tr><th>函数</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td><code>map-merge-multiple($maps...)</code></td><td>将任意数量的映射合并为一个，从左到右处理。</td></tr>
        <tr><td><code>map-get-multiple($map, $values)</code></td><td>返回映射的子集，仅过滤到 <code>$values</code> 中列出的键。</td></tr>
        <tr><td><code>map-get-nested($map, $nested-key)</code></td><td>从每个嵌套映射条目中提取单个属性，返回扁平映射。</td></tr>
    </tbody>
</table>

<h4 id="map-merge-multiple"><code>map-merge-multiple($maps...)</code><a class="anchor-link" href="#map-merge-multiple" aria-label="链接到 map-merge-multiple"></a></h4>

<pre><code class="language-scss">@function map-merge-multiple($maps...) { ... }

// 示例：将间距、负间距和 auto 合并为单个值映射
values: map-merge-multiple($spacers, $negative-spacers, (auto: auto))</code></pre>

<h4 id="map-get-multiple"><code>map-get-multiple($map, $values)</code><a class="anchor-link" href="#map-get-multiple" aria-label="链接到 map-get-multiple"></a></h4>

<pre><code class="language-scss">@function map-get-multiple($map, $values) { ... }

// 示例：仅提取 flex 和 order 工具类
$utilities: map-get-multiple(
  $utilities,
  ("flex", "flex-direction", "flex-grow", "order")
);</code></pre>

<h4 id="map-get-nested"><code>map-get-nested($map, $nested-key)</code><a class="anchor-link" href="#map-get-nested" aria-label="链接到 map-get-nested"></a></h4>

<pre><code class="language-scss">@function map-get-nested($map, $nested-key) { ... }

// 示例：仅从 $font-sizes 的每个条目中提取 "font-size" 值
values: map-get-nested($font-sizes, "font-size")
// 返回：("xs": clamp(...), "sm": clamp(...), ...)</code></pre>

<h4 id="negativify-map"><code>negativify-map($map)</code><a class="anchor-link" href="#negativify-map" aria-label="链接到 negativify-map"></a></h4>

<p>通过为每个键添加 <code>n</code> 前缀并取负值，将映射转换为其负变体。等于 <code>0</code> 的键会被跳过。当自定义工具类需要负值时使用它。</p>

<pre><code class="language-scss">@function negativify-map($map) { ... }

// 示例：从间距刻度的一部分生成负值
$custom-spacers: (0: 0, 1: .25rem, 2: .375rem, 3: .5rem);
$negative-spacers: negativify-map($custom-spacers);
// 返回：("n1": -.25rem, "n2": -.375rem, "n3": -.5rem)</code></pre>

<h3 id="theme-color-values">主题颜色值<a class="anchor-link" href="#theme-color-values" aria-label="链接到 主题颜色值"></a></h3>

<p><code>scss/_theme.scss</code> 中的 <a href="[[docsref:/customize/theme]]"><code>theme-color-values($key)</code></a> 函数从 <code>$theme-colors</code> 映射的每个条目中提取特定子键，返回颜色名称到值的扁平映射。由于每个主题颜色是一个包含 <code>base</code>、<code>text</code>、<code>bg</code>、<code>border</code> 等子键的嵌套映射，此函数让你一次跨所有颜色提取其中一个子键。它为 <code>_utilities.scss</code> 中大多数颜色相关工具类提供支持：</p>

<pre><code class="language-scss">// 在 _utilities.scss 中——生成 .focus-ring-{color} 类
"focus-ring": (
  property: --focus-ring-color,
  class: focus-ring,
  values: theme-color-values("focus-ring"),
),

// 为 .border-{color} 类合并主题颜色背景与语义边框令牌
"border-color": (
  property: (
    "--border-color": null,
    "border-color": var(--border-color)
  ),
  class: border,
  values: map.merge(theme-color-values("bg"), $theme-borders),
),</code></pre>

<h3 id="theme-opacity-values">主题不透明度值<a class="anchor-link" href="#theme-opacity-values" aria-label="链接到 主题不透明度值"></a></h3>

<p><code>scss/_theme.scss</code> 中的 <a href="[[docsref:/customize/theme]]"><code>theme-opacity-values($color-var, $opacities)</code></a> 函数使用 <code>color-mix()</code> 为 CSS 自定义属性生成不透明度变体映射。<code>$opacities</code> 参数默认为 <code>$util-opacity</code>（10 到 100，步长 10）。在 <code>100</code> 时，它直接返回变量；对于所有其他步骤，它将变量与 <code>transparent</code> 混合：</p>

<pre><code class="language-scss">// 在 _utilities.scss 中——生成 .border-{opacity} 类
"border-opacity": (
  class: border,
  property: border-color,
  values: theme-opacity-values(--border-color)
),

// 生成 .fg-{opacity} 类
"fg-opacity": (
  class: fg,
  property: color,
  values: theme-opacity-values(--fg)
),</code></pre>

<h2 id="mixins">Mixin<a class="anchor-link" href="#mixins" aria-label="链接到 Mixin"></a></h2>

<p>我们的 <code>scss/mixins/</code> 目录包含为 Bootstrap 提供支持的代码片段，也可以在你自己的项目中跨项目使用。</p>

<h3 id="tokens">令牌<a class="anchor-link" href="#tokens" aria-label="链接到 令牌"></a></h3>

<p><code>tokens()</code> mixin 将 Sass 映射输出为 CSS 自定义属性。每个组件都使用它来渲染其令牌映射：</p>

<pre><code class="language-scss">// scss/mixins/_tokens.scss（节选）
@mixin tokens($map) {
  @each $property, $value in $map {
    #{$property}: #{$value};
  }
}</code></pre>

<pre><code class="language-scss">.alert {
  @include tokens($alert-tokens);
  // 输出：--alert-padding-x: ...; --alert-padding-y: ...; 等等。
}</code></pre>

<h3 id="color-schemes">颜色方案<a class="anchor-link" href="#color-schemes" aria-label="链接到 颜色方案"></a></h3>

<p>提供了一个用于 <code>prefers-color-scheme</code> 媒体查询的简写 mixin，支持 <code>light</code> 和 <code>dark</code> 颜色方案。关于我们的颜色模式 mixin 的信息，请参阅<a href="[[docsref:/customize/color-modes]]">颜色模式文档</a>。</p>

<pre><code class="language-scss">// scss/mixins/_color-scheme.scss（节选）
@mixin color-scheme($scheme) {
  @media (prefers-color-scheme: #{$scheme}) {
    @content;
  }
}</code></pre>

<pre><code class="language-scss">.custom-element {
  @include color-scheme(light) {
    // 在此处插入浅色模式样式
  }

  @include color-scheme(dark) {
    // 在此处插入深色模式样式
  }
}</code></pre>

<h3 id="theme-classes">主题类<a class="anchor-link" href="#theme-classes" aria-label="链接到 主题类"></a></h3>

<p><code>generate-theme-classes()</code> mixin 遍历 <code>$theme-colors</code> 映射，并为每种颜色输出一个 <code>.theme-*</code> 类。每个类将通用的 <code>--theme-*</code> 自定义属性映射到该颜色的特定值，因此组件可以引用 <code>--theme-base</code>、<code>--theme-bg</code> 等，并从父级 <code>.theme-*</code> 类获取正确的调色板。它还输出 <code>.theme-reset</code>，将这些令牌设置为 <code>initial</code>，以便嵌套组件再次使用自己的默认值：</p>

<pre><code class="language-scss">@include generate-theme-classes();
// 输出：
// .theme-primary { --theme-base: var(--primary-base); --theme-bg: var(--primary-bg); ... }
// .theme-success { --theme-base: var(--success-base); --theme-bg: var(--success-bg); ... }
// .theme-reset { --theme-base: initial; --theme-bg: initial; ... }
// ...</code></pre>

<pre><code class="language-scss">// scss/_theme.scss（节选）
.theme-reset {
  --theme-base: initial;
  --theme-bg: initial;
  // ...
}</code></pre>

<h3 id="mask-icons">遮罩图标<a class="anchor-link" href="#mask-icons" aria-label="链接到 遮罩图标"></a></h3>

<p><code>mask-icon()</code> mixin 通过 CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask"><code>mask</code></a> 渲染 SVG 图标，因此形状使用元素的 <code>background-color</code> 绘制。这让图标继承当前文本颜色，无需单独的 SVG 即可实现自动深色模式。我们将其用于<a href="[[docsref:/components/close-button/]]">关闭按钮</a>、<a href="[[docsref:/components/navbar/]]">导航栏切换器</a>、<a href="[[docsref:/forms/checkbox/]]">复选框标记</a>、<a href="[[docsref:/components/breadcrumb/]]">面包屑分隔符</a>、<a href="[[docsref:/forms/datepicker/]]">日期选择器箭头</a>和<a href="[[docsref:/components/carousel/]]">轮播控件</a>。</p>

<p>某些表单控件无法使用 <code>mask</code>，因为它们不支持伪元素，遮罩会裁剪整个字段。<code>&lt;select&gt;</code> 尖括号和使用 <code>.form-control-caret</code> 的输入是两个示例，它们保留单独的浅色和深色 <code>background-image</code> SVG 作为非遮罩背景图像。</p>

<pre><code class="language-scss">// scss/mixins/_mask-icon.scss（节选）
@mixin mask-icon($icon) {
  --mask-image: #{$icon};
  mask-image: var(--mask-image);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  // ...
}</code></pre>

<p>在元素上自行设置 <code>background-color</code>（mixin 仅输出 <code>mask-*</code> 属性），然后将图标作为遮罩图像传入。当图标有条件应用时（例如按状态或方向），请为图标传入 <code>null</code>。</p>

<pre><code class="language-scss">.custom-icon {
  // 为图标声明自定义 CSS 变量。这可以在同一元素、:root 或父元素上。
  // 我们使用自定义 × 图标。请务必也用 escape-svg() 包裹。
  --custom-icon: #{escape-svg(url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'&gt;&lt;path fill='none' stroke='black' stroke-linecap='round' stroke-width='2' d='m4 4 8 8m0-8-8 8'/&gt;&lt;/svg&gt;"))};

  width: 1rem;
  height: 1rem;
  background-color: currentcolor;
  @include mask-icon($icon: var(--custom-icon));
}</code></pre>

  </article>
  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#about-sass">关于 Sass</a></li>
        <li><a href="#file-structure">文件结构</a></li>
        <li><a href="#importing">导入</a></li>
        <li><a href="#compiling">编译</a></li>
        <li><a href="#including">引入</a></li>
        <li><a href="#token-architecture">令牌架构</a></li>
        <li><a href="#token-defaults">令牌默认值</a>
            <ul>
                <li><a href="#compile-time-overrides">编译时覆盖</a></li>
                <li><a href="#runtime-overrides">运行时覆盖</a></li>
            </ul>
        </li>
        <li><a href="#maps-and-loops">映射与循环</a>
            <ul>
                <li><a href="#theme-color-map">主题颜色映射</a></li>
                <li><a href="#global-token-maps">全局令牌映射</a></li>
                <li><a href="#root-tokens">根令牌</a></li>
            </ul>
        </li>
        <li><a href="#component-tokens">组件令牌</a>
            <ul>
                <li><a href="#override-sass-tokens">覆盖 Sass 令牌</a></li>
                <li><a href="#remove-tokens-with-null">使用 null 移除令牌</a></li>
                <li><a href="#override-css-tokens">覆盖 CSS 令牌</a></li>
            </ul>
        </li>
        <li><a href="#size-maps">尺寸映射</a></li>
        <li><a href="#variant-maps">变体映射</a></li>
        <li><a href="#required-keys">必需的键</a></li>
        <li><a href="#functions">函数</a>
            <ul>
                <li><a href="#defaults">Defaults</a></li>
                <li><a href="#color-contrast">颜色对比度</a></li>
                <li><a href="#escape-svg">转义 SVG</a></li>
                <li><a href="#map-helpers">映射辅助函数</a>
                    <ul>
                        <li><a href="#map-merge-multiple">map-merge-multiple</a></li>
                        <li><a href="#map-get-multiple">map-get-multiple</a></li>
                        <li><a href="#map-get-nested">map-get-nested</a></li>
                        <li><a href="#negativify-map">negativify-map</a></li>
                    </ul>
                </li>
                <li><a href="#theme-color-values">主题颜色值</a></li>
                <li><a href="#theme-opacity-values">主题不透明度值</a></li>
            </ul>
        </li>
        <li><a href="#mixins">Mixin</a>
            <ul>
                <li><a href="#tokens">令牌</a></li>
                <li><a href="#color-schemes">颜色方案</a></li>
                <li><a href="#theme-classes">主题类</a></li>
                <li><a href="#mask-icons">遮罩图标</a></li>
            </ul>
        </li>
    </ul>
</nav>
  </template>