<template>
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" @click="offcanvasEndRef.toggle()">Toggle right offcanvas</button>
    <button type="button" class="btn btn-primary" @click="offcanvasTopRef.toggle()">Toggle top offcanvas</button>
    <button type="button" class="btn btn-primary" @click="offcanvasBottomRef.toggle()">Toggle bottom offcanvas</button>
  </div>
  <bv-offcanvas ref="offcanvasEndRef" title="右边侧边栏" offcanvas-class="offcanvas offcanvas-end" offcanvas-style="--bs-offcanvas-width:75vw;">
    ...
  </bv-offcanvas>
  <bv-offcanvas ref="offcanvasTopRef" title="顶部侧边栏" offcanvas-class="offcanvas offcanvas-top" offcanvas-style="--bs-offcanvas-height:75vh;">
    ...
  </bv-offcanvas>
  <bv-offcanvas ref="offcanvasBottomRef" title="底部侧边栏" offcanvas-class="offcanvas offcanvas-bottom" offcanvas-style="--bs-offcanvas-height:75vh;">
    ...
  </bv-offcanvas>
</template>

<script setup>
import { ref } from 'vue';

const offcanvasEndRef = ref(null);
const offcanvasTopRef = ref(null);
const offcanvasBottomRef = ref(null);
</script>
