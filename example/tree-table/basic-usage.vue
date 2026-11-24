<template>
  <bv-treetable :data="treeData" attr-key="code" attr-children="children">
    <bv-treetable-col header="Name" field="name" tree />
    <bv-treetable-col header="Address" field="address" />
    <bv-treetable-col header="Operation">
      <template #body="{ item }">
        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-link p-0 text-decoration-none"
            @click="alertMessage({ type: 'success', message: item.code })">编辑</button>
          <button type="button" class="btn btn-link p-0 text-decoration-none"
            @click="alertMessage({ type: 'danger', message: item.code })">删除</button>
        </div>
      </template>
    </bv-treetable-col>
  </bv-treetable>
</template>

<script setup>
import { alertMessage } from '@lib';

const treeData = {
  code: '1001',
  name: 'Root',
  address: 'Honghu City, Hubei Province, China',
  children: [
    { code: '1002', name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
    {
      code: '1004',
      name: 'kris4', address: 'Honghu City, Hubei Province, China',
      children: [
        { code: '1005', name: 'Kris5', address: 'Honghu City, Hubei Province, China', },
        { code: '1006', name: 'Kris6', address: 'Honghu City, Hubei Province, China' },
        { code: '1007', name: 'Kris7', address: 'Honghu City, Hubei Province, China' }
      ]
    },
    { code: '1008', name: 'Kris8', address: 'Honghu City, Hubei Province, China' }
  ]
}
</script>