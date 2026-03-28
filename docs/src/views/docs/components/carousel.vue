<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-carousel">
      <a href="#carousel-base">基础用法</a>
      <a href="#carousel-fade">淡入淡出</a>
      <a href="#carousel-auto">自动播放</a>
      <a href="#carousel-touch">禁用触摸滑动</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-carousel" class="docs-content">
    <h1>Carousel 轮播图</h1>
    <p class="fs-4 fw-light">
      基于
      <a href="https://getbootstrap.com/docs/5.3/components/carousel/" target="_blank">Bootstrap Carousel</a>，构建 <code>bv-carousel</code> 组件。
    </p>

    <h2 id="carousel-base">基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#carousel-base"> </a></h2>
    <p>在组件中设置 <code>items</code> 轮播图数据数组。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-carousel :items="slides"></bv-carousel>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>

    <h2 id="carousel-fade">淡入淡出<a class="anchor-link" aria-label="Link to this section: 淡入淡出" href="#carousel-fade"> </a></h2>
    <p>添加 <code>carousel-class="carousel-fade"</code> 实现淡入淡出的过渡效果。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-carousel :items="slides" carousel-class="carousel-fade"></bv-carousel>
      </div>
      <code-highlight type="vue" :code="fadeCode" label="vue" />
    </div>

    <h2 id="carousel-auto">自动播放<a class="anchor-link" aria-label="Link to this section: 自动播放" href="#carousel-auto"> </a></h2>
    <p>
      您可以通过将 <code>ride</code> 选项设置为 <code>carousel</code>，使轮播图在页面加载时自动播放。通过设置
      <code>interval</code>
      来控制自动播放延时时间。默认鼠标悬停在轮播图上时，自动播放的轮播图会自动暂停。如果设置
      <code>:pause="false"</code>，则鼠标悬停在轮播图上不会暂停它。在支持
      <a href="https://www.w3.org/TR/page-visibility/" target="_blank">页面可见性API</a>
      的浏览器中，当网页对用户不可见时（例如浏览器标签页处于非活动状态，或浏览器窗口被最小化），轮播图将停止循环播放。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-carousel :items="slides" ride="carousel" :interval="3000" :pause="false"></bv-carousel>
      </div>
      <code-highlight type="vue" :code="auto1Code" label="vue" />
    </div>
    <p>
      当 <code>ride</code> 选项设置为 <code>true</code> 而非
      <code>carousel</code>
      时，轮播图在页面加载时不会自动开始循环播放。相反，它仅在首次用户交互后才会启动。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-carousel :items="slides" :ride="true" :interval="3000" :pause="false"></bv-carousel>
      </div>
      <code-highlight type="vue" :code="auto2Code" label="vue" />
    </div>
    <p>当设置 <code>:control="false"</code> 时，取消左右控制按钮。当设置 <code>:indicator="false"</code> 时，取消指示器。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-carousel :items="slides" ride="carousel" :interval="3000" :pause="false" :control="false" :indicator="false"></bv-carousel>
      </div>
      <code-highlight type="vue" :code="auto3Code" label="vue" />
    </div>

    <h2 id="carousel-touch">禁用触摸滑动<a class="anchor-link" aria-label="Link to this section: 禁用触摸滑动" href="#carousel-touch"> </a></h2>
    <p>
      轮播图支持在触摸屏设备上左右滑动以切换幻灯片。可通过将
      <code>touch</code> 选项设置为 <code>false</code> 来禁用此功能。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-carousel :items="slides" :touch="false"></bv-carousel>
      </div>
      <code-highlight type="vue" :code="touchCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
const slides = [
  {
    image: 'https://picsum.photos/800/400?random=1',
    title: '风景图片1',
    description: '这是第1张风景图片的描述'
  },
  {
    image: 'https://picsum.photos/800/400?random=2',
    description: '这是第2张风景图片的描述'
  },
  {
    image: 'https://picsum.photos/800/400?random=3',
    title: '风景图片3',
    description: '这是第3张风景图片的描述'
  },
  {
    image: 'https://picsum.photos/800/400?random=4',
    title: '风景图片4'
  }
]

const baseCode = `<template>
    <bs-carousel :items="slides"></bs-carousel>
</template>

<script setup>
const slides = [{
    image: 'https://picsum.photos/800/400?random=1',
    title: '风景图片1',
    description: '这是第1张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=2',
    description: '这是第2张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=3',
    title: '风景图片3',
    description: '这是第3张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=4',
    title: '风景图片4'
}]
<\/script>`

const fadeCode = `<template>
    <bv-carousel :items="slides" carousel-class="carousel-fade"></bv-carousel>
</template>

<script setup>
const slides = [{
    image: 'https://picsum.photos/800/400?random=1',
    title: '风景图片1',
    description: '这是第1张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=2',
    description: '这是第2张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=3',
    title: '风景图片3',
    description: '这是第3张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=4',
    title: '风景图片4'
}]
<\/script>`

const auto1Code = `<template>
    <bv-carousel 
    :items="slides" 
    ride="carousel" 
    :interval="3000" 
    :pause="false">
    </bv-carousel>
</template>

<script setup>
const slides = [{
    image: 'https://picsum.photos/800/400?random=1',
    title: '风景图片1',
    description: '这是第1张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=2',
    description: '这是第2张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=3',
    title: '风景图片3',
    description: '这是第3张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=4',
    title: '风景图片4'
}]
<\/script>`

const auto2Code = `<template>
    <bv-carousel 
    :items="slides" 
    :ride="true" 
    :interval="3000" 
    :pause="false">
    </bv-carousel>
</template>

<script setup>
const slides = [{
    image: 'https://picsum.photos/800/400?random=1',
    title: '风景图片1',
    description: '这是第1张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=2',
    description: '这是第2张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=3',
    title: '风景图片3',
    description: '这是第3张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=4',
    title: '风景图片4'
}]
<\/script>`

const auto3Code = `<template>
    <bv-carousel 
    :items="slides" 
    ride="carousel" 
    :interval="3000" 
    :pause="false" 
    :control="false" 
    :indicator="false">
    </bv-carousel>
</template>

<script setup>
const slides = [{
    image: 'https://picsum.photos/800/400?random=1',
    title: '风景图片1',
    description: '这是第1张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=2',
    description: '这是第2张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=3',
    title: '风景图片3',
    description: '这是第3张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=4',
    title: '风景图片4'
}]
<\/script>`

const touchCode = `<template>
    <bv-carousel :items="slides" :touch="false"></bv-carousel>
</template>

<script setup>
const slides = [{
    image: 'https://picsum.photos/800/400?random=1',
    title: '风景图片1',
    description: '这是第1张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=2',
    description: '这是第2张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=3',
    title: '风景图片3',
    description: '这是第3张风景图片的描述'
}, {
    image: 'https://picsum.photos/800/400?random=4',
    title: '风景图片4'
}]
<\/script>`
</script>
