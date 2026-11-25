<template>
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" @click="handleClick1">Closes automatically</button>
    <button type="button" class="btn btn-primary" @click="handleClick2">Won't close automatically</button>
  </div>
</template>

<script setup>
import { toast } from '@lib';

function handleClick1() {
  toast({
    title: 'Closes automatically',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClick2() {
  toast({
    title: "Won't close automatically",
    message: `<p class="fs-5">Hello, world! This is a toast message.</p>`,
    duration: 0
  });
}
</script>
