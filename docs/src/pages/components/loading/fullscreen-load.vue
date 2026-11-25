<template>
  <button type="button" class="btn btn-primary" @click="handleClick">Show Loading (Fullscreen)</button>
</template>

<script setup>
import { LoadingFullscreen } from 'bootstrap-vue-top';

function handleClick() {
  const instance = LoadingFullscreen.getInstance();
  instance.show();

  setTimeout(() => {
    instance.hide();
  }, 1000);
}
</script>
