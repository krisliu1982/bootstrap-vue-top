<template>
  <h1>Tree 树形结构</h1>
  <p class="lead">用于层级结构展示信息，可展开或折叠。</p>

  <h2>基础用法</h2>
  <p>
    通过 <code>data</code> 属性设置树形数据，通过 <code>attr-key</code> 属性设置节点唯一标识属性名，通过 <code>attr-label</code> 属性设置节点标签属性名，通过
    <code>attr-children</code>
    属性设置子树属性名。通过监听 <code>node-click</code> 事件，来进行点击节点后的回调操作。
  </p>
  <BasicUsage />

  <h2>多选节点</h2>
  <p>设置 <code>mode</code> 属性为<code>checkbox</code>，使树形组件能多选节点。</p>
  <CheckboxNode />

  <h2>单选节点</h2>
  <p>设置 <code>mode</code> 属性为<code>radio</code>，使树形组件能单选节点。</p>
  <RadioNode />

  <h2>展开层级</h2>
  <p>通过 <code>expand-level</code> 属性控制展开多少层级节点。默认为 <code>0</code>, 即根节点展开。</p>
  <ExpandLevel />
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import CheckboxNode from './checkbox-node.vue';
import ExpandLevel from './expand-level.vue';
import RadioNode from './radio-node.vue';
</script>
