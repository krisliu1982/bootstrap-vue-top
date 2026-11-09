<template>
  <article class="bd-content">
    <h1>聚焦环</h1>
    <p>用于向元素和组件添加及修改自定义聚焦环样式的工具类。</p>

    <p><code>.focus-ring</code> 工具类会移除 <code>:focus</code> 状态下默认的 <code>outline</code>，并替换为可更广泛定制的 <code>box-shadow</code>。新的阴影由一系列继承自 <code>:root</code> 层级的 CSS 变量组成，可以为任意元素或组件进行修改。</p>
    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>
      直接点击下方链接即可看到聚焦环效果，或点击进入下方的示例后按下
      <kbd>Tab</kbd> 键。
    </p>
    <Example
      code='<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
  Custom focus ring
</a>'
    />
    <h2 id="customize">自定义<a class="anchor-link" href="#customize" aria-label="自定义链接"></a></h2>
    <p>使用我们的 CSS 变量、Sass 变量、工具类或自定义样式来修改聚焦环的样式。</p>
    <h3 id="css-variables">CSS 变量<a class="anchor-link" href="#css-variables" aria-label="CSS 变量链接"></a></h3>
    <p>根据需要修改 <code>--bs-focus-ring-*</code> CSS 变量，以更改默认外观。</p>
    <Example
      code='<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
  Green focus ring
</a>'
    />
    <p><code>.focus-ring</code> 通过全局 CSS 变量设置样式，可以在任意父元素上覆盖，如上所示。这些变量由对应的 Sass 变量生成。</p>
    <ScssDocs name="root-focus-variables" file="scss/_root.scss" />
    <p>默认情况下不存在 <code>--bs-focus-ring-x</code>、<code>--bs-focus-ring-y</code> 或 <code>--bs-focus-ring-blur</code>，但我们提供了回退到初始值 <code>0</code> 的 CSS 变量。修改它们即可更改默认外观。</p>
    <Example
      code='<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-x: 10px; --bs-focus-ring-y: 10px; --bs-focus-ring-blur: 4px">
  Blurry offset focus ring
</a>'
    />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>定制聚焦环的 Sass 变量，即可修改整个由 Bootstrap 驱动的项目中所有聚焦环样式的用法。</p>
    <ScssDocs name="focus-ring-variables" file="scss/_variables.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>除了 <code>.focus-ring</code> 之外，我们还提供了若干 <code>.focus-ring-*</code> 工具类，用于修改该工具类的默认值。可以使用任意<a href="/customize/color#theme-colors">主题颜色</a>修改颜色。请注意，鉴于当前的颜色模式支持情况，浅色和深色变体可能并非在所有背景色上都可见。</p>
    <Example :code="data['theme-colors'].map((themeColor) => `<p><a href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-${themeColor.name} py-1 px-2 text-decoration-none border rounded-2&quot;>${themeColor.name} focus</a></p>`).join('\n')" />
    <p>
      聚焦环工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-focus-ring" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#example">示例</a></li>
      <li>
        <a href="#customize">自定义</a>
        <ul>
          <li><a href="#css-variables">CSS 变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
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
