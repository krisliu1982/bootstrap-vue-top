<template>
  <div class="toast-container position-fixed p-3" :class="containerClass">
    <div ref="toastRef" class="toast" role="alert" aria-live="polite" aria-atomic="true">
      <div class="toast-header">
        <BiCheckCircleFill v-if="type === 'success'" class="fs-6 text-success" />
        <BiXCircleFill v-else-if="type === 'danger'" class="fs-6 text-danger" />
        <BiExclamationCircleFill v-else-if="type === 'warning'" class="fs-6 text-warning" />
        <BiInfoCircleFill v-else class="fs-6 text-info" />
        <strong class="ms-2 me-auto">{{ title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" v-html="message"></div>
    </div>
  </div>
</template>

<script setup>
import { shallowRef, onMounted, onBeforeUnmount, computed } from 'vue';
import Toast from 'bootstrap/js/dist/toast';

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
