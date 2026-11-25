<template>
  <button type="button" class="btn btn-primary" @click="modalEventRef.toggle()">Launch demo modal</button>
  <bv-modal ref="modalEventRef" title="动态内容" @modal-shown="handleShown">
    <div v-if="data !== null">
      <p>{{ data.content }}</p>
    </div>
    <div v-else class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalEventRef = ref(null);
const data = ref(null);
function handleShown() {
  if (data.value === null) {
    setTimeout(() => {
      data.value = { content: 'Woo-hoo, you’re reading this text in a modal!' };
    }, 1000);
  }
}
</script>
