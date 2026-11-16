<template>
  <Teleport to="body">
    <transition name="bv-fadeIn">
      <a v-if="visible" href="#" role="button" class="bv-backtop" @click.prevent="handleClick">
        <BiArrowUpCircleFill :class="backtopClass" />
      </a>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

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
  document.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  document.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  visible.value = document.documentElement.scrollTop >= 200;
}

function handleClick() {
  document.documentElement.scrollTo({ top: 0 });
}
</script>
