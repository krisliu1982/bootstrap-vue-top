<template>
  <button type="button" class="btn btn-primary" @click="modalStaticRef.toggle()">Launch static backdrop modal</button>
  <bv-modal ref="modalStaticRef" title="静态背景" backdrop="static">
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <template #footer>
      <button type="button" class="btn btn-light" @click="modalStaticRef.toggle()">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </template>
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalStaticRef = ref(null);
</script>
