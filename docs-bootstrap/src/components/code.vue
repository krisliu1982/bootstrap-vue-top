<template>
  <pre><code v-html="html"></code></pre>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { codeToHtml } from 'shiki'

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
  html.value = await codeToHtml(props.code, {
    lang: props.lang,
    themes: {
      light: 'light-plus',
      dark: 'dark-plus',
    },
    defaultColor: 'light-dark()',
  structure: 'inline' // 关键配置
  });
});
</script>