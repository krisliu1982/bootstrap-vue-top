
<template>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" id="radio-sm" value="sm" v-model="size">
    <label class="form-check-label" for="radio-sm">小型</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" id="radio-md" value="md" v-model="size">
    <label class="form-check-label" for="radio-md">中型</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" id="radio-lg" value="lg" v-model="size">
    <label class="form-check-label" for="radio-lg">大型</label>
  </div>

  <bv-backtop :size="size" />
</template>

<script setup>
import { ref } from 'vue'

const size = ref('md')
</script>