<template>
    <h1>Alert Message 警示消息</h1>
    <p class="lead">常用于主动操作后的反馈提示。通常在操作强度较大的场景中使用（如管理后台）。</p>

    <h2>基础用法</h2>
    <p>使用 <code>alertMessage</code> 方法，它接受一个 <code>Object</code> 作为其参数。 通过 <code>message</code> 属性设置消息内容。</p>
    <BasicUsage />

        <h2>样式调整</h2>
<p> 通过 <code>type</code> 属性设置样式。提供八种样式为：<code>primary | secondary | success | danger | warning | info | light | dark</code>，默认为 <code>info</code>。</p>    
<StyleAdjustment />

        <h2>显示时间</h2>
<p>通过 <code>duration</code> 属性设置显示时间。默认为 <code>3000</code> 毫秒。</p>
<ShowTime />
</template>

<script setup>
import BasicUsage from './basic-usage.vue'
import StyleAdjustment from './style-adjustment.vue';
import ShowTime from './show-time.vue';

</script>