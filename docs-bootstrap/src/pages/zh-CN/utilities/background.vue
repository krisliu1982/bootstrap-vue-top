<template>
  <article class="bd-content">
    <h1>背景</h1>
    <p>通过 `background-color` 传达含义，并使用渐变添加装饰效果。</p>

    <Callout name="warning-color-assistive-technologies" />
    <h2 id="background-color">背景色<a class="anchor-link" href="#background-color" aria-label="背景色链接"></a></h2>
    <p>
      与上下文文本颜色类类似，将元素的背景设置为任意上下文类。背景工具类<strong>不会设置 <code>color</code></strong
      >，因此在某些情况下你会希望使用 <code>.text-*</code> <a href="/utilities/colors">颜色工具类</a>。
    </p>
    <Callout>
      <p>由我们最初的 <code>$theme-colors</code> Sass 映射生成的 <code>.bg-*</code> 之类的背景工具类尚不能响应颜色模式，不过任何 <code>.bg-*-subtle</code> 工具类则可以。此问题将在 v6 中解决。</p> </Callout
    ><Example
      :code="
        [
          ...data['theme-colors'].map(
            (themeColor) => `<div class=&quot;p-3 mb-2 bg-${themeColor.name} ${themeColor.contrast_color ? `text-${themeColor.contrast_color}` : `text-white`}&quot;>.bg-${themeColor.name}</div>
<div class=&quot;p-3 mb-2 bg-${themeColor.name}-subtle text-${themeColor.name}-emphasis&quot;>.bg-${themeColor.name}-subtle</div>`
          ),
          `<div class=&quot;p-3 mb-2 bg-body-secondary&quot;>.bg-body-secondary</div>
<div class=&quot;p-3 mb-2 bg-body-tertiary&quot;>.bg-body-tertiary</div>
<div class=&quot;p-3 mb-2 bg-body text-body&quot;>.bg-body</div>
<div class=&quot;p-3 mb-2 bg-black text-white&quot;>.bg-black</div>
<div class=&quot;p-3 mb-2 bg-white text-dark&quot;>.bg-white</div>
<div class=&quot;p-3 mb-2 bg-transparent text-body&quot;>.bg-transparent</div>`
        ].join('\n')
      "
    />
    <h2 id="background-gradient">背景渐变<a class="anchor-link" href="#background-gradient" aria-label="背景渐变链接"></a></h2>
    <p>通过添加 <code>.bg-gradient</code> 类，会将线性渐变作为背景图像添加到背景中。该渐变从半透明白色开始，向下逐渐淡出。</p>
    <p>需要在自定义 CSS 中使用渐变吗？只需添加 <code>background-image: var(--bs-gradient);</code> 即可。</p>
    <div v-for="themeColor in data['theme-colors']" class="p-3 mb-2" :class="[`bg-${themeColor.name} bg-gradient`, themeColor.contrast_color ? 'text-' + themeColor.contrast_color : 'text-white']">.bg-{{ themeColor.name }}.bg-gradient</div>
    <div class="p-3 mb-2 bg-black bg-gradient text-white">.bg-black.bg-gradient</div>
    <h2 id="opacity">不透明度<a class="anchor-link" href="#opacity" aria-label="不透明度链接"></a></h2>
    <AddedIn version="5.1.0" />
    <p>从 v5.1.0 起，<code>background-color</code> 工具类使用 Sass 配合 CSS 变量生成。这样无需编译即可实时更改颜色，并实现动态 alpha 透明度变化。</p>
    <h3 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h3>
    <p>以我们默认的 <code>.bg-success</code> 工具类为例。</p>
    <CodeWrapper
      code=".bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
"
      lang="css"
    />
    <p>
      我们使用 <code>--bs-success</code> 的 RGB 版本（值为 <code>25, 135, 84</code>）CSS 变量，并附加第二个 CSS 变量 <code>--bs-bg-opacity</code> 用于 alpha 透明度（得益于局部 CSS 变量，其默认值为 <code>1</code>）。这意味着你现在每次使用 <code>.bg-success</code> 时，计算得到的 <code>color</code> 值都是 <code>rgba(25, 135, 84, 1)</code>。每个 <code>.bg-*</code> 类内部的局部 CSS 变量可避免继承问题，因此嵌套的工具类实例不会自动带有被修改的 alpha 透明度。
    </p>
    <h3 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h3>
    <p>要更改该不透明度，可通过自定义样式或内联样式覆盖 <code>--bs-bg-opacity</code>。</p>
    <Example
      code='<div class="bg-success p-2 text-white">This is default success background</div>
<div class="bg-success p-2" style="--bs-bg-opacity: .5;">This is 50% opacity success background</div>'
    />
    <p>或者，从任意 <code>.bg-opacity</code> 工具类中选择：</p>
    <Example
      code='<div class="bg-success p-2 text-white">This is default success background</div>
<div class="bg-success p-2 text-white bg-opacity-75">This is 75% opacity success background</div>
<div class="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
<div class="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
<div class="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <p>
      除了以下 Sass 功能之外，建议阅读有关我们内置的
      <a href="/customize/css-variables">CSS 自定义属性</a>（又称 CSS 变量）的内容，了解更多颜色等信息。
    </p>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>大多数 <code>background-color</code> 工具类由我们的主题颜色生成，这些主题颜色是从通用调色板变量重新分配的。</p>
    <ScssDocs name="color-variables" file="scss/_variables.scss" /><ScssDocs name="theme-color-variables" file="scss/_variables.scss" /><ScssDocs name="variable-gradient" file="scss/_variables.scss" />
    <p>灰度颜色也是可用的，但只有一部分会被用于生成工具类。</p>
    <ScssDocs name="gray-color-variables" file="scss/_variables.scss" />
    <p>用于在浅色和深色模式下设置 <code>.bg-*-subtle</code> 工具类中 <code>background-color</code> 的变量：</p>
    <ScssDocs name="theme-bg-subtle-variables" file="scss/_variables.scss" /><ScssDocs name="theme-bg-subtle-dark-variables" file="scss/_variables-dark.scss" />
    <h3 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射链接"></a></h3>
    <p>随后主题颜色会被放入 Sass 映射中，以便我们遍历它们来生成工具类、组件修饰符等。</p>
    <ScssDocs name="theme-colors-map" file="scss/_variables.scss" />
    <p>
      灰度颜色也可以作为 Sass 映射使用。
      <strong>该映射不用于生成任何工具类。</strong>
    </p>
    <ScssDocs name="gray-colors-map" file="scss/_variables.scss" />
    <p>RGB 颜色由另一个独立的 Sass 映射生成：</p>
    <ScssDocs name="theme-colors-rgb" file="scss/_maps.scss" />
    <p>背景色不透明度在此基础上构建，使用它们自己的映射，并由工具类 API 使用：</p>
    <ScssDocs name="utilities-bg-colors" file="scss/_maps.scss" />
    <p>颜色模式的背景色也可以作为 Sass 映射使用：</p>
    <ScssDocs name="theme-bg-subtle-map" file="scss/_maps.scss" /><ScssDocs name="theme-bg-subtle-dark-map" file="scss/_maps.scss" />
    <h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin链接"></a></h3>
    <p><strong>生成背景工具类不使用任何 mixin</strong>，但我们确实提供了一些额外的 mixin，用于你需要创建自定义渐变的其它场景。</p>
    <ScssDocs name="gradient-bg-mixin" file="scss/mixins/_gradients.scss" /><ScssDocs name="gradient-mixins" file="scss/mixins/_gradients.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      背景工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-bg-color" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#background-color">背景色</a></li>
      <li><a href="#background-gradient">背景渐变</a></li>
      <li>
        <a href="#opacity">不透明度</a>
        <ul>
          <li><a href="#how-it-works">工作原理</a></li>
          <li><a href="#example">示例</a></li>
        </ul>
      </li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-maps">Sass 映射</a></li>
          <li><a href="#sass-mixins">Sass mixin</a></li>
          <li><a href="#sass-utilities-api">Sass 工具类 API</a></li>
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
