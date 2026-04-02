<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-backtop">
      <a href="#backtop-base">基础用法</a>
      <a href="#backtop-color">颜色调整</a>
      <a href="#backtop-size">尺寸调整</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-backtop" class="docs-content">
    <h1>Backtop 回到顶部</h1>
    <p class="fs-4 fw-light">回到页面顶部的 <code>bv-backtop</code> 组件。</p>
    <bv-backtop :color="color" :size="size" />

    <h2 id="backtop-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#backtop-base"> </a>
    </h2>
    <p>滑动页面来查看右下角的按钮。</p>
    <code-highlight type="vue" :code="baseCode" label="vue" />

    <h2 id="backtop-color">
      颜色调整<a class="anchor-link" aria-label="Link to this section: 颜色调整" href="#backtop-color"> </a>
    </h2>
    <p>
      通过设置 <code>color</code> 呈现不同颜色。提供八种颜色为：<code>{{ colors.join(' | ') }}</code
      >，默认为 <code>primary</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <a
            v-for="item in colors"
            href="#"
            class="link-offset-3"
            :class="`link-${item}`"
            @click.prevent="color = item"
          >
            {{ item }}
          </a>
        </div>
      </div>
      <code-highlight type="vue" :code="colorCode" label="vue" />
    </div>

    <h2 id="backtop-size">
      尺寸调整<a class="anchor-link" aria-label="Link to this section: 尺寸调整" href="#backtop-size"> </a>
    </h2>
    <p>通过设置 <code>size</code> 呈现不同尺寸。提供三种尺寸为：<code>sm | md | lg</code>，默认为 <code>md</code>。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="radio-sm" value="sm" v-model="size" />
          <label class="form-check-label" for="radio-sm"> 小型 </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="radio-md" value="md" v-model="size" />
          <label class="form-check-label" for="radio-md"> 中型 </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="radio-lg" value="lg" v-model="size" />
          <label class="form-check-label" for="radio-lg"> 大型 </label>
        </div>
      </div>
      <code-highlight type="vue" :code="sizeCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
const color = ref(null);

const size = ref('md');

const baseCode = `
<template>
  <bv-backtop />
</template>`;

const colorCode = `
<template>
  <div class="hstack gap-3 flex-wrap">
    <a v-for="item in colors"
      href="#"
      class="link-offset-3"
      :class="\`link-\${item}\`"
      @click.prevent="color = item">
      {{ item }}
    </a>
  </div>

  <bv-backtop :color="color" />
</template>

<script setup>
import { ref } from 'vue'

const colors = [
  'primary', 
  'secondary', 
  'success', 
  'danger', 
  'warning', 
  'info', 
  'light', 
  'dark'
];

const color = ref(null);
<\/script>`;

const sizeCode = `
<template>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" id="radio-sm" 
      value="sm" v-model="size">
    <label class="form-check-label" for="radio-sm">
      小型
    </label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" id="radio-md" 
      value="md" v-model="size">
    <label class="form-check-label" for="radio-md">
      中型
    </label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" id="radio-lg" 
      value="lg" v-model="size">
    <label class="form-check-label" for="radio-lg">
      大型
    </label>
  </div>

  <bv-backtop :size="size" />
</template>

<script setup>
import { ref } from 'vue'

const size = ref('md')
<\/script>`;
</script>
