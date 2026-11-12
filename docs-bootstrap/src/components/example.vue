<template>
  <div class="bd-code-snippet" data-pagefind-ignore>
    <div class="bd-example border rounded-top" :class="{ 'rounded-bottom': !showMarkup, [props.class]: props.class !== null }" v-html="props.code"></div>
    <template v-if="props.showMarkup">
      <div class="d-flex align-items-center bg-body-tertiary px-3 py-2 border">
        <small class="font-monospace text-body-secondary text-uppercase">{{ props.lang }}</small>
        <div class="ms-auto">
          <a :data-sb-js-snippet="props.addStackblitzJs ? true : undefined" role="button" class="text-body me-3" title="Edit" aria-label="Edit" @click="handleEdit($event)">
            <bi-lightning-charge-fill />
          </a>
          <BiCheckLg v-if="isCopy" class="text-success" />
          <a v-else role="button" class="text-body" title="Copy" aria-label="Copy" @click="handleCopy">
            <BiCopy />
          </a>
        </div>
      </div>
      <Code :code="props.code" :lang="props.lang" />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Code from './Code.vue';
import handleEdit from '@/assets/stackblitz.js';

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
  class: {
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
