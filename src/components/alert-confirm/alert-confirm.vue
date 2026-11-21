<template>
  <Transition name="bv-fadeIn" @after-leave="$emit('destroy')">
    <div ref="elementRef" v-show="visible" class="bv-alert-confirm d-flex justify-content-center align-items-start"
      tabindex="-1" role="alertdialog" aria-modal="true" :aria-label="props.message">
      <div class="shadow rounded bg-body p-3 col-10 col-sm-9 col-md-6 col-lg-4 col-xl-3" style="margin-top: 25vh">
        <div class="d-flex justify-content-center align-items-center">
          <div class="me-2">
            <BiExclamationCircle class="text-warning fs-5" />
          </div>
          <div class="fw-bolder fs-5">{{ props.message }}</div>
        </div>
        <hr />
        <div class="text-center">
          <button type="button" class="btn btn-secondary me-3" @click="cancel">取消</button>
          <button type="button" class="btn btn-primary" @click="confirm">确定</button>
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
  message: {
    type: String,
    required: true
  },
  callback: {
    type: Function,
    required: true
  }
});

const visible = ref(true);

let savedOverflow = '';
let savedPaddingRight = '';
onMounted(() => {
  savedOverflow = document.body.style.overflow;
  savedPaddingRight = document.body.style.paddingRight;
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`;
  }

  nextTick(() => {
    //焦点陷阱
    if (elementRef.value !== null) {
      focusTrapInstance = createFocusTrap(elementRef.value, {
        initialFocus: false,
        fallbackFocus: elementRef.value

      });
      focusTrapInstance.activate();
    }
  });
});

onBeforeUnmount(() => {
  document.body.style.overflow = savedOverflow;
  document.body.style.paddingRight = savedPaddingRight;

  //停止焦点陷阱
  if (focusTrapInstance !== null) {
    focusTrapInstance.deactivate();
  }
});

function confirm() {
  visible.value = false;
  try {
    props.callback();
  } catch (e) {
    console.error('[alert-confirm] confirm callback error:', e);
  }
}

function cancel() {
  visible.value = false;
}
</script>
