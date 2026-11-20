<template>
        <button type="button" class="btn btn-primary" @click="isOpenModalCenter = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalCenter" title="垂直居中" dialog-class="modal-dialog-centered">
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

const isOpenModalCenter = ref(false);
</script>
