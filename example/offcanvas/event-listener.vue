<template>
         <button type="button" class="btn btn-primary" @click="offcanvasEventRef.toggle()">Offcanvas event</button>
        <bv-offcanvas ref="offcanvasEventRef" title="事件监听" @offcanvas-shown="handleShown">
          <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div v-if="data !== null">
            <p>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
              lists, etc.
            </p>
          </div>
        </bv-offcanvas>
</template>

<script setup>
import { ref } from 'vue';

const offcanvasEventRef = ref(null);
const loading = ref(false);
const data = ref(null);
function handleShown() {
  if (data.value === null) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      data.value = '...';
    }, 1000);
  }
}
</script>
