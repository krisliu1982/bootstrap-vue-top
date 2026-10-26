<template>
  <div class="docs-code-snippet not-prose" data-pagefind-ignore>
    <div class="hstack align-items-center highlight-toolbar">
      <div class="code-tabs">
        <button v-for="t, index in props.tabs" type="button" class="code-tab-btn" :class="{'active' : curIndex === index}"
          @click="curIndex = index">{{ t.label }}</button>
      </div>
      <div class="ms-auto">
        <BiCheckLg v-if="isCopy" class="fg-success" />
        <a v-else role="button" class="fg-body" title="Copy" aria-label="Copy" @click="handleCopy">
          <BiCopy />
        </a>
      </div>
    </div>
    <div class="docs-code">
    <template v-for="t, index in props.tabs">
      <Code v-show="curIndex === index" :code="t.code" :lang="t.lang" />
    </template>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import Code from './code.vue'

const props = defineProps({
  tabs: {
    type: Array,
    default: []
  }
});

const curIndex = ref(0)

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