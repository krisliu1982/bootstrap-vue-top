<template>
  <button type="button" class="btn btn-primary" @click="offcanvasStaticRef.toggle()">Static backdrop offcanvas</button>
  <bv-offcanvas ref="offcanvasStaticRef" title="静态背景" backdrop="static"> ... </bv-offcanvas>
</template>

<script setup>
import { ref } from 'vue';

const offcanvasStaticRef = ref(null);
</script>
