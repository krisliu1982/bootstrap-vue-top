<template>
  <bv-table :data="tableData" :tfoot-data="['-', '-', 259]" table-class="table-light" thead-class="table-secondary"
    :tbody-tr-class="tbodyTrClass" tfoot-class="table-primary">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
const tableData = [
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' },
  { code: 1004, name: 'Kris4', address: 'Honghu City, Hubei Province, China' },
  { code: 1005, name: 'Kris5', address: 'Honghu City, Hubei Province, China' },
  { code: 1006, name: 'Kris6', address: 'Honghu City, Hubei Province, China' },
  { code: 1007, name: 'Kris7', address: 'Honghu City, Hubei Province, China' },
  { code: 1008, name: 'Kris8', address: 'Honghu City, Hubei Province, China' },
  { code: 1009, name: 'Kris9', address: 'Honghu City, Hubei Province, China' },
  { code: 1010, name: 'Kris10', address: 'Honghu City, Hubei Province, China' },
  { code: 1011, name: 'Kris11', address: 'Honghu City, Hubei Province, China' }
]

function tbodyTrClass(item) {
  if (item.code === 1001) {
    return 'table-primary'
  } else if (item.code === 1002) {
    return 'table-secondary'
  } else if (item.code === 1003) {
    return 'table-success'
  } else if (item.code === 1004) {
    return 'table-danger'
  } else if (item.code === 1005) {
    return 'table-warning'
  } else if (item.code === 1006) {
    return 'table-info'
  } else if (item.code === 1007) {
    return 'table-light'
  } else if (item.code === 1008) {
    return 'table-dark'
  } else if (item.code === 1009) {
    return 'table-active'
  } else {
    return null
  }
}
</script>