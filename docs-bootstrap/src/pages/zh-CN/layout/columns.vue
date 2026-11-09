<template>
  <article class="bd-content">
    <h1>列</h1>
    <p>了解如何借助我们的 flexbox 网格系统，使用少量选项来修改列的对齐、排序和偏移。此外，了解如何使用列类来管理非网格元素的宽度。</p>

    <Callout>
      <p><strong>注意！</strong> 在深入了解如何修改和自定义网格列之前，请务必先<a href="/layout/grid">阅读网格页面</a>。</p>
    </Callout>
    <h2 id="how-they-work">工作原理<a class="anchor-link" href="#how-they-work" aria-label="工作原理链接"></a></h2>
    <ul>
      <li>
        <p><strong>列构建在网格的 flexbox 架构之上。</strong> Flexbox 意味着我们可以选择修改单个列，以及<a href="/layout/grid#row-columns">在行级别修改列组</a>。你可以选择列如何增长、收缩或以其他方式变化。</p>
      </li>
      <li>
        <p><strong>构建网格布局时，所有内容都放在列中。</strong> Bootstrap 网格的层级从<a href="/layout/containers">容器</a>到行、到列、再到你的内容。在极少数情况下，你可能会合并内容和列，但请注意这可能会产生意外的后果。</p>
      </li>
      <li>
        <p><strong>Bootstrap 包含预定义的类，用于创建快速的响应式布局。</strong> 借助<a href="/layout/breakpoints">六个断点</a>以及每个网格层级十二列，我们已经为你构建了数十个类，用于创建所需的布局。如果你愿意，可以通过 Sass 禁用它们。</p>
      </li>
    </ul>
    <h2 id="alignment">对齐<a class="anchor-link" href="#alignment" aria-label="对齐链接"></a></h2>
    <p>使用 flexbox 对齐工具类来垂直和水平对齐列。</p>
    <h3 id="vertical-alignment">垂直对齐<a class="anchor-link" href="#vertical-alignment" aria-label="垂直对齐链接"></a></h3>
    <p>使用任意响应式 <code>align-items-*</code> 类来更改垂直对齐方式。</p>
    <Example
      class="bd-example-row bd-example-row-flex-cols"
      code='<div class="container text-center">
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
</div>'
    />
    <Example
      class="bd-example-row bd-example-row-flex-cols"
      code='<div class="container text-center">
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
</div>'
    />
    <Example
      class="bd-example-row bd-example-row-flex-cols"
      code='<div class="container text-center">
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
</div>'
    />
    <p>
      或者，使用任意响应式
      <code>.align-self-*</code> 类来单独更改每一列的对齐方式。
    </p>
    <Example
      class="bd-example-row bd-example-row-flex-cols"
      code='<div class="container text-center">
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
</div>'
    />
    <h3 id="horizontal-alignment">水平对齐<a class="anchor-link" href="#horizontal-alignment" aria-label="水平对齐链接"></a></h3>
    <p>使用任意响应式 <code>justify-content-*</code> 类来更改水平对齐方式。</p>
    <Example
      class="bd-example-row"
      code='<div class="container text-center">
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
</div>'
    />
    <h3 id="column-wrapping">列换行<a class="anchor-link" href="#column-wrapping" aria-label="列换行链接"></a></h3>
    <p>如果在一行中放置了超过 12 列，每组多余的列将作为一个整体换行到新的一行。</p>
    <Example
      class="bd-example-row"
      code='<div class="container">
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>'
    />
    <h3 id="column-breaks">列换行符<a class="anchor-link" href="#column-breaks" aria-label="列换行符链接"></a></h3>
    <p>
      在 flexbox 中让列换行到新的一行需要一个小技巧：在你想让列换行到新行的位置添加一个 <code>width: 100%</code> 的元素。通常这是通过多个 <code>.row</code> 来实现的，但并非每种实现方式都能满足这一点。
    </p>
    <Example
      class="bd-example-row"
      code='<div class="container text-center">
  <div class="row">
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  </div>
</div>'
    />
    <p>
      你也可以使用我们的
     <a href="/utilities/display">响应式显示工具类</a>在特定断点处应用这种换行。
    </p>
    <Example
      class="bd-example-row"
      code='<div class="container text-center">
  <div class="row">
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  </div>
</div>'
    />
    <h2 id="reordering">重新排序<a class="anchor-link" href="#reordering" aria-label="重新排序链接"></a></h2>
    <h3 id="order-classes">排序类<a class="anchor-link" href="#order-classes" aria-label="排序类链接"></a></h3>
    <p>使用 <code>.order-</code> 类来控制内容的<strong>视觉顺序</strong>。这些类是响应式的，因此你可以按断点设置 <code>order</code>（例如 <code>.order-1.order-md-2</code>）。在所有六个网格层级上都支持 <code>1</code> 到 <code>5</code>。</p>
    <Example
      class="bd-example-row"
      code='<div class="container text-center">
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
</div>'
    />
    <p>此外还有响应式的 <code>.order-first</code> 和 <code>.order-last</code> 类，它们分别通过应用 <code>order: -1</code> 和 <code>order: 6</code> 来更改元素的 <code>order</code>。这些类也可以根据需要与带数字的 <code>.order-*</code> 类混合使用。</p>
    <Example
      class="bd-example-row"
      code='<div class="container text-center">
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
</div>'
    />
    <p>如果你需要更多的 <code>.order-*</code> 类，可以通过修改我们的 <code>$utilities</code> Sass map 来添加新的类。详情请阅读<a href="/customize/sass#maps-and-loops">我们的 Sass map 与循环文档</a>或<a href="/utilities/api#modify-utilities">修改工具类文档</a>。</p>
    <CodeWrapper
      code='$utilities: map-merge(
  $utilities,
  (
    "order": map-merge(
      map-get($utilities, "order"),
      (
        values: map-merge(
          map-get(map-get($utilities, "order"), "values"),
          (
            6: 6, // Add a new `.order-{breakpoint}-6` utility
            last: 7 // Change the `.order-{breakpoint}-last` utility to use the next number
          )
        ),
      ),
    ),
  )
);
'
      lang="scss"
    />
    <h3 id="offsetting-columns">偏移列<a class="anchor-link" href="#offsetting-columns" aria-label="偏移列链接"></a></h3>
    <p>你可以通过两种方式偏移网格列：我们的响应式 <code>.offset-</code> 网格类和我们的<a href="/utilities/spacing">外边距工具类</a>。网格类的尺寸与列相匹配，而外边距则更适合宽度可变的快速布局。</p>
    <h4 id="offset-classes">偏移类</h4>
    <p>使用 <code>.offset-md-*</code> 类将列向右移动。这些类会将列的左边距增加 <code>*</code> 列。例如，<code>.offset-md-4</code> 将 <code>.col-md-4</code> 向右移动四列。</p>
    <Example
      class="bd-example-row"
      code='<div class="container text-center">
        <div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
        </div>
        <div class="row">
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
        </div>
      </div>'
    />
    <p>
      除了在响应式断点处清除列之外，你可能还需要重置偏移量。请在
     <a href="https://getbootstrap.com/docs/5.3/examples/grid/">网格示例</a>中查看其实际效果。
    </p>
    <Example
      class="bd-example-row"
      code='<div class="container text-center">
        <div class="row">
          <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
          <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
        </div>
      </div>'
    />
    <h4 id="margin-utilities">外边距工具类</h4>
    <p>从 v4 开始转向 flexbox 后，你可以使用像 <code>.me-auto</code> 这样的外边距工具类来让相邻列相互远离。</p>
    <Example
      class="bd-example-row"
      code='<div class="container text-center">
        <div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
        </div>
        <div class="row">
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
        </div>
        <div class="row">
          <div class="col-auto me-auto">.col-auto .me-auto</div>
          <div class="col-auto">.col-auto</div>
        </div>
      </div>'
    />
    <h2 id="standalone-column-classes">独立列类<a class="anchor-link" href="#standalone-column-classes" aria-label="独立列类链接"></a></h2>
    <p><code>.col-*</code> 类也可以在 <code>.row</code> 之外使用，为元素指定特定的宽度。当列类作为行的非直接子元素使用时，内边距将被省略。</p>
    <Example
      class="bd-example-row"
      code='<div class="col-3 p-3 mb-2">
  .col-3: width of 25%
</div>

<div class="col-sm-9 p-3">
  .col-sm-9: width of 75% above sm breakpoint
</div>'
    />
    <p>
      这些类可以与工具类一起使用，以创建响应式浮动图片。如果文本较短，请确保将内容包裹在
     <a href="/helpers/clearfix"><code>.clearfix</code></a>包裹元素中，以清除浮动。
    </p>
    <ExampleCustom
      code='<div class="clearfix">
  <img src="..." class="col-md-6 float-md-end mb-3 ms-md-3" alt="...">

  <p>
    A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there’s none of that here.
  </p>
</div>'
    >
      <div class="clearfix">
        <Placeholder width="100%" height="210" class="col-md-6 float-md-end mb-3 ms-md-3" text="响应式浮动图片" />

        <p>一段占位文本。我们在这里使用它来展示 clearfix 类的用法。我们在这里添加了许多无意义的短语，以演示列在此处如何与浮动图片相互作用。</p>

        <p>如你所见，段落优雅地围绕浮动图片换行。现在想象一下，如果这里有真实的内容，而不是这段枯燥的占位文本，效果会怎样。这段文本啰嗦冗长，却并未传达任何具体的信息。它只是占据了空间，实际上不应该被阅读。</p>

        <p>然而你仍在这里，坚持阅读这段占位文本，希望获得更多的见解，或者隐藏在内容中的彩蛋。也许是个笑话。不幸的是，这里什么也没有。</p>
      </div>
    </ExampleCustom>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#how-they-work">工作原理</a></li>
      <li>
       <a href="#alignment">对齐</a>
        <ul>
          <li><a href="#vertical-alignment">垂直对齐</a></li>
          <li><a href="#horizontal-alignment">水平对齐</a></li>
          <li><a href="#column-wrapping">列换行</a></li>
          <li><a href="#column-breaks">列换行符</a></li>
        </ul>
      </li>
      <li>
       <a href="#reordering">重新排序</a>
        <ul>
          <li><a href="#order-classes">排序类</a></li>
          <li><a href="#offsetting-columns">偏移列</a></li>
        </ul>
      </li>
      <li>
       <a href="#standalone-column-classes">独立列类</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
