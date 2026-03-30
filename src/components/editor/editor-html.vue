<template>
  <div ref="elementRef"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

const elementRef = ref(null);

let editor = null;
onMounted(() => {
  editor = new Editor({
  element: elementRef.value,
  extensions: [StarterKit],
  content: '<p>Hello World!</p>',
})
});

onBeforeUnmount(() => {
  if (editor !== null) {
    editor.destory();
  }
});
</script>
