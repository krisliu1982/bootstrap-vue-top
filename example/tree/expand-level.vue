<template>
  <div style="width: 200px; height: 200px; overflow: auto" class="border p-2">
    <bv-tree :data="treeData" attr-key="id" attr-label="name" attr-children="children" :expand-level="10"> </bv-tree>
  </div>
</template>

<script setup>
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
</script>
