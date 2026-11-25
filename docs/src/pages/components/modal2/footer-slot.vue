<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalFooter = true">Launch demo modal</button>
  <bv-modal-2 v-model="isOpenModalFooter" title="底部插槽">
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <template #footer>
      <button type="button" class="btn btn-light" @click="isOpenModalFooter = false">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </template>
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue';

const isOpenModalFooter = ref(false);
</script>
