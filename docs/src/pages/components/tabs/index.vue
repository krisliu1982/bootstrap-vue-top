<template>
  <article class="docs-content">
    <h1>Tabs 标签页</h1>
    <p class="lead">分隔内容上有关联但属于不同类别的数据集合。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>组件默认激活第一个标签页，通过 <code>active-index</code> 属性来指定当前激活的标签页。</p>
    <div class="docs-example"><BasicUsage /></div>
    <CodeWrapper :code="BasicUsageCode" />

    <h2 id="horizontal">水平对齐<a class="anchor-link" href="#horizontal" aria-label="水平对齐"></a></h2>
    <p>
      通过 <code>tabs-class</code> 属性设置水平对齐方式。<code>.justify-content-center</code> 样式类为居中对齐，<code>.justify-content-end</code>
      样式类为右对齐。
    </p>
    <div class="docs-example"><Horizontal /></div>
    <CodeWrapper :code="HorizontalCode" />

    <h2 id="tab-style">选项卡样式<a class="anchor-link" href="#tab-style" aria-label="选项卡样式"></a></h2>
    <p>添加 <code>.nav-tabs</code> 样式类到 <code>tabs-class</code> 属性上，会展现选项卡样式。</p>
    <div class="docs-example"><TabStyle /></div>
    <CodeWrapper :code="TabStyleCode" />

    <h2 id="pill-style">胶囊样式<a class="anchor-link" href="#pill-style" aria-label="胶囊样式"></a></h2>
    <p>添加 <code>.nav-pills</code> 样式类到 <code>tabs-class</code> 属性上，会展现胶囊样式。</p>
    <div class="docs-example"><PillStyle /></div>
    <CodeWrapper :code="PillStyleCode" />

    <h2 id="underline-style">下划线样式<a class="anchor-link" href="#underline-style" aria-label="下划线样式"></a></h2>
    <p>
      添加 <code>.nav-underline</code> 样式类到 <code>tabs-class</code> 属性上，会展现下划线样式。默认标签项间距为 <code>1rem</code>，添加
      <code>--bs-nav-underline-gap</code> CSS 变量到 <code>tabs-style</code> 属性上来改变标签项间距。
    </p>
    <div class="docs-example"><UnderlineStyle /></div>
    <CodeWrapper :code="UnderlineStyleCode" />

    <h2 id="fill-style">填充样式<a class="anchor-link" href="#fill-style" aria-label="填充样式"></a></h2>
    <p>添加 <code>.nav-fill</code> 样式类到 <code>tabs-class</code> 属性上，标签栏的内容扩展至整个可用宽度，每个标签项均匀地占据所有可用空间。</p>
    <div class="docs-example"><FillStyle /></div>
    <CodeWrapper :code="FillStyleCode" />
    <p>添加 <code>.nav-justified</code> 样式类到 <code>tabs-class</code> 属性上，每个标签项的宽度都将保持一致。</p>
    <div class="docs-example"><JustifiedStyle /></div>
    <CodeWrapper :code="JustifiedStyleCode" />

    <h2>位置改变</h2>
    <h2 id="position-change">位置改变<a class="anchor-link" href="#position-change" aria-label="位置改变"></a></h2>
    <p>通过 <code>position</code> 属性设置标签栏位置。预设四个方向 <code>start | end | top | bottom</code>。</p>
    <div class="docs-example"><PositionChange /></div>
    <CodeWrapper :code="PositionChangeCode" />

    <h2 id="lazy-render">延迟渲染<a class="anchor-link" href="#lazy-render" aria-label="延迟渲染"></a></h2>
    <p>通过在标签项上设置 <code>lazy</code> 属性为 <code>true</code>，使初始化时未激活的标签项不进行渲染，激活后才渲染。</p>
    <div class="docs-example"><LazyRender /></div>
    <CodeWrapper :code="LazyRenderCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#horizontal">水平对齐</a></li>
      <li><a href="#tab-style">选项卡样式</a></li>
      <li><a href="#pill-style">胶囊样式</a></li>
      <li><a href="#underline-style">下划线样式</a></li>
      <li><a href="#fill-style">填充样式</a></li>
      <li><a href="#position-change">位置改变</a></li>
      <li><a href="#lazy-render">延迟渲染</a></li>
    </ul>
  </nav>
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import TabStyle from './tab-style.vue';
import Horizontal from './horizontal.vue';
import PillStyle from './pill-style.vue';
import UnderlineStyle from './underline-style.vue';
import FillStyle from './fill-style.vue';
import JustifiedStyle from './justified-style.vue';
import PositionChange from './position-change.vue';
import LazyRender from './lazy-render.vue';

import BasicUsageCode from './basic-usage.vue?raw';
import TabStyleCode from './tab-style.vue?raw';
import HorizontalCode from './horizontal.vue?raw';
import PillStyleCode from './pill-style.vue?raw';
import UnderlineStyleCode from './underline-style.vue?raw';
import FillStyleCode from './fill-style.vue?raw';
import JustifiedStyleCode from './justified-style.vue?raw';
import PositionChangeCode from './position-change.vue?raw';
import LazyRenderCode from './lazy-render.vue?raw';
</script>
