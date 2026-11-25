<template>
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" @click="isOpenModalXXl = true">Extra extra large modal</button>
    <button type="button" class="btn btn-primary" @click="isOpenModalXl = true">Extra large modal</button>
    <button type="button" class="btn btn-primary" @click="isOpenModalLg = true">Large modal</button>
    <button type="button" class="btn btn-primary" @click="isOpenModalSm = true">Small modal</button>
  </div>
  <bv-modal-2 v-model="isOpenModalXXl" title="Extra extra large modal" dialog-class="modal-xxl">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalXl" title="Extra large modal" dialog-class="modal-xl">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalLg" title="Large modal" dialog-class="modal-lg">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalSm" title="Small modal" dialog-class="modal-sm">...</bv-modal-2>
</template>

<script setup>
import { ref } from 'vue';

const isOpenModalXXl = ref(false);
const isOpenModalXl = ref(false);
const isOpenModalLg = ref(false);
const isOpenModalSm = ref(false);
</script>
