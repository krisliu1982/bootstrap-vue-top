<template>
  <article class="bd-content">
    <h1>Bootstrap 与 Vite</h1>
    <p>关于如何使用 Vite 在项目中引入并打包 Bootstrap 的 CSS 和 JavaScript 的官方指南。</p>

    <img class="d-block mx-auto mb-4 img-fluid rounded-3" srcset="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-vite.png, https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-vite@2x.png 2x" src="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-vite.png" width="100%" alt="" /><Callout>
      <p>
        <strong>想直接跳到结尾？</strong>从<a href="https://github.com/twbs/examples/tree/main/vite">twbs/examples 仓库</a>下载本指南的源代码和可运行的演示。你也可以
       <a href="https://stackblitz.com/github/twbs/examples/tree/main/vite?file=index.html">在 StackBlitz 中打开示例</a>
        进行在线编辑。
      </p>
    </Callout>
    <h2 id="what-is-vite">什么是 Vite？<a class="anchor-link" href="#what-is-vite" aria-label="什么是 Vite？链接"></a></h2>
    <p><a href="https://vite.dev/">Vite</a>是一款现代前端构建工具，专为速度和简洁而设计。它提供了高效、流畅的开发体验，尤其适合现代 JavaScript 框架。</p>
    <h2 id="setup">搭建<a class="anchor-link" href="#setup" aria-label="搭建链接"></a></h2>
    <p>我们将从零开始构建一个使用 Bootstrap 的 Vite 项目，因此在真正开始之前还有一些前置条件和准备步骤。本指南要求你已安装 Node.js，并熟悉终端操作。</p>
    <ol>
      <li>
        <p><strong>创建项目文件夹并初始化 npm。</strong>我们将创建 <code>my-project</code> 文件夹，并使用 <code>-y</code> 参数初始化 npm，以避免它询问各种交互式问题。</p>
        <CodeWrapper
          code="mkdir my-project &amp;&amp; cd my-project
npm init -y
"
          lang="shell"
        />
      </li>
      <li>
        <p><strong>安装 Vite。</strong>与我们的 Webpack 指南不同，这里只有一个构建工具依赖。我们使用 <code>--save-dev</code> 来表示该依赖仅用于开发阶段，不用于生产环境。</p>
        <CodeWrapper code="npm i --save-dev vite" lang="shell" />
      </li>
      <li>
        <p><strong>安装 Bootstrap。</strong>现在我们可以安装 Bootstrap 了。我们还会安装 Popper，因为下拉菜单、弹出框和工具提示都依赖它来定位。如果你不打算使用这些组件，可以在这里省略 Popper。</p>
        <CodeWrapper code="npm i --save bootstrap @popperjs/core" lang="shell" />
      </li>
      <li>
        <p><strong>安装额外的依赖。</strong>除了 Vite 和 Bootstrap，我们还需要另一个依赖（Sass），以便正确导入和打包 Bootstrap 的 CSS。</p>
        <CodeWrapper code="npm i --save-dev sass" lang="shell" />
      </li>
    </ol>
    <p>现在所有必要的依赖都已安装并配置完毕，我们可以开始创建项目文件并导入 Bootstrap 了。</p>
    <h2 id="project-structure">项目结构<a class="anchor-link" href="#project-structure" aria-label="项目结构链接"></a></h2>
    <p>我们已经创建了 <code>my-project</code> 文件夹并初始化了 npm。现在我们将创建 <code>src</code> 文件夹、样式表和 JavaScript 文件，以完善项目结构。请在 <code>my-project</code> 中运行以下命令，或按下图手动创建文件夹和文件结构。</p>
    <CodeWrapper
      code="mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js"
      lang="shell"
    />
    <p>完成后，你的完整项目结构应如下所示：</p>
    <CodeWrapper
      code="my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│   |   └── styles.scss
|   └── index.html
├── package-lock.json
├── package.json
└── vite.config.js"
      lang="text"
    />
    <p>
      到这里，所有文件都已就位，但 Vite 还无法运行，因为我们尚未填写
      <code>vite.config.js</code>。
    </p>
    <h2 id="configure-vite">配置 Vite<a class="anchor-link" href="#configure-vite" aria-label="配置 Vite 链接"></a></h2>
    <p>依赖已安装完毕，项目文件夹也已准备好开始编码，现在我们可以配置 Vite 并在本地运行项目了。</p>
    <ol>
      <li>
        <p>
          <strong>在编辑器中打开 <code>vite.config.js</code>。</strong>由于它是空白的，我们需要添加一些样板配置才能启动服务器。这部分配置告诉 Vite 在何处查找项目的 JavaScript，以及开发服务器应如何运行（从 <code>src</code> 文件夹读取并支持热重载）。
        </p>
        <CodeWrapper
          code="import { resolve } from &#39;path&#39;

export default {
  root: resolve(__dirname, &#39;src&#39;),
  build: {
    outDir: &#39;../dist&#39;
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            &#39;import&#39;,
            &#39;mixed-decls&#39;,
            &#39;color-functions&#39;,
            &#39;global-builtin&#39;,
          ],
        },
     },
  },
}"
          lang="javascript"
        />
        <p>
          <strong>注意：</strong>使用最新版本的 Dart Sass 编译源 Sass 文件时会显示 Sass 弃用警告。这不会妨碍编译或使用 Bootstrap。我们正在<a href="https://github.com/twbs/bootstrap/issues/40962">着手长期修复</a>，但在此期间，可以忽略这些弃用提示。
        </p>
      </li>
      <li>
        <p>
          <strong>接下来填写 <code>src/index.html</code>。</strong>这是 Vite 在浏览器中加载的 HTML 页面，用于使用我们在后续步骤中添加的打包后的 CSS 和 JS。
        </p>
        <CodeWrapper
          code='&lt;!doctype html&gt;
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
      &lt;button class="btn btn-primary"&gt;Primary button&lt;/button&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;'
          lang="html"
        />
        <p>
          我们在这里通过
          <code>div class=&quot;container&quot;</code> 和 <code>&lt;button&gt;</code> 加入了一点 Bootstrap 样式，以便能看到 Vite 何时加载了 Bootstrap 的 CSS。
        </p>
      </li>
      <li>
        <p><strong>现在我们需要一个 npm 脚本来运行 Vite。</strong>打开 <code>package.json</code>，添加下方所示的 <code>start</code> 脚本（你应该已经有 test 脚本了）。我们将使用该脚本启动本地 Vite 开发服务器。</p>
        <CodeWrapper
          code='{
  // ...
  "scripts": {
    "start": "vite",
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  // ...
}
'
          lang="json"
        />
      </li>
      <li>
        <p><strong>最后，我们可以启动 Vite 了。</strong>在终端中进入 <code>my-project</code> 文件夹，运行刚刚添加的 npm 脚本：</p>
        <CodeWrapper
          code="npm start
"
          lang="shell"
        />
        <img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/vite-dev-server.png" alt="Vite 开发服务器正在运行" />
      </li>
    </ol>
    <p>在本指南接下来的最后一节中，我们将导入 Bootstrap 的全部 CSS 和 JavaScript。</p>
    <h2 id="import-bootstrap">导入 Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="导入 Bootstrap 链接"></a></h2>
    <ol>
      <li>
        <p><strong>导入 Bootstrap 的 CSS。</strong>将以下内容添加到 <code>src/scss/styles.scss</code>，以导入 Bootstrap 的所有源 Sass。</p>
        <CodeWrapper
          code='// Import all of Bootstrap’s CSS
@import "bootstrap/scss/bootstrap";
'
          lang="scss"
        />
        <p>
          <em>如果你愿意，也可以单独导入各个样式表。详情请参阅<a href="/customize/sass#importing">我们的 Sass 导入文档</a>。</em>
        </p>
      </li>
      <li>
        <p><strong>接下来加载 CSS 并导入 Bootstrap 的 JavaScript。</strong>将以下内容添加到 <code>src/js/main.js</code>，以加载 CSS 并导入 Bootstrap 的所有 JS。Popper 会通过 Bootstrap 自动导入。</p>
        <CodeWrapper
          code="// Import our custom CSS
import &#39;../scss/styles.scss&#39;

// Import all of Bootstrap’s JS
import * as bootstrap from &#39;bootstrap&#39;
"
          lang="javascript"
        />
        <p>你也可以按需单独导入 JavaScript 插件，以减小打包体积：</p>
        <CodeWrapper
          code="import Alert from &#39;bootstrap/js/dist/alert&#39;;

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from &#39;bootstrap&#39;;
"
          lang="javascript"
        />
        <p>
          <em><a href="/getting-started/javascript/">阅读我们的 JavaScript 文档</a>，了解更多关于如何使用 Bootstrap 插件的信息。</em>
        </p>
      </li>
      <li>
        <p><strong>大功告成！🎉</strong>Bootstrap 的源 Sass 和 JS 已完全加载，你的本地开发服务器现在应该如下所示：</p>
        <img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/vite-dev-server-bootstrap.png" alt="Vite 开发服务器正在运行并加载了 Bootstrap" />
        <p>
          现在你可以开始添加任何想要使用的 Bootstrap 组件了。请务必
         <a href="https://github.com/twbs/examples/tree/main/vite">查看完整的 Vite 示例项目</a>，
          了解如何引入额外的自定义 Sass，以及如何仅导入所需的 Bootstrap CSS 和 JS 部分来优化构建。
        </p>
      </li>
    </ol>
    <GuideFooter />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#what-is-vite">什么是 Vite？</a></li>
      <li><a href="#setup">搭建</a></li>
      <li><a href="#project-structure">项目结构</a></li>
      <li><a href="#configure-vite">配置 Vite</a></li>
      <li>
       <a href="#import-bootstrap">导入 Bootstrap</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
