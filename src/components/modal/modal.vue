<template>
  <div :id="id" class="modal fade" tabindex="-1" :aria-labelledby="`${id}-label`" aria-hidden="true">
    <div class="modal-dialog" :class="props.dialogClass">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5" :id="`${id}-label`">{{ props.title }}</h2>
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
import { Modal } from 'bootstrap';

const emit = defineEmits(['modal-shown']);

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

const id = useId();
let previousFocus = null;
let modalEl = null;
let modal = null;

function onShow() {
  previousFocus = document.activeElement;
}
function onShown() {
  emit('modal-shown');
}
function onHide() {
  if (document.activeElement && modalEl.contains(document.activeElement)) {
    document.activeElement.blur();
  }
}
function onHidden() {
  if (previousFocus && typeof previousFocus.focus === 'function') {
    previousFocus.focus();
  }
}

onMounted(() => {
  modalEl = document.getElementById(id);
  modal = new Modal(modalEl, { backdrop: props.backdrop });
  modalEl.addEventListener('show.bs.modal', onShow);
  modalEl.addEventListener('shown.bs.modal', onShown);
  modalEl.addEventListener('hide.bs.modal', onHide);
  modalEl.addEventListener('hidden.bs.modal', onHidden);
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
