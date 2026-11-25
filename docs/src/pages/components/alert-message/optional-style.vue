<template>
  <div class="hstack gap-3 flex-wrap">
    <button v-for="item in messageTypes" type="button" class="btn" :class="`btn-${item}`" @click="alertMessage({ type: item, message: `Message ${item}` })">
      {{ item }}
    </button>
  </div>
</template>

<script setup>
import { alertMessage } from 'bootstrap-vue-top';

const messageTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
</script>
