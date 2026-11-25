<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalMany1 = true">Launch demo modal</button>
  <bv-modal-2 v-model="isOpenModalMany1" title="第一个模态框" dialog-class="modal-lg">
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>
      <button type="button" class="btn btn-primary" @click="isOpenModalMany2 = true">Open modal</button>
    </p>
    <bv-modal-2 v-model="isOpenModalMany2" title="第二个模态框">
      <p>Woo-hoo, you’re reading this text in a modal!</p>
      <p>Woo-hoo, you’re reading this text in a modal!</p>
      <p>Woo-hoo, you’re reading this text in a modal!</p>
      <p>Woo-hoo, you’re reading this text in a modal!</p>
      <p>Woo-hoo, you’re reading this text in a modal!</p>
      <p>Woo-hoo, you’re reading this text in a modal!</p>
    </bv-modal-2>
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue';

const isOpenModalMany1 = ref(false);
const isOpenModalMany2 = ref(false);
</script>
