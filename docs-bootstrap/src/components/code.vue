<template>
  <div class="docs-code border border-top-0 rounded-bottom" v-html="html"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { highlightCode } from './code-highlighter.js'

const html = ref(null);

const props = defineProps({
  code: {
    type: String,
    default: null
  },
  lang: {
    type: String,
    default: null
  }
});

onMounted(async () => {
  html.value = await highlightCode(props.code, props.lang);
});
</script>