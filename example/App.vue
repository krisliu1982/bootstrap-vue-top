<template>
  <div class="container p-3">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(item, index) in tabs">
        <a class="nav-link" :class="{ active: currentTab === index }" :aria-current="currentTab === index ? 'page' : null" href="#" @click.prevent="currentTab = index">
          {{ item.name }}
        </a>
      </li>
    </ul>
    <div class="content">
      <component :is="tabs[currentTab].component"></component>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Accordion from './accordion/index.vue';
import AlertBox from './alert-box/index.vue';
import AlertConfirm from './alert-confirm/index.vue';
import AlertMessage from './alert-message/index.vue';
import Backtop from './backtop/index.vue';
import Carousel from './carousel/index.vue';
import ImagePreview from './image-preview/index.vue';
import Loading from './loading/index.vue';
import Modal from './modal/index.vue';
import Modal2 from './modal2/index.vue';
import Pagination from './/pagination/index.vue';
import Table from './table/index.vue';

const currentTab = ref(0);
const tabs = [
  {
    name: 'Accordion',
    component: Accordion
  },
  {
    name: 'AlertBox',
    component: AlertBox
  },
  {
    name: 'AlertConfirm',
    component: AlertConfirm
  },
  {
    name: 'AlertMessage',
    component: AlertMessage
  },
  {
    name: 'Backtop',
    component: Backtop
  },
  {
    name: 'Carousel',
    component: Carousel
  },
  {
    name: 'ImagePreview',
    component: ImagePreview
  },
  {
    name: 'Loading',
    component: Loading
  },
  {
    name: 'Modal',
    component: Modal
  },
  {
    name: 'Modal2',
    component: Modal2
  },
  {
    name: 'Pagination',
    component: Pagination
  },
  {
    name: 'Table',
    component: Table
  }
];
</script>

<style>
.content > h1 {
  margin-top: 1.5rem;
}

.content > h2 {
  margin-top: 2.5rem;
}
</style>
