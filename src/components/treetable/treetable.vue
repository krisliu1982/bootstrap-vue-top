<template>
  <table class="table" :class="tableClass">
    <caption v-if="caption">
      {{
        caption
      }}
    </caption>
    <slot></slot>
    <template v-if="ready">
      <colgroup>
        <template v-for="col in cols">
          <col :style="{ width: col.width }" />
        </template>
      </colgroup>
      <thead :class="theadClass">
        <tr>
          <template v-for="col in cols">
            <th scope="col">
              {{ col.header }}
            </th>
          </template>
        </tr>
      </thead>
      <tbody :class="tbodyClass">
        <TreetableNode :data="data"></TreetableNode>
      </tbody>
      <tfoot :class="tfootClass" v-if="tfootData !== null">
        <tr>
          <td v-for="item in tfootData">{{ item }}</td>
        </tr>
      </tfoot>
    </template>
  </table>
</template>

<script setup>
import { useSlots, ref, provide, onMounted } from 'vue';
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
  attrKey: {
    type: String,
    required: true
  },
  attrChildren: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: null
  }
});

const ready = ref(false);

const cols = [];
provide(cols_key, cols);
provide(attrs_key, { key: props.attrKey, children: props.attrChildren });
const expandKeys = ref({});
expandKeys.value[props.data[props.attrKey]] = true;
provide(expand_keys, expandKeys);

onMounted(() => {
  _initCols();

  ready.value = true;
});

function _initCols() {
  const slots = useSlots();
  const vNodes = slots.default();

  const colVNodes = [];
  for (const vNode of vNodes) {
    if (vNode.type.__name === 'treetable-col') {
      colVNodes.push(vNode);
    }
  }

  for (let i = 0; i < cols.length; i++) {
    if (colVNodes[i].children !== null && colVNodes[i].children.body !== 'undefined') {
      cols[i].body = colVNodes[i].children.body;
    } else {
      cols[i].body = null;
    }
  }
}
</script>
