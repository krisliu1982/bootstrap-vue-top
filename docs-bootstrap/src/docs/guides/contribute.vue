<template><article class="docs-content prose">
    <h1>贡献</h1>
<p>借助我们的文档构建脚本和测试来帮助开发 Bootstrap。</p>

<h2 id="tooling-setup">工具设置<a class="anchor-link" href="#tooling-setup" aria-label="链接到 工具设置"></a></h2>

<p>Bootstrap 使用 <a href="https://docs.npmjs.com/misc/scripts/">npm 脚本</a> 来构建文档并编译源文件。我们的 <a href="https://github.com/twbs/bootstrap/blob/v6.0.0-alpha.1/package.json">package.json</a> 中存放了这些用于编译代码、运行测试等操作的脚本。这些脚本并非供我们仓库和文档之外使用。</p>

<p>要使用我们的构建系统并在本地运行文档，你需要一份 Bootstrap 源文件副本和 Node。按照以下步骤操作，即可准备就绪：</p>

<ol>
    <li><a href="https://nodejs.org/en/download/">下载并安装 Node.js</a>，我们用它来管理依赖项。</li>
    <li>要么<a href="https://github.com/twbs/bootstrap/archive/v6.0.0-alpha.1.zip">下载 Bootstrap 源代码</a>，要么 fork 并克隆 <a href="https://github.com/twbs/bootstrap">Bootstrap 仓库</a>。</li>
    <li>导航到根目录 <code>/bootstrap</code> 并运行 <code>npm install</code> 以安装 <a href="https://github.com/twbs/bootstrap/blob/v6.0.0-alpha.1/package.json">package.json</a> 中列出的本地依赖项。</li>
</ol>

<p>完成后，你将能够从命令行运行提供的各种命令。</p>

<h2 id="using-npm-scripts">使用 npm 脚本<a class="anchor-link" href="#using-npm-scripts" aria-label="链接到 使用 npm 脚本"></a></h2>

<p>我们的 <a href="https://github.com/twbs/bootstrap/blob/v6.0.0-alpha.1/package.json">package.json</a> 包含了大量用于开发项目的任务。在终端中运行 <code>npm run</code> 可查看所有 npm 脚本。<strong>主要任务包括：</strong></p>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>Task</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td><code>npm start</code></td><td>编译 CSS 和 JavaScript，构建文档，并启动本地服务器。</td></tr>
        <tr><td><code>npm run dist</code></td><td>创建包含编译文件的 <code>dist/</code> 目录。使用 <a href="https://sass-lang.com/">Sass</a>、<a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>、<a href="https://rolldown.rs/">Rolldown</a> 和 <a href="https://github.com/terser/terser">terser</a>。</td></tr>
        <tr><td><code>npm test</code></td><td>在运行 <code>npm run dist</code> 后于本地运行测试。</td></tr>
        <tr><td><code>npm run docs-serve</code></td><td>在本地构建并运行文档。</td></tr>
    </tbody>
</table>
</div>

<Callout name="info-npm-starter" />

<h2 id="sass">Sass<a class="anchor-link" href="#sass" aria-label="链接到 Sass"></a></h2>

<p>Bootstrap 使用 <a href="https://sass-lang.com/dart-sass/">Dart Sass</a> 将我们的 Sass 源文件编译为 CSS 文件（已包含在我们的构建流程中），如果你使用自己的资源流水线编译 Sass，我们也推荐你这样做。我们之前为 Bootstrap v4 使用 Node Sass，但 LibSass 及其上构建的包（包括 Node Sass）现在已<a href="https://sass-lang.com/blog/libsass-is-deprecated/">弃用</a>。</p>

<p>Dart Sass 使用 10 的舍入精度，出于效率原因不允许调整此值。在我们对生成的 CSS 进行进一步处理（如压缩）时，我们不会降低此精度，但如果你选择这样做，我们建议保持至少 6 的精度，以防止浏览器舍入问题。</p>

<h2 id="postcss">PostCSS<a class="anchor-link" href="#postcss" aria-label="链接到 PostCSS"></a></h2>

<p>Bootstrap 使用 <a href="https://postcss.org/">PostCSS</a> 通过多个插件处理我们编译后的 CSS：</p>

<ul>
    <li>
        <p><strong><a href="https://github.com/postcss/autoprefixer">Autoprefixer</a></strong> 在构建时自动为 CSS 属性添加厂商前缀。这节省了我们的时间和代码，使我们能够只编写一次 CSS 的关键部分，同时无需厂商 mixin。我们通过 Autoprefixer 维护支持的浏览器列表，该列表位于我们 GitHub 仓库中的单独文件。详情请参阅 <a href="https://github.com/twbs/bootstrap/blob/v6.0.0-alpha.1/.browserslistrc">.browserslistrc</a>。</p>
    </li>
    <li>
        <p><strong><a href="https://github.com/twbs/postcss-prefix-custom-properties">postcss-prefix-custom-properties</a></strong> 为所有 CSS 自定义属性（变量）添加 <code>bs-</code> 前缀。这使我们能够在 Sass 源中编写干净、无前缀的变量名（如 <code>--border-radius</code>），并在编译后的 CSS 中变为带前缀的形式（如 <code>--bs-border-radius</code>）。</p>
    </li>
</ul>

<p>我们的 PostCSS 配置位于 <a href="https://github.com/twbs/bootstrap/blob/v6.0.0-alpha.1/build/postcss.config.mjs">build/postcss.config.mjs</a>。</p>

<h2 id="javascript">JavaScript<a class="anchor-link" href="#javascript" aria-label="链接到 JavaScript"></a></h2>

<p>我们的 JavaScript 源代码使用 TypeScript 编写，位于 <code>js/src/</code>。我们使用 <a href="https://rolldown.rs/">Rolldown</a>（Vite 团队开发的基于 Rust 的打包工具）对其进行打包，然后使用 <a href="https://github.com/terser/terser">terser</a> 压缩输出。Bootstrap v5 为此使用了 <a href="https://rollupjs.org/">Rollup</a> 和 <a href="https://babeljs.io/">Babel</a>。Rolldown 会剥离 TypeScript 类型并自行降低语法，因此我们不再需要 Babel。</p>

<p>Rolldown 不读取 <code>.browserslistrc</code>，因此 <a href="https://github.com/twbs/bootstrap/blob/v6.0.0-alpha.1/build/browser-targets.mjs">build/browser-targets.mjs</a> 在构建时解析该文件并将其转换为 Rolldown 期望的目标列表。因此，两条流水线都遵循同一个浏览器列表。</p>

<p>我们发布自己的 TypeScript 声明，因此你不需要 <code>@types/bootstrap</code>。我们的打包配置位于 <a href="https://github.com/twbs/bootstrap/blob/v6.0.0-alpha.1/build/rolldown.config.mjs">build/rolldown.config.mjs</a>。</p>

<h2 id="local-documentation">本地文档<a class="anchor-link" href="#local-documentation" aria-label="链接到 本地文档"></a></h2>

<p>在本地运行我们的文档需要使用 Astro。Astro 是一个现代静态站点生成器，允许我们使用 Markdown 和 React 组件的组合来构建文档。以下是启动方法：</p>

<ol>
    <li>完成上述<a href="#tooling-setup">工具设置</a>以安装所有依赖项。</li>
    <li>从根目录 <code>/bootstrap</code> 在命令行中运行 <code>npm run docs-serve</code>。</li>
    <li>在浏览器中打开 http://localhost:9001，大功告成。</li>
</ol>

<p>阅读 Astro 的<a href="https://docs.astro.build/en/getting-started/">文档</a>以了解更多关于使用 Astro 的信息。</p>

<h2 id="troubleshooting">故障排除<a class="anchor-link" href="#troubleshooting" aria-label="链接到 故障排除"></a></h2>

<p>如果你在安装依赖项时遇到问题，请卸载所有之前的依赖版本（全局和本地）。然后重新运行 <code>npm install</code>。</p>

</article>
<nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#tooling-setup">工具设置</a></li>
        <li><a href="#using-npm-scripts">使用 npm 脚本</a></li>
        <li><a href="#sass">Sass</a></li>
        <li><a href="#postcss">PostCSS</a></li>
        <li><a href="#javascript">JavaScript</a></li>
        <li><a href="#local-documentation">本地文档</a></li>
        <li><a href="#troubleshooting">故障排除</a></li>
    </ul>
</nav>
    </template>