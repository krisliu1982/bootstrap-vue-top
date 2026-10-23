<template>
  <div class="docs-intro">
    <h1>栅格系统</h1>
    <p>借助十二列系统、六个默认响应式层级、Sass 变量与混入，以及数十个预定义类，使用我们强大的移动优先 flexbox 栅格来构建各种形状和尺寸的布局。</p>
  </div>
  <div class="docs-toc">
    <nav id="TableOfContents" aria-label="目录">
      <ul>
        <li><a href="#example">示例</a></li>
        <li><a href="#how-it-works">工作原理</a></li>
        <li><a href="#grid-options">栅格选项</a></li>
        <li><a href="#auto-layout-columns">自动布局列</a>
          <ul>
            <li><a href="#equal-width">等宽</a></li>
            <li><a href="#setting-one-column-width">设置单列宽度</a></li>
            <li><a href="#variable-width-content">可变宽度内容</a></li>
          </ul>
        </li>
        <li><a href="#responsive-classes">响应式类</a>
          <ul>
            <li><a href="#all-breakpoints">所有断点</a></li>
            <li><a href="#stacked-to-horizontal">从堆叠到水平排列</a></li>
            <li><a href="#mix-and-match">混合搭配</a></li>
            <li><a href="#row-columns">行内列数</a></li>
          </ul>
        </li>
        <li><a href="#nesting">嵌套</a></li>
        <li><a href="#css">CSS</a>
          <ul>
            <li><a href="#sass-variables">Sass 变量</a></li>
            <li><a href="#sass-mixins">Sass 混入</a></li>
            <li><a href="#example-usage">用法示例</a></li>
          </ul>
        </li>
        <li><a href="#customizing-the-grid">自定义栅格</a>
          <ul>
            <li><a href="#columns-and-gutters">列与间距</a></li>
            <li><a href="#grid-tiers">栅格层级</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents">
    <h2 id="example">示例<a class="anchor-link" aria-label="链接到本节：示例" href="#example"> </a>
    </h2>
    <p>Bootstrap 的栅格系统使用一系列容器、行和列来布局和对齐内容。它基于 <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">flexbox</a>
      构建，并且完全响应式。下面是一个示例以及对栅格系统如何组合运作的深入说明。
    </p>
    <div class="docs-callout docs-callout-info">
      <p><strong>初次接触或不熟悉 flexbox？</strong> <a
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background">阅读这份 CSS Tricks
          flexbox 指南</a>，了解背景、术语、准则和代码片段。</p>
    </div>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              Column
            </div>
            <div class="col">
              Column
            </div>
            <div class="col">
              Column
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>

    <p>上面的示例使用我们预定义的栅格类，在所有设备和视口上创建了三个等宽的列。这些列通过父级 <code>.container</code> 在页面中居中。</p>
    <h2 id="how-it-works">工作原理<a class="anchor-link" aria-label="链接到本节：工作原理"
        href="#how-it-works"> </a></h2>
    <p>拆解来看，栅格系统是这样组合运作的：</p>
    <ul>
      <li>
        <p><strong>我们的栅格支持<a href="/docs/6.0/layout/breakpoints">六个响应式断点</a>。</strong>
          断点基于 <code>min-width</code> 媒体查询，这意味着它们会影响该断点及其以上的所有断点（例如，<code>.sm:col-4</code> 适用于 <code>sm</code>、<code>md</code>、<code>lg</code>、
          <code>xl</code> 和 <code>2xl</code>）。这意味着你可以按断点控制容器和列的尺寸与行为。
        </p>
      </li>
      <li>
        <p><strong>容器使内容居中并水平添加内边距。</strong> 使用 <code>.container</code> 获得响应式像素宽度，使用 <code>.container-fluid</code> 在所有视口和设备上获得 <code>width: 100%</code>，或使用响应式容器（例如 <code>.md:container</code>）获得流体宽度与像素宽度的组合。</p>
      </li>
      <li>
        <p><strong>行是列的包装器。</strong> 每列都有水平 <code>padding</code>（称为间距 gutter）来控制它们之间的空间。然后在行上通过负外边距抵消这个 <code>padding</code>，以确保列中的内容在视觉上沿左侧对齐。行还支持修饰类来<a href="#row-columns">统一应用列尺寸</a>以及<a
            href="/docs/6.0/layout/gutters">间距类</a>来改变内容的间距。</p>
      </li>
      <li>
        <p><strong>列极其灵活。</strong> 每行有 12 个模板列可用，允许你创建跨任意列数的不同元素组合。列类指示要跨越的模板列数（例如，<code>col-4</code> 跨越四列）。<code>width</code> 以百分比设置，因此你始终拥有相同的相对尺寸。</p>
      </li>
      <li>
        <p><strong>间距同样是响应式且可自定义的。</strong> <a href="/docs/6.0/layout/gutters">间距类在所有断点均可用</a>，并具有与我们的 <a
            href="/docs/6.0/utilities/margin">margin</a> 和 <a href="/docs/6.0/utilities/padding">padding</a>
          工具类相同的所有尺寸。使用 <code>.gx-*</code> 类更改水平间距，使用 <code>.gy-*</code> 更改垂直间距，或使用 <code>.g-*</code> 类更改所有间距。<code>.g-0</code> 也可用于移除间距。
        </p>
      </li>
      <li>
        <p><strong>Sass 变量、映射和混入驱动栅格。</strong> 如果你不想在 Bootstrap 中使用预定义的栅格类，可以使用我们的<a href="#sass-variables">栅格源 Sass</a> 创建更具语义化标记的自定义类。我们还包含了一些 CSS 自定义属性来使用这些 Sass 变量，为你提供更大的灵活性。</p>
      </li>
    </ul>
    <p>请注意 flexbox 的局限性和<a href="https://github.com/philipwalton/flexbugs">相关缺陷</a>，
      比如<a href="https://github.com/philipwalton/flexbugs#flexbug-9">无法将某些 HTML 元素用作 flex 容器</a>。</p>
    <h2 id="grid-options">栅格选项<a class="anchor-link" aria-label="链接到本节：栅格选项"
        href="#grid-options"> </a></h2>
    <p>Bootstrap 的栅格系统可以适配所有六个默认断点以及你自定义的任何断点。六个默认栅格层级如下：</p>
    <ul>
      <li>超小（xs）</li>
      <li>小（sm）</li>
      <li>中（md）</li>
      <li>大（lg）</li>
      <li>超大（xl）</li>
      <li>超超大（2xl）</li>
    </ul>
    <p>如上所述，这些断点每个都有自己的容器、唯一的类前缀和修饰符。以下是栅格在这些断点间的变化：</p>
    <div class="table-responsive">
      <table class="table mb-4">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">xs<br><span class="fw-normal">&lt;576px</span></th>
            <th scope="col">sm<br><span class="fw-normal">≥576px</span></th>
            <th scope="col">md<br><span class="fw-normal">≥768px</span></th>
            <th scope="col">lg<br><span class="fw-normal">≥1024px</span></th>
            <th scope="col">xl<br><span class="fw-normal">≥1280px</span></th>
            <th scope="col">2xl<br><span class="fw-normal">≥1536px</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-nowrap" scope="row">容器 <code class="fw-normal">max-width</code></th>
            <td>无（自动）</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
            <td>1440px</td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">类前缀</th>
            <td><code>.col-</code></td>
            <td><code>.sm:col-</code></td>
            <td><code>.md:col-</code></td>
            <td><code>.lg:col-</code></td>
            <td><code>.xl:col-</code></td>
            <td><code>.2xl:col-</code></td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">列数</th>
            <td colspan="6">12</td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">间距宽度</th>
            <td colspan="6">1.5rem（左右各 .75rem）</td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">自定义间距</th>
            <td colspan="6"><a href="/docs/6.0/layout/gutters">是</a></td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">可嵌套</th>
            <td colspan="6"><a href="#nesting">是</a></td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">列排序</th>
            <td colspan="6"><a href="/docs/6.0/layout/columns#reordering">是</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 id="auto-layout-columns">自动布局列<a class="anchor-link"
        aria-label="链接到本节：自动布局列" href="#auto-layout-columns"> </a></h2>
    <p>利用针对特定断点的列类，无需像 <code>.sm:col-6</code> 这样显式的数字类即可轻松设置列尺寸。
    </p>
    <h3 id="equal-width">等宽<a class="anchor-link" aria-label="链接到本节：等宽"
        href="#equal-width"> </a></h3>
    <p>例如，这里有两个栅格布局，适用于从 <code>xs</code> 到
      <code>2xl</code> 的每台设备和视口。为每个需要的断点添加任意数量的无单位类，每列都将具有相同宽度。
    </p>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              1 of 2
            </div>
            <div class="col">
              2 of 2
            </div>
          </div>
          <div class="row">
            <div class="col">
              1 of 3
            </div>
            <div class="col">
              2 of 3
            </div>
            <div class="col">
              3 of 3
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="setting-one-column-width">设置单列宽度<a class="anchor-link"
        aria-label="链接到本节：设置单列宽度" href="#setting-one-column-width"> </a></h3>
    <p>flexbox 栅格列的自动布局还意味着你可以设置某一列的宽度，而让相邻列围绕它自动调整大小。你可以使用预定义的栅格类（如下所示）、栅格混入或内联宽度。请注意，无论中间列的宽度如何，其他列都会调整大小。</p>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              1 of 3
            </div>
            <div class="col-6">
              2 of 3 (wider)
            </div>
            <div class="col">
              3 of 3
            </div>
          </div>
          <div class="row">
            <div class="col">
              1 of 3
            </div>
            <div class="col-5">
              2 of 3 (wider)
            </div>
            <div class="col">
              3 of 3
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="variable-width-content">可变宽度内容<a class="anchor-link"
        aria-label="链接到本节：可变宽度内容" href="#variable-width-content"> </a></h3>
    <p>使用 <code>{breakpoint}:col-auto</code> 类根据内容的自然宽度来确定列尺寸。</p>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row md:justify-content-center">
            <div class="col lg:col-2">
              1 of 3
            </div>
            <div class="md:col-auto">
              Variable width content
            </div>
            <div class="col lg:col-2">
              3 of 3
            </div>
          </div>
          <div class="row">
            <div class="col">
              1 of 3
            </div>
            <div class="md:col-auto">
              Variable width content
            </div>
            <div class="col lg:col-2">
              3 of 3
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row md:justify-content-center">
    <div class="col lg:col-2">
      1 of 3
    </div>
    <div class="md:col-auto">
      Variable width content
    </div>
    <div class="col lg:col-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="md:col-auto">
      Variable width content
    </div>
    <div class="col lg:col-2">
      3 of 3
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h2 id="responsive-classes">响应式类<a class="anchor-link"
        aria-label="链接到本节：响应式类" href="#responsive-classes"> </a></h2>
    <p>Bootstrap 的栅格包含六个层级的预定义类，用于构建复杂的响应式布局。你可以随心所欲地在超小、小、中、大或超大设备上自定义列的尺寸。</p>
    <h3 id="all-breakpoints">所有断点<a class="anchor-link" aria-label="链接到本节：所有断点"
        href="#all-breakpoints"> </a></h3>
    <p>对于从最小设备到最大设备都相同的栅格，使用 <code>.col</code> 和
      <code>.col-*</code> 类。当你需要特定尺寸的列时指定数字类；否则，可以随意使用 <code>.col</code>。
    </p>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
          </div>
          <div class="row">
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="stacked-to-horizontal">从堆叠到水平排列<a class="anchor-link"
        aria-label="链接到本节：从堆叠到水平排列" href="#stacked-to-horizontal"> </a></h3>
    <p>使用一组 <code>.sm:col-*</code> 类，你可以创建一个基础栅格系统，它最初是堆叠的，并在小断点（<code>sm</code>）处变为水平排列。</p>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="sm:col-8">sm:col-8</div>
            <div class="sm:col-4">sm:col-4</div>
          </div>
          <div class="row">
            <div class="sm:col">sm:col</div>
            <div class="sm:col">sm:col</div>
            <div class="sm:col">sm:col</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="sm:col-8">sm:col-8</div>
    <div class="sm:col-4">sm:col-4</div>
  </div>
  <div class="row">
    <div class="sm:col">sm:col</div>
    <div class="sm:col">sm:col</div>
    <div class="sm:col">sm:col</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="mix-and-match">混合搭配<a class="anchor-link" aria-label="链接到本节：混合搭配"
        href="#mix-and-match"> </a></h3>
    <p>不想让列在某些栅格层级简单地堆叠？根据需要为每个层级使用不同类的组合。查看下面的示例，更好地了解其运作方式。</p>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <div class="row">
            <div class="md:col-8">.md:col-8</div>
            <div class="col-6 md:col-4">.col-6 .md:col-4</div>
          </div>

          <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
          <div class="row">
            <div class="col-6 md:col-4">.col-6 .md:col-4</div>
            <div class="col-6 md:col-4">.col-6 .md:col-4</div>
            <div class="col-6 md:col-4">.col-6 .md:col-4</div>
          </div>

          <!-- Columns are always 50% wide, on mobile and desktop -->
          <div class="row">
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="md:col-8">.md:col-8</div>
    <div class="col-6 md:col-4">.col-6 .md:col-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 md:col-4">.col-6 .md:col-4</div>
    <div class="col-6 md:col-4">.col-6 .md:col-4</div>
    <div class="col-6 md:col-4">.col-6 .md:col-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="row-columns">行内列数<a class="anchor-link" aria-label="链接到本节：行内列数"
        href="#row-columns"> </a></h3>
    <p>使用响应式 <code>.row-cols-*</code> 类快速设置最能渲染内容和布局的列数。普通的 <code>.col-*</code> 类应用于各个列（例如，
      <code>.md:col-4</code>），而行内列数类作为快捷方式设置在父级 <code>.row</code> 上。使用
      <code>.row-cols-auto</code> 可以让列获得其自然宽度。
    </p>
    <p>使用这些行内列数类快速创建基础栅格布局或控制卡片布局。</p>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row row-cols-2">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row row-cols-2">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row row-cols-3">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row row-cols-3">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row row-cols-auto">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row row-cols-auto">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row row-cols-4">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row row-cols-4">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col-6">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col-6">Column</div>
    <div class="col">Column</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row row-cols-1 sm:row-cols-2 md:row-cols-4">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row row-cols-1 sm:row-cols-2 md:row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>你也可以使用配套的 Sass 混入 <code>row-cols()</code>：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`.element {
  // Three columns to start
  @include row-cols(3);

  // Five columns from medium breakpoint up
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}`' lang="scss"></CodeHighlight>
    </div>
    <h2 id="nesting">嵌套<a class="anchor-link" aria-label="链接到本节：嵌套" href="#nesting"> </a>
    </h2>
    <p>要使用默认栅格嵌套内容，请在现有 <code>.sm:col-*</code> 列中添加新的 <code>.row</code> 和一组 <code>.sm:col-*</code>
      列。嵌套行应包含一组加起来不超过 12 的列（不要求使用全部 12 个可用列）。</p>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="sm:col-3">
              Level 1: .sm:col-3
            </div>
            <div class="sm:col-9">
              <div class="row">
                <div class="col-8 sm:col-6">
                  Level 2: .col-8 .sm:col-6
                </div>
                <div class="col-4 sm:col-6">
                  Level 2: .col-4 .sm:col-6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="sm:col-3">
      Level 1: .sm:col-3
    </div>
    <div class="sm:col-9">
      <div class="row">
        <div class="col-8 sm:col-6">
          Level 2: .col-8 .sm:col-6
        </div>
        <div class="col-4 sm:col-6">
          Level 2: .col-4 .sm:col-6
        </div>
      </div>
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h2 id="css">CSS<a class="anchor-link" aria-label="链接到本节：CSS" href="#css"> </a></h2>
    <p>使用 Bootstrap 的源 Sass 文件时，你可以选择使用 Sass 变量和混入来创建自定义的、语义化的、响应式的页面布局。我们的预定义栅格类使用相同的这些变量和混入，提供了一整套即用型类，用于快速构建响应式布局。</p>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" aria-label="链接到本节：Sass 变量"
        href="#sass-variables"> </a></h3>
    <p>变量和映射决定了列数、水平和垂直间距大小，以及开始浮动列的媒体查询点。我们使用它们来生成上面记录的预定义栅格类，以及下面列出的自定义混入。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`$grid-columns:    12;
$grid-gutter-x:   1.5rem;
$grid-gutter-y:   0;
$grid-row-columns: 6;`' lang="scss"></CodeHighlight>
    </div>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
);`' lang="scss"></CodeHighlight>
    </div>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
);`' lang="scss" label="scss/_config.scss"></CodeHighlight>
    </div>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`$container-max-widths: ();
// stylelint-disable-next-line scss/dollar-variable-default
$container-max-widths: defaults(
  (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1200px,
    2xl: 1440px
  ),
  $container-max-widths
);`' lang="scss" label="scss/_config.scss"></CodeHighlight>
    </div>
    <h3 id="sass-mixins">Sass 混入<a class="anchor-link" aria-label="链接到本节：Sass 混入"
        href="#sass-mixins"> </a></h3>
    <p>混入与栅格变量结合使用，为各个栅格列生成语义化的 CSS。
    </p>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`// Creates a wrapper for a series of columns
@include make-row(); // default values for both horizontal and vertical gutters
@include make-row(2rem); // 2rem for horizontal gutters and default value for vertical gutters
@include make-row(2rem, 1rem); // 2rem for horizontal gutters and 1rem for vertical gutters
@include make-row($gutter-y: 1rem); // default value for horizontal gutters and 1rem for vertical gutters

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();

// Without optional size values, the mixin will create equal columns (similar to using .col)
@include make-col();
@include make-col($size, $columns: $grid-columns);

// Offset with margins
@include make-col-offset($size, $columns: $grid-columns);`' lang="scss"></CodeHighlight>
    </div>
    <h3 id="example-usage">用法示例<a class="anchor-link" aria-label="链接到本节：用法示例"
        href="#example-usage"> </a></h3>
    <p>你可以将变量修改为自己的自定义值，或者直接使用混入的默认值。下面是一个使用默认设置创建两列布局并在其间留有间隙的示例。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`.example-container {
  @include make-container();
  // Make sure to define this width after the mixin to override
  // \`width: 100%\` generated by \`make-container()\`
  width: 800px;
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}`' lang="scss"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="example-container">
          <div class="example-row">
            <div class="example-content-main">Main content</div>
            <div class="example-content-secondary">Secondary content</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main content</div>
    <div class="example-content-secondary">Secondary content</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h2 id="customizing-the-grid">自定义栅格<a class="anchor-link"
        aria-label="链接到本节：自定义栅格" href="#customizing-the-grid"> </a></h2>
    <p>使用我们内置的栅格 Sass 变量和映射，可以完全自定义预定义的栅格类。更改层级数量、媒体查询尺寸和容器宽度——然后重新编译。</p>
    <h3 id="columns-and-gutters">列与间距<a class="anchor-link"
        aria-label="链接到本节：列与间距" href="#columns-and-gutters"> </a></h3>
    <p>栅格列数可以通过 Sass 变量修改。<code>$grid-columns</code> 用于生成每个单独列的宽度（百分比）。<code>$grid-gutter-x</code> 和 <code>$grid-gutter-y</code>
      设置水平和垂直间距大小。<code>$grid-row-columns</code> 用于设置 <code>.row-cols-*</code> 的最大列数，超过此限制的任何数字都将被忽略。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`$grid-columns: 12 !default;
$grid-gutter-x: 1.5rem !default;
$grid-gutter-y: 0 !default;
$grid-row-columns: 6 !default;`' lang="scss"></CodeHighlight>
    </div>
    <h3 id="grid-tiers">栅格层级<a class="anchor-link" aria-label="链接到本节：栅格层级"
        href="#grid-tiers"> </a></h3>
    <p>除了列本身之外，你还可以自定义栅格层级的数量。如果你只想要四个栅格层级，可以将 <code>$breakpoints</code> 和 <code>$container-max-widths</code> 更新为类似这样的内容：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`$breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);`' lang="scss"></CodeHighlight>
    </div>
    <p>对 Sass 变量或映射进行任何更改时，你需要保存更改并重新编译。这样做将输出一套全新的预定义栅格类，用于列宽、偏移和排序。响应式可见性工具类也将更新为使用自定义断点。请确保以
      <code>px</code>（而不是 <code>rem</code>、<code>em</code> 或 <code>%</code>）设置栅格值。
    </p>

    <nav class="docs-links-nav py-9">
      <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/containers/"
          class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
          <div class="fg-3">← 上一页</div>
          <div class="fw-semibold">容器</div>
          <div class="fg-3">布局</div>
        </a><a href="/docs/6.0/layout/columns/" class="d-flex flex-column gap-3 text-decoration-none flex-grow-1"
          rel="next">
          <div class="fg-3">下一页 →</div>
          <div class="fw-semibold">列</div>
          <div class="fg-3">布局</div>
        </a></div>
    </nav>
  </div>
</template>