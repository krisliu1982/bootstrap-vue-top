<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalStatic = true">Launch static backdrop modal</button>
  <bv-modal-2 v-model="isOpenModalStatic" title="静态背景" backdrop="static">
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <template #footer>
      <button type="button" class="btn btn-light" @click="isOpenModalStatic = false">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </template>
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue';

const isOpenModalStatic = ref(false);
</script>
