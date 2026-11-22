<template>
  <div :id="id" class="accordion" :class="props.accordionClass">
    <!-- 必须保留：AccordionItem 实例化后才会把数据注册进 items -->
    <slot></slot>
    <div v-for="(item, index) in items" class="accordion-item" :key="item.keyId">
      <h2 class="accordion-header">
        <button type="button" class="accordion-button" :class="{ collapsed: props.activeIndex !== index }"
          data-bs-toggle="collapse" :data-bs-target="`#${item.keyId}`" :aria-expanded="props.activeIndex === index"
          :aria-controls="`${item.keyId}`">
          {{ item.header }}
        </button>
      </h2>
      <div :id="item.keyId" class="accordion-collapse collapse" :class="{ show: props.activeIndex === index }"
        :data-bs-parent="props.always ? null : `#${id}`">
        <div class="accordion-body">
          <component :is="item.body" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide, reactive, useId } from 'vue';
import { items_injection_key } from './accordion-keys.js';

const props = defineProps({
  accordionClass: {
    type: String,
    default: null
  },
  always: {
    type: Boolean,
    default: false
  },
  activeIndex: {
    type: Number,
    default: null
  }
});



const id = useId();

// 子项增删自动驱动 v-for 更新
const items = reactive([]);
provide(items_injection_key, items);
</script>
