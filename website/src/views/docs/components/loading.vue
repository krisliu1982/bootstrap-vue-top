<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-loading">
      <a href="#loading-fullscreen">全屏加载</a>
      <a href="#loading-area">区域加载</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-loading" class="docs-content">
    <h1>Loading 加载</h1>
    <p class="fs-4 fw-light">加载数据时显示动效。</p>

    <h2 id="loading-fullscreen">
      全屏加载<a class="anchor-link" aria-label="Link to this section: 全屏加载" href="#loading-fullscreen"> </a>
    </h2>
    <p>
      通过提供 <code>LoadingFullscreen</code> 对象的 <code>getInstance</code> 方法获得单例。你可以通过
      <code>show</code> 方法显示，<code>hide</code>
      方法隐藏。
    </p>
    <p>
      全屏加载为单例模式内置计数器，不必担心同时多次异步请求调用
      <code>show</code> 的副作用。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="handleShow">Show Loading-Fullscreen</button>
      </div>
      <code-highlight type="vue" :code="fullscreenCode" label="vue" />
    </div>

    <h2 id="loading-area">
      区域加载<a class="anchor-link" aria-label="Link to this section: 区域加载" href="#loading-area"> </a>
    </h2>
    <p>通过 <code>bv-loading</code> 组件实现区域加载。设置 <code>loading</code> 属性值控制是否加载。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-loading :loading="loading">
          <bv-table :data="tableData" table-class="table-bordered border-info">
            <bv-table-col header="Code" field="code" />
            <bv-table-col header="Name" field="name" />
            <bv-table-col header="Address" field="address" />
          </bv-table>
        </bv-loading>

        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="loading = true">Show Loading</button>
          <button type="button" class="btn btn-primary" @click="loading = false">Hide Loading</button>
        </div>
      </div>
      <code-highlight type="vue" :code="loadingCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { LoadingFullscreen } from 'bootstrap-vue-top';

function handleShow() {
  const instance = LoadingFullscreen.getInstance();
  instance.show();

  setTimeout(() => {
    instance.hide();
  }, 1000);
}

const loading = ref(true);
const tableData = [
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
];

const fullscreenCode = `
<template>
  <button type="button" class="btn btn-primary" @click="handleShow">show</button>
</template>

<script setup>
import { LoadingFullscreen } from 'bootstrap-vue-top'

function handleShow() {
  const instance = LoadingFullscreen.getInstance();
  instance.show()

  setTimeout(() => {
    instance.hide()
  }, 1000);
}
<\/script>`;

const loadingCode = `
<template>
  <bv-loading :loading="loading">
    <bv-table :data="tableData" table-class="table-bordered border-info">
      <bv-table-col header="Code" field="code" />
      <bv-table-col header="Name" field="name" />
      <bv-table-col header="Address" field="address" />
    </bv-table>
  </bv-loading>

  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-outline-primary" 
    @click="loading = true">Show Loading</button>
    <button type="button" class="btn btn-outline-primary" 
    @click="loading = false">Hide Loading</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true);
const tableData = [
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
]
<\/script>`;
</script>
