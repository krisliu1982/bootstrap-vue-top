<template>
  <div class="container p-3">
    <ul class="nav nav-underline mb-3">
      <li class="nav-item" v-for="item, index in tabs">
        <a class="nav-link" :class="{ 'active': currentTab === index }"
          :aria-current="currentTab === index ? 'page' : null" href="#" @click.prevent="currentTab = index">
          {{ item.name }}
        </a>
      </li>
    </ul>
    <component :is="tabs[currentTab].component"></component>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AlertBox from './alert-box/index.vue'
import AlertConfirm from './alert-confirm/index.vue'
import AlertMessage from './alert-message/index.vue'
import Backtop from './backtop/index.vue'
import ImagePreview from './image-preview/index.vue'
import Loading from './loading/index.vue'

const currentTab = ref(0)
const tabs = [{
  'name': 'AlertBox',
  'component': AlertBox
},
{
  'name': 'AlertConfirm',
  'component': AlertConfirm
},
{
  'name': 'AlertMessage',
  'component': AlertMessage
},
{
  'name': 'Backtop',
  'component': Backtop
},
{
  'name': 'ImagePreview',
  'component': ImagePreview
},
{
  'name': 'Loading',
  'component': Loading
}
]
</script>