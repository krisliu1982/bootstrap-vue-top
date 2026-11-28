<template>
  <article class="docs-content">
    <h1>Offcanvas 抽屉</h1>
    <p class="lead">在项目中构建用于导航、购物车等的隐藏抽屉。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/offcanvas" target="_blank">Bootstrap Offcanvas</a>。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>调用组件 <code>toggle</code> 方法来打开一个抽屉。</p>
    <div class="docs-example">
      <BasicUsage />
    </div>
    <CodeWrapper :code="BasicUsageCode" />

    <h2 id="static-background">静态背景<a class="anchor-link" href="#static-background" aria-label="静态背景"></a></h2>
    <p>
      设置
      <code>backdrop</code> 属性为 <code>static</code> 时，点击抽屉外部并不会导致模态框关闭。
    </p>
    <div class="docs-example">
      <StaticBackground />
    </div>
    <CodeWrapper :code="StaticBackgroundCode" />

    <h2 id="placement-size">位置和大小<a class="anchor-link" href="#placement-size" aria-label="位置和大小"></a></h2>
    <p>
      通过 <code>offcanvas-class</code> 属性设置抽屉的位置, 预设四个方向的样式类
      <code>.offcanvas-start | .offcanvas-end | .offcanvas-top | .offcanvas-bottom</code>。通过 <code>offcanvas-style</code>
      属性设置 CSS 变量来改变高度和宽度。
    </p>
    <div class="docs-example">
      <PlacementSize />
    </div>
    <CodeWrapper :code="PlacementSizeCode" />

    <h2 id="event-listener">事件监听<a class="anchor-link" href="#event-listener" aria-label="事件监听"></a></h2>
    <p>
      监听
      <code>offcanvas-shown</code>
      事件进行抽屉可见后的相关操作，例如异步获取数据。
    </p>
    <div class="docs-example">
      <EventListener />
    </div>
    <CodeWrapper :code="EventListenerCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#static-background">静态背景</a></li>
      <li><a href="#placement-size">位置和大小</a></li>
      <li><a href="#event-listener">事件监听</a></li>
    </ul>
  </nav>
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import EventListener from './event-listener.vue';
import PlacementSize from './placement-size.vue';
import StaticBackground from './static-background.vue';

import BasicUsageCode from './basic-usage.vue?raw';
import EventListenerCode from './event-listener.vue?raw';
import PlacementSizeCode from './placement-size.vue?raw';
import StaticBackgroundCode from './static-background.vue?raw';
</script>
