<template>
  <div class="image-uploader-many">
    <div
      v-for="(imgUrl, index) in imgUrls"
      class="position-relative"
      :style="{ width: width, height: height }"
      :key="imgUrl"
      draggable="false"
      @dragstart="dragstart(imgUrl, $event)"
      @dragenter="dragenter(imgUrl, $event)"
      @dragend="dragend"
      @dragover="dragover"
    >
      <a href="#" class="d-block w-100 h-100" draggable="false" @click.prevent="handlePreview(index)"
        ><img draggable="false" class="d-block border object-fit-cover rounded w-100 h-100" :src="imgUrl"
      /></a>
      <div v-if="sortable" class="position-absolute top-0 start-0 end-0 z-1 d-flex justify-content-between p-2">
        <button
          type="button"
          :disabled="disabled"
          class="btn btn-secondary btn-sm"
          style="--bs-btn-border-radius: 50%; cursor: move"
          @mousedown="mousedown"
          @mouseup="mouseup"
        >
          <bi-arrows-move />
        </button>
        <button type="button" :disabled="disabled" class="btn btn-danger btn-sm" style="--bs-btn-border-radius: 50%" @click.stop="handleRemove(index)">
          <bi-trash />
        </button>
      </div>
      <div v-else class="position-absolute top-0 start-0 end-0 z-1 d-flex justify-content-end p-2">
        <button type="button" :disabled="disabled" class="btn btn-danger btn-sm" style="--bs-btn-border-radius: 50%" @click.stop="handleRemove(index)">
          <bi-trash />
        </button>
      </div>
    </div>
    <button type="button" :disabled="disabled" class="btn btn-image-uploader" :style="{ width: width, height: height }" @click="openImageDialog">
      <bi-plus-lg class="fs-3" />
    </button>
    <input ref="fileElRef" type="file" multiple name="file" style="display: none" accept="image/*" @change="handleChange" />
  </div>
  <slot v-if="$slots.tip" name="tip"></slot>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['file-change', 'file-remove', 'file-preview'])

const props = defineProps({
  imgUrls: {
    type: Array,
    default: []
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
  },
  sortable: {
    type: Boolean,
    default: false
  }
})

const fileElRef = ref(null)
function openImageDialog() {
  fileElRef.value.click()
}

function handleChange(event) {
  emit('file-change', event.target)
}

function handleRemove(index) {
  emit('file-remove', index)
}

function handlePreview(index) {
  emit('file-preview', index)
}

//拖动排序
let dragId = null
function dragstart(imgUrl, event) {
  //监听dragOption拖动开始
  dragId = imgUrl

  let elem = event.currentTarget.querySelector('img')
  elem.classList.add('border-primary')
  elem.classList.add('border-3')

  event.dataTransfer.effectAllowd = 'move'
}
function dragenter(imgUrl, event) {
  //监听dragId排序拖动的放置
  event.preventDefault()

  var sourceId = dragId
  var targetId = imgUrl

  if (!sourceId || !targetId) return
  if (sourceId === targetId) return

  var sourceIdIndex = props.imgUrls.findIndex((imgUrl) => imgUrl === sourceId)
  var targetIdIndex = props.imgUrls.findIndex((imgUrl) => imgUrl === targetId)
  var sourceItem = props.imgUrls[sourceIdIndex]
  props.imgUrls.splice(sourceIdIndex, 1)
  props.imgUrls.splice(targetIdIndex, 0, sourceItem)
}
function dragend(event) {
  //监听dragId排序拖动的结束
  event.preventDefault()

  let elem = event.currentTarget.querySelector('img')
  elem.classList.remove('border-primary')
  elem.classList.remove('border-3')

  dragId = null //清除dragId
  event.currentTarget.setAttribute('draggable', false)
}
function dragover(event) {
  event.preventDefault()
  //拖放视觉效果
  event.dataTransfer.dropEffect = 'move'
}

function mousedown(event) {
  if (event.button === 0) {
    var elem = event.currentTarget
    elem.parentNode.parentNode.setAttribute('draggable', true)
  }
}
function mouseup(event) {
  if (event.button === 0) {
    var elem = event.currentTarget
    elem.parentNode.parentNode.setAttribute('draggable', false)
  }
}
</script>
