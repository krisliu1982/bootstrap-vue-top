<template>
  <div :id="id" class="accordion" :class="accordionClass">
    <slot></slot>
    <template v-if="ready">
      <div v-for="(item, index) in items" class="accordion-item" :key="item.keyId">
        <h2 class="accordion-header">
          <button
            type="button"
            class="accordion-button"
            :class="{ collapsed: initActiveIndex !== index }"
            data-bs-toggle="collapse"
            :data-bs-target="`#${item.keyId}`"
            :aria-expanded="initActiveIndex === index"
            :aria-controls="`#${item.keyId}`"
          >
            {{ item.header }}
          </button>
        </h2>
        <div :id="item.keyId" class="accordion-collapse collapse" :class="{ show: initActiveIndex === index }" :data-bs-parent="always ? null : `#${id}`">
          <div class="accordion-body">
            <component :is="item.body" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useSlots, ref, provide, onMounted, useId } from 'vue'
import { items_injection_key } from './accordion-keys.js'
import Collapse from 'bootstrap/js/dist/collapse'

const ready = ref(false)
const id = useId()
const props = defineProps({
  accordionClass: {
    type: String,
    default: null
  },
  always: {
    type: Boolean,
    default: false
  },
  initActiveIndex: {
    type: Number,
    default: null
  }
})

const items = []
provide(items_injection_key, items)

onMounted(() => {
  _initItems()

  ready.value = true
})

function _initItems() {
  const slots = useSlots()
  const vNodes = slots.default()

  const itemVNodes = []
  for (const vNode of vNodes) {
    if (vNode.type.__name === 'accordion-item') {
      itemVNodes.push(vNode)
    }
  }

  for (let i = 0; i < items.length; i++) {
    if (itemVNodes[i].children !== null && itemVNodes[i].children.default !== 'undefined') {
      items[i].body = itemVNodes[i].children.default
    } else {
      items[i].body = null
    }
  }
}
</script>
