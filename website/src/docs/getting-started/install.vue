<!--
---
title: Install Bootstrap
description: Add Bootstrap to your project with CDN, package manager, or source files.
toc: true
aliases:
 - "/docs/[[config:docs_version]]/getting-started/"
 - "/docs/getting-started/"
 - "/getting-started/"
---

## Install

Pull in Bootstrap’s **source files** into nearly any project with a package manager. Package installs don‘t include documentation or complete build scripts. You can also [use any demo from our Examples repo](https://github.com/twbs/examples) to quickly jumpstart Bootstrap projects.

<Code
  tabs={[
    { label: 'npm', code: 'npm install bootstrap', lang: 'bash' },
    { label: 'pnpm', code: 'pnpm add bootstrap', lang: 'bash' },
    { label: 'Yarn', code: 'yarn add bootstrap', lang: 'bash' },
    { label: 'Bun', code: 'bun add bootstrap', lang: 'bash' }
  ]}
/>

After installing, head to [our npm guide]([[docsref:/guides/npm]]) for a full setup guide.

<Callout name="info-npm-starter" />

### Using npm

Using `import * as bootstrap from 'bootstrap'` will load all of Bootstrap’s plugins onto a `bootstrap` object. You can also import plugins individually for automatic tree shaking:

```js
import { Tooltip, Toast, Popover } from 'bootstrap'
```

You can also import plugins directly by loading the `/js/dist/*.js` files under the package’s top-level directory.

Bootstrap’s `package.json` contains some additional metadata under the following keys:

- `sass` - path to Bootstrap’s main [Sass](https://sass-lang.com/) source file
- `style` - path to Bootstrap’s non-minified CSS that’s been compiled using the default settings (no customization)

Additionally, Bootstrap ships a `.browserslistrc` file at the package root, which defines browser targets for tools like Browserslist and Autoprefixer. See [Browsers & devices]([[docsref:/getting-started/browsers-devices]]) for the full support policy.

### Using Yarn

Yarn 2+ (aka Yarn Berry) doesn’t support the `node_modules` directory by default, so our [Sass & JS example](https://github.com/twbs/examples/tree/main/sass-js) needs some adjustments:

```sh
yarn config set nodeLinker node-modules # Use the node_modules linker
touch yarn.lock # Create an empty yarn.lock file
yarn install # Install the dependencies
yarn start # Start the project
```

## More packages

Other package-managed installs are available as well for Bootstrap as well.

<Code
  tabs={[
    { label: 'RubyGems', code: `gem 'bootstrap', '~> [[config:current_ruby_version]]'`, lang: 'bash' },
    { label: 'Composer', code: 'composer require twbs/bootstrap:[[config:current_version]]', lang: 'bash' },
    { label: 'NuGet', code: `Install-Package bootstrap # Default
Install-Package bootstrap.sass # Sass version`, lang: 'powershell' }
  ]}
/>

### Using RubyGems

We recommend installing Bootstrap in your Ruby apps using [Bundler](https://bundler.io/), but you can also use [RubyGems](https://rubygems.org/). See [the gem’s README](https://github.com/twbs/bootstrap-rubygem/blob/main/README.md) for further details.

```sh
gem install bootstrap -v [[config:current_ruby_version]]
```

### Using NuGet

If you develop in .NET Framework, you can also install and manage Bootstrap’s [CSS](https://www.nuget.org/packages/bootstrap/) or [Sass](https://www.nuget.org/packages/bootstrap.sass/) and JavaScript using [NuGet](https://www.nuget.org/). Newer projects should use [libman](https://learn.microsoft.com/en-us/aspnet/core/client-side/libman/) or another method as NuGet is designed for compiled code, not frontend assets.

## CDN

Include Bootstrap’s CSS and JavaScript files via CDN. CDNs (Content Delivery Networks) are services that provides copies of libraries for your website. Instead of installing Bootstrap via a package manager, you link to CDN-hosted files in your website.

Here are our primary CDN links for CSS and JavaScript:

```html
<link href="[[config:cdn.css]]" rel="stylesheet" integrity="[[config:cdn.css_hash]]" crossorigin="anonymous">
<script type="module" src="[[config:cdn.js_bundle]]" integrity="[[config:cdn.js_bundle_hash]]" crossorigin="anonymous"></script>
```

If you prefer to include Floating UI and Vanilla Calendar Pro separately instead of using the bundle, use an import map to resolve the bare module specifiers:

```html
<script type="importmap">
{
  "imports": {
    "@floating-ui/dom": "[[config:cdn.floating_ui_esm]]",
    "vanilla-calendar-pro": "[[config:cdn.vanilla_calendar_pro_esm]]"
  }
}
</script>
<script type="module" src="[[config:cdn.js]]" integrity="[[config:cdn.js_hash]]" crossorigin="anonymous"></script>
```

<BsTable>
| File type | URL |
| --- | --- |
| CSS | [`[[config:cdn.css]]`]([[config:cdn.css]]) |
| JS bundle (with Floating UI and Vanilla Calendar Pro) | [`[[config:cdn.js_bundle]]`]([[config:cdn.js_bundle]]) |
</BsTable>

### Using CDNs

You can also use the CDN to fetch any of our additional builds.

When using CDN links, be sure to use the `integrity` attribute to verify the correct files and versions. These hashes are unique to each file and version of Bootstrap, so when you update to a new version, be sure the `integrity` attribute is also updated.

We also include a `crossorigin="anonymous"` attribute to prevent [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors.

### Alternative CDNs

We recommend [jsDelivr](https://www.jsdelivr.com/) and use it ourselves in our documentation. However, in some cases—like in some specific countries or environments—you may need to use other CDN providers like [cdnjs](https://cdnjs.com/) or [unpkg](https://unpkg.com/).

You’ll find the same files on these CDN providers, albeit with different URLs. With cdnjs, you can [use this direct Bootstrap package link](https://cdnjs.com/libraries/bootstrap) to copy and paste ready-to-use HTML snippets for each dist file from any version of Bootstrap.

<Callout type="warning">
**Security warning** — If the SRI hashes differ for a given file, you shouldn’t use the files from that CDN, because it means that the file was modified by someone else.
</Callout>

Note that you should compare same length hashes, e.g. `sha384` with `sha384`, otherwise it’s expected for them to be different.
As such, you can use an online tool like [SRI Hash Generator](https://www.srihash.org/) to make sure that the hashes are the same for a given file.
Alternatively, assuming you have OpenSSL installed, you can achieve the same from the CLI, for example:

```sh
openssl dgst -sha384 -binary bootstrap.min.js | openssl base64 -A
```

## Download

You can also do the old fashioned thing and download Bootstrap manually. Choose between compiled dist (distribution) files or source files. The latter requires some additional tooling to compiled and use Bootstrap in your project.

<BsTable>
| Type | Description | Link |
| --- | --- | --- |
| <strong class="text-nowrap">Distribution files</strong> | Ready-to-use compiled and minified CSS and JavaScript files. Doesn’t include documentation, source files, or dependencies like Floating UI and Vanilla Calendar Pro. | <a href="[[config:download.dist]]" class="theme-accent">Download</a> |
| <strong class="text-nowrap">Source files</strong> | Sass, JavaScript, and documentation files for compiling with your own asset pipeline. Requires [Sass compiler]([[docsref:/guides/contribute#sass]]), [Autoprefixer](https://github.com/postcss/autoprefixer), and a JavaScript bundler like [Rollup](https://rollupjs.org/) or [Webpack](https://webpack.js.org/). | <a href="[[config:download.source]]" class="theme-accent">Download</a> |
</BsTable>

Should you require our full set of [build tools]([[docsref:/guides/contribute#tooling-setup]]), they are included for developing Bootstrap and its docs, but they’re likely unsuitable for your own purposes.

## For AI tools & LLMs

Bootstrap’s documentation is available in a machine-readable format, and we ship agent skills for AI-powered coding tools. See [AI]([[docsref:/getting-started/ai]]) for our `llms.txt` files and the full list of skills.
-->

<template>
  <article class="docs-content prose">
    <h1>安装 Bootstrap</h1>
    <p>通过 CDN、包管理器或源文件将 Bootstrap 添加到你的项目中。</p>
    <h2 id="install">
      安装
      <a class="anchor-link" href="#install" aria-hidden="true"></a>
    </h2>
    <p>使用包管理器将 Bootstrap 的<strong>源文件</strong>引入几乎任何项目。通过包管理器安装的内容不包含文档或完整的构建脚本。你也可以<a
        href="https://github.com/twbs/examples">使用我们 Examples 仓库中的任意示例</a>来快速启动 Bootstrap 项目。</p>

    <CodeTabs :tabs="[
      { label: 'npm', code: 'npm install bootstrap', lang: 'bash' },
      { label: 'pnpm', code: 'pnpm add bootstrap', lang: 'bash' },
      { label: 'Yarn', code: 'yarn add bootstrap', lang: 'bash' },
      { label: 'Bun', code: 'bun add bootstrap', lang: 'bash' }
    ]" />

    <p>安装完成后，请前往<a href="/docs/guides/npm">我们的 npm 指南</a>查看完整配置说明。</p>

    <Callout name="info-npm-starter" />

    <h3 id="using-npm">
      使用 npm
      <a class="anchor-link" href="#using-npm" aria-hidden="true"></a>
    </h3>
    <p>使用 <code>import * as bootstrap from 'bootstrap'</code> 会将 Bootstrap 的所有插件加载到一个 <code>bootstrap</code>
      对象上。你也可以单独导入插件以实现自动 tree shaking：</p>

    <CodeWrapper code="import { Tooltip, Toast, Popover } from 'bootstrap'" lang="javascript" />

    <p>你也可以直接加载包顶级目录下的 <code>/js/dist/*.js</code> 文件来导入插件。</p>
    <p>Bootstrap 的 <code>package.json</code> 在以下 key 中包含一些额外的元数据：</p>
    <ul>
      <li><code>sass</code> —— 指向 Bootstrap 主 <a href="https://sass-lang.com/">Sass</a> 源文件的路径</li>
      <li><code>style</code> —— 指向使用默认设置（无自定义）编译的 Bootstrap 非压缩 CSS 的路径</li>
    </ul>
    <p>此外，Bootstrap 在包根目录下附带了一个 <code>.browserslistrc</code> 文件，用于定义 Browserslist 和 Autoprefixer 等工具的浏览器目标。完整支持策略请参阅<a
        href="/docs/getting-started/browsers-devices">浏览器与设备</a>。</p>

    <h3 id="using-yarn">
      使用 Yarn
      <a class="anchor-link" href="#using-yarn" aria-hidden="true"></a>
    </h3>
    <p>Yarn 2+（即 Yarn Berry）默认不支持 <code>node_modules</code> 目录，因此我们的 <a
        href="https://github.com/twbs/examples/tree/main/sass-js">Sass 与 JS 示例</a> 需要做一些调整：</p>

    <CodeWrapper code="yarn config set nodeLinker node-modules # Use the node_modules linker
touch yarn.lock # Create an empty yarn.lock file
yarn install # Install the dependencies
yarn start # Start the project" lang="shell" />

    <h2 id="more-packages">
      更多包
      <a class="anchor-link" href="#more-packages" aria-hidden="true"></a>
    </h2>
    <p>Bootstrap 还提供其他通过包管理器安装的方式。</p>

    <CodeTabs :tabs="[
      { label: 'RubyGems', code: `gem 'bootstrap', '~> 6.0.0-alpha.1'`, lang: 'bash' },
      { label: 'Composer', code: 'composer require twbs/bootstrap:6.0.0-alpha.1', lang: 'bash' },
      {
        label: 'NuGet', code: `Install-Package bootstrap # Default
Install-Package bootstrap.sass # Sass version`, lang: 'shell'
      }
    ]" />

    <h3 id="using-rubygems">
      使用 RubyGems
      <a class="anchor-link" href="#using-rubygems" aria-hidden="true"></a>
    </h3>
    <p>我们建议使用 <a href="https://bundler.io/">Bundler</a> 在你的 Ruby 应用中安装 Bootstrap，但你也可以使用 <a
        href="https://rubygems.org/">RubyGems</a>。更多细节请参阅<a
        href="https://github.com/twbs/bootstrap-rubygem/blob/main/README.md">该 gem 的 README</a>。</p>

    <CodeWrapper code="gem install bootstrap -v 6.0.0-alpha.1" lang="shell" />

    <h3 id="using-nuget">
      使用 NuGet
      <a class="anchor-link" href="#using-nuget" aria-hidden="true"></a>
    </h3>
    <p>如果你在 .NET Framework 中开发，也可以使用 <a href="https://www.nuget.org/">NuGet</a> 安装和管理 Bootstrap 的 <a
        href="https://www.nuget.org/packages/bootstrap/">CSS</a> 或 <a
        href="https://www.nuget.org/packages/bootstrap.sass/">Sass</a> 及 JavaScript。较新的项目应使用 <a
        href="https://learn.microsoft.com/en-us/aspnet/core/client-side/libman/">libman</a> 或其他方式，因为 NuGet
      是为编译后的代码设计的，而非前端资源。</p>

    <h2 id="cdn">
      CDN
      <a class="anchor-link" href="#cdn" aria-hidden="true"></a>
    </h2>
    <p>通过 CDN 引入 Bootstrap 的 CSS 和 JavaScript 文件。CDN（内容分发网络）是为你的网站提供库副本的服务。与其通过包管理器安装 Bootstrap，不如在网站中链接到 CDN 托管的文件。</p>
    <p>以下是我们的主要 CSS 和 JavaScript CDN 链接：</p>

    <CodeWrapper
      code='<link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">
<script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL" crossorigin="anonymous"></script>'
      lang="html" />

    <p>如果你希望单独引入 Floating UI 和 Vanilla Calendar Pro 而不是使用打包版本，请使用 import map 来解析裸模块说明符：</p>

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
      lang="html" />

    <div class="table-responsive">
      <table class="table md:table-stacked">
        <thead>
          <tr>
            <th>文件类型</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CSS</td>
            <td><a
                href="[[config:cdn.css]]"><code>https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css</code></a>
            </td>
          </tr>
          <tr>
            <td>JS bundle（包含 Floating UI 和 Vanilla Calendar Pro）</td>
            <td><a
                href="[[config:cdn.js_bundle]]"><code>https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js</code></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="using-cdns">
      使用 CDN
      <a class="anchor-link" href="#using-cdns" aria-hidden="true"></a>
    </h3>
    <p>你也可以使用 CDN 获取我们的任何其他构建版本。</p>
    <p>使用 CDN 链接时，请务必使用 <code>integrity</code> 属性来校验正确的文件和版本。这些哈希值对每个文件和每个 Bootstrap 版本都是唯一的，因此当你更新到新版本时，请确保
      <code>integrity</code> 属性也一并更新。</p>
    <p>我们还添加了 <code>crossorigin="anonymous"</code> 属性以防止 <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a> 错误。</p>

    <h3 id="alternative-cdns">
      其他 CDN
      <a class="anchor-link" href="#alternative-cdns" aria-hidden="true"></a>
    </h3>
    <p>我们推荐 <a href="https://www.jsdelivr.com/">jsDelivr</a>，并在自己的文档中使用它。但在某些情况下——比如在某些特定国家或环境中——你可能需要使用其他 CDN 提供商，如 <a
        href="https://cdnjs.com/">cdnjs</a> 或 <a href="https://unpkg.com/">unpkg</a>。</p>
    <p>你可以在这些 CDN 提供商上找到相同的文件，只是 URL 不同。使用 cdnjs 时，你可以<a href="https://cdnjs.com/libraries/bootstrap">使用这个 Bootstrap
        包直链</a>来复制粘贴任意版本 Bootstrap 各 dist 文件的即用型 HTML 片段。</p>

    <Callout type="warning">
      <p><strong>安全警告</strong> —— 如果某个文件的 SRI 哈希值不一致，你不应使用该 CDN 上的文件，因为这意味着文件已被他人修改。</p>
    </Callout>

    <p>请注意，你应比较长度相同的哈希值，例如将 <code>sha384</code> 与 <code>sha384</code> 比较，否则它们不同是意料之中的。<br>
      因此，你可以使用 <a href="https://www.srihash.org/">SRI Hash Generator</a> 这样的在线工具来确认某个文件的哈希值是否一致。<br>
      或者，假设你已安装 OpenSSL，也可以通过命令行实现同样的校验，例如：</p>

    <CodeWrapper code="openssl dgst -sha384 -binary bootstrap.min.js | openssl base64 -A" lang="shell" />

    <h2 id="download">
      下载
      <a class="anchor-link" href="#download" aria-hidden="true"></a>
    </h2>
    <p>你也可以用传统方式手动下载 Bootstrap。可以在编译好的 dist（分发）文件和源文件之间选择。后者需要一些额外的工具才能在项目中使用 Bootstrap。</p>

    <div class="table-responsive">
      <table class="table md:table-stacked">
        <thead>
          <tr>
            <th>类型</th>
            <th>说明</th>
            <th>链接</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong class="text-nowrap">分发文件</strong></td>
            <td>即用型的编译并压缩后的 CSS 和 JavaScript 文件。不包含文档、源文件，也不包含 Floating UI 和 Vanilla Calendar Pro 等依赖。</td>
            <td><a
                href="https://github.com/twbs/bootstrap/releases/download/v6.0.0-alpha.1/bootstrap-6.0.0-alpha.1-dist.zip"
                class="theme-accent">下载</a></td>
          </tr>
          <tr>
            <td><strong class="text-nowrap">源文件</strong></td>
            <td>用于通过你自己的资源管线编译的 Sass、JavaScript 和文档文件。需要 <a href="/docs/guides/contribute#sass">Sass 编译器</a>、<a
                href="https://github.com/postcss/autoprefixer">Autoprefixer</a>，以及 <a
                href="https://rollupjs.org/">Rollup</a> 或 <a href="https://webpack.js.org/">Webpack</a> 之类的 JavaScript
              打包工具。</td>
            <td><a href="https://github.com/twbs/bootstrap/archive/v6.0.0-alpha.1.zip" class="theme-accent">下载</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>如果你需要我们的全套<a href="/docs/guides/contribute#tooling-setup">构建工具</a>，它们包含在 Bootstrap 及其文档的开发中，但可能不适合你自己的用途。
    </p>

    <h2 id="for-ai-tools--llms">
      面向 AI 工具与 LLM
      <a class="anchor-link" href="#for-ai-tools--llms" aria-hidden="true"></a>
    </h2>
    <p>Bootstrap 的文档提供机器可读格式，我们还为 AI 驱动的编码工具提供了 agent skills。关于我们的 <code>llms.txt</code> 文件和完整的 skills 列表，请参阅 <a
        href="/docs/getting-started/ai">AI</a>。</p>
  </article>
  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
      <li>
        <a href="#install">安装</a>
        <ul>
          <li><a href="#using-npm">使用 npm</a></li>
          <li><a href="#using-yarn">使用 Yarn</a></li>
        </ul>
      </li>
      <li>
        <a href="#more-packages">更多包</a>
        <ul>
          <li><a href="#using-rubygems">使用 RubyGems</a></li>
          <li><a href="#using-nuget">使用 NuGet</a></li>
        </ul>
      </li>
      <li>
        <a href="#cdn">CDN</a>
        <ul>
          <li><a href="#using-cdns">使用 CDN</a></li>
          <li><a href="#alternative-cdns">其他 CDN</a></li>
        </ul>
      </li>
      <li><a href="#download">下载</a></li>
      <li><a href="#for-ai-tools--llms">面向 AI 工具与 LLM</a></li>
    </ul>
  </nav>
</template>
