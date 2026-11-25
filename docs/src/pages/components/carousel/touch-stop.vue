<template>
  <bv-carousel :items="slides" :touch="false"></bv-carousel>
</template>

<script setup>
const slides = [
  {
    image: 'https://picsum.photos/id/110/600/300',
    title: '风景图片1',
    description: '这是第1张风景图片的描述'
  },
  {
    image: 'https://picsum.photos/id/111/600/300',
    description: '这是第2张风景图片的描述'
  },
  {
    image: 'https://picsum.photos/id/112/600/300',
    title: '风景图片3'
  }
];
</script>
