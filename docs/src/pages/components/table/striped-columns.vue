<template>
  <bv-table :data="tableData" table-class="table-striped-columns">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
const tableData = [
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
];
</script>
