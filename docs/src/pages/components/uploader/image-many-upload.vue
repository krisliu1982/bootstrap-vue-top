<template>
  <BvImageManyUploader width="160px" height="160px" :img-urls="imageUrls" sortable @file-change="handleImageManyChange" @file-remove="handleImageManyRemove" @file-preview="handleImageManyPreview">
    <template #tip>
      <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
    </template>
  </BvImageManyUploader>
</template>

<script setup>
import { reactive } from 'vue';
import { imagePreview } from 'bootstrap-vue-top';

const imageUrls = reactive([]);
function handleImageManyChange(fileEl) {
  const files = fileEl.files;
  //这里处理验证，压缩，上传等逻辑
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(file.size, file.name);
    imageUrls.push(URL.createObjectURL(file));
  }

  fileEl.value = ''; //可选
}

function handleImageManyRemove(index) {
  //这里处理后台删除等逻辑
  imageUrls.splice(index, 1);
}

function handleImageManyPreview(index) {
  //这里处理图片预览逻辑，例如下面预览方式
  imagePreview(['https://picsum.photos/id/112/800/800', 'https://picsum.photos/id/113/800/800', 'https://picsum.photos/id/114/800/800'], 0);
}
</script>
