---
title: 安装 Bootstrap
description: 通过 CDN、包管理器或源文件将 Bootstrap 添加到你的项目中。
toc: true
---

## 安装

使用包管理器将 Bootstrap 的**源文件**引入几乎任何项目。通过包管理器安装不会包含文档或完整的构建脚本。你也可以[使用我们示例仓库中的任意示例](https://github.com/twbs/examples)来快速启动 Bootstrap 项目。

<CodeTabs
  :tabs="[
    { label: 'npm', code: 'npm install bootstrap', lang: 'bash' },
    { label: 'pnpm', code: 'pnpm add bootstrap', lang: 'bash' },
    { label: 'Yarn', code: 'yarn add bootstrap', lang: 'bash' },
    { label: 'Bun', code: 'bun add bootstrap', lang: 'bash' }
  ]"
/>

安装完成后，请前往[我们的 npm 指南]([[docsref:/guides/npm]])查看完整的设置指南。

<Callout name="info-npm-starter" />

### 使用 npm

使用 `import * as bootstrap from 'bootstrap'` 会将 Bootstrap 的所有插件加载到 `bootstrap` 对象上。你也可以单独导入插件以实现自动 tree shaking（摇树优化）：

<CodeWrapper code="import { Tooltip, Toast, Popover } from 'bootstrap'" lang="javascript" />

你也可以通过加载包顶层目录下的 `/js/dist/*.js` 文件来直接导入插件。

Bootstrap 的 `package.json` 在以下键下包含一些额外的元数据：

- `sass` — Bootstrap 主 [Sass](https://sass-lang.com/) 源文件的路径
- `style` — 使用默认设置（无自定义）编译的 Bootstrap 未压缩 CSS 的路径

此外，Bootstrap 在包根目录下附带了一个 `.browserslistrc` 文件，它为 Browserslist 和 Autoprefixer 等工具定义浏览器目标。完整支持策略请参阅[浏览器与设备]([[docsref:/getting-started/browsers-devices]])。

### 使用 Yarn

Yarn 2+（又称 Yarn Berry）默认不支持 `node_modules` 目录，因此我们的 [Sass 与 JS 示例](https://github.com/twbs/examples/tree/main/sass-js)需要做一些调整：

<CodeWrapper code="yarn config set nodeLinker node-modules # Use the node_modules linker
touch yarn.lock # Create an empty yarn.lock file
yarn install # Install the dependencies
yarn start # Start the project" lang="shell" />

## 更多包

Bootstrap 还提供了其他通过包管理器安装的方式。

<CodeTabs
  :tabs="[
    { label: 'RubyGems', code: `gem 'bootstrap', '~> [[config:current_ruby_version]]'`, lang: 'bash' },
    { label: 'Composer', code: 'composer require twbs/bootstrap:[[config:current_version]]', lang: 'bash' },
    { label: 'NuGet', code: `Install-Package bootstrap # Default
Install-Package bootstrap.sass # Sass version`, lang: 'shell' }
  ]"
/>

### 使用 RubyGems

我们建议在你的 Ruby 应用中使用 [Bundler](https://bundler.io/) 安装 Bootstrap，但你也可以使用 [RubyGems](https://rubygems.org/)。更多细节请参阅[该 gem 的 README](https://github.com/twbs/bootstrap-rubygem/blob/main/README.md)。

<CodeWrapper code="gem install bootstrap -v [[config:current_ruby_version]]" lang="shell" />

### 使用 NuGet

如果你在 .NET Framework 中开发，也可以使用 [NuGet](https://www.nuget.org/) 安装和管理 Bootstrap 的 [CSS](https://www.nuget.org/packages/bootstrap/) 或 [Sass](https://www.nuget.org/packages/bootstrap.sass/) 以及 JavaScript。较新的项目应使用 [libman](https://learn.microsoft.com/en-us/aspnet/core/client-side/libman/) 或其他方法，因为 NuGet 是为编译代码而非前端资源设计的。

## CDN

通过 CDN 引入 Bootstrap 的 CSS 和 JavaScript 文件。CDN（内容分发网络）是为你的网站提供库副本的服务。与其通过包管理器安装 Bootstrap，不如在网站中链接到 CDN 托管的文件。

以下是我们 CSS 和 JavaScript 的主要 CDN 链接：

<CodeWrapper :code='`<link href="[[config:cdn.css]]" rel="stylesheet" integrity="[[config:cdn.css_hash]]" crossorigin="anonymous">
<script type="module" src="[[config:cdn.js_bundle]]" integrity="[[config:cdn.js_bundle_hash]]" crossorigin="anonymous"></script>`' lang="html" />

如果你希望单独引入 Floating UI 和 Vanilla Calendar Pro 而不是使用捆绑包，请使用 import map 来解析裸模块说明符：

<CodeWrapper :code='`<script type="importmap">
{
  "imports": {
    "@floating-ui/dom": "[[config:cdn.floating_ui_esm]]",
    "vanilla-calendar-pro": "[[config:cdn.vanilla_calendar_pro_esm]]"
  }
}
</script>
<script type="module" src="[[config:cdn.js]]" integrity="[[config:cdn.js_hash]]" crossorigin="anonymous"></script>`' lang="html" />

| 文件类型 | URL |
| --- | --- |
| CSS | [`[[config:cdn.css]]`]([[config:cdn.css]]) |
| JS bundle（包含 Floating UI 和 Vanilla Calendar Pro） | [`[[config:cdn.js_bundle]]`]([[config:cdn.js_bundle]]) |

### 使用 CDN

你也可以使用 CDN 获取我们的任何其他构建版本。

使用 CDN 链接时，请务必使用 `integrity` 属性来验证正确的文件和版本。这些哈希值对每个文件和每个 Bootstrap 版本都是唯一的，因此当你更新到新版本时，请确保 `integrity` 属性也已更新。

我们还包含了 `crossorigin="anonymous"` 属性以防止 [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 错误。

### 其他 CDN

我们推荐 [jsDelivr](https://www.jsdelivr.com/)，并在我们自己的文档中使用它。然而，在某些情况下——例如在某些特定国家或环境中——你可能需要使用其他 CDN 提供商，如 [cdnjs](https://cdnjs.com/) 或 [unpkg](https://unpkg.com/)。

你会在这些 CDN 提供商上找到相同的文件，尽管 URL 不同。使用 cdnjs 时，你可以[使用这个直接的 Bootstrap 包链接](https://cdnjs.com/libraries/bootstrap)来复制粘贴任何版本 Bootstrap 的每个 dist 文件的即用型 HTML 片段。

<Callout type="warning">
**安全警告** — 如果给定文件的 SRI 哈希值不同，你不应使用该 CDN 的文件，因为这意味着文件被其他人修改过。
</Callout>

请注意，你应该比较相同长度的哈希值，例如 `sha384` 与 `sha384`，否则它们不同是意料之中的。
因此，你可以使用像 [SRI Hash Generator](https://www.srihash.org/) 这样的在线工具来确保给定文件的哈希值相同。
或者，假设你安装了 OpenSSL，你也可以从 CLI 实现同样的效果，例如：

<CodeWrapper code="openssl dgst -sha384 -binary bootstrap.min.js | openssl base64 -A" lang="shell" />

## 下载

你也可以采用传统方式手动下载 Bootstrap。在编译后的 dist（分发）文件或源文件之间选择。后者需要一些额外的工具才能在项目中编译和使用 Bootstrap。

| 类型 | 描述 | 链接 |
| --- | --- | --- |
| <strong class="text-nowrap">分发文件</strong> | 即用型编译并压缩的 CSS 和 JavaScript 文件。不包含文档、源文件或 Floating UI 和 Vanilla Calendar Pro 等依赖项。 | <a href="[[config:download.dist]]" class="theme-accent">下载</a> |
| <strong class="text-nowrap">源文件</strong> | 用于你自己的资源管道编译的 Sass、JavaScript 和文档文件。需要 [Sass 编译器]([[docsref:/guides/contribute#sass]])、[Autoprefixer](https://github.com/postcss/autoprefixer)，以及像 [Rollup](https://rollupjs.org/) 或 [Webpack](https://webpack.js.org/) 这样的 JavaScript 打包工具。 | <a href="[[config:download.source]]" class="theme-accent">下载</a> |

如果你需要我们完整的[构建工具]([[docsref:/guides/contribute#tooling-setup]])，它们包含在开发和文档构建中，但它们可能不适合你自己的用途。

## 面向 AI 工具与 LLM

Bootstrap 的文档以机器可读格式提供，我们还为 AI 驱动的编码工具提供了 agent skills。请参阅 [AI]([[docsref:/getting-started/ai]]) 了解我们的 `llms.txt` 文件以及技能的完整列表。