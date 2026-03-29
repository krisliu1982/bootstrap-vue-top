<template>
  <Teleport to="body">
    <transition name="fadeIn">
      <a v-if="visible" href="#" role="button" class="backtop" :class="backtopClass" @click.prevent="handleClick">
        <BiArrowUpCircleFill />
      </a>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const visible = ref(false);

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

const backtopClass = computed(() => {
  const classList = [`link-${props.color}`];
  if (props.size === 'md') {
    classList.push('fs-2');
  } else if (props.size === 'sm') {
    classList.push('fs-3');
  } else if (props.size === 'lg') {
    classList.push('fs-1');
  }

  return classList;
})

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
