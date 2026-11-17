<template>
    <h1>Loading 加载</h1>
    <p class="lead">加载数据时显示动效。</p>

    <h2>全屏加载</h2>
    <p>使用 <code>LoadingFullscreen</code> 对象的 <code>getInstance</code> 方法获得单例。调用 <code>show</code> 方法显示加载动效，调用 <code>hide</code> 方法隐藏加载动效。 </p>
<p class="text-bg-info">全屏加载为单例模式内置计数器，不必担心多次调用 <code>show</code> 的副作用。</p>
    <FullscreenLoad />

    <h2>区域加载</h2>
<p>使用 <code>bv-loading</code> 组件实现区域加载。通过 <code>loading</code> 属性控制是否显示加载动效。</p>
<AreaLoad />
</template>

<script setup>
import FullscreenLoad from './fullscreen-load.vue';
import AreaLoad from './area-load.vue';
</script>