<template>
  <li>
    <div class="node" :style="{ 'padding-left': level + 'rem' }">
      <a
        v-if="isFolder"
        href="#"
        @click.prevent="toggle"
        class="link-body-emphasis node-switcher"
        :class="{ 'rotate-90': isExpand }"
      >
        <BiCaretRight />
      </a>
      <div v-else class="node-placeholder"></div>
      <div class="node-content">
        <template v-if="mode === 'base'">
          <a href="#" class="node-content_link focus-ring p-1" @click.prevent="handleNodeClick(data[attrs.key])">{{
            data[attrs.label]
          }}</a>
        </template>
        <template v-else-if="mode === 'checkbox'">
          <div class="p-1">
            <input
              class="form-check-input"
              type="checkbox"
              :value="data[attrs.key]"
              :id="boxId"
              v-model="checkboxSelectedKeys"
            />
            <label class="form-check-label px-2" :for="boxId">
              {{ data[attrs.label] }}
            </label>
          </div>
        </template>
        <template v-else-if="mode === 'radio'">
          <div class="p-1">
            <input
              class="form-check-input"
              type="radio"
              :value="data[attrs.key]"
              :id="boxId"
              v-model="radioSelectedKey"
            />
            <label class="form-check-label px-2" :for="boxId">
              {{ data[attrs.label] }}
            </label>
          </div>
        </template>
      </div>
    </div>
    <template v-if="isFolder">
      <ul v-show="isExpand" class="list-unstyled">
        <TreeNode v-for="data in data[attrs.children]" :data="data" :level="level + 1" :key="data[attrs.key]" />
      </ul>
    </template>
  </li>
</template>

<script setup>
import { ref, computed, inject, useId } from 'vue';
import {
  attrs_key,
  mode_key,
  expand_level_key,
  radio_selected_Key,
  checkbox_selected_keys,
  node_click_key
} from './tree-keys.js';

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

const mode = inject(mode_key);
const expandLevel = inject(expand_level_key);
const radioSelectedKey = inject(radio_selected_Key);
const checkboxSelectedKeys = inject(checkbox_selected_keys);
const attrs = inject(attrs_key);
const handleNodeClick = inject(node_click_key);

const isExpand = ref(props.level < expandLevel + 1);
const isFolder = computed(() => {
  return props.data[attrs.children] && props.data[attrs.children].length;
});
function toggle() {
  isExpand.value = !isExpand.value;
}

let boxId = null;
if (mode === 'checkbox' || mode === 'radio') {
  boxId = useId();
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
  transition: transform 0.3s ease;
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
  margin-left: 0.125rem;
}

.node-content_link {
  display: block;
  color: var(--bs-body-color);
  text-decoration: none;
  border-radius: var(--bs-border-radius);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 15rem;
}

.node-content_link:hover {
  background-color: var(--bs-secondary-bg);
}
</style>
