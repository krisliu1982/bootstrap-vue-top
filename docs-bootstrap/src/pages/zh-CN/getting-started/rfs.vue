<template>
  <article class="bd-content" data-pagefind-body>
    <h1>RFS</h1>
    <p class="lead">Bootstrap 的尺寸调整引擎会响应式地缩放常用 CSS 属性，以便在各种视口和设备上更好地利用可用空间。</p>

    <h2 id="what-is-rfs">什么是 RFS？<a class="anchor-link" href="#what-is-rfs" aria-label="什么是 RFS？链接"></a></h2>
    <p>
      Bootstrap 的附属项目 <a href="https://github.com/twbs/rfs/tree/v10.0.0">RFS</a> 是一个单位尺寸调整引擎，最初是为了调整字体大小而开发的（因此其缩写为 Responsive Font Sizes，即响应式字体大小）。如今，RFS 能够重新缩放大多数带单位值的 CSS 属性，例如 <code>margin</code>、<code>padding</code>、<code>border-radius</code>，甚至
      <code>box-shadow</code>。
    </p>
    <p>该机制会根据浏览器视口的尺寸自动计算合适的值。它会被编译成混合使用 <code>rem</code> 和视口单位的 <code>calc()</code> 函数，从而实现响应式缩放行为。</p>
    <h2 id="using-rfs">使用 RFS<a class="anchor-link" href="#using-rfs" aria-label="使用 RFS 链接"></a></h2>
    <p>这些 mixin 已包含在 Bootstrap 中，引入 Bootstrap 的 <code>scss</code> 后即可使用。如有需要，RFS 也可以 <a href="https://github.com/twbs/rfs/tree/v10.0.0#installation">单独安装</a> 。</p>
    <h3 id="using-the-mixins">使用 mixin<a class="anchor-link" href="#using-the-mixins" aria-label="使用 mixin 链接"></a></h3>
    <p>
      <code>rfs()</code> mixin 为 <code>font-size</code>、<code>margin</code>、<code>margin-top</code>、<code>margin-right</code>、<code>margin-bottom</code>、<code>margin-left</code>、<code>padding</code>、<code>padding-top</code>、<code>padding-right</code>、<code>padding-bottom</code> 和 <code>padding-left</code> 提供了简写形式。下面的示例展示了
      Sass 源码和编译后的 CSS。
    </p>
    <CodeWrapper
      code=".title {
  @include font-size(4rem);
}
"
      lang="scss"
    />
    <CodeWrapper
      code=".title {
  font-size: calc(1.525rem + 3.3vw);
}

@media (min-width: 1200px) {
  .title {
    font-size: 4rem;
  }
}
"
      lang="css"
    />
    <p>其他任何属性都可以像下面这样传给 <code>rfs()</code> mixin：</p>
    <CodeWrapper
      code=".selector {
  @include rfs(4rem, border-radius);
}
"
      lang="scss"
    />
    <p><code>!important</code> 也可以直接添加到任何你想要的值后面：</p>
    <CodeWrapper
      code=".selector {
  @include padding(2.5rem !important);
}
"
      lang="scss"
    />
    <h3 id="using-the-functions">使用函数<a class="anchor-link" href="#using-the-functions" aria-label="使用函数链接"></a></h3>
    <p>如果你不想使用 include，还有两个函数可用：</p>
    <ul>
      <li>如果传入的是 <code>px</code> 值，<code>rfs-value()</code> 会将其转换为 <code>rem</code> 值，其他情况下则返回相同的结果。</li>
      <li>如果该属性需要重新缩放，<code>rfs-fluid-value()</code> 会返回值的流体版本。</li>
    </ul>
    <p>在这个示例中，我们使用 Bootstrap 内置的 <a href="/layout/breakpoints">响应式断点 mixin</a> ，仅在 <code>lg</code> 断点以下应用样式。</p>
    <CodeWrapper
      code=".selector {
  @include media-breakpoint-down(lg) {
    padding: rfs-fluid-value(2rem);
    font-size: rfs-fluid-value(1.125rem);
  }
}
"
      lang="scss"
    />
    <CodeWrapper
      code="@media (max-width: 991.98px) {
  .selector {
    padding: calc(1.325rem + 0.9vw);
    font-size: 1.125rem; /* 1.125rem is small enough, so RFS won’t rescale this */
  }
}
"
      lang="css"
    />
    <h2 id="extended-documentation">扩展文档<a class="anchor-link" href="#extended-documentation" aria-label="扩展文档链接"></a></h2>
    <p>RFS 是 Bootstrap 组织下的一个独立项目。关于 RFS 及其配置的更多信息，请参阅其 <a href="https://github.com/twbs/rfs/tree/v10.0.0">GitHub 仓库</a> 。</p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#what-is-rfs">什么是 RFS？</a></li>
      <li>
        <a href="#using-rfs">使用 RFS</a>
        <ul>
          <li><a href="#using-the-mixins">使用 mixin</a></li>
          <li><a href="#using-the-functions">使用函数</a></li>
        </ul>
      </li>
      <li>
        <a href="#extended-documentation">扩展文档</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
