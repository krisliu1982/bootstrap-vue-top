<template>
  <table class="table" :class="props.tableClass">
    <caption v-if="props.caption">
      {{
        props.caption
      }}
    </caption>
    <slot></slot>
    <colgroup>
      <template v-for="col in cols" :key="col.keyId">
        <col :style="{ width: col.width }" />
      </template>
    </colgroup>
    <thead :class="props.theadClass">
      <tr>
        <template v-for="col in cols" :key="col.keyId">
          <th scope="col">{{ col.header }}</th>
        </template>
      </tr>
    </thead>
    <tbody :class="props.tbodyClass">
      <TreetableNode :data="data"></TreetableNode>
    </tbody>
    <tfoot v-if="props.tfootData !== null" :class="props.tfootClass">
      <tr>
        <td v-for="item in props.tfootData">{{ item }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
import { provide, reactive } from 'vue';
import { cols_key, attrs_key, expand_keys } from './treetable-keys.js';
import TreetableNode from './treetable-node.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  tableClass: {
    type: String,
    default: null
  },
  theadClass: {
    type: String,
    default: null
  },
  tbodyClass: {
    type: String,
    default: null
  },
  tfootClass: {
    type: String,
    default: null
  },
  tfootData: {
    type: Array,
    default: null
  },
  caption: {
    type: String,
    default: null
  },
  attrKey: {
    type: String,
    required: true
  },
  attrChildren: {
    type: String,
    required: true
  }
});

const cols = reactive([]);
provide(cols_key, cols);

provide(attrs_key, reactive({ key: props.attrKey, children: props.attrChildren }));

const expandKeys = reactive({});
expandKeys[props.data[props.attrKey]] = true;
provide(expand_keys, expandKeys);
</script>
