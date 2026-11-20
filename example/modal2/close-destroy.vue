<template>
        <button type="button" class="btn btn-primary" @click="isOpenModalDestory = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalDestory" :destory="true" title="关闭时销毁">
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
        </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue';

const isOpenModalDestory = ref(false);
</script>
