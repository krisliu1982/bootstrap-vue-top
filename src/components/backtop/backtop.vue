<template>
  <Teleport to="body">
    <transition name="fadeIn">
      <a v-if="visible" href="#" @click.stop.prevent="handleClick">
        <BiArrowUpCircleFill class="fs-1 backtop" />
      </a>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  visible.value = document.documentElement.scrollTop >= 200;
}

function handleClick() {
  document.documentElement.scrollTo({ top: 0 });
}
</script>
