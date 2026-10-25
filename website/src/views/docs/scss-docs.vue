<template>
    <div class="docs-code-snippet">
    <div class="hstack align-items-center highlight-toolbar">
       <a v-if="props.file" class="text-decoration-none font-monospace fs-xs fg-3" :href="url + props.file" target="_blank" rel="noopener noreferrer">{{ props.file }}</a> 
    <div v-else  class="font-monospace fs-xs fg-3">SCSS</div>
    <div class="ms-auto">
      <BiCheckLg v-if="isCopy" class="fg-success" />
      <a v-else role="button" class="fg-body" title="Copy" aria-label="Copy" @click="handleCopy">
        <BiCopy />
      </a>
    </div>
  </div>
  <Code :code="code" lang="scss"/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Code from './code.js'

const url = 'https://github.com/twbs/bootstrap/blob/v6.0.0-alpha.1/'

const props = defineProps({
  name: {
    type: String,
    default: null
  },
  file: {
    type: String,
    default: 'html'
  }
});

const code = computed(() => {
  if (props.name === 'root-border-var') {
    return `--border-width: #{$border-width},
--border-width-keyline: .5px,
--border-style: #{$border-style},
--border-color: light-dark(var(--gray-200), var(--gray-700)),
--border-color-translucent: color-mix(in oklch, var(--fg-body) 15%, transparent),`;
  } else {
    return '';
  }
});

const isCopy = ref(false);
function handleCopy() {
  navigator.clipboard
    .writeText(code)
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