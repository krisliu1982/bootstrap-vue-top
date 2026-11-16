<template>
    <h1>AlertBox 警示弹窗</h1>
    <p class="lead">模拟浏览器原生 alert 消息提示框而实现的弹窗组件, 用于重要信息提示。</p>

    <h2>基础用法</h2>
    <p>使用 <code>alertBox</code> 方法，它接受一个 <code>Object</code> 作为其参数。通过 <code>message</code> 属性来设置警示内容。</p>
    <BasicUsage />
</template>

<script setup>
import BasicUsage from './basic-usage.vue'
</script>