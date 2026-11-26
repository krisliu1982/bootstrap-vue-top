<template>
  <article class="docs-content">
    <h1>Tree 树形结构</h1>
    <p class="lead">用于层级结构展示信息，可展开或折叠。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>
      通过 <code>data</code> 属性设置树形数据，通过 <code>attr-key</code> 属性设置节点唯一标识属性名，通过 <code>attr-label</code> 属性设置节点标签属性名，通过
      <code>attr-children</code>
      属性设置子树属性名。通过监听 <code>node-click</code> 事件，来进行点击节点后的回调操作。
    </p>
    <div class="docs-example"><BasicUsage /></div>
    <CodeWrapper :code="BasicUsageCode" />

    <h2 id="checkbox-node">多选节点<a class="anchor-link" href="#checkbox-node" aria-label="多选节点"></a></h2>
    <p>设置 <code>mode</code> 属性为<code>checkbox</code>，使树形组件能多选节点。</p>
    <div class="docs-example"><CheckboxNode /></div>
    <CodeWrapper :code="CheckboxNodeCode" />

    <h2 id="radio-node">单选节点<a class="anchor-link" href="#radio-node" aria-label="单选节点"></a></h2>
    <p>设置 <code>mode</code> 属性为<code>radio</code>，使树形组件能单选节点。</p>
    <div class="docs-example"><RadioNode /></div>
    <CodeWrapper :code="RadioNodeCode" />

    <h2 id="expand-level">展开层级<a class="anchor-link" href="#expand-level" aria-label="展开层级"></a></h2>
    <p>通过 <code>expand-level</code> 属性控制展开多少层级节点。默认为 <code>0</code>, 即根节点展开。</p>
    <div class="docs-example"><ExpandLevel /></div>
    <CodeWrapper :code="ExpandLevelCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#checkbox-node">多选节点</a></li>
      <li><a href="#radio-node">单选节点</a></li>
      <li><a href="#expand-level">展开层级</a></li>
    </ul>
  </nav>
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import CheckboxNode from './checkbox-node.vue';
import ExpandLevel from './expand-level.vue';
import RadioNode from './radio-node.vue';

import BasicUsageCode from './basic-usage.vue?raw';
import CheckboxNodeCode from './checkbox-node.vue?raw';
import ExpandLevelCode from './expand-level.vue?raw';
import RadioNodeCode from './radio-node.vue?raw';
</script>
