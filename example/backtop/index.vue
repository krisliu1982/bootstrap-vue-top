<template>
    <h1>Backtop 回到顶部</h1>
    <p class="lead">回到页面顶部。</p>

    <h2>基础用法</h2>
    <p>向下滚动页面来查看右下角的按钮。</p>
    <BasicUsage />

        <h2>颜色调整</h2>
<p> 通过 <code>color</code> 属性设置颜色。提供八种颜色为：<code>primary | secondary | success | danger | warning | info | light | dark</code>，默认为 <code>primary</code>。 </p>
<!-- <ColorAdjustment />
 -->
        <h2>尺寸调整</h2>
<p>通过 <code>size</code> 属性设置尺寸。提供三种尺寸为：<code>sm | md | lg</code>，默认为 <code>md</code>。</p>
<!-- <SizeAdjustment /> -->
 <div style="height: 100vh;"></div>
</template>

<script setup>
import BasicUsage from './basic-usage.vue'
import ColorAdjustment from './color-adjustment.vue';
import SizeAdjustment from './size-adjustment.vue';

</script>