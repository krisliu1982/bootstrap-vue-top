
<template>
  <div class="hstack gap-3 flex-wrap">
    <a v-for="item in colors"
      href="#"
      class="link-offset-3"
      :class="`link-${item}`"
      @click.prevent="color = item">
      {{ item }}
    </a>
  </div>

  <bv-backtop :color="color" />
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

const color = ref(null);
</script>