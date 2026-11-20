
<template>
  <div class="overflow-y-auto" style="height: 200px">
    <bv-table :data="tableData10" thead-class="table-info position-sticky top-0">
      <bv-table-col header="Code" field="code" />
      <bv-table-col header="Name" field="name" />
      <bv-table-col header="Address" field="address" />
    </bv-table>
  </div>
</template>

<script setup>
const tableData10 = [
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' },
  { code: 1004, name: 'Kris4', address: 'Honghu City, Hubei Province, China' },
  { code: 1005, name: 'Kris5', address: 'Honghu City, Hubei Province, China' },
  { code: 1006, name: 'Kris6', address: 'Honghu City, Hubei Province, China' },
  { code: 1007, name: 'Kris7', address: 'Honghu City, Hubei Province, China' },
  { code: 1008, name: 'Kris8', address: 'Honghu City, Hubei Province, China' },
  { code: 1009, name: 'Kris9', address: 'Honghu City, Hubei Province, China' },
  { code: 1010, name: 'Kris10', address: 'Honghu City, Hubei Province, China' }
]
</script>