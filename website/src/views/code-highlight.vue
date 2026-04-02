<template>
  <div class="docs-example-code">
    <div class="position-absolute top-0 end-0 d-flex align-items-center p-2">
      <small class="text-body-secondary me-3">{{ label }}</small>
      <div v-if="isCopy" class="text-success"><BiCheckLg /></div>
      <a v-else role="button" @click="handleCopy" title="Copy"><BiCopy /></a>
    </div>
    <pre><code ref="codeRef" :class="languageClass">{{ code }}</code></pre>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Prism from 'prismjs';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
// 引入 SCSS 语言支持
import 'prismjs/components/prism-scss.min';

// 配置插件，解决首尾空行问题
Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true, // 移除每行行尾空格
  'remove-indent': true, // 移除多余缩进
  'left-trim': true, // 移除代码块顶部空白
  'right-trim': true // 移除代码块底部空白
});

const codeRef = ref(null);
const props = defineProps({
  code: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'html'
  },
  label: {
    type: String,
    default: null
  }
});

onMounted(() => {
  Prism.highlightElement(codeRef.value);
});

const languageClass = computed(() => {
  if (props.type === 'html') {
    return 'language-html';
  } else if (props.type === 'vue') {
    return 'language-html';
  } else if (props.type === 'scss') {
    return 'language-scss';
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
