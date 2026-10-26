<template>
    <div class="docs-code-snippet not-prose" data-pagefind-ignore>
    <div class="hstack align-items-center highlight-toolbar">
    <div  class="font-monospace text-uppercase fs-xs fg-3">{{ props.lang }}</div>
    <div class="ms-auto">
      <BiCheckLg v-if="isCopy" class="fg-success" />
      <a v-else role="button" class="fg-body" title="Copy" aria-label="Copy" @click="handleCopy">
        <BiCopy />
      </a>
    </div>
  </div>
  <div class="docs-code">
    <Code :code="props.code" :lang="props.lang"/>
  </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import Code from './code.vue'

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