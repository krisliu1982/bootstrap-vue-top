<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-alerts-confirm">
      <a href="#alerts-confirm-base">基础用法</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-alerts-confirm" class="docs-content">
    <h1>Alerts Confirm 警示确认窗</h1>
    <p class="fs-4 fw-light">模拟浏览器原生 confirm 确认提示框而实现的弹窗组件, 用于重要信息确认。</p>

    <h2 id="alerts-confirm-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#alerts-confirm-base"> </a>
    </h2>
    <p>
      通过提供 <code>alertConfirm</code> 方法并且它接受一个 <code>Object</code> 作为其参数。 你可以通过
      <code>message</code> 属性来设置警示内容, <code>confirm</code> 属性设置确认回调函数。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <button type="button" class="btn btn-primary" @click="handleClick">Alert Confirm</button>
        </div>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { alertConfirm } from 'bootstrap-vue';
import { alertMessage } from 'bootstrap-vue';

function handleClick() {
  alertConfirm({
    message: 'This is a alert-confirm message.',
    confirm: function () {
      setTimeout(() => {
        alertMessage({ type: 'success', message: 'This is a alert-message.' });
      }, 1000);
    }
  });
}

const baseCode = `
<template>
  <button type="button" class="btn btn-primary" 
    @click="handleClick">Alert Confirm</button>
</template>

<script setup>
import { alertConfirm } from 'bootstrap-vue'
import { alertMessage } from 'bootstrap-vue'

function handleClick() {
  alertConfirm({
    message: 'This is a alert-confirm message.', 
    confirm: function () {
      setTimeout(() => {
        alertMessage({type:'success', message: 'This is a alert-message.'})
      }, 1000);
    }
  })
}
<\/script>`;
</script>
