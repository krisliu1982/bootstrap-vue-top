<template>
  <div class="border rounded overflow-hidden" data-pagefind-ignore>
    <div class="d-flex align-items-center px-5 py-3 bg-2 border-bottom">
      <div class="font-monospace fs-xs fg-2">{{ label }}</div>
      <div class="ms-auto">
        <BiCheckLg v-if="isCopy" class="fg-success" />
        <a v-else role="button" class="fg-body" title="Copy" aria-label="Copy" @click="handleCopy">
          <BiCopy />
        </a>
      </div>
    </div>
    <div v-html="html"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
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
  },
  label: {
    type: String,
    default: null
  }
});

const label = computed(() => {
  if (props.label) {
    return props.label;
  } else if (props.lang) {
    return props.lang.toUpperCase();
  } else {
    return '';
  }
});

onMounted(async () => {
  html.value = await codeToHtml(props.code, {
    lang: props.lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    defaultColor: 'light-dark()',
    transformers: [
    {
      pre(node) {
        this.addClassToHast(node, 'p-5')
      }
    }
  ]
  });
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
