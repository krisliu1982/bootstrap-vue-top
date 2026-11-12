<template>
  <article class="bd-content" data-pagefind-body>
    <h1>间距</h1>
    <p class="lead">Bootstrap 包含大量简写的响应式外边距、内边距和间隔（gap）工具类，用于修改元素的外观。</p>

    <h2 id="margin-and-padding">外边距与内边距<a class="anchor-link" href="#margin-and-padding" aria-label="外边距与内边距链接"></a></h2>
    <p>使用简写类为元素或其部分边分配响应式友好的 <code>margin</code> 或 <code>padding</code> 值。支持单独属性、所有属性和垂直水平属性。这些类构建自一个默认的 Sass 映射，范围从 <code>.25rem</code> 到 <code>3rem</code>。</p>
    <Callout>
      <p><strong>正在使用 CSS 网格布局模块？</strong>请考虑改用<a href="#gap">间隔工具类</a>。</p>
    </Callout>
    <h3 id="notation">命名规则<a class="anchor-link" href="#notation" aria-label="命名规则链接"></a></h3>
    <p>适用于所有断点（从 <code>xs</code> 到 <code>xxl</code>）的间距工具类名称中不包含断点缩写。这是因为这些类是从 <code>min-width: 0</code> 开始向上生效的，因此不受媒体查询的约束。而其余的断点则确实包含断点缩写。</p>
    <p>这些类使用 <code>{property}{sides}-{size}</code> 格式命名（对应 <code>xs</code>），对于 <code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code> 则使用 <code>{property}{sides}-{breakpoint}-{size}</code> 格式。</p>
    <p>其中 <em>property</em> 为以下之一：</p>
    <ul>
      <li><code>m</code> - 表示设置 <code>margin</code> 的类</li>
      <li><code>p</code> - 表示设置 <code>padding</code> 的类</li>
    </ul>
    <p>其中 <em>sides</em> 为以下之一：</p>
    <ul>
      <li><code>t</code> - 表示设置 <code>margin-top</code> 或 <code>padding-top</code> 的类</li>
      <li><code>b</code> - 表示设置 <code>margin-bottom</code> 或 <code>padding-bottom</code> 的类</li>
      <li><code>s</code> -（start）表示在 LTR 中设置 <code>margin-left</code> 或 <code>padding-left</code>，在 RTL 中设置 <code>margin-right</code> 或 <code>padding-right</code> 的类</li>
      <li><code>e</code> -（end）表示在 LTR 中设置 <code>margin-right</code> 或 <code>padding-right</code>，在 RTL 中设置 <code>margin-left</code> 或 <code>padding-left</code> 的类</li>
      <li><code>x</code> - 表示同时设置 <code>*-left</code> 和 <code>*-right</code> 的类</li>
      <li><code>y</code> - 表示同时设置 <code>*-top</code> 和 <code>*-bottom</code> 的类</li>
      <li>留空 - 表示在元素全部 4 边设置 <code>margin</code> 或 <code>padding</code> 的类</li>
    </ul>
    <p>其中 <em>size</em> 为以下之一：</p>
    <ul>
      <li>
        <code>0</code> - 表示通过将 <code>margin</code> 或 <code>padding</code> 设置为
        <code>0</code> 来消除它的类
      </li>
      <li>
        <code>1</code> -（默认）表示将 <code>margin</code> 或 <code>padding</code> 设置为
        <code>$spacer * .25</code> 的类
      </li>
      <li>
        <code>2</code> -（默认）表示将 <code>margin</code> 或 <code>padding</code> 设置为
        <code>$spacer * .5</code> 的类
      </li>
      <li>
        <code>3</code> -（默认）表示将 <code>margin</code> 或 <code>padding</code> 设置为
        <code>$spacer</code> 的类
      </li>
      <li>
        <code>4</code> -（默认）表示将 <code>margin</code> 或 <code>padding</code> 设置为
        <code>$spacer * 1.5</code> 的类
      </li>
      <li>
        <code>5</code> -（默认）表示将 <code>margin</code> 或 <code>padding</code> 设置为
        <code>$spacer * 3</code> 的类
      </li>
      <li><code>auto</code> - 表示将 <code>margin</code> 设置为 auto 的类</li>
    </ul>
    <p>（你可以通过向 <code>$spacers</code> Sass 映射变量添加条目来添加更多尺寸。）</p>
    <h3 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h3>
    <p>以下是这些类的一些代表性示例：</p>
    <CodeWrapper
      code=".mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
"
      lang="scss"
    />
    <h3 id="horizontal-centering">水平居中<a class="anchor-link" href="#horizontal-centering" aria-label="水平居中链接"></a></h3>
    <p>此外，Bootstrap 还提供了一个 <code>.mx-auto</code> 类，用于将固定宽度的块级内容水平居中——即具有 <code>display: block</code> 和设置了 <code>width</code> 的内容——通过将水平外边距设置为 <code>auto</code> 来实现。</p>
    <Example
      :showMarkup="false"
      code='<div class="mx-auto p-2" style="width: 200px; background-color: rgba(var(--bd-violet-rgb),.15); border: rgba(var(--bd-violet-rgb),.3) solid 1px;">
  Centered element
</div>'
    />
    <CodeWrapper
      code='&lt;div class="mx-auto p-2" style="width: 200px;"&gt;
  Centered element
&lt;/div&gt;'
      lang="html"
    />
    <h2 id="negative-margin">负外边距<a class="anchor-link" href="#negative-margin" aria-label="负外边距链接"></a></h2>
    <p>在 CSS 中，<code>margin</code> 属性可以使用负值（<code>padding</code> 则不可以）。这些负外边距<strong>默认被禁用</strong>，但可以通过在 Sass 中设置 <code>$enable-negative-margins: true</code> 来启用。</p>
    <p>
      其语法与默认的正值外边距工具类几乎相同，只是在所需尺寸前添加了
      <code>n</code>。下面是一个与 <code>.mt-1</code> 相反的示例类：
    </p>
    <CodeWrapper
      code=".mt-n1 {
  margin-top: -0.25rem !important;
}
"
      lang="scss"
    />
    <h2 id="gap">间隔<a class="anchor-link" href="#gap" aria-label="间隔链接"></a></h2>
    <p>
      使用 <code>display: grid</code> 或 <code>display: flex</code> 时，你可以在父元素上使用 <code>gap</code> 工具类。这样可以省去为网格或弹性容器的各个子元素添加外边距工具类的麻烦。间隔工具类默认是响应式的，并基于
      <code>$spacers</code> Sass 映射通过我们的工具类 API 生成。
    </p>
    <Example
      class="bd-example-cssgrid"
      code='<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-3">
  <div class="p-2">Grid item 1</div>
  <div class="p-2">Grid item 2</div>
  <div class="p-2">Grid item 3</div>
  <div class="p-2">Grid item 4</div>
</div>'
    />
    <p>
      支持包含 Bootstrap 所有网格断点的响应式选项，以及 <code>$spacers</code> 映射中从
      <code>0</code>–<code>5</code> 的六种尺寸。没有 <code>.gap-auto</code> 工具类，因为它的效果与 <code>.gap-0</code> 相同。
    </p>
    <h3 id="row-gap">row-gap<a class="anchor-link" href="#row-gap" aria-label="row-gap链接"></a></h3>
    <p><code>row-gap</code> 设置指定容器中子项目之间的垂直间距。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-0 row-gap-3">
  <div class="p-2">Grid item 1</div>
  <div class="p-2">Grid item 2</div>
  <div class="p-2">Grid item 3</div>
  <div class="p-2">Grid item 4</div>
</div>'
    />
    <h3 id="column-gap">column-gap<a class="anchor-link" href="#column-gap" aria-label="column-gap链接"></a></h3>
    <p><code>column-gap</code> 设置指定容器中子项目之间的水平间距。</p>
    <Example
      class="bd-example-cssgrid"
      code='<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-0 column-gap-3">
  <div class="p-2">Grid item 1</div>
  <div class="p-2">Grid item 2</div>
  <div class="p-2">Grid item 3</div>
  <div class="p-2">Grid item 4</div>
</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <h3 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射链接"></a></h3>
    <p>间距工具类通过 Sass 映射声明，然后由我们的工具类 API 生成。</p>
    <ScssDocs name="spacer-variables-maps" file="scss/_variables.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      间距工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
     <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-spacing" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
       <a href="#margin-and-padding">外边距与内边距</a>
        <ul>
          <li><a href="#notation">命名规则</a></li>
          <li><a href="#examples">示例</a></li>
          <li><a href="#horizontal-centering">水平居中</a></li>
        </ul>
      </li>
      <li><a href="#negative-margin">负外边距</a></li>
      <li>
       <a href="#gap">间隔</a>
        <ul>
          <li><a href="#row-gap">row-gap</a></li>
          <li><a href="#column-gap">column-gap</a></li>
        </ul>
      </li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-maps">Sass 映射</a></li>
          <li><a href="#sass-utilities-api">Sass 工具类 API</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
