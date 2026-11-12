<template>
  <article class="bd-content" data-pagefind-body>
    <h1>CSS Grid</h1>
    <p class="lead">通过示例和代码片段，了解如何启用、使用和自定义我们基于 CSS Grid 构建的备用布局系统。</p>

    <p>Bootstrap 的默认网格系统代表了十多年 CSS 布局技术的结晶，经过了数百万人的反复验证。但它的创建过程并没有包含许多现代 CSS 特性和技术，比如我们在浏览器中看到的新的 CSS Grid。</p>
    <Callout type="warning">
      <p><strong>注意——从 v5.1.0 起，我们的 CSS Grid 系统是实验性的，需要主动启用！</strong> 我们在文档的 CSS 中包含了它，以便向你演示，但默认是禁用的。继续阅读，了解如何在你的项目中启用它。</p>
    </Callout>
    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>在 Bootstrap 5 中，我们新增了一个选项，可以启用一个独立的、基于 CSS Grid 构建的网格系统，并带有 Bootstrap 的特色。你仍然可以使用随取随用的类来构建响应式布局，但底层采用了不同的实现思路。</p>
    <ul>
      <li>
        <p><strong>CSS Grid 需要主动启用。</strong> 通过设置 <code>$enable-grid-classes: false</code> 禁用默认网格系统，并通过设置 <code>$enable-cssgrid: true</code> 启用 CSS Grid。然后重新编译你的 Sass。</p>
      </li>
      <li>
        <p>
          <strong>将 <code>.row</code> 替换为 <code>.grid</code>。</strong> <code>.grid</code> 类会设置 <code>display: grid</code>，并创建一个 <code>grid-template</code>，你可以在此基础上用 HTML 进行构建。
        </p>
      </li>
      <li>
        <p>
          <strong>将 <code>.col-*</code> 类替换为 <code>.g-col-*</code> 类。</strong> 这是因为我们的 CSS Grid 列使用 <code>grid-column</code> 属性而非 <code>width</code>。
        </p>
      </li>
      <li>
        <p><strong>列数和间距大小通过 CSS 变量设置。</strong> 在父级 <code>.grid</code> 上使用 <code>--bs-columns</code> 和 <code>--bs-gap</code> 设置这些变量，并可通过内联样式或样式表随心自定义。</p>
      </li>
    </ul>
    <p>未来，由于 <code>gap</code> 属性在 flexbox 上已获得几乎全面的浏览器支持，Bootstrap 很可能会转向混合方案。</p>
    <h2 id="key-differences">主要区别<a class="anchor-link" href="#key-differences" aria-label="主要区别链接"></a></h2>
    <p>与默认网格系统相比：</p>
    <ul>
      <li><p>Flex 工具类对 CSS Grid 列的影响方式不同。</p></li>
      <li>
        <p>Gap 取代了间距（gutters）。<code>gap</code> 属性取代了默认网格系统中的水平 <code>padding</code>，其作用更像 <code>margin</code>。</p>
      </li>
      <li>
        <p>因此，与 <code>.row</code> 不同，<code>.grid</code> 没有负外边距，并且不能使用外边距工具类来更改网格间距。网格 gap 默认同时应用于水平和垂直方向。详情请参阅<a href="#customizing">自定义部分</a>。</p>
      </li>
      <li>
        <p>
          内联样式和自定义样式应被视为修饰类的替代品（例如，
          <code>style=&quot;--bs-columns: 3;&quot;</code> 与 <code>class=&quot;row-cols-3&quot;</code>）。
        </p>
      </li>
      <li>
        <p>
          嵌套的工作方式类似，但可能需要你在每个嵌套的
          <code>.grid</code> 实例上重置列数。详情请参阅<a href="#nesting">嵌套部分</a>。
        </p>
      </li>
    </ul>
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <h3 id="three-columns">三列<a class="anchor-link" href="#three-columns" aria-label="三列链接"></a></h3>
    <p>
      使用
      <code>.g-col-4</code> 类可以在所有视口和设备上创建三个等宽的列。添加<a href="#responsive">响应式类</a>以按视口尺寸更改布局。
    </p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>'
    />
    <h3 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="响应式链接"></a></h3>
    <p>使用响应式类在不同视口间调整布局。这里我们在最窄的视口上从两列开始，然后在中等及以上视口上扩展为三列。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center">
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
  <div class="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
</div>'
    />
    <p>与之相比，下面是所有视口下均为两列的布局。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>'
    />
    <h2 id="wrapping">换行<a class="anchor-link" href="#wrapping" aria-label="换行链接"></a></h2>
    <p>
      当水平方向没有更多空间时，网格项会自动换行到下一行。请注意，
      <code>gap</code> 同时应用于网格项之间的水平和垂直间隙。
    </p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>'
    />
    <h2 id="starts">起始位置<a class="anchor-link" href="#starts" aria-label="起始位置链接"></a></h2>
    <p>
      起始位置类（Start classes）旨在取代默认网格的偏移类，但它们并不完全相同。CSS Grid 通过样式创建网格模板，告诉浏览器“从此列开始”和“到此列结束”。这些属性分别是 <code>grid-column-start</code> 和 <code>grid-column-end</code>。起始位置类正是前者的简写。将它们与列类搭配使用，即可按需调整列的大小和对齐方式。起始位置类从 <code>1</code> 开始，因为对这些属性来说 <code>0</code> 是无效值。
    </p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center">
  <div class="g-col-3 g-start-2">.g-col-3 .g-start-2</div>
  <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
</div>'
    />
    <h2 id="auto-columns">自动列<a class="anchor-link" href="#auto-columns" aria-label="自动列链接"></a></h2>
    <p>当网格项（<code>.grid</code> 的直接子元素）上没有任何类时，每个网格项将自动调整尺寸为一列。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center">
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
</div>'
    />
    <p>此行为可以与网格列类混合使用。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>'
    />
    <h2 id="nesting">嵌套<a class="anchor-link" href="#nesting" aria-label="嵌套链接"></a></h2>
    <p>与我们的默认网格系统类似，我们的 CSS Grid 支持轻松嵌套 <code>.grid</code>。然而，与默认网格不同，此网格会继承行、列和间隙的变化。请看下面的示例：</p>
    <ul>
      <li>我们通过局部 CSS 变量覆盖默认列数：<code>--bs-columns: 3</code>。</li>
      <li>在第一个自动列中，列数被继承，每列占可用宽度的三分之一。</li>
      <li>在第二个自动列中，我们将嵌套 <code>.grid</code> 的列数重置为 12（我们的默认值）。</li>
      <li>第三个自动列没有嵌套内容。</li>
    </ul>
    <p>在实践中，与我们的默认网格系统相比，这可以实现更复杂、更定制化的布局。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center overflow-x-auto" style="--bs-columns: 3;">
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
</div>'
    />
    <h2 id="customizing">自定义<a class="anchor-link" href="#customizing" aria-label="自定义链接"></a></h2>
    <p>使用局部 CSS 变量自定义列数、行数和间隙宽度。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>变量</th>
            <th>回退值</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--bs-rows</code></td>
            <td><code>1</code></td>
            <td>网格模板中的行数</td>
          </tr>
          <tr>
            <td><code>--bs-columns</code></td>
            <td><code>12</code></td>
            <td>网格模板中的列数</td>
          </tr>
          <tr>
            <td><code>--bs-gap</code></td>
            <td><code>1.5rem</code></td>
            <td>列之间的间隙大小（垂直和水平）</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      这些 CSS 变量没有默认值；它们会应用回退值，在提供局部实例之前一直<em>使用</em>这些回退值。例如，我们的 CSS Grid 行使用 <code>var(--bs-rows, 1)</code>，由于 <code>--bs-rows</code> 尚未在任何地方设置，因此该值会被忽略。一旦设置了它，<code>.grid</code> 实例就会使用该值，而不是回退值 <code>1</code>。
    </p>
    <h3 id="no-grid-classes">无网格类<a class="anchor-link" href="#no-grid-classes" aria-label="无网格类链接"></a></h3>
    <p><code>.grid</code> 的直接子元素即为网格项，因此无需显式添加 <code>.g-col</code> 类即可设置其尺寸。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center" style="--bs-columns: 3;">
  <div>Auto-column</div>
  <div>Auto-column</div>
  <div>Auto-column</div>
</div>'
    />
    <h3 id="columns-and-gaps">列与间隙<a class="anchor-link" href="#columns-and-gaps" aria-label="列与间隙链接"></a></h3>
    <p>调整列数和间隙。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center" style="--bs-columns: 4; --bs-gap: 5rem;">
  <div class="g-col-2">.g-col-2</div>
  <div class="g-col-2">.g-col-2</div>
</div>'
    /><Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center" style="--bs-columns: 10; --bs-gap: 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-4">.g-col-4</div>
</div>'
    />
    <h3 id="adding-rows">添加行<a class="anchor-link" href="#adding-rows" aria-label="添加行链接"></a></h3>
    <p>添加更多行并更改列的位置：</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center" style="--bs-rows: 3; --bs-columns: 3;">
  <div>Auto-column</div>
  <div class="g-start-2" style="grid-row: 2">Auto-column</div>
  <div class="g-start-3" style="grid-row: 3">Auto-column</div>
</div>'
    />
    <h3 id="gaps">间隙<a class="anchor-link" href="#gaps" aria-label="间隙链接"></a></h3>
    <p>仅通过修改 <code>row-gap</code> 来更改垂直间隙。请注意，我们在 <code>.grid</code> 上使用 <code>gap</code>，但可以根据需要修改 <code>row-gap</code> 和 <code>column-gap</code>。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center" style="row-gap: 0;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>'
    />
    <p>因此，你可以设置不同的垂直和水平 <code>gap</code>，它可以采用单个值（所有方向）或一对值（垂直和水平）。这可以通过为 <code>gap</code> 设置内联样式来实现，也可以使用我们的 <code>--bs-gap</code> CSS 变量。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center" style="--bs-gap: .25rem 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>'
    />
    <h2 id="sass">Sass<a class="anchor-link" href="#sass" aria-label="Sass 链接"></a></h2>
    <p>
      CSS Grid 的一个限制是，我们的默认类仍然由两个 Sass 变量生成：
      <code>$grid-columns</code> 和 <code>$grid-gutter-width</code>。这实际上预先决定了编译后的 CSS 中生成的类数量。这里你有两个选择：
    </p>
    <ul>
      <li>修改这些默认 Sass 变量并重新编译你的 CSS。</li>
      <li>使用内联样式或自定义样式来增强提供的类。</li>
    </ul>
    <p>
      例如，你可以增加列数并更改间隙大小，然后混合使用内联样式和预定义的 CSS Grid 列类（例如
      <code>.g-col-4</code>）来设置“列”的尺寸。
    </p>
    <Example
      class="bd-example-cssgrid"
      code='<div class="grid text-center" style="--bs-columns: 18; --bs-gap: .5rem;">
  <div style="grid-column: span 14;">14 columns</div>
  <div class="g-col-4">.g-col-4</div>
</div>'
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#how-it-works">工作原理</a></li>
      <li><a href="#key-differences">主要区别</a></li>
      <li>
       <a href="#examples">示例</a>
        <ul>
          <li><a href="#three-columns">三列</a></li>
          <li><a href="#responsive">响应式</a></li>
        </ul>
      </li>
      <li><a href="#wrapping">换行</a></li>
      <li><a href="#starts">起始位置</a></li>
      <li><a href="#auto-columns">自动列</a></li>
      <li><a href="#nesting">嵌套</a></li>
      <li>
       <a href="#customizing">自定义</a>
        <ul>
          <li><a href="#no-grid-classes">无网格类</a></li>
          <li><a href="#columns-and-gaps">列与间隙</a></li>
          <li><a href="#adding-rows">添加行</a></li>
          <li><a href="#gaps">间隙</a></li>
        </ul>
      </li>
      <li>
       <a href="#sass">Sass</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
