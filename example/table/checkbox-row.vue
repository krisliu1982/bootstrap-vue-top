<template>
  <bv-table ref="tableCheckboxRef" :data="tableData" table-class="table-hover">
    <bv-table-col type="checkbox" field="code" />
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>

  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-outline-primary" @click="handleGetCheckbox">getCheckboxSelectedKeys</button>
    <button type="button" class="btn btn-outline-primary" @click="handleSetCheckbox">setCheckboxSelectedKeys</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { alertMessage } from '@lib';

const tableData = [
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
];
const tableCheckboxRef = ref(null);

function handleGetCheckbox() {
  const keys = tableCheckboxRef.value.getCheckboxSelectedKeys();
  if (keys.length === 0) {
    alertMessage({ type: 'warning', message: '没有表格行被选择' });
  } else {
    alertMessage({ message: `被选表格行 ${keys.join(',')}` });
  }
}

function handleSetCheckbox() {
  tableCheckboxRef.value.setCheckboxSelectedKeys([]);
}
</script>
