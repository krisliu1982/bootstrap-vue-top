<template>
  <div :class="offcanvasClass" :style="offcanvasStyle" tabindex="-1" :id="id"
    :aria-labelledby="`${id}Label`">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" :id="`${id}Label`">{{ title }}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" :data-bs-target="`#${id}`"
        aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useId, onMounted, onBeforeUnmount, computed } from 'vue';
import Offcanvas from 'bootstrap/js/dist/offcanvas';

const emit = defineEmits(['offcanvas-shown']);

const id = useId();
const props = defineProps({
  title: {
    type: String,
    default: 'Offcanvas'
  },
  backdrop: {
    type: [String, Boolean],
    default: true
  },
  offcanvasClass: {
    type: String,
    default: 'offcanvas offcanvas-start'
  },
  offcanvasStyle: {
    type: String,
    default: null
  }
});

let offcanvas = null;
onMounted(() => {
  if (offcanvas === null) {
    const offcanvasEl = document.getElementById(id);
    offcanvas = new Offcanvas(offcanvasEl, {
      backdrop: props.backdrop
    });

    offcanvasEl.addEventListener('shown.bs.offcanvas', (event) => {
      emit('offcanvas-shown');
    });
  }
});

onBeforeUnmount(() => {
  if (offcanvas !== null) {
    offcanvas.dispose();
    offcanvas = null;
  }
});

defineExpose({
  toggle: function () {
    offcanvas.toggle();
  }
});
</script>
