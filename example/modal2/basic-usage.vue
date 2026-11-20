<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalExample = true">Launch demo modal</button>
  <bv-modal-2 v-model="isOpenModalExample" title="基础用法">
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue';

const isOpenModalExample = ref(false);
</script>
