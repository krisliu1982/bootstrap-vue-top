<template>
        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreen = true">Full screen</button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenSm = true">
            Full screen below sm
          </button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenMd = true">
            Full screen below md
          </button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenLg = true">
            Full screen below lg
          </button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenXl = true">
            Full screen below xl
          </button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenXxl = true">
            Full screen below xxl
          </button>
        </div>
        <bv-modal-2 v-model="isOpenModalFullscreen" title="Full screen modal" dialog-class="modal-fullscreen"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenSm"
          title="Full screen below sm"
          dialog-class="modal-fullscreen-sm-down"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenMd"
          title="Full screen below md"
          dialog-class="modal-fullscreen-md-down"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenLg"
          title="Full screen below lg"
          dialog-class="modal-fullscreen-lg-down"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenXl"
          title="Full screen below xl"
          dialog-class="modal-fullscreen-xl-down"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenXxl"
          title="Full screen below xxl"
          dialog-class="modal-fullscreen-xxl-down"
          >...</bv-modal-2
        >
</template>

<script setup>
import { ref } from 'vue';

const isOpenModalFullscreen = ref(false);
const isOpenModalFullscreenSm=ref(false);
const isOpenModalFullscreenMd=ref(false);
const isOpenModalFullscreenLg=ref(false);
const isOpenModalFullscreenXl=ref(false);
const isOpenModalFullscreenXxl=ref(false);
</script>
