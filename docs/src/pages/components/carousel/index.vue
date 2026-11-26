<template>
  <article class="docs-content">
    <h1>Carousel 轮播图</h1>
    <p class="lead">用于在元素（图像或文本幻灯片）之间循环切换的幻灯片组件，就像轮播图一样。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>在组件中通过 <code>items</code> 属性设置轮播图数据。</p>
    <div class="docs-example"><BasicUsage /></div>
    <CodeWrapper :code="BasicUsageCode" />

    <h2 id="fade-in-out">淡入淡出<a class="anchor-link" href="#fade-in-out" aria-label="淡入淡出"></a></h2>
    <p>添加 <code>.carousel-fade</code> 样式类到 <code>carousel-class</code> 属性上。</p>
    <div class="docs-example"><FadeInOut /></div>
    <CodeWrapper :code="FadeInOutCode" />

    <h2 id="auto-play">自动播放<a class="anchor-link" href="#auto-play" aria-label="自动播放"></a></h2>
    <p>
      设置 <code>ride</code> 属性为 <code>carousel</code>，使轮播图在页面加载时自动播放。通过
      <code>interval</code> 属性来控制自动播放延时时间。默认鼠标悬停在轮播图上时，自动播放的轮播图会自动暂停。如果设置 <code>pause</code> 属性为
      <code>false</code>，则鼠标悬停在轮播图上不会暂停它。在支持
      <a href="https://www.w3.org/TR/page-visibility/">页面可见性API</a> 的浏览器中，当网页对用户不可见时（例如浏览器标签页处于非活动状态，或浏览器窗口被最小化），轮播图将停止循环播放。
    </p>
    <div class="docs-example"><AutoPlay /></div>
    <CodeWrapper :code="AutoPlayCode" />

    <h2 id="touch-stop">禁用触摸滑动<a class="anchor-link" href="#touch-stop" aria-label="禁用触摸滑动"></a></h2>
    <p>轮播图支持在触摸屏设备上左右滑动以切换幻灯片。可通过将 <code>touch</code> 属性设置为 <code>false</code> 来禁用此功能。</p>
    <div class="docs-example"><TouchStop /></div>
    <CodeWrapper :code="TouchStopCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#fade-in-out">淡入淡出</a></li>
      <li><a href="#auto-play">自动播放</a></li>
      <li><a href="#touch-stop">禁用触摸滑动</a></li>
    </ul>
  </nav>
</template>

<script setup>
import AutoPlay from './auto-play.vue';
import BasicUsage from './basic-usage.vue';
import FadeInOut from './fade-in-out.vue';
import TouchStop from './touch-stop.vue';

import AutoPlayCode from './auto-play.vue?raw';
import BasicUsageCode from './basic-usage.vue?raw';
import FadeInOutCode from './fade-in-out.vue?raw';
import TouchStopCode from './touch-stop.vue?raw';
</script>
