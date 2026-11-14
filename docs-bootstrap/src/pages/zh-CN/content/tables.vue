<template>
  <article class="bd-content" data-pagefind-body>
    <h1>表格</h1>
    <p class="lead">关于使用 Bootstrap 对表格进行选择性样式设置（鉴于它们在 JavaScript 插件中的广泛使用）的文档和示例。</p>

    <h2 id="overview">概览<a class="anchor-link" href="#overview" aria-label="概览链接"></a></h2>
    <p>由于 <code>&lt;table&gt;</code> 元素在日历和日期选择器等第三方小部件中被广泛使用，Bootstrap 的表格是<strong>选择性启用</strong>的。为任意 <code>&lt;table&gt;</code> 添加基础类 <code>.table</code>，然后使用我们可选的修饰类或自定义样式进行扩展。Bootstrap 中的所有表格样式都不会被继承，这意味着任何嵌套表格都可以独立于父表格进行样式设置。</p>
    <p>使用最基本的表格标记，以下是基于 <code>.table</code> 的表格在 Bootstrap 中的外观。</p>
    <TableBs class="table" :simplified="false" />
    <h3 id="tables-in-rounded-containers">圆角容器中的表格<a class="anchor-link" href="#tables-in-rounded-containers" aria-label="圆角容器中的表格"></a></h3>
    <p>
      表格单元格的背景默认是不透明的。当表格被放置在带有圆角的父元素内时，单元格背景可能会覆盖父元素的边框圆角。请为父元素添加 <a href="/utilities/overflow"><code>.overflow-auto</code> 工具类</a> ，使其圆角能够裁剪表格。这样一来，当表格宽度超过其容器时，表格还可以滚动。
    </p>
    <Example
      code='<div class="border rounded-3 overflow-auto">
  <table class="table table-striped mb-0">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>John</td>
        <td>Doe</td>
        <td>@social</td>
      </tr>
    </tbody>
  </table>
</div>'
    />
    <p>对于普通表格，你可以改用 <code>--bs-table-bg: transparent</code> 让父元素的背景透出来。而带有强调样式的表格（例如条纹表格或可悬停表格）仍然需要溢出工具类，因为它们的强调背景可能会覆盖圆角。</p>
    <CodeWrapper
      code='<div class="border rounded-3 bg-body">
  <table class="table mb-0" style="--bs-table-bg: transparent;">
    <!-- ... -->
  </table>
</div>'
      lang="html"
    />
    <h2 id="variants">变体<a class="anchor-link" href="#variants" aria-label="变体链接"></a></h2>
    <p>使用上下文类为表格、表格行或单个单元格着色。</p>
    <Callout>
      <p><strong>注意！</strong> 由于用于生成表格变体的 CSS 更为复杂，它们很可能要到 v6 才会有颜色模式自适应样式。</p>
    </Callout>
    <div class="bd-example border rounded mb-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">default</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr v-for="themeColor in data['theme-colors']" :class="`table-${themeColor.name}`">
            <th scope="row">{{ themeColor.name }}</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code='<!-- On tables -->
<table class="table table-primary">...</table>
<table class="table table-secondary">...</table>
<table class="table table-success">...</table>
<table class="table table-danger">...</table>
<table class="table table-warning">...</table>
<table class="table table-info">...</table>
<table class="table table-light">...</table>
<table class="table table-dark">...</table>

<!-- On rows -->
<tr class="table-primary">...</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
<tr class="table-light">...</tr>
<tr class="table-dark">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
  <td class="table-light">...</td>
  <td class="table-dark">...</td>
</tr>'
      lang="html"
    />
    <Callout name="warning-color-assistive-technologies" />
    <h2 id="accented-tables">强调表格<a class="anchor-link" href="#accented-tables" aria-label="强调表格链接"></a></h2>
    <h3 id="striped-rows">条纹行<a class="anchor-link" href="#striped-rows" aria-label="条纹行链接"></a></h3>
    <p>使用 <code>.table-striped</code> 为 <code>&lt;tbody&gt;</code> 中的任意表格行添加斑马纹。</p>
    <TableBs class="table table-striped" />
    <h3 id="striped-columns">条纹列<a class="anchor-link" href="#striped-columns" aria-label="条纹列链接"></a></h3>
    <p>使用 <code>.table-striped-columns</code> 为任意表格列添加斑马纹。</p>
    <TableBs class="table table-striped-columns" />
    <p>这些类也可以添加到表格变体上：</p>
    <TableBs class="table table-dark table-striped" /><TableBs class="table table-dark table-striped-columns" /><TableBs class="table table-success table-striped" /><TableBs class="table table-success table-striped-columns" />
    <h3 id="hoverable-rows">可悬停行<a class="anchor-link" href="#hoverable-rows" aria-label="可悬停行链接"></a></h3>
    <p>添加 <code>.table-hover</code>，为 <code>&lt;tbody&gt;</code> 中的表格行启用悬停状态。</p>
    <TableBs class="table table-hover" /><TableBs class="table table-dark table-hover" />
    <p>这些可悬停行也可以与条纹行变体组合使用：</p>
    <TableBs class="table table-striped table-hover" />
    <h3 id="active-tables">活动表格<a class="anchor-link" href="#active-tables" aria-label="活动表格链接"></a></h3>
    <p>通过添加 <code>.table-active</code> 类来突出显示表格行或单元格。</p>
    <Example
      :showMarkup="false"
      code='<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-active">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td class="table-active">@social</td>
        </tr>
      </tbody>
    </table>
    '
    />
    <CodeWrapper
      code='&lt;table class="table"&gt;
  &lt;thead&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr class="table-active"&gt;
      ...
    &lt;/tr&gt;
    &lt;tr&gt;
      ...
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;3&lt;/th&gt;
      &lt;td&gt;John&lt;/td&gt;
      &lt;td&gt;Doe&lt;/td&gt;
      &lt;td class="table-active"&gt;@social&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt; '
      lang="html"
    />
    <Example
      :showMarkup="false"
      code='<table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-active">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td class="table-active">@social</td>
        </tr>
      </tbody>
    </table>
    '
    />
    <CodeWrapper
      code='&lt;table class="table table-dark"&gt;
  &lt;thead&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr class="table-active"&gt;
      ...
    &lt;/tr&gt;
    &lt;tr&gt;
      ...
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;3&lt;/th&gt;
      &lt;td&gt;John&lt;/td&gt;
      &lt;td&gt;Doe&lt;/td&gt;
      &lt;td class="table-active"&gt;@social&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt; '
      lang="html"
    />
    <h2 id="how-do-the-variants-and-accented-tables-work">变体和强调表格是如何工作的？<a class="anchor-link" href="#how-do-the-variants-and-accented-tables-work" aria-label="变体和强调表格是如何工作的？链接"></a></h2>
    <p>对于强调表格（ <a href="#striped-rows">条纹行</a> 、 <a href="#striped-columns">条纹列</a> 、 <a href="#hoverable-rows">可悬停行</a> 和 <a href="#active-tables">活动表格</a> ），我们使用了一些技巧，使这些效果适用于我们所有的 <a href="#variants">表格变体</a> ：</p>
    <ul>
      <li>我们首先使用 <code>--bs-table-bg</code> 自定义属性设置表格单元格的背景。随后所有表格变体都会将该自定义属性设置为给表格单元格着色。这样一来，即使使用半透明颜色作为表格背景，也不会出现问题。</li>
      <li>
        然后我们使用
        <code>box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));</code>
        在表格单元格上添加内阴影，以叠加在任何指定的 <code>background-color</code> 之上。它使用自定义层叠来覆盖 <code>box-shadow</code>，无论 CSS 特异性如何。因为我们使用了巨大的扩散且没有模糊，所以颜色是单调的。由于 <code>--bs-table-accent-bg</code> 默认设置为 <code>transparent</code>，因此我们没有默认的盒阴影。
      </li>
      <li>
        当添加 <code>.table-striped</code>、<code>.table-striped-columns</code>、<code>.table-hover</code> 或 <code>.table-active</code> 类时，<code>--bs-table-bg-type</code> 或 <code>--bs-table-bg-state</code>（默认设置为 <code>initial</code>）会被设置为半透明颜色（<code>--bs-table-striped-bg</code>、 <code>--bs-table-active-bg</code> 或
        <code>--bs-table-hover-bg</code>），以便为背景着色并覆盖默认的 <code>--bs-table-accent-bg</code>。
      </li>
      <li>对于每个表格变体，我们根据该颜色生成具有最高对比度的 <code>--bs-table-accent-bg</code> 颜色。例如，<code>.table-primary</code> 的强调色较深，而 <code>.table-dark</code> 的强调色较浅。</li>
      <li>文本和边框颜色以相同的方式生成，并且它们的颜色默认被继承。</li>
    </ul>
    <p>在幕后，它看起来是这样的：</p>
    <ScssDocs name="table-variant" file="scss/mixins/_table-variants.scss" />
    <h2 id="table-borders">表格边框<a class="anchor-link" href="#table-borders" aria-label="表格边框链接"></a></h2>
    <h3 id="bordered-tables">带边框的表格<a class="anchor-link" href="#bordered-tables" aria-label="带边框的表格链接"></a></h3>
    <p>添加 <code>.table-bordered</code>，在表格及单元格的所有边上显示边框。</p>
    <TableBs class="table table-bordered" />
    <p>可以添加 <a href="/utilities/borders#border-color">边框颜色工具类</a> 来更改颜色：</p>
    <TableBs class="table table-bordered border-primary" />
    <h3 id="tables-without-borders">无边框表格<a class="anchor-link" href="#tables-without-borders" aria-label="无边框表格链接"></a></h3>
    <p>添加 <code>.table-borderless</code> 以显示无边框的表格。</p>
    <TableBs class="table table-borderless" /><TableBs class="table table-dark table-borderless" />
    <h2 id="small-tables">小型表格<a class="anchor-link" href="#small-tables" aria-label="小型表格链接"></a></h2>
    <p>添加 <code>.table-sm</code>，通过将所有单元格的 <code>padding</code> 减半，使任意 <code>.table</code> 更加紧凑。</p>
    <TableBs class="table table-sm" /><TableBs class="table table-dark table-sm" />
    <h2 id="table-group-dividers">表格组分隔线<a class="anchor-link" href="#table-group-dividers" aria-label="表格组分隔线链接"></a></h2>
    <p>使用 <code>.table-group-divider</code> 在表格组——<code>&lt;thead&gt;</code>、<code>&lt;tbody&gt;</code> 和 <code>&lt;tfoot&gt;</code>——之间添加更粗、更深的边框。通过更改 <code>border-top-color</code> 来自定义颜色（我们目前暂不提供这方面的工具类）。</p>
    <Example
      code='<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>'
    />
    <h2 id="vertical-alignment">垂直对齐<a class="anchor-link" href="#vertical-alignment" aria-label="垂直对齐链接"></a></h2>
    <p><code>&lt;thead&gt;</code> 的表格单元格始终垂直对齐到底部。<code>&lt;tbody&gt;</code> 中的表格单元格从 <code>&lt;table&gt;</code> 继承其对齐方式，默认对齐到顶部。使用 <a href="/utilities/vertical-align">垂直对齐</a> 类在需要的地方重新对齐。</p>
    <Example
      :showMarkup="false"
      code='<div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col" class="w-25">Heading 1</th>
            <th scope="col" class="w-25">Heading 2</th>
            <th scope="col" class="w-25">Heading 3</th>
            <th scope="col" class="w-25">Heading 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
          </tr>
          <tr class="align-bottom">
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
          </tr>
          <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td class="align-top">This cell is aligned to the top.</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
          </tr>
        </tbody>
      </table>
    </div>
    '
    />
    <CodeWrapper
      code='&lt;div class="table-responsive"&gt;
  &lt;table class="table align-middle"&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        ...
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        ...
      &lt;/tr&gt;
      &lt;tr class="align-bottom"&gt;
        ...
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;...&lt;/td&gt;
        &lt;td&gt;...&lt;/td&gt;
        &lt;td class="align-top"&gt;This cell is aligned to the top.&lt;/td&gt;
        &lt;td&gt;...&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt; '
      lang="html"
    />
    <h2 id="nesting">嵌套<a class="anchor-link" href="#nesting" aria-label="嵌套链接"></a></h2>
    <p>边框样式、活动样式和表格变体不会被嵌套表格继承。</p>
    <Example
      :showMarkup="false"
      code='<table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td colspan="4">
            <table class="table mb-0">
              <thead>
                <tr>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">A</th>
                  <td>First</td>
                  <td>Last</td>
                </tr>
                <tr>
                  <th scope="row">B</th>
                  <td>First</td>
                  <td>Last</td>
                </tr>
                <tr>
                  <th scope="row">C</th>
                  <td>First</td>
                  <td>Last</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
    </table>
    '
    />
    <CodeWrapper
      code='&lt;table class="table table-striped table-bordered"&gt;
  &lt;thead&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    ...
    &lt;tr&gt;
      &lt;td colspan="4"&gt;
        &lt;table class="table mb-0"&gt;
          ...
        &lt;/table&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
    ...
  &lt;/tbody&gt;
&lt;/table&gt; '
      lang="html"
    />
    <h2 id="how-nesting-works">嵌套的工作原理<a class="anchor-link" href="#how-nesting-works" aria-label="嵌套的工作原理链接"></a></h2>
    <p>
      为了防止<em>任何</em>样式泄漏到嵌套表格中，我们在 CSS 中使用了子组合器（<code>&gt;</code>）选择器。由于我们需要定位 <code>thead</code>、<code>tbody</code> 和 <code>tfoot</code> 中的所有 <code>td</code> 和 <code>th</code>，如果不使用它，我们的选择器会变得相当长。因此，我们使用了看起来颇为奇怪的
      <code>.table &gt; :not(caption) &gt; * &gt; *</code> 选择器，来定位 <code>.table</code> 的所有 <code>td</code> 和 <code>th</code>，但不包括任何潜在的嵌套表格。
    </p>
    <p>请注意，如果你将 <code>&lt;tr&gt;</code> 作为表格的直接子元素添加，这些 <code>&lt;tr&gt;</code> 默认会被包裹在 <code>&lt;tbody&gt;</code> 中，从而使我们的选择器按预期工作。</p>
    <h2 id="anatomy">结构剖析<a class="anchor-link" href="#anatomy" aria-label="结构剖析链接"></a></h2>
    <h3 id="table-head">表头<a class="anchor-link" href="#table-head" aria-label="表头链接"></a></h3>
    <p>与表格和深色表格类似，使用修饰类 <code>.table-light</code> 或 <code>.table-dark</code> 使 <code>&lt;thead&gt;</code> 呈现浅灰色或深灰色。</p>
    <Example
      :showMarkup="false"
      code='<table class="table">
      <thead class="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
    </table>
    '
    />
    <CodeWrapper
      code='&lt;table class="table"&gt;
  &lt;thead class="table-light"&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    ...
  &lt;/tbody&gt;
&lt;/table&gt; '
      lang="html"
    />
    <Example
      :showMarkup="false"
      code='<table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
    </table>
    '
    />
    <CodeWrapper
      code='&lt;table class="table"&gt;
  &lt;thead class="table-dark"&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    ...
  &lt;/tbody&gt;
&lt;/table&gt; '
      lang="html"
    />
    <h3 id="table-foot">表尾<a class="anchor-link" href="#table-foot" aria-label="表尾链接"></a></h3>
    <Example
      :showMarkup="false"
      code='<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
        </tr>
      </tfoot>
    </table>
    '
    />
    <CodeWrapper
      code='&lt;table class="table"&gt;
  &lt;thead&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    ...
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    ...
  &lt;/tfoot&gt;
&lt;/table&gt; '
      lang="html"
    />
    <h3 id="captions">标题说明<a class="anchor-link" href="#captions" aria-label="标题说明链接"></a></h3>
    <p><code>&lt;caption&gt;</code> 的作用类似于表格的标题。它可以帮助使用屏幕阅读器的用户找到表格、了解其内容，并决定是否要阅读它。</p>
    <div class="bd-example border rounded mb-3">
      <table class="table">
        <caption>
          用户列表
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">名</th>
            <th scope="col">姓</th>
            <th scope="col">用户名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code='&lt;table class="table table-sm"&gt;
  &lt;caption&gt;List of users&lt;/caption&gt;
  &lt;thead&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    ...
  &lt;/tbody&gt;
&lt;/table&gt; '
      lang="html"
    />
    <p>你也可以使用 <code>.caption-top</code> 将 <code>&lt;caption&gt;</code> 置于表格顶部。</p>
    <Example
      code='<table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>'
    />
    <h2 id="responsive-tables">响应式表格<a class="anchor-link" href="#responsive-tables" aria-label="响应式表格链接"></a></h2>
    <p>响应式表格使表格可以轻松地水平滚动。通过将 <code>.table</code> 包裹在 <code>.table-responsive</code> 中，使任意表格在所有视口下都具有响应式。或者，使用 <code>.table-responsive{-sm|-md|-lg|-xl|-xxl}</code> 选择一个最大断点，使响应式表格在该断点之前生效。</p>
    <Callout type="warning">
      <h5 id="vertical-clippingtruncation">垂直裁剪/截断</h5>
      <p>响应式表格使用了 <code>overflow-y: hidden</code>，这会将超出表格底部或顶部边缘的任何内容裁剪掉。特别是，这可能会裁剪掉下拉菜单和其他第三方小部件。</p>
    </Callout>
    <h3 id="always-responsive">始终响应式<a class="anchor-link" href="#always-responsive" aria-label="始终响应式链接"></a></h3>
    <p>在每个断点下，使用 <code>.table-responsive</code> 实现可水平滚动的表格。</p>
    <Example
      :showMarkup="false"
      code='<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>'
    />
    <CodeWrapper
      code='&lt;div class="table-responsive"&gt;
  &lt;table class="table"&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt; '
      lang="html"
    />
    <h3 id="breakpoint-specific">特定断点<a class="anchor-link" href="#breakpoint-specific" aria-label="特定断点链接"></a></h3>
    <p>根据需要，使用 <code>.table-responsive{-sm|-md|-lg|-xl|-xxl}</code> 创建在特定断点之前生效的响应式表格。从该断点及更高断点开始，表格将正常显示，不会水平滚动。</p>
    <p>
      <strong>这些表格在特定视口宽度下应用响应式样式之前，可能会显示异常。</strong>
    </p>

    <div v-for="breakpoint in data['breakpoints']" class="bd-example border rounded mb-3">
      <p class="text-muted small mb-2">
        class: <code>table-responsive{{ breakpoint.abbr }}</code>
      </p>
      <div :class="`table-responsive${breakpoint.abbr}`">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">标题</th>
              <th scope="col">标题</th>
              <th scope="col">标题</th>
              <th scope="col">标题</th>
              <th scope="col">标题</th>
              <th scope="col">标题</th>
              <th scope="col">标题</th>
              <th scope="col">标题</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <CodeWrapper
      :code="
        data['breakpoints']
          .map(
            (breakpoint) => `<div class=&quot;table-responsive${breakpoint.abbr}&quot;>
  <table class=&quot;table&quot;>
    ...
  </table>
</div>`
          )
          .join('\n')
      "
      lang="html"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="table-variables" file="scss/_variables.scss" />
    <h3 id="sass-loops">Sass 循环<a class="anchor-link" href="#sass-loops" aria-label="Sass 循环链接"></a></h3>
    <ScssDocs name="table-loop" file="scss/_variables.scss" />
    <h3 id="customizing">自定义<a class="anchor-link" href="#customizing" aria-label="自定义链接"></a></h3>
    <ul>
      <li>因子变量（<code>$table-striped-bg-factor</code>、<code>$table-active-bg-factor</code> 和 <code>$table-hover-bg-factor</code>）用于确定表格变体中的对比度。</li>
      <li>
        除了浅色和深色表格变体之外，主题颜色会通过
        <code>$table-bg-scale</code> 变量进行变亮处理。
      </li>
    </ul>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
        <a href="#overview">概览</a>
        <ul>
          <li><a href="#tables-in-rounded-containers">圆角容器中的表格</a></li>
        </ul>
      </li>
      <li><a href="#variants">变体</a></li>
      <li>
        <a href="#accented-tables">强调表格</a>
        <ul>
          <li><a href="#striped-rows">条纹行</a></li>
          <li><a href="#striped-columns">条纹列</a></li>
          <li><a href="#hoverable-rows">可悬停行</a></li>
          <li><a href="#active-tables">活动表格</a></li>
        </ul>
      </li>
      <li><a href="#how-do-the-variants-and-accented-tables-work">变体和强调表格是如何工作的？</a></li>
      <li>
        <a href="#table-borders">表格边框</a>
        <ul>
          <li><a href="#bordered-tables">带边框的表格</a></li>
          <li><a href="#tables-without-borders">无边框表格</a></li>
        </ul>
      </li>
      <li><a href="#small-tables">小型表格</a></li>
      <li><a href="#table-group-dividers">表格组分隔线</a></li>
      <li><a href="#vertical-alignment">垂直对齐</a></li>
      <li><a href="#nesting">嵌套</a></li>
      <li><a href="#how-nesting-works">嵌套的工作原理</a></li>
      <li>
        <a href="#anatomy">结构剖析</a>
        <ul>
          <li><a href="#table-head">表头</a></li>
          <li><a href="#table-foot">表尾</a></li>
          <li><a href="#captions">标题说明</a></li>
        </ul>
      </li>
      <li>
        <a href="#responsive-tables">响应式表格</a>
        <ul>
          <li><a href="#always-responsive">始终响应式</a></li>
          <li><a href="#breakpoint-specific">特定断点</a></li>
        </ul>
      </li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-loops">Sass 循环</a></li>
          <li><a href="#customizing">自定义</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import data from '@/data/data.js';
</script>
