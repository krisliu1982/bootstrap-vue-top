<template>
  <h1>Offcanvas 抽屉</h1>
  <p class="lead">在项目中构建用于导航、购物车等的隐藏抽屉。</p>

  <h2>基础用法</h2>
  <p>调用组件 <code>toggle</code> 方法来打开一个抽屉。</p>
  <BasicUsage />

  <h2>静态背景</h2>
  <p>
    设置
    <code>backdrop</code> 属性为 <code>static</code> 时，点击抽屉外部并不会导致模态框关闭。
  </p>
  <StaticBackground />

  <h2>位置和大小</h2>
  <p>
    通过 <code>offcanvas-class</code> 属性设置抽屉的位置, 预设四个方向的样式类 <code>.offcanvas-start | .offcanvas-end | .offcanvas-top | .offcanvas-bottom</code>。通过 <code>offcanvas-style</code>
    属性设置 CSS 变量来改变高度和宽度。
  </p>
  <PlacementSize />

  <h2>事件监听</h2>
  <p>
    监听
    <code>offcanvas-shown</code>
    事件进行抽屉可见后的相关操作，例如异步获取数据。
  </p>
  <EventListener />
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import EventListener from './event-listener.vue';
import PlacementSize from './placement-size.vue';
import StaticBackground from './static-background.vue';
</script>
