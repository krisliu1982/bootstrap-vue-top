<template>
  <button type="button" class="btn btn-primary" @click="modalScrollableRef.toggle()">Launch demo modal</button>
  <bv-modal ref="modalScrollableRef" title="滚动显示大量内容" dialog-class="modal-dialog-scrollable">
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
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalScrollableRef = ref(null);
</script>
