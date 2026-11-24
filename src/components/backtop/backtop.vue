<template>
  <Teleport to="body">
    <Transition name="bv-fadeIn">
      <a v-if="visible" role="button" class="bv-backtop" @click="handleClick" aria-label="返回顶部">
        <BiArrowUpCircleFill :class="backtopClass" />
      </a>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value);
    }
  },
  size: {
    type: String,
    default: 'md',
    validator(value) {
      return ['sm', 'md', 'lg'].includes(value);
    }
  }
});

const visible = ref(false);

const backtopClass = computed(() => {
  const classList = [`text-${props.color}`];
  if (props.size === 'md') {
    classList.push('display-4');
  } else if (props.size === 'sm') {
    classList.push('display-6');
  } else if (props.size === 'lg') {
    classList.push('display-2');
  }

  return classList;
});

onMounted(() => {
  handleScroll();
  document.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  document.removeEventListener('scroll', handleScroll);
});

let ticking = false;
function handleScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    visible.value = document.documentElement.scrollTop >= 200;
    ticking = false;
  });
}

function handleClick() {
  document.documentElement.scrollTo({ top: 0 });
}
</script>
