<template>
    <bv-table :data="tableData">
        <bv-table-col header="#" type="index" />
        <bv-table-col header="Name" width="100px">
            <template #body="slotProps">
                <a href="#" class="link-body-emphasis link-offset-2"
                    @click.prevent="alertMessage({ message: 'row-' + slotProps.index })">
                    {{ slotProps.item.name }}
                </a>
            </template>
        </bv-table-col>
        <bv-table-col header="Address" field="address" />
        <bv-table-col header="Operation">
            <template #body="{ item }">
                <div class="hstack gap-3 flex-wrap">
                    <button type="button" class="btn btn-link p-0 text-decoration-none"
                        @click="alertMessage({ type: 'success', message: item.code })">编辑</button>
                    <button type="button" class="btn btn-link p-0 text-decoration-none"
                        @click="alertMessage({ type: 'danger', message: item.code })">删除</button>
                </div>
            </template>
        </bv-table-col>
    </bv-table>
</template>

<script setup>
import { alertMessage } from '@lib'

const tableData = [
    { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
    { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
    { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
]
</script>