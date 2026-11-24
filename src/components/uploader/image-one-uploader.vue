<template>
  <div class="bv-image-uploader-one">
    <div v-if="props.imgUrl" class="position-relative" :style="{ width: props.width, height: props.height }">
      <button type="button" class="d-block w-100 h-100 p-0 border-0" @click="handlePreview"><img class="d-block border object-fit-cover rounded w-100 h-100" :src="imgUrl" /></button>
      <div class="position-absolute top-0 end-0 z-1 p-2">
        <button
          type="button"
          :disabled="props.disabled"
          class="btn btn-secondary"
          style="--bs-btn-padding-x: 0.5rem; --bs-btn-padding-y: 0.5rem; --bs-btn-line-height: 1; --bs-btn-border-radius: 50%"
          @click.stop="handleRemove"
        >
          <bi-trash />
        </button>
      </div>
    </div>
    <button v-else type="button" :disabled="props.disabled" class="bv-btn-image-uploader" :style="{ width: props.width, height: props.height }" @click="openImageDialog">
      <bi-plus-lg class="fs-3" />
    </button>
    <input ref="fileRef" type="file" name="file" style="display: none" accept="image/*" @change="handleChange" />
  </div>
  <slot v-if="$slots.tip" name="tip"></slot>
</template>

<script setup>
import { shallowRef } from 'vue';
const emit = defineEmits(['file-change', 'file-remove', 'file-preview']);

const props = defineProps({
  imgUrl: {
    type: String,
    default: null
  },
  width: {
    type: String,
    default: '160px'
  },
  height: {
    type: String,
    default: '160px'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const fileRef = shallowRef(null);
function openImageDialog() {
  fileRef.value.click();
}

function handleChange(event) {
  emit('file-change', event.target);
}

function handleRemove() {
  emit('file-remove');
}

function handlePreview() {
  emit('file-preview');
}
</script>
