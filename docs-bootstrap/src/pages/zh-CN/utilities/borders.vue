<template>
  <article class="bd-content">
    <h1>边框</h1>
    <p>使用边框工具类可以快速设置元素的边框及圆角。非常适合图片、按钮或任何其他元素。</p>

    <h2 id="border">边框<a class="anchor-link" href="#border" aria-label="边框链接"></a></h2>
    <p>使用边框工具类添加或移除元素的边框。可选择全部边框，或逐条设置。</p>
    <h3 id="additive">添加<a class="anchor-link" href="#additive" aria-label="添加链接"></a></h3>
    <p>为自定义元素添加边框：</p>
    <Example
      class="bd-example-border-utils"
      code='<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>'
    />
    <h3 id="subtractive">移除<a class="anchor-link" href="#subtractive" aria-label="移除链接"></a></h3>
    <p>或者移除边框：</p>
    <Example
      class="bd-example-border-utils"
      code='<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>'
    />
    <h2 id="color">颜色<a class="anchor-link" href="#color" aria-label="颜色链接"></a></h2>
    <Callout>
      <p>由我们最初的 <code>$theme-colors</code> Sass 映射生成的 <code>.border-*</code> 之类的边框工具类尚不能响应颜色模式，不过任何 <code>.border-*-subtle</code> 工具类则可以。此问题将在 v6 中解决。</p>
    </Callout>
    <p>使用基于主题颜色构建的工具类更改边框颜色。</p>
    <Example
      class="bd-example-border-utils"
      :code="
        [
          ...data['theme-colors'].map(
            (themeColor) => `<span class=&quot;border border-${themeColor.name}&quot;></span>
<span class=&quot;border border-${themeColor.name}-subtle&quot;></span>`
          ),
          `<span class=&quot;border border-black&quot;></span>
<span class=&quot;border border-white&quot;></span>`
        ].join('\n')
      "
    />
    <p>或者修改组件的默认 <code>border-color</code>：</p>
    <Example
      code='<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
  Dangerous heading
</div>

<div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
  Changing border color and width
</div>'
    />
    <h2 id="opacity">不透明度<a class="anchor-link" href="#opacity" aria-label="不透明度链接"></a></h2>
    <AddedIn version="5.2.0" />
    <p>Bootstrap 的 <code>border-{color}</code> 工具类使用 Sass 配合 CSS 变量生成。这样无需编译即可实时更改颜色，并实现动态 alpha 透明度变化。</p>
    <h3 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h3>
    <p>以我们默认的 <code>.border-success</code> 工具类为例。</p>
    <CodeWrapper
      code=".border-success {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}
"
      lang="css"
    />
    <p>
      我们使用 <code>--bs-success</code> 的 RGB 版本（值为 <code>25, 135, 84</code>）CSS 变量，并附加第二个 CSS 变量 <code>--bs-border-opacity</code> 用于 alpha 透明度（得益于局部 CSS 变量，其默认值为 <code>1</code>）。这意味着你现在每次使用 <code>.border-success</code> 时，计算得到的 <code>color</code> 值都是 <code>rgba(25, 135, 84, 1)</code>。每个 <code>.border-*</code> 类内部的局部 CSS 变量可避免继承问题，因此嵌套的工具类实例不会自动带有被修改的 alpha 透明度。
    </p>
    <h3 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h3>
    <p>要更改该不透明度，可通过自定义样式或内联样式覆盖 <code>--bs-border-opacity</code>。</p>
    <Example
      code='<div class="border border-success p-2 mb-2">This is default success border</div>
    <div class="border border-success p-2" style="--bs-border-opacity: .5;">This is 50% opacity success border</div>'
    />
    <p>或者，从任意 <code>.border-opacity</code> 工具类中选择：</p>
    <Example
      code='<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
<div class="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>'
    />
    <h2 id="width">宽度<a class="anchor-link" href="#width" aria-label="宽度链接"></a></h2>
    <Example
      class="bd-example-border-utils"
      code='<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>'
    />
    <h2 id="radius">圆角<a class="anchor-link" href="#radius" aria-label="圆角链接"></a></h2>
    <p>为元素添加类即可轻松圆角化。</p>
    <ExampleCustom
      class="bd-example-rounded-utils"
      code='<img src="..." class="rounded" alt="...">
<img src="..." class="rounded-top" alt="...">
<img src="..." class="rounded-end" alt="...">
<img src="..." class="rounded-bottom" alt="...">
<img src="..." class="rounded-start" alt="...">'
      ><Placeholder width="75" height="75" class="rounded" title="圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-top" title="顶部圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-end" title="右侧圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-bottom" title="底部圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-start" title="左侧圆角图片示例"
    /></ExampleCustom>
    <h3 id="sizes">尺寸<a class="anchor-link" href="#sizes" aria-label="尺寸链接"></a></h3>
    <p>使用缩放类可以获得更大或更小的圆角。尺寸范围从 <code>0</code> 到 <code>5</code>，还包括 <code>circle</code> 和 <code>pill</code>，可以通过修改工具类 API 进行配置。</p>
    <ExampleCustom
      class="bd-example-rounded-utils"
      code='<img src="..." class="rounded-0" alt="...">
<img src="..." class="rounded-1" alt="...">
<img src="..." class="rounded-2" alt="...">
<img src="..." class="rounded-3" alt="...">
<img src="..." class="rounded-4" alt="...">
<img src="..." class="rounded-5" alt="...">
<img src="..." class="rounded-circle" alt="...">
<img src="..." class="rounded-pill" alt="...">'
      ><Placeholder width="75" height="75" class="rounded-0" title="无圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-1" title="小圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-2" title="默认圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-3" title="大圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-4" title="更大圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-5" title="超大圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-circle" title="完全圆形图片" />
      <Placeholder width="150" height="75" class="rounded-pill" title="胶囊形圆角图片"
    /></ExampleCustom>
    <ExampleCustom
      class="bd-example-rounded-utils"
      code='<img src="..." class="rounded-bottom-1" alt="...">
<img src="..." class="rounded-start-2" alt="...">
<img src="..." class="rounded-end-circle" alt="...">
<img src="..." class="rounded-start-pill" alt="...">
<img src="..." class="rounded-5 rounded-top-0" alt="...">'
      ><Placeholder width="75" height="75" class="rounded-bottom-1" title="小圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-start-2" title="左侧默认圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-end-circle" title="右侧完全圆形图片示例" />
      <Placeholder width="75" height="75" class="rounded-start-pill" title="左侧胶囊形圆角图片示例" />
      <Placeholder width="75" height="75" class="rounded-5 rounded-top-0" title="超大顶部无圆角图片示例"
    /></ExampleCustom>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" /><ScssDocs name="root-border-var" file="scss/_root.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="border-variables" file="scss/_variables.scss" /><ScssDocs name="border-radius-variables" file="scss/_variables.scss" />
    <p>用于在浅色和深色模式下设置 <code>.border-*-subtle</code> 工具类中 <code>border-color</code> 的变量：</p>
    <ScssDocs name="theme-border-subtle-variables" file="scss/_variables.scss" /><ScssDocs name="theme-border-subtle-dark-variables" file="scss/_variables-dark.scss" />
    <h3 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射链接"></a></h3>
    <p>颜色模式自适应的边框颜色也可以作为 Sass 映射使用：</p>
    <ScssDocs name="theme-border-subtle-map" file="scss/_maps.scss" /><ScssDocs name="theme-border-subtle-dark-map" file="scss/_maps.scss" />
    <h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin链接"></a></h3>
    <ScssDocs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      边框工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-borders" file="scss/_utilities.scss" /><ScssDocs name="utils-border-radius" file="scss/_utilities.scss" /> <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
        <a href="#border">边框</a>
        <ul>
          <li><a href="#additive">添加</a></li>
          <li><a href="#subtractive">移除</a></li>
        </ul>
      </li>
      <li><a href="#color">颜色</a></li>
      <li>
        <a href="#opacity">不透明度</a>
        <ul>
          <li><a href="#how-it-works">工作原理</a></li>
          <li><a href="#example">示例</a></li>
        </ul>
      </li>
      <li><a href="#width">宽度</a></li>
      <li>
        <a href="#radius">圆角</a>
        <ul>
          <li><a href="#sizes">尺寸</a></li>
        </ul>
      </li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
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
