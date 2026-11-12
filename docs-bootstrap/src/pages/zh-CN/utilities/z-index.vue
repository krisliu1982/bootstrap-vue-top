<template>
  <article class="bd-content" data-pagefind-body>
    <h1>Z-index</h1>
    <p class="lead">使用我们的底层 `z-index` 工具类快速更改元素或组件的层叠层级。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>使用 <code>z-index</code> 工具类将元素相互堆叠。这要求 <code>position</code> 值不为 <code>static</code>，可以通过自定义样式或使用我们的<a href="/utilities/position/">定位工具类</a>来设置。</p>
    <Callout>
      <p>我们称这些为“底层” <code>z-index</code> 工具类，因为它们的默认值为 <code>-1</code> 到 <code>3</code>，我们将其用于重叠组件的布局。高层级 <code>z-index</code> 值则用于模态框和工具提示等覆盖类组件。</p> </Callout
    ><Example
      class="bd-example-zindex-levels position-relative"
      code='<div class="z-3 position-absolute p-5 rounded-3"><span>z-3</span></div>
<div class="z-2 position-absolute p-5 rounded-3"><span>z-2</span></div>
<div class="z-1 position-absolute p-5 rounded-3"><span>z-1</span></div>
<div class="z-0 position-absolute p-5 rounded-3"><span>z-0</span></div>
<div class="z-n1 position-absolute p-5 rounded-3"><span>z-n1</span></div>'
    />
    <h2 id="overlays">覆盖层<a class="anchor-link" href="#overlays" aria-label="覆盖层链接"></a></h2>
    <p>
      Bootstrap 的覆盖层组件——下拉菜单、模态框、抽屉（offcanvas）、弹出框、轻提示和工具提示——都拥有自己的
      <code>z-index</code> 值，以确保在界面相互竞争的“层级”中获得可用的体验。
    </p>
    <p>
      在<a href="/layout/z-index"><code>z-index</code> 布局页面</a>中了解它们。
    </p>
    <h2 id="component-approach">组件方案<a class="anchor-link" href="#component-approach" aria-label="组件方案链接"></a></h2>
    <p>在某些组件上，我们使用底层 <code>z-index</code> 值来管理相互重叠的重复元素（例如按钮组中的按钮或列表组中的项目）。</p>
    <p>
      了解我们的<a href="/extend/approach#z-index-scales"><code>z-index</code> 方案</a>。
    </p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <h3 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射链接"></a></h3>
    <p>定制此 Sass 映射以更改可用的值和生成的工具类。</p>
    <ScssDocs name="zindex-levels-map" file="scss/_variables.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      定位工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
     <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-zindex" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#example">示例</a></li>
      <li><a href="#overlays">覆盖层</a></li>
      <li><a href="#component-approach">组件方案</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
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
</script>
