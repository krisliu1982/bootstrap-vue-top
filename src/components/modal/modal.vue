<template>
  <div :id="id" class="modal fade" tabindex="-1" :aria-labelledby="`${id}-label`" aria-hidden="true">
    <div class="modal-dialog" :class="dialogClass">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="`${id}-label`">{{ title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useId, onMounted, onBeforeUnmount } from 'vue';
//import Modal from 'bootstrap/js/dist/modal';

const emit = defineEmits(['modal-shown']);

const id = useId();
const props = defineProps({
  title: {
    type: String,
    default: 'Modal'
  },
  backdrop: {
    type: [String, Boolean],
    default: true
  },
  dialogClass: {
    type: String,
    default: null
  }
});

let previousFocus = null;
let modal = null;
onMounted(() => {
  const modalEl = document.getElementById(id);
  if (modal === null) {
    /*modal = new Modal(modalEl, {
      backdrop: props.backdrop
    });*/

    modalEl.addEventListener('show.bs.modal', (event) => {
      previousFocus = document.activeElement;
    });

    modalEl.addEventListener('shown.bs.modal', (event) => {
      emit('modal-shown');
    });

    modalEl.addEventListener('hide.bs.modal', function () {
      if (document.activeElement && modalEl.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    });

    modalEl.addEventListener('hidden.bs.modal', function () {
      previousFocus.focus();
    });
  }
});

onBeforeUnmount(() => {
  if (modal !== null) {
    modal.dispose();
    modal = null;
  }
});

defineExpose({
  toggle: function () {
    modal.toggle();
  }
});
</script>
