<template>
    <div class="docs-intro pt-5 md:pt-2 lg:ps-2">
        <h1>间隔</h1>
        <p>间隔是列之间的内边距，用于在 Bootstrap 网格系统中以响应式方式调整内容间距和对齐。</p>
    </div>
    <div class="docs-toc">
        <nav id="TableOfContents" aria-label="目录">
            <ul>
                <li><a href="#how-they-work">工作原理</a></li>
                <li><a href="#horizontal-gutters">水平间隔</a></li>
                <li><a href="#vertical-gutters">垂直间隔</a></li>
                <li><a href="#horizontal--vertical-gutters">水平与垂直间隔</a></li>
                <li><a href="#row-columns-gutters">行列间隔</a></li>
                <li><a href="#no-gutters">无间隔</a></li>
                <li><a href="#change-the-gutters">更改间隔</a></li>
            </ul>
        </nav>
    </div>
    <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents" data-pagefind-body>
        <h2 id="how-they-work">工作原理<a class="anchor-link" aria-label="链接到此部分：工作原理"
                href="#how-they-work"> </a></h2>
        <ul>
            <li>
                <p><strong>间隔是列内容之间的间隙，由水平 <code>padding</code> 创建。</strong>我们在每一列上设置 <code>padding-right</code> 和
                    <code>padding-left</code>，并使用负 <code>margin</code> 在每一行的开头和结尾抵消它，以对齐内容。
                </p>
            </li>
            <li>
                <p><strong>间隔初始宽度为 <code>1.5rem</code>（<code>24px</code>）。</strong>这使我们能够将网格与 <a href="/docs/6.0/utilities/margin">外边距</a>和 <a
                        href="/docs/6.0/utilities/padding">内边距</a>工具的比例相匹配。</p>
            </li>
            <li>
                <p><strong>间隔可以响应式调整。</strong>使用特定断点的间隔类来修改水平间隔、垂直间隔以及所有间隔。</p>
            </li>
        </ul>
        <h2 id="horizontal-gutters">水平间隔<a class="anchor-link"
                aria-label="链接到此部分：水平间隔" href="#horizontal-gutters"> </a></h2>
        <p><code>.gx-*</code> 类可用于控制水平间隔宽度。如果使用较大的间隔，可能还需要调整 <code>.container</code> 或 <code>.container-fluid</code> 父元素，以避免不希望的溢出，可使用匹配的内边距工具。例如，在以下示例中，我们使用 <code>.px-4</code> 增加了内边距：
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container px-4 text-center">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <p>另一种解决方案是在 <code>.row</code> 周围添加一个带有 <code>.overflow-hidden</code> 类的包装器：
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container overflow-hidden text-center">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="<div class="container overflow-hidden text-center">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="vertical-gutters">垂直间隔<a class="anchor-link"
                aria-label="链接到此部分：垂直间隔" href="#vertical-gutters"> </a></h2>
        <p><code>.gy-*</code> 类可用于在列换行到新行时控制行内的垂直间隔宽度。与水平间隔一样，垂直间隔可能会导致页面末尾 <code>.row</code> 下方出现一些溢出。如果发生这种情况，可以在 <code>.row</code> 周围添加一个带有 <code>.overflow-hidden</code> 类的包装器：
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container overflow-hidden text-center">
                    <div class="row gy-5">
                        <div class="col-6">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="container overflow-hidden text-center">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div> 
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="horizontal--vertical-gutters">水平与垂直间隔<a class="anchor-link"
                aria-label="链接到此部分：水平与垂直间隔"
                href="#horizontal--vertical-gutters"> </a></h2>
        <p>使用 <code>.g-*</code> 类来控制水平和垂直网格间隔。在下面的示例中，我们使用了较小的间隔宽度，因此不需要 <code>.overflow-hidden</code> 包装类。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container text-center">
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="container text-center">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="row-columns-gutters">行列间隔<a class="anchor-link"
                aria-label="链接到此部分：行列间隔" href="#row-columns-gutters"> </a></h2>
        <p>间隔类也可以添加到<a href="/docs/6.0/layout/grid#row-columns">行列</a>上。在以下示例中，我们使用了响应式行列和响应式间隔类。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container text-center">
                    <div class="row row-cols-2 lg:row-cols-5 g-2 lg:g-3">
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Row column</div>
                        </div>
                    </div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="container text-center">
  <div class="row row-cols-2 lg:row-cols-5 g-2 lg:g-3">
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
    <div class="col">
      <div class="p-3">Row column</div>
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="no-gutters">无间隔<a class="anchor-link" aria-label="链接到此部分：无间隔"
                href="#no-gutters"> </a></h2>
        <p>我们预定义网格类中列之间的间隔可以通过 <code>.g-0</code> 移除。这会移除 <code>.row</code> 上的负 <code>margin</code> 以及所有直接子列上的水平 <code>padding</code>。</p>
        <p><strong>需要边缘到边缘的设计？</strong>去掉父级 <code>.container</code> 或
            <code>.container-fluid</code>，并在 <code>.row</code> 上添加 <code>.mx-0</code> 以防止溢出。
        </p>
        <p>实际效果如下。请注意，你可以继续将其与所有其他预定义网格类（包括列宽、响应式层级、重新排序等）一起使用。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-row">
                <div class="row g-0 text-center">
                    <div class="sm:col-6 md:col-8">.sm:col-6 .md:col-8</div>
                    <div class="col-6 md:col-4">.col-6 .md:col-4</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="row g-0 text-center">
  <div class="sm:col-6 md:col-8">.sm:col-6 .md:col-8</div>
  <div class="col-6 md:col-4">.col-6 .md:col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="change-the-gutters">更改间隔<a class="anchor-link"
                aria-label="链接到此部分：更改间隔" href="#change-the-gutters"> </a></h2>
        <p>这些类由 <code>$gutters</code> Sass 映射构建，该映射继承自 <code>$spacers</code> Sass 映射。
        </p>
        <div class="docs-code-snippet" data-pagefind-ignore>
            <CodeHighlight :code='`$grid-gutter-x: 1.5rem;
$gutters: $spacers;`' lang="scss"></CodeHighlight>
        </div>

        <nav class="docs-links-nav py-9">
            <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/columns/"
                    class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
                    <div class="fg-3">← 上一页</div>
                    <div class="fw-semibold">列</div>
                    <div class="fg-3">布局</div>
                </a><a href="/docs/6.0/layout/utilities/"
                    class="d-flex flex-column gap-3 text-decoration-none flex-grow-1" rel="next">
                    <div class="fg-3">下一页 →</div>
                    <div class="fw-semibold">工具</div>
                    <div class="fg-3">布局</div>
                </a></div>
        </nav>
    </div>
</template>