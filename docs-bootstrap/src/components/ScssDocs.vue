<template>
  <div class="docs-code-snippet">
    <div class="d-flex align-items-center bg-body-tertiary px-3 py-2 border rounded-top">
      <a
        class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"
        :href="`https://github.com/twbs/bootstrap/blob/v5.3.8/${props.file}`"
        >{{ props.file }}</a
      >
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
import { ref } from 'vue';
import Code from './code.vue';
import scss from '@/data/scss.json' with { type: 'json' };

const props = defineProps({
  name: { type: String, required: true },
  file: { type: String, required: true }
});

const content = scss[props.name] || '暂无内容';

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
