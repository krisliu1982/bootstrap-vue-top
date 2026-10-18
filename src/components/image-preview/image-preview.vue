<template>
  <Transition name="fadeIn" @after-leave="$emit('destroy')">
    <div v-show="visible" ref="elementRef" class="image-preview" tabindex="-1" role="dialog" aria-modal="true">
      <div class="d-flex w-100 h-100 justify-content-center align-items-center user-select-none">
        <img
          :src="data[index]"
          class="mw-100 mh-100"
          @load="handleLoad(index)"
          @error="handleError"
          :style="{ transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})` }"
          @mousedown="startDrag"
          @touchstart="startDragTouch"
          draggable="false"
        />
      </div>
      <div v-if="isLoading" class="position-absolute top-50 translate-middle-y start-50 translate-middle-x">
        <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="position-absolute" style="top: 2rem; right: 2rem">
        <button
          type="button"
          class="btn btn-secondary btn-lg"
          style="
            --bs-btn-padding-x: 0.5rem;
            --bs-btn-padding-y: 0.5rem;
            --bs-btn-line-height: 1;
            --bs-btn-border-radius: 50%;
          "
          aria-label="Close"
          @click="visible = false"
        >
          <bi-x-lg />
        </button>
      </div>
      <template v-if="data.length > 1">
        <div class="position-absolute start-50 translate-middle-x" style="bottom: 5rem">
          <span class="badge text-bg-light">{{ index + 1 }} / {{ data.length }}</span>
        </div>
      </template>

      <div class="position-absolute start-50 translate-middle-x" style="bottom: 2rem">
        <div class="btn-group" role="group" aria-label="First group">
          <template v-if="data.length > 1">
            <button type="button" class="btn btn-secondary" @click="pre">
              <bi-chevron-left />
            </button>
            <button type="button" class="btn btn-secondary" @click="next">
              <bi-chevron-right />
            </button>
          </template>
          <button type="button" class="btn btn-secondary" @click="scale = Math.min(2, scale + 0.2)">
            <bi-zoom-in />
          </button>
          <button type="button" class="btn btn-secondary" @click="scale = Math.max(0.5, scale - 0.2)">
            <bi-zoom-out />
          </button>
          <button type="button" class="btn btn-secondary" @click="reset">
            <bi-arrow-repeat />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, shallowRef, nextTick } from 'vue';
import { createFocusTrap } from 'focus-trap';

const elementRef = shallowRef(null);
let focusTrapInstance = null;

const props = defineProps({
  data: {
    type: Array,
    default: []
  },
  initIndex: {
    type: Number,
    default: 0
  }
});

const visible = ref(false);
const index = ref(props.initIndex);

const isLoading = ref(false); //图片加载中
const cache = new Map(); //图片缓存

onMounted(() => {
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.body.clientWidth}px;`;
  }
  visible.value = true;

  nextTick(() => {
    //焦点陷阱
    if (elementRef.value !== null) {
      focusTrapInstance = createFocusTrap(elementRef.value, {
        initialFocus: false
      });
      focusTrapInstance.activate();
    }

    goto(index.value);
  });

  //添加监听keydown
  document.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style = null;
  }

  //停止焦点陷阱
  if (focusTrapInstance !== null) {
    focusTrapInstance.deactivate();
  }

  //移除监听keydown
  document.removeEventListener('keydown', handleKeyDown);
});

function confirm() {
  visible.value = false;
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    confirm();
  }
}

function pre() {
  if (index.value < props.data.length && index.value > 0) {
    index.value--;
  } else if (index.value === 0) {
    index.value = props.data.length - 1;
  }

  goto(index.value);
}

function next() {
  if (index.value < props.data.length - 1) {
    index.value++;
  } else if (index.value === props.data.length - 1) {
    index.value = 0;
  }

  goto(index.value);
}

function goto(_index) {
  if (cache.has(_index)) {
    isLoading.value = false;
  } else {
    isLoading.value = true;
  }

  reset();
}

const handleLoad = (_index) => {
  isLoading.value = false;
  cache.set(_index, props.data[_index]);
};

const handleError = (event) => {
  isLoading.value = false;
  event.target.src =
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23999%22 font-family=%22sans-serif%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';
};

// 图片状态
const offsetX = ref(0);
const offsetY = ref(0);
const scale = ref(1);

// 拖拽状态
let isDragging = false;
let startX = 0;
let startY = 0;
let startOffsetX = 0;
let startOffsetY = 0;

// ===== 鼠标拖拽 =====
const startDrag = (e) => {
  if (e.button !== 0) return;
  e.preventDefault();

  isDragging = true;

  startX = e.clientX;
  startY = e.clientY;
  startOffsetX = offsetX.value;
  startOffsetY = offsetY.value;

  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', endDrag);
};

const onDrag = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  // 如果有缩放，拖动距离随缩放比例变化（更自然）
  offsetX.value = startOffsetX + (e.clientX - startX) / scale.value;
  offsetY.value = startOffsetY + (e.clientY - startY) / scale.value;
};

const endDrag = () => {
  isDragging = false;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', endDrag);
};

// ===== 触摸拖拽 =====
const startDragTouch = (e) => {
  e.preventDefault();
  const touch = e.touches[0];

  isDragging = true;

  startX = touch.clientX;
  startY = touch.clientY;
  startOffsetX = offsetX.value;
  startOffsetY = offsetY.value;

  document.addEventListener('touchmove', onDragTouch);
  document.addEventListener('touchend', endDragTouch);
  document.addEventListener('touchcancel', endDragTouch);
};

const onDragTouch = (e) => {
  if (!isDragging) return;

  e.preventDefault();

  const touch = e.touches[0];

  offsetX.value = startOffsetX + (touch.clientX - startX) / scale.value;
  offsetY.value = startOffsetY + (touch.clientY - startY) / scale.value;
};

const endDragTouch = () => {
  isDragging = false;
  document.removeEventListener('touchmove', onDragTouch);
  document.removeEventListener('touchend', endDragTouch);
  document.removeEventListener('touchcancel', endDragTouch);
};

const reset = () => {
  offsetX.value = 0;
  offsetY.value = 0;
  scale.value = 1;
};
</script>
