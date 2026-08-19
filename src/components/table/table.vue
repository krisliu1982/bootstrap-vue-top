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
              <template v-if="col.type === null">
                <template v-if="col.sortable === null">{{ col.header }}</template>
                <template v-else>
                  <a
                    href="#"
                    role="button"
                    class="link-body-emphasis text-decoration-none text-nowrap"
                    @click.prevent="_sortBy(col)"
                  >
                    {{ col.header }}
                    <bi-arrow-down-up v-if="sortField !== col.field || sortOrder === null" />
                    <bi-sort-up-alt v-else-if="sortOrder === 'asc'" class="text-primary" />
                    <bi-sort-down v-else-if="sortOrder === 'desc'" class="text-primary" />
                  </a>
                </template>
              </template>
              <template v-else-if="col.type === 'index' || col.type === 'radio'">
                {{ col.header }}
              </template>
              <template v-else-if="col.type === 'checkbox'">
                <input class="form-check-input" type="checkbox" @change="_handleAllCheckboxChange" />
              </template>
              <template v-else-if="col.type === 'expand'">&nbsp;</template>
            </th>
          </template>
        </tr>
      </thead>
      <tbody :class="tbodyClass">
        <template v-for="(item, index) in items" :key="index">
          <tr :class="_tbodyTrClass(item)">
            <td v-for="col in cols">
              <template v-if="col.type === null && col.body === null">
                {{ get(item, col.field) }}
              </template>
              <template v-else-if="col.type === 'index'">{{ index + 1 }}</template>
              <template v-else-if="col.type === 'checkbox'">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="get(item, trKeyInfo.field)"
                  v-model="checkboxSelectedKeys"
                />
              </template>
              <template v-else-if="col.type === 'radio'">
                <input
                  class="form-check-input"
                  type="radio"
                  :value="get(item, trKeyInfo.field)"
                  v-model="radioSelectedKey"
                />
              </template>
              <template v-else-if="col.type === 'expand'">
                <a
                  href="#"
                  role="button"
                  class="link-body-emphasis text-decoration-none"
                  @click.prevent="_handleToggleExpandTr(get(item, trKeyInfo.field))"
                >
                  <BiChevronRight
                    class="expand-icon"
                    :class="{ 'rotate-90': expandKeys.includes(get(item, trKeyInfo.field)) }"
                  />
                </a>
              </template>
              <component v-else :is="col.body" :item="item" :index="index" />
            </td>
          </tr>
          <tr v-if="trKeyInfo.type === 'expand' && expandKeys.includes(get(item, trKeyInfo.field))">
            <td :colspan="cols.length">
              <component :is="_getExpandBody()" :item="item" :index="index" />
            </td>
          </tr>
        </template>
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
import { useSlots, ref, provide, onMounted, watch, computed } from 'vue';
import { get, orderBy } from 'lodash-es';
import { cols_injection_key, tr_keyinfo_injection_key } from './table-keys.js';

const emit = defineEmits(['sort-change', 'expand-change']);

const props = defineProps({
  data: {
    type: Array,
    default: []
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
  tbodyTrClass: {
    type: Function,
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
  }
});
const ready = ref(false);

const sortable = ref(null);
const sortField = ref(null);
const sortOrder = ref(null);

const items = computed(() => {
  if (sortable.value === null || sortable.value === 'remote') {
    return props.data;
  } else if (sortable.value === 'local') {
    return orderBy(props.data, [sortField.value], [sortOrder.value]);
  }
});

const cols = [];
provide(cols_injection_key, cols);

const trKeyInfo = { type: null, field: null };
provide(tr_keyinfo_injection_key, trKeyInfo);
//checkbox
let checkboxAllboxEl = null;
const checkboxSelectedKeys = ref([]);
//radio
const radioSelectedKey = ref(null);
//expand
const expandKeys = ref([]);

onMounted(() => {
  _initCols();

  if (trKeyInfo.type === 'checkbox') {
    _watchCheckboxCol();
  }

  ready.value = true;
});

function _initCols() {
  const slots = useSlots();
  const vNodes = slots.default();

  const colVNodes = [];
  for (const vNode of vNodes) {
    if (vNode.type.__name === 'table-col') {
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

//tbody->tr色调调整
function _tbodyTrClass(_item) {
  if (trKeyInfo.type === 'checkbox') {
    if (checkboxSelectedKeys.value.includes(get(_item, trKeyInfo.field))) {
      return 'table-active';
    }
  }

  if (trKeyInfo.type === 'radio') {
    if (radioSelectedKey.value === get(_item, trKeyInfo.field)) {
      return 'table-active';
    }
  }

  if (props.tbodyTrClass !== null) {
    return props.tbodyTrClass(_item);
  } else {
    return null;
  }
}

function _watchCheckboxCol() {
  watch(checkboxSelectedKeys, (val) => {
    if (checkboxAllboxEl === null) return;
    if (val.length === 0) {
      checkboxAllboxEl.checked = false;
      checkboxAllboxEl.indeterminate = false;
      return;
    }
    if (val.length < props.data.length) {
      checkboxAllboxEl.checked = false;
      checkboxAllboxEl.indeterminate = true;
      return;
    }
    if (val.length === props.data.length) {
      checkboxAllboxEl.checked = true;
      checkboxAllboxEl.indeterminate = false;
      return;
    }
  });
}

function _handleAllCheckboxChange(_event) {
  if (checkboxAllboxEl === null) {
    checkboxAllboxEl = _event.currentTarget;
  }

  checkboxSelectedKeys.value = [];
  if (checkboxAllboxEl.checked) {
    props.data.forEach((item) => {
      checkboxSelectedKeys.value.push(get(item, trKeyInfo.field));
    });
  }
}

function _sortBy(_col) {
  sortable.value = _col.sortable;

  if (sortField.value !== _col.field) {
    sortField.value = _col.field;
    sortOrder.value = 'asc';
  } else {
    if (sortOrder.value === null) {
      sortOrder.value = 'asc';
    } else if (sortOrder.value === 'asc') {
      sortOrder.value = 'desc';
    } else if (sortOrder.value === 'desc') {
      sortOrder.value = null;
    }
  }

  if (sortable.value === 'remote') {
    emit('sort-change', sortField.value, sortOrder.value);
  }
}

function _getExpandBody() {
  for (let i = 0; i < cols.length; i++) {
    if (cols[i].type === 'expand') {
      return cols[i].body;
    }
  }
  return null;
}

function _handleToggleExpandTr(_key) {
  const index = expandKeys.value.indexOf(_key);
  if (index > -1) {
    expandKeys.value.splice(index, 1);
  } else {
    expandKeys.value.push(_key);

    emit('expand-change', _key);
  }
}

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

<style lang="css" scoped>
.expand-icon {
  transition: transform 0.3s ease;
}

.expand-icon.rotate-90 {
  transform: rotate(90deg);
}
</style>
