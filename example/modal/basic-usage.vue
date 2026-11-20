<template>
    <button type="button" class="btn btn-primary" @click="modalExampleRef.toggle()">
        Launch demo modal
    </button>
    <bv-modal ref="modalExampleRef" title="基础用法">
        <p>Woo-hoo, you’re reading this text in a modal!</p>
        <p>Woo-hoo, you’re reading this text in a modal!</p>
        <p>Woo-hoo, you’re reading this text in a modal!</p>
        <p>Woo-hoo, you’re reading this text in a modal!</p>
        <p>Woo-hoo, you’re reading this text in a modal!</p>
        <p>Woo-hoo, you’re reading this text in a modal!</p>
    </bv-modal>
</template>

<script setup>
import { ref } from 'vue'

const modalExampleRef = ref(null);
</script>