<template>
    <h1>AlertConfirm 警示确认窗</h1>
    <p class="lead">模拟浏览器原生 confirm 确认提示框而实现的弹窗组件, 用于重要信息确认。</p>

    <h2>基础用法</h2>
    <p>使用 <code>alertConfirm</code> 方法，它接受一个 <code>Object</code> 作为其参数。 通过 <code>message</code> 属性设置警示内容,
        <code>confirm</code> 属性设置确认回调函数。</p>
    <BasicUsage />
</template>

<script setup>
import BasicUsage from './basic-usage.vue'
</script>