<template>
  <slot></slot>
  <template v-if="ready">
    <template v-if="position === 'top'">
      <nav class="nav" :class="tabsClass" :style="tabsStyle" role="tablist">
        <button
          v-for="pane in panes"
          type="button"
          class="nav-link"
          :id="`${pane.keyId}-tab`"
          :data-bs-target="`#${pane.keyId}`"
          role="tab"
          :aria-controls="pane.keyId"
          aria-selected="false"
          :disabled="pane.disabled"
        >
          {{ pane.label }}
        </button>
      </nav>
      <div class="tab-content">
        <div
          v-for="(pane, index) in panes"
          class="tab-pane fade"
          :id="pane.keyId"
          role="tabpanel"
          :aria-labelledby="`${pane.keyId}-tab`"
          tabindex="0"
        >
          <component v-if="renders[index]" :is="pane.body" />
        </div>
      </div>
    </template>
    <template v-else-if="position === 'bottom'">
      <div class="tab-content">
        <div
          v-for="(pane, index) in panes"
          class="tab-pane fade"
          :id="pane.keyId"
          role="tabpanel"
          :aria-labelledby="`${pane.keyId}-tab`"
          tabindex="0"
        >
          <component v-if="renders[index]" :is="pane.body" />
        </div>
      </div>
      <nav class="nav" :class="tabsClass" :style="tabsStyle" role="tablist">
        <button
          v-for="pane in panes"
          type="button"
          class="nav-link"
          :id="`${pane.keyId}-tab`"
          :data-bs-target="`#${pane.keyId}`"
          role="tab"
          :aria-controls="pane.keyId"
          aria-selected="false"
          :disabled="pane.disabled"
        >
          {{ pane.label }}
        </button>
      </nav>
    </template>
    <template v-else-if="position === 'start'">
      <div class="d-flex align-items-start">
        <nav
          class="nav flex-column me-3"
          :class="tabsClass"
          :style="tabsStyle"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            v-for="pane in panes"
            type="button"
            class="nav-link"
            :id="`${pane.keyId}-tab`"
            :data-bs-target="`#${pane.keyId}`"
            role="tab"
            :aria-controls="pane.keyId"
            aria-selected="false"
            :disabled="pane.disabled"
          >
            {{ pane.label }}
          </button>
        </nav>
        <div class="tab-content">
          <div
            v-for="(pane, index) in panes"
            class="tab-pane fade"
            :id="pane.keyId"
            role="tabpanel"
            :aria-labelledby="`${pane.keyId}-tab`"
            tabindex="0"
          >
            <component v-if="renders[index]" :is="pane.body" />
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="position === 'end'">
      <div class="d-flex align-items-start">
        <div class="tab-content">
          <div
            v-for="(pane, index) in panes"
            class="tab-pane fade"
            :id="pane.keyId"
            role="tabpanel"
            :aria-labelledby="`${pane.keyId}-tab`"
            tabindex="0"
          >
            <component v-if="renders[index]" :is="pane.body" />
          </div>
        </div>
        <nav
          class="nav flex-column ms-3"
          :class="tabsClass"
          :style="tabsStyle"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            v-for="pane in panes"
            type="button"
            class="nav-link"
            :id="`${pane.keyId}-tab`"
            :data-bs-target="`#${pane.keyId}`"
            role="tab"
            :aria-controls="pane.keyId"
            aria-selected="false"
            :disabled="pane.disabled"
          >
            {{ pane.label }}
          </button>
        </nav>
      </div>
    </template>
  </template>
</template>

<script setup>
import { useSlots, ref, provide, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { panes_injection_key } from './tabs-keys.js';
import { Tab } from 'bootstrap';

const emit = defineEmits(['tab-shown']);

const ready = ref(false);
const props = defineProps({
  tabsClass: {
    type: String,
    default: null
  },
  tabsStyle: {
    type: String,
    default: null
  },
  initActiveIndex: {
    type: Number,
    default: 0
  },
  lazy: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['start', 'end', 'top', 'bottom'].includes(value);
    }
  }
});

const panes = [];
const renders = ref([]);
provide(panes_injection_key, panes);

onMounted(() => {
  _initPanes();

  ready.value = true;

  nextTick(() => {
    for (let i = 0; i < panes.length; i++) {
      let triggerEl = document.getElementById(`${panes[i].keyId}-tab`);
      const tabTrigger = new Tab(triggerEl);

      triggerEl.addEventListener('click', (event) => {
        event.preventDefault();
        tabTrigger.show();
      });

      triggerEl.addEventListener('show.bs.tab', (event) => {
        if (renders.value[i] === false) {
          renders.value[i] = true;
        }
      });

      triggerEl.addEventListener('shown.bs.tab', (event) => {
        emit('tab-shown', i);
      });
    }

    Tab.getInstance(`#${panes[props.initActiveIndex].keyId}-tab`).show();
  });
});

onBeforeUnmount(() => {
  panes.forEach((item) => {
    Tab.getInstance(`#${item.keyId}-tab`).dispose();
  });
});

function _initPanes() {
  const slots = useSlots();
  const vNodes = slots.default();

  const paneVNodes = [];
  for (const vNode of vNodes) {
    if (vNode.type.__name === 'tab-pane') {
      paneVNodes.push(vNode);
    }
  }

  for (let i = 0; i < panes.length; i++) {
    if (paneVNodes[i].children !== null && paneVNodes[i].children.default !== 'undefined') {
      panes[i].body = paneVNodes[i].children.default;
    } else {
      panes[i].body = null;
    }

    if (i === props.initActiveIndex) {
      renders.value.push(true);
    } else if (props.lazy) {
      renders.value.push(false);
    } else {
      renders.value.push(true);
    }
  }
}
</script>
