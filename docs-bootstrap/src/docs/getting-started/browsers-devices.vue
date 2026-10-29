<template>
<article class="docs-content prose">
    <h1>浏览器与设备</h1>

<p>了解 Bootstrap 支持的浏览器和设备（从现代到旧版），以及该框架所构建于其上的现代平台特性。</p>

<h2 id="supported-browsers">支持的浏览器<a class="anchor-link" href="#supported-browsers" aria-label="链接到 支持的浏览器"></a></h2>

<p>Bootstrap 支持所有主流浏览器和平台的<strong>最新稳定版本</strong>，以及各引擎的一批较旧版本。具体策略见<a href="https://github.com/twbs/bootstrap/blob/main/.browserslistrc">我们的 <code>.browserslistrc</code> 文件</a>：</p>

<CodeWrapper code="last 2 major versions
not dead
unreleased versions

Chrome >= 130
Edge >= 130
Firefox >= 132
iOS >= 18.0
Safari >= 18.0

not and_uc > 0
not and_qq > 0
not kaios > 0
not op_mini all" lang="plaintext" />

<p>Browserslist 用 OR（而非 AND）连接这些行。<code>&gt;=</code> 行不会缩小 <code>last 2 major versions</code> 的范围，它们会加入每个下限之上的所有版本，从而设定我们真正的最低版本：</p>

<div class="table-responsive">
<table class="table table md:table-stacked">
    <thead>
        <tr><th>浏览器</th><th>最低版本</th></tr>
    </thead>
    <tbody>
        <tr><td>Chrome</td><td>130</td></tr>
        <tr><td>Edge</td><td>130</td></tr>
        <tr><td>Firefox</td><td>132</td></tr>
        <tr><td>Safari（macOS）</td><td>18</td></tr>
        <tr><td>Safari（iOS 和 iPadOS）</td><td>18</td></tr>
    </tbody>
</table>
</div>

<p>基于这些引擎构建的替代浏览器（如 Brave、Opera、Vivaldi 等 Chromium 浏览器，以及 iOS 上使用 WebKit 的浏览器）未经过显式测试，但在等效引擎版本下应得到完全支持。</p>

<h3 id="how-to-read-the-query-list">如何解读查询列表<a class="anchor-link" href="#how-to-read-the-query-list" aria-label="链接到 如何解读查询列表"></a></h3>

<p>其中两行所做的事情比看上去更多：</p>

<ul>
    <li><strong><code>last 2 major versions</code> 承载我们的移动端覆盖。</strong>caniuse 将 Chrome for Android 跟踪为单个无版本条目，而非每个版本一个条目，因此正是这一行（而非 <code>&gt;=</code> 下限）将它纳入。</li>
    <li><strong><code>unreleased versions</code> 约值八个百分点的覆盖，且没有代价。</strong>caniuse 将最新的 Safari 的发布日期标记为 null，但该版本已占据 Safari 的大部分使用份额。范围查询和 <code>last N versions</code> 都会跳过未发布版本，因此如果没有这一行，我们就会排除使用最广泛的单个 Safari。它不会引入任何旧版本，因为未发布版本比所有下限都新。</li>
</ul>

<p>要自行测量覆盖率，请在仓库克隆中运行 <code>npx browserslist --coverage</code>。不要从 browserslist.dev 读取数字：该网站固定了较旧的 caniuse-db 副本，报告的数字会有实质差异。</p>

<h3 id="why-these-versions">为什么是这些版本？<a class="anchor-link" href="#why-these-versions" aria-label="链接到 为什么是这些版本？"></a></h3>

<p>Bootstrap 的 CSS 基于现代平台基线编写：用于<a href="/docs/customize/color-modes">颜色模式</a>的 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark"><code>light-dark()</code></a>，用于<a href="/docs/customize/color">颜色系统</a>的 <code>oklch()</code> 和 <code>color-mix()</code>，原生 CSS 嵌套，容器查询，以及 <code>:has()</code>。</p>

<p>我们的下限还必须持久。它们适用于整个 v6.x 系列，且我们无法在次要版本中提高它们，因此它们限制了未来所有 6.x 特性可以使用的范围。因此，我们将每个下限设定在 v6 已依赖的最新特性上，而非我们所能容忍的最旧版本：</p>

<div class="table-responsive">
<table class="table table md:table-stacked">
    <thead>
        <tr><th>特性</th><th>设定下限的依据</th></tr>
    </thead>
    <tbody>
        <tr><td><code>:has()</code></td><td>Firefox 121——用于表单、按钮组和卡片</td></tr>
        <tr><td><code>content-visibility</code></td><td>Firefox 125 和 Safari 18——手风琴用它配合 <code>allow-discrete</code> 进行过渡</td></tr>
        <tr><td><code>&lt;details name="…"&gt;</code></td><td>Firefox 130——互斥手风琴</td></tr>
        <tr><td><code>text-wrap: balance</code></td><td>Chrome 130——作为工具类发布</td></tr>
        <tr><td>无前缀 <code>backdrop-filter</code></td><td>Safari 和 iOS 18——对话框和抽屉会模糊其 <code>::backdrop</code></td></tr>
    </tbody>
</table>
</div>

<p><code>light-dark()</code> 设定了硬性下限：Chrome 123、Firefox 120 和 Safari 17.5。低于此版本，我们的构建流水线会将 <code>light-dark()</code> 降级为自定义属性 polyfill，而该 polyfill 会破坏 <code>data-bs-theme</code> 深色模式。我们不会在任何版本中低于该界限。</p>

<p>这些目标合计覆盖约 85% 的全球浏览器使用量。</p>

<p>与之前的主要版本不同，Bootstrap 6 不为低于此下限的浏览器提供降级、前缀或 polyfill。页面在不受支持的浏览器中将无法正确渲染——最明显的是，依赖 <code>light-dark()</code> 的颜色将无法解析。</p>

<h2 id="modern-platform-features">现代平台特性<a class="anchor-link" href="#modern-platform-features" aria-label="链接到 现代平台特性"></a></h2>

<p>下表列出了 v6 依赖的平台特性，以及每个特性在支持下限及以下时的行为。</p>

<div class="table-responsive">
<table class="table table md:table-stacked">
    <thead>
        <tr><th>特性</th><th>使用者</th><th>在受支持浏览器中的行为</th></tr>
    </thead>
    <tbody>
        <tr><td><code>light-dark()</code></td><td><a href="/docs/customize/color-modes">颜色模式</a>、所有主题令牌</td><td>设定下限的硬性最低值；低于此值无降级</td></tr>
        <tr><td><code>oklch()</code>、<code>color-mix()</code></td><td><a href="/docs/customize/color">颜色系统</a>、主题变体</td><td>在下限以上完全支持</td></tr>
        <tr><td>容器查询（<code>@container</code>）</td><td><a href="/docs/components/card#card-groups">卡片组</a>、<a href="/docs/components/list-group#horizontal">水平列表组</a></td><td>在下限以上完全支持；这些组件还要求祖先查询容器（<code>.contains-inline</code>）——没有它则保持堆叠</td></tr>
        <tr><td><code>:has()</code></td><td>表单、带菜单的按钮组以及其他上下文样式</td><td>在下限以上完全支持</td></tr>
        <tr><td>原生 <code>&lt;dialog&gt;</code></td><td><a href="/docs/components/dialog">对话框</a>、<a href="/docs/components/drawer">抽屉</a></td><td>在下限以上完全支持；焦点遏制和 <code>inert</code> 行为来自浏览器</td></tr>
        <tr><td><code>&lt;details name="…"&gt;</code></td><td><a href="/docs/components/accordion">互斥手风琴</a></td><td>在下限以上完全支持；在较旧的不受支持浏览器中，手风琴项会优雅降级为可独立打开的 <code>&lt;details&gt;</code> 元素</td></tr>
        <tr><td>CSS 滚动捕捉</td><td><a href="/docs/components/carousel">轮播</a></td><td>在下限以上完全支持；原生触摸、滚轮和键盘滚动</td></tr>
        <tr><td>逻辑属性</td><td>贯穿整个项目的间距、边框和 <a href="/docs/customize/rtl">RTL</a> 支持</td><td>在下限以上完全支持</td></tr>
    </tbody>
</table>
</div>

<h3 id="also-safe-to-use">同样可以安全使用<a class="anchor-link" href="#also-safe-to-use" aria-label="链接到 同样可以安全使用"></a></h3>

<p>这些下限所覆盖的平台范围超过了组件当前使用的范围。以下所有内容在任何 6.x 版本中都无需降级、无需厂商前缀、无需 polyfill，因此当你基于 Bootstrap 构建或为其贡献代码时，可以优先使用它们：</p>

<ul>
    <li>原生 CSS 嵌套，因此编译输出可以保持嵌套</li>
    <li><code>@layer</code>，我们的<a href="/docs/getting-started/approach">层级顺序</a>依赖它</li>
    <li><code>:focus-visible</code>，用于仅键盘焦点样式</li>
    <li>容器查询单位和 <code>subgrid</code></li>
    <li><code>content-visibility</code>、<code>transition-behavior: allow-discrete</code> 和 <code>@starting-style</code>，它们共同为 <code>&lt;details&gt;</code> 和 <code>&lt;dialog&gt;</code> 的打开与关闭添加动画</li>
    <li>无前缀 <code>backdrop-filter</code></li>
    <li><code>text-wrap: balance</code></li>
    <li>媒体查询中的范围语法，例如 <code>@media (width &gt;= 1024px)</code></li>
</ul>

<h3 id="not-available-yet">尚不可用<a class="anchor-link" href="#not-available-yet" aria-label="链接到 尚不可用"></a></h3>

<p>这些特性位于我们的下限之上，因此 v6 在没有降级的情况下无法使用它们。几乎所有情况下 Firefox 都是阻碍，这意味着仅凭 Chrome 支持永远不足以告诉你我们能否发布某项特性。</p>

<div class="table-responsive">
<table class="table table md:table-stacked">
    <thead>
        <tr><th>特性</th><th>首次完全支持于</th></tr>
    </thead>
    <tbody>
        <tr><td>相对颜色语法，<code>rgb(from …)</code></td><td>Chrome 131、Firefox 133</td></tr>
        <tr><td>视图过渡（View transitions）</td><td>Firefox 144</td></tr>
        <tr><td>Invoker Commands API（<code>command</code> / <code>commandfor</code>）</td><td>Chrome 135、Firefox 144、Safari 26.2</td></tr>
        <tr><td><code>@scope</code></td><td>Firefox 146</td></tr>
        <tr><td>锚点定位（Anchor positioning）</td><td>Firefox 147、Safari 26</td></tr>
        <tr><td>样式容器查询</td><td>Firefox 151</td></tr>
        <tr><td><code>text-box-trim</code></td><td>Firefox 154</td></tr>
        <tr><td>滚动条样式</td><td>Safari 26.2</td></tr>
    </tbody>
</table>
</div>

<p>相对颜色语法是最接近的未达标项，比我们的 Chrome 下限高一个版本。锚点定位是最值得等待的：它能让 Menu、Tooltip、Popover 和 Combobox 放弃对 <a href="https://floating-ui.com/">Floating UI</a> 的依赖。在假设某项特性已经落地之前，请用 <code>npx browserslist</code> 重新检查这些内容。</p>

<h2 id="javascript">JavaScript<a class="anchor-link" href="#javascript" aria-label="链接到 JavaScript"></a></h2>

<p>Bootstrap 的 JavaScript 仅以<strong>原生 ES 模块</strong>形式发布。使用 <code>&lt;script type="module"&gt;</code> 加载它——不带 <code>type="module"</code> 的经典 <code>&lt;script src&gt;</code> 不会执行它，而且不存在全局 <code>window.bootstrap</code> 对象。加载模式（包括打包依赖的导入映射）请参阅 <a href="/docs/getting-started/javascript">JavaScript 入门指南</a>。</p>

<p>所有满足上述 CSS 支持下限的浏览器都完全支持 ES 模块、<code>import</code>/<code>export</code> 语法，以及 Bootstrap 插件使用的 DOM API——不需要也不提供转译或 polyfill。</p>

<h2 id="mobile-devices">移动设备<a class="anchor-link" href="#mobile-devices" aria-label="链接到 移动设备"></a></h2>

<p>一般来说，Bootstrap 支持每个主要平台默认浏览器的最新版本。请注意，不支持代理浏览器（如 Opera Mini、Opera Mobile 的 Turbo 模式、UC Browser Mini、Amazon Silk）。我们同样排除 UC Browser、QQ Browser 和 KaiOS。它们合计占用户不到 1%，纳入它们只会给我们的 CSS 增加厂商前缀：UC 和 QQ 的 <code>-webkit-mask-*</code>，以及 KaiOS 的 <code>-moz-column-gap</code>。KaiOS 还<a href="https://github.com/postcss/autoprefixer/issues/1533">破坏了我们的浮动标签</a>。</p>

<div class="table-responsive">
<table class="table table md:table-stacked">
    <thead>
        <tr><th>平台</th><th>支持的浏览器</th></tr>
    </thead>
    <tbody>
        <tr><td>Android</td><td>Chrome（最近两个主要版本）</td></tr>
        <tr><td>iOS 和 iPadOS</td><td>Safari 18+、Chrome（在 iOS 上使用 WebKit）</td></tr>
        <tr><td>Windows、macOS、Linux</td><td>Chrome 130+、Edge 130+、Firefox 132+；macOS 上 Safari 18+</td></tr>
    </tbody>
</table>
</div>

<p>与 v5 一样，请确保在 <code>&lt;head&gt;</code> 中包含响应式视口 meta 标签，以便在移动设备上正确渲染：</p>

<CodeWrapper code='<meta name="viewport" content="width=device-width, initial-scale=1">' lang="html" />
</article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#supported-browsers">支持的浏览器</a>
            <ul>
                <li><a href="#how-to-read-the-query-list">如何解读查询列表</a></li>
                <li><a href="#why-these-versions">为什么是这些版本？</a></li>
            </ul>
        </li>
        <li><a href="#modern-platform-features">现代平台特性</a>
            <ul>
                <li><a href="#also-safe-to-use">同样可以安全使用</a></li>
                <li><a href="#not-available-yet">尚不可用</a></li>
            </ul>
        </li>
        <li><a href="#javascript">JavaScript</a></li>
        <li><a href="#mobile-devices">移动设备</a></li>
    </ul>
</nav>
</template>
