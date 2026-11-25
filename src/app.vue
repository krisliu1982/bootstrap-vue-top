<template>
  <div class="container">
    <div class="mt-5">
      <h1 class="text-body-emphasis fw-bold">bootstrap-vue-top</h1>
      <p class="lead mb-4">
        对 Bootstrap 做 vue 扩展，只扩展不改变。依旧可以使用 Bootstrap 快速设计和定制响应式移动优先网站，同时也可以利用扩展来提高开发效率。
      </p>

      <div>
        <p>v1.x 与 bootstrap 是捆绑在一起，v5.x 开始由用户自行安装 bootstrap。</p>
        <p>当前版本 <span class="badge text-bg-secondary">1.2.1</span> 捆绑 bootstrap 5.3.9。</p>
        <p><a href="https://v1.bootstrap-vue.top" class="btn btn-primary">阅读文档 <bi-arrow-right /></a></p>
      </div>
    </div>

    <nav class="mt-5">
      <h4>以下是 Bootstrap 文档</h4>
      <ul>
        <li>
          <a href="https://bs53.bootstrap-vue.top">Bootstrap v5.3 中文文档</a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/5.3">Bootstrap v5.3 官方文档</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  }
})
</script>
