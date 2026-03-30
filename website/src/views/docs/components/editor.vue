<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-editor">
      <a href="#editor-base">基础用法</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-editor" class="docs-content">
    <h1>Editor 编辑器</h1>
    <p class="fs-4 fw-light">模拟浏览器原生 alert 消息提示框而实现的弹窗组件, 用于重要信息提示。</p>

    <h2 id="editor-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#editor-base"> </a>
    </h2>
    <p>
      
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <BvEditor />
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { BvEditor } from '@bootstrap-vue-ui/editor';

const baseCode = `<template>
  <BvEditor />
</template>

<script setup>
import { BvEditor } from '@bootstrap-vue-ui/editor';
<\/script>`;
</script>
