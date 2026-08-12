<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-uploader">
      <a href="#uploader-file">文件上传</a>
      <a href="#uploader-image-one">单图片上传</a>
      <a href="#uploader-image-many">多图片上传</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-uploader" class="docs-content">
    <h1>Uploader</h1>
    <p class="fs-4 fw-light">基于Input File元素，构建上传文件组件。</p>

    <h2 id="uploader-file">
      文件上传<a class="anchor-link" aria-label="Link to this section: 文件上传" href="#uploader-file"> </a>
    </h2>
    <p>
      用于文件上传。设置 <code>file-list</code> 为已上传文件信息,
      <code>multiple</code> 为是否多文件上传，默认单文件上传。监听
      <code>file-change</code> 事件处理验证，上传等逻辑。监听 <code>file-remove</code> 事件删除文件。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <BvFileUploader :file-list="fileList" multiple @file-change="handleFileChange" @file-remove="handleFileRemove">
          <template #trigger>
            <button type="button" class="btn btn-primary">点击上传</button>
          </template>
          <template #tip>
            <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
          </template>
        </BvFileUploader>
      </div>
      <code-highlight type="vue" :code="fileCode" label="vue" />
    </div>

    <h2 id="uploader-image-one">
      单图片上传<a class="anchor-link" aria-label="Link to this section: 单图片上传" href="#uploader-image-one"> </a>
    </h2>
    <p>
      用于用户头像上传，封面上传等单图片场景。设置
      <code>width, height</code> 控制图片显示大小，<code>img-url</code>
      为图片地址。监听
      <code>file-change</code>
      事件处理图片验证，压缩和上传。监听
      <code>file-remove</code> 事件删除图片。监听 <code>file-preview</code> 事件查看原图。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <BvImageOneUploader
          width="160px"
          height="160px"
          :img-url="imageUrl"
          @file-change="handleImageOneChange"
          @file-remove="handleImageOneRemove"
          @file-preview="handleImageOnePreview"
        >
          <template #tip>
            <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
          </template>
        </BvImageOneUploader>
      </div>
      <code-highlight type="vue" :code="imageOneCode" label="vue" />
    </div>

    <h2 id="uploader-image-many">
      多图片上传<a class="anchor-link" aria-label="Link to this section: 多图片上传" href="#uploader-image-many"> </a>
    </h2>
    <p>
      用于多张图片批量上传。设置 <code>width, height</code> 控制图片显示大小，
      <code>img-urls</code> 为图片地址数组，其中地址项必须唯一。
    </p>
    <p>
      可以通过 <code>sortable</code> 启动图片排序功能。<span class="text-bg-warning"
        >目前排序功能在<strong>触摸设备</strong>上不支持。</span
      >
    </p>
    <p>
      监听 <code>file-change</code> 事件处理图片验证，压缩和上传。监听 <code>file-remove</code> 事件删除图片。监听
      <code>file-preview</code> 事件查看原图。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <BvImageManyUploader
          width="160px"
          height="160px"
          :img-urls="imageUrls"
          sortable
          @file-change="handleImageManyChange"
          @file-remove="handleImageManyRemove"
          @file-preview="handleImageManyPreview"
        >
          <template #tip>
            <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
          </template>
        </BvImageManyUploader>
      </div>
      <code-highlight type="vue" :code="imageManyCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { imagePreview } from 'bootstrap-vue';

const fileList = ref([]);
function handleFileChange(fileEl) {
  const files = fileEl.files;
  //这里处理验证，上传等逻辑
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(file.size, file.name, file.type);
    //这里处理验证，上传等逻辑
    fileList.value.push({
      url: 'http://baidu.com', //文件地址
      name: file.name,
      size: file.size
    });
  }

  fileEl.value = ''; //可选
}

function handleFileRemove(index) {
  fileList.value.splice(index, 1);
}

const imageUrl = ref(null);
function handleImageOneChange(fileEl) {
  const file = fileEl.files[0];
  console.log(file.size, file.name);
  //这里处理验证，压缩，上传等逻辑
  imageUrl.value = URL.createObjectURL(file);

  fileEl.value = ''; //可选
}

function handleImageOneRemove() {
  imageUrl.value = null;
}

function handleImageOnePreview() {
  imagePreview(['https://picsum.photos/400/400?random=1']);
}

const imageUrls = ref([]);
function handleImageManyChange(fileEl) {
  const files = fileEl.files;
  //这里处理验证，压缩，上传等逻辑
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(file.size, file.name);
    imageUrls.value.push(URL.createObjectURL(file));
  }

  fileEl.value = ''; //可选
}

function handleImageManyRemove(index) {
  imageUrls.value.splice(index, 1);
}

function handleImageManyPreview(index) {
  const imges = [];
  for (let i = 0; i < imageUrls.value.length; i++) {
    imges.push(`https://picsum.photos/400/400?random=${i}`);
  }
  imagePreview(imges, index);
}

const fileCode = `
<template>
    <BvFileUploader 
    :file-list="fileList" 
    multiple
    @file-change="handleFileChange"
    @file-remove="handleFileRemove">
        <template #trigger>
            <button type="button" class="btn btn-primary">点击上传</button>
        </template>
        <template #tip>
            <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
        </template>
    </BvFileUploader>
</template>

<script setup>
import { ref } from 'vue'
import { imagePreview } from 'bootstrap-vue'

const fileList = ref([]);
function handleFileChange(fileEl) {
    const file = fileEl.files[0];
    console.log(file.size, file.name, file.type);
    //这里处理验证，上传等逻辑
    fileList.value.push({
        url:'http://baidu.com',//文件地址
        name:file.name,
        size:file.size
    })

    fileEl.value = '';//可选
}

function handleFileRemove(index) {
    fileList.value.splice(index, 1);
}
<\/script>`;

const imageOneCode = `
<template>
    <BvImageOneUploader 
    width="160px" 
    height="160px" 
    :img-url="imageUrl"      
    @file-change="handleImageOneChange" 
    @file-remove="handleImageOneRemove"
    @file-preview="handleImageOnePreview">
        <template #tip>
            <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
        </template>
    </BvImageOneUploader>
</template>

<script setup>
import { ref } from 'vue'
import { imagePreview } from 'bootstrap-vue'

const imageUrl = ref(null);
function handleImageOneChange(fileEl) {
    const file = fileEl.files[0];
    console.log(file.size, file.name);
    //这里处理验证，压缩，上传等逻辑
    imageUrl.value = URL.createObjectURL(file)

    fileEl.value = '';//可选
}

function handleImageOneRemove() {
    imageUrl.value = null;
}

function handleImageOnePreview() {
    imagePreview([
        'https://picsum.photos/400/400?random=1'//原图地址
    ])
}
<\/script>`;

const imageManyCode = `
<template>
    <BvImageManyUploader 
    width="160px" 
    height="160px" 
    :img-urls="imageUrls" 
    sortable       
    @file-change="handleImageManyChange" 
    @file-remove="handleImageManyRemove"       
    @file-preview="handleImageManyPreview">
        <template #tip>
            <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
        </template>
    </BvImageManyUploader>
</template>

<script setup>
import { ref } from 'vue'
import { imagePreview } from 'bootstrap-vue'

const imageUrls = ref([]);
function handleImageManyChange(fileEl) {
    const files = fileEl.files;
    //这里处理验证，压缩，上传等逻辑
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(file.size, file.name);
        imageUrls.value.push(URL.createObjectURL(file));
    }

    fileEl.value = '';//可选
}

function handleImageManyRemove(index) {
    imageUrls.value.splice(index, 1);
}

function handleImageManyPreview(index) {
    const imges = [];
    for (let i = 0; i < imageUrls.value.length; i++) {
        imges.push('https://picsum.photos/400/400?random=' + i)
    }
    imagePreview(imges, index)
}
<\/script>`;
</script>
