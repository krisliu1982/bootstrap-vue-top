<template>
  <div class="docs-example-snippet docs-code-snippet">
    <div class="docs-example m-0 border-0" :class="{ [props.class]: props.class !== null }" v-html="props.code">
    </div>
    <template v-if="props.showMarkup">
      <div class="hstack align-items-center highlight-toolbar">
        <small class="font-monospace text-body-secondary text-uppercase">{{ props.lang }}</small>
        <div class="ms-auto">
          <BiCheckLg v-if="isCopy" class="text-success" />
          <a v-else role="button" class="fg-body" title="Copy" aria-label="Copy" @click="handleCopy">
            <BiCopy />
          </a>
        </div>
      </div>
      <div class="docs-code">
        <Code :code="props.code" :lang="props.lang" />
      </div>
    </template>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import Code from './code.vue'

const props = defineProps({
  addStackblitzJs: {
    type: Boolean,
    default: false
  },
  code: {
    type: String,
    default: null
  },
  lang: {
    type: String,
    default: 'html'
  },
  showMarkup: {
    type: Boolean,
    default: true
  },
  class:{
    type: String,
    default: null
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