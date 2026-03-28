<template>
  <div class="image-uploader-one">
    <div v-if="imgUrl" class="position-relative" :style="{ width: width, height: height }">
      <a href="#" class="d-block w-100 h-100" @click.prevent="handlePreview"
        ><img class="d-block border object-fit-cover rounded w-100 h-100" :src="imgUrl"
      /></a>
      <div class="position-absolute top-0 start-0 end-0 z-1 p-2">
        <button
          type="button"
          :disabled="disabled"
          class="btn btn-danger btn-sm"
          style="--bs-btn-border-radius: 50%"
          @click.stop="handleRemove"
        >
          <bi-trash />
        </button>
      </div>
    </div>
    <button
      v-else
      type="button"
      :disabled="disabled"
      class="btn btn-image-uploader"
      :style="{ width: width, height: height }"
      @click="openImageDialog"
    >
      <bi-plus-lg class="fs-3" />
    </button>
    <input ref="fileElRef" type="file" name="file" style="display: none" accept="image/*" @change="handleChange" />
  </div>
  <slot v-if="$slots.tip" name="tip"></slot>
</template>

<script setup>
import { ref } from 'vue';
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

const fileElRef = ref(null);
function openImageDialog() {
  fileElRef.value.click();
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
