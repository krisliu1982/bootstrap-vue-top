<template>
  <button type="button" class="btn btn-primary" @click="modalCenterRef.toggle()">Launch demo modal</button>
  <bv-modal ref="modalCenterRef" title="垂直居中" dialog-class="modal-dialog-centered">
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalCenterRef = ref(null);
</script>
