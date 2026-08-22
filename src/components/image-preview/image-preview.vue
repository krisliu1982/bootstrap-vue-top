<template>
  <Transition name="fadeIn" @after-leave="$emit('destroy')">
    <div v-show="visible" ref="elementRef" class="image-preview" tabindex="-1" role="dialog" aria-modal="true">
      <div class="d-flex w-100 h-100 justify-content-center align-items-center user-select-none">
        <transition name="image-preview-fade" 
            mode="out-in">
        <img :src="data[index]" class="mw-100 mh-100" :key="index" @load="handleLoad(index)"
          @error="handleError" />
        </transition>
      </div>
      <div v-if="isLoading" class="position-absolute top-50 translate-middle-y start-50 translate-middle-x">
              <div class="spinner-grow text-light" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
      <div class="position-absolute" style="top: 2rem; right: 2rem;">
        <button type="button" class="btn image-preview-btn" @click="visible = false">
          <bi-x />
        </button>
      </div>
      <template v-if="data.length > 1">
        <div class="position-absolute top-50 translate-middle-y" style="left: 2rem;">
          <button type="button" class="btn image-preview-btn" @click="pre">
            <bi-chevron-left />
          </button>
        </div>
        <div class="position-absolute top-50 translate-middle-y" style="right: 2rem;">
          <button type="button" class="btn image-preview-btn" @click="next">
            <bi-chevron-right />
          </button>
        </div>
        <div class="position-absolute start-50 translate-middle-x" style="bottom: 2rem;">
          <span class="text-white fs-5">{{ index + 1 }} / {{ data.length }}</span>
        </div>
      </template>
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

const isLoading = ref(false)        //图片加载中
const cache = new Map()             //图片缓存

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
    isLoading.value = false
  } else {
    isLoading.value = true
  }

  preload(_index);
}


const handleLoad = (_index) => {
  isLoading.value = false
  cache.set(_index, props.data[_index]);
  
}

const handleError = (event) => {
  isLoading.value = false
  event.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23999%22 font-family=%22sans-serif%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E'
};

function preload(_index) {

  let next = null;
    if (_index < props.data.length - 1) {
      next = _index + 1;
  } else if (_index === props.data.length - 1) {
    next = 0;
  }

    if (cache.has(next)) {
    return;
  }

  const img = new Image()
  img.src = props.data[next]
  
  cache.set(next, props.data[next])
  
}
</script>
