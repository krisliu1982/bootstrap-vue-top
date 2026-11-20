<template>
  <button type="button" class="btn btn-primary" @click="handleClick">Alert Confirm</button>
</template>

<script setup>
import { alertConfirm, alertMessage } from '@lib';

function handleClick() {
  alertConfirm({
    message: 'This is a AlertConfirm message.',
    confirm: function () {
      setTimeout(() => {
        alertMessage({ type: 'success', message: 'This is a AlertMessage.' });
      }, 1000);
    }
  });
}
</script>
