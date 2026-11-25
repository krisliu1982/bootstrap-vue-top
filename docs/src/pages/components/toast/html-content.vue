<template>
  <button type="button" class="btn btn-primary" @click="handleClickHtml">Html content</button>
</template>

<script setup>
import { toast } from 'bootstrap-vue-top';

function handleClickHtml() {
  toast({
    title: 'Html content',
    message: `<p class="text-bg-success p-2">Hello, world! This is a toast message.</p>
              <p class="text-bg-danger p-2 fs-5">Hello, world! This is a toast message.</p>`
  });
}
</script>
