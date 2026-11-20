<template>
        <button type="button" class="btn btn-primary" @click="isOpenModalDraggable = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalDraggable" :draggable="true" title="可拖拽">
          Woo-hoo, you’re reading this text in a modal!
        </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue';

const isOpenModalDraggable = ref(false);
</script>
