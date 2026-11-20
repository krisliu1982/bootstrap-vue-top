<template>
  <button type="button" class="btn btn-primary" @click="modalFooterRef.toggle()">Launch demo modal</button>

  <bv-modal ref="modalFooterRef" title="底部插槽">
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <p>Woo-hoo, you’re reading this text in a modal!</p>
    <template #footer>
      <button type="button" class="btn btn-light" @click="modalFooterRef.toggle()">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </template>
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalFooterRef = ref(null);
</script>
