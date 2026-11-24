<template>
  <BvFileUploader :file-list="fileList" multiple @file-change="handleFileChange" @file-remove="handleFileRemove">
    <template #trigger>
      <button type="button" class="btn btn-primary">点击上传</button>
    </template>
    <template #tip>
      <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
    </template>
  </BvFileUploader>
</template>

<script setup>
import { reactive } from 'vue'

const fileList = reactive([]);
function handleFileChange(fileEl) {
  const file = fileEl.files[0];
  console.log(file.size, file.name, file.type);
  //这里处理验证，上传等逻辑
  fileList.push({
    url: 'http://baidu.com',//文件地址
    name: file.name,
    size: file.size
  })

  fileEl.value = '';//可选
}

function handleFileRemove(index) {
  //这里处理后台删除等逻辑
  fileList.splice(index, 1);
}
</script>