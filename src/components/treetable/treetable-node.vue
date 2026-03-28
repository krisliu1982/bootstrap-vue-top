<template>
  <tr>
    <template v-for="(col, index) in cols">
      <td v-if="index === 0">
        <div class="node" :style="{ 'padding-left': level + 'rem' }">
          <a v-if="isFolder" href="#" role="button" @click.prevent="toggle" class="link-body-emphasis node-switcher" :class="{ 'rotate-90': isExpand }">
            <BiCaretRight />
          </a>
          <div v-else class="node-placeholder"></div>
          <div class="node-content">
            <template v-if="col.body === null">
              {{ get(data, col.field) }}
            </template>
            <component v-else :is="col.body" :item="data" />
          </div>
        </div>
      </td>
      <td v-else>
        <template v-if="col.body === null">
          {{ get(data, col.field) }}
        </template>
        <component v-else :is="col.body" :item="data" />
      </td>
    </template>
  </tr>
  <template v-if="isExpand && isFolder">
    <TreetableNode v-for="data in data[attrs.children]" :data="data" :level="level + 1" :key="data[attrs.key]" />
  </template>
</template>

<script setup>
import { computed, inject } from 'vue'
import { get } from 'lodash-es'
import { cols_key, attrs_key, expand_keys } from './treetable-keys.js'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  level: {
    type: Number,
    default: 0
  }
})

const cols = inject(cols_key)
const attrs = inject(attrs_key)
const expandKeys = inject(expand_keys)

const key = props.data[attrs.key]

const isExpand = computed(() => {
  return expandKeys.value[key] === true
})
const isFolder = computed(() => {
  return props.data[attrs.children] && props.data[attrs.children].length
})

function toggle() {
  if (expandKeys.value[key]) {
    expandKeys.value[key] = false
  } else {
    expandKeys.value[key] = true
  }
}
</script>

<style scoped>
.node {
  display: flex;
  align-items: center;
}

.node-switcher {
  flex-grow: 0;
  flex-shrink: 0;
  transition: transform 0.3s;
}

.node-switcher.rotate-90 {
  transform: rotate(90deg);
}

.node-placeholder {
  flex-grow: 0;
  flex-shrink: 0;
  width: 1rem;
  height: 1px;
}

.node-content {
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 0.25rem;
}
</style>
