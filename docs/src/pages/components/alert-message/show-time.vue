<template>
  <button type="button" class="btn btn-primary" @click="alertMessage({ type: item, message: 'Message info', duration: 1000 })">1000 毫秒显示</button>
</template>

<script setup>
import { alertMessage } from '@lib';
</script>
