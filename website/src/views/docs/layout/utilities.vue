<template>
    <div class="docs-intro">
        <h1>布局工具</h1>
        <p>为了实现更快的移动友好和响应式开发，Bootstrap 包含了数十个工具类，用于显示、隐藏、对齐和调整内容间距。</p>
    </div>

    <div class="docs-toc">
        <nav id="TableOfContents" aria-label="目录">
            <ul>
                <li><a href="#changing-display">更改 display</a></li>
                <li><a href="#flexbox-options">Flexbox 选项</a></li>
                <li><a href="#margin-and-padding">外边距与内边距</a></li>
                <li><a href="#toggle-visibility">切换 visibility</a></li>
            </ul>
        </nav>
    </div>
    <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents" data-pagefind-body>
        <h2 id="changing-display">更改 <code>display</code><a class="anchor-link" aria-label="链接到此部分：更改 display"
                href="#changing-display"> </a></h2>
        <p>使用我们的<a href="/docs/6.0/utilities/display">显示工具</a>以响应式方式切换 <code>display</code>
            属性的常用值。将其与我们的网格系统、内容或组件结合使用，以便在特定视口中显示或隐藏它们。</p>
        <h2 id="flexbox-options">Flexbox 选项<a class="anchor-link" aria-label="链接到此部分：Flexbox 选项"
                href="#flexbox-options"> </a></h2>
        <p>Bootstrap 构建于 flexbox 之上，但并非每个元素的 <code>display</code> 都已更改为
            <code>display: flex</code>，因为这会添加许多不必要的覆盖并意外改变关键的浏览器行为。我们的<a
                href="/docs/6.0/components/alerts">大多数组件</a>都启用了 flexbox。
        </p>
        <p>如果你需要为元素添加 <code>display: flex</code>，请使用 <code>.d-flex</code> 或其中一个响应式变体（例如 <code>.sm:d-flex</code>）。你需要此类或
            <code>display</code>
            值才能使用我们额外的<a href="/docs/6.0/utilities/flex">flexbox 工具</a>来进行尺寸调整、对齐、间距等操作。</p>
        <h2 id="margin-and-padding">外边距与内边距<a class="anchor-link" aria-label="链接到此部分：外边距与内边距"
                href="#margin-and-padding"> </a></h2>
        <p>使用<a href="/docs/6.0/utilities/margin">外边距</a>和<a href="/docs/6.0/utilities/padding">内边距</a>
            工具来控制元素和组件的间距与尺寸。Bootstrap 包含一个 13 级间距工具比例，基于默认的 <code>$spacer</code> 值 <code>1rem</code>。为所有视口选择值（例如
            <code>.me-5</code> 表示 <code>margin-inline-end: 1rem</code>），或使用响应式
            变体来针对特定视口（例如从 <code>md</code> 断点开始的 <code>.md:me-5</code>）。</p>
        <h2 id="toggle-visibility">切换 <code>visibility</code><a class="anchor-link" aria-label="链接到此部分：切换 visibility"
                href="#toggle-visibility"> </a></h2>
        <p>当不需要切换 <code>display</code> 时，你可以使用我们的<a href="/docs/6.0/utilities/visibility">可见性工具</a>来切换元素的
            <code>visibility</code>。不可见元素仍会影响页面布局，但对访问者来说是视觉上隐藏的。</p>

        <nav class="docs-links-nav py-9">
            <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/gutters/"
                    class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
                    <div class="fg-3">← 上一页</div>
                    <div class="fw-semibold">间隔</div>
                    <div class="fg-3">布局</div>
                </a><a href="/docs/6.0/layout/z-index/"
                    class="d-flex flex-column gap-3 text-decoration-none flex-grow-1" rel="next">
                    <div class="fg-3">下一页 →</div>
                    <div class="fw-semibold">Z-index</div>
                    <div class="fg-3">布局</div>
                </a></div>
        </nav>
    </div>
</template>