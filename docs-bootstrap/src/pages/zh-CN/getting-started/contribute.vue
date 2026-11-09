<template>
  <article class="bd-content">
    <h1>参与贡献</h1>
    <p>使用我们的文档构建脚本和测试来帮助开发 Bootstrap。</p>

    <h2 id="tooling-setup">工具设置<a class="anchor-link" href="#tooling-setup" aria-label="工具设置链接"></a></h2>
    <p>
      Bootstrap 使用<a href="https://docs.npmjs.com/misc/scripts/">npm 脚本</a>构建文档并编译源文件。我们的<a href="https://github.com/twbs/bootstrap/blob/v5.3.8/package.json">package.json</a>中存放了用于编译代码、运行测试等任务的脚本。这些脚本并非供我们仓库和文档之外的场景使用。
    </p>
    <p>要使用我们的构建系统并在本地运行文档，你需要一份 Bootstrap 源文件和 Node。按以下步骤操作即可准备就绪：</p>
    <ol>
      <li><a href="https://nodejs.org/en/download/">下载并安装 Node.js</a>，我们使用它来管理依赖。</li>
      <li><a href="https://github.com/twbs/bootstrap/archive/v5.3.8.zip">下载 Bootstrap 源代码</a>，或者 fork 并克隆<a href="https://github.com/twbs/bootstrap">Bootstrap 仓库</a>。</li>
      <li>进入根目录 <code>/bootstrap</code> 并运行 <code>npm install</code>，以安装<a href="https://github.com/twbs/bootstrap/blob/v5.3.8/package.json">package.json</a>中列出的本地依赖。</li>
    </ol>
    <p>完成后，你就可以在命令行中运行所提供的各种命令了。</p>
    <h2 id="using-npm-scripts">使用 npm 脚本<a class="anchor-link" href="#using-npm-scripts" aria-label="使用 npm 脚本链接"></a></h2>
    <p>
      我们的<a href="https://github.com/twbs/bootstrap/blob/v5.3.8/package.json">package.json</a>包含许多用于开发项目的任务。在终端中运行 <code>npm run</code> 可查看所有 npm 脚本。<strong>主要任务包括：</strong>
    </p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>任务</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>npm start</code></td>
            <td>编译 CSS 和 JavaScript，构建文档，并启动本地服务器。</td>
          </tr>
          <tr>
            <td><code>npm run dist</code></td>
            <td>创建包含编译文件的 <code>dist/</code> 目录。使用<a href="https://sass-lang.com/">Sass</a>、<a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>和<a href="https://github.com/terser/terser">terser</a>。</td>
          </tr>
          <tr>
            <td><code>npm test</code></td>
            <td>运行 <code>npm run dist</code> 后在本地运行测试</td>
          </tr>
          <tr>
            <td><code>npm run bd-serve</code></td>
            <td>在本地构建并运行文档。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Callout name="info-npm-starter" />
    <h2 id="sass">Sass<a class="anchor-link" href="#sass" aria-label="Sass 链接"></a></h2>
    <p>
      Bootstrap 使用<a href="https://sass-lang.com/dart-sass/">Dart Sass</a>将 Sass 源文件编译为 CSS 文件（已包含在我们的构建流程中）。如果你使用自己的资源处理流程编译 Sass，我们也推荐这样做。我们之前曾为 Bootstrap v4 使用 Node Sass，但 LibSass 及基于它构建的包（包括 Node Sass）现在已被<a href="https://sass-lang.com/blog/libsass-is-deprecated/">弃用</a>。
    </p>
    <p>Dart Sass 使用 10 位的舍入精度，出于效率考虑不允许调整此值。我们在对生成的 CSS 进行后续处理（如压缩）时不会降低此精度，但如果你选择降低，我们建议至少保持 6 位精度，以避免浏览器舍入带来的问题。</p>
    <h2 id="autoprefixer">Autoprefixer<a class="anchor-link" href="#autoprefixer" aria-label="Autoprefixer 链接"></a></h2>
    <p>
      Bootstrap 使用<a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>（已包含在我们的构建流程中）在构建时自动为某些 CSS 属性添加厂商前缀。这样既能节省时间和代码，让我们只需编写一次 CSS 的关键部分，又无需像 v3 中那样使用厂商 mixin。
    </p>
    <p>
      我们通过 Autoprefixer 支持的浏览器列表维护在 GitHub 仓库中的单独文件里。详情请参阅<a href="https://github.com/twbs/bootstrap/blob/v5.3.8/.browserslistrc">.browserslistrc</a>。
    </p>
    <h2 id="rtlcss">RTLCSS<a class="anchor-link" href="#rtlcss" aria-label="RTLCSS 链接"></a></h2>
    <p>
      Bootstrap 使用<a href="https://rtlcss.com/">RTLCSS</a>处理编译后的 CSS 并将其转换为 RTL——基本上就是用相反方向的属性替换水平方向相关的属性（例如 <code>padding-left</code>）。这让我们只需编写一次 CSS，并通过 RTLCSS 的<a href="https://rtlcss.com/learn/usage-guide/control-directives/">控制指令</a>和<a href="https://rtlcss.com/learn/usage-guide/value-directives/">值指令</a>进行细微调整。
    </p>
    <h2 id="local-documentation">本地文档<a class="anchor-link" href="#local-documentation" aria-label="本地文档链接"></a></h2>
    <p>在本地运行我们的文档需要使用 Astro。Astro 是一个现代静态站点生成器，可让我们结合 Markdown 和 React 组件来构建文档。启动方式如下：</p>
    <ol>
      <li>完成上面的<a href="#tooling-setup">工具设置</a>，以安装所有依赖。</li>
      <li>在根目录 <code>/bootstrap</code> 中，于命令行运行 <code>npm run bd-serve</code>。</li>
      <li>在浏览器中打开<a href="http://localhost:9001">http://localhost:9001</a>，大功告成。</li>
    </ol>
    <p>
      阅读 Astro 的<a href="https://docs.astro.build/en/getting-started/">文档</a>，进一步了解 Astro 的用法。
    </p>
    <h2 id="troubleshooting">疑难解答<a class="anchor-link" href="#troubleshooting" aria-label="疑难解答链接"></a></h2>
    <p>如果你在安装依赖时遇到问题，请卸载之前所有版本的依赖（全局和本地），然后重新运行 <code>npm install</code>。</p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#tooling-setup">工具设置</a></li>
      <li><a href="#using-npm-scripts">使用 npm 脚本</a></li>
      <li><a href="#sass">Sass</a></li>
      <li><a href="#autoprefixer">Autoprefixer</a></li>
      <li><a href="#rtlcss">RTLCSS</a></li>
      <li><a href="#local-documentation">本地文档</a></li>
      <li>
       <a href="#troubleshooting">疑难解答</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
