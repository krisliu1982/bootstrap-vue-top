<template>
  <article class="bd-content">
    <h1>进度条</h1>
    <p class="lead">使用 Bootstrap 自定义进度条的文档和示例，包括对堆叠条形、动画背景和文本标签的支持。</p>

    <Callout>
      <p>
        <strong>v5.3.0 中的新标记 ——</strong> 我们已弃用进度条先前使用的 HTML 结构，并用更易于访问的结构取而代之。先前的结构在 v6 之前仍可继续使用。
       <a href="/migration#improved-markup-for-progress-bars">查看迁移指南中的变更内容。</a>
      </p>
    </Callout>
    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>
      进度条组件由两个 HTML 元素、一些用于设置宽度的 CSS 以及若干属性构建而成。我们不使用
     <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">HTML5 的 <code>&lt;progress&gt;</code> 元素</a>，从而确保你可以堆叠进度条、为其添加动画，并在其上方放置文本标签。
    </p>
    <ul>
      <li>我们使用 <code>.progress</code> 作为包装器，以指示进度条的最大值。</li>
      <li><code>.progress</code> 包装器还需要 <code>role=&quot;progressbar&quot;</code> 和 <code>aria</code> 属性以实现可访问性，包括一个可访问的名称（使用 <code>aria-label</code>、<code>aria-labelledby</code> 或类似方式）。</li>
      <li>内部的 <code>.progress-bar</code> 仅用于可视化条形和标签。</li>
      <li><code>.progress-bar</code> 需要内联样式、工具类或自定义 CSS 来设置其宽度。</li>
      <li>我们提供了一个特殊的 <code>.progress-stacked</code> 类，用于创建多个/堆叠的进度条。</li>
    </ul>
    <p>将以上内容组合起来，就得到了下面的示例。</p>
    <Example
      code='<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 0%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>'
    />
    <h2 id="bar-sizing">条形尺寸<a class="anchor-link" href="#bar-sizing" aria-label="条形尺寸链接"></a></h2>
    <h3 id="width">宽度<a class="anchor-link" href="#width" aria-label="宽度链接"></a></h3>
    <p>Bootstrap 提供了一些<a href="/utilities/sizing">用于设置宽度的工具类</a>。根据你的需求，它们可能有助于快速配置 <code>.progress-bar</code> 的宽度。</p>
    <Example
      code='<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-75"></div>
</div>'
    />
    <h3 id="height">高度<a class="anchor-link" href="#height" aria-label="高度链接"></a></h3>
    <p>你只需在 <code>.progress</code> 容器上设置 <code>height</code> 值，因此如果你更改该值，内部的 <code>.progress-bar</code> 会自动相应地调整大小。</p>
    <Example
      code='<div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 1px">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
  <div class="progress-bar" style="width: 25%"></div>
</div>'
    />
    <h2 id="labels">标签<a class="anchor-link" href="#labels" aria-label="标签链接"></a></h2>
    <p>在 <code>.progress-bar</code> 内放置文本，即可为进度条添加标签。</p>
    <Example
      code='<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>'
    />
    <h3 id="long-labels">长标签<a class="anchor-link" href="#long-labels" aria-label="长标签链接"></a></h3>
    <p>
      请注意，默认情况下，<code>.progress-bar</code> 内的内容由 <code>overflow: hidden</code> 控制，因此不会溢出条形之外。如果你的进度条比其标签短，内容将被截断，可能变得难以阅读。要更改此行为，你可以使用
     <a href="/utilities/overflow">overflow 工具类</a>中的 <code>.overflow-visible</code>。
    </p>
    <Callout type="warning">
      <p>
        使用这种方法时，比内部进度条更长的标签可能无法完全可访问，因为它依赖于文本颜色与
        <code>.progress</code> 和 <code>.progress-bar</code> 背景颜色都达到正确的对比度。在实现此示例时请务必谨慎。
      </p>
      <p>如果文本可能与进度条重叠，我们通常建议将标签显示在进度条外部，以获得更好的可访问性。</p>
    </Callout>
    <h2 id="backgrounds">背景<a class="anchor-link" href="#backgrounds" aria-label="背景链接"></a></h2>
    <p>使用背景工具类来更改各个进度条的外观。</p>
    <Example
      code='<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%"></div>
</div>'
    />
    <Callout name="warning-color-assistive-technologies" />
    <p>
      如果你要为自定义背景颜色的进度条添加标签，请务必同时设置合适的
     <a href="/utilities/colors#colors">文本颜色</a>，以使标签保持可读并具有足够的对比度。我们建议使用<a href="/helpers/color-background">颜色和背景</a>辅助类。
    </p>
    <Example
      code='<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-success" style="width: 25%">25%</div>
</div>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-info" style="width: 50%">50%</div>
</div>
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
</div>
<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-danger" style="width: 100%">100%</div>
</div>'
    />
    <h2 id="multiple-bars">多个条形<a class="anchor-link" href="#multiple-bars" aria-label="多个条形链接"></a></h2>
    <p>你可以在带有 <code>.progress-stacked</code> 的容器中放入多个进度条组件，从而创建一个单个堆叠进度条。请注意，在这种情况下，用于设置进度条可视宽度的样式<em>必须</em>应用于 <code>.progress</code> 元素，而不是 <code>.progress-bar</code>。</p>
    <Example
      code='<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>'
    />
    <h2 id="striped">条纹<a class="anchor-link" href="#striped" aria-label="条纹链接"></a></h2>
    <p>为任意 <code>.progress-bar</code> 添加 <code>.progress-bar-striped</code>，即可通过 CSS 渐变在进度条背景颜色上应用条纹。</p>
    <Example
      code='<div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
</div>'
    />
    <h2 id="animated-stripes">动画条纹<a class="anchor-link" href="#animated-stripes" aria-label="动画条纹链接"></a></h2>
    <p>条纹渐变也可以添加动画。为 <code>.progress-bar</code> 添加 <code>.progress-bar-animated</code>，即可通过 CSS3 动画让条纹从右向左移动。</p>
    <Example
      code='<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，进度条现在在
      <code>.progress</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="progress-css-vars" file="scss/_progress.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="progress-variables" file="scss/_variables.scss" />
    <h3 id="keyframes">关键帧<a class="anchor-link" href="#keyframes" aria-label="关键帧链接"></a></h3>
    <p>用于为 <code>.progress-bar-animated</code> 创建 CSS 动画。包含在 <code>scss/_progress-bar.scss</code> 中。</p>
    <ScssDocs name="progress-keyframes" file="scss/_progress.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#how-it-works">工作原理</a></li>
      <li>
       <a href="#bar-sizing">条形尺寸</a>
        <ul>
          <li><a href="#width">宽度</a></li>
          <li><a href="#height">高度</a></li>
        </ul>
      </li>
      <li>
       <a href="#labels">标签</a>
        <ul>
          <li><a href="#long-labels">长标签</a></li>
        </ul>
      </li>
      <li><a href="#backgrounds">背景</a></li>
      <li><a href="#multiple-bars">多个条形</a></li>
      <li><a href="#striped">条纹</a></li>
      <li><a href="#animated-stripes">动画条纹</a></li>
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
</script>
