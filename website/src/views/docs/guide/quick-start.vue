<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-quick-start">
      <a href="#quick-start-setup">安装</a>
      <a href="#quick-start-import">引入</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-quick-start" class="docs-content">
    <h1>Quick start 快速开始</h1>
    <p class="fs-4 fw-light">本节将介绍如何在项目中使用 bootstrap-vue-top。</p>

    <h2 id="quick-start-setup">
      安装<a class="anchor-link" aria-label="Link to this section: 安装" href="#quick-start-setup"> </a>
    </h2>
    <code-highlight type="bash" :code="setupCode" label="bash" />

    <h2 id="quick-start-import">
      引入<a class="anchor-link" aria-label="Link to this section: 引入" href="#quick-start-import"> </a>
    </h2>
    <code-highlight type="js" :code="importCode" label="main.js" />
    <code-highlight type="vue" :code="import1Code" label="App.vue" />

    <p>请参考 <a href="https://gitee.com/asdfghjkl012345/bootstrap-vue/tree/master/example" target="_blank">例子</a></p>
  </div>
</template>

<script setup>
const setupCode = `npm i bootstrap-vue-top`;

const importCode = `
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式(已包括bootstrap 5 样式，切记不要再次引入。)
import 'bootstrap-vue-top/style.css'
// 引入Vue组件(已打包bootstrap 5 JS 组件，切记不要再次引入。)
import BootstrapVueTop from 'bootstrap-vue-top'

const app = createApp(App)
app.use(BootstrapVueTop)
app.mount('#app')`;

const import1Code = `
<template>
  <div class="container p-3">
    <h1 class="text-primary text-center">Hello</h1>

    <h4 class="mt-4">Example 1 (vue 组件)</h4>
    <bv-table :data="tableData" table-class="table-bordered">
      <bv-table-col header="Code" field="code" />
      <bv-table-col header="Name" field="name" />
      <bv-table-col header="Address" field="address" />
    </bv-table>

    <h4 class="mt-4">Example 2 (Bootstrap 组件)</h4>
    <div>
      <button ref="popoverRef" type="button" class="btn btn-primary" data-bs-toggle="popover"
        data-bs-title="Popover title"
        data-bs-content="And here’s some amazing content. It’s very engaging. Right?">
        Click to toggle popover
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])

// Bootstrap 组件
import { bootstrap } from 'bootstrap-vue-top'
const popoverRef = ref(null)
onMounted(() => {
  // 实例化 Bootstrap 组件
  new bootstrap.Popover(popoverRef.value, {
    container: 'body'
  })
})
onBeforeUnmount(() => {
  // 销毁 Bootstrap 组件
  bootstrap.Popover.getInstance(popoverRef.value).dispose();
})
<\/script>`;
</script>
