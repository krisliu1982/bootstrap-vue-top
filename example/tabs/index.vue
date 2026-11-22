<template>
  <h1>Tabs 标签页</h1>
  <p class="lead">分隔内容上有关联但属于不同类别的数据集合。</p>

  <h2>基础用法</h2>
  <p>
    组件默认激活第一个标签页，通过 <code>active-index</code> 属性来指定当前激活的标签页。
  </p>
  <BasicUsage />

  <h2>水平对齐</h2>
  <p>
    通过 <code>tabs-class</code> 属性设置水平对齐方式。<code>.justify-content-center</code>
    样式类为居中对齐，<code>.justify-content-end</code> 样式类为右对齐。
  </p>
  <Horizontal />

  <h2>选项卡样式</h2>
  <p>添加
    <code>.nav-tabs</code> 样式类到 <code>tabs-class</code> 属性上，会展现选项卡样式。
  </p>
  <TabStyle />

  <h2>胶囊样式</h2>
  <p>添加
    <code>.nav-pills</code> 样式类到 <code>tabs-class</code> 属性上，会展现胶囊样式。
  </p>
  <PillStyle />

  <h2>下划线样式</h2>
  <p>添加
    <code>.nav-underline</code> 样式类到 <code>tabs-class</code> 属性上，会展现下划线样式。默认标签项间距为 <code>1rem</code>，添加
    <code>--bs-nav-underline-gap</code> CSS 变量到 <code>tabs-style</code> 属性上来改变标签项间距。
  </p>
  <UnderlineStyle />

  <h2>填充样式</h2>
  <p>添加
    <code>.nav-fill</code> 样式类到 <code>tabs-class</code> 属性上，标签栏的内容扩展至整个可用宽度，每个标签项均匀地占据所有可用空间。
  </p>
  <FillStyle />
  <p>添加
    <code>.nav-justified</code> 样式类到 <code>tabs-class</code> 属性上，每个标签项的宽度都将保持一致。
  </p>
  <JustifiedStyle />

  <h2>位置改变</h2>
  <p>
    通过 <code>position</code> 属性设置标签栏位置。预设四个方向 <code>start | end | top | bottom</code>。
  </p>
  <PositionChange />

  <h2>延迟渲染</h2>
  <p>
    通过在标签项上设置 <code>lazy</code> 属性为 <code>true</code>，使初始化时未激活的标签项不进行渲染，激活后才渲染。
  </p>
  <LazyRender />

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
</script>
