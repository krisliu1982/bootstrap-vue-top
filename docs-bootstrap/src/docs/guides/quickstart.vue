<template>
  <article class="docs-content prose">
    <h1>CDN 快速入门</h1>
    <p>使用 CDN 引入 Bootstrap 的 CSS 和 JavaScript 的官方指南。</p>

    <p>通过<a href="/docs/getting-started/install#cdn">使用 CDN</a> 引入我们生产就绪的 CSS 和 JavaScript，无需任何构建步骤，即可在几秒钟内开始使用
      Bootstrap。CDN 提供了 Bootstrap 代码库的副本，可在任何环境中直接使用，你只需做最少的代码修改。</p>

    <h2 id="live-demo">在线演示<a class="anchor-link" href="#live-demo" aria-label="链接到 在线演示">#</a></h2>

    <p><strong>已经熟悉 HTML 页面设置？</strong> 请在此 <a
        href="https://codepen.io/editor/team/bootstrap/pen/01a025e5-b7d7-79ab-89cc-3c3786c1a38d">Bootstrap CodePen
        演示</a>中查看最终效果。</p>

    <h2 id="steps">步骤<a class="anchor-link" href="#steps" aria-label="链接到 步骤">#</a></h2>

    <ol>
      <li>
        <p><strong>在项目根目录创建一个新的 <code>index.html</code> 文件。</strong> 同时包含 <code>&lt;meta name="viewport"&gt;</code>
          标签，以便在移动设备上实现<a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport">正确的响应式行为</a>。
        </p>
        <CodeWrapper code='<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>' lang="html" class="my-6" />
      </li>
      <li>
        <p><strong>引入 Bootstrap 的 CSS 和 JS。</strong> 将 CSS 的 <code>&lt;link&gt;</code> 标签放在 <code>&lt;head&gt;</code>
          中，将 JavaScript 打包文件（包含用于定位菜单、弹出框和工具提示的 Floating UI，以及用于日期选择器的 Vanilla Calendar Pro）的
          <code>&lt;script&gt;</code> 标签放在 <code>&lt;/body&gt;</code> 结束标签之前。了解更多关于<a
            href="/docs/getting-started/install#cdn">我们的 CDN 链接</a>的信息。</p>
        <CodeWrapper code='<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL" crossorigin="anonymous"></script>
  </body>
</html>' lang="html" class="my-6" />

        <p>选择适合你配置的 JavaScript 文件：</p>
        <ul>
          <li><code>bootstrap.bundle.js</code> 包含 <a href="https://floating-ui.com/">Floating UI</a> 和 <a
              href="https://vanilla-calendar.pro/">Vanilla Calendar Pro</a>。你可以直接用
            <code>&lt;script type="module"&gt;</code> 加载它。</li>
          <li><code>bootstrap.js</code> 引用这两个依赖项。当你直接在浏览器中加载它时，必须通过导入映射提供这两个依赖项。</li>
        </ul>
        <p>将以下导入映射与非打包文件一起使用：</p>
        <CodeWrapper
          code='<script type="importmap">
{
  "imports": {
    "@floating-ui/dom": "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.7.6/dist/floating-ui.dom.esm.min.js",
    "vanilla-calendar-pro": "https://cdn.jsdelivr.net/npm/vanilla-calendar-pro@3.4.0/index.mjs"
  }
}
</script>
<script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.min.js" integrity="sha384-BJf/nQgxZJU68GxBse97Vdlc8Rh+z9PzzXiS3/BjV+1nQPR7IKn+iJnD3DJvCMaU" crossorigin="anonymous"></script>'
          lang="html" class="my-6" />
        <p>如需省略任一依赖项，请<a href="/docs/customize/optimize#lean-javascript">仅导入你使用的 Bootstrap 组件，或使用支持 tree shaking
            的打包工具</a>。</p>
      </li>
      <li>
        <p><strong>Hello, world!</strong> 在你选择的浏览器中打开页面，查看 Bootstrap 页面效果。现在你可以通过创建自己的<a
            href="/docs/layout/grid">布局</a>、添加数十个<a href="/docs/components/buttons">组件</a>以及使用<a
            href="https://getbootstrap.com/docs/6.0/examples/">我们的官方示例</a>，开始用 Bootstrap 构建项目了。</p>
      </li>
    </ol>

    <h2 id="optional-font">可选字体<a class="anchor-link" href="#optional-font" aria-label="链接到 可选字体">#</a></h2>

    <p>Bootstrap 的源代码默认使用<a href="/docs/content/reboot#native-font-stack">原生字体栈</a>，但我们在托管文档中使用自定义字体，以便跨平台获得更一致的样式。我们使用
      <a href="https://fonts.google.com/specimen/Geist">Geist</a> 和 Geist Mono，并建议你在项目中使用相同或相似的字体。</p>

    <ol>
      <li>
        <p><strong>从 Google Fonts 添加 Geist 网络字体。</strong> 将以下内容添加到 <code>&lt;head&gt;</code> 中，位于 Bootstrap 的 CSS 之前：
        </p>
        <CodeWrapper code='<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL" crossorigin="anonymous"></script>
  </body>
</html>' lang="html" class="my-6" />
      </li>
      <li>
        <p><strong>通过覆盖 Bootstrap 的 CSS 变量来应用字体。</strong> 你可以在 <code>&lt;head&gt;</code> 中的 <code>&lt;style&gt;</code>
          标签或自定义 CSS 文件中执行此操作。</p>
        <CodeWrapper code='<style>
  :root {
    --bs-body-font-family: "Geist", system-ui, sans-serif;
    --bs-font-mono: "Geist Mono", ui-monospace, monospace;
  }
</style>' lang="html" class="my-6" />
      </li>
    </ol>

    <p>在<a href="/docs/content/typography">排版</a>和<a href="/docs/content/reboot#native-font-stack">Reboot</a> 中了解更多关于
      Bootstrap 排版默认值的信息。</p>
  </article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
      <li><a href="#live-demo">在线演示</a></li>
      <li><a href="#steps">步骤</a></li>
      <li><a href="#optional-font">可选字体</a></li>
    </ul>
  </nav>
</template>