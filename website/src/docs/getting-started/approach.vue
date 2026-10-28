<template>
<article class="docs-content prose">
    <h1>实现思路</h1>
    <p>了解用于构建和维护 Bootstrap 的指导原则、策略与技巧，以便你更轻松地自定义和扩展它。</p>
    <h2 id="sass--css">
  Sass &amp; CSS
  <a class="anchor-link" href="#sass--css" aria-label="链接到Sass &amp; CSS章节"></a>
</h2>

<p>Bootstrap 6 带来了一种新理念：将 Sass 与 CSS 结合使用，针对你的具体需求构建和自定义项目。概括来说：</p>

<ul>
<li><strong>Sass 用于程序化配置——</strong> 函数、循环、mixin 等生成式构造。</li>
<li><strong>CSS 用于视觉定制——</strong> 用 CSS 变量控制颜色、间距、排版等视觉属性。</li>
</ul>

<p>以往的大版本把 Sass 同时当作程序化配置和视觉定制的手段，CSS 变量只是更复杂、更不完整的第二层。v6 对此做了大幅改进。</p>

<p>此外，我们使用 <a href="https://postcss.org/">PostCSS</a> 为 <a href="https://github.com/twbs/postcss-prefix-custom-properties">CSS 变量添加 <code>bs-</code> 前缀</a>，并按需为 CSS 属性添加厂商前缀。</p>

<h3 id="sass">
  Sass
  <a class="anchor-link" href="#sass" aria-label="链接到Sass章节"></a>
</h3>

<p>Sass 用于以下用途：</p>

<ul>
<li>导入（<code>@use</code> 和 <code>@forward</code>）会编译成 CSS 的各个样式表。</li>
<li>用 mixin 和函数管理重复的代码片段。</li>
<li>开关全局选项，如 <code>$enable-smooth-scroll</code>、<code>$enable-reduced-motion</code> 等。</li>
<li>通过 Sass map、循环等配置并生成组件变体（主题色、尺寸等）。</li>
<li>为每种颜色的每个色调和明暗批量生成 CSS 变量。</li>
<li>管理组件 token 列表（例如 <code>$alert-tokens</code>）并将它们应用到特定类。</li>
<li>驱动 utilities API 以自定义和生成工具类。</li>
</ul>

<h3 id="css">
  CSS
  <a class="anchor-link" href="#css" aria-label="链接到CSS章节"></a>
</h3>

<p>虽然你可以用 Sass 自定义 Bootstrap 的外观，但现在更推荐尽可能使用 CSS 变量，包括在使用 Sass 时。以下是我们使用 CSS 的方式：</p>

<ul>
<li>自定义单个全局和组件 token，如 <code>--bs-border-radius</code>、<code>--bs-alert-padding-x</code> 等。</li>
<li>使用 Sass 的 <code>with (...tokens)</code> 语法覆盖默认值来定制 token 值。</li>
<li>混合颜色，为每种色相生成色调和明暗。</li>
<li>使用 <code>calc()</code> 基于另一个 token 或 CSS 变量的值计算动态值。</li>
</ul>

<h3 id="examples">
  Examples
  <a class="anchor-link" href="#examples" aria-label="链接到Examples章节"></a>
</h3>

<p>下面是我们如何混合使用 Sass 和 CSS 来自定义 Bootstrap。Sass 帮助我们管理特性并访问生成式 token，CSS 则让我们自定义单个 token 和值。在我们几乎所有的组件中，都会建立一个“tokens”的 Sass map，它们实际上就是 CSS 变量。使用这个 map，我们在组件的类上生成 CSS 自定义属性。</p>

<p>例如，alert 组件有一个 <code>$alert-tokens</code> map，用于在 <code>.alert</code> 类上生成 CSS 自定义属性。</p>

<CodeWrapper code="$alert-tokens: (
  --alert-padding-x: 2rem,
  --alert-border-radius: 1rem,
  // …
);

.alert {
  @include tokens($alert-tokens);
  // …
}" lang="scss" />

<p>在实际项目里，这意味着你可以用 Sass 的模块系统在构建时覆盖某个特定组件、甚至全局的 CSS 变量。</p>

<CodeWrapper code='@use "../node_modules/bootstrap/scss/bootstrap" with (
  // Manage global options
  $enable-smooth-scroll: true,

  // Modify global tokens
  $root-tokens: (
    --border-radius: .25rem,
    --spacer: 1.5rem,
  ),

  // Modify component tokens
  $alert-tokens: (
    --alert-padding-x: calc(var(--spacer) * 2),
    --alert-border-radius: 1rem,
  ),
);' lang="scss" />


<p>下面是一个 Sass 专属的例子，用 CSS 不容易达到同样效果。以下代码会从 <code>button-variants</code> map 中移除 <code>text</code> 和 <code>subtle</code> 变体，并覆盖 <code>button-sizes</code> map 只保留 <code>sm</code> 和 <code>lg</code> 尺寸。</p>

<CodeWrapper code='@use "../node_modules/bootstrap/scss/bootstrap" with (
  // Modify button sizes to remove default `xs` size
  $button-sizes: ("sm", "lg"),

  // Remove default `text` and `subtle` button variants with `null`
  $button-variants: (
    "text": null,
    "subtle": null,
  ),
);' lang="scss" />

<p>下面是一个只用纯 CSS 从编译后的 CSS 自定义 CSS 变量的例子。凡是使用 <code>var(--bs-border-radius)</code> 的地方，都会被替换为 <code>.25rem</code>。</p>

<CodeWrapper code=":root {
  --border-radius: .25rem;
  --spacer: 1.5rem;
}" lang="css" />

<h2 id="modern-essentials">
  现代基础
  <a class="anchor-link" href="#modern-essentials" aria-label="链接到现代基础章节"></a>
</h2>

<p>Bootstrap 采用了一些重要的全局样式和设置，旨在规范化浏览器样式、启用响应式和移动优先设计，并提供现代化的构建基础。</p>

<h3 id="responsive-design">
  响应式设计
  <a class="anchor-link" href="#responsive-design" aria-label="链接到响应式设计章节"></a>
</h3>

<p>响应式网页设计是指构建一个能根据查看设备视口尺寸做出响应的网站。这通过范围媒体查询实现，根据视口尺寸对网站应用不同样式。</p>

<CodeWrapper code="@media (width < 768px) {
  .container {
    max-width: 100%;
  }
}" lang="css" />

<p>Bootstrap 内置了多个响应式层级（断点），允许你从小型移动设备到大型桌面屏幕逐层叠加样式。这为你提供了非常灵活且强大的方式来构建可针对任意尺寸设备优化的网站。</p>

<h3 id="html5-doctype">
  HTML5 doctype
  <a class="anchor-link" href="#html5-doctype" aria-label="链接到HTML5 doctype章节"></a>
</h3>

<p>Bootstrap 要求使用 HTML5 doctype。缺少它，你会看到一些奇怪且不完整的样式。</p>

<CodeWrapper code='<!doctype html>
<html lang="en">
  …
</html>' lang="html" />

<h3 id="viewport-meta">
  视口 meta 标签
  <a class="anchor-link" href="#viewport-meta" aria-label="链接到视口 meta 标签章节"></a>
</h3>

<p>Bootstrap 采用<em>移动优先</em>开发策略：先为移动设备优化代码，再通过 CSS 媒体查询按需放大组件。为确保所有设备正确渲染和触摸缩放，请在 <code>&lt;head&gt;</code> 中添加响应式 viewport meta 标签。</p>

<CodeWrapper code='<!doctype html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    …
  </head>
  <body>
    …
  </body>
</html>' lang="html" />

<p>你可以在<a href="/docs/guides/quickstart">快速开始</a>中看到实际示例。</p>

<h3 id="box-sizing">
  盒尺寸(box-sizing)
  <a class="anchor-link" href="#box-sizing" aria-label="链接到Box-sizing章节"></a>
</h3>

<p>为了让 CSS 尺寸计算更直接，我们将全局 <code>box-sizing</code> 从 <code>content-box</code> 改为 <code>border-box</code>。这确保 <code>padding</code> 不影响元素的最终计算宽度。</p>

<p>极少数需要覆盖时，可以这样写：</p>

<CodeWrapper code=".your-selector {
  box-sizing: content-box;
}" lang="css"/>

<p>在 <a href="https://css-tricks.com/box-sizing/">CSS Tricks 上了解更多盒模型与尺寸</a>。</p>

<h3 id="reboot">
  重置样式
  <a class="anchor-link" href="#reboot" aria-label="链接到重置样式章节"></a>
</h3>

<p>为改善跨浏览器渲染，我们使用 <a href="/docs/content/reboot">Reboot</a> 来修正浏览器和设备之间的不一致，同时为常见 HTML 元素提供略微更有主见的重置样式。</p>

<h3 id="browser-support">
  浏览器支持
  <a class="anchor-link" href="#browser-support" aria-label="链接到浏览器支持章节"></a>
</h3>

<p>你可以在<a href="https://github.com/twbs/bootstrap/blob/v6.0.0-alpha.1/.browserslistrc">我们的 <code>.browserslistrc</code> 文件</a>中找到支持的浏览器范围及版本。各版本背后的原因以及这些下限带来的与未带来的平台特性，请参阅<a href="/docs/getting-started/browsers-devices">浏览器与设备</a>。</p>

<CodeWrapper code="last 2 major versions
not dead
unreleased versions

Chrome >= 130
Edge >= 130
Firefox >= 132
iOS >= 18.0
Safari >= 18.0

not and_uc > 0
not and_qq > 0
not kaios > 0
not op_mini all" lang="plaintext" />

<p>如果你通过 npm 安装 Bootstrap，也可以在本地 <code>node_modules/bootstrap/.browserslistrc</code> 找到该文件。</p>

<p>我们使用 <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> 通过 CSS 前缀处理目标浏览器支持，它使用 <a href="https://github.com/browserslist/browserslist">Browserslist</a> 管理这些浏览器版本。如何将这些工具集成到你的项目，请参阅它们的文档。</p>

<h2 id="guiding-principles">
  指导原则
  <a class="anchor-link" href="#guiding-principles" aria-label="链接到指导原则章节"></a>
</h2>

<p>除了 Bootstrap 做了什么，这里还有我们<em>为什么</em>这样做——我们在 Web 上构建的理念。概括来说，指导我们方法的原则是：</p>

<ul>
<li>组件应当响应式且移动优先</li>
<li>组件应当基于一个基类构建，并通过修饰类扩展</li>
<li>组件状态应遵循统一的 <code>z-index</code> 层级</li>
<li>优先使用 HTML 和 CSS 实现，而非 JavaScript</li>
<li>优先使用工具类，而非自定义样式</li>
<li>避免强制严格的 HTML 结构要求（直接子元素选择器）</li>
</ul>

<p>这些规则无法总是照字面执行，但我们会尽可能遵循。</p>

<h3 id="responsive">
  响应式
  <a class="anchor-link" href="#responsive" aria-label="链接到响应式章节"></a>
</h3>

<p>Bootstrap 的样式是移动优先的——随着视口增大我们添加样式，而不是在视口缩小时覆盖样式。并非每个组件都必须完全响应式，但这种方式减少了 CSS 覆盖。</p>

<p>我们使用范围媒体查询（例如 <code>width &gt;= 768px</code>）在特定断点应用样式，并向上延续到更大的断点。例如，<code>.d-none</code> 从 <code>min-width: 0</code> 一直生效到无穷大。另一方面，<code>.md:d-none</code> 从中等断点及以上生效。</p>

<h3 id="classes">
  样式类
  <a class="anchor-link" href="#classes" aria-label="链接到样式类章节"></a>
</h3>

<p>除 <a href="/docs/content/reboot">Reboot</a> 外，我们尽量只把类用作选择器。在可行的情况下，我们避免类型选择器和多余的父选择器，以获得更大的灵活性。</p>

<p>组件通常以一个基类承载共享的属性-值对。例如 <code>.btn</code>、<code>.btn-solid</code> 和 <code>.theme-primary</code>。我们用 <code>.btn</code> 承载 <code>display</code>、<code>padding</code>、<code>border-width</code> 等所有通用样式，再用 <code>.btn-solid.theme-primary</code> 这样的变体和主题修饰类添加更多样式。</p>

<p>这降低了复杂度、精简了代码，并形成更可扩展的系统。</p>

<h3 id="z-index-scales">
  z-index 层级
  <a class="anchor-link" href="#z-index-scales" aria-label="链接到z-index层级章节"></a>
</h3>

<p>Bootstrap 中使用两个 <code>z-index</code> 层级——组件内元素和覆盖层组件。</p>

<p>Bootstrap 中有些组件用重叠元素来避免修改 <code>border</code> 属性而产生双边框，例如按钮组、输入框组和分页。这些组件共享 <code>0</code> 到 <code>3</code> 的标准 <code>z-index</code> 层级，符合我们对用户最高优先级的预期。</p>

<ul>
<li><code>0</code> 用于默认状态（初始状态，实际未设置）</li>
<li><code>1</code> 用于 <code>:hover</code>，最低，因为虽然它表示用户意图，但几乎<em>任何</em>东西都可以被悬停。</li>
<li><code>2</code> 用于 <code>:active</code>/<code>.active</code>，第二高，因为它们表示状态。</li>
<li><code>3</code> 用于 <code>:focus</code>，最高，因为聚焦元素在视野内并处于用户注意中心。</li>
</ul>

<p>使用覆盖层构建的组件也有预定义的 z-index 层级，从 <code>1000</code> 开始。这个起始数字是任意选的，作为我们样式与你项目自定义样式之间的小缓冲。</p>

<CodeWrapper code="$zindex-levels: (
  n1: -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  menu: 1000,
  sticky: 1010,
  fixed: 1020,
  drawer: 1030,
  dialog: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070,
);" lang="scss" label="scss/_config.scss"/>

<p>每个覆盖层组件都会略微提高其 <code>z-index</code> 值，使得常见 UI 原则下用户聚焦或悬停的元素始终保持在视野内。例如，模态对话框会阻塞文档（即除对话框操作外你不能做其他操作），所以我们把它放在导航栏之上。</p>

<p>更多内容请参阅我们的 <a href="/docs/layout/z-index"><code>z-index</code> 布局页面</a>。</p>

<h3 id="html-and-css-over-js">
  优先 HTML 与 CSS 而非 JS
  <a class="anchor-link" href="#html-and-css-over-js" aria-label="链接到优先HTML 与 CSS 而非 JS章节"></a>
</h3>

<p>只要可能，我们优先使用 HTML 和 CSS 而非 JavaScript——它们对所有经验水平的人都更易上手，在浏览器中也更快。这就是为什么我们的一等 JavaScript API 是 <code>data</code> 属性——它让你写更多 HTML 而不是 JavaScript。更多内容请阅读<a href="/docs/getting-started/javascript#data-attributes">我们的 JavaScript 概览</a>。</p>

<p>我们的样式建立在浏览器基本行为之上。例如，虽然你可以把 <code>.btn</code> 放在几乎任何元素上，但我们更倾向于 <code>&lt;button&gt;</code> 和 <code>&lt;a&gt;</code> 的语义价值。对于表单验证，我们把样式限定在 <code>data-bs-validate</code> 之后，并使用 <code>:user-invalid</code> 伪类，让反馈只在用户交互后出现——而不是在页面初次加载时。</p>

<h3 id="utilities">
  工具类
  <a class="anchor-link" href="#utilities" aria-label="链接到工具类章节"></a>
</h3>

<p>工具类——单一、不可变的属性-值配对，如 <code>.d-block</code> 对应 <code>display: block;</code>——有助于减少 CSS 冗余并提升性能。它们加快 HTML 编写，并通过把重复的属性-值对合并为可复用类来减少自定义 CSS。我们尽量使用它们，而不是额外写 CSS。</p>

<h3 id="code-conventions">
  代码约定
  <a class="anchor-link" href="#code-conventions" aria-label="链接到代码约定章节"></a>
</h3>

<p><a href="https://codeguide.co/">Code Guide</a> 记录了我们的 HTML 和 CSS 写法——涵盖格式、默认值、属性顺序等。我们通过 <a href="https://stylelint.io/">Stylelint</a> 和<a href="https://github.com/twbs/stylelint-config-twbs-bootstrap">我们的开源配置</a>来强制执行这些标准。</p>

<h2 id="community">
  社区
  <a class="anchor-link" href="#community" aria-label="链接到社区章节"></a>
</h2>

<p>通过以下资源了解 Bootstrap 的最新开发动态并与社区交流。</p>

<ul>
<li>阅读并订阅<a href="https://blog.getbootstrap.com/">官方 Bootstrap 博客</a>。</li>
<li>在<a href="https://github.com/orgs/twbs/discussions">我们的 GitHub Discussions</a> 提问和探索。</li>
<li>在<a href="https://discord.gg/bZUvakRU3M">社区 Discord</a> 或 <a href="https://www.reddit.com/r/bootstrap/">Bootstrap subreddit</a> 讨论、提问等。</li>
<li>在 IRC 上与其他 Bootstrapper 聊天。服务器 <code>irc.libera.chat</code>，频道 <code>#bootstrap</code>。</li>
<li>实现方面的帮助可以在 Stack Overflow 找到（标签 <a href="https://stackoverflow.com/questions/tagged/bootstrap-5"><code>bootstrap-5</code></a>）。</li>
<li>在 <a href="https://www.npmjs.com/search?q=keywords:bootstrap">npm</a> 上分发 Bootstrap 相关包的开发者应使用 <code>bootstrap</code> 关键字以便被发现。</li>
</ul>

<p>你也可以在 X 上关注 <a href="https://x.com/getbootstrap">@getbootstrap</a> 获取最新八卦和精彩音乐视频。</p>
  </article>
<nav class="docs-toc" id="table-of-contents" aria-label="目录">
  <ul>
    <li>
      <a href="#sass--css">Sass 与 CSS</a>
      <ul>
        <li><a href="#sass">Sass</a></li>
        <li><a href="#css">CSS</a></li>
        <li><a href="#examples">示例</a></li>
      </ul>
    </li>
    <li>
      <a href="#modern-essentials">现代基础</a>
      <ul>
        <li><a href="#responsive-design">响应式设计</a></li>
        <li><a href="#html5-doctype">HTML5 doctype</a></li>
        <li><a href="#viewport-meta">视口 meta 标签</a></li>
        <li><a href="#box-sizing">盒尺寸(box-sizing)</a></li>
        <li><a href="#reboot">重置样式</a></li>
        <li><a href="#browser-support">浏览器支持</a></li>
      </ul>
    </li>
    <li>
      <a href="#guiding-principles">指导原则</a>
      <ul>
        <li><a href="#responsive">响应式</a></li>
        <li><a href="#classes">样式类</a></li>
        <li><a href="#z-index-scales">z-index 层级</a></li>
        <li><a href="#html-and-css-over-js">优先 HTML 与 CSS 而非 JS</a></li>
        <li><a href="#utilities">工具类</a></li>
        <li><a href="#code-conventions">代码约定</a></li>
      </ul>
    </li>
    <li>
      <a href="#community">社区</a>
    </li>
  </ul>
</nav>
</template>