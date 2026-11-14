<template>
  <article class="bd-content" data-pagefind-body>
    <h1>间距（Gutters）</h1>
    <p class="lead">间距是列与列之间的内边距，用于在 Bootstrap 网格系统中以响应式的方式分隔和对齐内容。</p>

    <h2 id="how-they-work">工作原理<a class="anchor-link" href="#how-they-work" aria-label="工作原理链接"></a></h2>
    <ul>
      <li>
        <p>
          <strong>间距是列内容之间的空隙，由水平 <code>padding</code> 创建。</strong> 我们在每一列上设置 <code>padding-right</code> 和 <code>padding-left</code>，并在每一行的开头和结尾使用负 <code>margin</code> 来抵消它，从而对齐内容。
        </p>
      </li>
      <li>
        <p>
          <strong>间距的起始宽度为 <code>1.5rem</code>（<code>24px</code>）。</strong> 这使得我们的网格可以与 <a href="/utilities/spacing">内边距和外边距间隔</a> 刻度相匹配。
        </p>
      </li>
      <li>
        <p><strong>间距可以按响应式进行调整。</strong> 使用特定断点的间距类来修改水平间距、垂直间距以及所有间距。</p>
      </li>
    </ul>
    <h2 id="horizontal-gutters">水平间距<a class="anchor-link" href="#horizontal-gutters" aria-label="水平间距链接"></a></h2>
    <p>可以使用 <code>.gx-*</code> 类来控制水平间距的宽度。如果使用了较大的间距，可能还需要使用匹配的内边距工具类来调整父级 <code>.container</code> 或 <code>.container-fluid</code>，以避免不必要的溢出。例如，在下面的示例中，我们使用 <code>.px-4</code> 增加了内边距：</p>
    <Example
      class="bd-example-cols"
      code='<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>'
    />
    <p>另一种解决方案是在 <code>.row</code> 外层添加一个带有 <code>.overflow-hidden</code> 类的包裹元素：</p>
    <Example
      class="bd-example-cols"
      code='<div class="container overflow-hidden text-center">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>'
    />
    <h2 id="vertical-gutters">垂直间距<a class="anchor-link" href="#vertical-gutters" aria-label="垂直间距链接"></a></h2>
    <p>当列换行到新的一行时，可以使用 <code>.gy-*</code> 类来控制行内的垂直间距宽度。与水平间距类似，垂直间距可能会导致页面底部的 <code>.row</code> 下方出现一些溢出。如果发生这种情况，请为 <code>.row</code> 添加一个带有 <code>.overflow-hidden</code> 类的包裹元素：</p>
    <Example
      class="bd-example-cols"
      code='<div class="container overflow-hidden text-center">
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
</div>'
    />
    <h2 id="horizontal-vertical-gutters">水平与垂直间距<a class="anchor-link" href="#horizontal-vertical-gutters" aria-label="水平与垂直间距链接"></a></h2>
    <p>使用 <code>.g-*</code> 类来控制水平和垂直网格间距。在下面的示例中，我们使用了较小的间距宽度，因此不需要 <code>.overflow-hidden</code> 包裹类。</p>
    <Example
      class="bd-example-cols"
      code='<div class="container text-center">
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
</div>'
    />
    <h2 id="row-columns-gutters">行内列间距<a class="anchor-link" href="#row-columns-gutters" aria-label="行内列间距链接"></a></h2>
    <p>间距类也可以添加到 <a href="/layout/grid#row-columns">行内列（row columns）</a> 上。在下面的示例中，我们使用了响应式行内列和响应式间距类。</p>
    <Example
      class="bd-example-cols"
      code='<div class="container text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
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
</div>'
    />
    <h2 id="no-gutters">无间距<a class="anchor-link" href="#no-gutters" aria-label="无间距链接"></a></h2>
    <p>使用 <code>.g-0</code> 可以移除预定义网格类中列与列之间的间距。这会移除 <code>.row</code> 上的负 <code>margin</code> 以及所有直接子列上的水平 <code>padding</code>。</p>
    <p><strong>需要边到边的设计？</strong> 去掉父级 <code>.container</code> 或 <code>.container-fluid</code>，并为 <code>.row</code> 添加 <code>.mx-0</code> 以防止溢出。</p>
    <p>实际效果如下。请注意，你仍然可以将其与所有其他预定义网格类一起使用（包括列宽、响应式层级、重新排序等）。</p>
    <Example
      class="bd-example-row"
      code='<div class="row g-0 text-center">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>'
    />
    <h2 id="change-the-gutters">修改间距<a class="anchor-link" href="#change-the-gutters" aria-label="修改间距链接"></a></h2>
    <p>这些类基于 <code>$gutters</code> Sass map 构建，它继承自 <code>$spacers</code> Sass map。</p>
    <CodeWrapper
      code="$grid-gutter-width: 1.5rem;
$gutters: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);
"
      lang="scss"
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#how-they-work">工作原理</a></li>
      <li><a href="#horizontal-gutters">水平间距</a></li>
      <li><a href="#vertical-gutters">垂直间距</a></li>
      <li><a href="#horizontal-vertical-gutters">水平与垂直间距</a></li>
      <li><a href="#row-columns-gutters">行内列间距</a></li>
      <li><a href="#no-gutters">无间距</a></li>
      <li>
        <a href="#change-the-gutters">修改间距</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
