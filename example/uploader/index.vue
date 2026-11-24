<template>
  <h1>Uploader 上传器</h1>
  <p class="lead">上传文件。</p>

  <h2>文件上传</h2>
  <p>通过 <code>file-list</code> 属性设置已上传文件信息, 通过 <code>multiple</code> 属性设置是否多文件上传，默认为 <code>false</code>。监听
    <code>file-change</code> 事件进行文件列表变化后的相关操作，例如验证，上传等逻辑。监听 <code>file-remove</code> 事件进行文件删除后的相关操作。
  </p>
  <FileUpolad />

  <h2>单图片上传</h2>
  <p> 用于用户头像上传，封面上传等单图片场景。通过 <code>width、height</code> 属性设置图片显示大小。通过 <code>img-url</code> 属性设置图片地址。监听
    <code>file-preview</code> 事件进行点击预览按钮后查看图片操作。 </p>
  <ImageOneUpload />

  <h2>多图片上传</h2>
  <p> 用于多张图片批量上传。通过 <code>width、height</code> 属性设置图片显示大小。通过 <code>img-urls</code> 属性设置图片地址。 通过 <code>sortable</code> 属性启动排序功能，<span class="text-bg-warning"><strong>触摸设备</strong>上排序功能目前不支持。</span></p>
  <ImageManyUpload />
</template>

<script setup>
import FileUpolad from './file-upolad.vue';
import ImageManyUpload from './image-many-upload.vue';
import ImageOneUpload from './image-one-upload.vue';
</script>
