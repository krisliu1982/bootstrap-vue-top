<template>
  <ul class="list-unstyled">
    <TreeItem :data="data"></TreeItem>
  </ul>
</template>

<script setup>
import { provide, ref, watch } from 'vue';
import TreeItem from './tree-node.vue';
import {
  attrs_key,
  mode_key,
  expand_level_key,
  radio_selected_Key,
  checkbox_selected_keys,
  node_click_key
} from './tree-keys.js';

const emit = defineEmits(['node-click', 'radio-change', 'checkbox-change']);

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  mode: {
    type: String,
    default: 'base',
    validator(value) {
      return ['base', 'checkbox', 'radio'].includes(value);
    }
  },
  expandLevel: {
    type: Number,
    default: 0
  },
  attrKey: {
    type: String,
    required: true
  },
  attrLabel: {
    type: String,
    required: true
  },
  attrChildren: {
    type: String,
    required: true
  }
});

provide(mode_key, props.mode);
provide(expand_level_key, props.expandLevel);

const radioSelectedKey = ref(null);
provide(radio_selected_Key, radioSelectedKey);
const checkboxSelectedKeys = ref([]);

provide(checkbox_selected_keys, checkboxSelectedKeys);
provide(attrs_key, {
  key: props.attrKey,
  label: props.attrLabel,
  children: props.attrChildren
});
provide(node_click_key, handleNodeClick);

function handleNodeClick(key) {
  emit('node-click', key);
}

watch(radioSelectedKey, (newKey) => {
  emit('radio-change', newKey);
});

watch(checkboxSelectedKeys, (newKeys) => {
  emit('checkbox-change', newKeys);
});

defineExpose({
  getCheckboxSelectedKeys: function () {
    return checkboxSelectedKeys.value;
  },
  setCheckboxSelectedKeys: function (val) {
    checkboxSelectedKeys.value = val;
  },
  getRadioSelectedKey: function () {
    return radioSelectedKey.value;
  },
  setRadioSelectedKey: function (val) {
    radioSelectedKey.value = val;
  }
});
</script>
