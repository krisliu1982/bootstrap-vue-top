<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-image-preview">
      <a href="#image-preview-example">示例</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-uploader" class="docs-content">
    <h1>ImagePreview 图片预览</h1>
    <p class="fs-4 fw-light">用于预览大图的功能。</p>

    <h2 id="image-preview-example">
      示例<a class="anchor-link" aria-label="Link to this section: 文件上传" href="#image-preview-example"> </a>
    </h2>
    <p>
      通过提供
      <code>imagePreview</code> 方法。第一个参数为图片地址数组。第二个参数初始化第一张预览图片的位置，默认初始位置为 0。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <a href="#" @click.prevent="handleImageManyPreview">
          <img src="/images/docs-slide1-800x800.jpg" class="object-fit-cover" width="150" height="150" />
        </a>
      </div>
      <code-highlight type="vue" :code="exampleCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { imagePreview } from 'bootstrap-vue-top';

function handleImageManyPreview() {
  const imges = [
    '/images/docs-slide1-800x800.jpg',
    '/images/docs-slide2-800x800.jpg',
    '/images/docs-slide3-800x800.jpg'
  ];
  imagePreview(imges, 1);
}

const exampleCode = `
<template>
  <a href="#" @click.prevent="handleImageManyPreview">
    <img src="/images/docs-slide1-800x800.jpg" class="object-fit-cover" width="150" height="150" />
  </a>
</template>

<script setup>
import { imagePreview } from 'bootstrap-vue-top';

function handleImageManyPreview() {
  const imges = [
    '/images/docs-slide1-800x800.jpg',
    '/images/docs-slide2-800x800.jpg',
    '/images/docs-slide3-800x800.jpg'];
  imagePreview(imges, 1);
}
<\/script>`;
</script>
