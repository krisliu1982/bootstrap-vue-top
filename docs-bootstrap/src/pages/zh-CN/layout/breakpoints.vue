<template>
  <article class="bd-content" data-pagefind-body>
    <h1>断点</h1>
    <p class="lead">断点是可自定义的宽度，用于决定响应式布局在 Bootstrap 中跨设备或视口尺寸时的表现。</p>

    <h2 id="core-concepts">核心概念<a class="anchor-link" href="#core-concepts" aria-label="核心概念链接"></a></h2>
    <ul>
      <li>
        <p><strong>断点是响应式设计的基本构件。</strong> 使用它们来控制布局在特定视口或设备尺寸下何时进行调整。</p>
      </li>
      <li>
        <p><strong>使用媒体查询按断点构建你的 CSS。</strong> 媒体查询是 CSS 的一项特性，允许你根据一组浏览器和操作系统参数有条件地应用样式。我们在媒体查询中最常使用 <code>min-width</code>。</p>
      </li>
      <li>
        <p>
          <strong>移动优先、响应式设计是目标。</strong> Bootstrap 的 CSS 旨在应用最少的样式，使布局在最小断点下正常运作，然后在此基础上叠加样式，以适应更大设备的设计。这可以优化你的 CSS、改善渲染时间，并为访问者提供出色的体验。
        </p>
      </li>
    </ul>
    <h2 id="available-breakpoints">可用断点<a class="anchor-link" href="#available-breakpoints" aria-label="可用断点链接"></a></h2>
    <p>Bootstrap 包含六个默认断点，有时称为<em>网格层级</em>，用于构建响应式布局。如果你使用我们的 Sass 源文件，可以自定义这些断点。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>断点</th>
            <th>类中缀</th>
            <th>尺寸</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>超小</td>
            <td><em>无</em></td>
            <td>&lt;576px</td>
          </tr>
          <tr>
            <td>小</td>
            <td><code>sm</code></td>
            <td>&ge;576px</td>
          </tr>
          <tr>
            <td>中</td>
            <td><code>md</code></td>
            <td>&ge;768px</td>
          </tr>
          <tr>
            <td>大</td>
            <td><code>lg</code></td>
            <td>&ge;992px</td>
          </tr>
          <tr>
            <td>超大</td>
            <td><code>xl</code></td>
            <td>&ge;1200px</td>
          </tr>
          <tr>
            <td>特大</td>
            <td><code>xxl</code></td>
            <td>&ge;1400px</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      每个断点的选取都旨在舒适地容纳宽度为 12 的倍数的容器。断点也代表了常见设备尺寸和视口尺寸的一个子集——它们并不专门针对每一种用例或设备。相反，这些范围提供了一个强大且一致的基础，几乎可以在此基础上为任何设备构建布局。
    </p>
    <p>
      这些断点可以通过 Sass 自定义——你可以在我们的 <code>_variables.scss</code> 样式表中的 Sass map 里找到它们。
    </p>
    <ScssDocs name="grid-breakpoints" file="scss/_variables.scss" />
    <p>
      有关如何修改我们的 Sass map 和变量的更多信息和示例，请参阅<a href="/layout/grid#css">网格文档的 CSS 部分</a>。
    </p>
    <h2 id="media-queries">媒体查询<a class="anchor-link" href="#media-queries" aria-label="媒体查询链接"></a></h2>
    <p>
      由于 Bootstrap 是以移动优先的方式开发的，我们使用了一些
     <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries">媒体查询</a>
      来为我们的布局和界面创建合理的断点。这些断点主要基于最小视口宽度，允许我们在视口变化时放大元素。
    </p>
    <h3 id="min-width">最小宽度（Min-width）<a class="anchor-link" href="#min-width" aria-label="最小宽度链接"></a></h3>
    <p>Bootstrap 在用于布局、网格系统和组件的 Sass 源文件中主要使用以下媒体查询范围——即断点。</p>
    <CodeWrapper
      code="// Source mixins

// No media query necessary for xs breakpoint as it’s effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
"
      lang="scss"
    />
    <p>这些 Sass mixin 在我们编译后的 CSS 中使用 Sass 变量中声明的值进行转换。例如：</p>
    <CodeWrapper
      code="// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
"
      lang="scss"
    />
    <h3 id="max-width">最大宽度（Max-width）<a class="anchor-link" href="#max-width" aria-label="最大宽度链接"></a></h3>
    <p>我们偶尔会使用相反方向的媒体查询（给定的屏幕尺寸<em>或更小</em>）：</p>
    <CodeWrapper
      code="// No media query necessary for xs breakpoint as it’s effectively `@media (max-width: 0) { ... }`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
"
      lang="scss"
    />
    <p>这些 mixin 会采用所声明的断点，从中减去 <code>.02px</code>，并将其用作我们的 <code>max-width</code> 值。例如：</p>
    <CodeWrapper
      code="// `xs` returns only a ruleset and no media query
// ... { ... }

// `sm` applies to x-small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// `md` applies to small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// `lg` applies to medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// `xl` applies to large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// `xxl` applies to x-large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) { ... }
"
      lang="scss"
    />
    <Callout name="info-mediaqueries-breakpoints" type="warning" />
    <h3 id="single-breakpoint">单一断点<a class="anchor-link" href="#single-breakpoint" aria-label="单一断点链接"></a></h3>
    <p>此外还有媒体查询和 mixin，用于通过最小和最大断点宽度来针对单个屏幕尺寸区段。</p>
    <CodeWrapper
      code="@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(xxl) { ... }
"
      lang="scss"
    />
    <p>例如 <code>@include media-breakpoint-only(md) { ... }</code> 的结果为：</p>
    <CodeWrapper
      code="@media (min-width: 768px) and (max-width: 991.98px) { ... }
"
      lang="scss"
    />
    <h3 id="between-breakpoints">断点之间<a class="anchor-link" href="#between-breakpoints" aria-label="断点之间链接"></a></h3>
    <p>类似地，媒体查询可以跨越多个断点宽度：</p>
    <CodeWrapper
      code="@include media-breakpoint-between(md, xl) { ... }
"
      lang="scss"
    />
    <p>其结果为：</p>
    <CodeWrapper
      code="// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
"
      lang="scss"
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#core-concepts">核心概念</a></li>
      <li><a href="#available-breakpoints">可用断点</a></li>
      <li>
       <a href="#media-queries">媒体查询</a>
        <ul>
          <li><a href="#min-width">最小宽度（Min-width）</a></li>
          <li><a href="#max-width">最大宽度（Max-width）</a></li>
          <li><a href="#single-breakpoint">单一断点</a></li>
          <li><a href="#between-breakpoints">断点之间</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
