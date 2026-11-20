
<template>
  <bv-pagination mode="base" 
  size="lg"
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" />

  <br/>

  <bv-pagination mode="base" 
  size="sm"
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" />
</template>

<script setup>
import { ref } from 'vue'

const ptotal = ref(200); //总记录数
const pcurrent = ref(1); //当前页
const psize = ref(10); //每页记录数
</script>