<template>
  <div class="docs-intro">
    <h1>列</h1>
    <p>通过我们基于 flexbox 的网格系统，学习如何使用少量选项来对齐、排序和偏移列，从而修改列。此外，了解如何使用列类来管理非网格元素的宽度。</p>
  </div>
  <div class="docs-toc">
    <nav id="TableOfContents" aria-label="目录">
      <ul>
        <li><a href="#how-they-work">工作原理</a></li>
        <li><a href="#alignment">对齐</a>
          <ul>
            <li><a href="#vertical-alignment">垂直对齐</a></li>
            <li><a href="#horizontal-alignment">水平对齐</a></li>
            <li><a href="#column-wrapping">列换行</a></li>
            <li><a href="#column-breaks">列断行</a></li>
          </ul>
        </li>
        <li><a href="#reordering">重新排序</a>
          <ul>
            <li><a href="#order-classes">排序类</a></li>
            <li><a href="#offsetting-columns">偏移列</a></li>
          </ul>
        </li>
        <li><a href="#standalone-column-classes">独立列类</a></li>
      </ul>
    </nav>
  </div>
  <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents" data-pagefind-body>
    <div class="docs-callout docs-callout-info">
      <p><strong>注意！</strong>在深入了解如何修改和自定义网格列之前，请务必先<a href="/docs/6.0/layout/grid">阅读网格页面</a>。</p>
    </div>
    <h2 id="how-they-work">工作原理<a class="anchor-link" aria-label="链接到此部分：工作原理"
        href="#how-they-work"> </a></h2>
    <ul>
      <li>
        <p><strong>列构建在网格的 flexbox 架构之上。</strong>Flexbox 意味着我们可以选择更改单个列，以及在<a href="/docs/6.0/layout/grid#row-columns">行级别修改列组</a>。你可以选择列如何增长、收缩或以其他方式变化。</p>
      </li>
      <li>
        <p><strong>构建网格布局时，所有内容都放在列中。</strong>Bootstrap 网格的层级结构从<a href="/docs/6.0/layout/containers">容器</a>到行，再到列，最后到你的内容。在极少数情况下，你可以将内容和列合并，但要注意可能会产生意外后果。</p>
      </li>
      <li>
        <p><strong>Bootstrap 包含预定义类，可用于快速创建响应式布局。</strong>借助<a href="/docs/6.0/layout/breakpoints">六个断点</a>和每个网格层级十余个列，我们已经为你构建了数十个类，可用于创建你想要的布局。如果你愿意，可以通过 Sass 禁用此功能。</p>
      </li>
    </ul>
    <h2 id="alignment">对齐<a class="anchor-link" aria-label="链接到此部分：对齐" href="#alignment">
      </a></h2>
    <p>使用 flexbox 对齐工具来垂直和水平对齐列。</p>
    <h3 id="vertical-alignment">垂直对齐<a class="anchor-link"
        aria-label="链接到此部分：垂直对齐" href="#vertical-alignment"> </a></h3>
    <p>使用任意响应式 <code>align-items-*</code> 类来更改垂直对齐方式。</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row docs-example-row-flex-cols">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row docs-example-row-flex-cols">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row docs-example-row-flex-cols">
        <div class="container text-center">
          <div class="row align-items-end">
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row align-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>或者，使用任意响应式 <code>.align-self-*</code> 类单独更改每一列的对齐方式。</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row docs-example-row-flex-cols">
        <div class="container text-center">
          <div class="row">
            <div class="col align-self-start">
              One of three columns
            </div>
            <div class="col align-self-center">
              One of three columns
            </div>
            <div class="col align-self-end">
              One of three columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="horizontal-alignment">水平对齐<a class="anchor-link"
        aria-label="链接到此部分：水平对齐" href="#horizontal-alignment"> </a></h3>
    <p>使用任意响应式 <code>justify-content-*</code> 类来更改水平对齐方式。</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row justify-content-start">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-evenly">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-evenly">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="column-wrapping">列换行<a class="anchor-link" aria-label="链接到此部分：列换行"
        href="#column-wrapping"> </a></h3>
    <p>如果单个行中放置的列超过 12 个，每组额外的列将作为一个整体换行到新行。</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container">
          <div class="row">
            <div class="col-9">.col-9</div>
            <div class="col-4">.col-4<br>由于 9 + 4 = 13 &gt; 12，这个 4 列宽的 div 将作为一个连续单元换行到新行。</div>
            <div class="col-6">.col-6<br>后续列继续沿新行排列。</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container">
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="column-breaks">列断行<a class="anchor-link" aria-label="链接到此部分：列断行"
        href="#column-breaks"> </a></h3>
    <p>在 flexbox 中将列断行到新行需要一个小技巧：在希望列换行到新行的位置添加一个具有 <code>width: 100%</code> 的元素。通常这可以通过多个 <code>.row</code> 来实现，但并非所有实现方法都能考虑到这一点。
    </p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
            <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>

            <!-- Force next columns to break to new line -->
            <div class="w-100"></div>

            <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
            <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
    <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
    <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>你也可以使用我们的<a href="/docs/6.0/utilities/display">响应式显示工具</a>在特定断点处应用此断行。</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
            <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>

            <!-- Force next columns to break to new line at md breakpoint and up -->
            <div class="w-100 d-none md:d-block"></div>

            <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
            <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
    <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="w-100 d-none md:d-block"></div>

    <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
    <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h2 id="reordering">重新排序<a class="anchor-link" aria-label="链接到此部分：重新排序"
        href="#reordering"> </a></h2>
    <h3 id="order-classes">排序类<a class="anchor-link" aria-label="链接到此部分：排序类"
        href="#order-classes"> </a></h3>
    <p>使用 <code>.order-</code> 类来控制内容的<strong>视觉顺序</strong>。这些类是响应式的，因此你可以按断点设置 <code>order</code>（例如 <code>.order-1.md:order-2</code>）。在所有六个网格层级中支持 <code>1</code> 到 <code>5</code>。
    </p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              First in DOM, no order applied
            </div>
            <div class="col order-5">
              Second in DOM, with a larger order
            </div>
            <div class="col order-1">
              Third in DOM, with an order of 1
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col">
      First in DOM, no order applied
    </div>
    <div class="col order-5">
      Second in DOM, with a larger order
    </div>
    <div class="col order-1">
      Third in DOM, with an order of 1
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>还有响应式 <code>.order-first</code> 和 <code>.order-last</code> 类，它们分别通过应用 <code>order: -1</code> 和 <code>order: 6</code> 来更改元素的 <code>order</code>。这些类也可以根据需要与带数字的 <code>.order-*</code> 类混合使用。
    </p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col order-last">
              First in DOM, ordered last
            </div>
            <div class="col">
              Second in DOM, unordered
            </div>
            <div class="col order-first">
              Third in DOM, ordered first
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col order-last">
      First in DOM, ordered last
    </div>
    <div class="col">
      Second in DOM, unordered
    </div>
    <div class="col order-first">
      Third in DOM, ordered first
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>如果你需要更多 <code>.order-*</code> 类，可以通过修改我们的 <code>$utilities</code> Sass 映射来添加新类。<a href="/docs/6.0/customize/sass#maps-and-loops">阅读我们的 Sass 映射和循环文档</a>或<a
        href="/docs/6.0/utilities/api#modify-utilities">我们的修改工具文档</a>了解详情。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`// _my-utilities.scss
@use "sass:map";
@use "bootstrap/scss/config" as *;
@use "bootstrap/scss/utilities";

$utilities: map.merge(
  $utilities,
  (
    "order": map.merge(
      map.get($utilities, "order"),
      (
        values: map.merge(
          map.get(map.get($utilities, "order"), "values"),
          (
            6: 6, // Add a new 、\`.{breakpoint}:order-6\` utility
            last: 7, // Change the \`.{breakpoint}:order-last\` utility to use the next number
          ),
        ),
      ),
    ),
  )
);`' lang="scss"></CodeHighlight>
    </div>
    <p>在 <code>bootstrap/scss/bootstrap</code> 之前加载此 partial。有关完整的加载顺序，请参阅<a
        href="/docs/6.0/utilities/api#modify-utilities">修改工具</a>。</p>
    <h3 id="offsetting-columns">偏移列<a class="anchor-link"
        aria-label="链接到此部分：偏移列" href="#offsetting-columns"> </a></h3>
    <p>你可以通过两种方式偏移网格列：我们的响应式 <code>.offset-</code> 网格类和我们的<a
        href="/docs/6.0/utilities/margin">外边距工具</a>。网格类的大小与列匹配，而外边距更适合偏移宽度可变的快速布局。</p>
    <h4 id="offset-classes">偏移类<a class="anchor-link" aria-label="链接到此部分：偏移类"
        href="#offset-classes"> </a></h4>
    <p>使用 <code>.md:offset-*</code> 类将列向右移动。这些类将列的左边距增加 <code>*</code> 列。例如，<code>.md:offset-4</code> 将 <code>.md:col-4</code> 移动四列。</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="md:col-4">.md:col-4</div>
            <div class="md:col-4 md:offset-4">.md:col-4 .md:offset-4</div>
          </div>
          <div class="row">
            <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
            <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
          </div>
          <div class="row">
            <div class="md:col-6 md:offset-3">.md:col-6 .md:offset-3</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="md:col-4">.md:col-4</div>
    <div class="md:col-4 md:offset-4">.md:col-4 .md:offset-4</div>
  </div>
  <div class="row">
    <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
    <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
  </div>
  <div class="row">
    <div class="md:col-6 md:offset-3">.md:col-6 .md:offset-3</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>除了在响应式断点处清除列之外，你可能还需要重置偏移。在<a href="/docs/6.0/examples/grid/">网格示例</a>中查看实际效果。
    </p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="sm:col-5 md:col-6">.sm:col-5 .md:col-6</div>
            <div class="sm:col-5 sm:offset-2 md:col-6 md:offset-0">.sm:col-5 .sm:offset-2 .md:col-6 .md:offset-0</div>
          </div>
          <div class="row">
            <div class="sm:col-6 md:col-5 lg:col-6">.sm:col-6 .md:col-5 .lg:col-6</div>
            <div class="sm:col-6 md:col-5 md:offset-2 lg:col-6 lg:offset-0">.sm:col-6 .md:col-5 .md:offset-2 .lg:col-6
              .lg:offset-0</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="sm:col-5 md:col-6">.sm:col-5 .md:col-6</div>
    <div class="sm:col-5 sm:offset-2 md:col-6 md:offset-0">.sm:col-5 .sm:offset-2 .md:col-6 .md:offset-0</div>
  </div>
  <div class="row">
    <div class="sm:col-6 md:col-5 lg:col-6">.sm:col-6 .md:col-5 .lg:col-6</div>
    <div class="sm:col-6 md:col-5 md:offset-2 lg:col-6 lg:offset-0">.sm:col-6 .md:col-5 .md:offset-2 .lg:col-6 .lg:offset-0</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h4 id="margin-utilities">外边距工具<a class="anchor-link" aria-label="链接到此部分：外边距工具"
        href="#margin-utilities"> </a></h4>
    <p>随着 v4 转向 flexbox，你可以使用像 <code>.me-auto</code> 这样的外边距工具来强制相邻列彼此远离。</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="md:col-4">.md:col-4</div>
            <div class="md:col-4 ms-auto">.md:col-4 .ms-auto</div>
          </div>
          <div class="row">
            <div class="md:col-3 md:ms-auto">.md:col-3 .md:ms-auto</div>
            <div class="md:col-3 md:ms-auto">.md:col-3 .md:ms-auto</div>
          </div>
          <div class="row">
            <div class="col-auto me-auto">.col-auto .me-auto</div>
            <div class="col-auto">.col-auto</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="md:col-4">.md:col-4</div>
    <div class="md:col-4 ms-auto">.md:col-4 .ms-auto</div>
  </div>
  <div class="row">
    <div class="md:col-3 md:ms-auto">.md:col-3 .md:ms-auto</div>
    <div class="md:col-3 md:ms-auto">.md:col-3 .md:ms-auto</div>
  </div>
  <div class="row">
    <div class="col-auto me-auto">.col-auto .me-auto</div>
    <div class="col-auto">.col-auto</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h2 id="standalone-column-classes">独立列类<a class="anchor-link"
        aria-label="链接到此部分：独立列类" href="#standalone-column-classes"> </a></h2>
    <p><code>.col-*</code> 类也可以在 <code>.row</code> 之外使用，为元素指定特定宽度。当列类作为行的非直接子元素使用时，内边距会被省略。</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="col-3 p-3 mb-2">
          .col-3: width of 25%
        </div>

        <div class="sm:col-9 p-3">
          .sm:col-9: width of 75% above sm breakpoint
        </div>
      </div>
      <CodeHighlight :code='`<div class="col-3 p-3 mb-2">
  .col-3: width of 25%
</div>

<div class="sm:col-9 p-3">
  .sm:col-9: width of 75% above sm breakpoint
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>这些类可以与工具类一起使用，创建响应式浮动图片。如果文本较短，请确保将内容包裹在 <a href="/docs/6.0/utilities/display#clearfix"><code>.d-flow-root</code></a> 包装器中以清除浮动。</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example">
        <div class="d-flow-root">
          <svg aria-label="Placeholder: Responsive floated image"
            class="docs-placeholder-img md:col-6 md:float-end mb-3 md:ms-3" height="210"
            preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-bg-2)"></rect><text x="50%" y="50%" fill="var(--bs-fg-4)"
              dy=".3em">Responsive floated image</text>
          </svg>

          <p>
            A paragraph of placeholder text. We’re using it here to show the use of the d-flow-root utility. We’re
            adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated
            image.
          </p>

          <p>
            As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look
            with some actual content in here, rather than just this boring placeholder text that goes on and on, but
            actually conveys no tangible information at. It simply takes up space and should not really be read.
          </p>

          <p>
            And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights,
            or some hidden easter egg of content. A joke, perhaps. Unfortunately, there’s none of that here.
          </p>
        </div>
      </div>
      <CodeHighlight :code='`<div class="d-flow-root">
  <img src="..." class="md:col-6 md:float-end mb-3 md:ms-3" alt="...">

  <p>
    A paragraph of placeholder text. We’re using it here to show the use of the d-flow-root utility. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there’s none of that here.
  </p>
</div>`' lang="html"></CodeHighlight>
    </div>

    <nav class="docs-links-nav py-9">
      <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/grid/"
          class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
          <div class="fg-3">← 上一页</div>
          <div class="fw-semibold">网格</div>
          <div class="fg-3">布局</div>
        </a><a href="/docs/6.0/layout/gutters/" class="d-flex flex-column gap-3 text-decoration-none flex-grow-1"
          rel="next">
          <div class="fg-3">下一页 →</div>
          <div class="fw-semibold">间隔</div>
          <div class="fg-3">布局</div>
        </a></div>
    </nav>
  </div>
</template>