<template>
  <bv-backtop :color="color" :size="size" />

  <div>
    <h5>颜色设置</h5>
    <div v-for="item in colors" class="form-check form-check-inline">
      <input class="form-check-input" type="radio" :id="`backtop-color-${item}`" :value="item" v-model="color" />
      <label class="form-check-label" :for="`backtop-color-${item}`"
        ><span :class="`text-${item}`">{{ item }}</span></label
      >
    </div>
  </div>
  <br />
  <div>
    <h5>尺寸设置</h5>
    <div v-for="item in sizes" class="form-check form-check-inline">
      <input class="form-check-input" type="radio" :id="`backtop-size-${item}`" :value="item" v-model="size" />
      <label class="form-check-label" :for="`backtop-size-${item}`">{{ item }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
const color = ref('primary');

const sizes = ['sm', 'md', 'lg'];
const size = ref('md');
</script>
