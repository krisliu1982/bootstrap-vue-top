<template>
  <article class="bd-content" data-pagefind-body>
    <h1>Sass</h1>
    <p class="lead">利用我们的 Sass 源文件，充分利用变量、映射、mixin 和函数，帮助你更快地构建并自定义项目。</p>

    <p>利用我们的 Sass 源文件，充分利用变量、映射、mixin 等。</p>
    <Callout type="warning">
      <p>
        使用最新版本的 Dart Sass 编译 Sass 源文件时会显示 Sass 弃用警告。这不会阻止 Bootstrap 的编译或使用。我们正在
        <a href="https://github.com/twbs/bootstrap/issues/40962">着手长期修复</a> ，但在此期间可以忽略这些弃用通知。
      </p>
    </Callout>
    <h2 id="file-structure">文件结构<a class="anchor-link" href="#file-structure" aria-label="文件结构"></a></h2>
    <p>请尽可能避免修改 Bootstrap 的核心文件。对于 Sass 而言，这意味着创建你自己的样式表并导入 Bootstrap，以便对其进行修改和扩展。假设你使用 npm 这样的包管理器，你的文件结构将如下所示：</p>
    <CodeWrapper
      code="your-project/
├── scss/
│   └── custom.scss
└── node_modules/
│   └── bootstrap/
│       ├── js/
│       └── scss/
└── index.html
"
      lang="text"
    />
    <p>如果你已经下载了我们的源文件且不使用包管理器，你将需要手动创建类似的结构，并将 Bootstrap 的源文件与你自己的文件分开存放。</p>
    <CodeWrapper
      code="your-project/
├── scss/
│   └── custom.scss
├── bootstrap/
│   ├── js/
│   └── scss/
└── index.html
"
      lang="text"
    />
    <h2 id="importing">导入<a class="anchor-link" href="#importing" aria-label="导入"></a></h2>
    <p>在你的 <code>custom.scss</code> 中，你将导入 Bootstrap 的 Sass 源文件。你有两个选择：包含整个 Bootstrap，或挑选你需要的部分。我们建议后者，但请注意我们的组件之间存在一些要求和依赖关系。你还需要为我们的插件引入一些 JavaScript。</p>
    <CodeWrapper
      code='// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won’t be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here
'
      lang="scss"
    />
    <CodeWrapper
      code='// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 6. Include any other optional stylesheet partials as desired; list below is not inclusive of all available stylesheets
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";
// ...

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Add additional custom code here
'
      lang="scss"
    />
    <p>完成上述设置后，你就可以开始修改 <code>custom.scss</code> 中的任何 Sass 变量和映射。你还可以根据需要开始在 <code>// Optional</code> 部分添加 Bootstrap 的部分内容。我们建议以 <code>bootstrap.scss</code> 文件中的完整导入栈作为起点。</p>
    <h2 id="compiling">编译<a class="anchor-link" href="#compiling" aria-label="编译"></a></h2>
    <p>
      为了在浏览器中将自定义 Sass 代码作为 CSS 使用，你需要一个 Sass 编译器。Sass 以 CLI 包的形式提供，但你也可以使用其他构建工具（如
      <a href="https://gulpjs.com/">Gulp</a> 或 <a href="https://webpack.js.org/">Webpack</a> ）或 GUI 应用程序来编译它。某些 IDE 也内置了 Sass 编译器，或以可下载扩展的形式提供。
    </p>
    <p>我们喜欢使用 CLI 来编译 Sass，但你可以使用任何你偏好的方式。在命令行中运行以下命令：</p>
    <CodeWrapper
      code="# Install Sass globally
npm install -g sass

# Watch your custom Sass for changes and compile it to CSS
sass --watch ./scss/custom.scss ./css/custom.css
"
      lang="shell"
    />
    <p>请在 <a href="https://sass-lang.com/install/">sass-lang.com/install</a> 和 <a href="https://code.visualstudio.com/docs/languages/css#_transpiling-sass-and-less-into-css">使用 VS Code 编译</a> 中了解更多选项。</p>
    <Callout>
      <p><strong>将 Bootstrap 与其他构建工具配合使用？</strong>可以考虑阅读我们关于使用 <a href="/getting-started/webpack">Webpack</a> 、 <a href="/getting-started/parcel">Parcel</a> 或 <a href="/getting-started/vite">Vite</a> 编译的指南。我们还在 <a href="https://github.com/twbs/examples">GitHub 上的示例仓库</a> 中提供了可用于生产环境的演示。</p>
    </Callout>
    <h2 id="including">引入<a class="anchor-link" href="#including" aria-label="引入"></a></h2>
    <p>CSS 编译完成后，你可以将其引入到你的 HTML 文件中。在 <code>index.html</code> 中，你需要引入编译后的 CSS 文件。如果你更改了编译后 CSS 文件的路径，请务必更新它。</p>
    <CodeWrapper
      code='&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Custom Bootstrap&lt;/title&gt;
    &lt;link href="/css/custom.css" rel="stylesheet"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;'
      lang="html"
    />
    <h2 id="variable-defaults">变量默认值<a class="anchor-link" href="#variable-defaults" aria-label="变量默认值"></a></h2>
    <p>Bootstrap 中的每个 Sass 变量都包含 <code>!default</code> 标志，允许你在自己的 Sass 中覆盖变量的默认值，而无需修改 Bootstrap 的源代码。根据需要复制粘贴变量，修改其值，并移除 <code>!default</code> 标志。如果变量已被赋值，那么 Bootstrap 中的默认值将不会 重新赋值。</p>
    <p>你可以在 <code>scss/_variables.scss</code> 中找到 Bootstrap 变量的完整列表。某些变量被设置为 <code>null</code>，除非在你的配置中覆盖它们，否则这些变量不会输出该属性。</p>
    <p>变量覆盖必须位于我们的函数导入之后，但在其余导入之前。</p>
    <p>下面是一个示例，展示通过 npm 导入并编译 Bootstrap 时，如何更改 <code>&lt;body&gt;</code> 的 <code>background-color</code> 和 <code>color</code>：</p>
    <CodeWrapper
      code='// Required
@import "../node_modules/bootstrap/scss/functions";

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional Bootstrap components here
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
'
      lang="scss"
    />
    <p>按需对 Bootstrap 中的任何变量（包括下面的全局选项）重复此操作。</p>
    <Callout name="info-npm-starter" />
    <h2 id="maps-and-loops">映射与循环<a class="anchor-link" href="#maps-and-loops" aria-label="映射与循环"></a></h2>
    <p>Bootstrap 包含若干 Sass 映射，即键值对，可让你更轻松地生成相关的 CSS 类族。我们将 Sass 映射用于颜色、栅格断点等。与 Sass 变量一样，所有 Sass 映射都包含 <code>!default</code> 标志，可以被覆盖和扩展。</p>
    <p>我们的一些 Sass 映射默认会合并到空映射中。这样做是为了便于扩展给定的 Sass 映射，但代价是从映射中<em>移除</em>项会稍微困难一些。</p>
    <h3 id="modify-map">修改映射<a class="anchor-link" href="#modify-map" aria-label="修改映射"></a></h3>
    <p><code>$theme-colors</code> 映射中的所有变量都定义为独立变量。要修改 <code>$theme-colors</code> 映射中的现有颜色，请将以下内容添加到你的自定义 Sass 文件中：</p>
    <CodeWrapper
      code="$primary: #0074d9;
$danger: #ff4136;
"
      lang="scss"
    />
    <p>稍后，这些变量会被设置到 Bootstrap 的 <code>$theme-colors</code> 映射中：</p>
    <CodeWrapper
      code='$theme-colors: (
  "primary": $primary,
  "danger": $danger
);
'
      lang="scss"
    />
    <h3 id="add-to-map">添加到映射<a class="anchor-link" href="#add-to-map" aria-label="添加到映射"></a></h3>
    <p>通过使用你的自定义值创建一个新的 Sass 映射，并将其与原始映射合并，即可向 <code>$theme-colors</code> 或任何其他映射添加新颜色。在本例中，我们将创建一个新的 <code>$custom-colors</code> 映射，并将其与 <code>$theme-colors</code> 合并。</p>
    <CodeWrapper
      code='// Create your own map
$custom-colors: (
  "custom-color": #900
);

// Merge the maps
$theme-colors: map-merge($theme-colors, $custom-colors);
'
      lang="scss"
    />
    <h3 id="remove-from-map">从映射中移除<a class="anchor-link" href="#remove-from-map" aria-label="从映射中移除"></a></h3>
    <p>要从 <code>$theme-colors</code> 或任何其他映射中移除颜色，请使用 <code>map-remove</code>。请注意，你必须将 <code>$theme-colors</code> 插入到我们的依赖项之间，紧跟其在 <code>variables</code> 中的定义之后，并位于其在 <code>maps</code> 中的使用之前：</p>
    <CodeWrapper
      code='// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
'
      lang="scss"
    />
    <h2 id="required-keys">必需的键<a class="anchor-link" href="#required-keys" aria-label="必需的键"></a></h2>
    <p>由于我们自己使用并扩展了某些特定的键，Bootstrap 假定 Sass 映射中存在这些键。当你自定义包含的映射时，可能会遇到使用了某个特定 Sass 映射键的错误。</p>
    <p>例如，我们在链接、按钮和表单状态中使用了 <code>$theme-colors</code> 中的 <code>primary</code>、<code>success</code> 和 <code>danger</code> 键。替换这些键的值应该不会带来问题，但移除它们可能会导致 Sass 编译问题。在这些情况下，你需要修改使用这些值的 Sass 代码。</p>
    <h2 id="functions">函数<a class="anchor-link" href="#functions" aria-label="函数"></a></h2>
    <h3 id="colors">颜色<a class="anchor-link" href="#colors" aria-label="颜色"></a></h3>
    <p>除了我们已有的 <a href="/customize/color#color-sass-maps">Sass 映射</a> 之外，主题色还可以作为独立变量使用，例如 <code>$primary</code>。</p>
    <CodeWrapper
      code=".custom-element {
  color: $gray-100;
  background-color: $dark;
}
"
      lang="scss"
    />
    <p>你可以使用 Bootstrap 的 <code>tint-color()</code> 和 <code>shade-color()</code> 函数来变亮或变暗颜色。这些函数会将颜色与黑色或白色混合，不同于 Sass 原生的 <code>lighten()</code> 和 <code>darken()</code> 函数，后者会按固定量更改明度，这通常无法达到预期 效果。</p>
    <p><code>shift-color()</code> 结合了这两个函数：如果权重为正，则加深颜色；如果权重为负，则变亮颜色。</p>
    <ScssDocs name="color-functions" file="scss/_functions.scss" />
    <p>在实践中，你会调用该函数并传入颜色和权重参数。</p>
    <CodeWrapper
      code=".custom-element {
  color: tint-color($primary, 10%);
}

.custom-element-2 {
  color: shade-color($danger, 30%);
}

.custom-element-3 {
  color: shift-color($success, 40%);
  background-color: shift-color($success, -60%);
}
"
      lang="scss"
    />
    <h3 id="color-contrast">颜色对比度<a class="anchor-link" href="#color-contrast" aria-label="颜色对比度"></a></h3>
    <p>
      为了满足
      <a href="https://www.w3.org/TR/WCAG/">Web 内容无障碍指南（WCAG）</a> 的对比度要求，作者<strong>必须</strong>提供至少 <a href="https://www.w3.org/TR/WCAG/#contrast-minimum">4.5:1 的文本颜色对比度</a> 和至少 <a href="https://www.w3.org/TR/WCAG/#non-text-contrast">3:1 的非文本颜色对比度</a> ，极少数例外情况除外。
    </p>
    <p>
      为帮助解决这一问题，我们在 Bootstrap 中包含了 <code>color-contrast</code> 函数。它使用 <a href="https://www.w3.org/TR/WCAG/#dfn-contrast-ratio">WCAG 对比度算法</a> ，在 <code>sRGB</code> 颜色空间中基于
      <a href="https://www.w3.org/TR/WCAG/#dfn-relative-luminance">相对亮度</a>计算对比度阈值，从而根据指定的基础颜色自动返回浅色（<code>#fff</code>）、深色（<code>#212529</code>）或黑色（<code>#000</code>）对比色。此函数对于生成多个类的 mixin 或循环特别有用。
    </p>
    <p>例如，从我们的 <code>$theme-colors</code> 映射生成色板：</p>
    <CodeWrapper
      code="@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}
"
      lang="scss"
    />
    <p>它也可以用于一次性的对比度需求：</p>
    <CodeWrapper
      code=".custom-element {
  color: color-contrast(#000); // returns `color: #fff`
}
"
      lang="scss"
    />
    <p>你也可以使用我们的颜色映射函数指定基础颜色：</p>
    <CodeWrapper
      code=".custom-element {
  color: color-contrast($dark); // returns `color: #fff`
}
"
      lang="scss"
    />
    <h3 id="escape-svg">转义 SVG<a class="anchor-link" href="#escape-svg" aria-label="转义 SVG"></a></h3>
    <p>我们使用 <code>escape-svg</code> 函数来为 SVG 背景图像转义 <code>&lt;</code>、<code>&gt;</code> 和 <code>#</code> 字符。使用 <code>escape-svg</code> 函数时，数据 URI 必须加引号。</p>
    <h3 id="add-and-subtract-functions">加法与减法函数<a class="anchor-link" href="#add-and-subtract-functions" aria-label="加法与减法函数"></a></h3>
    <p>我们使用 <code>add</code> 和 <code>subtract</code> 函数来包装 CSS 的 <code>calc</code> 函数。这些函数的主要目的是在将“无单位”的 <code>0</code> 值传入 <code>calc</code> 表达式时避免错误。像 <code>calc(10px - 0)</code> 这样的表达式在所有浏览器中都会返回错误，尽管 它在数学上是正确的。</p>
    <p>calc 有效的示例：</p>
    <CodeWrapper
      code="$border-radius: .25rem;
$border-width: 1px;

.element {
  // Output calc(.25rem - 1px) is valid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output the same calc(.25rem - 1px) as above
  border-radius: subtract($border-radius, $border-width);
}
"
      lang="scss"
    />
    <p>calc 无效的示例：</p>
    <CodeWrapper
      code="$border-radius: .25rem;
$border-width: 0;

.element {
  // Output calc(.25rem - 0) is invalid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output .25rem
  border-radius: subtract($border-radius, $border-width);
}
"
      lang="scss"
    />
    <h2 id="mixins">Mixin<a class="anchor-link" href="#mixins" aria-label="Mixin"></a></h2>
    <p>我们的 <code>scss/mixins/</code> 目录包含大量 mixin，它们为 Bootstrap 的各个部分提供支持，也可以在你的项目中使用。</p>
    <h3 id="color-schemes">配色方案<a class="anchor-link" href="#color-schemes" aria-label="配色方案"></a></h3>
    <p>我们提供了 <code>prefers-color-scheme</code> 媒体查询的简写 mixin，支持 <code>light</code> 和 <code>dark</code> 配色方案。有关颜色模式 mixin 的信息，请参阅 <a href="/customize/color-modes">颜色模式文档</a> 。</p>
    <ScssDocs name="mixin-color-scheme" file="scss/mixins/_color-scheme.scss" />
    <CodeWrapper
      code=".custom-element {
  @include color-scheme(light) {
    // Insert light mode styles here
  }

  @include color-scheme(dark) {
    // Insert dark mode styles here
  }
}
"
      lang="scss"
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#file-structure">文件结构</a></li>
      <li><a href="#importing">导入</a></li>
      <li><a href="#compiling">编译</a></li>
      <li><a href="#including">引入</a></li>
      <li><a href="#variable-defaults">变量默认值</a></li>
      <li>
        <a href="#maps-and-loops">映射与循环</a>
        <ul>
          <li><a href="#modify-map">修改映射</a></li>
          <li><a href="#add-to-map">添加到映射</a></li>
          <li><a href="#remove-from-map">从映射中移除</a></li>
        </ul>
      </li>
      <li><a href="#required-keys">必需的键</a></li>
      <li>
        <a href="#functions">函数</a>
        <ul>
          <li><a href="#colors">颜色</a></li>
          <li><a href="#color-contrast">颜色对比度</a></li>
          <li><a href="#escape-svg">转义 SVG</a></li>
          <li><a href="#add-and-subtract-functions">加法与减法函数</a></li>
        </ul>
      </li>
      <li>
        <a href="#mixins">Mixin</a>
        <ul>
          <li><a href="#color-schemes">配色方案</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
