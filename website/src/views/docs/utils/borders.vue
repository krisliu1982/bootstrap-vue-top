<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-borders">
      <a href="#borders-base">基础用法</a>
      <a href="#borders-color">颜色调整</a>
      <a href="#borders-opacity">透明度调整</a>
      <a href="#borders-width">宽度调整</a>
      <a href="#borders-radius">圆角调整</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-borders" class="docs-content">
    <h1>Borders 边框</h1>
    <p class="fs-4 fw-light">
      使用边框工具可以快速设置元素的边框样式和圆角样式。非常适合用于图片、按钮或其他任何元素。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/borders/" target="_blank">Boostrap Borders</a>
    </p>

    <h2 id="borders-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#borders-base"> </a>
    </h2>
    <p>使用边框工具来添加或移除元素的边框。您可以选择全部边框，也可以逐个选择边框。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap docs-border-utils">
          <span class="border"></span>
          <span class="border-top"></span>
          <span class="border-end"></span>
          <span class="border-bottom"></span>
          <span class="border-start"></span>
        </div>
      </div>
      <code-highlight type="html" :code="base1Code" label="html" />
    </div>
    <p>或者移除边框：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap docs-border-utils">
          <span class="border border-0"></span>
          <span class="border border-top-0"></span>
          <span class="border border-end-0"></span>
          <span class="border border-bottom-0"></span>
          <span class="border border-start-0"></span>
        </div>
      </div>
      <code-highlight type="html" :code="base2Code" label="html" />
    </div>

    <h2 id="borders-color">
      颜色调整<a class="anchor-link" aria-label="Link to this section: 颜色调整" href="#borders-color"> </a>
    </h2>
    <p class="text-bg-info">
      像 <code>.border-*</code> 这类由我们最初的 <code>$theme-colors</code> Sass
      生成的边框相关样式，目前尚不能响应颜色模式，不过任何 <code>.border-*-subtle</code> 样式都会生效。这一问题将在版本
      6 中得到解决。
    </p>
    <p>使用基于我们主题颜色所构建的工具来更改边框颜色。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap docs-border-utils">
          <span class="border border-primary"></span>
          <span class="border border-primary-subtle"></span>
          <span class="border border-secondary"></span>
          <span class="border border-secondary-subtle"></span>
          <span class="border border-success"></span>
          <span class="border border-success-subtle"></span>
          <span class="border border-danger"></span>
          <span class="border border-danger-subtle"></span>
          <span class="border border-warning"></span>
          <span class="border border-warning-subtle"></span>
          <span class="border border-info"></span>
          <span class="border border-info-subtle"></span>
          <span class="border border-light"></span>
          <span class="border border-light-subtle"></span>
          <span class="border border-dark"></span>
          <span class="border border-dark-subtle"></span>
          <span class="border border-black"></span>
          <span class="border border-white"></span>
        </div>
      </div>
      <code-highlight type="html" :code="color1Code" label="html" />
    </div>
    <p>或者修改某个组件的默认 <code>border-color</code>：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="mb-4">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control border-success"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">Dangerous heading</div>

        <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Changing border color and width
        </div>
      </div>
      <code-highlight type="html" :code="color2Code" label="html" />
    </div>

    <h2 id="borders-opacity">
      透明度调整<a class="anchor-link" aria-label="Link to this section: 透明度调整" href="#borders-opacity"> </a>
    </h2>
    <p>
      若要更改该不透明度，请通过自定义样式或内联样式来覆盖
      <code>--bs-border-opacity</code> 属性。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="border border-success p-2 mb-2">This is default success border</div>
        <div class="border border-success p-2" style="--bs-border-opacity: 0.5">This is 50% opacity success border</div>
      </div>
      <code-highlight type="html" :code="opacity1Code" label="html" />
    </div>
    <p>
      或者，您可以从以下任何一个
      <code>.border-opacity</code> 相关的工具中进行选择：
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="border border-success p-2 mb-2">This is default success border</div>
        <div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
        <div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
        <div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
        <div class="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>
      </div>
      <code-highlight type="html" :code="opacity2Code" label="html" />
    </div>

    <h2 id="borders-width">
      宽度调整<a class="anchor-link" aria-label="Link to this section: 宽度调整" href="#borders-width"> </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap docs-border-utils">
          <span class="border border-1"></span>
          <span class="border border-2"></span>
          <span class="border border-3"></span>
          <span class="border border-4"></span>
          <span class="border border-5"></span>
        </div>
      </div>
      <code-highlight type="html" :code="widthCode" label="html" />
    </div>

    <h2 id="borders-radius">
      圆角调整<a class="anchor-link" aria-label="Link to this section: 圆角调整" href="#borders-radius"> </a>
    </h2>
    <p>为元素添加样式类，以便轻松地使其边角呈圆弧状。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap docs-border-utils">
          <svg
            aria-label="Example rounded image: 75x75"
            class="docs-placeholder-img rounded"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example top rounded image: 75x75"
            class="docs-placeholder-img rounded-top"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example top rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example right rounded image: 75x75"
            class="docs-placeholder-img rounded-end"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example right rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example bottom rounded image: 75x75"
            class="docs-placeholder-img rounded-bottom"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example bottom rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example left rounded image: 75x75"
            class="docs-placeholder-img rounded-start"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example left rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
        </div>
      </div>
      <code-highlight type="html" :code="radius1Code" label="html" />
    </div>
    <p>
      使用缩放类来实现较大或较小的圆角效果。尺寸范围从 <code>0</code> 到 <code>5</code>（包括 <code>circle</code> 和
      <code>pill</code>），并且可以通过修改工具 API 来进行配置。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap docs-border-utils">
          <svg
            aria-label="Example non-rounded image: 75x75"
            class="docs-placeholder-img rounded-0"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example non-rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example small rounded image: 75x75"
            class="docs-placeholder-img rounded-1"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example small rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example default rounded image: 75x75"
            class="docs-placeholder-img rounded-2"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example default rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example large rounded image: 75x75"
            class="docs-placeholder-img rounded-3"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example large rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example larger rounded image: 75x75"
            class="docs-placeholder-img rounded-4"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example larger rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example extra large rounded image: 75x75"
            class="docs-placeholder-img rounded-5"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example extra large rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Completely round image: 75x75"
            class="docs-placeholder-img rounded-circle"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Completely round image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Rounded pill image: 150x75"
            class="docs-placeholder-img rounded-pill"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Rounded pill image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">150x75</text>
          </svg>
        </div>
      </div>
      <code-highlight type="html" :code="radius2Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap docs-border-utils">
          <svg
            aria-label="Example small rounded image: 75x75"
            class="docs-placeholder-img rounded-bottom-1"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example small rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example default left rounded image: 75x75"
            class="docs-placeholder-img rounded-start-2"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example default left rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example right completely round image: 75x75"
            class="docs-placeholder-img rounded-end-circle"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example right completely round image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example left rounded pill image: 75x75"
            class="docs-placeholder-img rounded-start-pill"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example left rounded pill image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
          <svg
            aria-label="Example extra large bottom rounded image: 75x75"
            class="docs-placeholder-img rounded-5 rounded-top-0"
            height="75"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Example extra large bottom rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">75x75</text>
          </svg>
        </div>
      </div>
      <code-highlight type="html" :code="radius3Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const base1Code = `
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>`;

const base2Code = `
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>`;

const color1Code = `
<span class="border border-primary"></span>
<span class="border border-primary-subtle"></span>
<span class="border border-secondary"></span>
<span class="border border-secondary-subtle"></span>
<span class="border border-success"></span>
<span class="border border-success-subtle"></span>
<span class="border border-danger"></span>
<span class="border border-danger-subtle"></span>
<span class="border border-warning"></span>
<span class="border border-warning-subtle"></span>
<span class="border border-info"></span>
<span class="border border-info-subtle"></span>
<span class="border border-light"></span>
<span class="border border-light-subtle"></span>
<span class="border border-dark"></span>
<span class="border border-dark-subtle"></span>
<span class="border border-black"></span>
<span class="border border-white"></span>`;

const color2Code = `
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" 
    class="form-control border-success" 
    id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
  Dangerous heading
</div>

<div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
  Changing border color and width
</div>`;

const opacity1Code = `
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2" style="--bs-border-opacity: .5;">
  This is 50% opacity success border
</div>`;

const opacity2Code = `
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2 mb-2 border-opacity-75">
  This is 75% opacity success border
</div>
<div class="border border-success p-2 mb-2 border-opacity-50">
  This is 50% opacity success border
</div>
<div class="border border-success p-2 mb-2 border-opacity-25">
  This is 25% opacity success border
</div>
<div class="border border-success p-2 border-opacity-10">
  This is 10% opacity success border
</div>`;

const widthCode = `
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>`;

const radius1Code = `
<img src="..." class="rounded" alt="...">
<img src="..." class="rounded-top" alt="...">
<img src="..." class="rounded-end" alt="...">
<img src="..." class="rounded-bottom" alt="...">
<img src="..." class="rounded-start" alt="...">`;

const radius2Code = `
<img src="..." class="rounded-0" alt="...">
<img src="..." class="rounded-1" alt="...">
<img src="..." class="rounded-2" alt="...">
<img src="..." class="rounded-3" alt="...">
<img src="..." class="rounded-4" alt="...">
<img src="..." class="rounded-5" alt="...">
<img src="..." class="rounded-circle" alt="...">
<img src="..." class="rounded-pill" alt="...">`;

const radius3Code = `
<img src="..." class="rounded-bottom-1" alt="...">
<img src="..." class="rounded-start-2" alt="...">
<img src="..." class="rounded-end-circle" alt="...">
<img src="..." class="rounded-start-pill" alt="...">
<img src="..." class="rounded-5 rounded-top-0" alt="...">`;
</script>
