<template>
  <div class="docs-toc">
    <nav id="docs-nav-breadcrumb">
      <a href="#breadcrumb-example">示例</a>
      <a href="#breadcrumb-divider">分隔线</a>
      <a href="#breadcrumb-accessibility">无障碍</a>
      <a href="#breadcrumb-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-breadcrumb" class="docs-content">
    <h1>Breadcrumb 面包屑</h1>
    <p class="fs-4 fw-light">
      在导航层次结构中指示当前页面的位置，该结构通过CSS自动添加分隔符。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/breadcrumb/" target="_blank">Bootstrap Breadcrumb</a>
    </p>

    <h2 id="breadcrumb-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#breadcrumb-example"> </a>
    </h2>
    <p>使用带有链接列表项的有序或无序列表来创建样式最简单的面包屑导航。根据需要，使用我们的工具来添加额外的样式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
        </nav>

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="breadcrumb-divider">
      分隔线<a class="anchor-link" aria-label="Link to this section: 分隔线" href="#breadcrumb-divider"> </a>
    </h2>
    <p>
      在 CSS 中，通过
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before" target="_blank"><code>::before</code></a>
      和
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content" target="_blank"><code>content</code></a>
      自动添加分隔符。如果需要，可以通过修改本地CSS自定义属性
      <code>--bs-breadcrumb-divider</code>，或通过 <code>$breadcrumb-divider</code> Sass 变量（及其 RTL 对应变量
      <code>$breadcrumb-divider-flipped</code> ）来更改分隔符。我们默认使用 Sass
      变量，该变量被设置为自定义属性的回退值。这样，您就可以随时覆盖全局分隔符，而无需重新编译 CSS。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>
      </div>
      <code-highlight type="html" :code="dividerCode" label="html" />
    </div>
    <p>
      在使用Sass进行修改时，需要使用
      <a href="https://sass-lang.com/documentation/modules/string/#quote" target="_blank">quote</a>
      函数来为字符串生成引号。例如，使用
      <code>&gt;</code> 作为分隔符时，可以这样使用：
    </p>
    <code-highlight type="scss" :code="divider1Code" label="scss" />
    <p>也可以使用<strong>嵌入式 SVG 图标</strong>。通过我们的CSS自定义属性应用它，或使用 Sass 变量。</p>
    <p class="text-bg-info">
      <strong>内联SVG需要正确转义字符。</strong>一些保留字符，如 <code>&lt;</code> 、<code>&gt;</code> 和
      <code>#</code>，必须进行URL编码或转义。我们使用
      <a href="https://getbootstrap.com/docs/5.3/customize/sass#escape-svg" target="_blank"
        ><code>escape-svg() Sass function</code></a
      >
      对 <code>$breadcrumb-divider</code> 变量进行此操作。在自定义 CSS
      变量时，您必须自己处理这个问题。有关更多信息，请阅读
      <a href="https://codepen.io/kevinweber/pen/dXWoRw" target="_blank">Kevin Weber’s explanations on CodePen</a>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav
          style="
            --bs-breadcrumb-divider: url(
              &#34;data:image/svg + xml,
              %3Csvgxmlns='http://www.w3.org/2000/svg'width='8'height='8'%3E%3Cpathd='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z'fill='%236c757d'/%3E%3C/svg%3E&#34;
            );
          "
          aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>
      </div>
      <code-highlight type="html" :code="divider2Code" label="html" />
      <code-highlight type="scss" :code="divider3Code" label="scss" />
    </div>
    <p>
      您还可以移除分隔符设置 <code>--bs-breadcrumb-divider: '';</code> （CSS 自定义属性中的空字符串被视为一个值），或将
      Sass 变量设置为 <code>$breadcrumb-divider: none;</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav style="--bs-breadcrumb-divider: ''" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>
      </div>
      <code-highlight type="html" :code="divider4Code" label="html" />
      <code-highlight type="scss" :code="divider5Code" label="scss" />
    </div>

    <h2 id="breadcrumb-accessibility">
      无障碍<a class="anchor-link" aria-label="Link to this section: 无障碍" href="#breadcrumb-accessibility"> </a>
    </h2>
    <p>
      由于面包屑提供了一种导航功能，因此建议在
      <code>&lt;nav&gt;</code> 元素中添加一个有意义的标签（如
      <code>aria-label="breadcrumb"</code>
      ）来描述所提供的导航类型，同时为该组中的最后一个项目应用
      <code>aria-current="page"</code>，以表明它代表当前页面。
    </p>
    <p>
      如需更多信息，请参阅
      <a href="https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/" target="_blank">ARIA创作实践指南面包屑模式</a>。
    </p>

    <h2 id="breadcrumb-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#breadcrumb-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，面包屑现在在
      <code>.breadcrumb</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_breadcrumb.scss" />
  </div>
</template>

<script setup>
const exampleCode = `
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`;

const dividerCode = `
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>`;

const divider1Code = `
$breadcrumb-divider: quote(">");`;

const divider2Code = `
<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>`;

const divider3Code = `
$breadcrumb-divider: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='#{$breadcrumb-divider-color}'/></svg>");`;

const divider4Code = `
<nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>`;

const divider5Code = `
$breadcrumb-divider: none;`;

const css1Code = `
--#{$prefix}breadcrumb-padding-x: #{$breadcrumb-padding-x};
--#{$prefix}breadcrumb-padding-y: #{$breadcrumb-padding-y};
--#{$prefix}breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};
@include rfs($breadcrumb-font-size, --#{$prefix}breadcrumb-font-size);
--#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};
--#{$prefix}breadcrumb-border-radius: #{$breadcrumb-border-radius};
--#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};
--#{$prefix}breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};
--#{$prefix}breadcrumb-item-active-color: #{$breadcrumb-active-color};`;
</script>
