<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-text">
      <a href="#text-alignment">文本对齐</a>
      <a href="#text-wrap">文本环绕与溢出</a>
      <a href="#text-break">分词</a>
      <a href="#text-transform">文本转换</a>
      <a href="#text-size">字体大小</a>
      <a href="#text-fw">字体粗细和斜体字</a>
      <a href="#text-lh">行高</a>
      <a href="#text-monospace">等宽字体</a>
      <a href="#text-reset">重置颜色</a>
      <a href="#text-decoration">文字装饰</a>
      <a href="#text-truncation">文本截断</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-text" class="docs-content">
    <h1>Text 文本</h1>
    <p class="fs-4 fw-light">
      有关用于控制文本对齐、换行、粗细等常见文本功能的文档及示例。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/text/" target="_blank">Bootstrap Text</a>
    </p>
    <p class="fs-4 fw-light">
      用省略号来截断过长的文本段落。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/helpers/text-truncation/" target="_blank"
        >Bootstrap Text truncation
      </a>
    </p>

    <h2 id="text-alignment">
      文本对齐<a class="anchor-link" aria-label="Link to this section: 文本对齐" href="#text-alignment"> </a>
    </h2>
    <p>
      通过使用文本对齐类，可以轻松地将文本与组件对齐。首先，对于左对齐、右对齐和居中对齐，都提供了响应式类，这些类与网格系统所使用的视口宽度断点保持一致。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="text-start">Start aligned text on all viewport sizes.</p>
        <p class="text-center">Center aligned text on all viewport sizes.</p>
        <p class="text-end">End aligned text on all viewport sizes.</p>

        <p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
        <p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
        <p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
        <p class="text-xl-end">End aligned text on viewports sized XL (extra large) or wider.</p>
        <p class="text-xxl-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p>
      </div>
      <code-highlight type="html" :code="alignmentCode" label="html" />
    </div>

    <h2 id="text-wrap">
      文本环绕与溢出<a class="anchor-link" aria-label="Link to this section: 文本环绕与溢出" href="#text-wrap"> </a>
    </h2>
    <p>用 <code>.text-wrap</code> 类包裹文本。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="badge text-bg-primary text-wrap" style="width: 6rem">This text should wrap.</div>
      </div>
      <code-highlight type="html" :code="wrap1Code" label="html" />
    </div>
    <p>使用 <code>.text-nowrap</code> 类可防止文本换行。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="text-nowrap bg-body-secondary border" style="width: 8rem">
          This text should overflow the parent.
        </div>
      </div>
      <code-highlight type="html" :code="wrap2Code" label="html" />
    </div>

    <h2 id="text-break">分词<a class="anchor-link" aria-label="Link to this section: 分词" href="#text-break"> </a></h2>
    <p>
      通过使用 <code>.text-break</code> 来设置 <code>word-wrap: break-word</code> 和
      <code>word-break: break-word</code> ，可以防止长字符串破坏组件的布局。我们使用
      <code>word-wrap</code> 而不是更常见的 <code>overflow-wrap</code> ，以获得更广泛的浏览器支持，并添加已弃用的
      <code>word-break： break-word</code> 来避免与弹性容器相关的问题。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="text-break">
          mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
        </p>
      </div>
      <code-highlight type="html" :code="breakCode" label="html" />
    </div>
    <p class="text-bg-warning">
      请注意，在阿拉伯语这种最常用的右至左语言中，无法实现单词的换行。因此，我们在右至左编译的 CSS 中移除了
      <code>.text-break</code> 这个样式。
    </p>

    <h2 id="text-transform">
      文本转换<a class="anchor-link" aria-label="Link to this section: 文本转换" href="#text-transform"> </a>
    </h2>
    <p>
      使用我们的文本大小写类（如 <code>text-lowercase</code>、<code>text-uppercase</code> 或
      <code>text-capitalize</code>）对组件中的文本进行转换。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="text-lowercase">Lowercased text.</p>
        <p class="text-uppercase">Uppercased text.</p>
        <p class="text-capitalize">CapiTaliZed text.</p>
      </div>
      <code-highlight type="html" :code="transformCode" label="html" />
    </div>
    <p>请注意，<code>.text-capitalize</code> 只会将每个单词的第一个字母改为大写，而其他字母的大小写则不会受到影响。</p>

    <h2 id="text-size">
      字体大小<a class="anchor-link" aria-label="Link to this section: 字体大小" href="#text-size"> </a>
    </h2>
    <p>
      迅速更改文本的字体大小。虽然我们的标题类（例如 <code>.h1</code> - <code>.h6</code>）会应用
      <code>字体大小</code>、<code>字体加粗程度</code> 和 <code>行高</code>，但这些工具 <em>仅</em> 会应用
      <code>字体大小</code>。这些工具的字体大小与 HTML 的标题元素相匹配，因此随着数字的增加，其尺寸会减小。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="fs-1">.fs-1 text</p>
        <p class="fs-2">.fs-2 text</p>
        <p class="fs-3">.fs-3 text</p>
        <p class="fs-4">.fs-4 text</p>
        <p class="fs-5">.fs-5 text</p>
        <p class="fs-6">.fs-6 text</p>
      </div>
      <code-highlight type="html" :code="sizeCode" label="html" />
    </div>

    <h2 id="text-fw">
      字体粗细和斜体字<a class="anchor-link" aria-label="Link to this section: 字体粗细和斜体字" href="#text-fw"> </a>
    </h2>
    <p>
      使用这些工具可以快速更改文本的字体粗细或字体样式。<code>font-style</code> 类工具简写为 <code>.fst-*</code>，而
      <code>font-weight</code> 类工具则简写为 <code>.fw-*</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="fw-bold">Bold text.</p>
        <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
        <p class="fw-semibold">Semibold weight text.</p>
        <p class="fw-medium">Medium weight text.</p>
        <p class="fw-normal">Normal weight text.</p>
        <p class="fw-light">Light weight text.</p>
        <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
        <p class="fst-italic">Italic text.</p>
        <p class="fst-normal">Text with normal font style</p>
      </div>
      <code-highlight type="html" :code="fwCode" label="html" />
    </div>

    <h2 id="text-lh">行高<a class="anchor-link" aria-label="Link to this section: 行高" href="#text-lh"> </a></h2>
    <p>通过使用 <code>.lh-*</code> 通配符来更改行高。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="lh-1">
          This is a long paragraph written to show how the line-height of an element is affected by our utilities.
          Classes are applied to the element itself or sometimes the parent element. These classes can be customized as
          needed with our utility API.
        </p>
        <p class="lh-sm">
          This is a long paragraph written to show how the line-height of an element is affected by our utilities.
          Classes are applied to the element itself or sometimes the parent element. These classes can be customized as
          needed with our utility API.
        </p>
        <p class="lh-base">
          This is a long paragraph written to show how the line-height of an element is affected by our utilities.
          Classes are applied to the element itself or sometimes the parent element. These classes can be customized as
          needed with our utility API.
        </p>
        <p class="lh-lg">
          This is a long paragraph written to show how the line-height of an element is affected by our utilities.
          Classes are applied to the element itself or sometimes the parent element. These classes can be customized as
          needed with our utility API.
        </p>
      </div>
      <code-highlight type="html" :code="lhCode" label="html" />
    </div>

    <h2 id="text-monospace">
      等宽字体<a class="anchor-link" aria-label="Link to this section: 等宽字体" href="#text-monospace"> </a>
    </h2>
    <p>将内容更改为我们的等宽字体，请使用 <code>.font-monospace</code> 这个样式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="font-monospace">This is in monospace</p>
      </div>
      <code-highlight type="html" :code="monospaceCode" label="html" />
    </div>

    <h2 id="text-reset">
      重置颜色<a class="anchor-link" aria-label="Link to this section: 重置颜色" href="#text-reset"> </a>
    </h2>
    <p>使用 <code>.text-reset</code> 可以重置文本或链接的颜色，使其继承其父元素的颜色。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="text-body-secondary">Secondary body text with a <a href="#" class="text-reset">reset link</a>.</p>
      </div>
      <code-highlight type="html" :code="resetCode" label="html" />
    </div>

    <h2 id="text-decoration">
      文字装饰<a class="anchor-link" aria-label="Link to this section: 文字装饰" href="#text-decoration"> </a>
    </h2>
    <p>在组件中使用文本装饰类来装饰文本。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="text-decoration-underline">This text has a line underneath it.</p>
        <p class="text-decoration-line-through">This text has a line going through it.</p>
        <a href="#" class="text-decoration-none">This link has its text decoration removed</a>
      </div>
      <code-highlight type="html" :code="decorationCode" label="html" />
    </div>

    <h2 id="text-truncation">
      文本截断<a class="anchor-link" aria-label="Link to this section: 文本截断" href="#text-truncation"> </a>
    </h2>
    <p>
      对于较长的内容，您可以添加一个 <code>.text-truncate</code> 类来使用省略号对文本进行截断。<strong
        >此功能需要 <code>display: inline-block</code> 或 <code>display: block</code> 属性。</strong
      >
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <!-- Block level -->
        <div class="row">
          <div class="col-2 text-truncate">This text is quite long, and will be truncated once displayed.</div>
        </div>

        <!-- Inline level -->
        <span class="d-inline-block text-truncate" style="max-width: 150px">
          This text is quite long, and will be truncated once displayed.
        </span>
      </div>
      <code-highlight type="html" :code="truncateCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const alignmentCode = `
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">End aligned text on viewports sized XL (extra large) or wider.</p>
<p class="text-xxl-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p>`;

const wrap1Code = `
<div class="badge text-bg-primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>`;

const wrap2Code = `
<div class="text-nowrap bg-body-secondary border" style="width: 8rem;">
  This text should overflow the parent.
</div>`;

const breakCode = `
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>`;

const transformCode = `
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
`;

const sizeCode = `
<p class="fs-1">.fs-1 text</p>
<p class="fs-2">.fs-2 text</p>
<p class="fs-3">.fs-3 text</p>
<p class="fs-4">.fs-4 text</p>
<p class="fs-5">.fs-5 text</p>
<p class="fs-6">.fs-6 text</p>
`;

const fwCode = `
<p class="fw-bold">Bold text.</p>
<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p class="fw-semibold">Semibold weight text.</p>
<p class="fw-medium">Medium weight text.</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p class="fst-italic">Italic text.</p>
<p class="fst-normal">Text with normal font style</p>
`;

const lhCode = `
<p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
`;

const monospaceCode = `
<p class="font-monospace">This is in monospace</p>
`;

const resetCode = `
<p class="text-body-secondary">
  Secondary body text with a <a href="#" class="text-reset">reset link</a>.
</p>`;

const decorationCode = `
<p class="text-decoration-underline">This text has a line underneath it.</p>
<p class="text-decoration-line-through">This text has a line going through it.</p>
<a href="#" class="text-decoration-none">This link has its text decoration removed</a>`;

const truncateCode = `
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    This text is quite long, and will be truncated once displayed.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  This text is quite long, and will be truncated once displayed.
</span>`;
</script>
