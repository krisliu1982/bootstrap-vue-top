<template>
  <div class="docs-example-snippet docs-code-snippet">
      <div class="d-flex align-items-center highlight-toolbar px-3 py-2 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">{{ props.lang }}</small>
        <div class="ms-auto">
          <BiCheckLg v-if="isCopy" class="text-success" />
          <a v-else role="button" class="text-body" title="Copy" aria-label="Copy" @click="handleCopy">
            <BiCopy />
          </a>
        </div>
      </div>
      <Code :code="props.code" :lang="props.lang" />
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