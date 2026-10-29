<template>
      <article class="docs-content prose">
<h1>Bootstrap 与 npm</h1>
<p>使用 npm 在项目中引入 Bootstrap 的 CSS 和 JavaScript 构建入门项目的官方指南。</p>

<Callout type="info">
    <p><strong>想直接跳到结尾？</strong> 从 <a href="https://github.com/twbs/examples/tree/main/sass-js/">twbs/examples 仓库</a>下载本指南的源代码和可运行示例。你也可以<a href="https://stackblitz.com/github/twbs/examples/tree/main/sass-js?file=index.html">在 StackBlitz 中打开该示例</a>。</p>
</Callout>

<Callout type="info">
    <p><strong>使用 AI 编程代理？</strong> 让它指向我们的 <a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-npm"><code>bootstrap-npm</code> 技能</a>以自动化此设置。有关所有可用技能，请参阅 <a href="/docs/getting-started/ai">AI</a>。</p>
</Callout>

<h2 id="what-is-npm">什么是 npm？<a class="anchor-link" href="#what-is-npm" aria-label="链接到 什么是 npm？"></a></h2>

<p><a href="https://www.npmjs.com/">npm</a> 是 Node.js 的默认包管理器。在本指南中，我们使用 npm 安装 Bootstrap 及其依赖项，然后使用命令行工具将 Sass 编译为 CSS——无需打包工具。</p>

<h2 id="setup">设置<a class="anchor-link" href="#setup" aria-label="链接到 设置"></a></h2>

<p>我们将从零开始构建一个使用 Bootstrap 的 npm 项目，因此在开始之前有一些前提条件和前期步骤。本指南要求你已安装 Node.js 并对终端有一定熟悉度。</p>

<ol>
    <li>
        <p><strong>创建项目文件夹并设置 npm。</strong> 我们将创建 <code>my-project</code> 文件夹并使用 <code>-y</code> 参数初始化 npm，以避免它询问所有交互式问题。</p>
        <CodeWrapper code="mkdir my-project && cd my-project
npm init -y" lang="shell" class="my-5" />        
    </li>
    <li>
        <p><strong>安装 Bootstrap。</strong> 现在我们可以安装 Bootstrap。我们还会安装 Floating UI 和 Vanilla Calendar Pro，因为我们的一些组件依赖它们。如果你不打算使用菜单、弹出框或工具提示，可以省略 Floating UI。如果你不打算使用日期选择器，可以省略 Vanilla Calendar Pro。</p>
                <CodeWrapper code="npm i --save bootstrap @floating-ui/dom vanilla-calendar-pro" lang="shell" class="my-5" />
    </li>
    <li>
        <p><strong>安装额外依赖项。</strong> 除了 Bootstrap 之外，我们还需要一些其他依赖项来编译和后处理我们的 CSS。Sass 将我们的源 <code>.scss</code> 文件编译为 CSS，Autoprefixer 和 PostCSS 处理浏览器兼容性。我们安装 <code>postcss-cli</code> 包，以便从命令行运行 PostCSS。</p>
<CodeWrapper code="npm i --save-dev autoprefixer postcss postcss-cli sass" lang="shell" class="my-5" />

    </li>
    <li>
        <p><strong>安装本地开发工具。</strong> 最后，为了让工作更轻松，我们建议安装一些开发工具，以便运行具有热刷新功能的本地服务器（你做的更改会自动反映在浏览器中）并添加一些代码质量检查。</p>
        <p>我们使用 <code>nodemon</code> 监视文件更改，<code>npm-run-all</code> 一次运行多个 npm 脚本，<code>sirv-cli</code> 运行本地服务器，<code>stylelint</code> 像 Bootstrap 一样格式化 CSS 以保持一致性。</p>
<CodeWrapper code="npm i --save-dev nodemon npm-run-all sirv-cli stylelint stylelint-config-twbs-bootstrap" lang="shell" class="my-5" />
    </li>
</ol>

<p>现在我们已经安装了所有必要的依赖项，可以开始创建项目文件并导入 Bootstrap 了。</p>

<h2 id="project-structure">项目结构<a class="anchor-link" href="#project-structure" aria-label="链接到 项目结构"></a></h2>

<p>我们已经创建了 <code>my-project</code> 文件夹并初始化了 npm。现在我们将创建 <code>scss</code> 文件夹、样式表和配置文件，以完善项目结构。在 <code>my-project</code> 中运行以下命令，或手动创建下面显示的文件夹和文件结构。</p>

<CodeWrapper code="mkdir {css,scss}
touch index.html scss/styles.scss postcss.config.js stylelint.config.mjs" lang="shell" />

<p>完成后，你的项目应如下所示：</p>

<CodeWrapper code="my-project/
├── css/
├── scss/
│   └── styles.scss
├── stylelint.config.mjs
├── index.html
├── package-lock.json
├── package.json
└── postcss.config.js" lang="text" />

<p>此时，所有内容都在正确的位置，但我们需要配置文件并添加一些 npm 脚本以编译 CSS。</p>

<h2 id="configure-npm">配置 npm<a class="anchor-link" href="#configure-npm" aria-label="链接到 配置 npm"></a></h2>

<p>依赖项已安装，项目文件夹已准备好开始编码，我们现在可以配置 npm 脚本并在本地运行项目。</p>

<ol>
    <li>
        <p><strong>在编辑器中打开 <code>postcss.config.js</code>。</strong> 我们需要配置 Autoprefixer 在 Sass 编译后运行，以确保浏览器兼容性。</p>
 <CodeWrapper code="const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer
  ]
}" lang="javascript" class="my-5" />       
    </li>
    <li>
        <p><strong>填写 <code>index.html</code> 文件。</strong> 我们需要一个 HTML 页面来渲染我们的项目。此页面链接到编译后的 CSS 文件，并包含 Bootstrap 的预构建 JavaScript 打包文件。</p>
  <CodeWrapper code='<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ npm</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and npm!</h1>
      <button class="btn-solid theme-primary">Primary button</button>
    </div>
    <script type="module" src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>' lang="html" class="my-5" /> 
        <p>我们在这里通过 <code>div class="container"</code> 和 <code>&lt;button&gt;</code> 引入了一点 Bootstrap 样式，以便我们看到 Bootstrap 的 CSS 已被 npm 脚本加载。由于此设置不使用 JavaScript 打包工具，我们通过 <code>&lt;script&gt;</code> 标签直接加载 Bootstrap 的预构建 JS 打包文件。</p>
        <p><em><a href="/docs/getting-started/javascript/">阅读我们的 JavaScript 文档</a>以了解有关如何使用 Bootstrap 插件的更多信息。</em></p>
    </li>
    <li>
        <p><strong>在 <code>package.json</code> 中添加 npm 脚本。</strong> 打开 <code>package.json</code> 并添加以下脚本。我们使用 <code>sass</code> 编译 Sass（使用 <code>--load-path=node_modules</code> 以便解析 Bootstrap），<code>postcss-cli</code> 应用 Autoprefixer，<code>nodemon</code> 监视更改，<code>npm-run-all</code> 按顺序或并行运行脚本，<code>sirv-cli</code> 为项目提供服务，<code>stylelint</code> 对我们的 Sass 进行 lint 检查。</p>
 <CodeWrapper code='{
  // ...
  "scripts": {
    "css-compile": "sass --load-path=node_modules --style expanded --source-map --embed-sources scss:css",
    "css-prefix": "postcss --config postcss.config.js --replace \"css/*.css\" \"!css/*.min.css\"",
    "build": "npm-run-all --sequential css-compile css-prefix",
    "watch": "nodemon --watch scss/ --ext scss --exec \"npm run build\"",
    "serve": "sirv --port 8080 --dev .",
    "start": "npm-run-all build --parallel watch serve",
    "lint": "stylelint \"scss/**/*.scss\""
  },
  // ...
}' lang="json" class="my-5" />       
    </li>
    <li>
        <p><strong>配置 <code>stylelint.config.mjs</code>。</strong> 我们使用 <code>stylelint-config-twbs-bootstrap</code> 来保持我们的 Sass lint 检查与 Bootstrap 自身的代码风格一致。</p>
      <CodeWrapper code="/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-twbs-bootstrap',
}" lang="javascript" class="my-5" />  
    </li>
    <li>
        <p><strong>最后，我们可以启动 npm 脚本了。</strong> 在终端中从 <code>my-project</code> 文件夹运行新添加的 npm 脚本：</p>
            <CodeWrapper code="npm start" lang="shell" class="my-5" /> 
    </li>
</ol>

<p>在本指南的下一节也是最后一节中，我们将导入 Bootstrap 的所有 CSS。</p>

<h2 id="import-bootstrap">导入 Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="链接到 导入 Bootstrap"></a></h2>

<p>将 Bootstrap 导入我们的项目需要向 <code>scss/styles.scss</code> 文件添加 Sass 导入。</p>

<ol>
    <li>
        <p><strong>导入 Bootstrap 的 CSS。</strong> 将以下内容添加到 <code>scss/styles.scss</code> 以导入 Bootstrap 的所有源 Sass。我们使用 <code>@use</code> 规则，这是现代 Sass 模块系统。</p>
            <CodeWrapper code='// Import all of Bootstrap’s CSS
@use "bootstrap/scss/bootstrap";' lang="scss" class="my-5" /> 
           <p><em>如果你愿意，也可以单独导入我们的样式表。<a href="/docs/customize/sass#importing">阅读我们的 Sass 导入文档</a>了解详情。</em></p>
    </li>
    <li>
        <p><strong>可选：自定义 Bootstrap 的 Sass 令牌。</strong> 由于 Bootstrap 使用 Sass 模块（<code>@use</code>/<code>@forward</code>），你可以使用 <code>with ()</code> 语法覆盖默认值。你只需包含要更改的键——Bootstrap 会将你的覆盖与其默认值合并。</p>
               <CodeWrapper code='@use "bootstrap/scss/bootstrap" with (
  $root-tokens: (
    --border-radius: .25rem,
    --spacer: 1.5rem,
  ),
  $alert-tokens: (
    --alert-padding-x: 2rem,
    --alert-border-radius: 1rem,
  )
);' lang="scss" class="my-5" /> 
        <p><em><a href="/docs/customize/sass#token-defaults">阅读我们的 Sass 自定义文档</a>以获取可用令牌映射和选项的完整列表。</em></p>
    </li>
    <li>
        <p><strong>大功告成！🎉</strong> Bootstrap 的源 Sass 已完全加载，你的本地开发服务器现在应如下所示：</p>
        <p>现在你可以开始添加任何你想使用的 Bootstrap 组件了。请务必<a href="https://github.com/twbs/examples/tree/main/sass-js">查看完整的 npm Sass 和 JS 示例项目</a>，了解如何包含额外的自定义 Sass，以及通过仅导入你需要的 Bootstrap CSS 和 JS 部分来优化构建。</p>
    </li>
</ol>

</article>
<nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#what-is-npm">什么是 npm？</a></li>
        <li><a href="#setup">设置</a></li>
        <li><a href="#project-structure">项目结构</a></li>
        <li><a href="#configure-npm">配置 npm</a></li>
        <li><a href="#import-bootstrap">导入 Bootstrap</a></li>
    </ul>
</nav>
</template>