<template>
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" @click="handleClickTopRight">TopRight</button>
    <button type="button" class="btn btn-primary" @click="handleClickTopLeft">TopLeft</button>
    <button type="button" class="btn btn-primary" @click="handleClickTopCenter">TopCenter</button>
    <button type="button" class="btn btn-primary" @click="handleClickBottomRight">BottomRight</button>
    <button type="button" class="btn btn-primary" @click="handleClickBottomLeft">BottomLeft</button>
  </div>
</template>

<script setup>
import { toast } from 'bootstrap-vue-top';

function handleClickTopRight() {
  toast({
    position: 'top-right',
    title: 'top-right',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickTopLeft() {
  toast({
    position: 'top-left',
    title: 'top-right',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickTopCenter() {
  toast({
    position: 'top-center',
    title: 'top-center',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickBottomRight() {
  toast({
    position: 'bottom-right',
    title: 'bottom-right',
    message: 'Hello, world! This is a toast message.'
  });
}

function handleClickBottomLeft() {
  toast({
    position: 'bottom-left',
    title: 'bottom-left',
    message: 'Hello, world! This is a toast message.'
  });
}
</script>
