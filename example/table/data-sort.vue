<template>
    <bv-loading :loading="loading">
        <bv-table :data="tableData" @sort-change="handleSortChange">
            <bv-table-col header="Code" field="code" sortable="local" />
            <bv-table-col header="Name" field="name" sortable="remote" />
            <bv-table-col header="Address" field="address" />
        </bv-table>
    </bv-loading>
</template>

<script setup>
import { ref } from 'vue'
import { orderBy } from 'es-toolkit'

const loading = ref(false);
const sortData = [
    { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
    { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
    { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
]
const tableData = ref(sortData);
function handleSortChange(field, order) {
    console.log(field);//当前排序的字段名
    console.log(order);//排序顺序asc,desc,null

    loading.value = true;
    setTimeout(() => {
        if (order !== null) {
            tableData.value = orderBy(sortData, [field], [order])
        } else {
            tableData.value = sortData;
        }
        loading.value = false;
    }, 1000);
}
</script>