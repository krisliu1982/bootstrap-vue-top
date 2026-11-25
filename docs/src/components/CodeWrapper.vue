<template>
  <div class="position-relative">
    <div class="position-absolute" style="top: 1rem; right: 1rem">
      <BiCheckLg v-if="isCopy" class="text-success" />
      <a v-else role="button" class="text-body" title="Copy" aria-label="Copy" @click="handleCopy">
        <BiCopy />
      </a>
    </div>
    <Code :code="props.code" :lang="props.lang" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Code from './Code.vue';

const props = defineProps({
  code: {
    type: String,
    default: null
  },
  lang: {
    type: String,
    default: 'html'
  }
});

const isCopy = ref(false);
function handleCopy() {
  navigator.clipboard
    .writeText(props.code)
    .then(() => {
      isCopy.value = true;
      setTimeout(() => {
        isCopy.value = false;
      }, 2000);
    })
    .catch((err) => {
      isCopy.value = false;
      console.log('复制错误', err);
    });
}
</script>
