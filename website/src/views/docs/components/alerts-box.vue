<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-alerts-box">
      <a href="#alerts-box-base">基础用法</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-alerts-box" class="docs-content">
    <h1>Alerts Box 警示弹窗</h1>
    <p class="fs-4 fw-light">模拟浏览器原生 alert 消息提示框而实现的弹窗组件, 用于重要信息提示。</p>

    <h2 id="alerts-box-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#alerts-box-base"> </a>
    </h2>
    <p>
      通过提供 <code>alertBox</code> 方法<strong>（需单独引用）</strong>并且它接受一个 <code>Object</code> 作为其参数。
      你可以通过 <code>message</code> 属性来设置警示内容。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3">
          <button type="button" class="btn btn-primary" @click="handleClick">Alert Box</button>
        </div>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { alertBox } from '@bootstrap-vue-ui';

function handleClick() {
  alertBox({ message: 'This is a alert-box message.' });
}

const baseCode = `<template>
  <button type="button" class="btn btn-primary" 
    @click="handleClick">Alert Box</button>
</template>

<script setup>
import { alertBox } from '@bootstrap-vue-ui'

function handleClick() {
  alertBox({ message: 'This is a alert-box message.' })
}
<\/script>`;
</script>
