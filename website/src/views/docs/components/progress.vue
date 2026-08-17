<template>
  <div class="docs-toc">
    <nav id="docs-nav-progress">
      <a href="#progress-about">使用说明</a>
      <a href="#progress-size">宽度和高度</a>
      <a href="#progress-label">标签</a>
      <a href="#progress-bg">背景色</a>
      <a href="#progress-multiple">多个条形图</a>
      <a href="#progress-striped">条纹</a>
      <a href="#progress-animation">动画</a>
      <a href="#progress-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-progress" class="docs-content">
    <h1>Progress 进度条</h1>
    <p class="fs-4 fw-light">
      有关使用 Bootstrap 自定义进度条的文档和示例，该进度条支持堆叠条、动画背景以及文本标签功能。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/placeholders/" target="_blank">Bootstrap Placeholders</a>
    </p>

    <h2 id="progress-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#progress-about"> </a>
    </h2>
    <p>
      进度组件由两个 HTML 元素、一些用于设置宽度的 CSS 代码以及少量属性构成。我们并未使用
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" target="_blank"
        >HTML5 中的 <code>&lt;progress&gt;</code> 元素</a
      >，这样您便能够堆叠进度条、对其进行动画处理，并在其上方添加文本标签。
    </p>
    <ul class="docs-content-list">
      <li>我们使用 <code>.progress</code> 作为包裹元素，以指示进度条的最大值。</li>
      <li>
        <code>.progress</code> 包裹元素还需要包含 <code>role="progressbar"</code> 和
        <code>aria</code> 属性，以便使其具有可访问性，包括一个可访问的名称（使用 <code>aria-label</code>、<code
          >aria-labelledby</code
        >
        或类似的方法）。
      </li>
      <li>我们仅使用内部的 <code>.progress-bar</code> 来呈现视觉上的条形和标签。</li>
      <li><code>.progress-bar</code> 需要内联样式、实用类或自定义 CSS 来设置其宽度。</li>
      <li>
        我们提供了一个特殊的
        <code>.progress-stacked</code> 类来创建多个/堆叠的进度条。
      </li>
    </ul>
    <p>将上述内容综合起来，便得到了以下的示例。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: 0%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: 25%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: 50%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: 75%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: 100%"></div>
        </div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="progress-size">
      宽度和高度<a class="anchor-link" aria-label="Link to this section: 宽度和高度" href="#progress-size"> </a>
    </h2>
    <p>
      Bootstrap 提供了一些用于设置宽度的
      <a href="https://getbootstrap.com/docs/5.3/utilities/sizing" target="_blank">utilities for setting width</a
      >。根据您的需求，这些工具可能会有助于快速确定 <code>.progress-bar</code> 的宽度设置。
    </p>
    <p>
      您只需在 <code>.progress</code> 容器上设置一个 <code>height</code> 值，这样如果您更改该值，内部的
      <code>.progress-bar</code> 将会自动相应地调整大小。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar w-75"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Example 1px high"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          style="height: 1px"
        >
          <div class="progress-bar" style="width: 25%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Example 20px high"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          style="height: 20px"
        >
          <div class="progress-bar" style="width: 25%"></div>
        </div>
      </div>
      <code-highlight type="html" :code="sizeCode" label="html" />
    </div>

    <h2 id="progress-label">
      标签<a class="anchor-link" aria-label="Link to this section: 标签" href="#progress-label"> </a>
    </h2>
    <p>通过在 <code>.progress-bar</code> 元素内添加文本，为进度条添加标签。</p>
    <p>
      请注意，默认情况下，<code>.progress-bar</code> 元素内的内容会通过
      <code>overflow: hidden</code>
      进行控制，因此不会超出进度条范围。如果您的进度条长度小于其标签长度，内容将会被截断，可能会变得难以阅读。若要更改此行为，您可以使用
      <code>.overflow-visible</code> 类。
    </p>
    <p>
      标签的长度若超过进度条内部部分，可能无法通过这种方法完全实现可访问性，因为这种方法依赖于文本颜色与
      <code>.progress</code> 和
      <code>.progress-bar</code>
      背景颜色之间的对比度符合要求。在实施此示例时请务必谨慎。
    </p>
    <p>如果文本能够与进度条重叠，我们通常建议将标签显示在进度条之外，以提高可访问性。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div
          class="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: 25%">25%</div>
        </div>
      </div>
      <code-highlight type="html" :code="labelCode" label="html" />
    </div>

    <h2 id="progress-bg">
      背景色<a class="anchor-link" aria-label="Link to this section: 背景色" href="#progress-bg"> </a>
    </h2>
    <p>使用背景辅助类来改变单个进度条的外观。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div
          class="progress"
          role="progressbar"
          aria-label="Success"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-success" style="width: 25%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Info"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-info" style="width: 50%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Warning"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-warning" style="width: 75%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Danger"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-danger" style="width: 100%"></div>
        </div>
        <hr />
        <div
          class="progress"
          role="progressbar"
          aria-label="Success"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar text-bg-success" style="width: 25%">25%</div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Info"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar text-bg-info" style="width: 50%">50%</div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Warning"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Danger"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar text-bg-danger" style="width: 100%">100%</div>
        </div>
      </div>
      <code-highlight type="html" :code="bgCode" label="html" />
    </div>
    <p class="text-bg-info">
      <strong>无障碍使用提示：</strong>
      仅通过颜色来传达意义仅能提供一种视觉上的提示，这对于使用辅助技术（如屏幕阅读器）的用户来说是无法获取到的。请确保其含义能从内容本身中清晰展现（例如，具有
      <a href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast" target="_blank"
        ><em>足够的</em> 颜色对比度</a
      >
      的可见文本），或者通过其他方式予以说明，比如使用带有
      <code>.visually-hidden</code> 类的隐藏文本。
    </p>

    <h2 id="progress-multiple">
      多个条形图<a class="anchor-link" aria-label="Link to this section: 多个条形图" href="#progress-multiple"> </a>
    </h2>
    <p>
      您可以在包含
      <code>.progress-stacked</code>
      标记的容器内添加多个进度组件，以创建一个单一的堆叠式进度条。请注意，在这种情况下，设置进度条视觉宽度的样式
      <em>必须</em> 应用到 <code>.progress</code> 元素，而非 <code>.progress-bar</code> 元素。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="progress-stacked">
          <div
            class="progress"
            role="progressbar"
            aria-label="Segment one"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 15%"
          >
            <div class="progress-bar"></div>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-label="Segment two"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 30%"
          >
            <div class="progress-bar bg-success"></div>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-label="Segment three"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 20%"
          >
            <div class="progress-bar bg-info"></div>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="multipleCode" label="html" />
    </div>

    <h2 id="progress-striped">
      条纹<a class="anchor-link" aria-label="Link to this section: 条纹" href="#progress-striped"> </a>
    </h2>
    <p>
      将 <code>.progress-bar-striped</code> 添加到任何 <code>.progress-bar</code> 中，即可通过 CSS
      渐变效果在进度条的背景色上添加条纹图案。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div
          class="progress"
          role="progressbar"
          aria-label="Default striped"
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Success striped"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Info striped"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Warning striped"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
        </div>
        <br />
        <div
          class="progress"
          role="progressbar"
          aria-label="Danger striped"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
        </div>
      </div>
      <code-highlight type="html" :code="stripedCode" label="html" />
    </div>

    <h2 id="progress-animation">
      动画<a class="anchor-link" aria-label="Link to this section: 动画" href="#progress-animation"> </a>
    </h2>
    <p>
      这种条纹渐变效果也可以进行动画处理。在
      <code>.progress-bar</code> 元素中添加 <code>.progress-bar-animated</code> 类，即可通过 CSS3
      动画实现条纹从右向左的动画效果。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div
          class="progress"
          role="progressbar"
          aria-label="Animated striped"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
        </div>
      </div>
      <code-highlight type="html" :code="animationCode" label="html" />
    </div>

    <h2 id="progress-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#progress-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，下拉菜单现在在
      <code>.progress</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_progress.scss" />
  </div>
</template>

<script setup>
const exampleCode = `
<div class="progress" role="progressbar" aria-label="Basic example" 
  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 0%"></div>
</div>

<div class="progress" role="progressbar" 
  aria-label="Basic" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>

<div class="progress" role="progressbar" 
  aria-label="Basic" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 50%"></div>
</div>

<div class="progress" role="progressbar" 
  aria-label="Basic" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>

<div class="progress" role="progressbar" 
  aria-label="Basic" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>`;

const sizeCode = `
<div class="progress" role="progressbar" 
  aria-label="Basic" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-75"></div>
</div>

<div class="progress" role="progressbar" 
  aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" 
  style="height: 1px">
  <div class="progress-bar" style="width: 25%"></div>
</div>

<div class="progress" role="progressbar" 
  aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" 
  style="height: 20px">
  <div class="progress-bar" style="width: 25%"></div>
</div>`;

const labelCode = `
<div class="progress" role="progressbar" 
  aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>`;

const bgCode = `
<div class="progress" role="progressbar" 
  aria-label="Success" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Warning" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Danger" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%"></div>
</div>

<div class="progress" role="progressbar" 
  aria-label="Success" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-success" style="width: 25%">25%</div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-info" style="width: 50%">50%</div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Warning" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Danger" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-danger" style="width: 100%">100%</div>
</div>`;

const multipleCode = `
<div class="progress-stacked">
  <div class="progress" role="progressbar" 
    aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" 
    style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" 
    aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" 
    style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
  <div class="progress" role="progressbar" 
    aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" 
    style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>`;

const stripedCode = `
<div class="progress" role="progressbar" 
  aria-label="Default striped" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Success striped" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Info striped" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Warning striped" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" 
  aria-label="Danger striped" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
</div>`;

const animationCode = `
<div class="progress" role="progressbar" 
  aria-label="Animated striped" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
</div>`;

const css1Code = `
--#{$prefix}progress-height: #{$progress-height};
@include rfs($progress-font-size, --#{$prefix}progress-font-size);
--#{$prefix}progress-bg: #{$progress-bg};
--#{$prefix}progress-border-radius: #{$progress-border-radius};
--#{$prefix}progress-box-shadow: #{$progress-box-shadow};
--#{$prefix}progress-bar-color: #{$progress-bar-color};
--#{$prefix}progress-bar-bg: #{$progress-bar-bg};
--#{$prefix}progress-bar-transition: #{$progress-bar-transition};`;
</script>
