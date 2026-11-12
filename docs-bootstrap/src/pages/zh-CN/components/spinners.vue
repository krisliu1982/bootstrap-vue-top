<template>
  <article class="bd-content" data-pagefind-body>
    <h1>加载动画（Spinners）</h1>
    <p class="lead">使用 Bootstrap 加载动画指示组件或页面的加载状态，完全由 HTML 和 CSS 构建，无需 JavaScript。</p>

    <h2 id="about">关于<a class="anchor-link" href="#about" aria-label="关于链接"></a></h2>
    <p>Bootstrap“spinners”可用于在你的项目中显示加载状态。它们仅由 HTML 和 CSS 构建，这意味着你不需要任何 JavaScript 就能创建它们。不过，你仍需要一些自定义 JavaScript 来切换它们的可见性。它们的外观、对齐方式和尺寸可以通过我们出色的工具类轻松自定义。</p>
    <p>出于可访问性考虑，此处的每个加载器都包含 <code>role=&quot;status&quot;</code> 以及一个嵌套的 <code>&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;</code>。</p>
    <Callout name="info-prefersreducedmotion" />
    <h2 id="border-spinner">边框加载动画<a class="anchor-link" href="#border-spinner" aria-label="边框加载动画链接"></a></h2>
    <p>使用边框加载动画作为轻量级的加载指示器。</p>
    <Example
      code='<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>'
    />
    <h3 id="colors">颜色<a class="anchor-link" href="#colors" aria-label="颜色链接"></a></h3>
    <p>边框加载动画使用 <code>currentColor</code> 作为其 <code>border-color</code>，这意味着你可以使用<a href="/utilities/colors">文本颜色工具类</a>来自定义颜色。你可以在标准加载动画上使用我们的任何文本颜色工具类。</p>
    <Example
      :code="
        data['theme-colors']
          .map(
            (themeColor) => `<div class=&quot;spinner-border text-${themeColor.name}&quot; role=&quot;status&quot;>
  <span class=&quot;visually-hidden&quot;>Loading...</span>
</div>`
          )
          .join('\n')
      "
    /><Callout>
      <p>
        <strong>为什么不使用 <code>border-color</code> 工具类？</strong> 每个边框加载动画至少为一条边指定了 <code>transparent</code> 边框，因此 <code>.border-{color}</code> 工具类会覆盖它。
      </p>
    </Callout>
    <h2 id="growing-spinner">增长加载动画<a class="anchor-link" href="#growing-spinner" aria-label="增长加载动画链接"></a></h2>
    <p>如果你不喜欢边框加载动画，可以改用增长加载动画。虽然它在技术上并不旋转，但会不断地增长！</p>
    <Example
      code='<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>'
    />
    <p>同样地，这个加载动画使用 <code>currentColor</code> 构建，因此你可以通过<a href="/utilities/colors">文本颜色工具类</a>轻松更改其外观。下面是蓝色的示例，以及支持的各种变体。</p>
    <Example
      :code="
        data['theme-colors']
          .map(
            (themeColor) => `<div class=&quot;spinner-grow text-${themeColor.name}&quot; role=&quot;status&quot;>
  <span class=&quot;visually-hidden&quot;>Loading...</span>
</div>`
          )
          .join('\n')
      "
    />
    <h2 id="alignment">对齐<a class="anchor-link" href="#alignment" aria-label="对齐链接"></a></h2>
    <p>Bootstrap 中的加载动画使用 <code>rem</code>、<code>currentColor</code> 和 <code>display: inline-flex</code> 构建。这意味着它们可以轻松调整大小、更改颜色并快速对齐。</p>
    <h3 id="margin">外边距<a class="anchor-link" href="#margin" aria-label="外边距链接"></a></h3>
    <p>使用诸如 <code>.m-5</code> 的<a href="/utilities/spacing">外边距工具类</a>来轻松设置间距。</p>
    <Example
      code='<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>'
    />
    <h3 id="placement">放置<a class="anchor-link" href="#placement" aria-label="放置链接"></a></h3>
    <p>使用<a href="/utilities/flex">flexbox 工具类</a>、<a href="/utilities/float">浮动工具类</a>或<a href="/utilities/text">文本对齐</a>工具类，将加载动画精确放置到任何场景中你需要的位置。</p>
    <h4 id="flex">Flex</h4>
    <Example
      code='<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>'
    /><Example
      code='<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>'
    />
    <h4 id="floats">浮动</h4>
    <Example
      code='<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>'
    />
    <h4 id="text-align">文本对齐</h4>
    <Example
      code='<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>'
    />
    <h2 id="size">尺寸<a class="anchor-link" href="#size" aria-label="尺寸链接"></a></h2>
    <p>添加 <code>.spinner-border-sm</code> 和 <code>.spinner-grow-sm</code> 可创建更小的加载动画，以便在其他组件中快速使用。</p>
    <Example
      code='<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>'
    />
    <p>或者，根据需要，使用自定义 CSS 或内联样式来更改尺寸。</p>
    <Example
      code='<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>'
    />
    <h2 id="buttons">按钮<a class="anchor-link" href="#buttons" aria-label="按钮链接"></a></h2>
    <p>在按钮内使用加载动画，以指示某个操作正在处理或进行中。你也可以根据需要替换掉加载动画元素中的文本，并使用按钮自身的文本。</p>
    <Example
      code='<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>'
    /><Example
      code='<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，加载动画现在在
      <code>.spinner-border</code> 和 <code>.spinner-grow</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <p>边框加载动画的变量：</p>
    <ScssDocs name="spinner-border-css-vars" file="scss/_spinners.scss" />
    <p>增长加载动画的变量：</p>
    <ScssDocs name="spinner-grow-css-vars" file="scss/_spinners.scss" />
    <p>对于这两种加载动画，小尺寸加载动画修饰类用于根据需要更新这些 CSS 变量的值。例如，<code>.spinner-border-sm</code> 类做了以下事情：</p>
    <ScssDocs name="spinner-border-sm-css-vars" file="scss/_spinners.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="spinner-variables" file="scss/_variables.scss" />
    <h3 id="keyframes">关键帧<a class="anchor-link" href="#keyframes" aria-label="关键帧链接"></a></h3>
    <p>用于为我们的加载动画创建 CSS 动画。包含在 <code>scss/_spinners.scss</code> 中。</p>
    <ScssDocs name="spinner-border-keyframes" file="scss/_spinners.scss" /><ScssDocs name="spinner-grow-keyframes" file="scss/_spinners.scss" /> <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#about">关于</a></li>
      <li>
        <a href="#border-spinner">边框加载动画</a>
        <ul>
          <li><a href="#colors">颜色</a></li>
        </ul>
      </li>
      <li><a href="#growing-spinner">增长加载动画</a></li>
      <li>
        <a href="#alignment">对齐</a>
        <ul>
          <li><a href="#margin">外边距</a></li>
          <li><a href="#placement">放置</a></li>
        </ul>
      </li>
      <li><a href="#size">尺寸</a></li>
      <li><a href="#buttons">按钮</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#keyframes">关键帧</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import data from '@/data/data.js';
</script>
