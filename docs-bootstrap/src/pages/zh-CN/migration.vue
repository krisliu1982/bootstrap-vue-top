<template>
  <article class="bd-content" data-pagefind-body>
    <h1>迁移到 v5</h1>
    <p class="lead">跟踪并查阅 Bootstrap 源文件、文档和组件的变更，以便帮助你从 v4 迁移到 v5。</p>

    <h2 id="v536">v5.3.6<a class="anchor-link" href="#v536" aria-label="v5.3.6链接"></a></h2>
    <h3 id="dependencies">依赖项<a class="anchor-link" href="#dependencies" aria-label="依赖项链接"></a></h3>
    <ul>
      <li>文档构建从 Hugo 迁移到 Astro</li>
    </ul>
    <h2 id="v530">v5.3.0<a class="anchor-link" href="#v530" aria-label="v5.3.0链接"></a></h2>
    <p>如果你是从 v5.3.0 此前的 alpha 版本迁移而来，请在本节之外一并查阅这些版本中的变更。</p>
    <h3 id="helpers">辅助类<a class="anchor-link" href="#helpers" aria-label="辅助类链接"></a></h3>
    <ul>
      <li><a href="/helpers/colored-links">彩色链接</a>重新带上了 <code>!important</code>，以便更好地配合我们新增的链接工具类工作。</li>
    </ul>
    <h3 id="utilities">工具类<a class="anchor-link" href="#utilities" aria-label="工具类链接"></a></h3>
    <ul>
      <li>新增 <code>.d-inline-grid</code><a href="/utilities/display">显示工具类</a>。</li>
    </ul>
    <h2 id="v530-alpha2">v5.3.0-alpha2<a class="anchor-link" href="#v530-alpha2" aria-label="v5.3.0-alpha2链接"></a></h2>
    <p>如果你是从 v5.3.0 此前的 alpha 版本迁移而来，请查阅下列变更。</p>
    <h3 id="css-variables">CSS 变量<a class="anchor-link" href="#css-variables" aria-label="CSS 变量链接"></a></h3>
    <ul>
      <li>移除了一些重复和未使用的根级 CSS 变量。</li>
    </ul>
    <h3 id="color-modes">色彩模式<a class="anchor-link" href="#color-modes" aria-label="色彩模式链接"></a></h3>
    <ul>
      <li>
        <p>深色模式的颜色现在在 Sass 中由主题色（例如 <code>$primary</code>）派生，而不再使用特定颜色的浅色或深色（例如 <code>$blue-300</code>）。这使得在自定义默认主题色时，可以更自动化地处理深色模式。</p>
      </li>
      <li>
        <p>新增 Sass 映射，用于生成深色模式文本、细微背景和细微边框的主题色。</p>
      </li>
      <li>
        <p><a href="https://getbootstrap.com/docs/5.3/examples/#snippets">代码片段示例</a>现已支持深色模式，并更新了标记、减少了自定义样式。</p>
      </li>
      <li>
        <p>在深色模式 CSS 中添加了 <code>color-scheme: dark</code>，以便改变滚动条等操作系统级控件的外观</p>
      </li>
      <li>
        <p>得益于新增的 Sass 和 CSS 变量，表单校验的 <code>border-color</code> 和文本 <code>color</code> 状态现在会响应深色模式。</p>
      </li>
      <li>
        <p>移除了近期添加的表单控件背景 CSS 变量，并重新指派 Sass 变量改用 CSS 变量。这简化了跨色彩模式的样式处理，也避免了深色模式下表单控件无法正确更新的问题。</p>
      </li>
      <li>
        <p>我们的 <code>box-shadow</code> 将再次始终保持深色，而不会在深色模式下反转为白色。</p>
      </li>
      <li>
        <p>改进了色彩模式切换脚本的 HTML 和 JavaScript。用于切换活动 SVG 的选择器得到了改进，并借助 ARIA 属性让标记更易访问。</p>
      </li>
      <li><p>改进了浅色和深色模式下文档代码语法配色等效果。</p></li>
    </ul>
    <h3 id="typography">排版<a class="anchor-link" href="#typography" aria-label="排版链接"></a></h3>
    <ul>
      <li>我们不再为深色模式设置 <code>$headings-color-dark</code> 或 <code>--bs-heading-color</code> 的颜色。为避免组件内标题出现颜色错误等多个问题，我们将 Sass 变量设为 <code>null</code>，并像默认浅色模式那样添加了 <code>null</code> 检查。</li>
    </ul>
    <h3 id="components">组件<a class="anchor-link" href="#components" aria-label="组件链接"></a></h3>
    <ul>
      <li>
        <p>卡片现在设置了 <code>color</code>，以改善在各类色彩模式下的渲染效果。</p>
      </li>
      <li>
        <p>
          为导航新增了 <code>.nav-underline</code> 变体，在激活的导航链接下方显示更简洁的底部边框。
          <a href="/components/navs-tabs#underline">查看文档中的示例。</a>
        </p>
      </li>
      <li>
        <p>导航现在拥有新的 <code>:focus-visible</code> 样式，与我们自定义的按钮聚焦样式更加匹配。</p>
      </li>
    </ul>
    <h3 id="helpers-1">辅助类<a class="anchor-link" href="#helpers-1" aria-label="辅助类链接"></a></h3>
    <ul>
      <li>
        <p>新增 <code>.icon-link</code> 辅助类，用于快速将 Bootstrap Icons 放置在文本链接旁并与之对齐。图标链接同样支持我们新增的链接工具类。</p>
      </li>
      <li>
        <p>新增聚焦环辅助类，用于移除默认的 <code>outline</code> 并设置自定义的 <code>box-shadow</code> 聚焦环。</p>
      </li>
    </ul>
    <h3 id="utilities-1">工具类<a class="anchor-link" href="#utilities-1" aria-label="工具类链接"></a></h3>
    <ul>
      <li>
        <p>将 Sass 和 CSS 变量 <code>${color}-text</code> 重命名为 <code>${color}-text-emphasis</code>，以与其关联的工具类保持一致。</p>
      </li>
      <li>
        <p>在<a href="/helpers/colored-links">彩色链接</a>之外新增了 <code>.link-body-emphasis</code> 辅助类。它使用我们对色彩模式做出响应的强调色来创建彩色链接。</p>
      </li>
      <li>
        <p>
          新增链接工具类，用于控制链接颜色不透明度、下划线偏移、下划线颜色和下划线不透明度。
          <a href="/utilities/link">探索新的链接工具类。</a>
        </p>
      </li>
      <li>
        <p>基于 CSS 变量的 <code>border-width</code> 工具类已恢复为直接设置其属性（即 v5.2.0 之前的做法）。这避免了包括表格在内的嵌套元素之间的继承问题。</p>
      </li>
      <li>
        <p>新增 <code>.border-black</code> 工具类，与 <code>.text-black</code> 和 <code>.bg-black</code> 工具类保持一致。</p>
      </li>
      <li>
        <p><span class="badge text-warning-emphasis bg-warning-subtle">已弃用</span> <code>.text-muted</code> 工具类和 <code>$text-muted</code> Sass 变量已被弃用，并由 <code>.text-body-secondary</code> 和 <code>$body-secondary-color</code> 取代。</p>
      </li>
    </ul>
    <h3 id="docs">文档<a class="anchor-link" href="#docs" aria-label="文档链接"></a></h3>
    <ul>
      <li>
        <p>示例现在会按照我们文档中的设置，以相应的浅色或深色色彩模式显示。每个示例都有独立的色彩模式选择器。</p>
      </li>
      <li><p>改进了实时 Toast 演示所包含的 JavaScript。</p></li>
      <li>
        <p>在示例页面顶部添加了 <code>twbs/examples</code> 仓库的内容。</p>
      </li>
    </ul>
    <h3 id="tooling">工具<a class="anchor-link" href="#tooling" aria-label="工具链接"></a></h3>
    <ul>
      <li><p>通过 True 添加了 SCSS 测试，以帮助测试我们的工具类 API 及其他自定义项。</p></li>
      <li>
        <p>
          将 bootstrap-npm-starter 项目的各处实例替换为更新、更完整的
          <a href="https://github.com/twbs/examples">twbs/examples 仓库</a>。
        </p>
      </li>
    </ul>
    <hr class="mb-4" />
    <p>
      如需完整的变更列表，
      <a href="https://github.com/orgs/twbs/projects/13">请参阅 GitHub 上的 v5.3.0-alpha2 项目</a>。
    </p>
    <h2 id="v530-alpha1">v5.3.0-alpha1<a class="anchor-link" href="#v530-alpha1" aria-label="v5.3.0-alpha1链接"></a></h2>
    <hr class="mb-4" />
    <h3 id="color-modes-1">色彩模式！<a class="anchor-link" href="#color-modes-1" aria-label="色彩模式！链接"></a></h3>
    <p>阅读新的<a href="/customize/color-modes">色彩模式文档</a>以了解更多。</p>
    <ul>
      <li>
        <p>
          <strong>全面支持浅色（默认）和深色色彩模式。</strong>可以在 <code>:root</code> 元素上全局设置色彩模式，也可以在通过包装类定义的元素和组件分组上设置，或者直接在组件上通过 <code>data-bs-theme=&quot;light|dark&quot;</code> 设置。同时还新增了 <code>color-mode()</code> mixin，它可以根据你的偏好，输出使用
          <code>data-bs-theme</code> 选择器或媒体查询的规则集。
        </p>
        <p><span class="badge text-warning-emphasis bg-warning-subtle">已弃用</span> 色彩模式取代了组件的深色变体，因此 <code>.btn-close-white</code>、<code>.carousel-dark</code>、<code>.dropdown-menu-dark</code> 和 <code>.navbar-dark</code> 均已弃用。</p>
      </li>
      <li>
        <p><strong>新的扩展色彩系统。</strong>我们新增了主题色（但不在 <code>$theme-colors</code> 中），以构成更细腻、覆盖整个系统的调色板，为 <code>color</code> 和 <code>background-color</code> 提供了新的次级色、三级色和强调色。这些新颜色可作为 Sass 变量、CSS 变量和 工具类使用。</p>
      </li>
      <li>
        <p>我们还扩展了主题色的 Sass 变量、CSS 变量和工具类，加入了文本强调色、细微背景色和细微边框色。它们可作为 Sass 变量、CSS 变量和工具类使用。</p>
      </li>
      <li>
        <p>新增 <code>_variables-dark.scss</code> 样式表，用于存放深色模式专用的覆盖项。在你的导入栈中，该样式表应紧跟现有的 <code>_variables.scss</code> 文件之后导入。</p>
        <CodeWrapper
          code='diff --git a/scss/bootstrap.scss b/scss/bootstrap.scss
index 8f8296def..449d70487 100644
--- a/scss/bootstrap.scss
+++ b/scss/bootstrap.scss
@@ -6,6 +6,7 @@
 // Configuration
 @import "functions";
 @import "variables";
+@import "variables-dark";
 @import "maps";
 @import "mixins";
 @import "utilities";'
          lang="diff"
        />
      </li>
    </ul>
    <h3 id="css-variables-1">CSS 变量<a class="anchor-link" href="#css-variables-1" aria-label="CSS 变量链接"></a></h3>
    <ul>
      <li>
        <p>恢复了断点相关的 CSS 变量，不过我们并未在媒体查询中使用它们，因为其并不受支持。不过，这些变量在 JavaScript 特定场景中会很有用。</p>
      </li>
      <li>
        <p>
          根据色彩模式的更新，我们为新的 Sass CSS 变量 <code>secondary</code> 和 <code>tertiary</code> 文本色与背景色新增了工具类，并为主题色新增了 <code>{color}-bg-subtle</code>、<code>{color}-border-subtle</code> 和 <code>{color}-text-emphasis</code>。这些新颜色可通过 Sass 和 CSS
          变量（但不包括颜色映射）使用，其明确目标是让在浅色和深色等多种色彩模式之间自定义更加容易。
        </p>
      </li>
      <li>
        <p>为警告框、<code>.btn-close</code> 和 <code>.offcanvas</code> 添加了更多变量。</p>
      </li>
      <li>
        <p><code>--bs-heading-color</code> 变量回归，并带来更新和对深色模式的支持。首先，在尝试输出 CSS 变量之前，我们现在会检查关联的 Sass 变量 <code>$headings-color</code> 是否为 <code>null</code> 值，因此默认情况下它不会出现在编译后的 CSS 中。其次，我们以 后备值 <code>inherit</code> 使用该 CSS 变量，既保留了原有行为，又允许进行覆盖。</p>
      </li>
      <li>
        <p>
          将链接改为使用 CSS 变量来控制 <code>color</code> 样式，但不用于 <code>text-decoration</code>。颜色现在通过 <code>--bs-link-color-rgb</code> 和 <code>--bs-link-opacity</code> 以 <code>rgba()</code> 颜色设置，让你可以轻松自定义透明度。<code>a:hover</code> 伪类现在会覆盖 <code>--bs-link-color-rgb</code>，而不是显式设置
          <code>color</code> 属性。
        </p>
      </li>
      <li>
        <p><code>--bs-border-width</code> 现在被用于更多组件，以便更好地控制默认的全局样式。</p>
      </li>
      <li>
        <p>为我们的 <code>box-shadow</code> 新增根级 CSS 变量，包括 <code>--bs-box-shadow</code>、<code>--bs-box-shadow-sm</code>、<code>--bs-box-shadow-lg</code> 和 <code>--bs-box-shadow-inset</code>。</p>
      </li>
    </ul>
    <h3 id="components-1">组件<a class="anchor-link" href="#components-1" aria-label="组件链接"></a></h3>
    <h4 id="alert">警告框</h4>
    <ul>
      <li><p>警告框变体现在通过 CSS 变量设置样式。</p></li>
      <li>
        <p><span class="badge text-warning-emphasis bg-warning-subtle">已弃用</span> <code>alert-variant()</code> mixin 现已弃用。我们现在直接<a href="/components/alerts#sass-loops">使用 Sass 循环</a>来为每个变体修改组件的默认 CSS 变量。</p>
      </li>
    </ul>
    <h4 id="list-group">列表组</h4>
    <ul>
      <li><p>列表组项目变体现在通过 CSS 变量设置样式。</p></li>
      <li>
        <p><span class="badge text-warning-emphasis bg-warning-subtle">已弃用</span> <code>list-group-item-variant()</code> mixin 现已弃用。我们现在直接<a href="/components/list-group#sass-loops">使用 Sass 循环</a>来为每个变体修改组件的默认 CSS 变量。</p>
      </li>
    </ul>
    <h4 id="dropdowns">下拉菜单</h4>
    <ul>
      <li>
        <span class="badge text-warning-emphasis bg-warning-subtle">已弃用</span> <code>.dropdown-menu-dark</code> 类已弃用，并替换为在下拉菜单或任意父元素上使用 <code>data-bs-theme=&quot;dark&quot;</code>。
        <a href="/components/dropdowns#dark-dropdowns">查看文档中的示例。</a>
      </li>
    </ul>
    <h4 id="close-button">关闭按钮</h4>
    <ul>
      <li>
        <span class="badge text-warning-emphasis bg-warning-subtle">已弃用</span> <code>.btn-close-white</code> 类已弃用，并替换为在关闭按钮或任意父元素上使用 <code>data-bs-theme=&quot;dark&quot;</code>。
        <a href="/components/close-button#dark-variant">查看文档中的示例。</a>
      </li>
    </ul>
    <h4 id="navbar">导航栏</h4>
    <ul>
      <li>
        <span class="badge text-warning-emphasis bg-warning-subtle">已弃用</span> <code>.navbar-dark</code> 类已弃用，并替换为在导航栏或任意父元素上使用 <code>data-bs-theme=&quot;dark&quot;</code>。
        <a href="/components/navbar#color-schemes">查看文档中的更新示例。</a>
      </li>
    </ul>
    <h3 id="progress-bars">进度条<a class="anchor-link" href="#progress-bars" aria-label="进度条链接"></a></h3>
    <p>
      <a href="/components/progress">进度条</a>的标记在 v5.3.0 中已更新。由于 <code>role</code> 和各种 <code>aria-</code> 属性被放在内层的 <code>.progress-bar</code> 元素上，<strong>部分屏幕阅读器无法朗读值为零的进度条</strong>。现在， <code>role=&quot;progressbar&quot;</code> 和相关 <code>aria-*</code> 属性被放在外层的
      <code>.progress</code> 元素上，<code>.progress-bar</code> 仅用于进度条的视觉呈现和可选标签。
    </p>
    <p>虽然我们建议采用新的标记以提高与所有屏幕阅读器的兼容性，但请注意，旧版进度条结构仍会像之前一样正常工作。</p>
    <CodeWrapper
      code='&lt;!-- Previous markup --&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- New markup --&gt;
&lt;div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;
  &lt;div class="progress-bar" style="width: 25%"&gt;&lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <p>我们还引入了新的 <code>.progress-stacked</code> 类，以便更合理地<a href="/components/progress#multiple-bars">将多个进度条</a>包装成单个堆叠进度条。</p>
    <CodeWrapper
      code='&lt;!-- Previous markup --&gt;
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-label="Segment one" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
  &lt;div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
  &lt;div class="progress-bar bg-info" role="progressbar" aria-label="Segment three" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- New markup --&gt;
&lt;div class="progress-stacked"&gt;
  &lt;div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%"&gt;
    &lt;div class="progress-bar"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%"&gt;
    &lt;div class="progress-bar bg-success"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"&gt;
    &lt;div class="progress-bar bg-info"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="forms">表单<a class="anchor-link" href="#forms" aria-label="表单链接"></a></h3>
    <ul>
      <li>
        <p><code>.form-control</code> 现在使用 CSS 变量设置样式，以支持色彩模式。这包括新增两个根级 CSS 变量，分别用于默认和禁用状态下的表单控件背景。</p>
      </li>
      <li>
        <p><code>.form-check</code> 和 <code>.form-switch</code> 组件现在使用 CSS 变量来设置 <code>background-image</code>。此处的用法与其他组件不同：每个组件的各种聚焦、激活等状态并未设置在基类上，而是由各状态覆盖某一个变量（例如 <code>--bs-form-switch-bg</code>）。</p>
      </li>
      <li>
        <p>浮动表单标签现在带有 <code>background-color</code>，以修复对 <code>&lt;textarea&gt;</code> 元素的支持。此外还做了其他改动，以支持禁用状态等。</p>
      </li>
      <li><p>修复了基于 WebKit 的浏览器中日期和时间输入框的显示问题。</p></li>
    </ul>
    <h3 id="utilities-2">工具类<a class="anchor-link" href="#utilities-2" aria-label="工具类链接"></a></h3>
    <ul>
      <li>
        <p><span class="badge text-warning-emphasis bg-warning-subtle">已弃用</span> <code>.text-muted</code> 将在 v6 中由 <code>.text-body-secondary</code> 取代。</p>
        <p>随着扩展主题色和变量的加入，<code>.text-muted</code> 变量和工具类自 v5.3.0 起已弃用。其默认值也已重新指派为新的 <code>--bs-secondary-color</code> CSS 变量，以更好地支持色彩模式。它将在 v6.0.0 中移除。</p>
      </li>
      <li>
        <p>
          新增 <code>.overflow-x</code>、<code>.overflow-y</code> 以及若干 <code>.object-fit-*</code> 工具类。
          <em>object-fit 属性用于指定 <code>&lt;img&gt;</code> 或 <code>&lt;video&gt;</code> 应如何调整大小以适配其容器，为我们提供了可调整的填充/适配图片的响应式方案，以替代使用 <code>background-image</code>。</em>
        </p>
      </li>
      <li>
        <p>新增 <code>.fw-medium</code> 工具类。</p>
      </li>
      <li>
        <p>
          为 <code>z-index</code> 新增了<a href="/utilities/z-index"><code>.z-*</code> 工具类</a>。
        </p>
      </li>
      <li>
        <p><a href="/utilities/shadows">盒阴影工具类</a>（以及 Sass 变量）已针对深色模式更新。它们现在使用 <code>--bs-body-color-rgb</code> 生成 <code>rgba()</code> 颜色值，使其能够根据指定的前景色轻松适应色彩模式。</p>
      </li>
    </ul>
    <p>
      如需完整的变更列表，
      <a href="https://github.com/twbs/bootstrap/projects/">请参阅 GitHub 上的 v5.3.0 项目</a>。
    </p>
    <h2 id="v520">v5.2.0<a class="anchor-link" href="#v520" aria-label="v5.2.0链接"></a></h2>
    <hr class="mb-4" />
    <h3 id="refreshed-design">焕新的设计<a class="anchor-link" href="#refreshed-design" aria-label="焕新的设计链接"></a></h3>
    <p>
      Bootstrap v5.2.0 对项目中部分组件和属性做了细微的设计更新，
      <strong>其中最显著的是优化了按钮和表单控件上的 <code>border-radius</code> 值</strong>。我们的文档也焕然一新：新增了首页，采用更简洁的文档布局（侧边栏的各分区不再折叠），并提供了更醒目的<a href="https://icons.getbootstrap.com">Bootstrap Icons</a>示例。
    </p>
    <h3 id="more-css-variables">更多 CSS 变量<a class="anchor-link" href="#more-css-variables" aria-label="更多 CSS 变量链接"></a></h3>
    <p><strong>我们已将所有组件更新为使用 CSS 变量。</strong>虽然 Sass 仍然支撑着一切，但每个组件都已更新，在组件的基类（例如 <code>.btn</code>）上包含 CSS 变量，从而支持更实时的 Bootstrap 自定义。在后续版本中，我们会继续将 CSS 变量扩展到布局、表单、辅助类和工具类中。请在各组件的文档页面阅读有关 CSS 变量的更多内容。</p>
    <p>
      在 Bootstrap 6 发布之前，我们的 CSS 变量使用会略显不完整。虽然我们希望全面实现这些变量，但它们确实存在导致破坏性变更的风险。例如，如果在源代码中设置
      <code>$alert-border-width: var(--bs-border-width)</code>，而你的代码中恰好有 <code>$alert-border-width * 2</code> 这样的写法，那么你的 Sass 就会被破坏。
    </p>
    <p>因此，在可能的情况下，我们会继续推进更多 CSS 变量的使用，但也请理解我们在 v5 中的实现可能会略有局限。</p>
    <h3 id="new-mapsscss">新增 <code>_maps.scss</code><a class="anchor-link" href="#new-mapsscss" aria-label="新增 _maps.scss链接"></a></h3>
    <p>
      <strong>Bootstrap v5.2.0 引入了一个新的 Sass 文件 <code>_maps.scss</code>。</strong>它从 <code>_variables.scss</code> 中提取了若干 Sass 映射，以修复原始映射的更新未能应用到扩展它的次级映射的问题。例如，对 <code>$theme-colors</code> 的更新没有被应用到其他 依赖 <code>$theme-colors</code> 的主题映射，从而破坏了关键的自定义工作流。简而言之，Sass
      存在一个限制：一旦默认变量或映射被<em>使用</em>过，就无法再更新。
      <em>使用 CSS 变量组合其他 CSS 变量时也有类似的缺陷。</em>
    </p>
    <p>这就是为什么 Bootstrap 中的变量自定义必须放在 <code>@import &quot;functions&quot;</code> 之后，但在 <code>@import &quot;variables&quot;</code> 以及其余导入栈之前。Sass 映射也是如此——必须在它们被使用之前覆盖默认值。以下映射已被移动到新的 <code>_maps.scss</code> 中：</p>
    <ul>
      <li><code>$theme-colors-rgb</code></li>
      <li><code>$utilities-colors</code></li>
      <li><code>$utilities-text</code></li>
      <li><code>$utilities-text-colors</code></li>
      <li><code>$utilities-bg</code></li>
      <li><code>$utilities-bg-colors</code></li>
      <li><code>$negative-spacers</code></li>
      <li><code>$gutters</code></li>
    </ul>
    <p>你的自定义 Bootstrap CSS 构建现在应类似以下内容，其中包含单独的映射导入。</p>
    <CodeWrapper
      code='  // Functions come first
  @import "functions";

  // Optional variable overrides here
+ $custom-color: #df711b;
+ $custom-theme-colors: (
+   "custom": $custom-color
+ );

  // Variables come next
  @import "variables";

+ // Optional Sass map overrides here
+ $theme-colors: map-merge($theme-colors, $custom-theme-colors);
+
+ // Followed by our default maps
+ @import "maps";
+
  // Rest of our imports
  @import "mixins";
  @import "utilities";
  @import "root";
  @import "reboot";
  // etc'
      lang="diff"
    />
    <h3 id="new-utilities">新增工具类<a class="anchor-link" href="#new-utilities" aria-label="新增工具类链接"></a></h3>
    <ul>
      <li>
        扩展了
        <a href="/utilities/text#font-weight-and-italics"><code>font-weight</code> 工具类</a>，新增用于半粗体字体的 <code>.fw-semibold</code>。
      </li>
      <li>
        扩展了<a href="/utilities/borders#sizes"><code>border-radius</code> 工具类</a>，新增 <code>.rounded-4</code> 和 <code>.rounded-5</code> 两种尺寸，提供更多选择。
      </li>
    </ul>
    <h3 id="additional-changes">其他变更<a class="anchor-link" href="#additional-changes" aria-label="其他变更链接"></a></h3>
    <ul>
      <li>
        <p>
          <strong>引入新的 <code>$enable-container-classes</code> 选项。—</strong> 现在，当启用实验性的 CSS Grid 布局时，<code>.container-*</code> 类仍会被编译，除非此选项被设为 <code>false</code>。容器现在也会保留其 gutter 值。
        </p>
      </li>
      <li>
        <p>
          <strong>Offcanvas 组件现在具有<a href="/components/offcanvas#responsive">响应式变体</a>。</strong>
          原有的 <code>.offcanvas</code> 类保持不变——它在所有视口下都隐藏内容。要使其响应式，请将该 <code>.offcanvas</code> 类改为任意 <code>.offcanvas-{sm|md|lg|xl|xxl}</code> 类。
        </p>
      </li>
      <li>
        <p>
          <strong>更粗的表格分隔线现在需主动启用。—</strong> 我们移除了表格分组之间更粗、也更难覆盖的边框，并将其移至一个可选类 <code>.table-group-divider</code>。
          <a href="/content/tables#table-group-dividers">查看表格文档中的示例。</a>
        </p>
      </li>
      <li>
        <p>
          <strong><a href="https://github.com/twbs/bootstrap/pull/33421">Scrollspy 已重写</a>，改用 Intersection Observer API</strong>，这意味着你不再需要相对定位的父级包装元素，<code>offset</code> 配置已被弃用，等等。你会发现你的 Scrollspy 实现能在导航高亮上更加准确和一致。
        </p>
      </li>
      <li>
        <p><strong>弹出框和工具提示现在使用 CSS 变量。</strong>一些 CSS 变量已从对应的 Sass 变量改为 CSS 变量，以减少变量数量。因此，本版本中有三个变量被弃用：<code>$popover-arrow-color</code>、<code>$popover-arrow-outer-color</code> 和 <code>$tooltip-arrow-color</code>。</p>
      </li>
      <li>
        <p>
          <strong>新增 <code>.text-bg-{color}</code> 辅助类。</strong>你现在无需分别设置 <code>.text-*</code> 和 <code>.bg-*</code> 工具类，而可以使用<a href="helpers/color-background"><code>.text-bg-*</code> 辅助类</a>一次性设置 <code>background-color</code> 和与之形成对比的前景色 <code>color</code>。
        </p>
      </li>
      <li>
        <p>为表单校验添加了 <code>.form-check-reverse</code> 修饰符，用于翻转标签与关联的复选框/单选按钮的顺序。</p>
      </li>
      <li>
        <p>通过新增的 <code>.table-striped-columns</code> 类，为表格添加了<a href="/content/tables#striped-columns">条纹列</a>支持。</p>
      </li>
    </ul>
    <p>
      如需完整的变更列表，
      <a href="https://github.com/twbs/bootstrap/projects/32">请参阅 GitHub 上的 v5.2.0 项目</a>。
    </p>
    <h2 id="v510">v5.1.0<a class="anchor-link" href="#v510" aria-label="v5.1.0链接"></a></h2>
    <hr class="mb-4" />
    <ul>
      <li>
        <p>
          <strong>新增对<a href="/layout/css-grid">CSS Grid 布局</a>的实验性支持。—</strong>
          这是一项进行中的工作，尚未准备好用于生产环境，但你可以通过 Sass 启用这一新特性。要启用它，请通过设置
          <code>$enable-grid-classes: false</code> 禁用默认网格，并通过设置 <code>$enable-cssgrid: true</code> 启用 CSS Grid。
        </p>
      </li>
      <li>
        <p><strong>更新了导航栏以支持 offcanvas。—</strong> 使用响应式 <code>.navbar-expand-*</code> 类和一些 offcanvas 标记，即可<a href="/components/navbar#offcanvas">在任意导航栏中添加 offcanvas 抽屉</a>。</p>
      </li>
      <li>
        <p>
          <strong>新增<a href="/components/placeholders/">占位符组件</a>。—</strong>
          这是我们最新的组件，用于在真实内容就位之前提供临时占位块，以帮助提示网站或应用中某些内容仍在加载中。
        </p>
      </li>
      <li>
        <p>
          <strong>折叠插件现在支持<a href="/components/collapse#horizontal">水平折叠</a>。—</strong>
          为 <code>.collapse</code> 添加 <code>.collapse-horizontal</code>，即可折叠 <code>width</code> 而非 <code>height</code>。请设置 <code>min-height</code> 或 <code>height</code> 以避免浏览器重绘。
        </p>
      </li>
      <li>
        <p>
          <strong>新增堆叠和垂直分隔线辅助类。—</strong> 使用<a href="/helpers/stacks/">堆叠</a>快速应用多个 flexbox 属性，以便快速创建自定义布局。可选择水平（<code>.hstack</code>）和垂直（<code>.vstack</code>）堆叠。使用<a href="/helpers/vertical-rule/">新的 <code>.vr</code> 辅助类</a>添加类似 <code>&lt;hr&gt;</code> 元素的垂直分隔线。
        </p>
      </li>
      <li>
        <p>
          <strong>新增全局 <code>:root</code> CSS 变量。—</strong> 在 <code>:root</code> 层级新增了几个 CSS 变量，用于控制 <code>&lt;body&gt;</code> 的样式。未来还会有更多，包括贯穿我们的工具类和组件，但现在请先阅读 <a href="/customize/css-variables/">自定义章节中的 CSS 变量</a>。
        </p>
      </li>
      <li>
        <p>
          <strong>全面改造颜色和背景工具类以使用 CSS 变量，并新增<a href="/utilities/text#opacity">文本不透明度</a>和<a href="/utilities/background#opacity">背景不透明度</a>工具类。—</strong>
          <code>.text-*</code> 和 <code>.bg-*</code> 工具类现在基于 CSS 变量和 <code>rgba()</code> 颜色值构建，让你可以借助新的不透明度工具类轻松自定义任意工具类。
        </p>
      </li>
      <li>
        <p>
          <strong>新增代码片段示例，用于展示如何自定义我们的组件。—</strong> 通过我们新的<a href="https://getbootstrap.com/docs/5.3/examples/#snippets">代码片段示例</a>获取即取即用的自定义组件和其他常见设计模式。包括 <a href="https://getbootstrap.com/docs/5.3/examples/footers/">页脚</a>、<a
            href="https://getbootstrap.com/docs/5.3/examples/dropdowns/"
            >下拉菜单</a
          >、<a href="https://getbootstrap.com/docs/5.3/examples/list-groups/">列表组</a>和<a href="https://getbootstrap.com/docs/5.3/examples/modals/">模态框</a>。
        </p>
      </li>
      <li>
        <p><strong>移除了弹出框和工具提示中未使用的定位样式</strong>，因为这些样式完全由 Popper 处理。在此过程中，<code>$tooltip-margin</code> 已被弃用并设为 <code>null</code>。</p>
      </li>
    </ul>
    <p>
      想了解更多信息？
      <a href="https://blog.getbootstrap.com/2021/08/04/bootstrap-5-1-0/">阅读 v5.1.0 博客文章。</a>
    </p>
    <h2 id="v500">v5.0.0<a class="anchor-link" href="#v500" aria-label="v5.0.0链接"></a></h2>
    <hr class="mb-4" />
    <Callout>
      <p><strong>你好！</strong>我们对 Bootstrap 5 首个主要版本 v5.0.0 的变更记录在下方。它们并不反映上面列出的其他变更。</p>
    </Callout>
    <h3 id="dependencies-1">依赖项<a class="anchor-link" href="#dependencies-1" aria-label="依赖项链接"></a></h3>
    <ul>
      <li>移除了 jQuery。</li>
      <li>从 Popper v1.x 升级到 Popper v2.x。</li>
      <li>由于 Libsass 已被弃用，我们将 Sass 编译器从 Libsass 替换为 Dart Sass。</li>
      <li>文档构建从 Jekyll 迁移到 Hugo</li>
    </ul>
    <h3 id="browser-support">浏览器支持<a class="anchor-link" href="#browser-support" aria-label="浏览器支持链接"></a></h3>
    <ul>
      <li>不再支持 Internet Explorer 10 和 11</li>
      <li>不再支持 Microsoft Edge &lt; 16（旧版 Edge）</li>
      <li>不再支持 Firefox &lt; 60</li>
      <li>不再支持 Safari &lt; 12</li>
      <li>不再支持 iOS Safari &lt; 12</li>
      <li>不再支持 Chrome &lt; 60</li>
    </ul>
    <hr class="my-5" />
    <h3 id="documentation-changes">文档变更<a class="anchor-link" href="#documentation-changes" aria-label="文档变更链接"></a></h3>
    <ul>
      <li>重新设计了首页、文档布局和页脚。</li>
      <li>新增<a href="/getting-started/parcel">新的 Parcel 指南</a>。</li>
      <li>新增<a href="/customize/overview/">新的自定义章节</a>，取代<a href="https://getbootstrap.com/docs/4.6/getting-started/theming/">v4 的主题定制页面</a>，其中包含关于 Sass、全局配置选项、配色方案、CSS 变量等的全新细节。</li>
      <li>将所有表单文档重新组织到<a href="/forms/overview/">新的表单章节</a>中，把内容拆分到更聚焦的页面里。</li>
      <li>同样，更新了<a href="/layout/breakpoints">布局章节</a>，更清晰地充实了网格相关内容。</li>
      <li>将“Navs”组件页面重命名为 “Navs &amp; Tabs”。</li>
      <li>将“Checks”页面重命名为 “Checks &amp; radios”。</li>
      <li>重新设计了导航栏，并新增子导航，以便更轻松地浏览我们的网站和文档版本。</li>
      <li>
        为搜索框新增键盘快捷键：<kbd><kbd>Ctrl</kbd> + <kbd>/</kbd></kbd
        >。
      </li>
    </ul>
    <h3 id="sass">Sass<a class="anchor-link" href="#sass" aria-label="Sass链接"></a></h3>
    <ul>
      <li>
        <p>
          我们摒弃了默认的 Sass 映射合并，以便更轻松地移除冗余值。请记住，你现在必须在 Sass 映射（例如
          <code>$theme-colors</code>）中定义所有值。请查看如何处理<a href="/customize/sass#maps-and-loops">Sass 映射</a>。
        </p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span> 将 <code>color-yiq()</code> 函数及相关变量重命名为 <code>color-contrast()</code>，因为它已不再与 YIQ 色彩空间相关。
          <a href="https://github.com/twbs/bootstrap/pull/30168/">参见 #30168。</a>
        </p>
        <ul>
          <li><code>$yiq-contrasted-threshold</code> 重命名为 <code>$min-contrast-ratio</code>。</li>
          <li><code>$yiq-text-dark</code> 和 <code>$yiq-text-light</code> 分别重命名为 <code>$color-contrast-dark</code> 和 <code>$color-contrast-light</code>。</li>
        </ul>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 为更合理的处理方式，媒体查询 mixin 的参数已更改。</p>
        <ul>
          <li><code>media-breakpoint-down()</code> 使用断点本身，而不是下一个断点（例如，<code>media-breakpoint-down(lg)</code> 而非 <code>media-breakpoint-down(md)</code>，作用于小于 <code>lg</code> 的视口）。</li>
          <li>同样，<code>media-breakpoint-between()</code> 的第二个参数也使用断点本身，而不是下一个断点（例如，<code>media-breakpoint-between(sm, lg)</code> 而非 <code>media-breakpoint-between(sm, md)</code>，作用于 <code>sm</code> 和 <code>lg</code> 之间的视口）。</li>
        </ul>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了打印样式和 <code>$enable-print-styles</code> 变量。打印显示类仍然保留。<a href="https://github.com/twbs/bootstrap/pull/28339">参见 #28339</a>。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>color()</code>、<code>theme-color()</code> 和 <code>gray()</code> 函数，改用变量。<a href="https://github.com/twbs/bootstrap/pull/29083">参见 #29083</a>。</p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span> 将 <code>theme-color-level()</code> 函数重命名为 <code>color-level()</code>，现在可接受任意颜色，而不再仅限 <code>$theme-color</code> 中的颜色。<a href="https://github.com/twbs/bootstrap/pull/29083">参见 #29083</a><strong>注意：</strong> <code>color-level()</code> 后来在
          <code>v5.0.0-alpha3</code> 中被移除。
        </p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 为简洁起见，将 <code>$enable-prefers-reduced-motion-media-query</code> 和 <code>$enable-pointer-cursor-for-buttons</code> 重命名为 <code>$enable-reduced-motion</code> 和 <code>$enable-button-pointers</code>。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>bg-gradient-variant()</code> mixin。请使用 <code>.bg-gradient</code> 类为元素添加渐变，而不再使用生成的 <code>.bg-gradient-*</code> 类。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> <strong>移除了先前已弃用的 mixin：</strong></p>
        <ul>
          <li>
            <code>hover</code>、<code>hover-focus</code>、<code>plain-hover-focus</code> 和
            <code>hover-focus-active</code>
          </li>
          <li><code>float()</code></li>
          <li><code>form-control-mixin()</code></li>
          <li><code>nav-divider()</code></li>
          <li><code>retina-img()</code></li>
          <li><code>text-hide()</code>（同时移除了关联的工具类 <code>.text-hide</code>）</li>
          <li><code>visibility()</code></li>
          <li><code>form-control-focus()</code></li>
        </ul>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 将 <code>scale-color()</code> 函数重命名为 <code>shift-color()</code>，以避免与 Sass 自身的颜色缩放函数冲突。</p>
      </li>
      <li>
        <p><code>box-shadow</code> mixin 现在允许 <code>null</code> 值，并从多参数中移除了 <code>none</code>。<a href="https://github.com/twbs/bootstrap/pull/30394">参见 #30394</a>。</p>
      </li>
      <li>
        <p><code>border-radius()</code> mixin 现在具有默认值。</p>
      </li>
    </ul>
    <h3 id="color-system">色彩系统<a class="anchor-link" href="#color-system" aria-label="色彩系统链接"></a></h3>
    <ul>
      <li>
        <p>
          使用 <code>color-level()</code> 和 <code>$theme-color-interval</code> 的旧色彩系统已被移除，改用新的色彩系统。我们代码库中所有的 <code>lighten()</code> 和 <code>darken()</code> 函数都已替换为 <code>tint-color()</code> 和 <code>shade-color()</code>。这些函数会将颜色与 白色或黑色混合，而不是按固定量改变其明度。<code>shift-color()</code>
          会根据其权重参数为正还是为负，对颜色进行提亮或加深。更多细节请<a href="https://github.com/twbs/bootstrap/pull/30622">参见 #30622</a>。
        </p>
      </li>
      <li>
        <p>为每种颜色新增了深、浅色调，每种基色提供九种独立的颜色，作为新的 Sass 变量。</p>
      </li>
      <li>
        <p>改进了颜色对比度。将颜色对比度比率从 3:1 提升至 4.5:1，并更新了蓝色、绿色、青色和粉色，以确保符合 WCAG 2.2 AA 对比度标准。同时将我们的颜色对比色从 <code>$gray-900</code> 改为 <code>$black</code>。</p>
      </li>
      <li>
        <p>为支撑新的色彩系统，我们新增了自定义的 <code>tint-color()</code> 和 <code>shade-color()</code> 函数，以恰当地混合我们的颜色。</p>
      </li>
    </ul>
    <h3 id="grid-updates">网格更新<a class="anchor-link" href="#grid-updates" aria-label="网格更新链接"></a></h3>
    <ul>
      <li>
        <p><strong>新断点！</strong> 新增 <code>xxl</code> 断点，用于 <code>1400px</code> 及以上。其他所有断点均无变化。</p>
      </li>
      <li>
        <p><strong>改进了 gutter。</strong> Gutter 现在以 rem 为单位设置，并且比 v4 更窄（<code>1.5rem</code>，约 <code>24px</code>，从 <code>30px</code> 减小而来）。这使我们的网格系统 gutter 与间距工具类保持一致。</p>
        <ul>
          <li>新增<a href="/layout/gutters">gutter 类</a>（<code>.g-*</code>、<code>.gx-*</code> 和 <code>.gy-*</code>），用于控制水平/垂直 gutter、水平 gutter 和垂直 gutter。</li>
          <li><span class="badge text-bg-danger">破坏性变更</span> 将 <code>.no-gutters</code> 重命名为 <code>.g-0</code>，以与新的 gutter 工具类保持一致。</li>
        </ul>
      </li>
      <li>
        <p>列不再应用 <code>position: relative</code>，因此你可能需要为某些元素添加 <code>.position-relative</code> 以恢复该行为。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了若干常常未被使用的 <code>.order-*</code> 类。现在开箱即用仅提供 <code>.order-0</code> 至 <code>.order-5</code>。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.media</code> 组件，因为它可以很容易地用工具类复现。<a href="https://github.com/twbs/bootstrap/pull/28265">参见 #28265</a>以及<a href="/utilities/flex#media-object"> flex 工具类页面中的示例</a>。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> <code>bootstrap-grid.css</code> 现在仅对列应用 <code>box-sizing: border-box</code>，而不再重置全局 box-sizing。这样一来，我们的网格样式可以在更多地方使用而不受干扰。</p>
      </li>
      <li>
        <p>
          <code>$enable-grid-classes</code> 不再禁用容器类的生成。
          <a href="https://github.com/twbs/bootstrap/pull/29146">参见 #29146。</a>
        </p>
      </li>
      <li>
        <p>更新了 <code>make-col</code> mixin，在未指定尺寸时默认生成等宽的列。</p>
      </li>
    </ul>
    <h3 id="content-reboot-etc">内容、Reboot 等<a class="anchor-link" href="#content-reboot-etc" aria-label="内容、Reboot 等链接"></a></h3>
    <ul>
      <li>
        <p>
          <strong><a href="/getting-started/rfs">RFS</a>现在默认启用。</strong>使用 <code>font-size()</code> mixin 的标题会自动调整其 <code>font-size</code>，以随视口缩放。<em>此特性在 v4 中需要主动启用。</em>
        </p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 全面改造了展示排版，用 <code>$display-font-sizes</code> Sass 映射取代了 <code>$display-*</code> 变量。同时移除了各个 <code>$display-*-weight</code> 变量，改为单一的 <code>$display-font-weight</code>，并调整了 <code>font-size</code>。</p>
      </li>
      <li>
        <p>新增两种 <code>.display-*</code> 标题尺寸：<code>.display-5</code> 和 <code>.display-6</code>。</p>
      </li>
      <li>
        <p><strong>链接默认带下划线</strong>（而不仅限于悬停时），除非它们属于特定组件。</p>
      </li>
      <li>
        <p><strong>重新设计了表格</strong>，刷新其样式，并基于 CSS 变量重建，以便更好地控制样式。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 嵌套表格不再继承样式。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.thead-light</code> 和 <code>.thead-dark</code>，改用可用于所有表格元素（<code>thead</code>、<code>tbody</code>、<code>tfoot</code>、<code>tr</code>、<code>th</code> 和 <code>td</code>）的 <code>.table-*</code> 变体类。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> <code>table-row-variant()</code> mixin 重命名为 <code>table-variant()</code>，且只接受 2 个参数：<code>$color</code>（颜色名称）和 <code>$value</code>（颜色值）。边框色和强调色会根据表格因子变量自动计算。</p>
      </li>
      <li>
        <p>将表格单元格内边距变量拆分为 <code>-y</code> 和 <code>-x</code>。</p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.pre-scrollable</code> 类。
          <a href="https://github.com/twbs/bootstrap/pull/29135">参见 #29135</a>
        </p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span> <code>.text-*</code> 工具类不再为链接添加悬停和聚焦状态。可以改用 <code>.link-*</code> 辅助类。
          <a href="https://github.com/twbs/bootstrap/pull/29267">参见 #29267</a>
        </p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.text-justify</code> 类。
          <a href="https://github.com/twbs/bootstrap/pull/29793">参见 #29793</a>
        </p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span>
          <del><code>&lt;hr&gt;</code> 元素现在使用 <code>height</code> 而非 <code>border</code>，以更好地支持 <code>size</code> 属性。这也使得可以使用内边距工具类来创建更粗的分隔线（例如 <code>&lt;hr class=&quot;py-1&quot;&gt;</code>）。</del>
        </p>
      </li>
      <li>
        <p>将 <code>&lt;ul&gt;</code> 和 <code>&lt;ol&gt;</code> 元素的默认水平 <code>padding-left</code> 从浏览器默认的 <code>40px</code> 重置为 <code>2rem</code>。</p>
      </li>
      <li>
        <p>
          新增 <code>$enable-smooth-scroll</code>，它会全局应用 <code>scroll-behavior: smooth</code>——但对通过 <code>prefers-reduced-motion</code> 媒体查询请求减少动态效果的用户除外。
          <a href="https://github.com/twbs/bootstrap/pull/31877">参见 #31877</a>
        </p>
      </li>
    </ul>
    <h3 id="rtl">RTL<a class="anchor-link" href="#rtl" aria-label="RTL链接"></a></h3>
    <ul>
      <li>
        与水平方向相关的变量、工具类和 mixin 均已重命名，改用逻辑属性，与 flexbox 布局中的做法类似——例如使用
        <code>start</code> 和 <code>end</code> 代替 <code>left</code> 和 <code>right</code>。
      </li>
    </ul>
    <h3 id="forms-1">表单<a class="anchor-link" href="#forms-1" aria-label="表单链接"></a></h3>
    <ul>
      <li>
        <p>
          <strong>新增浮动表单！</strong> 我们将浮动标签示例升级为完全支持的表单组件。
          <a href="/forms/floating-labels">查看新的浮动标签页面。</a>
        </p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span>
          <strong>合并了原生和自定义表单元素。</strong> 在 v4 中同时拥有原生类和自定义类的复选框、单选按钮、选择框及其他输入控件现已合并。现在几乎所有表单元素都完全自定义，大多无需自定义 HTML。
        </p>
        <ul>
          <li><code>.custom-control.custom-checkbox</code> 现在是 <code>.form-check</code>。</li>
          <li><code>.custom-control.custom-radio</code> 现在是 <code>.form-check</code>。</li>
          <li><code>.custom-control.custom-switch</code> 现在是 <code>.form-check.form-switch</code>。</li>
          <li><code>.custom-select</code> 现在是 <code>.form-select</code>。</li>
          <li><code>.custom-file</code> 和 <code>.form-control-file</code> 已由叠加在 <code>.form-control</code> 之上的自定义样式取代。</li>
          <li><code>.custom-range</code> 现在是 <code>.form-range</code>。</li>
          <li>移除了原生的 <code>.form-control-file</code> 和 <code>.form-control-range</code>。</li>
        </ul>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.input-group-append</code> 和 <code>.input-group-prepend</code>。现在你只需将按钮和 <code>.input-group-text</code> 作为输入组的直接子元素添加即可。</p>
      </li>
      <li>
        <p>
          长期存在的
          <a href="https://github.com/twbs/bootstrap/issues/25110">带校验反馈的输入组缺少圆角的问题</a>
          终于得到修复：为带校验的输入组添加额外的 <code>.has-validation</code> 类即可。
        </p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span>
          <strong>移除了针对我们网格系统的表单专用布局类。</strong> 请使用我们的网格和工具类，而不要使用 <code>.form-group</code>、<code>.form-row</code> 或 <code>.form-inline</code>。
        </p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 表单标签现在需要 <code>.form-label</code>。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> <code>.form-text</code> 不再设置 <code>display</code>，你可以仅通过更改 HTML 元素，按需创建内联或块级的帮助文本。</p>
      </li>
      <li>
        <p>在可能的情况下，表单控件不再使用固定的 <code>height</code>，而是改用 <code>min-height</code>，以改善自定义能力与其他组件的兼容性。</p>
      </li>
      <li>
        <p>校验图标不再应用到带 <code>multiple</code> 的 <code>&lt;select&gt;</code> 上。</p>
      </li>
      <li>
        <p>重新整理了 <code>scss/forms/</code> 下的源 Sass 文件，包括输入组样式。</p>
      </li>
    </ul>
    <hr class="my-5" />
    <h3 id="components-2">组件<a class="anchor-link" href="#components-2" aria-label="组件链接"></a></h3>
    <ul>
      <li>统一了警告框、面包屑、卡片、下拉菜单、列表组、模态框、弹出框和工具提示的 <code>padding</code> 值，使其基于我们的 <code>$spacer</code> 变量。<a href="https://github.com/twbs/bootstrap/pull/30564">参见 #30564</a>。</li>
    </ul>
    <h4 id="accordion">折叠面板</h4>
    <ul>
      <li>新增<a href="/components/accordion">折叠面板组件</a>。</li>
    </ul>
    <h4 id="alerts">警告框</h4>
    <ul>
      <li>
        <p>警告框现在有<a href="/components/alerts#icons">包含图标的示例</a>。</p>
      </li>
      <li>
        <p>移除了每个警告框中针对 <code>&lt;hr&gt;</code> 的自定义样式，因为它们已使用 <code>currentColor</code>。</p>
      </li>
    </ul>
    <h4 id="badges">徽章</h4>
    <ul>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了所有 <code>.badge-*</code> 颜色类，改用背景工具类（例如，使用 <code>.bg-primary</code> 而非 <code>.badge-primary</code>）。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.badge-pill</code>——请改用 <code>.rounded-pill</code> 工具类。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>&lt;a&gt;</code> 和 <code>&lt;button&gt;</code> 元素的悬停和聚焦样式。</p>
      </li>
      <li>
        <p>将徽章的默认内边距从 <code>.25em</code>/<code>.5em</code> 增加到 <code>.35em</code>/<code>.65em</code>。</p>
      </li>
    </ul>
    <h4 id="breadcrumbs">面包屑</h4>
    <ul>
      <li>
        <p>通过移除 <code>padding</code>、<code>background-color</code> 和 <code>border-radius</code>，简化了面包屑的默认外观。</p>
      </li>
      <li>
        <p>新增 CSS 自定义属性 <code>--bs-breadcrumb-divider</code>，便于在不重新编译 CSS 的情况下进行自定义。</p>
      </li>
    </ul>
    <h4 id="buttons">按钮</h4>
    <ul>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span>
          <strong><a href="/forms/checks-radios#toggle-buttons">切换按钮</a>（配合复选框或单选按钮）不再需要 JavaScript，并采用了新的标记。</strong>
          我们不再需要包裹元素，只需在 <code>&lt;input&gt;</code> 上添加 <code>.btn-check</code>，并在 <code>&lt;label&gt;</code> 上配以任意 <code>.btn</code> 类。<a href="https://github.com/twbs/bootstrap/pull/30650">参见 #30650</a>。
          <em>相关文档已从按钮页面移至新的表单章节。</em>
        </p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span>
          <strong>移除了 <code>.btn-block</code>，改用工具类。</strong> 无需在 <code>.btn</code> 上使用 <code>.btn-block</code>，而应使用 <code>.d-grid</code> 包裹按钮，并用 <code>.gap-*</code> 工具类按需设置间距。若要进一步控制，可改用响应式类。
          <a href="/components/buttons#block-buttons">阅读文档中的一些示例。</a>
        </p>
      </li>
      <li>
        <p>更新了 <code>button-variant()</code> 和 <code>button-outline-variant()</code> mixin，以支持更多参数。</p>
      </li>
      <li><p>更新了按钮，以确保在悬停和激活状态下具有更高的对比度。</p></li>
      <li>
        <p>禁用的按钮现在具有 <code>pointer-events: none;</code>。</p>
      </li>
    </ul>
    <h4 id="card">卡片</h4>
    <ul>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.card-deck</code>，改用我们的网格。将卡片放入列类中，并添加父级 <code>.row-cols-*</code> 容器即可重现卡片组（但对响应式对齐有更强的控制）。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.card-columns</code>，改用 Masonry。<a href="https://github.com/twbs/bootstrap/pull/28922">参见 #28922</a>。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 将基于 <code>.card</code> 的折叠面板替换为<a href="/components/accordion">新的折叠面板组件</a>。</p>
      </li>
    </ul>
    <h4 id="carousel">轮播</h4>
    <ul>
      <li>
        <p>
          新增
          <a href="/components/carousel#dark-variant"><code>.carousel-dark</code> 变体</a>，用于深色文本、控件和指示器（非常适合较浅的背景）。
        </p>
      </li>
      <li>
        <p>
          将轮播控件的 chevron 图标替换为来自
          <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a>的新 SVG。
        </p>
      </li>
    </ul>
    <h4 id="close-button-1">关闭按钮</h4>
    <ul>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 将 <code>.close</code> 重命名为 <code>.btn-close</code>，使名称不那么通用。</p>
      </li>
      <li>
        <p>关闭按钮现在使用 <code>background-image</code>（内嵌 SVG），而不再在 HTML 中使用 <code>&amp;times;</code>，这样无需改动标记即可更轻松地自定义。</p>
      </li>
      <li>
        <p>新增 <code>.btn-close-white</code> 变体，使用 <code>filter: invert(1)</code> 让关闭图标在较深背景上获得更高对比度。</p>
      </li>
    </ul>
    <h4 id="collapse">折叠</h4>
    <ul>
      <li>移除了折叠面板的滚动锚定。</li>
    </ul>
    <h4 id="dropdowns-1">下拉菜单</h4>
    <ul>
      <li>
        <p>新增 <code>.dropdown-menu-dark</code> 变体及相关变量，用于按需创建深色下拉菜单。</p>
      </li>
      <li>
        <p>为 <code>$dropdown-padding-x</code> 新增变量。</p>
      </li>
      <li><p>加深了下拉菜单分隔线的颜色，以提升对比度。</p></li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 下拉菜单的所有事件现在都在下拉切换按钮上触发，然后冒泡到父元素。</p>
      </li>
      <li>
        <p>当下拉菜单的定位为静态，或下拉菜单位于导航栏中时，下拉菜单现在会设置 <code>data-bs-popper=&quot;static&quot;</code> 属性。这由我们的 JavaScript 添加，有助于在不干扰 Popper 定位的前提下使用自定义定位样式。</p>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span> 移除了下拉菜单插件的 <code>flip</code> 选项，改用原生 Popper 配置。你现在可以通过为
          <a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/modifiers/flip/#fallbackplacements"><code>fallbackPlacements</code></a>
          选项传入空数组来禁用翻转行为，该选项位于<a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/modifiers/flip/">flip</a>修饰符中。
        </p>
      </li>
      <li>
        <p>下拉菜单现在可以通过新的 <code>autoClose</code> 选项支持点击，以处理<a href="/components/dropdowns#auto-close-behavior">自动关闭行为</a>。你可以使用该选项接受下拉菜单内部或外部的点击，使其具有交互性。</p>
      </li>
      <li>
        <p>下拉菜单现在支持将 <code>.dropdown-item</code> 包裹在 <code>&lt;li&gt;</code> 中。</p>
      </li>
    </ul>
    <h4 id="jumbotron">巨型屏幕</h4>
    <ul>
      <li>
        <span class="badge text-bg-danger">破坏性变更</span> 移除了巨型屏幕组件，因为它可以用工具类复现。
        <a href="https://getbootstrap.com/docs/5.3/examples/jumbotron">查看我们新的巨型屏幕示例以了解演示。</a>
      </li>
    </ul>
    <h4 id="list-group-1">列表组</h4>
    <ul>
      <li>
        为列表组新增
        <a href="/components/list-group#numbered"><code>.list-group-numbered</code> 修饰符</a>。
      </li>
    </ul>
    <h4 id="navs-and-tabs">导航与标签页</h4>
    <ul>
      <li>为 <code>.nav-link</code> 类新增了用于 <code>font-size</code>、<code>font-weight</code>、<code>color</code> 和 <code>:hover</code> <code>color</code> 的 <code>null</code> 变量。</li>
    </ul>
    <h4 id="navbars">导航栏</h4>
    <ul>
      <li><span class="badge text-bg-danger">破坏性变更</span> 导航栏现在需要在内部包含一个容器（以大幅简化间距要求和所需的 CSS）。</li>
      <li><span class="badge text-bg-danger">破坏性变更</span> <code>.active</code> 类不能再应用到 <code>.nav-item</code> 上，必须直接应用到 <code>.nav-link</code> 上。</li>
    </ul>
    <h4 id="offcanvas">Offcanvas</h4>
    <ul>
      <li>新增<a href="/components/offcanvas">offcanvas 组件</a>。</li>
    </ul>
    <h4 id="pagination">分页</h4>
    <ul>
      <li>
        <p>分页链接现在具有可自定义的 <code>margin-left</code>，当链接彼此分开时，会在所有角上动态应用圆角。</p>
      </li>
      <li>
        <p>为分页链接添加了 <code>transition</code>。</p>
      </li>
    </ul>
    <h4 id="popovers">弹出框</h4>
    <ul>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 在默认弹出框模板中将 <code>.arrow</code> 重命名为 <code>.popover-arrow</code>。</p>
      </li>
      <li>
        <p>将 <code>whiteList</code> 选项重命名为 <code>allowList</code>。</p>
      </li>
    </ul>
    <h4 id="spinners">加载指示器</h4>
    <ul>
      <li>
        <p>加载指示器现在通过放慢动画来遵循 <code>prefers-reduced-motion: reduce</code>。<a href="https://github.com/twbs/bootstrap/pull/31882">参见 #31882</a>。</p>
      </li>
      <li><p>改进了加载指示器的垂直对齐。</p></li>
    </ul>
    <h4 id="toasts">轻提示</h4>
    <ul>
      <li>
        <p>轻提示现在可以借助<a href="/utilities/position">定位工具类</a>在 <code>.toast-container</code> 中<a href="/components/toasts#placement">定位</a>。</p>
      </li>
      <li><p>将轻提示的默认持续时间改为 5 秒。</p></li>
      <li>
        <p>从轻提示中移除了 <code>overflow: hidden</code>，并改用基于 <code>calc()</code> 函数的适当 <code>border-radius</code>。</p>
      </li>
    </ul>
    <h4 id="tooltips">工具提示</h4>
    <ul>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 在默认工具提示模板中将 <code>.arrow</code> 重命名为 <code>.tooltip-arrow</code>。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> <code>fallbackPlacements</code> 的默认值更改为 <code>[&#39;top&#39;, &#39;right&#39;, &#39;bottom&#39;, &#39;left&#39;]</code>，以便更好地放置 popper 元素。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 将 <code>whiteList</code> 选项重命名为 <code>allowList</code>。</p>
      </li>
    </ul>
    <h3 id="utilities-3">工具类<a class="anchor-link" href="#utilities-3" aria-label="工具类链接"></a></h3>
    <ul>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 随着 RTL 支持的加入，将若干工具类重命名，用逻辑属性名替代方向性名称：</p>
        <ul>
          <li>将 <code>.float-left</code> 和 <code>.float-right</code> 重命名为 <code>.float-start</code> 和 <code>.float-end</code>。</li>
          <li>将 <code>.border-left</code> 和 <code>.border-right</code> 重命名为 <code>.border-start</code> 和 <code>.border-end</code>。</li>
          <li>将 <code>.rounded-left</code> 和 <code>.rounded-right</code> 重命名为 <code>.rounded-start</code> 和 <code>.rounded-end</code>。</li>
          <li>将 <code>.ml-*</code> 和 <code>.mr-*</code> 重命名为 <code>.ms-*</code> 和 <code>.me-*</code>。</li>
          <li>将 <code>.pl-*</code> 和 <code>.pr-*</code> 重命名为 <code>.ps-*</code> 和 <code>.pe-*</code>。</li>
          <li>将 <code>.text-*-left</code> 和 <code>.text-*-right</code> 重命名为 <code>.text-*-start</code> 和 <code>.text-*-end</code>。</li>
        </ul>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 默认禁用负外边距。</p>
      </li>
      <li>
        <p>新增 <code>.bg-body</code> 类，用于快速将 <code>&lt;body&gt;</code> 的背景应用到其他元素上。</p>
      </li>
      <li>
        <p>为 <code>top</code>、<code>right</code>、<code>bottom</code> 和 <code>left</code> 新增<a href="/utilities/position#arrange-elements">定位工具类</a>。每个属性的可选值包括 <code>0</code>、<code>50%</code> 和 <code>100%</code>。</p>
      </li>
      <li>
        <p>新增 <code>.translate-middle-x</code> 和 <code>.translate-middle-y</code> 工具类，用于将绝对/固定定位的元素水平或垂直居中。</p>
      </li>
      <li>
        <p>
          新增
          <a href="/utilities/borders#border-width"><code>border-width</code> 工具类</a>。
        </p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 将 <code>.text-monospace</code> 重命名为 <code>.font-monospace</code>。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.text-hide</code>，因为这是一种已过时的隐藏文本方法，不应再使用。</p>
      </li>
      <li>
        <p>新增 <code>.fs-*</code> 工具类，用于设置 <code>font-size</code>（在启用 RFS 的情况下）。它们使用与 HTML 默认标题相同的刻度（1-6，从大到小），并可通过 Sass 映射进行修改。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 为简洁和一致起见，将 <code>.font-weight-*</code> 工具类重命名为 <code>.fw-*</code>。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 为简洁并与新的 <code>.fst-normal</code> 工具类保持一致，将 <code>.font-italic</code> 工具类重命名为 <code>.fst-italic</code>。</p>
      </li>
      <li>
        <p>在显示工具类中新增 <code>.d-grid</code>，并为 CSS Grid 和 flexbox 布局新增 <code>gap</code> 工具类（<code>.gap</code>）。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 移除了 <code>.rounded-sm</code> 和 <code>rounded-lg</code>，并引入了新的刻度类 <code>.rounded-0</code> 至 <code>.rounded-3</code>。<a href="https://github.com/twbs/bootstrap/pull/31687">参见 #31687</a>。</p>
      </li>
      <li>
        <p>新增 <code>line-height</code> 工具类：<code>.lh-1</code>、<code>.lh-sm</code>、<code>.lh-base</code> 和 <code>.lh-lg</code>。请<a href="/utilities/text#line-height">参见此处</a>。</p>
      </li>
      <li>
        <p>调整了 CSS 中 <code>.d-none</code> 工具类的位置，使其在与其他显示工具类同时生效时具有更高的优先级。</p>
      </li>
      <li>
        <p>扩展了 <code>.visually-hidden-focusable</code> 辅助类，使其借助 <code>:focus-within</code> 也能作用于容器。</p>
      </li>
    </ul>
    <h3 id="helpers-2">辅助类<a class="anchor-link" href="#helpers-2" aria-label="辅助类链接"></a></h3>
    <ul>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span>
          <strong>响应式嵌入辅助类已重命名为<a href="/helpers/ratio">比例辅助类</a></strong
          >， 并采用新的类名和改进后的行为，还提供了一个实用的 CSS 变量。
        </p>
        <ul>
          <li>类名已重命名，将宽高比中的 <code>by</code> 改为 <code>x</code>。例如，<code>.ratio-16by9</code> 现在是 <code>.ratio-16x9</code>。</li>
          <li>我们移除了 <code>.embed-responsive-item</code> 和元素分组选择器，改用更简洁的 <code>.ratio &gt; *</code> 选择器。不再需要额外的类，比例辅助类现在可用于任意 HTML 元素。</li>
          <li><code>$embed-responsive-aspect-ratios</code> Sass 映射已重命名为 <code>$aspect-ratios</code>，其值已简化为以类名和百分比组成的 <code>key: value</code> 键值对。</li>
          <li>现在会为 Sass 映射中的每个值生成并包含 CSS 变量。修改 <code>.ratio</code> 上的 <code>--bs-aspect-ratio</code> 变量即可创建任意<a href="/helpers/ratio#custom-ratios">自定义宽高比</a>。</li>
        </ul>
      </li>
      <li>
        <p>
          <span class="badge text-bg-danger">破坏性变更</span>
          <strong>“屏幕阅读器”类现在是<a href="/helpers/visually-hidden">“视觉隐藏”类</a>。</strong>
        </p>
        <ul>
          <li>
            将 Sass 文件从 <code>scss/helpers/_screenreaders.scss</code> 改为
            <code>scss/helpers/_visually-hidden.scss</code>
          </li>
          <li>
            将 <code>.sr-only</code> 和 <code>.sr-only-focusable</code> 重命名为 <code>.visually-hidden</code> 和
            <code>.visually-hidden-focusable</code>
          </li>
          <li>将 <code>sr-only()</code> 和 <code>sr-only-focusable()</code> mixin 重命名为 <code>visually-hidden()</code> 和 <code>visually-hidden-focusable()</code>。</li>
        </ul>
      </li>
      <li>
        <p><code>bootstrap-utilities.css</code> 现在也包含我们的辅助类。自定义构建中不再需要单独导入辅助类。</p>
      </li>
    </ul>
    <h3 id="javascript">JavaScript<a class="anchor-link" href="#javascript" aria-label="JavaScript链接"></a></h3>
    <ul>
      <li>
        <p><strong>移除了 jQuery 依赖</strong>，并将插件重写为常规 JavaScript。</p>
      </li>
      <li>
        <p><span class="badge text-bg-danger">破坏性变更</span> 所有 JavaScript 插件的数据属性现在都带有命名空间，以便将 Bootstrap 功能与第三方及你自己的代码区分开。例如，我们使用 <code>data-bs-toggle</code> 而非 <code>data-toggle</code>。</p>
      </li>
      <li>
        <p><strong>所有插件现在都可接受 CSS 选择器作为第一个参数。</strong> 你可以传入 DOM 元素或任意有效的 CSS 选择器来创建插件的新实例：</p>
        <CodeWrapper
          code='const modal = new bootstrap.Modal(&#39;#myModal&#39;)
const dropdown = new bootstrap.Dropdown(&#39;[data-bs-toggle="dropdown"]&#39;)'
          lang="javascript"
        />
      </li>
      <li>
        <p>
          <code>popperConfig</code> 可作为函数传入，该函数接受 Bootstrap 默认的 Popper 配置作为参数，从而让你按自己的方式合并这份默认配置。
          <strong>适用于下拉菜单、弹出框和工具提示。</strong>
        </p>
      </li>
      <li>
        <p><code>fallbackPlacements</code> 的默认值已更改为 <code>[&#39;top&#39;, &#39;right&#39;, &#39;bottom&#39;, &#39;left&#39;]</code>，以便更好地放置 Popper 元素。<strong>适用于下拉菜单、弹出框和工具提示。</strong></p>
      </li>
      <li>
        <p>从公开静态方法中去除了下划线，例如 <code>_getInstance()</code> → <code>getInstance()</code>。</p>
      </li>
      <li>
        <p>移除了 <code>util.js</code>，其功能现已集成到各个插件中。如果你之前手动引入了 <code>util.js</code>，现在可以安全地将其移除，因为已不再需要。每个插件现在只包含其所需的工具函数，从而增强了模块化并减少了依赖。</p>
      </li>
    </ul>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
        <a href="#v536">v5.3.6</a>
        <ul>
          <li><a href="#dependencies">依赖项</a></li>
        </ul>
      </li>
      <li>
        <a href="#v530">v5.3.0</a>
        <ul>
          <li><a href="#helpers">辅助类</a></li>
          <li><a href="#utilities">工具类</a></li>
        </ul>
      </li>
      <li>
        <a href="#v530-alpha2">v5.3.0-alpha2</a>
        <ul>
          <li><a href="#css-variables">CSS 变量</a></li>
          <li><a href="#color-modes">色彩模式</a></li>
          <li><a href="#typography">排版</a></li>
          <li><a href="#components">组件</a></li>
          <li><a href="#helpers-1">辅助类</a></li>
          <li><a href="#utilities-1">工具类</a></li>
          <li><a href="#docs">文档</a></li>
          <li><a href="#tooling">工具</a></li>
        </ul>
      </li>
      <li>
        <a href="#v530-alpha1">v5.3.0-alpha1</a>
        <ul>
          <li><a href="#color-modes-1">色彩模式！</a></li>
          <li><a href="#css-variables-1">CSS 变量</a></li>
          <li><a href="#components-1">组件</a></li>
          <li><a href="#progress-bars">进度条</a></li>
          <li><a href="#forms">表单</a></li>
          <li><a href="#utilities-2">工具类</a></li>
        </ul>
      </li>
      <li>
        <a href="#v520">v5.2.0</a>
        <ul>
          <li><a href="#refreshed-design">焕新的设计</a></li>
          <li><a href="#more-css-variables">更多 CSS 变量</a></li>
          <li><a href="#new-utilities">新增工具类</a></li>
          <li><a href="#additional-changes">其他变更</a></li>
        </ul>
      </li>
      <li><a href="#v510">v5.1.0</a></li>
      <li>
        <a href="#v500">v5.0.0</a>
        <ul>
          <li><a href="#dependencies-1">依赖项</a></li>
          <li><a href="#browser-support">浏览器支持</a></li>
          <li><a href="#documentation-changes">文档变更</a></li>
          <li><a href="#sass">Sass</a></li>
          <li><a href="#color-system">色彩系统</a></li>
          <li><a href="#grid-updates">网格更新</a></li>
          <li><a href="#content-reboot-etc">内容、Reboot 等</a></li>
          <li><a href="#rtl">RTL</a></li>
          <li><a href="#forms-1">表单</a></li>
          <li><a href="#components-2">组件</a></li>
          <li><a href="#utilities-3">工具类</a></li>
          <li><a href="#helpers-2">辅助类</a></li>
          <li><a href="#javascript">JavaScript</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
