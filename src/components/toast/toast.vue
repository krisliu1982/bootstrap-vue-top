<template>
  <div class="toast-container position-fixed p-3" :class="containerClass">
    <div ref="toastRef" class="toast" role="alert" aria-live="polite" aria-atomic="true">
      <div class="toast-header">
        <BiCheckCircleFill v-if="props.type === 'success'" class="text-success fs-6" />
        <BiXCircleFill v-else-if="props.type === 'danger'" class="text-danger fs-6" />
        <BiExclamationCircleFill v-else-if="type === 'warning'" class="text-warning fs-6" />
        <BiInfoCircleFill v-else class="text-info fs-6" />
        <strong class="ms-2 me-auto">{{ props.title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" v-html="props.message"></div>
    </div>
  </div>
</template>

<script setup>
import { shallowRef, onMounted, onBeforeUnmount, computed } from 'vue';
import { Toast } from 'bootstrap';

const emit = defineEmits(['destroy']);

const toastRef = shallowRef(null);
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator(value) {
      return ['success', 'danger', 'warning', 'info'].includes(value);
    }
  },
  title: {
    type: String,
    default: 'Toast'
  },
  message: {
    type: String,
    default: 'Toast message'
  },
  duration: {
    type: Number,
    default: 5000
  },
  position: {
    type: String,
    default: 'top-right',
    validator(value) {
      return ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left'].includes(value);
    }
  }
});

const containerClass = computed(() => {
  if (props.position === 'top-right') {
    return 'top-0 end-0';
  } else if (props.position === 'top-left') {
    return 'top-0 start-0';
  } else if (props.position === 'top-center') {
    return 'top-0 start-50 translate-middle-x';
  } else if (props.position === 'bottom-right') {
    return 'bottom-0 end-0';
  } else if (props.position === 'bottom-left') {
    return 'bottom-0 start-0';
  } else {
    return 'top-0 end-0';
  }
});

let toast = null;
onMounted(() => {
  if (toast === null) {
    toast = new Toast(toastRef.value, {
      autohide: props.duration === 0 ? false : true,
      delay: props.duration
    });

    toastRef.value.addEventListener('hidden.bs.toast', () => {
      emit('destroy');
    });

    toast.show();
  }
});

onBeforeUnmount(() => {
  if (toast !== null) {
    toast.dispose();
    toast = null;
  }
});
</script>
