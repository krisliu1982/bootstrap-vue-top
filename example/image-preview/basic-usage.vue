<template>
  <a href="#" @click.prevent="handleImageManyPreview">
    <img src="https://picsum.photos/id/110/150/150" width="150" height="150" />
  </a>
</template>

<script setup>
import { imagePreview } from '@lib';

function handleImageManyPreview() {
  const imges = [
    'https://picsum.photos/id/110/800/800',
    'https://picsum.photos/id/111/800/800',
    'https://picsum.photos/id/112/800/800',
    'https://picsum.photos/id/113/800/800',
    'https://picsum.photos/id/114/800/800'
  ];
  imagePreview(imges, 0);
}
</script>
