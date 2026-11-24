<template>
  <table class="table" :class="props.tableClass">
    <caption v-if="caption">
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
          <th scope="col">
            <template v-if="col.type === null">
              <template v-if="col.sortable === null">{{ col.header }}</template>
              <template v-else>
                <button
                  class="p-0 border-0 bg-transparent text-nowrap"
                  style="font-weight: inherit"
                  @click="_sortBy(col)"
                >
                  {{ col.header }}
                  <bi-arrow-down-up v-if="sortInfo.field !== col.field || sortInfo.order === null" />
                  <bi-sort-up-alt v-else-if="sortInfo.order === 'asc'" class="text-primary" />
                  <bi-sort-down v-else-if="sortInfo.order === 'desc'" class="text-primary" />
                </button>
              </template>
            </template>
            <template v-else-if="col.type === 'index' || col.type === 'radio'">
              {{ col.header }}
            </template>
            <template v-else-if="col.type === 'checkbox'">
              <input
                :id="`allcheckbox-${id}`"
                class="form-check-input"
                type="checkbox"
                @change="_handleAllCheckboxChange"
              />
            </template>
            <template v-else-if="col.type === 'expand'"></template>
          </th>
        </template>
      </tr>
    </thead>
    <tbody :class="props.tbodyClass">
      <template v-for="(item, index) in items" :key="index">
        <tr :class="_tbodyTrClass(item)">
          <td v-for="col in cols" :key="col.keyId">
            <template v-if="col.type === null && col.body === null">
              {{ get(item, col.field) }}
            </template>
            <template v-else-if="col.type === 'index'">{{ index + 1 }}</template>
            <template v-else-if="col.type === 'checkbox'">
              <input
                class="form-check-input"
                type="checkbox"
                :value="get(item, col.field)"
                v-model="checkboxSelectedKeys"
              />
            </template>
            <template v-else-if="col.type === 'radio'">
              <input class="form-check-input" type="radio" :value="get(item, col.field)" v-model="radioSelectedKey" />
            </template>
            <template v-else-if="col.type === 'expand'">
              <button
                type="button"
                class="p-0 border-0 bg-transparent"
                @click="_handleToggleExpandTr(get(item, col.field))"
              >
                <BiChevronRight
                  class="expand-icon"
                  :class="{ 'rotate-90': expandKeys.includes(get(item, col.field)) }"
                />
              </button>
            </template>
            <component v-else :is="col.body" :item="item" :index="index" />
          </td>
        </tr>
        <tr v-if="expandField !== null && expandKeys.includes(get(item, expandField))">
          <td :colspan="cols.length">
            <component :is="expandBody" :item="item" :index="index" />
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot :class="props.tfootClass" v-if="props.tfootData !== null">
      <tr>
        <td v-for="item in props.tfootData">{{ item }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
import { ref, reactive, provide, watch, computed, useId } from 'vue';
import { get } from 'es-toolkit/compat';
import { orderBy } from 'es-toolkit';
import { cols_injection_key } from './table-keys.js';

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

const sortInfo = reactive({
  type: null,
  field: null,
  order: null
});

const items = computed(() => {
  if (sortInfo.type === null || sortInfo.type === 'remote' || sortInfo.order === null) {
    return props.data;
  } else if (sortInfo.type === 'local') {
    return orderBy(props.data, [sortInfo.field], [sortInfo.order]);
  }
  return props.data;
});

const cols = reactive([]);
provide(cols_injection_key, cols);

const checkboxField = computed(() => {
  const col = cols.find((c) => c.type === 'checkbox');
  return col ? col.field : null;
});
const radioField = computed(() => {
  const col = cols.find((c) => c.type === 'radio');
  return col ? col.field : null;
});
const expandField = computed(() => {
  const col = cols.find((c) => c.type === 'expand');
  return col ? col.field : null;
});
const expandBody = computed(() => {
  const col = cols.find((c) => c.type === 'expand');
  return col ? col.body : null;
});

const id = useId();

//checkbox
const checkboxSelectedKeys = ref([]);
//radio
const radioSelectedKey = ref(null);
//expand
const expandKeys = ref([]);

watch(checkboxSelectedKeys, (val) => {
  const allcheckboxEl = document.getElementById(`allcheckbox-${id}`);

  if (!allcheckboxEl) return;

  if (val.length === 0) {
    allcheckboxEl.checked = false;
    allcheckboxEl.indeterminate = false;
  } else if (val.length < props.data.length) {
    allcheckboxEl.checked = false;
    allcheckboxEl.indeterminate = true;
  } else {
    allcheckboxEl.checked = true;
    allcheckboxEl.indeterminate = false;
  }
});

//tbody->tr:class调整
function _tbodyTrClass(_item) {
  if (checkboxField !== null) {
    if (checkboxSelectedKeys.value.includes(get(_item, checkboxField.value))) {
      return 'table-active';
    }
  }

  if (radioField !== null) {
    if (radioSelectedKey.value === get(_item, radioField.value)) {
      return 'table-active';
    }
  }

  if (props.tbodyTrClass !== null) {
    return props.tbodyTrClass(_item);
  } else {
    return null;
  }
}

function _handleAllCheckboxChange(event) {
  const checked = event.currentTarget.checked;
  if (checked) {
    checkboxSelectedKeys.value = props.data.map((item) => get(item, checkboxField.value));
  } else {
    checkboxSelectedKeys.value = [];
  }
}

function _sortBy(_col) {
  sortInfo.type = _col.sortable;

  if (sortInfo.field !== _col.field) {
    sortInfo.field = _col.field;
    sortInfo.order = 'asc';
  } else {
    if (sortInfo.order === null) {
      sortInfo.order = 'asc';
    } else if (sortInfo.order === 'asc') {
      sortInfo.order = 'desc';
    } else if (sortInfo.order === 'desc') {
      sortInfo.order = null;
    }
  }

  if (sortInfo.type === 'remote') {
    emit('sort-change', sortInfo.field, sortInfo.order);
  }
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
