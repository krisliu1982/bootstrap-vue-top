<template>
  <article class="docs-content prose">
  <h1>迁移</h1>
<p>跟踪并查看 Bootstrap 源文件、文档和组件的变更，帮助你从 v5 迁移到 v6。</p>

<h2 id="upgrade">升级<a class="anchor-link" href="#upgrade" aria-label="链接到 升级"></a></h2>

<p>Bootstrap 6 是一个主要版本，包含许多破坏性变更，以现代化我们的代码库、采用更新的构建工具并改进自定义能力。请继续阅读，了解如何从 v5 迁移到 v6 的指南，以及新增内容的完整变更日志。</p>

<Callout type="info">
    <p><strong>使用 AI 编程代理进行迁移？</strong> Bootstrap 提供了 <a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-v5-v6-migration">v5 到 v6 迁移技能</a>（<code>skills/bootstrap-v5-v6-migration</code>），可引导编程代理逐步完成升级。Bootstrap 4 项目应从 <a href="https://github.com/twbs/bootstrap/tree/main/skills/bootstrap-v4-v6-migration">v4 到 v6 迁移技能</a>开始。将你的代理指向适用的 <code>SKILL.md</code> 文件，然后对照本指南审查其变更。</p>
</Callout>

<ol>
    <li>
        <p>升级你的 Bootstrap 依赖：</p>
        <CodeWrapper code='{
  "dependencies": {
    "bootstrap": "^6.0.0"
  }
}' lang="json" class="my-6" />
        <p>将 <code>@popperjs/core</code> 替换为 <code>@floating-ui/dom</code>。如果你使用 Datepicker，请添加 <code>vanilla-calendar-pro</code>。打包版 JavaScript 包含这两个对等依赖。独立版 JavaScript 需要安装包或导入映射。</p>
    </li>
    <li>
        <p>如果使用 Bootstrap 的所有 Sass 文件，请使用 <code>@use</code> 将其包含在 Sass 中：</p>
                <CodeWrapper code='@use "bootstrap/scss/bootstrap";' lang="scss" class="my-6" />
        <p>这样，你就可以轻松覆盖 Bootstrap 的 Sass 变量和映射：</p>
                <CodeWrapper code='@use "bootstrap/scss/bootstrap" with (
 $spacer: 1rem,
 $enable-reduced-motion: true,
);' lang="scss" class="my-6" />
    </li>
    <li>
        <p>如果只使用 Bootstrap Sass 文件的某些部分，可以使用 <code>@use</code> 单独导入它们。请注意，我们的 Sass 文件结构已更改，你可能需要相应调整导入。</p>
                        <CodeWrapper code='@use "bootstrap/scss/forms";' lang="scss" class="my-6" />
    </li>
    <li>根据变更日志和文档中的更新，更新 HTML 和 CSS。</li>
    <li>重新编译 Sass 以查看更改。</li>
</ol>

<Callout type="warning">
    <p><strong>先检查你的浏览器支持。</strong> Bootstrap 6 大幅提高了最低浏览器版本：Chrome 和 Edge 130、Firefox 132、macOS 和 iOS 上的 Safari 18。Bootstrap 5 支持 Chrome 和 Firefox 60，以及 Safari 12。我们构建于 <code>light-dark()</code>、<code>:has()</code>、容器查询、<code>content-visibility</code> 和原生 <code>&lt;dialog&gt;</code> 元素之上，v6 不提供低于下限的降级、前缀或 polyfill。页面在较旧浏览器中将无法正确渲染。升级前请检查你自己的分析数据，并参阅<a href="/docs/getting-started/browsers-devices/docs">浏览器与设备</a>了解完整策略及每个版本背后的原因。</p>
</Callout>

<h2 id="changelog">变更日志<a class="anchor-link" href="#changelog" aria-label="链接到 变更日志"></a></h2>

<h3 id="css">CSS<a class="anchor-link" href="#css" aria-label="链接到 CSS"></a></h3>

<ul>
    <li><strong>澄清并简化了 CSS-Sass 设置。</strong> 阅读更多关于我们的<a href="/docs/getting-started/approach/docs">实现思路</a>，了解我们如何结合使用 Sass 和 CSS 来构建和自定义项目以满足你的特定需求，特别是我们如何在 Sass 映射中使用 CSS 变量作为一等自定义层。</li>
    <li><strong>在 <code>_root.scss</code> 中实现了 CSS 层</strong>，并将其应用于我们所有的 Sass 文件。
        <ul>
            <li>层在 <code>_root.scss</code> 中设置，然后在各个 Sass 局部文件中使用。</li>
            <li>遗憾的是，我们无法将 <code>@use</code> 或 <code>@forward</code> 语句包装在 <code>@layer</code> 中——Sass 始终要求它们位于顶层。此外，虽然 CSS 允许 <code>@import "file.css" layer(name)</code>，但 Sass 也不支持。</li>
        </ul>
    </li>
    <li>新的、精简的颜色模式和主题化。
        <ul>
            <li>移除了 <code>_maps.scss</code></li>
            <li>移除了 <code>_variables-dark.scss</code></li>
            <li>添加了 <code>_colors.scss</code>，将颜色拆分到自己的文件</li>
            <li>移除了 <code>_variables.scss</code>，将所有变量合并到 <code>_config.scss</code></li>
            <li>添加了 <code>_theme.scss</code>，我们在其中设置所有全局主题化，以确定颜色的应用方式</li>
        </ul>
    </li>
    <li><strong>更新了 lg、xl 和 2xl 断点及容器。</strong>
        <ul>
            <li><code>lg</code> 断点从 992px 增加到 1024px；其容器保持 960px 不变。</li>
            <li><code>xl</code> 断点从 1200px 增加到 1280px，其容器从 1140px 增加到 1200px。</li>
            <li>将 <code>xxl</code> 重命名为 <code>2xl</code>，以便与额外的自定义断点更好地扩展</li>
            <li><code>2xl</code> 断点从 1400px 增加到 1536px，其容器从 1320px 增加到 1440px。</li>
        </ul>
    </li>
    <li><strong>采用了现代 CSS 颜色函数。</strong> 所有 Sass 颜色变量现在使用 <code>oklch()</code> 表示法（例如 <code>$blue: oklch(60% 0.24 240)</code>），色调/阴影比例默认使用 <code>color-mix(in oklch, ...)</code> 生成。使用 <code>$color-mix-space</code> 配置颜色空间。v5 的 <code>$*-rgb</code> CSS 自定义属性和 <code>rgba()</code> 模式已被移除。这需要浏览器支持 <code>color-mix()</code> 和 <code>oklch()</code>。</li>
    <li><strong>新的主题令牌系统，使用 <code>.theme-*</code> 类。</strong> 按组件的颜色变体类（如 <code>.alert-primary</code>、<code>.badge.bg-primary</code>、<code>.btn-primary</code>、<code>.table-primary</code>）被可组合的 <code>.theme-{name}</code> 模式取代。向组件添加 <code>.theme-primary</code> 会设置 <code>--theme-bg</code>、<code>--theme-fg</code>、<code>--theme-border</code>、<code>--theme-contrast</code> 以及其他语义 CSS 自定义属性，供组件读取。这适用于按钮、徽章、警告框、表格、卡片、手风琴等。在嵌套子树上使用 <code>.theme-reset</code> 可返回组件默认值。</li>
    <li><strong>根令牌现在输出到 <code>:root, :host</code>。</strong> 自定义属性存在于两个选择器上，因此采用 Bootstrap 样式表的影子根可以读取这些令牌。如果你只覆盖 <code>:root</code>，Web Components 将看不到这些覆盖——请在 <code>:host</code> 上重复它们，或使用同时覆盖两者的选择器。</li>
    <li><strong>响应式和状态类现在使用前缀而非中缀或后缀。</strong> 类名遵循 Tailwind 风格的 <code>prefix:class</code> 模式（例如 <code>md:d-none</code> 而非 <code>d-md-none</code>，<code>hover:opacity-50</code> 而非 <code>opacity-50-hover</code>）。在 HTML 中，使用未转义的冒号：<code>class="md:d-none"</code>。这适用于工具类、网格、伪状态变体以及所有响应式组件。</li>
</ul>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>类别</th><th>之前（v5）</th><th>之后（v6）</th></tr>
    </thead>
    <tbody>
        <tr><td>工具类</td><td><code>.d-md-none</code>, <code>.p-lg-3</code></td><td><code>.md:d-none</code>, <code>.lg:p-3</code></td></tr>
        <tr><td>状态变体</td><td><code>.opacity-50-hover</code></td><td><code>.hover:opacity-50</code></td></tr>
        <tr><td>网格列</td><td><code>.col-md-6</code></td><td><code>.md:col-6</code></td></tr>
        <tr><td>行列</td><td><code>.row-cols-md-3</code></td><td><code>.md:row-cols-3</code></td></tr>
        <tr><td>偏移</td><td><code>.offset-md-2</code></td><td><code>.md:offset-2</code></td></tr>
        <tr><td>间距</td><td><code>.g-md-3</code>, <code>.gx-md-3</code></td><td><code>.md:g-3</code>, <code>.md:gx-3</code></td></tr>
        <tr><td>CSS 网格</td><td><code>.g-col-md-4</code></td><td><code>.md:g-col-4</code></td></tr>
        <tr><td>容器</td><td><code>.container-sm</code></td><td><code>.sm:container</code></td></tr>
        <tr><td>导航栏</td><td><code>.navbar-expand-md</code></td><td><code>.md:navbar-expand</code></td></tr>
        <tr><td>抽屉</td><td><code>.offcanvas-md</code></td><td><code>.md:drawer</code></td></tr>
        <tr><td>表格</td><td><code>.table-responsive-md</code></td><td><code>.md:table-responsive</code></td></tr>
        <tr><td>列表组</td><td><code>.list-group-horizontal-md</code></td><td><code>.md:list-group-horizontal</code></td></tr>
        <tr><td>粘性</td><td><code>.sticky-md-top</code></td><td><code>.md:sticky-top</code></td></tr>
        <tr><td>堆栈</td><td><code>.vstack-md</code></td><td><code>.md:vstack</code></td></tr>
        <tr><td>对话框</td><td><code>.dialog-fullscreen-sm-down</code></td><td><code>.sm-down:dialog-fullscreen</code></td></tr>
        <tr><td>打印</td><td><code>.d-print-none</code></td><td><code>.print:d-none</code></td></tr>
    </tbody>
</table>
</div>

<p>前缀语法不标识查询类型。工具类、网格列、容器、抽屉和响应式表格使用视口查询。堆栈、CSS 网格列、导航栏展开、水平列表组、卡片组和堆叠表格使用容器查询。请添加每个组件文档所要求的查询容器。</p>

<ul>
    <li><strong>新的动态工具类。</strong> 添加了 <code>.transition-none</code> 和 <code>.animation-none</code>，用于在单个元素上关闭组件的过渡或关键帧动画，以及装饰性的 <code>.animation-shake</code> 和 <code>.animation-pop</code> 辅助类。参见<a href="/docs/utilities/motion/docs">动态工具类</a>页面。装饰性动画在 <code>prefers-reduced-motion</code> 下会自动禁用。</li>
    <li><strong>复选框、单选按钮和开关现在会为其标记添加动画。</strong> 复选框勾选、单选圆点和开关滑块以轻微的过冲缓入，由共享的 <code>--control-transition-duration</code> 和 <code>--control-transition-timing</code> 令牌驱动，使三者同步移动。对于偏好减少动态效果的用户，动画会跳过，且无需更改标记。</li>
    <li><strong>拆分淡入淡出和折叠过渡令牌。</strong> v5 的单一 <code>$transition-fade</code> 和 <code>$transition-collapse</code> 值现在变为 CSS 自定义属性对——<code>--transition-fade-duration</code> / <code>--transition-fade-timing</code> 和 <code>--transition-collapse-duration</code> / <code>--transition-collapse-timing</code>——因此持续时间和缓动可以独立调整。覆盖组件（对话框、抽屉、菜单）还共享一个新的 <code>--transition-timing-overlay</code> 缓动令牌。将旧值的任何覆盖更新为新的令牌名称。</li>
    <li><strong>新的 <code>.hover-lift</code> 辅助类。</strong> 在悬停和键盘焦点时通过变换和更深的阴影提升元素，可通过 <code>--hover-lift-*</code> 令牌自定义，并感知减少动态效果。参见<a href="/docs/helpers/hover-lift/docs">悬停提升</a>辅助类。</li>
    <li><strong>移除了组合的 <code>--*-transition</code> 令牌。</strong> 按钮、导航链接、手风琴、表单控件、范围滑块和浮动标签各自删除了其组合的 <code>--*-transition</code> 值。每个现在声明一个 <code>--*-transition-property</code> / <code>--*-transition-duration</code> / <code>--*-transition-timing</code> 三元组。旧令牌将整个属性列表和一个持续时间打包到 <code>transition</code> 简写中，其中持续时间仅绑定到最后一个属性——因此按钮的 <code>color</code>、<code>background-color</code> 和 <code>border-color</code> 实际上从未动画。这些组件现在自行设置 <code>transition-property</code>、<code>transition-duration</code> 和 <code>transition-timing-function</code>，在每个列出的属性上重复一个持续时间和缓动。将 <code>--bs-btn-transition</code> 等的覆盖替换为匹配的 <code>-duration</code> 和 <code>-timing</code> 令牌。</li>
    <li><strong>过渡现在通过 <code>prefers-reduced-motion: no-preference</code> 选择加入。</strong> 我们的过渡 mixin 过去会输出过渡，然后在 <code>prefers-reduced-motion: reduce</code> 查询内再次关闭它。它们现在仅在 <code>no-preference</code> 查询内输出。因此，不支持该媒体特性的浏览器完全不会获得过渡。强制 <code>transition: none</code> 的规则保留在查询之外，因此仍能到达所有浏览器。</li>
    <li><strong>每个动画组件现在都暴露一个 <code>-property</code> 令牌。</strong> 对话框、抽屉、菜单和轻提示加入了按钮和手风琴已有的三元组，因此 <code>--bs-dialog-transition-property</code>、<code>--bs-drawer-transition-property</code>、<code>--bs-menu-transition-property</code> 和 <code>--bs-toast-transition-property</code> 可以在不重写整个 <code>transition</code> 声明的情况下向动画添加属性。手风琴面板也获得了自己的 <code>--bs-accordion-panel-transition-*</code> 三元组，取代了硬编码的 <code>.2s</code>。完整模型请参见新的<a href="/docs/customize/transitions/docs">过渡</a>页面。</li>
</ul>

<h3 id="sass">Sass<a class="anchor-link" href="#sass" aria-label="链接到 Sass"></a></h3>

<ul>
    <li>放弃了对 Node Sass 的支持，包括不再针对它测试我们的任何源 CSS。
        <ul>
            <li>在此过程中重新排列了几个 Sass 文件。</li>
        </ul>
    </li>
    <li>移除了 <code>add()</code> 和 <code>subtract()</code> 函数。请改用 <code>calc()</code>。</li>
    <li>移除了 <code>create-css-vars()</code> mixin（未使用）。</li>
    <li><strong>将 <code>breakpoint-infix()</code> 重命名为 <code>breakpoint-prefix()</code>。</strong> 该函数现在返回前缀字符串（例如 <code>"md\:"</code>）而非中缀（例如 <code>"-md"</code>）。<code>loop-breakpoints-up</code> 和 <code>loop-breakpoints-down</code> mixin 现在暴露 <code>$prefix</code> 而非 <code>$infix</code>。更新任何调用这些函数或 mixin 的自定义 Sass。</li>
    <li><strong>CSS 变量前缀现在由 PostCSS 处理。</strong> <code>$prefix</code> Sass 变量已被移除。CSS 自定义属性现在在 Sass 源中不带前缀编写，并在构建期间通过 <code>postcss-prefix-custom-properties</code> 自动添加前缀。要自定义前缀，请更新你的 PostCSS 配置而非 Sass。</li>
    <li><strong>移除了 RFS（响应式字体大小）。</strong> <code>scss/vendor/_rfs.scss</code> 文件及所有 RFS mixin 已被移除。排版现在使用固定的 <code>rem</code> 值和 <code>clamp()</code> 进行响应式尺寸调整。如果你依赖 RFS 进行自动字体缩放，你需要实现自己的响应式排版或直接使用 <code>clamp()</code>。</li>
    <li><strong>为保持一致性重命名了 Sass 文件。</strong> <code>_placeholders.scss</code> 现在是 <code>_placeholder.scss</code>，<code>_spinners.scss</code> 现在是 <code>_spinner.scss</code>。更新这些文件的任何单独 <code>@use</code> 导入。</li>
    <li><strong>使用 <code>focus-ring</code> mixin 标准化焦点样式。</strong> 所有组件特定的 <code>*-focus-box-shadow</code> Sass 变量（例如 <code>$btn-focus-box-shadow</code>、<code>$input-focus-box-shadow</code>、<code>$accordion-button-focus-box-shadow</code>）已被移除。焦点样式现在由共享的 <code>@mixin focus-ring()</code> 使用 <code>--focus-ring</code>、<code>--focus-ring-width</code>、<code>--focus-ring-offset</code> 和 <code>--focus-ring-color</code> CSS 自定义属性处理。通过在 <code>_root.scss</code> 中覆盖这些令牌而非单独的 Sass 变量来自定义焦点样式。</li>
    <li><strong>将 <code>$grid-breakpoints</code> 重命名为 <code>$breakpoints</code>。</strong></li>
    <li><strong>主题和配置映射现在通过 <code>defaults()</code> 合并。</strong> <code>$theme-colors</code>、<code>$theme-bgs</code>、<code>$theme-fgs</code>、<code>$theme-borders</code>、<code>$badge-variants</code> 以及其他全局映射接受部分 <code>@use ... with ()</code> 覆盖。v5 需要完整的映射替换。将键设置为 <code>null</code> 可删除它。嵌套的主题颜色映射合并一层深度——传递整个子映射以更改一个角色。参见 <a href="/docs/customize/sass/docs">Sass</a>。</li>
    <li><strong>移除了 <code>$enable-dark-mode</code>。</strong> 深色模式支持始终编译；在运行时使用 <code>data-bs-theme</code>（或 <code>color-mode()</code> mixin）控制它，而非切换 Sass 标志。</li>
    <li><strong>移除了 <code>$enable-caret</code> 和 caret mixin。</strong> 菜单切换到 Floating UI 后，菜单切换器失去了自动 caret，因此该标志没有效果。<code>caret()</code>、<code>caret-down()</code>、<code>caret-up()</code>、<code>caret-end()</code> 和 <code>caret-start()</code> mixin、<code>scss/mixins/_caret.scss</code> 文件以及 <code>$caret-width</code>、<code>$caret-vertical-align</code> 和 <code>$caret-spacing</code> 变量都已移除。如果你想要 caret，请在切换器标记中添加图标。</li>
    <li><strong>移除了 <code>$enable-negative-margins</code>。</strong> 负边距工具类现在始终生成，来自 <code>scss/_config.scss</code> 中的 <code>$negative-spacers</code> 映射。覆盖该映射以更改其值，或将键设置为 <code>null</code> 以删除它。参见下方工具类中的<a href="#utilities">负边距限制</a>。</li>
    <li><strong>移除了所有已弃用的 Sass 变量和值：</strong>
        <ul>
            <li>移除了 <code>$nested-kbd-font-weight</code>，无替代。</li>
            <li>从文本颜色工具类映射中移除了 <code>muted</code>、<code>black-50</code> 和 <code>white-50</code></li>
            <li>移除了轮播深色 Sass 变量（<code>$carousel-dark-indicator-active-bg</code>、<code>$carousel-dark-control-icon-filter</code>）和 <code>.carousel-dark</code> 类——它们未被重新分配。深色轮播现在使用 <code>data-bs-theme="dark"</code>（参见下方轮播更改）。轮播说明文字也已完全移除。</li>
            <li>移除了 <code>$btn-close-white-filter</code>。关闭按钮不再使用滤镜——其图标是用 <code>currentcolor</code> 绘制的 CSS 遮罩，因此它会自动适应深色背景。</li>
            <li>移除了所有 <code>$border-radius-*</code> 变量（<code>-xs</code>、<code>-sm</code>、默认、<code>-lg</code>、<code>-xl</code>、<code>-xxl</code>、<code>-pill</code>），改用数字 <code>$radii</code> 映射和 <code>--radius-*</code> 令牌——参见下方工具类中的<a href="#utilities">边框半径令牌</a>。</li>
            <li>移除了用于次要颜色的 <code>$text-muted</code>。</li>
            <li>将 <code>$hr-bg-color</code> 移除以用 <code>$hr-border-color</code>，<code>$hr-height</code> 移除以用 <code>$hr-border-width</code>。</li>
            <li>将 <code>$zindex-dropdown</code> 重命名为 <code>$zindex-menu</code>。</li>
            <li>移除了未使用的 <code>$dropdown-header-padding</code>，改用 <code>-x</code>/<code>-y</code> 拆分变量。</li>
            <li>移除了未使用的 <code>$accordion-button-focus-border-color</code>。</li>
            <li>移除了未使用的 <code>$tooltip-arrow-color</code>。</li>
            <li>移除了未使用的 <code>$popover-arrow-color</code> 和 <code>$popover-arrow-outer-color</code></li>
            <li>移除了未使用的 <code>$alert-bg-scale</code>、<code>$alert-border-scale</code> 和 <code>$alert-color-scale</code>（由主题令牌替代）</li>
            <li>移除了未使用的 <code>$list-group-item-bg-scale</code> 和 <code>$list-group-item-color-scale</code>（由主题令牌替代）</li>
        </ul>
    </li>
    <li><strong>移除了表单验证 Sass 变量和文件。</strong>
        <ul>
            <li>移除了 <code>scss/forms/_form-variables.scss</code>。反馈/工具提示 Sass 变量和验证图标 SVG data URI 已移除。验证样式现在使用主题派生的 CSS 自定义属性。</li>
            <li>将 <code>scss/mixins/_forms.scss</code> 重命名为 <code>scss/mixins/_form-validation.scss</code>。仅包含 <code>form-validation-state-selector</code> mixin。</li>
            <li>从 <code>scss/_config.scss</code> 中移除了 <code>$enable-validation-icons</code>。</li>
            <li>将 <code>$form-validation-states</code> 替换为 <code>$validation-states</code>（状态名称到主题键的映射）。</li>
        </ul>
    </li>
</ul>

<h3 id="javascript">JavaScript<a class="anchor-link" href="#javascript" aria-label="链接到 JavaScript"></a></h3>

<ul>
    <li><strong><code>show()</code>、<code>hide()</code>、<code>toggle()</code> 和 <code>close()</code> 现在返回 Promise。</strong> Promise 在过渡结束时 resolve，因此你可以 <code>await</code> 这些方法，而不必监听 <code>shown.bs.*</code> 或 <code>hidden.bs.*</code> 事件。在 v5 中它们返回 <code>undefined</code>。事件仍会触发，因此现有代码继续工作。这涵盖 Alert、Collapse、Combobox、Datepicker、Dialog、Drawer、Menu、Popover、Tab、Toast 和 Tooltip。Carousel 的 <code>next()</code>、<code>prev()</code> 和 <code>to()</code> 不变。

        <p><strong>之前（v5）：</strong></p>
        <CodeWrapper code="myCollapseEl.addEventListener('shown.bs.collapse', () => {
  // Runs once the collapsible area is expanded
})

collapse.show()" lang="javascript" class="my-6" />

        <p><strong>之后（v6）：</strong></p>
                <CodeWrapper code="await collapse.show()
// The collapsible area is now expanded" lang="javascript" class="my-6" />

        <p>Promise 不携带值 resolve，即使调用什么都不做也会 resolve——例如组件已经打开或监听器阻止了 <code>show.bs.*</code> 事件。如果你需要知道状态是否改变，请自行检查组件状态。</p>
    </li>
    <li><strong>Bootstrap 的 JavaScript 现在仅限 ESM。</strong> 我们不再发布 UMD 包。所有 dist 文件（<code>bootstrap.js</code>、<code>bootstrap.bundle.js</code> 及其压缩版本）都是原生 ES 模块。加载模型已更改，若干组件 API 也如下文所列发生了变化。
        <ul>
            <li>CDN <code>&lt;script&gt;</code> 标签必须添加 <code>type="module"</code>：
                              <CodeWrapper code='<script type="module" src="bootstrap.bundle.min.js"></script>' lang="html" class="my-6" />
            </li>
            <li>在 v5 中，UMD 包自动创建 <code>window.bootstrap</code> 全局对象。ES 模块不这样做，因此不再有 <code>bootstrap</code> 全局对象。如果你通过全局命名空间调用插件 API，必须更新为显式导入：

                <p><strong>之前（v5）：</strong></p>
                <CodeWrapper code="const tooltip = bootstrap.Tooltip.getOrCreateInstance(el)" lang="javascript" class="my-6" />

                <p><strong>之后（v6）：</strong></p>
                 <CodeWrapper code="import { Tooltip } from './bootstrap.bundle.min.js'
const tooltip = Tooltip.getOrCreateInstance(el)" lang="javascript" class="my-6" />
            </li>
            <li><strong>Data API 初始化仍自动运行。</strong> 向 script 标签添加 <code>type="module"</code>。你还必须应用本指南中的组件和数据属性重命名。</li>
            <li>对于现代基于 ESM 的打包工具（Vite、Webpack 5、Parcel 2、Rolldown 等），<code>import { Tooltip } from 'bootstrap'</code> 仍然有效并支持 tree shaking。为定位组件安装 <code>@floating-ui/dom</code>，为 Datepicker 安装 <code>vanilla-calendar-pro</code>。使用 CommonJS <code>require()</code> 调用的项目必须改为 ESM <code>import</code> 语法。</li>
            <li><code>bootstrap.bundle.js</code> 文件包含 Floating UI 和 Vanilla Calendar Pro。独立的 <code>bootstrap.js</code> 文件将这些对等依赖保持外部，因此直接浏览器加载需要导入映射。</li>
        </ul>
    </li>
    <li><strong>Bootstrap 的 JavaScript 源代码现在是 TypeScript。</strong> <code>js/src</code> 文件使用 <code>.ts</code> 扩展名。包在 <code>js/dist/*.d.ts</code> 中附带内置类型声明，因此你不再需要 <code>@types/bootstrap</code>。深层 <code>.js</code> 导入仍然有效：<code>bootstrap/js/src/alert.js</code> 现在解析为 <code>js/dist</code> 中的编译文件。要导入原始 TypeScript 源，请使用 <code>bootstrap/js/src/alert.ts</code>。</li>
    <li><strong>我们现在使用 Rolldown 而非 Rollup 和 Babel 构建。</strong> 这仅在你从源代码构建 Bootstrap 时影响你。Rolldown 剥离 TypeScript 类型并自行降低语法，因此 Babel 已移除，连同 <code>.babelrc.mjs</code> 和 <code>@rollup/plugin-*</code> 包。<code>dist/</code> 和 <code>js/dist/</code> 中发布的文件格式不变。如果你在自己的项目中打包 Bootstrap，继续使用你喜欢的任何打包工具——Rollup 仍然是不错的选择，<code>import { Tooltip } from 'bootstrap'</code> 的工作方式相同。详情请参阅<a href="/docs/guides/contribute/docs">贡献指南</a>。</li>
    <li><strong>Tab 现在在其元素没有 tab-panel 祖先时抛出异常。</strong> 在 v5 中，构造函数提前返回并给你一个惰性实例，从而隐藏了标记错误。将你的标签触发器包装在 <code>.list-group</code>、<code>.nav</code> 或 <code>[role="tablist"]</code> 容器中，如<a href="/docs/components/nav/docs">导航文档</a>所示。</li>
    <li>移除了单独的 <code>bootstrap.esm.js</code> 和 <code>bootstrap.esm.min.js</code> 文件——<code>bootstrap.js</code> 现在是 ESM 入口点。</li>
    <li>移除了 <code>js/index.umd.js</code> 入口点。</li>
    <li>移除了 jQuery 支持和 <code>js-test-jquery</code> 测试目标。</li>
    <li><strong>移除了内部 <code>util/backdrop</code>、<code>util/focustrap</code> 和 <code>util/scrollbar</code> 辅助函数。</strong> 由于 Dialog 和 Drawer 构建于原生 <code>&lt;dialog&gt;</code> 元素之上，它们已过时——浏览器提供背景（<code>::backdrop</code>）、焦点陷阱和惰性顶层，body 滚动锁定在 CSS 中处理（<code>:root.dialog-open</code> 配合 <code>scrollbar-gutter: stable</code>）。如果你直接从 <code>bootstrap/js/src/util/</code> 导入任何这些模块，它们已不存在。</li>
    <li><strong>用 Menu 替换了 Dropdown 组件。</strong> 所有 <code>.dropdown-*</code> 类现在是 <code>.menu-*</code> 类，<code>data-bs-toggle="dropdown"</code> 现在是 <code>data-bs-toggle="menu"</code>。完整详情请参阅<a href="/docs/components/menus/docs">菜单文档</a>。</li>
    <li><strong>Menu 的 <code>shown.bs.menu</code> 和 <code>hidden.bs.menu</code> 现在在 CSS 过渡完成后触发</strong>，而非在调用 <code>show()</code> / <code>hide()</code> 时同步触发——与 Dialog 和 Drawer 一致。菜单在关闭过渡期间也保持在 DOM 中定位，而非立即拆除。将任何假设旧同步时序（或菜单在 <code>hide()</code> 返回瞬间被移除）的逻辑移入 <code>shown</code> / <code>hidden</code> 事件处理程序。
        <ul>
            <li>重命名了 CSS 类：<code>.dropdown-menu</code> 改为 <code>.menu</code>，<code>.dropdown-item</code> 改为 <code>.menu-item</code>，<code>.dropdown-divider</code> 改为 <code>.menu-divider</code>，<code>.dropdown-header</code> 改为 <code>.menu-header</code>，<code>.dropdown-submenu</code> 改为 <code>.submenu</code>。</li>
            <li>移除了方向包装器：<code>.dropstart</code>、<code>.dropend</code> 和 <code>.dropup</code>。改用 <code>data-bs-placement</code> 控制方向（例如，<code>.dropup</code> 变为 <code>data-bs-placement="top"</code>）。</li>
            <li>移除了 <code>.dropdown-toggle</code> 类——菜单切换器不再需要切换类。</li>
            <li>移除了 <code>.dropdown</code> 包装器——不需要包装元素。切换器和 <code>.menu</code> 是直接兄弟元素。</li>
            <li>将标记从 <code>&lt;ul&gt;&lt;li&gt;&lt;a class="dropdown-item"&gt;</code> 简化为扁平的 <code>&lt;div class="menu"&gt;&lt;a class="menu-item"&gt;</code> 结构。</li>
            <li>移除了 <code>.dropdown-toggle-split</code>——拆分菜单的按钮组边框半径现在通过 <code>:has(+ .menu)</code> 自动处理。</li>
            <li>将 JavaScript 导出从 <code>Dropdown</code> 重命名为 <code>Menu</code>——将导入更新为 <code>import { Menu } from 'bootstrap'</code>。</li>
            <li>重命名了事件：<code>show.bs.dropdown</code> 改为 <code>show.bs.menu</code>，<code>shown.bs.dropdown</code> 改为 <code>shown.bs.menu</code>，<code>hide.bs.dropdown</code> 改为 <code>hide.bs.menu</code>，<code>hidden.bs.dropdown</code> 改为 <code>hidden.bs.menu</code>。</li>
            <li>将数据键从 <code>bs.dropdown</code> 重命名为 <code>bs.menu</code>（影响 <code>Menu.getInstance()</code> 和 <code>Menu.getOrCreateInstance()</code>）。</li>
        </ul>
    </li>
    <li><strong>添加了新的 Combobox 组件。</strong> 构建于 Menu 之上的可搜索选择器，支持单选和多选。参见<a href="/docs/forms/combobox/docs">Combobox 文档</a>。</li>
    <li>用 <a href="https://floating-ui.com/">Floating UI</a>（<code>@floating-ui/dom</code>）替换了 Popper.js（<code>@popperjs/core</code>），用于菜单、工具提示和弹出框定位。Tooltip、Popover 和 Menu（原 Dropdown）上的 <code>popperConfig</code> 选项已重命名为 <code>floatingConfig</code>。相应更新任何自定义定位配置。</li>
    <li>添加了 <a href="https://vanilla-calendar.pro/">Vanilla Calendar Pro</a>（<code>vanilla-calendar-pro</code>）作为新 Datepicker 组件的对等依赖。弹出日期选择器在外部交互、按 <kbd>Escape</kbd> 或焦点离开输入和日历时关闭。</li>
    <li>从 <code>package.json</code> 中移除了 <code>jspm</code> 配置。</li>
    <li>向 <code>package.json</code> 添加了 <code>"sideEffects"</code> 元数据，以便在打包工具中启用 tree shaking，同时保留 Bootstrap 插件在顶层注册的 Data API 事件监听器。</li>
    <li>向 <code>package.json</code> 添加了 <code>"exports"</code> 映射，用于显式子路径访问源、dist 和 Sass 文件。</li>
    <li><strong>重写了 ScrollSpy，使其具有确定性并原生使用 <code>IntersectionObserver</code>。</strong> 检测现在完全由激活线驱动（无滚动位置轮询），因此活动部分始终是你正在阅读的部分，在容器顶部和底部具有稳定行为。
        <ul>
            <li>移除了长期弃用的 <code>offset</code> 和 <code>method</code> 选项（自 v5.1.3 起弃用）。它们不再被解析。</li>
            <li>添加了 <code>topMargin</code> 选项（默认 <code>12%</code>），用于将激活线定位为距滚动根顶部的友好 <code>%</code> 或 <code>px</code> 值（例如 <code>96px</code> 位于粘性导航栏下方）。</li>
            <li><code>rootMargin</code> 现在是高级覆盖，优先于 <code>topMargin</code> 并直接传递给观察器；其默认值为 <code>null</code>（激活线从 <code>topMargin</code> 派生）。</li>
            <li>将默认 <code>threshold</code> 从 <code>[0.1, 0.5, 1]</code> 改为 <code>[0]</code>。</li>
            <li>启用 <code>smoothScroll</code> 后，点击链接现在会恢复 URL 哈希（通过 <code>history.replaceState</code>），并在滚动稳定后将焦点移动到目标部分，改善键盘和辅助技术导航。</li>
            <li>目标 <code>id</code> 使用 <code>getElementById</code> 解析，因此包含点、冒号、斜杠或百分号编码字符的 id 现在无需手动转义即可工作。</li>
        </ul>
    </li>
</ul>

<h3 id="components">组件<a class="anchor-link" href="#components" aria-label="链接到 组件"></a></h3>

<ul>
    <li><strong>用 Dialog 替换了 Modal 组件。</strong> Dialog 构建于原生 <code>&lt;dialog&gt;</code> 元素之上，使用 <code>showModal()</code> / <code>show()</code> / <code>close()</code> 浏览器 API。标记、类、数据属性、事件、CSS 变量和 JavaScript API 均已更改：
        <ul>
            <li>标记：<code>.modal</code> &gt; <code>.modal-dialog</code> &gt; <code>.modal-content</code> 包装结构已被单个 <code>&lt;dialog class="dialog"&gt;</code> 元素取代。主体部分直接在 <code>&lt;dialog&gt;</code> 内使用 <code>.dialog-header</code>、<code>.dialog-body</code> 和 <code>.dialog-footer</code>。</li>
            <li>CSS 类：<code>.modal</code> → <code>.dialog</code>，<code>.modal-header</code> → <code>.dialog-header</code>，<code>.modal-body</code> → <code>.dialog-body</code>，<code>.modal-footer</code> → <code>.dialog-footer</code>，<code>.modal-title</code> → <code>.dialog-title</code>。<code>.modal-dialog</code> 和 <code>.modal-content</code> 包装类已完全移除。</li>
            <li>尺寸：<code>.modal-sm</code> → <code>.dialog-sm</code>，<code>.modal-lg</code> → <code>.dialog-lg</code>，<code>.modal-xl</code> → <code>.dialog-xl</code>，<code>.modal-fullscreen</code> → <code>.dialog-fullscreen</code>。</li>
            <li>数据属性：<code>data-bs-toggle="modal"</code> → <code>data-bs-toggle="dialog"</code>，<code>data-bs-dismiss="modal"</code> → <code>data-bs-dismiss="dialog"</code>。</li>
            <li>JavaScript：<code>Modal</code> → <code>Dialog</code>——将导入更新为 <code>import { Dialog } from 'bootstrap'</code>。</li>
            <li>事件：<code>show.bs.modal</code> → <code>show.bs.dialog</code>，<code>shown.bs.modal</code> → <code>shown.bs.dialog</code>，<code>hide.bs.modal</code> → <code>hide.bs.dialog</code>，<code>hidden.bs.modal</code> → <code>hidden.bs.dialog</code>，<code>hidePrevented.bs.modal</code> → <code>hidePrevented.bs.dialog</code>。</li>
            <li>数据键：<code>bs.modal</code> → <code>bs.dialog</code>（影响 <code>Dialog.getInstance()</code> 和 <code>Dialog.getOrCreateInstance()</code>）。</li>
            <li>CSS 变量：<code>--modal-*</code> → <code>--dialog-*</code>。</li>
            <li>背景：<code>.modal-backdrop</code> DOM 元素和遗留的 <code>util/backdrop</code> 辅助函数已移除——Dialog 使用原生 <code>::backdrop</code> 伪元素并支持 <code>backdrop-filter: blur()</code>。</li>
            <li>滚动阻止：<code>&lt;body&gt;</code> 上的 <code>.modal-open</code> → 根元素（<code>&lt;html&gt;</code>）上的 <code>.dialog-open</code>，以便与 <code>scrollbar-gutter: stable</code> 配对，对话框打开时页面不会偏移。</li>
            <li>新变体类：<code>.dialog-slide-up</code>、<code>.dialog-slide-down</code>（滑动动画）、<code>.dialog-instant</code>（无动画）、<code>.dialog-static</code>（静态背景弹跳）、<code>.dialog-nonmodal</code>（非模态定位）、<code>.dialog-scrollable</code>。</li>
            <li>非模态支持：设置 <code>modal: false</code> 或 <code>data-bs-modal="false"</code> 以使用非模态对话框。</li>
            <li>对话框交换：打开对话框内的触发器可以打开新对话框并自动关闭当前对话框。</li>
            <li>完整详情请参阅<a href="/docs/components/dialog/docs">对话框文档</a>。</li>
        </ul>
    </li>
    <li><strong>Offcanvas 重命名为 Drawer。</strong> 所有类名、数据属性、事件、CSS 变量和 JavaScript API 均已重命名：
        <ul>
            <li>元素：<code>&lt;div class="offcanvas"&gt;</code> → <code>&lt;dialog class="drawer"&gt;</code>。Drawer 需要原生 <code>&lt;dialog&gt;</code> 元素。</li>
            <li>CSS 类：<code>.offcanvas</code> → <code>.drawer</code>，<code>.offcanvas-start</code> → <code>.drawer-start</code>，<code>.offcanvas-header</code> → <code>.drawer-header</code>，等等。</li>
            <li>数据属性：<code>data-bs-toggle="offcanvas"</code> → <code>data-bs-toggle="drawer"</code>，<code>data-bs-dismiss="offcanvas"</code> → <code>data-bs-dismiss="drawer"</code></li>
            <li>JavaScript：<code>Offcanvas</code> → <code>Drawer</code></li>
            <li>事件：<code>show.bs.offcanvas</code> → <code>show.bs.drawer</code>，<code>hidePrevented.bs.offcanvas</code> → <code>hidePrevented.bs.drawer</code>，等等。</li>
            <li>CSS 变量：<code>--offcanvas-*</code> → <code>--drawer-*</code></li>
            <li>Sass：<code>$zindex-offcanvas</code> → <code>$zindex-drawer</code></li>
        </ul>
    </li>
    <li><strong>新的 <code>.drawer-sheet</code> 变体</strong>用于齐边面板，无内边距、边框半径或阴影。</li>
    <li><strong>触摸设备上的滑动关闭</strong>手势支持 Drawer 组件。抽屉会自动检测其放置位置，并在相应的滑动方向上关闭。</li>
    <li><strong>Dialog 和 Drawer 共享 <code>DialogBase</code></strong>——显示/隐藏/切换生命周期、键盘处理、背景点击和静态背景弹跳在共享基类中整合。</li>
    <li><strong>Toast 过渡移至 CSS。</strong> 淡入淡出现在使用 <code>@starting-style</code> 配合离散 <code>display</code> 过渡，因此组件不再切换辅助类来驱动动画：
        <ul>
            <li>移除了 <code>animation</code> 选项和 <code>data-bs-animation</code>。添加 <code>.toast-instant</code> 以跳过动画，与 <code>.dialog-instant</code> 和 <code>.drawer-instant</code> 一致。</li>
            <li>移除了 <code>.showing</code> 类和已弃用的 <code>.hide</code> 类。现在只切换 <code>.show</code>。替换任何依赖它们的 CSS 或测试。</li>
            <li>轻提示不再获得通用的 <code>.fade</code> 类。过渡位于 <code>.toast</code> 本身，通过 <code>--toast-transition-duration</code> 和 <code>--toast-transition-timing</code> 调整。</li>
            <li><code>isShown()</code> 在调用 <code>hide()</code> 时立即返回 <code>false</code>，而非在淡出结束时。</li>
        </ul>
    </li>
    <li><strong>Alert、tab、tooltip 和 popover 也移至 CSS，因此不再需要 <code>.fade</code>。</strong> 每个都声明自己的过渡和自己的 <code>--bs-{component}-transition-*</code> 令牌，正如轻提示已经做的那样。<code>.fade</code> 作为通用类保留供你自己的标记使用，留在那里也无害，但没有组件依赖它：
        <ul>
            <li><strong>警告框自行淡出。</strong> <code>close()</code> 在过渡期间添加 <code>.hiding</code>，然后移除元素，因此标记中不再需要 <code>.fade</code> 和 <code>.show</code>。从未有 <code>.fade</code> 的警告框现在也会动画，这会按过渡时间延迟 <code>closed.bs.alert</code>。添加 <code>.alert-instant</code> 以保持旧的即时移除。</li>
            <li><strong>标签页面板自行淡入。</strong> 插件在同一帧中添加 <code>.active</code> 和 <code>.show</code>，而非按顺序添加，CSS 从 <code>@starting-style</code> 动画。你离开的面板立即隐藏，因为两个流内面板无法交叉淡入淡出。<code>shown.bs.tab</code> 现在在进入的面板完成后触发。添加 <code>.tab-pane-instant</code> 以实现即时切换。</li>
            <li><strong>工具提示和弹出框从 <code>@starting-style</code> 动画。</strong> 插件不再向提示添加 <code>.fade</code>。<code>animation: false</code> 改为添加 <code>.tooltip-instant</code> 或 <code>.popover-instant</code>，你也可以在自定义 <code>template</code> 中写入。</li>
            <li><strong>悬停和焦点工具提示在提示上保持打开。</strong> 在 v5 中，指针离开触发器时工具提示立即隐藏。v6 在指针或焦点位于提示本身时保持其打开，因此工具提示内的链接可访问（<a href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html">WCAG 1.4.13</a>）。按 Escape 或离开触发器和提示以隐藏它。参见<a href="/docs/components/tooltip/docs">工具提示</a>。</li>
        </ul>
    </li>
    <li><strong>占位符加载动画现在倾向于微光。</strong> 使用 <code>.placeholder-wave</code> 作为标准加载动画。旧的不透明度动画移至 <code>.placeholder-pulse</code>。<code>.placeholder-glow</code> 类保留为 <code>.placeholder-pulse</code> 的兼容别名。</li>
    <li><strong>Collapse 原生动画其尺寸。</strong> 插件仅切换 <code>.show</code>，别无其他。CSS 使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size"><code>interpolate-size</code></a> 动画尺寸，正如手风琴已经做的那样：
        <ul>
            <li>移除了 <code>.collapsing</code> 类，以及插件过去写入的内联 <code>height</code> 和 <code>width</code>。替换任何依赖它们的 CSS、测试或选择器。</li>
            <li>不支持 <code>interpolate-size</code> 的浏览器会立即打开和关闭元素。Firefox 是需要关注的一个。</li>
            <li><code>.collapse</code> 现在始终裁剪动画轴，因此内容不再溢出盒子。<code>.collapse-horizontal</code> 改为裁剪内联轴。</li>
            <li><code>shown.bs.collapse</code> 和 <code>hidden.bs.collapse</code> 现在在 CSS 过渡时触发，通过 <code>--bs-transition-collapse-property</code>、<code>--bs-transition-collapse-duration</code> 和 <code>--bs-transition-collapse-timing</code> 调整。</li>
            <li>在一个 <code>data-bs-parent</code> 下定位多个折叠的触发器仍会一起打开它们。父级仅关闭触发器未定位的折叠。</li>
        </ul>
    </li>
    <li><strong>组件 JavaScript 读取计算后的过渡持续时间。</strong> Alert、collapse、tab、tooltip 和 popover 不再寻找类来决定是否等待过渡，正如菜单已经做的那样。零持续时间——来自 <code>.transition-none</code>、<code>-instant</code> 类、减少动态效果或 <code>$enable-transitions: false</code>——立即 resolve Promise 并触发事件。</li>
    <li><strong>重构了按钮变体。</strong> v5 的按颜色类如 <code>.btn-primary</code>、<code>.btn-outline-primary</code>、<code>.btn-secondary</code> 等被同一元素上的变体 + 主题类组合取代：
        <ul>
            <li><code>.btn-primary</code> → <code>class="btn-solid theme-primary"</code></li>
            <li><code>.btn-outline-primary</code> → <code>class="btn-outline theme-primary"</code></li>
            <li>新变体类：<code>.btn-solid</code>、<code>.btn-outline</code>、<code>.btn-subtle</code>、<code>.btn-text</code>，以及用于渐变/阴影深度的 <code>.btn-styled</code> 和用于链接样式按钮的 <code>.btn-link</code>。</li>
            <li>颜色通过 <code>.theme-*</code> 工具类（例如 <code>.theme-primary</code>、<code>.theme-danger</code>、<code>.theme-success</code>）应用，而非烘焙到每个按钮类中。</li>
            <li>共享尺寸令牌：按钮和输入现在共享 <code>--btn-input-*</code> CSS 变量以保持一致尺寸。</li>
            <li>新的 <code>.btn-icon</code> 类用于具有 <code>aspect-ratio: 1</code> 的方形纯图标按钮。</li>
            <li>添加了 <code>xs</code> 按钮尺寸（<code>.btn-xs</code>）。</li>
        </ul>
    </li>
    <li><strong>在原生 <code>&lt;details&gt;</code> / <code>&lt;summary&gt;</code> 上重建了手风琴。</strong> 标记结构已从根本上改变：
        <ul>
            <li>v5：<code>.accordion-item</code> &gt; <code>.accordion-header</code> &gt; <code>button.accordion-button</code> + <code>.accordion-collapse</code> &gt; <code>.accordion-body</code>，由 Collapse JavaScript 插件控制。</li>
            <li>v6：<code>&lt;details class="accordion-item"&gt;</code> &gt; <code>&lt;summary class="accordion-header"&gt;</code> + <code>&lt;div class="accordion-body"&gt;</code>，使用浏览器的原生披露组件。基本打开/关闭行为不依赖 JavaScript。</li>
            <li>互斥手风琴组（仅一个项打开）通过 <code>&lt;details&gt;</code> 元素上的 HTML <code>name</code> 属性处理，取代 <code>data-bs-parent</code> 方法。</li>
            <li><code>.accordion-button</code> 和 <code>.accordion-collapse</code> 类已被移除。</li>
            <li>展开/折叠图标现在使用摘要内的 <code>.accordion-icon</code> 元素（通常是 SVG），取代 CSS <code>background-image</code> 方法。</li>
            <li>打开状态样式使用 <code>details[open]</code> 而非 JavaScript 切换的类。</li>
            <li>通过 <code>.accordion</code> 包装器上的 <code>.theme-*</code> 类进行主题着色。</li>
            <li>新修饰符：<code>.accordion-sm</code> 用于紧凑内边距和字号，<code>.accordion-gap</code> 用于将项作为单独圆角卡片间隔（<code>--accordion-gap</code>）。</li>
        </ul>
    </li>
    <li><strong>重建了关闭按钮标记。</strong> <code>.btn-close</code> 现在通过 CSS <code>mask-image</code>（<code>--btn-close-icon</code>）渲染其图标，并用 <code>background-color: currentcolor</code> 着色，因此按钮是自包含的——不需要子 <code>&lt;svg&gt;</code>。基于滤镜的深色模式方法（<code>$btn-close-white-filter</code>）已被 <code>currentcolor</code> 继承取代，<code>.btn-close-white</code> 类已被移除。在深色主题表面上，图标现在自动继承对比色。</li>
    <li><strong>移除了 <code>.alert-dismissible</code>。</strong> 可关闭警告框不再需要 <code>.alert-dismissible</code> 修饰类。直接在警告框内放置 <code>.btn-close</code>——警告框的 flex 布局会自动定位它。从标记中移除任何 <code>.alert-dismissible</code> 类。</li>
    <li><strong>重构了卡片。</strong> 外边框位于 <code>.card</code> 上。页眉和页脚仅保留分隔边框。在卡片内使用 <code>.list-group-flush</code>——<code>.card-list</code> 已移除。添加了 <code>--card-box-shadow</code> 和 <code>--card-body-gap</code> 令牌。新变体类：<code>.card-translucent</code>（磨砂玻璃效果）和 <code>.card-subtle</code>（微妙背景主题化）。水平卡片使用新的 <code>.card-row</code> 类。移除了 <code>.card-link</code> 类。<code>.card-body</code> 现在是可选的 flex 列，移除直接子块边距并使用 <code>--card-body-gap</code> 进行间距。添加 <code>.flex-row</code> 以实现水平主体。<code>.card-title</code> 和 <code>.card-text</code> 仍可作为项目钩子使用，但不再添加样式；<code>.card-subtitle</code> 仍会减少副标题上方的间隙。</li>
    <li><strong>卡片组现在使用容器查询。</strong> <code>.card-group</code> 使用 <code>@container</code> 查询而非视口 <code>@media</code> 查询切换到其附加的等宽行布局，因此它响应父查询容器的宽度而非视口。将卡片组包装在查询容器中——例如向父元素添加 <code>.contains-inline</code> 工具类——否则卡片保持堆叠。</li>
    <li><strong>列表组水平变体现在使用容器查询。</strong> <code>.*:list-group-horizontal</code> 类使用 <code>@container</code> 查询而非视口 <code>@media</code> 查询在垂直和水平布局之间切换，响应父查询容器而非视口。将列表组包装在查询容器中（例如 <code>.contains-inline</code>）以使响应式变体生效。</li>
    <li><strong>重构了徽章变体。</strong> 将 v5 的 <code>.bg-primary</code> 工具类模式替换为徽章上的 <code>.theme-*</code> 类。例如，<code>class="badge bg-primary"</code> 变为 <code>class="badge theme-primary"</code> 以获得默认实心样式。添加 <code>.badge-subtle</code> 或 <code>.badge-outline</code> 以获得其他变体。</li>
    <li><strong>为分页添加了主题变体支持。</strong> 向 <code>.pagination</code> 添加 <code>.theme-{color}</code> 类（例如 <code>.pagination.theme-primary</code>），以语义主题颜色为链接、悬停、焦点和活动页项着色，与警告框和手风琴已使用的模式一致。</li>
    <li><strong>更新了面包屑标记。</strong> 面包屑现在使用 <code>.breadcrumb-link</code> 作为具有内边距、最小高度和悬停背景的交互元素，以及显式的 <code>.breadcrumb-divider</code> 元素作为项之间的分隔符。空的 <code>.breadcrumb-divider</code> 通过 CSS <code>mask-image</code>（<code>--breadcrumb-divider-icon</code>）渲染默认尖括号，并用 <code>background-color: currentcolor</code> 着色；在其中添加你自己的 SVG、文本或标记以覆盖。这取代了 v5 在 <code>.breadcrumb-item::before</code> 伪元素上的 <code>--bs-breadcrumb-divider</code> 内容字符串。默认底部边距已移除（v5 使用 <code>$spacer</code> / <code>1rem</code>）。如果你仍想在面包屑下方留出空间，请添加间隔工具类。</li>
    <li><strong>导航栏响应式折叠现在使用 Drawer，而非 Collapse。</strong> v5 的可折叠导航栏——通过 Collapse 插件切换 <code>.collapse.navbar-collapse</code> 区域的 <code>.navbar-toggler</code>——已被 <a href="/docs/components/drawer/docs">Drawer</a> 取代。在窄视口上，导航作为 <code>&lt;dialog class="drawer"&gt;</code> 滑入；从你的 <code>.{breakpoint}:navbar-expand</code> 断点向上，它像以前一样内联布局。有三件事改变：切换器目标为抽屉（<code>data-bs-toggle="drawer"</code>）而非折叠；可折叠区域变为带有 <code>.drawer-header</code> / <code>.drawer-body</code> 的 <code>&lt;dialog class="drawer"&gt;</code>；<code>.navbar-expand-{bp}</code> 中缀变为 <code>.{bp}:navbar-expand</code> 前缀。v5 的 <code>.navbar-light</code> / <code>.navbar-dark</code> 颜色方案类也已移除——使用背景工具类（如 <code>.bg-1</code>）设置表面，让<a href="/docs/customize/color-modes/docs">颜色模式</a>处理浅色和深色。

        <p><strong>之前（v5）：</strong></p>

        <CodeWrapper code='<nav class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
      </ul>
    </div>
  </div>
</nav>' lang="html" class="my-6" />

        <p><strong>之后（v6）：</strong></p>

                <CodeWrapper code='<nav class="navbar md:navbar-expand bg-1">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog class="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
      <div class="drawer-header">
        <h5 class="drawer-title" id="navbarDrawerLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div class="drawer-body">
        <ul class="nav navbar-nav me-auto">
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
        </ul>
      </div>
    </dialog>
  </div>
</nav>' lang="html" class="my-6" />
    </li>
    <li><strong>Collapse 触发器现在使用 <code>aria-expanded</code> 作为状态信号。</strong> Bootstrap v6 不再在折叠触发器元素上添加或移除 <code>.collapsed</code> 类。如果你使用 <code>.collapsed</code> 设置样式或查询触发器状态，请将这些选择器迁移到 <code>[aria-expanded="false"]</code>，打开状态选择器迁移到 <code>[aria-expanded="true"]</code>。</li>
    <li><strong>移除了 Collapse 的 <code>toggle</code> 选项。</strong> 构造函数现在保持标记声明的状态，而非翻转它。从配置中删除 <code>toggle: false</code>，这就是你已经获得的行为。如果你依赖旧的 <code>toggle: true</code> 默认值在初始化时更改状态，请改为调用匹配的方法。

      <CodeWrapper code="// v5
new bootstrap.Collapse(el)                  // opened a closed element
new bootstrap.Collapse(el, { toggle: false })

// v6
new bootstrap.Collapse(el).show()
new bootstrap.Collapse(el)" lang="javascript" class="my-6" />
    </li>
    <li><strong>关闭触发器现在能找到响应式抽屉。</strong> <code>data-bs-dismiss="drawer"</code> 解析带断点前缀的抽屉，如 <code>.lg:drawer</code>，因此响应式抽屉内的关闭按钮不再需要 <code>data-bs-target</code>。现有 <code>data-bs-target</code> 属性继续有效。</li>
    <li><strong>切换按钮获得默认的 <code>aria-pressed</code>。</strong> 切换按钮需要 <code>aria-pressed</code> 以便辅助技术将其宣布为切换，因此 Bootstrap 现在在 <code>DOMContentLoaded</code> 时为每个缺少它的 <code>[data-bs-toggle="button"]</code> 添加该属性，读取 <code>.active</code> 来选择值。在标记中写入 <code>aria-pressed="false"</code>，以便在我们的 JavaScript 运行之前状态正确。</li>
    <li><strong>导航栏不再计算高度。</strong> v5 从导航链接字体大小、行高和内边距派生 <code>$navbar-brand-height</code> 和 <code>$navbar-brand-padding-y</code>，以便品牌与链接匹配。v6 放弃了该计算。<code>.navbar</code> 是一个 flex 容器，居中其子元素，因此内边距和内容决定高度。<code>--navbar-brand-padding-y</code> 现在是 <code>.375rem</code>，与导航链接块内边距匹配，因此品牌和链接保持相同的点击目标。新的 <code>--navbar-min-height</code> 令牌为栏提供 <code>3.5rem</code> 的下限，因此默认<a href="/docs/components/navbar/docs">导航栏</a>高 56px。更高的内容（如徽标）仍会使栏增长超过下限。设置 <code>--navbar-padding-y</code> 或 <code>--navbar-min-height</code> 以控制栏的高度。</li>
    <li><strong>导航栏切换器图标现在使用 CSS 遮罩。</strong> <code>.navbar-toggler-icon</code> 通过 <code>mask-image</code>（<code>--navbar-toggler-icon</code>）渲染，并用 <code>background-color: currentcolor</code> 着色，而非嵌入的 <code>background-image</code> SVG。标记保持为空的 <code>&lt;span class="navbar-toggler-icon"&gt;</code>，但图标现在继承当前文本颜色（包括深色模式），因此不再需要单独的浅色/深色切换器 SVG。</li>
    <li><strong>在 CSS 滚动捕捉上重建了轮播。</strong> 滑动引擎不再使用 <code>float</code> + <code>translateX</code> 类切换或自定义滑动处理程序——<code>.carousel-inner</code> 现在是原生水平滚动捕捉容器，因此滑动、触摸拖动、惯性和键盘滚动来自浏览器。标记不变（<code>.carousel</code> → <code>.carousel-inner</code> → <code>.carousel-item</code>），公共 JavaScript API（<code>next</code>、<code>prev</code>、<code>to</code>、<code>cycle</code>、<code>pause</code>）以及 <code>slide.bs.carousel</code> / <code>slid.bs.carousel</code> 事件均保留。
        <ul>
            <li><strong>新能力：</strong> 一次显示多张幻灯片、露出相邻幻灯片的“窥视”、间隙、居中模式和可变宽度幻灯片——全部通过 CSS 自定义属性（<code>--carousel-items</code>、<code>--carousel-items-gap</code>、<code>--carousel-items-peek</code>）和 <code>.carousel-center</code> / <code>.carousel-auto</code> 变体实现。</li>
            <li><strong>移除了过渡类</strong> <code>.carousel-item-start</code>、<code>.carousel-item-end</code>、<code>.carousel-item-next</code> 和 <code>.carousel-item-prev</code>，以及 <code>.carousel.pointer-event</code> 辅助类——浏览器跟踪滚动位置而非 <code>.active</code> 布局类。（活动幻灯片仍获得 <code>.active</code> 用于样式。）</li>
            <li><strong><code>.carousel-fade</code></strong> 现在是堆叠不透明度（网格）交叉淡入淡出，使用 CSS 不透明度过渡在 <code>--bs-carousel-fade-duration</code> 上动画（在减少动态效果下折叠为即时切换）。</li>
            <li><strong>移除了 <code>touch</code> 选项。</strong> 由于 <code>.carousel-inner</code> 是原生滚动捕捉容器，水平触摸拖动是浏览器原生滚动的一部分，不再由 JavaScript 切换。</li>
            <li>活动幻灯片同步使用 <code>IntersectionObserver</code>；因此 <code>slid.bs.carousel</code> 在新幻灯片稳定进入视图时触发，多幻灯片 <code>to()</code> 跳转在滚动经过时可能发出中间 <code>slid</code> 事件。</li>
        </ul>
    </li>
    <li><strong>将轮播的 <code>ride</code> 选项重命名为 <code>autoplay</code>，并使其成为布尔值。</strong> 自动播放现在严格选择加入：轮播仅在 <code>autoplay</code> 为 <code>true</code> 时自动播放（通过 <code>data-bs-autoplay="true"</code> 设置）。旧的 <code>ride</code> 选项及其字符串 <code>"carousel"</code> 值已被移除，<code>ride="true"</code> 行为（仅在首次用户交互后开始自动播放）也已移除。
        <ul>
            <li><code>data-bs-ride="carousel"</code> → <code>data-bs-autoplay="true"</code></li>
            <li><code>data-bs-ride="true"</code> → <code>data-bs-autoplay="true"</code>（它现在像任何其他自动播放轮播一样在加载时自动播放，而非等待首次交互）</li>
            <li>JavaScript：<code>new bootstrap.Carousel(el, { ride: 'carousel' })</code> → <code>new bootstrap.Carousel(el, { autoplay: true })</code></li>
            <li>加载时自动初始化选择器相应从 <code>[data-bs-ride="carousel"]</code> 更改为 <code>[data-bs-autoplay="true"]</code>。</li>
        </ul>
    </li>
    <li><strong>自动播放轮播现在在用户与其交互时停止。</strong> 点击控件或指示器、使用键盘导航或滑动会永久停止自动播放而非恢复它，尊重访问者的意图（<a href="https://www.w3.org/TR/WCAG/#pause-stop-hide">WCAG 2.2.2</a>）。以前这些交互会保持轮播循环。</li>
    <li><strong>新的 <code>.carousel-control-play-pause</code> 控件</strong>提供了一个可发现、可访问的按钮来暂停和恢复自动播放轮播——这是 WCAG 2.2.2 所需的机制（仅悬停暂停不符合要求）。它通过 CSS 遮罩（<code>--carousel-control-pause-icon</code> / <code>--carousel-control-play-icon</code>）渲染暂停/播放图标，根据状态交换其图标和 <code>aria-label</code>，也可以在原本静态的轮播上启动自动播放。</li>
    <li><strong>堆叠现在是默认轮播布局。</strong> <code>.carousel</code> 是 flex 列，因此上一个/下一个控件、指示器和任何自定义内容位于幻灯片上方或下方的流中。旧的 <code>.carousel-stacked</code> 类已被移除——它现在是默认值，因此从标记中删除它。</li>
    <li><strong>覆盖控件现在需要 <code>.carousel-overlay</code> 修饰符。</strong> 要将上一个/下一个控件、播放/暂停按钮和指示器覆盖在幻灯片顶部（经典 v5 外观），请向 <code>.carousel</code> 元素添加 <code>.carousel-overlay</code>。没有它，这些元素在流中布局。</li>
    <li><strong>重命名了控件图标类</strong> <code>.carousel-control-prev-icon</code> → <code>.carousel-icon-prev</code> 和 <code>.carousel-control-next-icon</code> → <code>.carousel-icon-next</code>。图标现在用 <code>background-color: currentcolor</code> 绘制，因此它们继承周围文本颜色（覆盖控件上为白色，<code>.btn-*</code> 内为按钮颜色）。使用 <code>--bs-carousel-control-icon-width</code> 设置其大小。</li>
    <li><strong>移除了 <code>.carousel-caption</code></strong> 及其 <code>--carousel-caption-*</code> 令牌。改为在 <code>.carousel-item</code> 内使用你自己的标记组合幻灯片内容，用工具类或自定义 CSS 设置样式和定位。</li>
    <li><strong>将 <code>wrap</code> 选项替换为 <code>ends</code>。</strong> v5 的 <code>wrap: true | false</code> 现在是 <code>ends: "loop" | "wrap" | "stop"</code>（默认 <code>"loop"</code>）。将 <code>wrap: true</code> 映射到 <code>ends: "wrap"</code>（或新的默认 <code>"loop"</code> 以获得无缝传送带效果），将 <code>wrap: false</code> 映射到 <code>ends: "stop"</code>。通过 <code>data-bs-ends</code> 或 <code>ends</code> 选项设置。未知值回退到 <code>"loop"</code>。</li>
    <li><strong>移除了 <code>.carousel-control-prev</code> / <code>.carousel-control-next</code> 按钮类。</strong> 绝对、全高悬停目标已移除。从按钮（例如 <code>.btn-icon</code>）加上 <code>data-bs-slide="prev"</code> / <code>data-bs-slide="next"</code> 和 <code>.carousel-icon-prev</code> / <code>.carousel-icon-next</code> 字形组合一个控件，放置在流中或 <code>.carousel-overlay-controls</code> 内。</li>
    <li><strong>移除了 <code>.carousel-dark</code> 类。</strong> 在 <code>.carousel</code> 上使用 <code>data-bs-theme="dark"</code>（通常与 <code>.carousel-overlay</code> 一起）以获得反向对比。</li>
    <li><strong>移除了不再有等效项的 v5 轮播令牌</strong>：<code>--carousel-caption-*</code>、<code>--carousel-control-color</code>、<code>--carousel-control-opacity</code> / <code>--carousel-control-hover-opacity</code>、<code>--carousel-control-icon-filter</code> 和 <code>--carousel-transition</code>。指示器、控件和淡入淡出样式现在派生自 <a href="/docs/components/carousel#variables/docs">CSS 变量</a>下列出的重新设计的 <code>--bs-carousel-*</code> 令牌。</li>
</ul>

<h3 id="reboot">Reboot<a class="anchor-link" href="#reboot" aria-label="链接到 Reboot"></a></h3>

<ul>
    <li>将标题类（如 <code>.h1</code>）和一些类型类（<code>.mark</code>、<code>.small</code> 和 <code>.initialism</code>）从 <code>_type.scss</code> 迁移到 Reboot。这避免了 Sass 模块中的依赖，我们通常也喜欢避免扩展选择器。</li>
    <li><strong>将剩余的 <code>_type.scss</code> 拆分为 <code>_lists.scss</code> 和 <code>_blockquote.scss</code>。</strong> 将任何单独的 <code>@use "bootstrap/scss/content/type"</code> 导入更新为 <code>content/lists</code> 和/或 <code>content/blockquote</code>。</li>
    <li><strong>标题、段落、描述列表和 <code>&lt;legend&gt;</code> 现在使用 CSS 变量而非 Sass 变量。</strong> 移除了 <code>$headings-margin-bottom</code>、<code>$headings-font-family</code>、<code>$headings-font-style</code>、<code>$headings-font-weight</code>、<code>$headings-line-height</code>、<code>$headings-color</code>、<code>$paragraph-margin-bottom</code>、<code>$legend-margin-bottom</code>、<code>$legend-font-size</code>、<code>$legend-font-weight</code> 和 <code>$dt-font-weight</code>。改为在运行时自定义等效的 <code>--heading-*</code>、<code>--paragraph-margin-bottom</code> 和 <code>--legend-*</code> CSS 变量——参见<a href="/docs/content/typography/docs">排版</a>。</li>
    <li><strong>移除了 <code>$font-size-base</code> 和 <code>--font-size-base</code>。</strong> 基础正文字体大小现在直接在 <code>_root.scss</code> 中通过 <code>--body-font-size</code>（默认 <code>1rem</code>）设置。任何以前回退到 <code>var(--font-size-base)</code> 的组件令牌（如手风琴）现在回退到 <code>var(--body-font-size)</code>。更新引用任一变量的自定义 Sass 或 CSS 以使用 <code>--body-font-size</code>。</li>
    <li>标题和 <code>&lt;dt&gt;</code> 字体粗细现在回退到共享粗细令牌（<code>font-weight: var(--heading-font-weight, var(--font-weight-medium))</code>、<code>var(--dt-font-weight, var(--font-weight-bold))</code>）而非硬编码值，因此你可以覆盖组件特定令牌或共享令牌。</li>
    <li>向 <code>$root-tokens</code> 添加了 <code>--link-underline-offset</code>（镜像 <code>$link-underline-offset</code>），用于链接下划线偏移的运行时自定义。</li>
    <li>Reboot 和内容间距——<code>address</code>、列表、<code>dd</code>、<code>blockquote</code>、<code>pre</code>、<code>figure</code>、<code>caption</code>、<code>kbd</code> 内边距，以及 <code>ol</code>/<code>ul</code> 的 <code>padding-inline-start</code>（现在由新的 <code>--list-padding-x</code> 令牌驱动）——现在派生自 <code>--spacer-*</code> 刻度而非硬编码 <code>rem</code> 值。视觉输出不变。</li>
    <li>移除了 <code>::-moz-focus-inner</code> 样式，因为该伪选择器在 Firefox 中已弃用。</li>
    <li>从 <code>button</code> 和 <code>select</code> 元素中移除了 <code>text-transform: none</code>，因为 Firefox 不再错误地继承 text-transform。</li>
    <li>在 <code>:root</code> 上添加了 <code>accent-color: var(--primary-base)</code>，将主要主题颜色全局应用于原生表单控件（复选框、单选按钮、范围输入、进度条）。</li>
    <li><strong>Reboot 现在在每个 <code>iframe</code> 上设置 <code>color-scheme: light dark</code>。</strong> 当你使用 <code>data-bs-theme</code> 强制主题时，这使嵌入保持透明。移除任何 v5 变通方法，如 <code>[data-bs-theme="dark"] { color-scheme: unset; }</code>。v6 使用 <code>light-dark()</code> 解析其颜色令牌，该函数读取 <code>color-scheme</code>。那里的 <code>unset</code> 会关闭整个子树的深色模式。对于没有深色模式的第三方嵌入，请改为在该 iframe 上添加新的 <code>.color-scheme-light</code> 工具类——参见 <a href="/docs/content/reboot#third-party-embeds-with-no-dark-mode/docs">Reboot</a>。</li>
</ul>

<h3 id="forms">表单<a class="anchor-link" href="#forms" aria-label="链接到 表单"></a></h3>

<ul>
    <li><strong>重构了复选框、单选按钮和开关。</strong>
        <ul>
            <li>将 <code>_form-check.scss</code> 拆分为单独的样式表：<code>_check.scss</code>、<code>_radio.scss</code> 和 <code>_switch.scss</code>。</li>
            <li>还将复选框、单选按钮和开关的文档页面拆分。</li>
            <li>在这些组件上添加了新的 CSS 变量。<em>旁注：我们本可以在这里共享变量，但为了简单起见选择不这样做。</em></li>
            <li>移除了几个现在未使用的 Sass 变量。</li>
            <li>复选框和单选按钮直接在 <code>&lt;input&gt;</code> 上应用 <code>.check</code> 或 <code>.radio</code>，无需包装器。它们的标记在 <code>::before</code> 伪元素上使用 CSS <code>mask-image</code>。开关在输入周围使用 <code>.switch</code> 包装器。</li>
            <li>彻底改造了带标签（和描述）的复选框、单选按钮和开关的布局。我们现在有包含基本 flexbox 样式的自定义布局元素。</li>
            <li>将切换按钮重构为嵌套输入结构。<code>.btn-check</code> 类现在放在标签上（而非输入上），输入嵌套在内。这消除了对 <code>id</code>/<code>for</code> 属性的需要，并使用 CSS <code>:has()</code> 选择器而非兄弟选择器。示例：<code>&lt;label class="btn-check btn-solid theme-primary"&gt;&lt;input type="checkbox"&gt;Toggle&lt;/label&gt;</code>。</li>
        </ul>
    </li>
    <li><strong>将 <code>.form-select</code> 合并到 <code>.form-control</code>。</strong>
        <ul>
            <li>移除了 <code>.form-select</code>——现在在 <code>&lt;select&gt;</code> 元素上使用 <code>.form-control</code>。同时抽象和重复太多。</li>
            <li>在 <code>.form-control</code> 上添加新的 CSS 变量，以便无需 Sass 编译即可轻松自定义。</li>
            <li><code>.form-control</code> 现在始终具有 <code>min-height</code>，而不仅仅是 <code>&lt;textarea&gt;</code> 元素。这为我们减少了一些 CSS。</li>
            <li><code>.form-control</code> 在 <code>:focus-within</code> 以及 <code>:focus-visible</code> 上应用焦点环，因此像 <code>.form-adorn</code> 这样的包装器在嵌套输入获得焦点时会显示焦点。</li>
        </ul>
    </li>
    <li><strong>范围现在是 JavaScript 组件。</strong> 原生范围无法仅用 CSS 跨浏览器绘制填充轨道，因此 <code>.form-range</code> 由 JS 驱动。
        <ul>
            <li><code>.form-range</code> 现在是<strong>包装器</strong>元素；<code>&lt;input type="range"&gt;</code> 采用 <code>.form-range-input</code>（以前 <code>.form-range</code> 直接放在输入上）。包装器拥有组件的令牌，因此输入和装饰继承它们。每个 <code>.form-range</code> 自动初始化。</li>
            <li>默认绘制填充轨道，外加可选的值气泡（<code>data-bs-bubble</code>，重用工具提示样式）和从链接的 <code>&lt;datalist&gt;</code> 生成的刻度标记。</li>
            <li>填充量暴露为 <code>--bs-range-fill</code>（<code>0</code>–<code>1</code>），由插件保持同步；填充颜色令牌是 <code>--range-track-fill-bg</code>。</li>
            <li>验证类（<code>.is-invalid</code> / <code>.is-valid</code>）现在放在 <code>.form-range-input</code> 上。</li>
        </ul>
    </li>
    <li><strong>添加了新的 Combobox 表单组件。</strong> 构建于 Menu 组件之上的可搜索、可过滤选择器，支持单选和多选模式。参见<a href="/docs/forms/combobox/docs">Combobox 文档</a>。</li>
    <li><strong>新的 <code>.form-field</code> 布局组件。</strong> 用统一的基于网格的布局原语替换 <code>.checkgroup</code> 和 <code>.radiogroup</code> 包装器，用于标签 + 控件 + 帮助文本 + 验证反馈。使用 <code>.form-field</code>、<code>.form-field-content</code> 和 <code>.form-field-card</code> 构建结构化表单布局，使用 <code>.form-group</code> 对相关字段分组。参见<a href="/docs/forms/field/docs">字段文档</a>。</li>
    <li><strong>彻底改造了表单验证。</strong>
        <ul>
            <li>客户端验证不再使用 <code>.was-validated</code> 或裸 <code>:valid</code> / <code>:invalid</code> 伪类。改为向 <code>&lt;form&gt;</code> 添加 <code>data-bs-validate</code> 以选择加入 <code>:user-invalid</code> 样式，该样式仅在用户交互后激活。要同时显示成功样式，请使用 <code>data-bs-validate="valid"</code>。</li>
            <li>使用 <code>.is-invalid</code> / <code>.is-valid</code> 类的服务器端验证不变，无需 <code>data-bs-validate</code> 即可全局工作。</li>
            <li>自定义验证状态（例如“警告”）仅使用 <code>.is-*</code> 类——不支持伪类。</li>
            <li>验证反馈工具提示现在需要同时具有 <code>.tooltip</code> 和 <code>.valid-tooltip</code> / <code>.invalid-tooltip</code> 类（例如 <code>&lt;div class="tooltip invalid-tooltip"&gt;</code>）。</li>
            <li>移除了 <code>$enable-validation-icons</code> 以及表单控件上所有内置验证背景图标。</li>
            <li><code>$form-validation-states</code> Sass 映射被 <code>$validation-states</code> 取代，后者是更简单的映射，将状态名称配对到主题键（例如 <code>"invalid": "danger"</code>）。样式使用主题派生的 CSS 自定义属性（<code>--danger-fg</code>、<code>--danger-border</code> 等）而非按状态的 Sass 变量。</li>
            <li><code>form-validation-state</code> mixin 签名从 <code>($state, $color, $icon, ...)</code> 改为 <code>($state, $theme)</code>。</li>
            <li>将 <code>scss/mixins/_forms.scss</code> 重命名为 <code>scss/mixins/_form-validation.scss</code>。该 mixin 现在仅包含选择器逻辑；完整状态 mixin 位于 <code>scss/forms/_validation.scss</code>。</li>
            <li>移除了 <code>scss/forms/_form-variables.scss</code>（反馈变量和图标 SVG data URI）。</li>
            <li>验证 JS：将 <code>document.querySelectorAll('.needs-validation')</code> 替换为 <code>document.querySelectorAll('form[data-bs-validate]')</code>，并移除 <code>form.classList.add('was-validated')</code> 行。</li>
        </ul>
    </li>
    <li><strong>简化了输入组。</strong>
        <ul>
            <li>移除了 <code>.has-validation</code>——边框半径逻辑不再基于它分支。</li>
            <li>添加了 <code>.input-group-ignore</code>，用于应被相邻边框半径规则跳过的元素。</li>
            <li>从 <code>.input-group</code> 中移除了 <code>flex-wrap: wrap</code>；验证反馈现在位于输入组外部的父 <code>.form-field</code> 中。</li>
        </ul>
    </li>
    <li><strong>更新了表单标签默认值。</strong> <code>.form-label</code> 和 <code>.col-form-label</code> 现在默认为 <code>font-weight: 500</code>（原为 <code>inherit</code>）和 <code>font-size: inherit</code>（原为 <code>var(--font-size-sm)</code>）。</li>
    <li><strong>更新了表单帮助文本。</strong> <code>.form-text</code> 颜色从 <code>var(--fg-3)</code> 改为 <code>var(--fg-2)</code>。来自 <code>--form-text-margin-top</code> 的 <code>margin-top</code> 已移除；间距由父 <code>.form-field</code> 网格间隙处理。</li>
    <li><strong>重构了开关内部。</strong> 开关滑块现在使用 <code>inset-inline-start</code> 过渡进行绝对定位，而非基于内边距的动画。新令牌：<code>--switch-indicator-width</code>、<code>--switch-indicator-height</code>。覆盖旧基于内边距开关行为的主题将需要更新。</li>
    <li><strong><code>.form-adorn</code> 包装器应为 <code>&lt;label&gt;</code> 元素。</strong> 包装器看起来像输入，因此人们点击图标、文本或周围内边距并期望字段获得焦点。<code>&lt;label&gt;</code> 原生提供该行为。将装饰标记为 <code>aria-hidden="true"</code>，否则其文本会加入输入的可访问名称。
        <CodeWrapper code='<!-- v6 -->
<label class="form-control form-adorn">
  <span class="form-adorn-text" aria-hidden="true">$</span>
  <input type="text" class="form-ghost" placeholder="0.00">
</label>' lang="html" class="my-6"/>
    </li>
</ul>

<h3 id="helpers">辅助类<a class="anchor-link" href="#helpers" aria-label="链接到 辅助类"></a></h3>

<ul>
    <li>比例辅助类已移至工具类。</li>
    <li>移除了 clearfix 辅助类，改用 <code>.d-flow-root</code> 工具类。</li>
</ul>

<h3 id="utilities">工具类<a class="anchor-link" href="#utilities" aria-label="链接到 工具类"></a></h3>

<ul>
    <li><strong>扩展了间距刻度。</strong> <code>$spacers</code> 映射从 6 个步骤（0–5）扩展到 13 个步骤（0–12），粒度更细。注意间距键不再映射到与 v5 相同的值：</li>
</ul>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>键</th><th>v5 值</th><th>v6 值</th></tr>
    </thead>
    <tbody>
        <tr><td>0</td><td><code>0</code></td><td><code>0</code></td></tr>
        <tr><td>1</td><td><code>0.25rem</code></td><td><code>0.25rem</code></td></tr>
        <tr><td>2</td><td><code>0.5rem</code></td><td><code>0.375rem</code></td></tr>
        <tr><td>3</td><td><code>1rem</code></td><td><code>0.5rem</code>（原键 2）</td></tr>
        <tr><td>4</td><td><code>1.5rem</code></td><td><code>0.75rem</code></td></tr>
        <tr><td>5</td><td><code>3rem</code></td><td><code>1rem</code>（原键 3）</td></tr>
        <tr><td>6</td><td>—</td><td><code>1.25rem</code></td></tr>
        <tr><td>7</td><td>—</td><td><code>1.5rem</code>（原键 4）</td></tr>
        <tr><td>8</td><td>—</td><td><code>1.75rem</code></td></tr>
        <tr><td>9</td><td>—</td><td><code>2rem</code></td></tr>
        <tr><td>10</td><td>—</td><td><code>2.25rem</code></td></tr>
        <tr><td>11</td><td>—</td><td><code>2.5rem</code></td></tr>
        <tr><td>12</td><td>—</td><td><code>3rem</code>（原键 5）</td></tr>
    </tbody>
</table>
</div>

<ul>
    <li><strong>新的固定尺寸刻度。</strong> 新的 <code>$sizes</code> 映射（键 1–12）提供固定的基于 rem 的宽度，合并到宽度工具类中。v5 在 <code>$sizes</code> 中没有等效的固定尺寸刻度——它只有基于百分比的值。</li>
</ul>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>键</th><th>v5 <code>$sizes</code></th><th>v6 <code>$sizes</code></th></tr>
    </thead>
    <tbody>
        <tr><td>1</td><td>—</td><td><code>1rem</code></td></tr>
        <tr><td>2</td><td>—</td><td><code>2rem</code></td></tr>
        <tr><td>3</td><td>—</td><td><code>3rem</code></td></tr>
        <tr><td>4</td><td>—</td><td><code>4rem</code></td></tr>
        <tr><td>5</td><td>—</td><td><code>5rem</code></td></tr>
        <tr><td>6</td><td>—</td><td><code>6rem</code></td></tr>
        <tr><td>7</td><td>—</td><td><code>7rem</code></td></tr>
        <tr><td>8</td><td>—</td><td><code>8rem</code></td></tr>
        <tr><td>9</td><td>—</td><td><code>9rem</code></td></tr>
        <tr><td>10</td><td>—</td><td><code>10rem</code></td></tr>
        <tr><td>11</td><td>—</td><td><code>11rem</code></td></tr>
        <tr><td>12</td><td>—</td><td><code>12rem</code></td></tr>
        <tr><td>25</td><td><code>25%</code></td><td><code>25%</code>（在宽度工具类中）</td></tr>
        <tr><td>50</td><td><code>50%</code></td><td><code>50%</code>（在宽度工具类中）</td></tr>
        <tr><td>75</td><td><code>75%</code></td><td><code>75%</code>（在宽度工具类中）</td></tr>
        <tr><td>100</td><td><code>100%</code></td><td><code>100%</code>（在宽度工具类中）</td></tr>
        <tr><td>auto</td><td><code>auto</code></td><td><code>auto</code>（在宽度工具类中）</td></tr>
    </tbody>
</table>
</div>

<ul>
    <li><strong>字体大小刻度重构。</strong> <code>.fs-1</code> 到 <code>.fs-6</code>（数字，降序大小）已被 T 恤尺寸键从 <code>.fs-xs</code> 到 <code>.fs-6xl</code>（10 个步骤，升序）取代。较大尺寸使用 <code>clamp()</code> 进行响应式缩放。新的 <code>.text-{size}</code> 工具类同时设置 <code>font-size</code> 和 <code>line-height</code>。</li>
</ul>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>v5 类</th><th>v5 值</th><th>v6 类</th><th>v6 值</th></tr>
    </thead>
    <tbody>
        <tr><td><code>.fs-6</code></td><td><code>1rem</code></td><td><code>.fs-md</code></td><td><code>1rem</code></td></tr>
        <tr><td><code>.fs-5</code></td><td><code>1.25rem</code></td><td><code>.fs-lg</code></td><td><code>clamp(1.25rem, …, 1.5rem)</code></td></tr>
        <tr><td><code>.fs-4</code></td><td><code>1.5rem</code></td><td><code>.fs-xl</code></td><td><code>clamp(1.5rem, …, 1.75rem)</code></td></tr>
        <tr><td><code>.fs-3</code></td><td><code>1.75rem</code></td><td><code>.fs-2xl</code></td><td><code>clamp(1.75rem, …, 2rem)</code></td></tr>
        <tr><td><code>.fs-2</code></td><td><code>2rem</code></td><td><code>.fs-3xl</code></td><td><code>clamp(2rem, …, 2.5rem)</code></td></tr>
        <tr><td><code>.fs-1</code></td><td><code>2.5rem</code></td><td><code>.fs-4xl</code></td><td><code>clamp(2.25rem, …, 3rem)</code></td></tr>
        <tr><td>—</td><td>—</td><td><code>.fs-xs</code></td><td><code>0.75rem</code></td></tr>
        <tr><td>—</td><td>—</td><td><code>.fs-sm</code></td><td><code>0.875rem</code></td></tr>
        <tr><td>—</td><td>—</td><td><code>.fs-5xl</code></td><td><code>clamp(3rem, …, 4rem)</code></td></tr>
        <tr><td>—</td><td>—</td><td><code>.fs-6xl</code></td><td><code>clamp(3.75rem, …, 5rem)</code></td></tr>
    </tbody>
</table>
</div>

<ul>
    <li><strong>将 <code>.lh-base</code> 行高工具类重命名为 <code>.lh-md</code>。</strong> 与字体大小刻度已使用的 <code>md</code> 步骤匹配。底层 <code>--line-height-base</code> CSS 变量现在是 <code>--line-height-md</code>。</li>
    <li><strong>字体粗细合并到 <code>$font-weights</code> Sass 映射。</strong> 移除了单独的 <code>$font-weight-lighter</code>、<code>$font-weight-light</code>、<code>$font-weight-normal</code>、<code>$font-weight-medium</code>、<code>$font-weight-semibold</code>、<code>$font-weight-bold</code> 和 <code>$font-weight-bolder</code> 变量，改用单个 <code>$font-weights</code> 映射（键：<code>lighter</code>、<code>light</code>、<code>normal</code>、<code>medium</code>、<code>semibold</code>、<code>bold</code>、<code>bolder</code>）——参见<a href="/docs/utilities/font-weight/docs">字体粗细</a>。<code>--font-weight-*</code> CSS 自定义属性从此映射生成，而非在 <code>$root-tokens</code> 中硬编码。<code>$font-weight-base</code> 已移除。自定义 <code>--body-font-weight</code>，默认 <code>var(--font-weight-normal)</code>。</li>
    <li><strong>移除了 <code>.display-1</code>–<code>.display-6</code> 标题工具类。</strong> 显示标题类不再存在，且没有单类替代。通过将大字体大小工具类与粗细工具类配对来重新创建它们。v5 的显示标题使用 <code>font-weight: 300</code>，因此 <code>.fw-light</code> 可重现原始外观；如果你更喜欢更粗的粗细，请使用 <code>.fw-semibold</code>、<code>.fw-bold</code>：</li>
</ul>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>v5 类</th><th>v5 大小</th><th>v6 配方</th></tr>
    </thead>
    <tbody>
        <tr><td><code>.display-1</code></td><td><code>5rem</code></td><td><code>.fs-6xl .fw-light</code></td></tr>
        <tr><td><code>.display-2</code></td><td><code>4.5rem</code></td><td><code>.fs-6xl .fw-light</code></td></tr>
        <tr><td><code>.display-3</code></td><td><code>4rem</code></td><td><code>.fs-5xl .fw-light</code></td></tr>
        <tr><td><code>.display-4</code></td><td><code>3.5rem</code></td><td><code>.fs-5xl .fw-light</code></td></tr>
        <tr><td><code>.display-5</code></td><td><code>3rem</code></td><td><code>.fs-4xl .fw-light</code></td></tr>
        <tr><td><code>.display-6</code></td><td><code>2.5rem</code></td><td><code>.fs-3xl .fw-light</code></td></tr>
    </tbody>
</table>
</div>

<ul>
    <li><strong>移除了 <code>.lead</code> 工具类。</strong> v5 的 <code>.lead</code> 类在 v6 中不再存在，且没有精确的单类替代。如果你想用工具类获得类似效果，请使用 <code>.fs-lg</code> 关联 <code>.fw-light</code>。</li>
    <li><strong>边框半径令牌替换为数字刻度。</strong> 命名的 <code>$border-radius-*</code> Sass 变量和 <code>--border-radius-*</code> CSS 自定义属性（<code>-xs</code>、<code>-sm</code>、默认、<code>-lg</code>、<code>-xl</code>、<code>-2xl</code>）已被移除，改用数字 <code>$radii</code> Sass 映射（键 <code>0</code>–<code>9</code>），生成 <code>--radius-0</code> 到 <code>--radius-9</code> 令牌，外加 <code>--radius-pill</code>。刻度由单个 <code>$radius: .5rem</code> 基础驱动，因此当基础更改时所有步骤一起移动。要迁移任何直接引用旧令牌的自定义 Sass 或 CSS：</li>
</ul>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>v5 变量</th><th>v5 值</th><th>v6 令牌</th><th>v6 值</th></tr>
    </thead>
    <tbody>
        <tr><td><code>$border-radius-xs</code> / <code>--border-radius-xs</code></td><td><code>0.25rem</code></td><td><code>--radius-3</code></td><td><code>0.25rem</code></td></tr>
        <tr><td><code>$border-radius-sm</code> / <code>--border-radius-sm</code></td><td><code>0.25rem</code></td><td><code>--radius-3</code></td><td><code>0.25rem</code></td></tr>
        <tr><td><code>$border-radius</code> / <code>--border-radius</code></td><td><code>0.375rem</code></td><td><code>--radius-4</code></td><td><code>0.375rem</code></td></tr>
        <tr><td><code>$border-radius-lg</code> / <code>--border-radius-lg</code></td><td><code>0.5rem</code></td><td><code>--radius-5</code></td><td><code>0.5rem</code></td></tr>
        <tr><td><code>$border-radius-xl</code> / <code>--border-radius-xl</code></td><td><code>1rem</code></td><td><code>--radius-9</code></td><td><code>1rem</code></td></tr>
        <tr><td><code>$border-radius-xxl</code> / <code>--border-radius-2xl</code></td><td><code>2rem</code></td><td>—（最近：<code>--radius-9</code> <code>1rem</code>）</td><td></td></tr>
        <tr><td><code>$border-radius-pill</code> / <code>--border-radius-pill</code></td><td><code>50rem</code></td><td><code>--radius-pill</code></td><td><code>50rem</code></td></tr>
    </tbody>
</table>
</div>

<ul>
    <li><strong>边框半径工具类扩展并重新映射。</strong> <code>.rounded-*</code> 现在从 <code>$radii</code> 映射生成，因此刻度跨度从 <code>.rounded-0</code> 到 <code>.rounded-9</code>（以前是 <code>.rounded-0</code> 到 <code>.rounded-5</code>）。默认的 <code>.rounded</code> 仍解析为 <code>0.5rem</code>，但编号类现在映射到与 v5 不同的值：</li>
</ul>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>工具类</th><th>v5 值</th><th>v6 值</th><th>v6 令牌</th></tr>
    </thead>
    <tbody>
        <tr><td><code>.rounded</code></td><td><code>0.375rem</code></td><td><code>0.5rem</code></td><td><code>var(--radius-5)</code></td></tr>
        <tr><td><code>.rounded-0</code></td><td><code>0</code></td><td><code>0</code></td><td><code>var(--radius-0)</code></td></tr>
        <tr><td><code>.rounded-1</code></td><td><code>0.25rem</code></td><td><code>0.125rem</code></td><td><code>var(--radius-1)</code></td></tr>
        <tr><td><code>.rounded-2</code></td><td><code>0.375rem</code></td><td><code>0.1875rem</code></td><td><code>var(--radius-2)</code></td></tr>
        <tr><td><code>.rounded-3</code></td><td><code>0.5rem</code></td><td><code>0.25rem</code></td><td><code>var(--radius-3)</code></td></tr>
        <tr><td><code>.rounded-4</code></td><td><code>1rem</code></td><td><code>0.375rem</code></td><td><code>var(--radius-4)</code></td></tr>
        <tr><td><code>.rounded-5</code></td><td><code>2rem</code></td><td><code>0.5rem</code></td><td><code>var(--radius-5)</code></td></tr>
        <tr><td><code>.rounded-6</code></td><td>—</td><td><code>0.625rem</code></td><td><code>var(--radius-6)</code></td></tr>
        <tr><td><code>.rounded-7</code></td><td>—</td><td><code>0.75rem</code></td><td><code>var(--radius-7)</code></td></tr>
        <tr><td><code>.rounded-8</code></td><td>—</td><td><code>0.875rem</code></td><td><code>var(--radius-8)</code></td></tr>
        <tr><td><code>.rounded-9</code></td><td>—</td><td><code>1rem</code></td><td><code>var(--radius-9)</code></td></tr>
        <tr><td><code>.rounded-circle</code></td><td><code>50%</code></td><td><code>50%</code></td><td>—</td></tr>
        <tr><td><code>.rounded-pill</code></td><td><code>50rem</code></td><td><code>50rem</code></td><td><code>var(--radius-pill)</code></td></tr>
    </tbody>
</table>
</div>

<p>要保留 v5 的视觉圆度，请将类编号沿刻度上移（例如 <code>.rounded-1</code> → <code>.rounded-3</code>，<code>.rounded-2</code> → <code>.rounded-4</code>，<code>.rounded-3</code> → <code>.rounded-5</code>，<code>.rounded-4</code> → <code>.rounded-9</code>）。<code>.rounded-{top,end,bottom,start}-*</code> 方向变体遵循相同刻度。v6 没有 v5 <code>.rounded-5</code> 的 <code>2rem</code> 值的等效项。</p>

<ul>
    <li><strong>字体粗细新增。</strong> 添加了 <code>.fw-medium</code>（<code>500</code>）和 <code>.fw-semibold</code>（<code>600</code>）工具类。v5 只有 <code>lighter</code>、<code>light</code>（<code>300</code>）、<code>normal</code>（<code>400</code>）、<code>bold</code>（<code>700</code>）和 <code>bolder</code>。</li>
    <li><strong>负边距限制。</strong> 负间距减少为仅 <code>-1</code>（<code>-0.25rem</code>）和 <code>-2</code>（<code>-0.5rem</code>），且仅应用于 <code>margin-inline-start</code>（<code>.ms--1</code>、<code>.ms--2</code>）和 <code>margin-inline-end</code>（<code>.me--1</code>、<code>.me--2</code>）。v5 在所有侧面的完整负边距工具类已被移除。</li>
    <li><strong>间距和边框工具类现在使用 CSS 逻辑属性。</strong> <code>margin-top</code> → <code>margin-block-start</code>，<code>margin-right</code> → <code>margin-inline-end</code>，<code>padding-left</code> → <code>padding-inline-start</code>，<code>border-right</code> → <code>border-inline-end</code>，等等。类名（<code>.mt-*</code>、<code>.me-*</code>、<code>.ps-*</code>、<code>.border-end</code>）保持不变，但底层 CSS 属性现在是逻辑属性，改善了 RTL 和书写模式支持。</li>
    <li><strong>文本换行新增。</strong> 向 text-wrap 工具类添加了 <code>.text-balance</code> 和 <code>.text-pretty</code> 值。</li>
    <li><strong>颜色工具类重命名。</strong> <code>.text-*</code> 颜色工具类已被 <code>.fg-*</code>（前景）工具类取代。新的 <code>.fg-emphasis-*</code> 和 <code>.fg-contrast-*</code> 变体。背景工具类现在除了 <code>.bg-*</code> 外还包括 <code>.bg-subtle-*</code> 和 <code>.bg-muted-*</code>。添加了 <code>.fg-bg</code> 和 <code>.bg-fg</code> 交叉引用工具类；移除了 <code>.fg-inherit</code> 和 <code>.bg-inherit</code>。将 10–100 不透明度刻度的 <code>.bg-opacity-{n}</code> 重命名为 <code>.bg-{n}</code>。将 <code>.text-reset</code> 重命名为 <code>.fg-reset</code>。</li>
    <li><strong>移除了 <code>.text-bg-*</code> 辅助类。</strong> v5 的 <code>.text-bg-{color}</code> 辅助类（实心主题背景加上自动对比前景）已被移除。在同一元素上从背景工具类和匹配的对比前景组合相同结果。例如，<code>.text-bg-primary</code> 变为 <code>class="bg-primary fg-contrast-primary"</code>。这适用于每个主题颜色（<code>primary</code>、<code>secondary</code>、<code>success</code>、<code>danger</code>、<code>warning</code>、<code>info</code>、<code>accent</code>、<code>inverse</code>）。对于以前的 <code>.text-bg-light</code> / <code>.text-bg-dark</code>，将中性表面（见下文——<code>.bg-1</code> 或固定的 <code>.bg-white</code> / <code>.bg-black</code>）与适当的 <code>.fg-*</code> 配对。</li>
    <li><strong>移除了 <code>.bg-light</code>、<code>.bg-dark</code> 和 <code>.bg-body-*</code> 表面。</strong> 颜色模式感知的 <code>.bg-body-secondary</code> / <code>.bg-body-tertiary</code> 表面映射到 v6 的中性背景刻度 <code>.bg-2</code>–<code>.bg-1</code>（每一步比页面主体对比度稍高）。旧的 <code>.bg-light</code> / <code>.bg-dark</code> 灰色是<em>固定的</em>——它们不跟随颜色模式——v6 没有渲染完全相同的直接替代类，因此按意图选择：如果你希望表面跟随浅色和深色，使用自适应的 <code>.bg-1</code> / <code>.bg-2</code>，或使用 <code>.bg-white</code> / <code>.bg-black</code> 固定表面，或通过作用域颜色模式（<code>data-bs-theme="light|dark"</code>）并使用 <code>.bg-body</code>。注意 <code>.bg-black</code> 是纯黑色（比 v5 的深灰色更深），作用域 <code>data-bs-theme</code> 渲染主题正文颜色，因此两者都不能重现 v5 的确切色调。</li>
</ul>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>v5 类</th><th>v6 替代</th></tr>
    </thead>
    <tbody>
        <tr><td><code>.bg-body-tertiary</code></td><td><code>.bg-1</code></td></tr>
        <tr><td><code>.bg-body-secondary</code></td><td><code>.bg-2</code></td></tr>
        <tr><td><code>.bg-light</code></td><td><code>.bg-1</code> / <code>.bg-2</code>（自适应），或 <code>.bg-white</code> 用于固定浅色表面</td></tr>
        <tr><td><code>.bg-dark</code></td><td><code>.bg-black</code>，或 <code>data-bs-theme="dark"</code> + <code>.bg-body</code>（无精确色调匹配）</td></tr>
        <tr><td><code>.bg-body</code></td><td><code>.bg-body</code>（不变）</td></tr>
    </tbody>
</table>
</div>

<ul>
    <li><strong>链接工具类现在是文本装饰工具类的一部分。</strong> v5 的 <code>link-*</code> 工具类家族已被<a href="/docs/utilities/text-decoration/docs">文本装饰</a>下列出的 <code>underline-*</code> 工具类取代。相应更新类名：</li>
</ul>

<div class="table-responsive">
<table class="table md:table-stacked">
    <thead>
        <tr><th>类别</th><th>之前（v5）</th><th>之后（v6）</th></tr>
    </thead>
    <tbody>
        <tr><td>链接文本不透明度</td><td><code>.link-opacity-*</code>、<code>.link-opacity-*-hover</code></td><td>已移除（v6 中没有专用的 <code>link-opacity-*</code> 工具类）</td></tr>
        <tr><td>下划线偏移</td><td><code>.link-offset-1</code>、<code>.link-offset-2</code>、<code>.link-offset-3</code></td><td><code>.underline-offset-1</code>、<code>.underline-offset-2</code>、<code>.underline-offset-3</code></td></tr>
        <tr><td>下划线颜色</td><td><code>.link-underline-primary</code>、<code>.link-underline-secondary</code></td><td><code>.underline-primary</code>、<code>.underline-secondary</code></td></tr>
        <tr><td>下划线不透明度</td><td><code>.link-underline-opacity-*</code></td><td><code>.underline-*</code>（从 <code>10</code> 到 <code>100</code> 的 10 步刻度）</td></tr>
        <tr><td>下划线粗细</td><td>—</td><td><code>.underline-thickness-1</code> 到 <code>.underline-thickness-5</code></td></tr>
        <tr><td>悬停变体</td><td><code>.link-offset-3-hover</code>、<code>.link-underline-opacity-75-hover</code></td><td><code>.hover:underline-offset-3</code>、<code>.hover:underline-70</code> 或 <code>.hover:underline-80</code></td></tr>
    </tbody>
</table>
</div>

<p>辅助类 <code>.link-underline</code> 在 v6 中不再需要。</p>

<ul>
    <li><strong>显示工具类：</strong> 添加了 <code>flow-root</code> 和 <code>contents</code> 选项。</li>
    <li><strong>尺寸工具类：</strong>
        <ul>
            <li>将 <code>.mh-*</code>/<code>.mw-*</code> 重命名为 <code>.max-h-*</code>/<code>.max-w-*</code></li>
            <li>添加了 <code>.min-h-*</code> 和 <code>.min-w-*</code> 工具类，具有两个默认值：<code>0</code> 和 <code>100%</code></li>
            <li>向 <code>width</code> 和 <code>height</code> 工具类添加了 <code>auto</code>、<code>min-content</code>、<code>max-content</code> 和 <code>fit-content</code>。</li>
        </ul>
    </li>
    <li><strong>新的动态视口工具类。</strong> <code>.dvh-100</code> 和 <code>.min-dvh-100</code> 设置 <code>height: 100dvh</code> 和 <code>min-height: 100dvh</code>。<code>.dvw-100</code> 和 <code>.min-dvw-100</code> 设置 <code>width: 100dvw</code> 和 <code>min-width: 100dvw</code>。浏览器在展开或收起浏览器界面时更新 <code>dv*</code> 单位。使用 <code>.dvh-100</code> 实现全屏移动布局，因为当移动浏览器显示其 URL 栏时，该部分不再溢出。注意 <code>dvw</code> 不能修复 <code>100vw</code> 滚动条溢出，因为 CSS 在计算每个视口宽度单位时都假设滚动条不存在。v5 的 <code>.vh-100</code>、<code>.min-vh-100</code>、<code>.vw-100</code> 和 <code>.min-vw-100</code> 工具类不变。使用工具类 API 自行添加 <code>svh</code>、<code>lvh</code>、<code>svw</code> 和 <code>lvw</code> 工具类——参见<a href="/docs/utilities/height/docs">高度</a>和<a href="/docs/utilities/width/docs">宽度</a>。</li>
    <li><strong>新的 <code>color-scheme</code> 工具类。</strong> <code>.color-scheme-light</code>、<code>.color-scheme-dark</code> 和 <code>.color-scheme-auto</code> 在单个元素上设置 <code>color-scheme</code> 属性。当某个元素需要与页面其余部分不同的方案时使用它们，例如没有深色模式的第三方 <code>&lt;iframe&gt;</code>——参见<a href="/docs/utilities/color-scheme/docs">颜色方案</a>。Reboot 为你设置页面和每个 <code>iframe</code> 的 <code>color-scheme</code>，因此你只需要为单个元素使用这些工具类——参见上文 Reboot 部分。</li>
    <li><strong>Flex 和 Grid 工具类：</strong>
        <ul>
            <li>添加了 <code>.place-items</code> 和 <code>.justify-items</code> 工具类。</li>
            <li>添加了用于 <code>grid-template-columns</code> 的 <code>.grid-cols-*</code> 工具类（1–4 和 6 列布局）、用于跨所有列的 <code>.grid-cols-fill</code>、用于采用父网格列轨道的 <code>.grid-cols-subgrid</code>，以及 <code>.grid-auto-flow</code> 工具类。</li>
        </ul>
    </li>
    <li><strong>容器查询工具类。</strong> 用于 <code>container-type</code> 的新 <code>.contains-inline</code> 和 <code>.contains-size</code> 工具类。</li>
    <li>比例辅助类现在由工具类 API 驱动，并使用简化的值，不含 <code>calc()</code>。</li>
    <li><strong>状态变体现在使用前缀语法。</strong> 伪状态工具类如悬停和焦点变体现在使用 <code>state:class</code> 前缀模式（例如 <code>hover:opacity-50</code> 而非 <code>opacity-50-hover</code>），与响应式前缀约定一致。</li>
    <li><strong>工具类 API 清理。</strong> 从工具类 API 中移除了 <code>css-var</code>、<code>css-variable-name</code> 和 <code>local-vars</code> 选项。对 CSS 自定义属性使用 <code>property</code> 映射方法，对工具类内的静态 CSS 自定义属性使用 <code>variables</code>。</li>
    <li><strong>阴影现在分层且可主题化。</strong> <code>.shadow</code>、<code>.shadow-sm</code> 和 <code>.shadow-lg</code> 是多停靠点 <code>box-shadow</code> 声明，以实现更自然的衰减，外加新的 <code>.shadow-xs</code> 和 <code>.shadow-xl</code> 尺寸。新的 <code>.shadow-{color}</code> 工具类（任何主题颜色，加上 <code>.shadow-current</code>、<code>.shadow-black</code>、<code>.shadow-white</code>）和 <code>.shadow-opacity-{10-100}</code> 工具类重新着色和缩放阴影。两者都设置局部、非继承的 CSS 变量（<code>--bs-sc</code>、<code>--bs-so</code>）——镜像 <code>.border-{color}</code> 工具类作用域 <code>--bs-bc</code> 的方式——因此阴影颜色或不透明度覆盖永远不会泄漏到嵌套的 <code>.shadow-*</code> 元素。全局 <code>--bs-shadow-color</code> 和 <code>--bs-shadow-strength</code>（在深色模式下自动加深）驱动默认的无色外观。详情请参阅<a href="/docs/utilities/shadows/docs">阴影文档</a>。</li>
    <li><strong>新的 <code>.border-keyline</code> 工具类。</strong> 向 <code>$border-widths</code> 添加了 <code>.5px</code> <code>keyline</code> 选项（由新的 <code>--border-width-keyline</code> 自定义属性支持），用于高密度显示器上的细线边框。</li>
</ul>

<h3 id="new-components-and-plugins">新组件和插件<a class="anchor-link" href="#new-components-and-plugins" aria-label="链接到 新组件和插件"></a></h3>

<ul>
    <li><strong>Dialog</strong> — 替换 Modal，构建于原生 <code>&lt;dialog&gt;</code> 元素。完整迁移请参见上文组件部分。</li>
    <li><strong>Stepper</strong> — 新的 <code>.stepper</code> 组件，用于多步骤工作流，具有 <code>.stepper-item</code> 和 <code>.stepper-horizontal</code> 变体。纯 CSS。</li>
    <li><strong>Avatar</strong> — 新的 <code>.avatar</code> 组件，具有尺寸（<code>.avatar-xs</code> 到 <code>.avatar-xl</code>）、状态指示器（<code>.avatar-status .status-online|offline|busy|away</code>）、微妙变体，以及用于分组头像的 <code>.avatar-stack</code>。</li>
    <li><strong>Chip 和 Chip Input</strong> — 新的 <code>.chip</code> 组件用于标签/令牌，<code>.chip-input[data-bs-chips]</code> 用于交互式芯片输入。<code>Chips</code> JavaScript 插件，事件：<code>add.bs.chips</code>、<code>remove.bs.chips</code>、<code>change.bs.chips</code>、<code>select.bs.chips</code>。</li>
    <li><strong>OTP Input</strong> — 新的 <code>.otp</code> 组件用于一次性密码字段。构建于单个 <code>&lt;input&gt;</code> 之上，渲染为单独的数字槽以实现完全可访问性。<code>OtpInput</code> JavaScript 插件，事件：<code>input.bs.otpInput</code>、<code>complete.bs.otpInput</code>（两者都暴露 <code>event.value</code>）。</li>
    <li><strong>Password Strength</strong> — <code>Strength</code> JavaScript 插件，用于密码强度计量，带有 <code>strengthChange.bs.strength</code> 事件。</li>
    <li><strong>Range</strong> — <code>Range</code> JavaScript 插件，将 <code>.form-range</code> 转换为带填充轨道、可选值气泡和 <code>&lt;datalist&gt;</code> 刻度标记的样式化滑块，带有 <code>changed.bs.range</code> 事件。</li>
    <li><strong>Toggler</strong> — <code>Toggler</code> JavaScript 插件，用于通过 <code>data-bs-toggle="toggler"</code> 切换元素上的类或属性，带有 <code>toggle.bs.toggler</code> 和 <code>toggled.bs.toggler</code> 事件。</li>
    <li><strong>Datepicker</strong> — <code>Datepicker</code> JavaScript 插件，构建于 Vanilla Calendar Pro 之上。弹出日期选择器在选择后、外部交互、按 <kbd>Escape</kbd> 或焦点移出时关闭。事件：<code>change.bs.datepicker</code>、<code>show.bs.datepicker</code>、<code>shown.bs.datepicker</code>、<code>hide.bs.datepicker</code>、<code>hidden.bs.datepicker</code>。</li>
    <li><strong>Form Adorn</strong> — 新的 <code>.form-adorn</code> 组件，用于向表单输入添加图标或文本装饰。</li>
    <li><strong>Prose</strong> — 新的 <code>.prose</code> 类，用于富排版作用域，以及 <code>.not-prose</code> 以在 prose 容器内选择退出 prose 样式。</li>
    <li><strong>NavOverflow</strong> — 将 <code>.nav</code> 包装在 <code>&lt;div class="nav-overflow" data-bs-toggle="nav-overflow"&gt;</code> 中，将溢出项折叠到菜单中。插件测量并观察包装器，并在其上触发 <code>update.bs.navoverflow</code> 和 <code>overflow.bs.navoverflow</code>。参见<a href="/docs/components/nav-overflow/docs">导航溢出文档</a>。</li>
    <li><strong>Submenu</strong> — 通过 Menu 内的 <code>.submenu</code> 类支持嵌套菜单，具有 <code>submenuTrigger</code>（<code>hover</code>、<code>click</code> 或 <code>both</code>）和 <code>submenuDelay</code> 选项。</li>
</ul>

<h3 id="docs">文档<a class="anchor-link" href="#docs" aria-label="链接到 文档"></a></h3>

<ul>
    <li>移除了所有 <code>AddedIn</code> 徽章。</li>
    <li>重新排列了工具类文档，将包含工具类组的较大页面拆分。尺寸、间距、flex、类型等已拆分为更小的页面，并在侧边栏中新增子组标题。</li>
</ul>
</article>
<nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#upgrade">升级</a></li>
        <li><a href="#changelog">变更日志</a>
            <ul>
                <li><a href="#css">CSS</a></li>
                <li><a href="#sass">Sass</a></li>
                <li><a href="#javascript">JavaScript</a></li>
                <li><a href="#components">组件</a></li>
                <li><a href="#reboot">Reboot</a></li>
                <li><a href="#forms">表单</a></li>
                <li><a href="#helpers">辅助类</a></li>
                <li><a href="#utilities">工具类</a></li>
                <li><a href="#new-components-and-plugins">新组件和插件</a></li>
                <li><a href="#docs">文档</a></li>
            </ul>
        </li>
    </ul>
</nav>
</template>