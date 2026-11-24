<template>
  <BvImageOneUploader width="160px" height="160px" :img-url="imageUrl" @file-change="handleImageOneChange"
    @file-remove="handleImageOneRemove" @file-preview="handleImageOnePreview">
    <template #tip>
      <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
    </template>
  </BvImageOneUploader>
</template>

<script setup>
import { ref } from 'vue'
import { imagePreview } from '@lib'

const imageUrl = ref(null);
function handleImageOneChange(fileEl) {
  const file = fileEl.files[0];
  console.log(file.size, file.name);
  //这里处理验证，压缩，上传等逻辑
  imageUrl.value = URL.createObjectURL(file)

  fileEl.value = '';//可选
}

function handleImageOneRemove() {
  //这里处理后台删除等逻辑
  imageUrl.value = null;
}

function handleImageOnePreview() {
  //这里处理图片逻辑，例如下面预览方式
  imagePreview([
    'https://picsum.photos/id/112/800/800'//原图地址
  ])
}
</script>