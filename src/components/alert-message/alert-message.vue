<template>
  <Transition name="bv-fadeInDown" @after-leave="$emit('destroy')">
    <div v-show="visible" class="bv-alert-message" @mouseenter="clearTimer" @mouseleave="startTimer" role="alert">
      <div class="d-flex align-items-center rounded px-3 py-2" :class="className">
        <div class="me-2">
          <BiCheckCircle v-if="props.type === 'success'" />
          <BiXCircle v-else-if="props.type === 'danger'" />
          <BiExclamationCircle v-else-if="props.type === 'warning'" />
          <BiInfoCircle v-else />
        </div>
        <div>{{ props.message }}</div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator(value) {
      return ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value);
    }
  },
  message: {
    type: String,
    default: 'Alert Message'
  },
  duration: {
    type: Number,
    default: 3000
  }
});

const visible = ref(false);

const className = computed(() => {
  return `text-bg-${props.type}`;
});

onMounted(() => {
  startTimer();
  visible.value = true;
});

function close() {
  visible.value = false;
}

let timer = null;
function clearTimer() {
  clearTimeout(timer);
}

function startTimer() {
  timer = setTimeout(() => {
    close();
  }, props.duration);
}
</script>
