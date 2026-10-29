<template>
   <h1>Bootstrap 与 Vite</h1>
<p>使用 Vite 在项目中引入并打包 Bootstrap 的 CSS 和 JavaScript 的官方指南。</p>

<img class="d-block mx-auto mb-4 img-fluid rounded-3" srcset="/docs/[[config:docs_version]]/assets/img/guides/bootstrap-vite.png, /docs/[[config:docs_version]]/assets/img/guides/bootstrap-vite@2x.png 2x" src="/docs/[[config:docs_version]]/assets/img/guides/bootstrap-vite.png" width="1000" height="500" alt="" />

<div class="callout">
    <p><strong>想直接跳到结尾？</strong> 从 <a href="https://github.com/twbs/examples/tree/main/vite">twbs/examples 仓库</a>下载本指南的源代码和可运行示例。你也可以<a href="https://stackblitz.com/github/twbs/examples/tree/main/vite?file=index.html">在 StackBlitz 中打开该示例</a>进行实时编辑。</p>
</div>

<div class="callout">
    <p><strong>使用 AI 编程代理？</strong> 让它指向我们的 <a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-vite"><code>bootstrap-vite</code> 技能</a>以自动化此设置。有关所有可用技能，请参阅 <a href="[[docsref:/getting-started/ai]]">AI</a>。</p>
</div>

<h2 id="what-is-vite">什么是 Vite？<a class="anchor-link" href="#what-is-vite" aria-label="链接到 什么是 Vite？"></a></h2>

<p><a href="https://vite.dev/">Vite</a> 是一个现代前端构建工具，专为速度和简洁性而设计。它提供了高效、精简的开发体验，尤其适用于现代 JavaScript 框架。</p>

<h2 id="setup">设置<a class="anchor-link" href="#setup" aria-label="链接到 设置"></a></h2>

<p>我们将从零开始构建一个使用 Bootstrap 的 Vite 项目，因此在真正开始之前有一些前提条件和前期步骤。本指南要求你已安装 Node.js 并对终端有一定熟悉度。</p>

<ol>
    <li>
        <p><strong>创建项目文件夹并设置 npm。</strong> 我们将创建 <code>my-project</code> 文件夹并使用 <code>-y</code> 参数初始化 npm，以避免它询问所有交互式问题。</p>
        <pre><code class="language-sh">mkdir my-project &amp;&amp; cd my-project
npm init -y</code></pre>
    </li>
    <li>
        <p><strong>安装 Vite。</strong> 与我们的 Webpack 指南不同，这里只有一个构建工具依赖项。我们使用 <code>--save-dev</code> 表示此依赖项仅用于开发而非生产环境。</p>
        <pre><code class="language-sh">npm i --save-dev vite</code></pre>
    </li>
    <li>
        <p><strong>安装 Bootstrap。</strong> 现在我们可以安装 Bootstrap。我们还会安装 Floating UI 和 Vanilla Calendar Pro，因为我们的一些组件依赖它们。如果你不打算使用菜单、弹出框或工具提示，可以省略 Floating UI。如果你不打算使用日期选择器，可以省略 Vanilla Calendar Pro。</p>
        <pre><code class="language-sh">npm i --save bootstrap @floating-ui/dom vanilla-calendar-pro</code></pre>
    </li>
    <li>
        <p><strong>安装额外依赖项。</strong> 除了 Vite 和 Bootstrap 之外，我们还需要另一个依赖项（Sass）来正确导入和打包 Bootstrap 的 CSS。</p>
        <pre><code class="language-sh">npm i --save-dev sass</code></pre>
    </li>
</ol>

<p>现在我们已经安装了所有必要的依赖项并完成了设置，可以开始创建项目文件并导入 Bootstrap 了。</p>

<h2 id="project-structure">项目结构<a class="anchor-link" href="#project-structure" aria-label="链接到 项目结构"></a></h2>

<p>我们已经创建了 <code>my-project</code> 文件夹并初始化了 npm。现在我们将创建 <code>src</code> 文件夹、样式表和 JavaScript 文件，以完善项目结构。在 <code>my-project</code> 中运行以下命令，或手动创建下面显示的文件夹和文件结构。</p>

<pre><code class="language-sh">mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js</code></pre>

<p>完成后，你的完整项目应如下所示：</p>

<pre><code class="language-text">my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│   |   └── styles.scss
|   └── index.html
├── package-lock.json
├── package.json
└── vite.config.js</code></pre>

<p>此时，所有内容都在正确的位置，但 Vite 还无法工作，因为我们尚未填写 <code>vite.config.js</code>。</p>

<h2 id="configure-vite">配置 Vite<a class="anchor-link" href="#configure-vite" aria-label="链接到 配置 Vite"></a></h2>

<p>依赖项已安装，项目文件夹已准备好开始编码，我们现在可以配置 Vite 并在本地运行项目。</p>

<ol>
    <li>
        <p><strong>在编辑器中打开 <code>vite.config.js</code>。</strong> 由于它是空的，我们需要添加一些样板配置以便启动服务器。这部分配置告诉 Vite 在哪里查找项目的 JavaScript，以及开发服务器应如何行为（从 <code>src</code> 文件夹拉取并支持热重载）。</p>
        <pre><code class="language-js">import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}</code></pre>
    </li>
    <li>
        <p><strong>接下来填写 <code>src/index.html</code>。</strong> 这是 Vite 将在浏览器中加载的 HTML 页面，用于使用我们将在后续步骤中添加的打包 CSS 和 JS。</p>
        <pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Bootstrap w/ Vite&lt;/title&gt;
    &lt;script type="module" src="./js/main.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="container py-4 px-3 mx-auto"&gt;
      &lt;h1&gt;Hello, Bootstrap and Vite!&lt;/h1&gt;
      &lt;button class="btn-solid theme-primary"&gt;Primary button&lt;/button&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        <p>我们在这里通过 <code>div class="container"</code> 和 <code>&lt;button&gt;</code> 引入了一点 Bootstrap 样式，以便我们看到 Bootstrap 的 CSS 已被 Vite 加载。</p>
    </li>
    <li>
        <p><strong>现在我们需要一个 npm 脚本来运行 Vite。</strong> 打开 <code>package.json</code> 并添加下面显示的 <code>start</code> 脚本（你应该已经有 test 脚本了）。我们将使用此脚本启动本地 Vite 开发服务器。</p>
        <pre><code class="language-json">{
  // ...
  "scripts": {
    "start": "vite",
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  // ...
}</code></pre>
    </li>
    <li>
        <p><strong>最后，我们可以启动 Vite 了。</strong> 在终端中从 <code>my-project</code> 文件夹运行新添加的 npm 脚本：</p>
        <pre><code class="language-sh">npm start</code></pre>
        <p><img class="img-fluid" src="/docs/[[config:docs_version]]/assets/img/guides/vite-dev-server.png" alt="Vite dev server running" /></p>
    </li>
</ol>

<p>在本指南的下一节也是最后一节中，我们将导入 Bootstrap 的所有 CSS 和 JavaScript。</p>

<h2 id="import-bootstrap">导入 Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="链接到 导入 Bootstrap"></a></h2>

<ol>
    <li>
        <p><strong>导入 Bootstrap 的 CSS。</strong> 将以下内容添加到 <code>src/scss/styles.scss</code> 以导入 Bootstrap 的所有源 Sass。</p>
        <pre><code class="language-scss">// Import all of Bootstrap’s CSS
@use "bootstrap/scss/bootstrap";</code></pre>
        <p><em>如果你愿意，也可以单独导入我们的样式表。<a href="[[docsref:/customize/sass#importing]]">阅读我们的 Sass 导入文档</a>了解详情。</em></p>
    </li>
    <li>
        <p><strong>接下来加载 CSS 并导入 Bootstrap 的 JavaScript。</strong> 将以下内容添加到 <code>src/js/main.js</code> 以加载 CSS 并导入 Bootstrap 的所有 JS。Floating UI 和 Vanilla Calendar Pro 将通过 Bootstrap 自动导入。</p>
        <pre><code class="language-js">// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'</code></pre>
        <p>你也可以根据需要单独导入 JavaScript 插件以减小打包体积：</p>
        <pre><code class="language-js">import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';</code></pre>
        <p><em><a href="[[docsref:/getting-started/javascript/]]">阅读我们的 JavaScript 文档</a>以了解有关如何使用 Bootstrap 插件的更多信息。</em></p>
    </li>
    <li>
        <p><strong>大功告成！🎉</strong> Bootstrap 的源 Sass 和 JS 已完全加载，你的本地开发服务器现在应如下所示：</p>
        <p><img class="img-fluid" src="/docs/[[config:docs_version]]/assets/img/guides/vite-dev-server-bootstrap.png" alt="Vite dev server running with Bootstrap" /></p>
        <p>现在你可以开始添加任何你想使用的 Bootstrap 组件了。请务必<a href="https://github.com/twbs/examples/tree/main/vite">查看完整的 Vite 示例项目</a>，了解如何包含额外的自定义 Sass，以及通过仅导入你需要的 Bootstrap CSS 和 JS 部分来优化构建。</p>
    </li>
</ol>

<GuideFooter />

<nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#what-is-vite">什么是 Vite？</a></li>
        <li><a href="#setup">设置</a></li>
        <li><a href="#project-structure">项目结构</a></li>
        <li><a href="#configure-vite">配置 Vite</a></li>
        <li><a href="#import-bootstrap">导入 Bootstrap</a></li>
    </ul>
</nav>
</template>