<template>
  <bv-backtop :color="color" :size="size" />

  <div class="hstack gap-3 flex-wrap mb-3">
    <a v-for="item in colors" href="#" class="link-offset-3" :class="`link-${item}`" @click.prevent="color = item">
      {{ item }}
    </a>
  </div>

  <div>
    <div v-for="item in sizes" class="form-check form-check-inline">
      <input class="form-check-input" type="radio" :id="`backtop-${item}`" :value="item" v-model="size">
      <label class="form-check-label" :for="`backtop-${item}`">{{ item }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark'
];

const color = ref('primary');

const sizes = [
  'sm',
  'md',
  'lg'
];

const size = ref('md')
</script>