<template>
  <div ref="elementRef">
    <slot name="trigger"></slot>
    <slot v-if="$slots.tip" name="tip"></slot>
    <ul v-if="fileList.length > 0" class="list-unstyled mb-0">
      <li v-for="(file, index) in fileList" class="d-flex align-items-center border-bottom py-2">
        <span class="me-3">{{ index + 1 }}. {{ file.name }}</span>
        <small class="text-body-secondary me-3 d-none d-sm-block">[{{ formatFileSize(file.size) }}]</small>
        <a class="ms-auto me-3" :href="file.url" target="_blank"><bi-eye /></a>
        <a href="#" @click.prevent="handleRemove(index)"><bi-x-lg /></a>
      </li>
    </ul>
    <input ref="fileElRef" type="file" :multiple="multiple" name="file" style="display: none" @change="handleChange" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const emit = defineEmits(['file-change', 'file-remove']);

const props = defineProps({
  fileList: {
    type: Array,
    default: []
  },
  multiple: {
    type: Boolean,
    default: false
  }
});

const elementRef = ref(null);
const fileElRef = ref(null);

onMounted(() => {
  elementRef.value.children[0].addEventListener('click', function () {
    fileElRef.value.click();
  });
});

function handleChange(event) {
  emit('file-change', event.target);
}

function handleRemove(index) {
  emit('file-remove', index);
}

/**
 * 格式化文件大小
 * @param {number} bytes - 文件大小的字节数
 * @param {number} [decimals=2] - 保留的小数位数，默认为 2
 * @returns {string} 格式化后的文件大小
 */
function formatFileSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // 保留指定小数位数
  const size = parseFloat((bytes / Math.pow(k, i)).toFixed(decimals));

  return `${size} ${sizes[i]}`;
}
</script>
