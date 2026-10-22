# bootstrap-vue-top

基于 Bootstrap 5.3.8 & Vue 3.5.x 的前端组件库


## 主要特点

- 所有 Bootstrap 官方文档中的样式类和JS组件在项目中直接使用，降低了团队的学习与迁移成本。
- 交互性比较强 HTML 组件和书写比较繁琐原生 HTML 元素才被声明为 Vue 组件。避免组件臃肿，组件过度封装和组件通信复杂。
- 完全继承 Bootstrap 自定义功能，能设计出自己喜欢的主题。
- 配套完整的中文文档网站 [https://bootstrap-vue.top](https://bootstrap-vue.top)


## 安装

```bash
npm install bootstrap-vue-top
```


## 快速开始

**main.js**
```javascript
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式(已包括bootstrap 5 样式，切记不要再次引入。)
import 'bootstrap-vue-top/style.css'
// 引入Vue组件(已打包bootstrap 5 JS 组件，切记不要再次引入。)
import BootstrapVueTop from 'bootstrap-vue-top'

const app = createApp(App)
app.use(BootstrapVueTop)
app.mount('#app')
```

**App.vue**
```html
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
        data-bs-content="And here’s some amazing content. It’s very engaging. Right?">Click to toggle
        popover</button>
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
</script>
```


## 开发

请参考[例子](https://gitee.com/asdfghjkl012345/bootstrap-vue/tree/master/example)


## 浏览器支持

- Chrome >= 84
- Firefox >= 63
- iOS >= 14.5
- Safari >= 14.1


## 协议

MIT License