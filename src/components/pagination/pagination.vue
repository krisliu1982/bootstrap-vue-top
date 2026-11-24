<template>
  <nav class="row align-items-center g-3" :class="navClass">
    <div v-if="props.mode === 'full'" class="col-auto" :class="totalClass">共 {{ props.total }} 条</div>
    <ul v-if="pages > 1" class="col-auto pagination mb-0" :class="paginationClass">
      <li class="page-item" :class="{ disabled: props.currentPage === 1 }">
        <span v-if="props.currentPage === 1" class="page-link">
          <BiChevronLeft />
        </span>
        <button v-else type="button" class="page-link" @click="emit('currentChange', props.currentPage - 1)">
          <BiChevronLeft />
        </button>
      </li>

      <template v-if="props.mode === 'simple'">
        <li class="page-item disabled">
          <span class="page-link">{{ props.currentPage }}/{{ Math.ceil(props.total / props.pageSize) }}</span>
        </li>
      </template>

      <template v-if="props.mode === 'base' || props.mode === 'full'">
        <li class="page-item" :class="{ active: props.currentPage === 1 }">
          <span v-if="props.currentPage === 1" class="page-link" aria-current="page">1</span>
          <button v-else type="button" class="page-link" @click="emit('currentChange', 1)">1</button>
        </li>

        <li v-if="showPrevMore" class="page-item disabled">
          <span class="page-link">
            <BiThreeDots />
          </span>
        </li>

        <li v-for="p in pagers" class="page-item" :class="{ active: props.currentPage === p }" :key="p">
          <span v-if="currentPage === p" class="page-link" aria-current="page">{{ p }}</span>
          <button v-else type="button" class="page-link" @click="emit('currentChange', p)">
            {{ p }}
          </button>
        </li>

        <li v-if="showNextMore" class="page-item disabled">
          <span class="page-link">
            <BiThreeDots />
          </span>
        </li>

        <li class="page-item" :class="{ active: props.currentPage === pages }">
          <span v-if="currentPage == pages" class="page-link" aria-current="page">{{ pages }}</span>
          <button v-else type="button" class="page-link" @click="emit('currentChange', pages)">
            {{ pages }}
          </button>
        </li>
      </template>

      <li class="page-item" :class="{ disabled: props.currentPage === pages }">
        <span v-if="props.currentPage === pages" class="page-link">
          <BiChevronRight />
        </span>
        <button v-else type="button" class="page-link" @click="emit('currentChange', props.currentPage + 1)">
          <BiChevronRight />
        </button>
      </li>
    </ul>

    <select
      v-if="props.mode === 'full'"
      class="form-select col-auto"
      :class="pageSizeClass"
      style="width: 8rem"
      :value="props.pageSize"
      @change="(event) => emit('sizeChange', parseInt(event.currentTarget.value))"
    >
      <option v-for="item in [10, 20, 50, 100]" :value="item">{{ item }}条/页</option>
    </select>

    <div
      v-if="props.mode === 'full' && pages > props.pagerCount"
      class="col-auto input-group"
      :class="pageGoClass"
      style="width: 8rem"
    >
      <span class="input-group-text">Go</span>
      <input
        class="form-control"
        type="number"
        title="输入页码回车"
        oninput="this.value = Math.min(999, Math.max(1, this.value))"
        onblur="this.value = null"
        @keyup.enter="(event) => emit('currentChange', parseInt(event.currentTarget.value))"
      />
    </div>
  </nav>
</template>

<script setup>
import { computed, watchEffect, ref } from 'vue';

const emit = defineEmits(['currentChange', 'sizeChange']);

const props = defineProps({
  mode: {
    type: String,
    default: 'base',
    validator(value) {
      return ['simple', 'base', 'full'].includes(value);
    }
  },
  total: {
    type: Number,
    default: 0
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 20,
    validator(value) {
      return [10, 20, 50, 100].includes(value);
    }
  },
  pagerCount: {
    type: Number,
    default: 5,
    validator(value) {
      return [5, 7, 9, 11, 13, 15, 17, 19, 21].includes(value);
    }
  },
  size: {
    type: String,
    default: 'md',
    validator(value) {
      return ['sm', 'md', 'lg'].includes(value);
    }
  },
  position: {
    type: String,
    default: 'start',
    validator(value) {
      return ['start', 'center', 'end'].includes(value);
    }
  }
});

const navClass = computed(() => {
  if (props.position === 'start') return null;
  return `justify-content-${props.position}`;
});

const paginationClass = computed(() => {
  if (props.size === 'md') return null;
  return `pagination-${props.size}`;
});

const totalClass = computed(() => {
  if (props.size === 'md') return null;
  if (props.size === 'sm') return 'small';
  if (props.size === 'lg') return 'fs-5';
  return null;
});

const pageSizeClass = computed(() => {
  if (props.size === 'md') return null;
  return `form-select-${props.size}`;
});

const pageGoClass = computed(() => {
  if (props.size === 'md') return null;
  return `input-group-${props.size}`;
});

const pages = computed(() => {
  return Math.ceil(props.total / props.pageSize);
});

const showPrevMore = ref(false);
const showNextMore = ref(false);

const pagers = computed(() => {
  const halfPagerCount = (props.pagerCount - 1) / 2;
  const currentPage = props.currentPage;
  const pageCount = pages.value;
  let prevMore = false;
  let nextMore = false;
  if (pageCount > props.pagerCount) {
    if (currentPage > props.pagerCount - halfPagerCount) {
      prevMore = true;
    }
    if (currentPage < pageCount - halfPagerCount) {
      nextMore = true;
    }
  }
  const array = [];
  if (prevMore && !nextMore) {
    const startPage = pageCount - (props.pagerCount - 2);
    for (let i = startPage; i < pageCount; i++) {
      array.push(i);
    }
  } else if (!prevMore && nextMore) {
    for (let i = 2; i < props.pagerCount; i++) {
      array.push(i);
    }
  } else if (prevMore && nextMore) {
    const offset = Math.floor(props.pagerCount / 2) - 1;
    for (let i = currentPage - offset; i <= currentPage + offset; i++) {
      array.push(i);
    }
  } else {
    for (let i = 2; i < pageCount; i++) {
      array.push(i);
    }
  }
  return array;
});

watchEffect(() => {
  const halfPagerCount = (props.pagerCount - 1) / 2;
  showPrevMore.value = false;
  showNextMore.value = false;
  if (pages.value > props.pagerCount) {
    if (props.currentPage > props.pagerCount - halfPagerCount) {
      showPrevMore.value = true;
    }
    if (props.currentPage < pages.value - halfPagerCount) {
      showNextMore.value = true;
    }
  }
});
</script>
