<template>
        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="modalXXlRef.toggle()">Extra extra large modal</button>
          <button type="button" class="btn btn-primary" @click="modalXlRef.toggle()">Extra large modal</button>
          <button type="button" class="btn btn-primary" @click="modalLgRef.toggle()">Large modal</button>
          <button type="button" class="btn btn-primary" @click="modalSmRef.toggle()">Small modal</button>
        </div>
                <bv-modal ref="modalXXlRef" title="Extra extra large modal" dialog-class="modal-xxl">...</bv-modal>
        <bv-modal ref="modalXlRef" title="Extra large modal" dialog-class="modal-xl">...</bv-modal>
        <bv-modal ref="modalLgRef" title="Large modal" dialog-class="modal-lg">...</bv-modal>
        <bv-modal ref="modalSmRef" title="Small modal" dialog-class="modal-sm">...</bv-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalXXlRef = ref(null);
const modalXlRef = ref(null);
const modalLgRef = ref(null);
const modalSmRef = ref(null);
</script>