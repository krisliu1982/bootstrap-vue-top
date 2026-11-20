<template>
  <bv-table :data="tableExpandData" @expand-change="handleExpand">
    <bv-table-col type="expand" field="code">
      <template #body="{ item }">
        <div v-if="item.details">
          <bv-table :data="item.details" :caption="`${item.name} details:`" table-class="caption-top table-bordered table-hover border-info">
            <bv-table-col header="#" type="index" />
            <bv-table-col header="Name" field="name" />
            <bv-table-col header="State" field="state" />
            <bv-table-col header="City" field="city" />
          </bv-table>
        </div>
        <div v-else class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </template>
    </bv-table-col>
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue';

const tableExpandData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
]);
const details = [
  { name: 'Jerry1', state: 'California', city: 'San Francisco' },
  { name: 'Jerry2', state: 'California', city: 'San Francisco' },
  { name: 'Jerry3', state: 'California', city: 'San Francisco' }
];

function handleExpand(key) {
  console.log(key); //行数据的唯一标识
  setTimeout(() => {
    if (key === 1001) {
      tableExpandData.value[0].details = details;
    } else if (key === 1002) {
      tableExpandData.value[1].details = details;
    } else if (key === 1003) {
      tableExpandData.value[2].details = details;
    }
  }, 1000);
}
</script>
