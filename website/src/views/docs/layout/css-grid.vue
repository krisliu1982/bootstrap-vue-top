<template>
    <div class="docs-intro">
        <h1>CSS Grid</h1>
        <p>通过示例和代码片段，了解如何启用、使用和自定义我们基于 CSS Grid 构建的替代布局系统。</p>
    </div>

    <div class="docs-toc">
        <nav id="TableOfContents" aria-label="目录">
            <ul>
                <li><a href="#how-it-works">工作原理</a></li>
                <li><a href="#key-differences">主要区别</a></li>
                <li><a href="#examples">示例</a>
                    <ul>
                        <li><a href="#three-columns">三列</a></li>
                        <li><a href="#responsive">响应式</a></li>
                        <li><a href="#playground">演练场</a></li>
                    </ul>
                </li>
                <li><a href="#wrapping">换行</a></li>
                <li><a href="#starts">起始位置</a></li>
                <li><a href="#auto-columns">自动列</a></li>
                <li><a href="#nesting">嵌套</a></li>
                <li><a href="#customizing">自定义</a>
                    <ul>
                        <li><a href="#no-grid-classes">无网格类</a></li>
                        <li><a href="#columns-and-gaps">列与间隙</a></li>
                        <li><a href="#adding-rows">添加行</a></li>
                        <li><a href="#gaps">间隙</a></li>
                    </ul>
                </li>
                <li><a href="#sass">Sass</a></li>
            </ul>
        </nav>
    </div>
    <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents" data-pagefind-body>
        <p>Bootstrap 的默认网格系统代表了十多年来 CSS 布局技术的结晶，经过了数百万人的尝试和测试。但是，它也是在缺少我们在浏览器中看到的许多现代 CSS 特性和技术（例如新的 CSS Grid）的情况下创建的。</p>
        <div class="docs-callout docs-callout-warning">
            <p><strong>注意——我们的 CSS Grid 系统是选择性启用的！</strong>我们将其包含在文档的 CSS 中为你演示，但它默认是禁用的。继续阅读以了解如何在你的项目中启用它。另请参阅我们的<a href="/docs/6.0/utilities/container-queries">容器查询工具</a>，它涵盖了一个相关但不同的用例。</p>
        </div>
        <h2 id="how-it-works">工作原理<a class="anchor-link" aria-label="链接到此部分：工作原理"
                href="#how-it-works"> </a></h2>
        <p>Bootstrap 包含一个可选的基于 CSS Grid 构建的网格系统，但带有 Bootstrap 的特色。你仍然可以获得可以随意应用来构建响应式布局的类，但在底层采用了不同的方法。</p>
        <ul>
            <li>
                <p><strong>CSS Grid 是选择性启用的。</strong>通过设置
                    <code>$enable-grid-classes: false</code> 禁用默认网格系统，并通过设置
                    <code>$enable-cssgrid: true</code> 启用 CSS Grid。然后重新编译你的 Sass。
                </p>
            </li>
            <li>
                <p><strong>将 <code>.row</code> 的实例替换为 <code>.grid</code>。</strong><code>.grid</code> 类设置 <code>display: grid</code> 并创建一个 <code>grid-template</code>，你可以在 HTML 中基于它构建。
                </p>
            </li>
            <li>
                <p><strong>将 <code>.col-*</code> 类替换为 <code>.g-col-*</code> 类。</strong>这是因为我们的 CSS Grid 列使用 <code>grid-column</code> 属性而不是
                    <code>width</code>。
                </p>
            </li>
            <li>
                <p><strong>列和间隔尺寸通过 CSS 变量设置。</strong>在父级
                    <code>.grid</code> 上设置这些变量，并使用
                    <code>--bs-columns</code> 和 <code>--bs-gap</code> 以内联或样式表方式随意自定义。
                </p>
            </li>
            <li>
                <p><strong>响应式类使用容器查询。</strong>每个 <code>.grid</code> 都是一个查询容器（<code>container-type: inline-size</code>），因此响应式 <code>.g-col-*</code> 和
                    <code>.g-start-*</code> 类响应的是 <code>.grid</code> 本身的宽度，而不是视口宽度。
                </p>
            </li>
        </ul>
        <h2 id="key-differences">主要区别<a class="anchor-link"
                aria-label="链接到此部分：主要区别" href="#key-differences"> </a></h2>
        <p>与默认网格系统相比：</p>
        <ul>
            <li>
                <p>Flex 工具不会以相同的方式影响 CSS Grid 列。</p>
            </li>
            <li>
                <p>间隙（gap）取代了间隔（gutter）。<code>gap</code> 属性取代了我们默认网格系统中的水平 <code>padding</code>，其功能更像 <code>margin</code>。</p>
            </li>
            <li>
                <p>因此，与 <code>.row</code> 不同，<code>.grid</code> 没有负外边距，也不能使用外边距工具来更改网格间隔。网格间隙默认在水平和垂直方向都应用。详情请参阅<a href="#customizing">自定义部分</a>。</p>
            </li>
            <li>
                <p>内联和自定义样式应被视为修饰类的替代品（例如 <code>style="--bs-columns: 3;"</code> 对比 <code>class="row-cols-3"</code>）。
                </p>
            </li>
            <li>
                <p>嵌套的工作方式类似，但可能需要你在每个嵌套的
                    <code>.grid</code> 实例上重置列数。详情请参阅<a href="#nesting">嵌套部分</a>。
                </p>
            </li>
        </ul>
        <h2 id="examples">示例<a class="anchor-link" aria-label="链接到此部分：示例" href="#examples">
            </a></h2>
        <h3 id="three-columns">三列<a class="anchor-link" aria-label="链接到此部分：三列"
                href="#three-columns"> </a></h3>
        <p>通过使用 <code>.g-col-4</code> 类，可以在所有容器尺寸和设备上创建三个等宽列。添加<a href="#responsive">响应式类</a>以根据 <code>.grid</code> 容器的宽度更改布局。
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-4">.g-col-4</div>
                    <div class="g-col-4">.g-col-4</div>
                    <div class="g-col-4">.g-col-4</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="responsive">响应式<a class="anchor-link" aria-label="链接到此部分：响应式"
                href="#responsive"> </a></h3>
        <p>使用响应式类来调整布局跨断点的表现。这里我们从最窄容器上的两列开始，然后在中等容器及以上增长为三列。拖动示例的把手来调整 <code>.grid</code> 的大小，并观察列如何根据其宽度而不是视口重新排列。</p>
        <div class="docs-callout docs-callout-info">
            <p>响应式 <code>.g-col-*</code> 和 <code>.g-start-*</code> 类由<a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries">容器查询</a>驱动，而不是媒体查询。<code>.grid</code> 被设置为查询容器
                （<code>container-type: inline-size</code>），因此其网格项响应的是
                <code>.grid</code> 本身的宽度，而不是视口宽度。这意味着放置在窄列中的 <code>.grid</code> 将根据该列的宽度而不是浏览器窗口的大小来切换布局。
            </p>
        </div>
        <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
            <div class="docs-example docs-example-resizable bg-1">
                <div class="docs-resizable-container bg-body border border-keyline shadow-xs docs-example-cssgrid"
                    style="width: 100%; min-width: 200px;">
                    <div class="grid text-center">
                        <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
                        <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
                        <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
                    </div><output class="docs-resizable-badge" data-resizable-badge="" aria-live="polite"
                        data-breakpoint="sm">sm · 677px</output>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <p>将其与在所有容器尺寸下都保持两列布局的示例如下进行比较。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="playground">演练场<a class="anchor-link" aria-label="链接到此部分：演练场"
                href="#playground"> </a></h3>
        <p>上面的示例受限于此页面的宽度，因此你只能将它们调整到
            <code>sm</code> 范围，之后就没有空间了。打开下面的全屏演示，拖动一组网格跨越整个断点范围，并观察每个布局如何根据容器的宽度而不是视口重新排列。
        </p>
        <button type="button" class="btn-solid theme-primary" data-bs-toggle="dialog"
            data-bs-target="#gridPlaygroundDialog">
            <p>打开全屏网格演示</p>
        </button>
        <dialog class="dialog dialog-fullscreen dialog-scrollable" id="gridPlaygroundDialog">
            <div class="dialog-header">
                <h1 class="dialog-title">CSS Grid 容器查询</h1><button type="button" class="btn-close"
                    data-bs-dismiss="dialog" aria-label="关闭"></button>
            </div>
            <div class="dialog-body">
                <p>拖动示例右边缘的把手来调整其大小。徽章显示当前激活的容器查询断点，下面的每个网格都响应示例的宽度——而不是浏览器窗口的大小。</p>
                <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
                    <div class="docs-example docs-example-resizable bg-1">
                        <div class="docs-resizable-container bg-body border border-keyline shadow-xs docs-example-cssgrid"
                            style="width: 100%; min-width: 200px;">
                            <div class="grid text-center">
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                            </div>
                            <div class="grid text-center">
                                <div class="g-col-6 md:g-col-3">card</div>
                                <div class="g-col-6 md:g-col-3">card</div>
                                <div class="g-col-6 md:g-col-3">card</div>
                                <div class="g-col-6 md:g-col-3">card</div>
                            </div>
                            <div class="grid text-center">
                                <div class="g-col-12 lg:g-col-3">sidebar</div>
                                <div class="g-col-12 lg:g-col-9">main content</div>
                            </div>
                            <div class="grid text-center">
                                <div class="g-col-12 lg:g-col-8">primary</div>
                                <div class="g-col-12 lg:g-col-4">secondary</div>
                            </div>
                            <div class="grid text-center">
                                <div class="g-col-12 md:g-col-6 md:g-start-4">centered with .md:g-start-4</div>
                            </div><output class="docs-resizable-badge" data-resizable-badge="" aria-live="polite"
                                data-breakpoint="sm">sm · 651px</output>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-footer"><button type="button" class="btn-solid theme-secondary"
                    data-bs-dismiss="dialog">关闭</button></div>
        </dialog>
        <h2 id="wrapping">换行<a class="anchor-link" aria-label="链接到此部分：换行" href="#wrapping">
            </a></h2>
        <p>当水平方向没有更多空间时，网格项会自动换行到下一行。请注意，<code>gap</code> 应用于网格项之间的水平和垂直间隙。
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>

                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="starts">起始位置<a class="anchor-link" aria-label="链接到此部分：起始位置" href="#starts"> </a></h2>
        <p>起始类旨在替代我们默认网格的偏移类，但它们并不完全相同。CSS Grid 通过告诉浏览器“从此列开始”和“到此列结束”的样式来创建网格模板。这些属性是 <code>grid-column-start</code> 和 <code>grid-column-end</code>。起始类是前者的简写。将它们与列类配对，以根据需要调整列的大小和对齐方式。起始类从 <code>1</code> 开始，因为 <code>0</code> 对这些属性来说是无效值。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-3 g-start-2">.g-col-3 .g-start-2</div>
                    <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-3 g-start-2">.g-col-3 .g-start-2</div>
  <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="auto-columns">自动列<a class="anchor-link" aria-label="链接到此部分：自动列"
                href="#auto-columns"> </a></h2>
        <p>当网格项（<code>.grid</code> 的直接子元素）上没有类时，每个网格项将自动调整为一列的大小。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <p>此行为可以与网格列类混合使用。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-6">.g-col-6</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="nesting">嵌套<a class="anchor-link" aria-label="链接到此部分：嵌套" href="#nesting"> </a>
        </h2>
        <p>与我们默认的网格系统类似，我们的 CSS Grid 允许轻松嵌套 <code>.grid</code>。然而，与默认网格不同，此网格会继承行、列和间隙的更改。考虑下面的示例：
        </p>
        <ul>
            <li>我们使用局部 CSS 变量覆盖默认列数：<code>--bs-columns: 3</code>。</li>
            <li>在第一个自动列中，列数被继承，每列占可用宽度的三分之一。</li>
            <li>在第二个自动列中，我们将嵌套 <code>.grid</code> 的列数重置为 12（我们的默认值）。</li>
            <li>第三个自动列没有嵌套内容。</li>
        </ul>
        <p>与我们的默认网格系统相比，这在实践中允许更复杂和自定义的布局。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center overflow-x-auto" style="--bs-columns: 3;">
                    <div>
                        First auto-column
                        <div class="grid">
                            <div>Auto-column</div>
                            <div>Auto-column</div>
                        </div>
                    </div>
                    <div>
                        Second auto-column
                        <div class="grid" style="--bs-columns: 12;">
                            <div class="g-col-6">6 of 12</div>
                            <div class="g-col-4">4 of 12</div>
                            <div class="g-col-2">2 of 12</div>
                        </div>
                    </div>
                    <div>Third auto-column</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center overflow-x-auto" style="--bs-columns: 3;">
  <div>
    First auto-column
    <div class="grid">
      <div>Auto-column</div>
      <div>Auto-column</div>
    </div>
  </div>
  <div>
    Second auto-column
    <div class="grid" style="--bs-columns: 12;">
      <div class="g-col-6">6 of 12</div>
      <div class="g-col-4">4 of 12</div>
      <div class="g-col-2">2 of 12</div>
    </div>
  </div>
  <div>Third auto-column</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="customizing">自定义<a class="anchor-link" aria-label="链接到此部分：自定义"
                href="#customizing"> </a></h2>
        <p>使用局部 CSS 变量自定义列数、行数以及间隙宽度。</p>
        <div class="table-responsive">
            <table class="table md:table-stacked">
                <thead>
                    <tr>
                        <th>变量</th>
                        <th>回退值</th>
                        <th>描述</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-cell="变量"><code>--bs-rows</code></td>
                        <td data-cell="回退值"><code>1</code></td>
                        <td data-cell="描述">网格模板中的行数</td>
                    </tr>
                    <tr>
                        <td data-cell="变量"><code>--bs-columns</code></td>
                        <td data-cell="回退值"><code>12</code></td>
                        <td data-cell="描述">网格模板中的列数</td>
                    </tr>
                    <tr>
                        <td data-cell="变量"><code>--bs-gap</code></td>
                        <td data-cell="回退值"><code>1.5rem</code></td>
                        <td data-cell="描述">列之间（垂直和水平）的间隙大小</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>这些 CSS 变量没有默认值；相反，它们应用回退值，这些回退值会在<em>提供局部实例之前</em>使用。例如，我们对 CSS Grid 行使用 <code>var(--bs-rows, 1)</code>，这会忽略 <code>--bs-rows</code>，因为该变量尚未在任何地方设置。一旦设置，<code>.grid</code>
            实例将使用该值而不是回退值 <code>1</code>。</p>
        <h3 id="no-grid-classes">无网格类<a class="anchor-link"
                aria-label="链接到此部分：无网格类" href="#no-grid-classes"> </a></h3>
        <p><code>.grid</code> 的直接子元素是网格项，因此它们无需显式添加 <code>.g-col</code> 类即可调整大小。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--columns: 3;">
                    <div>Auto-column</div>
                    <div>Auto-column</div>
                    <div>Auto-column</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-columns: 3;">
  <div>Auto-column</div>
  <div>Auto-column</div>
  <div>Auto-column</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="columns-and-gaps">列与间隙<a class="anchor-link"
                aria-label="链接到此部分：列与间隙" href="#columns-and-gaps"> </a></h3>
        <p>调整列数和间隙。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--columns: 4; --gap: 5rem;">
                    <div class="g-col-2">.g-col-2</div>
                    <div class="g-col-2">.g-col-2</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-columns: 4; --bs-gap: 5rem;">
  <div class="g-col-2">.g-col-2</div>
  <div class="g-col-2">.g-col-2</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--columns: 10; --gap: 1rem;">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-4">.g-col-4</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-columns: 10; --bs-gap: 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-4">.g-col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="adding-rows">添加行<a class="anchor-link" aria-label="链接到此部分：添加行"
                href="#adding-rows"> </a></h3>
        <p>添加更多行并更改列的放置位置：</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--rows: 3; --columns: 3;">
                    <div>Auto-column</div>
                    <div class="g-start-2" style="grid-row: 2">Auto-column</div>
                    <div class="g-start-3" style="grid-row: 3">Auto-column</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-rows: 3; --bs-columns: 3;">
  <div>Auto-column</div>
  <div class="g-start-2" style="grid-row: 2">Auto-column</div>
  <div class="g-start-3" style="grid-row: 3">Auto-column</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="gaps">间隙<a class="anchor-link" aria-label="链接到此部分：间隙" href="#gaps"> </a></h3>
        <p>仅通过修改 <code>row-gap</code> 来更改垂直间隙。请注意，我们在
            <code>.grid</code> 上使用 <code>gap</code>，但可以根据需要修改 <code>row-gap</code> 和 <code>column-gap</code>。
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="row-gap: 0;">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>

                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="row-gap: 0;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <p>因此，你可以拥有不同的垂直和水平 <code>gap</code>，它可以采用单个值（所有边）或一对值（垂直和水平）。这可以通过 <code>gap</code> 的内联样式或我们的 <code>--bs-gap</code> CSS 变量来应用。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--gap: .25rem 1rem;">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>

                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-gap: .25rem 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="sass">Sass<a class="anchor-link" aria-label="链接到此部分：Sass" href="#sass"> </a></h2>
        <p>CSS Grid 的一个限制是我们的默认类仍然由两个 Sass 变量生成，
            <code>$grid-columns</code> 和 <code>$grid-gutter-x</code>。这实际上预先确定了我们编译后的 CSS 中生成的类数量。你在这里有两个选择：
        </p>
        <ul>
            <li>修改这些默认 Sass 变量并重新编译你的 CSS。</li>
            <li>使用内联或自定义样式来增强提供的类。</li>
        </ul>
        <p>例如，你可以增加列数并更改间隙大小，然后使用内联样式和预定义 CSS Grid 列类（例如 <code>.g-col-4</code>）的混合来调整你的“列”大小。</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--columns: 18; --gap: .5rem;">
                    <div style="grid-column: span 14;">14 columns</div>
                    <div class="g-col-4">.g-col-4</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-columns: 18; --bs-gap: .5rem;">
  <div style="grid-column: span 14;">14 columns</div>
  <div class="g-col-4">.g-col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>

        <nav class="docs-links-nav py-9">
            <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/z-index/"
                    class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
                    <div class="fg-3">← 上一页</div>
                    <div class="fw-semibold">Z-index</div>
                    <div class="fg-3">布局</div>
                </a><a href="/docs/6.0/content/reboot/"
                    class="d-flex flex-column gap-3 text-decoration-none flex-grow-1" rel="next">
                    <div class="fg-3">下一页 →</div>
                    <div class="fw-semibold">Reboot</div>
                    <div class="fg-3">内容</div>
                </a></div>
        </nav>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
const e = [{ name: `xs`, min: 0 }, { name: `sm`, min: 576 }, { name: `md`, min: 768 }, { name: `lg`, min: 1024 }, { name: `xl`, min: 1280 }, { name: `2xl`, min: 1536 }];
function t(t) {
    let n = e[0];
    for (let r of e) t >= r.min && (n = r);
    return n
}

let observer = null;
onMounted(() => {
    document.querySelectorAll(`[data-resizable-badge]`).forEach(e => {
        let n = e.closest(`.docs-resizable-container`);
        if (!n) return;
        let r = n.querySelector(`:scope > *:not(.docs-resizable-badge)`) ?? n, i = n => { let r = t(n); e.dataset.breakpoint = r.name, e.textContent = `${r.name} · ${Math.round(n)}px` };
        observer = new ResizeObserver(e => {
            for (let t of e)
                i(t.contentBoxSize?.[0]?.inlineSize ?? t.contentRect.width)
        }).observe(r, { box: `content-box` })
    });
})

onBeforeUnmount(() => {
    observer?.disconnect();
})
</script>