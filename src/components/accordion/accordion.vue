<template>
  <div :id="id" class="accordion" :class="props.accordionClass">
    <slot></slot>
    <template v-for="(item, index) in items" :key="item.keyId">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button type="button" class="accordion-button" :class="{ 'collapsed': !props.activeIndex.includes(index)}" data-bs-toggle="collapse" 
          :data-bs-target="`#${item.keyId}`" :aria-expanded="props.activeIndex.includes(index)"
          :aria-controls="item.keyId">
          {{ item.header }}
        </button>
      </h2>
      <div :id="item.keyId" class="accordion-collapse collapse" :class="{ 'show': props.activeIndex.includes(index) }"
        :data-bs-parent="props.always ? null : `#${id}`">
        <div class="accordion-body">
          <component :is="item.body" />
        </div>
      </div>
    </div>
    </template>
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
    type: Array,
    default: []
  }
});

const id = useId();

const items = reactive([]);
provide(items_injection_key, items);

</script>
