<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalScrollable = true">Launch demo modal</button>
  <bv-modal-2 v-model="isOpenModalScrollable" title="滚动显示大量内容" dialog-class="modal-dialog-scrollable">
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
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

const isOpenModalScrollable = ref(false);
</script>
