<template>
  <tr>
    <template v-for="col in cols" :key="col.keyId">
      <td v-if="col.tree">
        <div class="node" :style="{ 'padding-left': level + 'rem' }">
          <button v-if="isFolder" type="button" @click="toggle" class="node-switcher">
            <BiCaretRight class="node-switcher-icon" :class="{ 'rotate-90': isExpand }" />
          </button>
          <div v-else class="node-placeholder"></div>
          <div class="node-content">
            <template v-if="col.body === null">
              {{ get(props.data, col.field) }}
            </template>
            <component v-else :is="col.body" :item="props.data" />
          </div>
        </div>
      </td>
      <td v-else>
        <template v-if="col.body === null">
          {{ get(props.data, col.field) }}
        </template>
        <component v-else :is="col.body" :item="props.data" />
      </td>
    </template>
  </tr>
  <template v-if="isExpand && isFolder">
    <TreetableNode
      v-for="data1 in props.data[attrs.children]"
      :data="data1"
      :level="props.level + 1"
      :key="data1[attrs.key]"
    />
  </template>
</template>

<script setup>
import { computed, inject } from 'vue';
import { get } from 'es-toolkit/compat';
import { cols_key, attrs_key, expand_keys } from './treetable-keys.js';

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  level: {
    type: Number,
    default: 0
  }
});

const cols = inject(cols_key);
const attrs = inject(attrs_key);
const expandKeys = inject(expand_keys);

const key = props.data[attrs.key];

const isExpand = computed(() => {
  return expandKeys[key] === true;
});
const isFolder = computed(() => {
  return props.data[attrs.children] && props.data[attrs.children].length;
});

function toggle() {
  if (expandKeys[key]) {
    expandKeys[key] = false;
  } else {
    expandKeys[key] = true;
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
  padding: 0;
  border: 0;
  background: transparent;
}

.node-switcher-icon {
  transition: transform 0.3s ease;
}

.node-switcher-icon.rotate-90 {
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
