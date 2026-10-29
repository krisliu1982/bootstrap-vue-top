<template>
  <article class="docs-content prose">
   <h1>Bootstrap 与 Parcel</h1>
<p>使用 Parcel 在项目中引入并打包 Bootstrap 的 CSS 和 JavaScript 的官方指南。</p>

<Callout type="info">
    <p><strong>想直接跳到结尾？</strong> 从 <a href="https://github.com/twbs/examples/tree/main/parcel">twbs/examples 仓库</a>下载本指南的源代码和可运行示例。你也可以<a href="https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=index.html">在 StackBlitz 中打开该示例</a>，但无法在其中运行，因为 Parcel 目前不支持该环境。</p>
</Callout>
<Callout type="info">
    <p><strong>使用 AI 编程代理？</strong> 让它指向我们的 <a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-parcel"><code>bootstrap-parcel</code> 技能</a>以自动化此设置。有关所有可用技能，请参阅 <a href="/docs/getting-started/ai">AI</a>。</p>
</Callout>

<h2 id="what-is-parcel">什么是 Parcel？<a class="anchor-link" href="#what-is-parcel" aria-label="链接到 什么是 Parcel？"></a></h2>

<p><a href="https://parceljs.org/">Parcel</a> 是一个 Web 应用程序打包工具，旨在通过开箱即用的零配置设置简化开发流程。它提供了更高级打包工具中的功能，同时注重易用性，非常适合寻求快速上手的开发者。</p>

<h2 id="setup">设置<a class="anchor-link" href="#setup" aria-label="链接到 设置"></a></h2>

<p>我们将从零开始构建一个使用 Bootstrap 的 Parcel 项目，因此在真正开始之前有一些前提条件和前期步骤。本指南要求你已安装 Node.js 并对终端有一定熟悉度。</p>

<ol>
    <li>
        <p><strong>创建项目文件夹并设置 npm。</strong> 我们将创建 <code>my-project</code> 文件夹并使用 <code>-y</code> 参数初始化 npm，以避免它询问所有交互式问题。</p>
        <CodeWrapper code="mkdir my-project && cd my-project
npm init -y" lang="shell" class="my-5" />
    </li>
    <li>
        <p><strong>安装 Parcel。</strong> 与我们的 Webpack 指南不同，这里只有一个构建工具依赖项。Parcel 会在检测到语言转换器（如 Sass）时自动安装它们。我们使用 <code>--save-dev</code> 表示此依赖项仅用于开发而非生产环境。</p>
                <CodeWrapper code="npm i --save-dev parcel" lang="shell" class="my-5" />
    </li>
    <li>
        <p><strong>安装 Bootstrap。</strong> 现在我们可以安装 Bootstrap。我们还会安装 Floating UI 和 Vanilla Calendar Pro，因为我们的一些组件依赖它们。如果你不打算使用菜单、弹出框或工具提示，可以省略 Floating UI。如果你不打算使用日期选择器，可以省略 Vanilla Calendar Pro。</p>
        <CodeWrapper code="npm i --save bootstrap @floating-ui/dom vanilla-calendar-pro" lang="shell" class="my-5" />
    </li>
</ol>

<p>现在我们已经安装了所有必要的依赖项，可以开始创建项目文件并导入 Bootstrap 了。</p>

<h2 id="project-structure">项目结构<a class="anchor-link" href="#project-structure" aria-label="链接到 项目结构"></a></h2>

<p>我们已经创建了 <code>my-project</code> 文件夹并初始化了 npm。现在我们将创建 <code>src</code> 文件夹、样式表和 JavaScript 文件，以完善项目结构。在 <code>my-project</code> 中运行以下命令，或手动创建下面显示的文件夹和文件结构。</p>

        <CodeWrapper code="mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss" lang="shell" />

<p>完成后，你的完整项目应如下所示：</p>

        <CodeWrapper code="my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
├── package-lock.json
└── package.json" lang="text" />

<p>此时，所有内容都在正确的位置，但 Parcel 需要一个 HTML 页面和 npm 脚本来启动我们的服务器。</p>

<h2 id="configure-parcel">配置 Parcel<a class="anchor-link" href="#configure-parcel" aria-label="链接到 配置 Parcel"></a></h2>

<p>依赖项已安装，项目文件夹已准备好开始编码，我们现在可以配置 Parcel 并在本地运行项目。Parcel 本身设计上不需要配置文件，但我们确实需要一个 npm 脚本和一个 HTML 文件来启动服务器。</p>

<ol>
    <li>
        <p><strong>填写 <code>src/index.html</code> 文件。</strong> Parcel 需要一个页面来渲染，因此我们使用 <code>index.html</code> 页面设置一些基本 HTML，包括我们的 CSS 和 JavaScript 文件。</p>
        <CodeWrapper code='<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ Parcel</title>
    <link rel="stylesheet" href="scss/styles.scss">
    <script type="module" src="js/main.js"></script>
  </head>
  <body>
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Parcel!</h1>
      <button class="btn-solid theme-primary">Primary button</button>
    </div>
  </body>
</html>' lang="html" class="my-5" />
        <p>我们在这里通过 <code>div class="container"</code> 和 <code>&lt;button&gt;</code> 引入了一点 Bootstrap 样式，以便我们看到 Bootstrap 的 CSS 已被 Parcel 加载。</p>
        <p>Parcel 会自动检测我们正在使用 Sass，并安装 <a href="https://parceljs.org/languages/sass/">Sass Parcel 插件</a>以支持它。不过，如果你愿意，也可以手动运行 <code>npm i --save-dev @parcel/transformer-sass</code>。</p>
    </li>
    <li>
        <p><strong>添加 Parcel npm 脚本。</strong> 打开 <code>package.json</code> 并在 <code>scripts</code> 对象中添加以下 <code>start</code> 脚本。我们将使用此脚本启动 Parcel 开发服务器，并在 HTML 文件编译到 <code>dist</code> 目录后渲染它。</p>
                <CodeWrapper code='{
   // ...
   "scripts": {
     "start": "parcel serve src/index.html --public-url / --dist-dir dist",
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   // ...
}' lang="json" class="my-5" />
    </li>
    <li>
        <p><strong>最后，我们可以启动 Parcel 了。</strong> 在终端中从 <code>my-project</code> 文件夹运行新添加的 npm 脚本：</p>
        <CodeWrapper code="npm start" lang="shell" class="my-5" />
    </li>
</ol>

<p>在本指南的下一节也是最后一节中，我们将导入 Bootstrap 的所有 CSS 和 JavaScript。</p>

<h2 id="import-bootstrap">导入 Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="链接到 导入 Bootstrap"></a></h2>

<p>将 Bootstrap 导入 Parcel 需要两个导入，一个导入到 <code>styles.scss</code>，一个导入到 <code>main.js</code>。</p>

<ol>
    <li>
        <p><strong>导入 Bootstrap 的 CSS。</strong> 将以下内容添加到 <code>src/scss/styles.scss</code> 以导入 Bootstrap 的所有源 Sass。</p>
        <CodeWrapper code='// Import all of Bootstrap’s CSS
@use "bootstrap/scss/bootstrap";' lang="scss" class="my-5" />
        <p><em>如果你愿意，也可以单独导入我们的样式表。<a href="/docs/customize/sass#importing">阅读我们的 Sass 导入文档</a>了解详情。</em></p>
    </li>
    <li>
        <p><strong>导入 Bootstrap 的 JS。</strong> 将以下内容添加到 <code>src/js/main.js</code> 以导入 Bootstrap 的所有 JS。Floating UI 和 Vanilla Calendar Pro 将通过 Bootstrap 自动导入。</p>
                <CodeWrapper code="// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'" lang="javascript" class="my-5" />
        <p>你也可以根据需要单独导入 JavaScript 插件以减小打包体积：</p>
                        <CodeWrapper code="import Alert from 'bootstrap/js/dist/alert'

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap'" lang="javascript" class="my-5" />
        <p><em><a href="/docs/getting-started/javascript/">阅读我们的 JavaScript 文档</a>以了解有关如何使用 Bootstrap 插件的更多信息。</em></p>
    </li>
    <li>
        <p><strong>大功告成！🎉</strong> Bootstrap 的源 Sass 和 JS 已完全加载，你的本地开发服务器现在应如下所示：</p>
        <p>现在你可以开始添加任何你想使用的 Bootstrap 组件了。请务必<a href="https://github.com/twbs/examples/tree/main/parcel">查看完整的 Parcel 示例项目</a>，了解如何包含额外的自定义 Sass，以及通过仅导入你需要的 Bootstrap CSS 和 JS 部分来优化构建。</p>
    </li>
</ol>
</article>

<nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#what-is-parcel">什么是 Parcel？</a></li>
        <li><a href="#setup">设置</a></li>
        <li><a href="#project-structure">项目结构</a></li>
        <li><a href="#configure-parcel">配置 Parcel</a></li>
        <li><a href="#import-bootstrap">导入 Bootstrap</a></li>
    </ul>
</nav>
</template>