<template>
  <div style="width: 200px; height: 200px; overflow: auto" class="border p-1">
    <bv-tree ref="treeRadioRef" :data="treeData" attr-key="id" attr-label="name" attr-children="children" :expand-level="0" mode="radio"></bv-tree>
  </div>
  <br />
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-outline-primary" @click="handleGetRadio">getRadioSelectedKey</button>
    <button type="button" class="btn btn-outline-primary" @click="handleSetRadio">setRadioSelectedKey</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { alertMessage } from '@lib';

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
</script>
