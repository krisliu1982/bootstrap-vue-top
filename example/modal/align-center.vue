<template>
        <button type="button" class="btn btn-primary" @click="modalCenterRef.toggle()">Launch demo modal</button>
        <bv-modal ref="modalCenterRef" title="垂直居中" dialog-class="modal-dialog-centered">
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
        </bv-modal>
</template>

<script setup>
import { ref } from 'vue';

const modalCenterRef = ref(null);
</script>