<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-link">
      <a href="#link-opacity">透明度调整</a>
      <a href="#link-underline">下划线调整</a>
      <a href="#link-color">链接颜色</a>
      <a href="#link-icon">图标链接</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-link" class="docs-content">
    <h1>Link 链接</h1>
    <p class="fs-4 fw-light">
      链接工具用于对您的链接进行样式设置，以调整其颜色、透明度、下划线偏移量、下划线颜色等。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/link/" target="_blank">Boostrap Link</a>
    </p>
    <p class="fs-4 fw-light">
      快速使用 Bootstrap 图标或其他图标来创建风格化的超链接。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/helpers/icon-link/" target="_blank">Boostrap Icon link</a>
    </p>

    <h2 id="link-opacity">
      透明度调整<a class="anchor-link" aria-label="Link to this section: 透明度调整" href="#link-opacity"> </a>
    </h2>
    <p>
      使用工具更改链接中 <code>rgba()</code> 颜色值的 alpha 不透明度。请注意，对颜色的不透明度进行更改可能会导致链接出现
      <a href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast" target="_blank"
        ><em>不足</em> 的对比度问题</a
      >。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p><a class="link-opacity-10" href="#">Link opacity 10</a></p>
        <p><a class="link-opacity-25" href="#">Link opacity 25</a></p>
        <p><a class="link-opacity-50" href="#">Link opacity 50</a></p>
        <p><a class="link-opacity-75" href="#">Link opacity 75</a></p>
        <p><a class="link-opacity-100" href="#">Link opacity 100</a></p>
      </div>
      <code-highlight type="html" :code="opacity1Code" label="html" />
    </div>
    <p>您甚至可以在鼠标悬停时更改透明度级别。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p><a class="link-opacity-10-hover" href="#">Link hover opacity 10</a></p>
        <p><a class="link-opacity-25-hover" href="#">Link hover opacity 25</a></p>
        <p><a class="link-opacity-50-hover" href="#">Link hover opacity 50</a></p>
        <p><a class="link-opacity-75-hover" href="#">Link hover opacity 75</a></p>
        <p><a class="link-opacity-100-hover" href="#">Link hover opacity 100</a></p>
      </div>
      <code-highlight type="html" :code="opacity2Code" label="html" />
    </div>

    <h2 id="link-underline">
      下划线调整<a class="anchor-link" aria-label="Link to this section: 下划线调整" href="#link-underline"> </a>
    </h2>
    <h3>下划线颜色</h3>
    <p>改变下划线的颜色，使其与链接文本的颜色无关。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p><a href="#" class="link-underline-primary">Primary underline</a></p>
        <p><a href="#" class="link-underline-secondary">Secondary underline</a></p>
        <p><a href="#" class="link-underline-success">Success underline</a></p>
        <p><a href="#" class="link-underline-danger">Danger underline</a></p>
        <p><a href="#" class="link-underline-warning">Warning underline</a></p>
        <p><a href="#" class="link-underline-info">Info underline</a></p>
        <p><a href="#" class="link-underline-light">Light underline</a></p>
        <p><a href="#" class="link-underline-dark">Dark underline</a></p>
      </div>
      <code-highlight type="html" :code="underline1Code" label="html" />
    </div>
    <h3>下划线偏移量</h3>
    <p>更改下划线与文本之间的距离。偏移量是以“em”单位设定的，会根据元素当前的“字体大小”自动调整。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p><a href="#">Default link</a></p>
        <p><a class="link-offset-1" href="#">Offset 1 link</a></p>
        <p><a class="link-offset-2" href="#">Offset 2 link</a></p>
        <p><a class="link-offset-3" href="#">Offset 3 link</a></p>
      </div>
      <code-highlight type="html" :code="underline2Code" label="html" />
    </div>
    <h3>下划线不透明度</h3>
    <p>
      更改下划线的不透明度。需要先添加 <code>.link-underline</code> 类，然后设置一个
      <code>rgba()</code> 颜色，最后根据此颜色来修改 alpha 不透明度。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>
      </div>
      <code-highlight type="html" :code="underline3Code" label="html" />
    </div>
    <h3>悬停变体</h3>
    <p>
      就像 <code>.link-opacity-*-hover</code> 这些样式工具一样，<code>.link-offset</code> 和
      <code>.link-underline-opacity</code> 这些样式工具默认也包含了
      <code>：hover</code> 版本。您可以随意组合使用，以创建独特的链接样式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <a
          class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          href="#"
        >
          Underline opacity 0
        </a>
      </div>
      <code-highlight type="html" :code="underline4Code" label="html" />
    </div>

    <h2 id="link-color">
      链接颜色<a class="anchor-link" aria-label="Link to this section: 链接颜色" href="#link-color"> </a>
    </h2>
    <p>
      您可以使用 <code>.link-*</code> 这些类来为链接添加颜色。与之不同的是
      <a href="https://getbootstrap.com/docs/5.3/utilities/colors"><code>.text-*</code> 类</a>，这些类具有
      <code>:hover</code> 和
      <code>:focus</code> 状态。某些链接样式使用相对较浅的前景色，应仅在深色背景上使用，以确保有足够的对比度。
    </p>
    <p class="text-bg-info">
      <strong>请注意！</strong> <code>.link-body-emphasis</code> 是目前唯一一种能适应不同颜色模式的有颜色的链接。在 v6
      版本发布之前，它都被视为一种特殊情况，届时我们将能够更全面地为不同颜色模式重新设定主题颜色。在此之前，它是一种独特的、高对比度的链接颜色，并带有自定义的
      <code>:hover</code> 和 <code>：focus</code> 样式。不过，它仍然会响应新的链接样式工具。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p><a href="#" class="link-primary">Primary link</a></p>
        <p><a href="#" class="link-secondary">Secondary link</a></p>
        <p><a href="#" class="link-success">Success link</a></p>
        <p><a href="#" class="link-danger">Danger link</a></p>
        <p><a href="#" class="link-warning">Warning link</a></p>
        <p><a href="#" class="link-info">Info link</a></p>
        <p><a href="#" class="link-light">Light link</a></p>
        <p><a href="#" class="link-dark">Dark link</a></p>
        <p><a href="#" class="link-body-emphasis">Emphasis link</a></p>
      </div>
      <code-highlight type="html" :code="color1Code" label="html" />
    </div>
    <p>彩色链接也可以通过我们的链接工具进行修改。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p>
          <a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Primary link</a
          >
        </p>
        <p>
          <a href="#" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Secondary link</a
          >
        </p>
        <p>
          <a href="#" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Success link</a
          >
        </p>
        <p>
          <a href="#" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Danger link</a
          >
        </p>
        <p>
          <a href="#" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Warning link</a
          >
        </p>
        <p>
          <a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Info link</a
          >
        </p>
        <p>
          <a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Light link</a
          >
        </p>
        <p>
          <a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >Dark link</a
          >
        </p>
        <p>
          <a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
            >Emphasis link</a
          >
        </p>
      </div>
      <code-highlight type="html" :code="color2Code" label="html" />
    </div>
    <p class="text-bg-info">
      <strong>无障碍使用提示：</strong>
      仅通过颜色来传达意义仅能提供一种视觉上的提示，这对于使用辅助技术（如屏幕阅读器）的用户来说是无法获取到的。请确保其含义能从内容本身中清晰展现（例如，具有
      <a href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast" target="_blank"
        ><em>足够的</em> 颜色对比度</a
      >
      的可见文本），或者通过其他方式予以说明，比如使用带有 <code>.visually-hidden</code> 类的隐藏文本。
    </p>

    <h2 id="link-icon">
      图标链接<a class="anchor-link" aria-label="Link to this section: 图标链接" href="#link-icon"> </a>
    </h2>
    <p>
      该图标链接辅助组件会修改我们默认的链接样式，以提升其外观，并能快速使图标与文字的搭配更加协调统一。对齐方式通过内联的
      Flexbox 样式和默认的 <code>gap</code> 值来设定。我们通过自定义的偏移量和颜色来美化下划线。图标会自动调整大小至
      <code>1em</code>，以与关联文字的 <code>font-size</code> 最为匹配。
    </p>
    <p>
      图标链接假定您使用的是
      <a href="https://icons.getbootstrap.com" target="_blank">Bootstrap 图标</a
      >，但您也可以使用任何您喜欢的图标或图片。
    </p>
    <p class="text-bg-info">
      当图标仅用于装饰时，应使用
      <code>aria-hidden="true"</code>
      使其不被辅助技术识别，正如我们在示例中所做的那样。而对于那些具有含义的图标，则应通过在 SVG 中添加
      <code>role="img"</code> 和适当的 <code>aria-label="..."</code> 来提供相应的文字替代内容。
    </p>
    <p>
      使用一个常规的 <code>&lt;a&gt;</code> 元素，添加
      <code>.icon-link</code> 类，并在链接文本的左侧或右侧插入一个图标。该图标会自动调整大小、定位和颜色。添加
      <code>.icon-link-hover</code> 类，即可实现鼠标悬停时将图标向右移动的效果。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <a class="icon-link" href="#"> <bi-box />Icon link </a>
          <a class="icon-link" href="#"> Icon link<bi-arrow-right /> </a>
          <a class="icon-link icon-link-hover" href="#"> Icon link<bi-arrow-right /> </a>
          <a class="icon-link icon-link-hover link-success link-underline-success" href="#">
            Icon link<bi-arrow-right />
          </a>
        </div>
      </div>
      <code-highlight type="html" :code="icon1Code" label="html" />
    </div>
    <p>可以需要修改 <code>--bs-link-*</code> 和 <code>--bs-icon-link-*</code> 这些 CSS 变量，以改变默认的外观。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -0.125rem, 0)" href="#">
            <bi-box />Icon link
          </a>
          <a class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84" href="#">
            Icon link<bi-arrow-right />
          </a>
        </div>
      </div>
      <code-highlight type="html" :code="icon2Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const opacity1Code = `
<p><a class="link-opacity-10" href="#">Link opacity 10</a></p>
<p><a class="link-opacity-25" href="#">Link opacity 25</a></p>
<p><a class="link-opacity-50" href="#">Link opacity 50</a></p>
<p><a class="link-opacity-75" href="#">Link opacity 75</a></p>
<p><a class="link-opacity-100" href="#">Link opacity 100</a></p>`;

const opacity2Code = `
<p><a class="link-opacity-10-hover" href="#">Link hover opacity 10</a></p>
<p><a class="link-opacity-25-hover" href="#">Link hover opacity 25</a></p>
<p><a class="link-opacity-50-hover" href="#">Link hover opacity 50</a></p>
<p><a class="link-opacity-75-hover" href="#">Link hover opacity 75</a></p>
<p><a class="link-opacity-100-hover" href="#">Link hover opacity 100</a></p>`;

const underline1Code = `
<p><a href="#" class="link-underline-primary">Primary underline</a></p>
<p><a href="#" class="link-underline-secondary">Secondary underline</a></p>
<p><a href="#" class="link-underline-success">Success underline</a></p>
<p><a href="#" class="link-underline-danger">Danger underline</a></p>
<p><a href="#" class="link-underline-warning">Warning underline</a></p>
<p><a href="#" class="link-underline-info">Info underline</a></p>
<p><a href="#" class="link-underline-light">Light underline</a></p>
<p><a href="#" class="link-underline-dark">Dark underline</a></p>`;

const underline2Code = `
<p><a href="#">Default link</a></p>
<p><a class="link-offset-1" href="#">Offset 1 link</a></p>
<p><a class="link-offset-2" href="#">Offset 2 link</a></p>
<p><a class="link-offset-3" href="#">Offset 3 link</a></p>`;

const underline3Code = `
<p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>`;

const underline4Code = `
<a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
  Underline opacity 0
</a>`;

const color1Code = `
<p><a href="#" class="link-primary">Primary link</a></p>
<p><a href="#" class="link-secondary">Secondary link</a></p>
<p><a href="#" class="link-success">Success link</a></p>
<p><a href="#" class="link-danger">Danger link</a></p>
<p><a href="#" class="link-warning">Warning link</a></p>
<p><a href="#" class="link-info">Info link</a></p>
<p><a href="#" class="link-light">Light link</a></p>
<p><a href="#" class="link-dark">Dark link</a></p>
<p><a href="#" class="link-body-emphasis">Emphasis link</a></p>
`;

const color2Code = `
<p><a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</a></p>
<p><a href="#" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Secondary link</a></p>
<p><a href="#" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Success link</a></p>
<p><a href="#" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Danger link</a></p>
<p><a href="#" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Warning link</a></p>
<p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Info link</a></p>
<p><a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Light link</a></p>
<p><a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</a></p>
<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>
`;

const icon1Code = `
<div class="hstack gap-3">
  <a class="icon-link" href="#">
    <bi-box />Icon link
  </a>
  <a class="icon-link" href="#">
    Icon link<bi-arrow-right />
  </a>
  <a class="icon-link icon-link-hover" href="#">
    Icon link<bi-arrow-right />
  </a>
  <a class="icon-link icon-link-hover link-success link-underline-success" href="#">
    Icon link<bi-arrow-right />
  </a>
</div>`;

const icon2Code = `
<div class="hstack gap-3">
  <a class="icon-link icon-link-hover" 
    style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
    <bi-box />Icon link
  </a>
  <a class="icon-link icon-link-hover" 
    style="--bs-link-hover-color-rgb: 25, 135, 84;" href="#">
    Icon link<bi-arrow-right />
  </a>
</div>`;
</script>
