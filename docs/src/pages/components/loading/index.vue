<template>
  <article class="docs-content">
    <h1>Loading 加载</h1>
    <p class="lead">加载数据时显示动效。</p>

    <h2 id="fullscreen-load">全屏加载<a class="anchor-link" href="#fullscreen-load" aria-label="全屏加载链接"></a></h2>
    <p>使用 <code>LoadingFullscreen</code> 对象的 <code>getInstance</code> 方法获得单例。调用 <code>show</code> 方法显示加载动效，调用 <code>hide</code> 方法隐藏加载动效。</p>
    <div class="docs-example"><FullscreenLoad /></div>
    <CodeWrapper :code="FullscreenLoadCode" />

    <h2 id="area-load">区域加载<a class="anchor-link" href="#area-load" aria-label="区域加载链接"></a></h2>
    <p>使用 <code>bv-loading</code> 组件实现区域加载。通过 <code>loading</code> 属性控制是否显示加载动效。</p>
    <div class="docs-example"><AreaLoad /></div>
    <CodeWrapper :code="AreaLoadCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#fullscreen-load">全屏加载</a></li>
      <li><a href="#area-load">区域加载</a></li>
    </ul>
  </nav>
</template>

<script setup>
import FullscreenLoad from './fullscreen-load.vue';
import AreaLoad from './area-load.vue';

import FullscreenLoadCode from './fullscreen-load.vue?raw';
import AreaLoadCode from './area-load.vue?raw';
</script>
