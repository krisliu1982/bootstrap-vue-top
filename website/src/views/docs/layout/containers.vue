<template>
  <div class="docs-intro">
    <h1>容器</h1>
    <p>容器是 Bootstrap 的基本构件，用于在给定设备或视口中容纳、填充并对齐你的内容。</p>
  </div>
  <div class="docs-toc">
    <nav id="TableOfContents" aria-label="目录">
      <ul>
        <li><a href="#how-they-work">工作原理</a></li>
        <li><a href="#default-container">默认容器</a></li>
        <li><a href="#responsive-containers">响应式容器</a></li>
        <li><a href="#fluid-containers">流式容器</a></li>
        <li><a href="#css">CSS</a>
          <ul>
            <li><a href="#sass-variables">Sass 变量</a></li>
            <li><a href="#sass-mixins">Sass mixin</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents">
    <h2 id="how-they-work">工作原理<a class="anchor-link" aria-label="链接到本节：工作原理"
        href="#how-they-work"> </a></h2>
    <p>容器是 Bootstrap 中最基础的布局元素，<strong>在使用我们的默认网格系统时是必需的</strong>。容器用于容纳、填充并（有时）居中其内部的内容。虽然容器<em>可以</em>嵌套，但大多数布局并不需要嵌套容器。</p>
    <p>Bootstrap 提供三种不同的容器：</p>
    <ul>
      <li><code>.container</code>，在每个响应式断点设置 <code>max-width</code></li>
      <li><code>.{breakpoint}:container</code>，在达到指定断点之前为 <code>width: 100%</code></li>
      <li><code>.container-fluid</code>，在所有断点下均为 <code>width: 100%</code></li>
    </ul>
    <p>下表展示了每种容器的 <code>max-width</code> 在各断点下与原始 <code>.container</code> 和 <code>.container-fluid</code> 的对比。</p>
    <p>在我们的<a href="/docs/6.0/examples/grid/#containers">网格示例</a>中查看它们的实际效果并进行比较。</p>
    <div class="table-responsive">
      <table class="table md:table-stacked">
        <thead>
          <tr>
            <th></th>
            <th>超小<div class="fw-normal">&lt;576px</div>
            </th>
            <th>小<div class="fw-normal">≥576px</div>
            </th>
            <th>中<div class="fw-normal">≥768px</div>
            </th>
            <th>大<div class="fw-normal">≥1024px</div>
            </th>
            <th>超大<div class="fw-normal">≥1280px</div>
            </th>
            <th>超超大<div class="fw-normal">≥1536px</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-cell=""><code>.container</code></td>
            <td data-cell="超小"><span class="fg-2">100%</span></td>
            <td data-cell="小">540px</td>
            <td data-cell="中">720px</td>
            <td data-cell="大">960px</td>
            <td data-cell="超大">1140px</td>
            <td data-cell="超超大">1440px</td>
          </tr>
          <tr>
            <td data-cell=""><code>.sm:container</code></td>
            <td data-cell="超小"><span class="fg-2">100%</span></td>
            <td data-cell="小">540px</td>
            <td data-cell="中">720px</td>
            <td data-cell="大">960px</td>
            <td data-cell="超大">1140px</td>
            <td data-cell="超超大">1440px</td>
          </tr>
          <tr>
            <td data-cell=""><code>.md:container</code></td>
            <td data-cell="超小"><span class="fg-2">100%</span></td>
            <td data-cell="小"><span class="fg-2">100%</span></td>
            <td data-cell="中">720px</td>
            <td data-cell="大">960px</td>
            <td data-cell="超大">1140px</td>
            <td data-cell="超超大">1440px</td>
          </tr>
          <tr>
            <td data-cell=""><code>.lg:container</code></td>
            <td data-cell="超小"><span class="fg-2">100%</span></td>
            <td data-cell="小"><span class="fg-2">100%</span></td>
            <td data-cell="中"><span class="fg-2">100%</span></td>
            <td data-cell="大">960px</td>
            <td data-cell="超大">1140px</td>
            <td data-cell="超超大">1440px</td>
          </tr>
          <tr>
            <td data-cell=""><code>.xl:container</code></td>
            <td data-cell="超小"><span class="fg-2">100%</span></td>
            <td data-cell="小"><span class="fg-2">100%</span></td>
            <td data-cell="中"><span class="fg-2">100%</span></td>
            <td data-cell="大"><span class="fg-2">100%</span></td>
            <td data-cell="超大">1140px</td>
            <td data-cell="超超大">1440px</td>
          </tr>
          <tr>
            <td data-cell=""><code>.2xl:container</code></td>
            <td data-cell="超小"><span class="fg-2">100%</span></td>
            <td data-cell="小"><span class="fg-2">100%</span></td>
            <td data-cell="中"><span class="fg-2">100%</span></td>
            <td data-cell="大"><span class="fg-2">100%</span></td>
            <td data-cell="超大"><span class="fg-2">100%</span></td>
            <td data-cell="超超大">1440px</td>
          </tr>
          <tr>
            <td data-cell=""><code>.container-fluid</code></td>
            <td data-cell="超小"><span class="fg-2">100%</span></td>
            <td data-cell="小"><span class="fg-2">100%</span></td>
            <td data-cell="中"><span class="fg-2">100%</span></td>
            <td data-cell="大"><span class="fg-2">100%</span></td>
            <td data-cell="超大"><span class="fg-2">100%</span></td>
            <td data-cell="超超大"><span class="fg-2">100%</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 id="default-container">默认容器<a class="anchor-link"
        aria-label="链接到本节：默认容器" href="#default-container"> </a></h2>
    <p>我们的默认 <code>.container</code> 类是一个响应式、固定宽度的容器，意味着它的 <code>max-width</code> 会在每个断点发生变化。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code='`<div class="container">
  <!-- Content here -->
</div>`' lang="html"></CodeHighlight>
    </div>
    <h2 id="responsive-containers">响应式容器<a class="anchor-link"
        aria-label="链接到本节：响应式容器" href="#responsive-containers"> </a></h2>
    <p>响应式容器允许你指定一个在达到指定断点之前保持 100% 宽度的类，达到该断点后，我们会为更高的各个断点应用 <code>max-width</code>。例如，<code>.sm:container</code> 初始为 100% 宽度，直到达到 <code>sm</code> 断点，之后它会随 <code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>2xl</code> 逐级放大。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>    
    <CodeHighlight :code='`<div class="sm:container">100% wide until small breakpoint</div>
<div class="md:container">100% wide until medium breakpoint</div>
<div class="lg:container">100% wide until large breakpoint</div>
<div class="xl:container">100% wide until extra large breakpoint</div>
<div class="2xl:container">100% wide until extra extra large breakpoint</div>`' lang="html"></CodeHighlight></div>
    <h2 id="fluid-containers">流式容器<a class="anchor-link" aria-label="链接到本节：流式容器"
        href="#fluid-containers"> </a></h2>
    <p>使用 <code>.container-fluid</code> 获得全宽容器，横跨视口的整个宽度。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code='`<div class="container-fluid">
  ...
</div>`' lang="html"></CodeHighlight></div>
    <h2 id="css">CSS<a class="anchor-link" aria-label="链接到本节：CSS" href="#css"> </a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" aria-label="链接到本节：Sass 变量"
        href="#sass-variables"> </a></h3>
    <p>如上所示，Bootstrap 生成了一系列预定义的容器类，帮助你构建所需的布局。你可以通过修改驱动它们的 Sass map（位于 <code>_config.scss</code>）来自定义这些预定义的容器类：</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code='`$container-max-widths: ();
// stylelint-disable-next-line scss/dollar-variable-default
$container-max-widths: defaults(
  (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1200px,
    2xl: 1440px
  ),
  $container-max-widths
);`' lang="scss" label="scss/_config.scss"></CodeHighlight></div>
    <p>关于如何修改我们的 Sass map 和变量的更多信息和示例，请参阅<a
        href="/docs/6.0/layout/grid#css">网格文档的 Sass 部分</a>。</p>
    <h3 id="sass-mixins">Sass mixin<a class="anchor-link" aria-label="链接到本节：Sass mixin"
        href="#sass-mixins"> </a></h3>
    <p>除了自定义 Sass 之外，你还可以使用我们的 Sass mixin 创建自己的容器。</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
    <CodeHighlight :code='`// Source mixin
@mixin make-container($padding-x: $container-padding-x) {
  width: 100%;
  padding-inline: $padding-x;
  margin-inline: auto;
}

// Usage
.custom-container {
  @include make-container();
}`' lang="scss"></CodeHighlight></div>

    <nav class="docs-links-nav py-9">
      <div class="d-flex justify-content-stretch gap-9 lh-1">
        <a href="/docs/6.0/layout/breakpoints/"
          class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
          <div class="fg-3">← 上一页</div>
          <div class="fw-semibold">断点</div>
          <div class="fg-3">布局</div>
        </a><a href="/docs/6.0/layout/grid/" class="d-flex flex-column gap-3 text-decoration-none flex-grow-1"
          rel="next">
          <div class="fg-3">下一页 →</div>
          <div class="fw-semibold">网格</div>
          <div class="fg-3">布局</div>
        </a>
      </div>
    </nav>
  </div>
</template>