<template>
  <div class="docs-code-snippet docs-example-snippet">
    <div class="d-flex align-items-center highlight-toolbar px-3 py-2 border-0 border-bottom">
      <a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
        :href="`https://github.com/twbs/bootstrap/blob/v5.3.8/${props.file}`">{{ props.file }}</a>
      <div class="ms-auto">
        <BiCheckLg v-if="isCopy" class="text-success" />
        <a v-else role="button" class="text-body" title="Copy" aria-label="Copy" @click="handleCopy">
          <BiCopy />
        </a>
      </div>
    </div>
    <Code :code="content" lang="scss" />
  </div>
</template>

<script setup>
import { ref,computed } from 'vue'
import Code from './code.vue'
import snippets from '@nrg-ui/code-snippets/virtual'

const props = defineProps({
  name: { type: String, required: true },
  file: { type: String, required: true },
})

const content = computed(() => {
  const snippet = snippets[props.name]
  if (!snippet) {
    throw new Error(`Snippet "${props.name}" not found`)
  }
  // 注意：插件不会自动去掉 !default，需要在这里处理
  return snippet.code.replaceAll(' !default', '')
})

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