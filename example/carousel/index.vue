<template>
  <h1>Carousel 轮播图</h1>
  <p class="lead">用于在元素（图像或文本幻灯片）之间循环切换的幻灯片组件，就像轮播图一样。</p>

  <h2>基础用法</h2>
  <p>在组件中通过 <code>items</code> 属性设置轮播图数据。</p>
  <BasicUsage />

  <h2>淡入淡出</h2>
  <p>添加 <code>.carousel-fade</code> 样式类到 <code>carousel-class</code> 属性上。</p>
  <FadeInOut />

  <h2>自动播放</h2>
  <p>
    设置 <code>ride</code> 属性为 <code>carousel</code>，使轮播图在页面加载时自动播放。通过 <code>interval</code> 属性来控制自动播放延时时间。默认鼠标悬停在轮播图上时，自动播放的轮播图会自动暂停。如果设置
    <code>pause</code> 属性为 <code>false</code>，则鼠标悬停在轮播图上不会暂停它。在支持
    <a href="https://www.w3.org/TR/page-visibility/">页面可见性API</a> 的浏览器中，当网页对用户不可见时（例如浏览器标签页处于非活动状态，或浏览器窗口被最小化），轮播图将停止循环播放。
  </p>
  <AutoPlay />

  <h2>禁用触摸滑动</h2>
  <p>轮播图支持在触摸屏设备上左右滑动以切换幻灯片。可通过将 <code>touch</code> 属性设置为 <code>false</code> 来禁用此功能。</p>
  <TouchStop />
</template>

<script setup>
import AutoPlay from './auto-play.vue';
import BasicUsage from './basic-usage.vue';
import FadeInOut from './fade-in-out.vue';
import TouchStop from './touch-stop.vue';
</script>
