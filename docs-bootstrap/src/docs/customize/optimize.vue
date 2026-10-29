<template>
<article class="docs-content prose">
    <h1>优化</h1>
<p>让你的项目保持精简、响应式且可维护，从而交付最佳体验并专注于更重要的工作。</p>

<h2 id="lean-sass-setup">精简 Sass 设置<a class="anchor-link" href="#lean-sass-setup" aria-label="链接到 精简 Sass 设置"></a></h2>

<p>在资源流水线中使用 Sass 时，请确保只 <code>@use</code> 你需要的局部文件来优化 Bootstrap。最大的优化很可能来自 <code>bootstrap.scss</code> 中的 <code>Layout &amp; Components</code> 部分。</p>

<pre><code class="language-scss">// scss/bootstrap.scss（导入栈节选）
// 配置
@forward "functions";
@forward "variables";
@forward "maps";
@forward "mixins";

// 布局与内容
@forward "root";
@forward "content";
@forward "layout";
@forward "forms";
@forward "buttons";

// 组件
@forward "alert";
@forward "badge";
@forward "card";
@forward "accordion";
@forward "carousel";
@forward "dialog";
@forward "drawer";
@forward "menu";
// …

// 辅助类与工具类
@forward "helpers";
@forward "utilities/api";</code></pre>

<p>如果你不使用某个组件，请将其注释掉或完全删除其 <code>@forward</code> 条目。例如，如果你不使用轮播，删除该行以减小编译后 CSS 的文件体积。请记住，Sass 局部文件之间存在一些依赖关系，这可能会使省略某个文件更加困难。</p>

<p>最干净的做法是维护你自己的入口文件，只转发你需要的 Bootstrap 部分，而不是导入整个 <code>bootstrap</code>。将上面的导入栈复制到你自己的样式表中，然后注释掉你不使用的组件：</p>

<pre><code class="language-scss">// custom-bootstrap.scss
@forward "bootstrap/scss/colors";
@forward "bootstrap/scss/root";

// 布局与内容
@forward "bootstrap/scss/content";
@forward "bootstrap/scss/layout";
@forward "bootstrap/scss/forms";
@forward "bootstrap/scss/buttons";

// 组件——只保留你需要的
@forward "bootstrap/scss/alert";
@forward "bootstrap/scss/badge";
@forward "bootstrap/scss/card";
// @forward "bootstrap/scss/accordion";  // 未使用
// @forward "bootstrap/scss/carousel";   // 未使用
// @forward "bootstrap/scss/dialog";     // 未使用

// 辅助类与工具类
@forward "bootstrap/scss/helpers";
@forward "bootstrap/scss/utilities/api";</code></pre>

<p>然后编译你的 <code>custom-bootstrap.scss</code>，而不是 Bootstrap 默认的 <code>bootstrap.scss</code>。只需记得保留 <code>colors</code> 和 <code>root</code>（以及你剩余组件所依赖的任何局部文件），因为框架的其余部分构建在它们定义的变量和令牌之上。</p>

<h2 id="lean-javascript">精简 JavaScript<a class="anchor-link" href="#lean-javascript" aria-label="链接到 精简 JavaScript"></a></h2>

<p>Bootstrap 的 JavaScript 在主分发文件（<code>bootstrap.js</code> 和 <code>bootstrap.min.js</code>）中包含每个组件，甚至在我们的打包文件（<code>bootstrap.bundle.js</code> 和 <code>bootstrap.bundle.min.js</code>）中包含主要依赖（Floating UI 和 Vanilla Calendar Pro）。当你通过 Sass 自定义时，请务必移除相关的 JavaScript。</p>

<p>例如，假设你使用自己的 JavaScript 打包工具（如 Webpack、Parcel 或 Vite），你只需导入计划使用的 JavaScript。在下面的示例中，我们展示如何仅包含对话框的 JavaScript：</p>

<pre><code class="language-js">// 只导入我们需要的

// import 'bootstrap/js/dist/alert'
// import 'bootstrap/js/dist/button'
// import 'bootstrap/js/dist/carousel'
// import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dialog'
// import 'bootstrap/js/dist/menu'
// import 'bootstrap/js/dist/drawer'
// import 'bootstrap/js/dist/popover'
// import 'bootstrap/js/dist/scrollspy'
// import 'bootstrap/js/dist/tab'
// import 'bootstrap/js/dist/toast'
// import 'bootstrap/js/dist/tooltip'</code></pre>

<p>以这种方式导入文件会为其副作用而运行它，从而注册该组件的数据属性 API——因此 <code>data-bs-toggle</code> 及相关功能无需任何额外代码即可继续工作。这样，你就不会为按钮、轮播和工具提示等组件包含任何你无意使用的 JavaScript。如果你导入菜单、工具提示或弹出框，请务必在 <code>package.json</code> 文件中列出 Floating UI 依赖。如果你使用日期选择器，请务必同时列出 Vanilla Calendar Pro 依赖。</p>

<div class="callout">
    <p><strong>注意！</strong> <code>bootstrap/js/dist</code> 中的文件使用<strong>默认导出</strong>。要使用它们，请按以下方式操作：</p>
    <pre><code class="language-js">import Dialog from 'bootstrap/js/dist/dialog'
const dialog = new Dialog(document.getElementById('myDialog'))</code></pre>
</div>

<h2 id="autoprefixer-browserslistrc">Autoprefixer 与 .browserslistrc<a class="anchor-link" href="#autoprefixer-browserslistrc" aria-label="链接到 Autoprefixer 与 .browserslistrc"></a></h2>

<p>Bootstrap 依赖 Autoprefixer 自动为某些 CSS 属性添加浏览器前缀。前缀由我们的 <code>.browserslistrc</code> 文件决定，该文件位于 Bootstrap 仓库根目录以及 npm 包根目录（<code>node_modules/bootstrap/.browserslistrc</code>）。自定义此浏览器列表并重新编译 Sass，如果存在该浏览器或版本专属的厂商前缀，编译后的 CSS 中将自动移除部分 CSS。</p>

<h2 id="unused-css">未使用的 CSS<a class="anchor-link" href="#unused-css" aria-label="链接到 未使用的 CSS"></a></h2>

<p><a href="https://github.com/FullHuman/purgecss">PurgeCSS</a> 会分析你的标记并剥离任何它找不到使用中的 CSS 选择器，这可以大幅缩减 Bootstrap 编译后的 CSS。以下设置假设项目由静态 HTML 页面和 Bootstrap 的 JavaScript 组成。</p>

<p>首先，将 PurgeCSS 安装为开发依赖：</p>

<pre><code class="language-sh">npm install --save-dev purgecss</code></pre>

<p>然后在项目根目录添加一个 <code>purgecss.config.js</code>：</p>

<pre><code class="language-js">// purgecss.config.js
export default {
  // 扫描实际使用中的类名的文件
  content: ['./**/*.html', './**/*.js'],
  // 你编译后的 Bootstrap CSS（以及你自己的 CSS）
  css: ['./css/bootstrap.css'],
  output: './css/bootstrap.purged.css',
  // Bootstrap 6 在类名中使用“:”（例如 `md:d-none`、`hover:opacity-50`），
  // 因此提取器必须保留冒号和斜杠。
  defaultExtractor: content =&gt; content.match(/[\w-/:]+(?&lt;!:)/g) || [],
  safelist: {
    // Bootstrap 的 JS 在运行时添加的、从不出现在你 HTML 中的类
    standard: ['show', 'active', 'hiding', 'dialog-open'],
    // 保留动态生成或切换的组件家族
    greedy: [/^carousel/, /^menu/, /^drawer/, /^dialog/, /^tooltip/, /^popover/]
  }
}</code></pre>

<p>将其作为构建的一部分运行，将 PurgeCSS 指向该配置：</p>

<pre><code class="language-sh">npx purgecss --config purgecss.config.js</code></pre>

<p>然后提供 <code>bootstrap.purged.css</code> 而非完整文件。</p>

<div class="callout">
    <p><strong>净化后请彻底测试。</strong> Bootstrap 使用 JavaScript 切换许多类（<code>.show</code>、<code>.active</code>、<code>.hiding</code> 等）并动态生成其他类（轮播、菜单、对话框）。PurgeCSS 在其扫描的文件中找不到的任何内容都会被移除，因此请使用 <code>safelist</code> 选项保护运行时类，并验证每个交互组件仍然正常工作。</p>
</div>

<p>如需更深入的讲解，社区撰写了一些有用的指南：</p>

<ul>
    <li><a href="https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772">使用 PurgeCSS 从 Bootstrap 中移除未使用的 CSS 样式</a></li>
    <li><a href="https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/">自动从 Bootstrap 或其他框架中移除未使用的 CSS</a></li>
    <li><a href="https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/">CSS-Tricks：如何从站点中移除未使用的 CSS？</a></li>
</ul>

<h2 id="minify-and-gzip">压缩与 gzip<a class="anchor-link" href="#minify-and-gzip" aria-label="链接到 压缩与 gzip"></a></h2>

<p>尽可能确保压缩你向访问者提供的所有代码。如果你使用 Bootstrap 分发文件，请尽量使用压缩版本（由 <code>.min.css</code> 和 <code>.min.js</code> 扩展名标识）。如果你使用自己的构建系统从源代码构建 Bootstrap，请务必为 HTML、CSS 和 JS 实现自己的压缩器。</p>

<h2 id="non-blocking-files">非阻塞文件<a class="anchor-link" href="#non-blocking-files" aria-label="链接到 非阻塞文件"></a></h2>

<p>虽然压缩和使用 gzip 可能看起来已经足够，但让文件成为非阻塞文件也是使站点良好优化和足够快速的重要一步。</p>

<p>如果你在 Google Chrome 中使用 <a href="https://developer.chrome.com/docs/lighthouse/overview/">Lighthouse</a> 插件，你可能遇到过 FCP。<a href="https://web.dev/articles/fcp">首次内容绘制</a>指标衡量从页面开始加载到页面内容的任何部分渲染到屏幕上的时间。</p>

<p>你可以通过延迟非关键的 JavaScript 或 CSS 来改善 FCP。这是什么意思？简单来说，不需要在页面首次绘制时出现的 JavaScript 或样式表应标记为 <code>async</code> 或 <code>defer</code> 属性。</p>

<p>这确保较不重要的资源稍后加载，不会阻塞首次绘制。另一方面，关键资源可以作为内联脚本或样式包含。</p>

<p>如果你想了解更多相关信息，已经有很多关于此的优秀文章：</p>

<ul>
    <li><a href="https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/">https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/</a></li>
    <li><a href="https://web.dev/articles/defer-non-critical-css">https://web.dev/articles/defer-non-critical-css</a></li>
</ul>

<h2 id="always-use-https">始终使用 HTTPS<a class="anchor-link" href="#always-use-https" aria-label="链接到 始终使用 HTTPS"></a></h2>

<p>你的网站在生产环境中应仅通过 HTTPS 连接提供。HTTPS 改善所有站点的安全性、隐私性和可用性，而且不存在所谓的非敏感网络流量。将网站配置为仅通过 HTTPS 提供的步骤因你的架构和 Web 托管提供商而异，因此超出了本文档的范围。</p>

<p>通过 HTTPS 提供的站点也应通过 HTTPS 连接访问所有样式表、脚本和其他资源。否则，你将向用户发送<a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Mixed_content">混合活动内容</a>，导致潜在漏洞，站点可能通过更改依赖项而被攻破。这可能导致安全问题并向用户显示浏览器警告。无论你从 CDN 获取 Bootstrap 还是自行提供，请确保仅通过 HTTPS 连接访问它。</p>

  </article>
  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#lean-sass-setup">精简 Sass 设置</a></li>
        <li><a href="#lean-javascript">精简 JavaScript</a></li>
        <li><a href="#autoprefixer-browserslistrc">Autoprefixer 与 .browserslistrc</a></li>
        <li><a href="#unused-css">未使用的 CSS</a></li>
        <li><a href="#minify-and-gzip">压缩与 gzip</a></li>
        <li><a href="#non-blocking-files">非阻塞文件</a></li>
        <li><a href="#always-use-https">始终使用 HTTPS</a></li>
    </ul>
</nav>
  </template>