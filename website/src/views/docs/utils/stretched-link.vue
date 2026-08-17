<template>
  <div class="docs-toc">
    <nav id="docs-nav-stretched-link">
      <a href="#stretched-link-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-stretched-link" class="docs-content">
    <h1>Stretched link 拉伸链接</h1>
    <p class="fs-4 fw-light">
      通过使用 CSS 将嵌套链接“拉伸”出来，可以使任何 HTML 元素或 Bootstrap 组件变为可点击状态。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/helpers/stretched-link/" target="_blank">Bootstrap Stretched link</a>
    </p>

    <h2 id="stretched-link-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#stretched-link-about"> </a>
    </h2>
    <p>
      将 <code>.stretched-link</code> 添加到链接中，以便通过 <code>::after</code> 伪元素使其
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block" target="_blank">包含块</a>
      变得可点击。在大多数情况下，这意味着具有 <code>position: relative;</code> 属性的包含链接带有
      <code>.stretched-link</code> 类的元素是可点击的。请注意，鉴于
      <a href="https://www.w3.org/TR/CSS21/visuren.html#propdef-position" target="_blank"
        >CSS 中 <code>position</code> 的工作原理</a
      >，<code>.stretched-link</code> 不能与大多数表格元素混合使用。
    </p>
    <p>
      在 Bootstrap 中，卡片默认具有“position: relative”属性，因此在这种情况下，您可以放心地将
      <code>.stretched-link</code> 类添加到卡片中的链接上，而无需进行其他 HTML 修改。
    </p>
    <p>
      对于拉伸链接，不建议使用多个链接和点击目标。不过，如果确实需要这样做，某些 <code>position</code> 和
      <code>z-index</code> 样式可能会有所帮助。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card" style="width: 18rem">
          <svg
            aria-label="Card image cap"
            class="bd-placeholder-img card-img-top"
            height="180"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Card image cap</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <div class="card-body">
            <h5 class="card-title">Card with stretched link</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="about1Code" label="html" />
    </div>
    <p>
      大多数自定义组件默认情况下并不包含 <code>position: relative</code> 属性，因此我们需要在此处添加
      <code>.position-relative</code> 类，以防止链接超出父元素范围。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="d-flex position-relative">
          <svg
            aria-label="Generic placeholder image22222"
            class="docs-placeholder-img flex-shrink-0 me-3"
            height="144"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="144"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Generic placeholder image22222</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <div>
            <h5 class="mt-0">Custom component with stretched link</h5>
            <p>
              This is some placeholder content for the custom component. It is intended to mimic what some real-world
              content would look like, and we’re using it here to give the component a bit of body and size.
            </p>
            <a href="#" class="stretched-link">Go somewhere</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="about2Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row g-0 bg-body-secondary position-relative">
          <div class="col-md-6 mb-md-0 p-md-4">
            <svg
              aria-label="Generic placeholder image"
              class="docs-placeholder-img w-100"
              height="200"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Generic placeholder image</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
          </div>
          <div class="col-md-6 p-4 ps-md-0">
            <h5 class="mt-0">Columns with stretched link</h5>
            <p>
              Another instance of placeholder content for this other custom component. It is intended to mimic what some
              real-world content would look like, and we’re using it here to give the component a bit of body and size.
            </p>
            <a href="#" class="stretched-link">Go somewhere</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="about3Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const about1Code = `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card with stretched link</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
  </div>
</div>`;

const about2Code = `
<div class="d-flex position-relative">
  <img src="..." class="flex-shrink-0 me-3" alt="...">
  <div>
    <h5 class="mt-0">Custom component with stretched link</h5>
    <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we’re using it here to give the component a bit of body and size.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>`;

const about3Code = `
<div class="row g-0 bg-body-secondary position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src="..." class="w-100" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Columns with stretched link</h5>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we’re using it here to give the component a bit of body and size.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>`;
</script>
