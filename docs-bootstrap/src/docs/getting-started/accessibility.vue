<template>
<article class="docs-content prose">
<h1>无障碍</h1>
<p>简要概述 Bootstrap 在创建无障碍内容方面的特性与限制。</p>

<p>Bootstrap 提供了一套易于使用的现成样式、布局工具和交互组件框架，让开发者能够开箱即用地创建视觉美观、功能丰富且无障碍的网站和应用程序。</p>

<h2 id="overview-and-limitations">概述与限制<a class="anchor-link" href="#overview-and-limitations" aria-label="链接到 概述与限制"></a></h2>

<p>使用 Bootstrap 构建的任何项目的整体无障碍性，在很大程度上取决于作者的标记、附加样式以及所包含的脚本。然而，只要这些内容实现正确，就完全有可能用 Bootstrap 创建符合 <a href="https://www.w3.org/TR/WCAG/"><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.2</a>（A/AA/AAA）、<a href="https://www.section508.gov/">Section 508</a> 以及类似无障碍标准和要求的网站和应用程序。</p>

<h3 id="structural-markup">结构标记<a class="anchor-link" href="#structural-markup" aria-label="链接到 结构标记"></a></h3>

<p>Bootstrap 的样式和布局可以应用于广泛的标记结构。本文档旨在为开发者提供最佳实践示例，以展示 Bootstrap 本身的使用方式，并说明适当的语义标记，包括可以解决潜在无障碍问题的方法。</p>

<h3 id="interactive-components">交互组件<a class="anchor-link" href="#interactive-components" aria-label="链接到 交互组件"></a></h3>

<p>Bootstrap 的交互组件——例如模态对话框、菜单和自定义工具提示——设计为可供触摸、鼠标和键盘用户使用。通过使用相关的 <a href="https://www.w3.org/WAI/standards-guidelines/aria/"><abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr></a> 角色和属性，这些组件也应能被辅助技术（如屏幕阅读器）理解和操作。</p>

<p>由于 Bootstrap 的组件刻意设计得相当通用，作者可能需要包含进一步的 <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 角色和属性，以及 JavaScript 行为，以更准确地传达其组件的精确性质和功能。这通常在文档中注明。</p>

<h3 id="color-contrast">颜色对比度<a class="anchor-link" href="#color-contrast" aria-label="链接到 颜色对比度"></a></h3>

<p>目前构成 Bootstrap 默认调色板的一些颜色组合——在整个框架中用于按钮变体、警告变体、表单验证指示器等——可能导致<em>不充分</em>的颜色对比度（低于推荐的 <a href="https://www.w3.org/TR/WCAG/#contrast-minimum">WCAG 2.2 文本颜色对比度 4.5:1</a> 和 <a href="https://www.w3.org/TR/WCAG/#non-text-contrast">WCAG 2.2 非文本颜色对比度 3:1</a>），尤其是在浅色背景上使用时。鼓励作者测试其特定的颜色使用情况，并在必要时手动修改/扩展这些默认颜色，以确保足够的颜色对比度。</p>

<h3 id="visually-hidden-content">视觉隐藏内容<a class="anchor-link" href="#visually-hidden-content" aria-label="链接到 视觉隐藏内容"></a></h3>

<p>应视觉隐藏但需保持对辅助技术（如屏幕阅读器）可访问的内容，可以使用 <code>.visually-hidden</code> 类进行样式设置。当需要向非视觉用户传达额外的视觉信息或线索（例如通过颜色表示的含义）时，这非常有用。</p>

<CodeWrapper code='<p class="fg-danger">
  <span class="visually-hidden">Danger: </span>
  This action is not reversible
</p>' lang="html" />

<p>对于视觉隐藏的交互控件，例如传统的“跳过”链接，请使用 <code>.visually-hidden-focusable</code> 类。这将确保控件在获得焦点时变为可见（对于有视力的键盘用户）。<strong>请注意，与过去版本中等效的 <code>.sr-only</code> 和 <code>.sr-only-focusable</code> 类相比，Bootstrap 的 <code>.visually-hidden-focusable</code> 是一个独立类，不得与 <code>.visually-hidden</code> 类组合使用。</strong></p>

<CodeWrapper code='<a class="visually-hidden-focusable" href="#content">Skip to main content</a>' lang="html" />

<h3 id="reduced-motion">减少动态效果<a class="anchor-link" href="#reduced-motion" aria-label="链接到 减少动态效果"></a></h3>

<p>Bootstrap 包含对 <a href="https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion"><code>prefers-reduced-motion</code> 媒体特性</a>的支持。在允许用户指定其减少动态效果偏好的浏览器/环境中，Bootstrap 中的大多数 CSS 过渡效果（例如打开或关闭模态对话框时，或轮播中的滑动动画）将被禁用，而有意义的动画（如加载旋转器）将被放慢。</p>

<p>在支持 <code>prefers-reduced-motion</code> 且用户<em>未</em>明确表示希望减少动态效果的浏览器上（即 <code>prefers-reduced-motion: no-preference</code>），Bootstrap 使用 <code>scroll-behavior</code> 属性启用平滑滚动。</p>

<h2 id="additional-resources">其他资源<a class="anchor-link" href="#additional-resources" aria-label="链接到 其他资源"></a></h2>

<ul>
    <li><a href="https://www.w3.org/TR/WCAG/">Web 内容无障碍指南（WCAG）2.2</a></li>
    <li><a href="https://www.a11yproject.com/">The A11Y Project</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">MDN 无障碍文档</a></li>
    <li><a href="https://www.tpgi.com/color-contrast-checker/">颜色对比度分析器（CCA）</a></li>
    <li><a href="https://github.com/squizlabs/HTML_CodeSniffer">用于识别无障碍问题的“HTML Codesniffer”书签小工具</a></li>
    <li><a href="https://accessibilityinsights.io/">Microsoft Accessibility Insights</a></li>
    <li><a href="https://www.deque.com/axe/">Deque Axe 测试工具</a></li>
    <li><a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">Web 无障碍入门</a></li>
</ul>
</article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#overview-and-limitations">概述与限制</a>
            <ul>
                <li><a href="#structural-markup">结构标记</a></li>
                <li><a href="#interactive-components">交互组件</a></li>
                <li><a href="#color-contrast">颜色对比度</a></li>
                <li><a href="#visually-hidden-content">视觉隐藏内容</a></li>
                <li><a href="#reduced-motion">减少动态效果</a></li>
            </ul>
        </li>
        <li><a href="#additional-resources">其他资源</a></li>
    </ul>
</nav>
</template>