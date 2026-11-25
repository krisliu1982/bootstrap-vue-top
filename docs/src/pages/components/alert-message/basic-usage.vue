<template>
  <button type="button" class="btn btn-primary" @click="handleClick">Alert Message</button>
</template>

<script setup>
import { alertMessage } from 'bootstrap-vue-top';

function handleClick() {
  alertMessage({ message: 'This is a AlertMessage message.' });
}
</script>
