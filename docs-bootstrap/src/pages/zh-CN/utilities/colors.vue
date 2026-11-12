<template>
  <article class="bd-content" data-pagefind-body>
    <h1>颜色</h1>
    <p class="lead">通过一些颜色工具类，用 `color` 传达含义。同时还支持为链接设置带有悬停状态的样式。</p>

    <Callout name="warning-color-assistive-technologies" />
    <h2 id="colors">颜色<a class="anchor-link" href="#colors" aria-label="颜色链接"></a></h2>
    <p>
      使用颜色工具类为文本着色。如果你想为链接着色，可以使用
     <a href="/helpers/colored-links"><code>.link-*</code> 工具类</a>，它们具有 <code>:hover</code> 和 <code>:focus</code> 状态。
    </p>
    <Callout>
      <p>由我们最初的 <code>$theme-colors</code> Sass 映射生成的 <code>.text-*</code> 之类的颜色工具类尚不能响应颜色模式，不过任何 <code>.text-*-emphasis</code> 工具类则可以。此问题将在 v6 中解决。</p> </Callout
    ><Example
      :code="
        [
          ...data['theme-colors'].map(
            (themeColor) => `<p class=&quot;text-${themeColor.name}${themeColor.contrast_color ? ` bg-${themeColor.contrast_color}` : ``}&quot;>.text-${themeColor.name}</p>
<p class=&quot;text-${themeColor.name}-emphasis&quot;>.text-${themeColor.name}-emphasis</p>`
          ),
          `<p class=&quot;text-body&quot;>.text-body</p>
<p class=&quot;text-body-emphasis&quot;>.text-body-emphasis</p>
<p class=&quot;text-body-secondary&quot;>.text-body-secondary</p>
<p class=&quot;text-body-tertiary&quot;>.text-body-tertiary</p>

<p class=&quot;text-black bg-white&quot;>.text-black</p>
<p class=&quot;text-white bg-dark&quot;>.text-white</p>
<p class=&quot;text-black-50 bg-white&quot;>.text-black-50</p>
<p class=&quot;text-white-50 bg-dark&quot;>.text-white-50</p>`
        ].join('\n')
      "
    /><Callout type="warning">
      <p><strong>弃用：</strong>随着 <code>.text-opacity-*</code> 工具类和文本工具类 CSS 变量的加入，<code>.text-black-50</code> 和 <code>.text-white-50</code> 自 v5.1.0 起已被弃用。它们将在 v6.0.0 中移除。</p> </Callout
    ><Callout type="warning">
      <p><strong>弃用：</strong>随着扩展主题颜色和变量的加入，<code>.text-muted</code> 工具类自 v5.3.0 起已被弃用。其默认值也已重新分配给新的 <code>--bs-secondary-color</code> CSS 变量，以更好地支持颜色模式。它将在 v6.0.0 中移除。</p>
    </Callout>
    <h2 id="opacity">不透明度<a class="anchor-link" href="#opacity" aria-label="不透明度链接"></a></h2>
    <AddedIn version="5.1.0" />
    <p>从 v5.1.0 起，文本颜色工具类使用 Sass 配合 CSS 变量生成。这样无需编译即可实时更改颜色，并实现动态 alpha 透明度变化。</p>
    <h3 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h3>
    <p>以我们默认的 <code>.text-primary</code> 工具类为例。</p>
    <CodeWrapper
      code=".text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
"
      lang="css"
    />
    <p>
      我们使用 <code>--bs-primary</code> 的 RGB 版本（值为 <code>13, 110, 253</code>）CSS 变量，并附加第二个 CSS 变量 <code>--bs-text-opacity</code> 用于 alpha 透明度（得益于局部 CSS 变量，其默认值为 <code>1</code>）。这意味着你现在每次使用 <code>.text-primary</code> 时，计算得到的 <code>color</code> 值都是 <code>rgba(13, 110, 253, 1)</code>。每个 <code>.text-*</code> 类内部的局部 CSS 变量可避免继承问题，因此嵌套的工具类实例不会自动带有被修改的 alpha 透明度。
    </p>
    <h3 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h3>
    <p>要更改该不透明度，可通过自定义样式或内联样式覆盖 <code>--bs-text-opacity</code>。</p>
    <Example
      code='<div class="text-primary">This is default primary text</div>
<div class="text-primary" style="--bs-text-opacity: .5;">This is 50% opacity primary text</div>'
    />
    <p>或者，从任意 <code>.text-opacity</code> 工具类中选择：</p>
    <Example
      code='<div class="text-primary">This is default primary text</div>
<div class="text-primary text-opacity-75">This is 75% opacity primary text</div>
<div class="text-primary text-opacity-50">This is 50% opacity primary text</div>
<div class="text-primary text-opacity-25">This is 25% opacity primary text</div>'
    />
    <h2 id="specificity">优先级<a class="anchor-link" href="#specificity" aria-label="优先级链接"></a></h2>
    <p>
      有时由于另一个选择器的优先级，上下文类无法生效。在某些情况下，一个足够的变通方法是将元素的内容包裹在带有目标类的
      <code>&lt;div&gt;</code> 或更具语义的元素中。
    </p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <p>
      除了以下 Sass 功能之外，建议阅读有关我们内置的
     <a href="/customize/css-variables">CSS 自定义属性</a>（又称 CSS 变量）的内容，了解更多颜色等信息。
    </p>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>大多数 <code>color</code> 工具类由我们的主题颜色生成，这些主题颜色是从通用调色板变量重新分配的。</p>
    <ScssDocs name="color-variables" file="scss/_variables.scss" /><ScssDocs name="theme-color-variables" file="scss/_variables.scss" />
    <p>灰度颜色也是可用的，但只有一部分会被用于生成工具类。</p>
    <ScssDocs name="gray-color-variables" file="scss/_variables.scss" /><ScssDocs name="theme-text-map" file="scss/_maps.scss" />
    <p>用于在浅色和深色模式下设置 <code>.text-*-emphasis</code> 工具类中颜色的变量：</p>
    <ScssDocs name="theme-text-variables" file="scss/_variables.scss" /><ScssDocs name="theme-text-dark-variables" file="scss/_variables-dark.scss" />
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
    <p>颜色不透明度在此基础上构建，使用它们自己的映射，并由工具类 API 使用：</p>
    <ScssDocs name="utilities-text-colors" file="scss/_maps.scss" />
    <p>颜色模式自适应的文本颜色也可以作为 Sass 映射使用：</p>
    <ScssDocs name="theme-text-map" file="scss/_maps.scss" /><ScssDocs name="theme-text-dark-map" file="scss/_maps.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      颜色工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
     <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-color" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#colors">颜色</a></li>
      <li>
       <a href="#opacity">不透明度</a>
        <ul>
          <li><a href="#how-it-works">工作原理</a></li>
          <li><a href="#example">示例</a></li>
        </ul>
      </li>
      <li><a href="#specificity">优先级</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-maps">Sass 映射</a></li>
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
