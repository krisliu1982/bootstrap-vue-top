<template>
  <div class="docs-intro">
    <h1>断点</h1>
    <p>断点是可自定义的宽度，用于决定响应式布局在 Bootstrap 中如何随设备或视口尺寸变化。</p>
  </div>
  <div class="docs-toc">
    <nav id="TableOfContents" aria-label="目录">
      <ul>
        <li><a href="#core-concepts">核心概念</a></li>
        <li><a href="#available-breakpoints">可用断点</a></li>
        <li><a href="#media-queries">媒体查询</a>
          <ul>
            <li><a href="#min-width">最小宽度</a></li>
            <li><a href="#max-width">最大宽度</a></li>
            <li><a href="#single-breakpoint">单一断点</a></li>
            <li><a href="#between-breakpoints">断点之间</a></li>
          </ul>
        </li>
        <li><a href="#container-queries">容器查询</a>
          <ul>
            <li><a href="#usage-in-bootstrap">在 Bootstrap 中的用法</a></li>
            <li><a href="#setting-a-container">设置容器</a></li>
            <li><a href="#container-query-mixins">容器查询 mixin</a></li>
            <li><a href="#named-containers">命名容器</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>

  <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents">
    <h2 id="core-concepts">核心概念<a class="anchor-link" aria-label="链接到本节：核心概念"
        href="#core-concepts"> </a></h2>
    <ul>
      <li>
        <p><strong>断点是响应式设计的基本构件。</strong>用它们来控制布局在特定视口或设备尺寸下何时可以调整。</p>
      </li>
      <li>
        <p><strong>使用媒体查询按断点来组织你的 CSS。</strong>媒体查询是 CSS 的一项特性，允许你根据一组浏览器和操作系统参数有条件地应用样式。我们最常用的是媒体查询中的 <code>min-width</code>。</p>
      </li>
      <li>
        <p><strong>目标是移动优先的响应式设计。</strong>Bootstrap 的 CSS 旨在最小断点下仅应用最少的样式让布局可用，然后逐层叠加样式，为更大的设备调整设计。这样可以优化你的 CSS、改善渲染时间，并为访客提供出色的体验。</p>
      </li>
    </ul>
    <h2 id="available-breakpoints">可用断点<a class="anchor-link"
        aria-label="链接到本节：可用断点" href="#available-breakpoints"> </a></h2>
    <p>Bootstrap 包含六个默认断点（有时称为<em>网格层级</em>），用于构建响应式布局。如果你使用我们的 Sass 源文件，可以自定义这些断点。</p>
    <div class="table-responsive">
      <table class="table md:table-stacked">
        <thead>
          <tr>
            <th>断点</th>
            <th>类名中缀</th>
            <th>尺寸</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-cell="断点">超小</td>
            <td data-cell="类名中缀"><em>无</em></td>
            <td data-cell="尺寸">&lt;576px</td>
          </tr>
          <tr>
            <td data-cell="断点">小</td>
            <td data-cell="类名中缀"><code>sm</code></td>
            <td data-cell="尺寸">≥576px</td>
          </tr>
          <tr>
            <td data-cell="断点">中</td>
            <td data-cell="类名中缀"><code>md</code></td>
            <td data-cell="尺寸">≥768px</td>
          </tr>
          <tr>
            <td data-cell="断点">大</td>
            <td data-cell="类名中缀"><code>lg</code></td>
            <td data-cell="尺寸">≥1024px</td>
          </tr>
          <tr>
            <td data-cell="断点">超大</td>
            <td data-cell="类名中缀"><code>xl</code></td>
            <td data-cell="尺寸">≥1280px</td>
          </tr>
          <tr>
            <td data-cell="断点">超超大</td>
            <td data-cell="类名中缀"><code>2xl</code></td>
            <td data-cell="尺寸">≥1536px</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>每个断点的选择都旨在舒适地容纳宽度为 12 的倍数的容器。断点也代表了常见设备尺寸和视口尺寸的一个子集——它们并不专门针对每一种用例或设备。相反，这些范围提供了一个强大而一致的基础，几乎可以为任何设备在其上构建。</p>
    <p>这些断点可通过 Sass 自定义——你可以在 <code>_config.scss</code> 样式表的 Sass map 中找到它们。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
);`" lang="scss" label="scss/_config.scss"></CodeHighlight>
</div>
    <p>关于如何修改我们的 Sass map 和变量的更多信息和示例，请参阅<a
        href="/docs/6.0/layout/grid#css">网格文档的 CSS 部分</a>。</p>
    <h2 id="media-queries">媒体查询<a class="anchor-link" aria-label="链接到本节：媒体查询"
        href="#media-queries"> </a></h2>
    <p>由于 Bootstrap 以移动优先为开发理念，我们使用少量<a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries">媒体查询</a>来为布局和界面创建合理的断点。这些断点主要基于最小视口宽度，使我们能够在视口变化时放大元素。</p>
    <h3 id="min-width">最小宽度<a class="anchor-link" aria-label="链接到本节：最小宽度" href="#min-width">
      </a></h3>
    <p>Bootstrap 在布局、网格系统和组件的 Sass 源文件中主要使用以下媒体查询范围——即断点。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// Source mixins

// No media query necessary for xs breakpoint as it’s effectively \`@media (min-width: 0) { ... }\`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(2xl) { ... }

// Usage

// Example: Hide starting at \`min-width: 0\`, and then show at the \`sm\` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}`" lang="scss"></CodeHighlight></div>
    <p>这些 Sass mixin 在编译后的 CSS 中使用 Sass 变量中声明的值进行转换。例如：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// X-Small devices (portrait phones, less than 576px)
// No media query for \`xs\` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (width >= 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (width >= 768px) { ... }

// Large devices (desktops, 1024px and up)
@media (width >= 1024px) { ... }

// X-Large devices (large desktops, 1280px and up)
@media (width >= 1280px) { ... }

// XX-Large devices (larger desktops, 1536px and up)
@media (width >= 1536px) { ... }`" lang="scss"></CodeHighlight>
</div>
    <h3 id="max-width">最大宽度<a class="anchor-link" aria-label="链接到本节：最大宽度" href="#max-width">
      </a></h3>
    <p>我们偶尔会使用相反方向的媒体查询（给定屏幕尺寸<em>或更小</em>）：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// No media query necessary for xs breakpoint as it’s effectively \`@media (max-width: 0) { ... }\`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(2xl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}`" lang="scss"></CodeHighlight></div>
    <p>这些 mixin 使用断点值，通过现代范围语法创建 <code>max-width</code> 媒体查询。例如：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// \`xs\` returns only a ruleset and no media query
// ... { ... }

// \`sm\` applies to x-small devices (portrait phones, less than 576px)
@media (width < 576px) { ... }

// \`md\` applies to small devices (landscape phones, less than 768px)
@media (width < 768px) { ... }

// \`lg\` applies to medium devices (tablets, less than 1024px)
@media (width < 1024px) { ... }

// \`xl\` applies to large devices (desktops, less than 1280px)
@media (width < 1280px) { ... }

// \`2xl\` applies to x-large devices (large desktops, less than 1536px)
@media (width < 1536px) { ... }`" lang="scss"></CodeHighlight></div>
    <h3 id="single-breakpoint">单一断点<a class="anchor-link"
        aria-label="链接到本节：单一断点" href="#single-breakpoint"> </a></h3>
    <p>还有用于通过最小和最大断点宽度定位单个屏幕尺寸区间的媒体查询和 mixin。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(2xl) { ... }`" lang="scss"></CodeHighlight></div>
    <p>例如，<code>@include media-breakpoint-only(md) { ... }</code> 会生成：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`@media (width >= 768px) and (width < 1024px) { ... }`" lang="scss"></CodeHighlight>
    </div>
    <h3 id="between-breakpoints">断点之间<a class="anchor-link"
        aria-label="链接到本节：断点之间" href="#between-breakpoints"> </a></h3>
    <p>类似地，媒体查询可以跨越多个断点宽度：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`@include media-breakpoint-between(md, xl) { ... }`" lang="scss"></CodeHighlight>
    </div>
    <p>其结果为：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// Example
// Apply styles starting from medium devices and up to extra large devices
@media (width >= 768px) and (width < 1280px) { ... }`" lang="scss"></CodeHighlight>
    </div>
    <h2 id="container-queries">容器查询<a class="anchor-link"
        aria-label="链接到本节：容器查询" href="#container-queries"> </a></h2>
    <p>除了基于视口的媒体查询外，Bootstrap 还为某些组件使用了<a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries">容器查询</a>。容器查询允许元素响应父元素的尺寸而非视口尺寸，从而实现更灵活、更模块化的响应式行为。</p>
    <p>容器查询使用与视口媒体查询相同的断点值。</p>
    <h3 id="usage-in-bootstrap">在 Bootstrap 中的用法<a class="anchor-link"
        aria-label="链接到本节：在 Bootstrap 中的用法" href="#usage-in-bootstrap"> </a></h3>
    <p>以下组件使用容器查询：</p>
    <ul>
      <li>
        <p><strong><a href="/docs/6.0/components/navbar">导航栏（Navbar）</a></strong>——使用容器查询实现其响应式展开行为。<code>.navbar</code> 元素被设置为查询容器，而 <code>.*:navbar-expand</code> 类使用 <code>@container</code> 查询而非 <code>@media</code> 查询。这意味着导航栏响应的是自身的宽度而非视口宽度，使其在放置于不同布局环境（例如侧边栏或受限容器内）时更具适应性。</p>
      </li>
      <li>
        <p><strong><a href="/docs/6.0/components/stepper">步骤条（Stepper）</a></strong>——<code>.stepper-overflow</code> 包装器使用 <code>container-type: inline-size</code> 为水平滚动步骤条模式建立包含上下文。</p>
      </li>
      <li>
        <p><strong><a href="/docs/6.0/components/list-group">列表组（List group）</a></strong>——<code>.*:list-group-horizontal</code> 类使用 <code>@container</code> 查询，使列表组根据其查询容器的宽度而非视口宽度在垂直和水平布局之间切换。</p>
      </li>
      <li>
        <p><strong><a href="/docs/6.0/components/card">卡片（Card）</a></strong>——<code>.card-group</code> 布局使用 <code>@container</code> 查询，根据其查询容器的宽度而非视口宽度将卡片排列为等宽列。</p>
      </li>
    </ul>
    <p>以下是导航栏如何实现容器查询：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// The navbar is defined as a query container
.navbar {
  container-type: inline-size;
}

// Responsive classes use container queries
.lg\:navbar-expand {
  @container (min-width: 1024px) {
    // Expanded navbar styles...
  }
}`" lang="scss"></CodeHighlight></div>
    <h3 id="setting-a-container">设置容器<a class="anchor-link"
        aria-label="链接到本节：设置容器" href="#setting-a-container"> </a></h3>
    <p>使用 <code>set-container()</code> mixin 将元素建立为查询容器：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// Default: inline-size containment
.my-component {
  @include set-container();
  // Output: container-type: inline-size;
}

// With explicit type
.my-component {
  @include set-container(size);
  // Output: container-type: size;
}

// With a name (uses shorthand property)
.my-component {
  @include set-container(inline-size, sidebar);
  // Output: container: sidebar / inline-size;
}`" lang="scss"></CodeHighlight></div>
    <h3 id="container-query-mixins">容器查询 mixin<a class="anchor-link"
        aria-label="链接到本节：容器查询 mixin" href="#container-query-mixins"> </a></h3>
    <p>与用于基于视口的媒体查询的 <code>media-breakpoint-*</code> mixin 类似，Bootstrap 提供了使用相同断点值和范围语法的容器查询 mixin。</p>
    <h4 id="min-width-1">最小宽度<a class="anchor-link" aria-label="链接到本节：最小宽度"
        href="#min-width-1"> </a></h4>
    <p>使用 <code>container-breakpoint-up()</code> 在容器至少达到给定断点宽度时应用样式：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`.my-component {
  @include set-container();
}

.my-component-child {
  // …

  @include container-breakpoint-up(md) {
    // Styles for when container is at least 768px wide
  }

  @include container-breakpoint-up(lg) {
    // Styles for when container is at least 1024px wide
  }
}`" lang="scss"></CodeHighlight></div>
    <p>这些 mixin 使用与媒体查询相同的现代范围语法。例如：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`@container (width >= 768px) { ... }
@container (width >= 1024px) { ... }`" lang="scss"></CodeHighlight></div>
    <h4 id="max-width-1">最大宽度<a class="anchor-link" aria-label="链接到本节：最大宽度"
        href="#max-width-1"> </a></h4>
    <p>使用 <code>container-breakpoint-down()</code> 在容器窄于给定断点时应用样式：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// Sass usage
@include container-breakpoint-down(lg) { ... }

// Compiled CSS
@container (width < 1024px) { ... }`" lang="scss"></CodeHighlight>
    <h4 id="single-breakpoint-1">单一断点<a class="anchor-link"
        aria-label="链接到本节：单一断点" href="#single-breakpoint-1"> </a></h4>
    <p>使用 <code>container-breakpoint-only()</code> 定位单个断点范围：</p></div>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// Sass usage
@include container-breakpoint-only(md) { ... }

// Compiled CSS
@container (width >= 768px) and (width < 1024px) { ... }`" lang="scss"></CodeHighlight></div>
    <h4 id="between-breakpoints-1">断点之间<a class="anchor-link"
        aria-label="链接到本节：断点之间" href="#between-breakpoints-1"> </a></h4>
    <p>使用 <code>container-breakpoint-between()</code> 跨越多个断点宽度：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`// Sass usage
@include container-breakpoint-between(md, xl) { ... }

// Compiled CSS
@container (width >= 768px) and (width < 1280px) { ... }`" lang="scss"></CodeHighlight></div>
    <h3 id="named-containers">命名容器<a class="anchor-link" aria-label="链接到本节：命名容器"
        href="#named-containers"> </a></h3>
    <p>所有容器查询 mixin 都接受一个可选的容器名称参数，用于查询特定的祖先容器。这在你有嵌套容器时非常有用：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`.sidebar {
  @include set-container(inline-size, sidebar);
}

.main-content {
  @include set-container(inline-size, main);
}

// Query the sidebar container specifically, even if nested inside main
.widget {
  @include container-breakpoint-up(md, sidebar) {
    // …
  }
}`" lang="scss"></CodeHighlight></div>
    <p>编译后的输出会包含容器名称：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code="`@container sidebar (width >= 768px) { ... }`" lang="scss"></CodeHighlight></div>

    <nav class="docs-links-nav py-9">
      <div class="d-flex justify-content-stretch gap-9 lh-1">
        <a href="/docs/6.0/customize/optimize/"
          class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
          <div class="fg-3">← 上一页</div>
          <div class="fw-semibold">优化</div>
          <div class="fg-3">自定义</div>
        </a><a href="/docs/6.0/layout/containers/" class="d-flex flex-column gap-3 text-decoration-none flex-grow-1"
          rel="next">
          <div class="fg-3">下一页 →</div>
          <div class="fw-semibold">容器</div>
          <div class="fg-3">布局</div>
        </a>
      </div>
    </nav>
  </div>
</template>