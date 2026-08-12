<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-tree">
      <a href="#tree-base">基础用法</a>
      <a href="#tree-checkbox">多选节点</a>
      <a href="#tree-radio">单选节点</a>
      <a href="#tree-expand">展开层级</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-tree" class="docs-content">
    <h1>Tree 树形结构</h1>
    <p class="fs-4 fw-light">用于层级结构展示信息，可展开或折叠，而构建 <code>bv-tree</code> 树形组件。</p>

    <h2 id="tree-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#tree-base"> </a>
    </h2>
    <p>
      设置 <code>data</code> 树形数据，<code>attr-key</code> 为节点数据唯一标识属性名，<code>attr-label</code>
      为节点标签属性名，<code>attr-children</code>
      为子树属性名。可以通过监听
      <code>node-click</code> 事件，来处理点击节点后进行回调。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div style="width: 300px; max-height: 300px; overflow: auto" class="border p-1">
          <bv-tree
            :data="treeData"
            attr-key="id"
            attr-label="name"
            attr-children="children"
            :expand-level="0"
            @node-click="handleClick"
          ></bv-tree>
        </div>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>

    <h2 id="tree-checkbox">
      多选节点<a class="anchor-link" aria-label="Link to this section: 多选节点" href="#tree-checkbox"> </a>
    </h2>
    <p>通过设置 <code>mode="checkbox"</code>，使树形组件能多选节点。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div style="width: 300px; max-height: 300px; overflow: auto" class="border p-1 mb-3">
          <bv-tree
            ref="treeCheckboxRef"
            :data="treeData"
            attr-key="id"
            attr-label="name"
            attr-children="children"
            :expand-level="0"
            mode="checkbox"
          ></bv-tree>
        </div>

        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="handleGetCheckbox">getCheckboxSelectedKeys</button>
          <button type="button" class="btn btn-primary" @click="handleSetCheckbox">setCheckboxSelectedKeys</button>
        </div>
      </div>
      <code-highlight type="vue" :code="checkboxCode" label="vue" />
    </div>

    <h2 id="tree-radio">
      单选节点<a class="anchor-link" aria-label="Link to this section: 单选节点" href="#tree-radio"> </a>
    </h2>
    <p>通过设置 <code>mode="radio"</code>，使树形组件能多选节点。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div style="width: 300px; max-height: 300px; overflow: auto" class="border p-1 mb-3">
          <bv-tree
            ref="treeRadioRef"
            :data="treeData"
            attr-key="id"
            attr-label="name"
            attr-children="children"
            :expand-level="0"
            mode="radio"
          ></bv-tree>
        </div>

        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="handleGetRadio">getRadioSelectedKey</button>
          <button type="button" class="btn btn-primary" @click="handleSetRadio">setRadioSelectedKey</button>
        </div>
      </div>
      <code-highlight type="vue" :code="radioCode" label="vue" />
    </div>

    <h2 id="tree-expand">
      展开层级<a class="anchor-link" aria-label="Link to this section: 展开层级" href="#tree-expand"> </a>
    </h2>
    <p>通过设置 <code>expand-level</code>，展开多少层级节点。默认为 <code>0</code>, 即根节点展开。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div style="width: 300px; max-height: 300px; overflow: auto" class="border p-1">
          <bv-tree
            :data="treeData"
            attr-key="id"
            attr-label="name"
            attr-children="children"
            :expand-level="10"
          ></bv-tree>
        </div>
      </div>
      <code-highlight type="vue" :code="expandCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { alertMessage } from 'bootstrap-vue';

const treeData = {
  id: 1,
  name: 'My Root',
  children: [
    { id: 2, name: 'Kris2' },
    { id: 3, name: 'kris3' },
    {
      id: 4,
      name: 'kris4',
      children: [
        {
          id: 5,
          name: 'Kris5',
          children: [
            { id: 6, name: 'Kris6' },
            { id: 7, name: 'Kris7' }
          ]
        },
        { id: 8, name: 'Kris8' },
        { id: 9, name: 'Kris9' },
        {
          id: 10,
          name: 'Kris10',
          children: [
            { id: 11, name: 'Kris11' },
            { id: 12, name: 'Kris12' }
          ]
        }
      ]
    }
  ]
};

function handleClick(key) {
  console.log(key); //树节点数据的唯一标识
  alertMessage({ message: `树节点 ${key}` });
}

const treeCheckboxRef = ref(null);

function handleGetCheckbox() {
  const keys = treeCheckboxRef.value.getCheckboxSelectedKeys();
  if (keys.length === 0) {
    alertMessage({ type: 'warning', message: '没有节点被选择' });
  } else {
    alertMessage({ message: `被选节点 ${keys.join(',')}` });
  }
}

function handleSetCheckbox() {
  treeCheckboxRef.value.setCheckboxSelectedKeys([]);
}

const treeRadioRef = ref(null);

function handleGetRadio() {
  const key = treeRadioRef.value.getRadioSelectedKey();
  if (key === null) {
    alertMessage({ type: 'warning', message: '没有节点被选择' });
  } else {
    alertMessage({ message: `被选节点 ${key}` });
  }
}

function handleSetRadio() {
  treeRadioRef.value.setRadioSelectedKey(null);
}

const baseCode = `
<template>
  <div style="width: 300px;max-height:300px;overflow: auto;" class="border p-1">
    <bv-tree 
      :data="treeData" 
      attr-key="id" 
      attr-label="name" 
      attr-children="children" 
      :expand-level="0"
      @node-click="handleClick">
    </bv-tree>
  </div>
</template>

<script setup>
import { alertMessage } from 'bootstrap-vue'

const treeData = {
  id: 1,
  name: 'My Root',
  children: [
    { id: 2, name: 'Kris2' },
    { id: 3, name: 'kris3' },
    {
      id: 4,
      name: 'kris4',
      children: [
        {
          id: 5,
          name: 'Kris5',
          children: [{ id: 6, name: 'Kris6' }, { id: 7, name: 'Kris7' }]
        },
        { id: 8, name: 'Kris8' },
        { id: 9, name: 'Kris9' },
        {
          id: 10,
          name: 'Kris10',
          children: [{ id: 11, name: 'Kris11' }, { id: 12, name: 'Kris12' }]
        }
      ]
    }
  ]
}

function handleClick(key) {
  console.log(key) //树节点数据的唯一标识
  alertMessage({ message: \`树节点 \${key}\` })
}
<\/script>`;

const checkboxCode = `
<template>
  <div style="width: 300px;max-height:300px;overflow: auto;" class="border p-1 mb-3">
    <bv-tree ref="treeCheckboxRef" :data="treeData" 
      attr-key="id" attr-label="name" attr-children="children"
      :expand-level="0" mode="checkbox"></bv-tree>
  </div>

  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary"
      @click="handleGetCheckbox">getCheckboxSelectedKeys</button>
    <button type="button" class="btn btn-primary"
      @click="handleSetCheckbox">setCheckboxSelectedKeys</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { alertMessage } from 'bootstrap-vue'

const treeData = {...}

const treeCheckboxRef = ref(null)

function handleGetCheckbox() {
  const keys = treeCheckboxRef.value.getCheckboxSelectedKeys()
  if (keys.length === 0) {
    alertMessage({ type: 'warning', message: '没有节点被选择' })
  } else {
    alertMessage({ message: \`被选节点 \${keys.join(',')}\` })
  }
}

function handleSetCheckbox() {
  treeCheckboxRef.value.setCheckboxSelectedKeys([])
}
<\/script>`;

const radioCode = `
<template>
  <div style="width: 300px;max-height:300px;overflow: auto;" class="border p-1 mb-3">
    <bv-tree ref="treeRadioRef" :data="treeData" 
      attr-key="id" attr-label="name" attr-children="children"
      :expand-level="0" mode="radio"></bv-tree>
  </div>

  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" 
      @click="handleGetRadio">getRadioSelectedKey</button>
    <button type="button" class="btn btn-primary" 
      @click="handleSetRadio">setRadioSelectedKey</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { alertMessage } from 'bootstrap-vue'

const treeData = {...}

const treeRadioRef = ref(null)

function handleGetRadio() {
  const key = treeRadioRef.value.getRadioSelectedKey()
  if (key === null) {
    alertMessage({ type: 'warning', message: '没有节点被选择' })
  } else {
    alertMessage({ message: \`被选节点 \${key}\` })
  }
}

function handleSetRadio() {
  treeRadioRef.value.setRadioSelectedKey(null)
}
<\/script>`;

const expandCode = `
<template>
  <div style="width: 300px;max-height: 300px;overflow: auto;" class="border p-1">
    <bv-tree 
      :data="treeData" 
      attr-key="id" 
      attr-label="name" 
      attr-children="children" 
      :expand-level="10">
    </bv-tree>
  </div>
</template>

<script setup>
const treeData = {...}
<\/script>`;
</script>
