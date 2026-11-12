<template>
  <article class="bd-content" data-pagefind-body>
    <h1>分页</h1>
    <p class="lead">用于展示分页、表示一系列相关内容分布在多个页面上的文档和示例。</p>

    <h2 id="overview">概览<a class="anchor-link" href="#overview" aria-label="概览链接"></a></h2>
    <p>
      我们的分页使用一大块相互连接的链接，让链接难以被忽略且易于扩展，同时提供较大的点击区域。分页由 HTML 列表元素构建，因此屏幕阅读器可以播报可用链接的数量。使用包裹的
      <code>&lt;nav&gt;</code> 元素，将其标识为屏幕阅读器和其他辅助技术的导航区域。
    </p>
    <p>
      此外，由于页面中很可能存在多个此类导航区域，建议为 <code>&lt;nav&gt;</code> 提供描述性的
      <code>aria-label</code> 以反映其用途。例如，如果分页组件用于在一组搜索结果之间导航，合适的标签可以是 <code>aria-label=&quot;Search results pages&quot;</code>。
    </p>
    <Example
      code='<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>'
    />
    <h2 id="working-with-icons">使用图标<a class="anchor-link" href="#working-with-icons" aria-label="使用图标链接"></a></h2>
    <p>想在某些分页链接中用图标或符号代替文字？请务必通过 <code>aria</code> 属性为屏幕阅读器提供适当的支持。</p>
    <Example
      code='<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
     <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
     <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>'
    />
    <h2 id="active">激活状态<a class="anchor-link" href="#active" aria-label="激活状态链接"></a></h2>
    <p>添加 <code>.active</code> 以指示某个 <code>.page-item</code> 是当前正在查看的项。如果当前页面使用 <code>&lt;a&gt;</code>，则应为辅助技术添加 <code>aria-current=&quot;page&quot;</code>。</p>
    <Example
      code='<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
     <a class="page-link" href="#" aria-current="page">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>'
    />
    <p>如果使用非交互式元素（如用于当前页面的 <code>&lt;span&gt;</code>），可以省略 <code>aria-current</code> 属性。</p>
    <CodeWrapper
      code='&lt;li class="page-item active"&gt;
  &lt;span class="page-link"&gt;2&lt;/span&gt;
&lt;/li&gt;'
      lang="html"
    />
    <h2 id="disabled">禁用状态<a class="anchor-link" href="#disabled" aria-label="禁用状态链接"></a></h2>
    <p>
      为 <code>.page-item</code> 添加 <code>.disabled</code>，使其看起来不可点击。虽然 <code>.disabled</code> 使用 <code>pointer-events: none</code> 来禁用链接的交互性，但该 CSS 属性尚未标准化，并且没有考虑键盘导航。因此，你应始终在禁用的链接上添加
      <code>tabindex=&quot;-1&quot;</code>，并使用自定义 JavaScript 完全禁用其功能。
    </p>
    <Example
      code='<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
     <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
     <a class="page-link" href="#" aria-current="page">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
     <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>'
    />
    <p>与激活状态的页面项一样，你可以用 <code>&lt;span&gt;</code> 替换被禁用的 <code>&lt;a&gt;</code>，从而移除点击功能并在保留预期样式的同时阻止键盘聚焦。</p>
    <CodeWrapper
      code='&lt;li class="page-item disabled"&gt;
  &lt;span class="page-link"&gt;Previous&lt;/span&gt;
&lt;/li&gt;'
      lang="html"
    />
    <h2 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h2>
    <p>想要更大或更小的分页？添加 <code>.pagination-lg</code> 或 <code>.pagination-sm</code> 即可获得其他尺寸。</p>
    <Example
      code='<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active" >
     <a class="page-link" aria-current="page">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>'
    />
    <Example
      code='<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item active">
     <a class="page-link" aria-current="page">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>'
    />
    <h2 id="alignment">对齐<a class="anchor-link" href="#alignment" aria-label="对齐链接"></a></h2>
    <p>
      使用
     <a href="/utilities/flex">flexbox 工具类</a>更改分页组件的对齐方式。例如，使用 <code>.justify-content-center</code>：
    </p>
    <Example
      code='<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
     <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
     <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>'
    />
    <p>或使用 <code>.justify-content-end</code>：</p>
    <Example
      code='<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
     <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
     <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，分页现在在
      <code>.pagination</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="pagination-css-vars" file="scss/_pagination.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="pagination-variables" file="scss/_variables.scss" />
    <h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin 链接"></a></h3>
    <ScssDocs name="pagination-mixin" file="scss/mixins/_pagination.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#overview">概览</a></li>
      <li><a href="#working-with-icons">使用图标</a></li>
      <li><a href="#active">激活状态</a></li>
      <li><a href="#disabled">禁用状态</a></li>
      <li><a href="#sizing">尺寸</a></li>
      <li><a href="#alignment">对齐</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-mixins">Sass mixin</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
