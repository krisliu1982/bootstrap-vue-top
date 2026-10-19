<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-quick-start">
      <a href="#quick-start-setup">安装</a>
      <a href="#quick-start-import">完整引入</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-quick-start" class="docs-content">
    <h1>Quick start 快速开始</h1>
    <p class="fs-4 fw-light">本节将介绍如何在项目中使用 BootstrapVue。</p>

    <h2 id="quick-start-setup">
      安装<a class="anchor-link" aria-label="Link to this section: 安装" href="#quick-start-setup"> </a>
    </h2>
    <code-highlight type="bash" :code="setupCode" label="bash" />

    <h2 id="quick-start-import">
      完整引入<a class="anchor-link" aria-label="Link to this section: 完整引入" href="#quick-start-import"> </a>
    </h2>
    <code-highlight type="js" :code="importCode" label="js" />
  </div>
</template>

<script setup>
const setupCode = `
npm i bootstrap-vue-top`;

const importCode = `
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式(已包括bootstrap 5 样式，切记不要再次引入。)
import 'bootstrap-vue-top/dist/index.css'
// 引入Vue组件(已打包bootstrap 5 JS组件，切记不要再次引入。)
import BootstrapVueTop from 'bootstrap-vue-top'

const app = createApp(App)
app.use(BootstrapVueTop)
app.mount('#app')`;
</script>
