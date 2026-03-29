<template>
  <Transition name="fadeIn" @after-leave="$emit('destroy')">
    <div v-show="visible" ref="elementRef" class="image-preview" tabindex="-1" role="dialog" aria-modal="true">
      <div class="d-flex w-100 h-100 justify-content-center align-items-center user-select-none">
        <img :src="data[index]" class="mw-100 mh-100" />
      </div>
      <div class="position-absolute z-1" style="top: 2rem; right: 2rem">
        <button type="button" class="btn btn-dark btn-lg" style="--bs-btn-border-radius: 50%" @click="visible = false">
          <bi-x-lg />
        </button>
      </div>
      <template v-if="data.length > 1">
        <div class="position-absolute z-1 top-50 translate-middle-y" style="left: 2rem">
          <button type="button" class="btn btn-dark btn-lg" style="--bs-btn-border-radius: 50%" @click="pre">
            <bi-chevron-left />
          </button>
        </div>
        <div class="position-absolute z-1 top-50 translate-middle-y" style="right: 2rem">
          <button type="button" class="btn btn-dark btn-lg" style="--bs-btn-border-radius: 50%" @click="next">
            <bi-chevron-right />
          </button>
        </div>
        <div class="position-absolute z-1 start-50 translate-middle-x" style="bottom: 2rem">
          <span class="badge text-bg-secondary fs-6">{{ index + 1 }} / {{ data.length }}</span>
        </div>
      </template>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue';
import { createFocusTrap } from 'focus-trap';

const elementRef = ref(null);
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
    return;
  }

  if (index.value === 0) {
    index.value = props.data.length - 1;
  }
}

function next() {
  if (index.value < props.data.length - 1) {
    index.value++;
    return;
  }
  if (index.value === props.data.length - 1) {
    index.value = 0;
  }
}
</script>
