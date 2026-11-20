<template>
  <bv-loading :loading="loading">
    <bv-table :data="tableData" table-class="table-bordered border-info">
      <bv-table-col header="Code" field="code" />
      <bv-table-col header="Name" field="name" />
      <bv-table-col header="Address" field="address" />
    </bv-table>
  </bv-loading>

  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-outline-primary" @click="loading = true">Show Loading</button>
    <button type="button" class="btn btn-outline-primary" @click="loading = false">Hide Loading</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);
const tableData = [
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
];
</script>
