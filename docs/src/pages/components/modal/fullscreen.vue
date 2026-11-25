<template>
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" @click="modalFullscreenRef.toggle()">Full screen</button>
    <button type="button" class="btn btn-primary" @click="modalFullscreenSmRef.toggle()">Full screen below sm</button>
    <button type="button" class="btn btn-primary" @click="modalFullscreenMdRef.toggle()">Full screen below md</button>
    <button type="button" class="btn btn-primary" @click="modalFullscreenLgRef.toggle()">Full screen below lg</button>
    <button type="button" class="btn btn-primary" @click="modalFullscreenXlRef.toggle()">Full screen below xl</button>
    <button type="button" class="btn btn-primary" @click="modalFullscreenXxlRef.toggle()">Full screen below xxl</button>
  </div>
  <bv-modal ref="modalFullscreenRef" title="Full screen modal" dialog-class="modal-fullscreen">...</bv-modal>
  <bv-modal ref="modalFullscreenSmRef" title="Full screen below sm" dialog-class="modal-fullscreen-sm-down">...</bv-modal>
  <bv-modal ref="modalFullscreenMdRef" title="Full screen below md" dialog-class="modal-fullscreen-md-down">...</bv-modal>
  <bv-modal ref="modalFullscreenLgRef" title="Full screen below lg" dialog-class="modal-fullscreen-lg-down">...</bv-modal>
  <bv-modal ref="modalFullscreenXlRef" title="Full screen below xl" dialog-class="modal-fullscreen-xl-down">...</bv-modal>
  <bv-modal ref="modalFullscreenXxlRef" title="Full screen below xxl" dialog-class="modal-fullscreen-xxl-down">...</bv-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalFullscreenRef = ref(null);
const modalFullscreenSmRef = ref(null);
const modalFullscreenMdRef = ref(null);
const modalFullscreenLgRef = ref(null);
const modalFullscreenXlRef = ref(null);
const modalFullscreenXxlRef = ref(null);
</script>
