<template>
  <article class="bd-content">
    <h1>优化</h1>
    <p class="lead">让你的项目保持精简、响应式且易于维护，从而提供最佳体验并专注于更重要的工作。</p>

    <h2 id="lean-sass-imports">精简 Sass 导入<a class="anchor-link" href="#lean-sass-imports" aria-label="精简 Sass 导入"></a></h2>
    <p>在资源处理流程中使用 Sass 时，请确保仅 <code>@import</code> 你需要的组件，以优化 Bootstrap。最大的优化空间通常来自 <code>bootstrap.scss</code> 中的 <code>Layout &amp; Components</code> 部分。</p>
    <ScssDocs name="import-stack" file="scss/bootstrap.scss" />
    <p>如果你不使用某个组件，请将其注释掉或完全删除。例如，如果你不使用轮播，移除该导入可以节省编译后 CSS 的一些文件大小。请记住，Sass 导入之间存在一些依赖关系，这可能会使省略某个文件变得更困难。</p>
    <h2 id="lean-javascript">精简 JavaScript<a class="anchor-link" href="#lean-javascript" aria-label="精简 JavaScript"></a></h2>
    <p>
      Bootstrap 的 JavaScript 在主发行文件（<code>bootstrap.js</code> 和 <code>bootstrap.min.js</code>）中包含了所有组件，甚至在 bundle 文件（<code>bootstrap.bundle.js</code> 和 <code>bootstrap.bundle.min.js</code>）中也包含了我们的主要依赖（Popper）。当你通过 Sass 进行自定义时，请务必移除相关的
      JavaScript。
    </p>
    <p>例如，假设你使用自己的 JavaScript 打包工具（如 Webpack、Parcel 或 Vite），你只需导入计划使用的 JavaScript。在下面的示例中，我们展示了如何仅引入模态框的 JavaScript：</p>
    <CodeWrapper
      code="// Import just what we need

// import &#39;bootstrap/js/dist/alert&#39;;
// import &#39;bootstrap/js/dist/button&#39;;
// import &#39;bootstrap/js/dist/carousel&#39;;
// import &#39;bootstrap/js/dist/collapse&#39;;
// import &#39;bootstrap/js/dist/dropdown&#39;;
import &#39;bootstrap/js/dist/modal&#39;;
// import &#39;bootstrap/js/dist/offcanvas&#39;;
// import &#39;bootstrap/js/dist/popover&#39;;
// import &#39;bootstrap/js/dist/scrollspy&#39;;
// import &#39;bootstrap/js/dist/tab&#39;;
// import &#39;bootstrap/js/dist/toast&#39;;
// import &#39;bootstrap/js/dist/tooltip&#39;;
"
      lang="javascript"
    />
    <p>
      这样，你就不会为按钮、轮播和工具提示等组件引入任何你不打算使用的 JavaScript。如果你要导入下拉菜单、工具提示或弹出框，请务必在
      <code>package.json</code> 文件中列出 Popper 依赖。
    </p>
    <Callout>
      <p><strong>注意！</strong><code>bootstrap/js/dist</code> 中的文件使用<strong>默认导出</strong>。要使用它们，请按以下方式操作：</p>
      <CodeWrapper
        code="import Modal from &#39;bootstrap/js/dist/modal&#39;
const modal = new Modal(document.getElementById(&#39;myModal&#39;))
"
        lang="javascript"
      />
    </Callout>
    <h2 id="autoprefixer-browserslistrc">Autoprefixer 与 .browserslistrc<a class="anchor-link" href="#autoprefixer-browserslistrc" aria-label="Autoprefixer 与 .browserslistrc"></a></h2>
    <p>
      Bootstrap 依赖 Autoprefixer 为某些 CSS 属性自动添加浏览器前缀。前缀由 Bootstrap 仓库根目录下的 <code>.browserslistrc</code> 文件决定。如果存在特定浏览器或版本独有的厂商前缀，自定义此浏览器列表并重新编译 Sass 将自动从编译后的 CSS 中移除一些 CSS。
    </p>
    <h2 id="unused-css">未使用的 CSS<a class="anchor-link" href="#unused-css" aria-label="未使用的 CSS"></a></h2>
    <p><em>本节需要帮助，请考虑提交 PR。谢谢！</em></p>
    <p>虽然我们没有关于将<a href="https://github.com/FullHuman/purgecss">PurgeCSS</a>与 Bootstrap 结合使用的预置示例，但社区撰写了一些有用的文章和教程。以下是一些选项：</p>
    <ul>
      <li>
       <a href="https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772">https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772</a>
      </li>
      <li>
       <a href="https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/">https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/</a>
      </li>
    </ul>
    <p>
      最后，这篇
     <a href="https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/">关于未使用 CSS 的 CSS Tricks 文章</a>
      介绍了如何使用 PurgeCSS 及其他类似工具。
    </p>
    <h2 id="minify-and-gzip">压缩与 gzip<a class="anchor-link" href="#minify-and-gzip" aria-label="压缩与 gzip"></a></h2>
    <p>
      请尽可能压缩你提供给访问者的所有代码。如果你使用 Bootstrap 发行文件，请尽量使用压缩版本（由
      <code>.min.css</code> 和 <code>.min.js</code> 扩展名标示）。如果你使用自己的构建系统从源码构建 Bootstrap，请务必为 HTML、CSS 和 JS 实现自己的压缩工具。
    </p>
    <h2 id="non-blocking-files">非阻塞文件<a class="anchor-link" href="#non-blocking-files" aria-label="非阻塞文件"></a></h2>
    <p>虽然压缩和使用压缩传输似乎已经足够，但让文件变为非阻塞文件也是使站点高度优化且足够快的重要一步。</p>
    <p>
      如果你在 Google Chrome 中使用<a href="https://developer.chrome.com/docs/lighthouse/overview/">Lighthouse</a>插件，你可能已经遇到过 FCP。<a href="https://web.dev/articles/fcp">首次内容绘制（First Contentful Paint）</a>指标衡量的是从页面开始加载到页面内容的任何部分渲染到屏幕上的时间。
    </p>
    <p>
      你可以通过延迟非关键的 JavaScript 或 CSS 来改善 FCP。那意味着什么？简单来说，不需要在你的页面首次绘制时出现的 JavaScript 或样式表，应使用
      <code>async</code> 或 <code>defer</code> 属性标记。
    </p>
    <p>这可以确保不太重要的资源稍后加载，并且不会阻塞首次绘制。另一方面，关键资源可以作为内联脚本或样式引入。</p>
    <p>如果你想了解更多相关信息，已经有许多很棒的文章介绍：</p>
    <ul>
      <li>
       <a href="https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/">https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/</a>
      </li>
      <li>
       <a href="https://web.dev/articles/defer-non-critical-css">https://web.dev/articles/defer-non-critical-css</a>
      </li>
    </ul>
    <h2 id="always-use-https">始终使用 HTTPS<a class="anchor-link" href="#always-use-https" aria-label="始终使用 HTTPS"></a></h2>
    <p>
      在生产环境中，你的网站应只能通过 HTTPS 连接访问。HTTPS 可改善所有站点的安全性、隐私性和可用性，而且
     <a href="https://https.cio.gov/everything/">不存在所谓的非敏感网络流量</a>。将网站配置为仅通过 HTTPS 提供服务的步骤因架构和 Web 托管提供商而异，因此超出了本文档的讨论范围。
    </p>
    <p>
      通过 HTTPS 提供服务的站点也应通过 HTTPS 连接访问所有样式表、脚本和其他资源。否则，你将向用户发送
     <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content">混合活动内容</a>，可能导致站点通过更改依赖项而被攻破的潜在漏洞。这可能会引发安全问题，并向用户显示浏览器内警告。无论你是从 CDN 获取 Bootstrap 还是自行提供服务，
      请确保仅通过 HTTPS 连接访问它。
    </p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#lean-sass-imports">精简 Sass 导入</a></li>
      <li><a href="#lean-javascript">精简 JavaScript</a></li>
      <li><a href="#autoprefixer-browserslistrc">Autoprefixer 与 .browserslistrc</a></li>
      <li><a href="#unused-css">未使用的 CSS</a></li>
      <li><a href="#minify-and-gzip">压缩与 gzip</a></li>
      <li><a href="#non-blocking-files">非阻塞文件</a></li>
      <li>
       <a href="#always-use-https">始终使用 HTTPS</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
