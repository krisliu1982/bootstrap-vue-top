<template>
  <slot></slot>
  <template v-if="props.position === 'top'">
    <nav class="nav" :class="props.tabsClass" :style="props.tabsStyle" role="tablist">
      <button
        v-for="(pane, index) in panes"
        type="button"
        class="nav-link"
        :class="{ active: index === props.activeIndex }"
        :id="`${pane.keyId}-tab`"
        :data-bs-target="`#${pane.keyId}`"
        role="tab"
        :aria-controls="pane.keyId"
        :aria-selected="index === props.activeIndex ? 'true' : 'false'"
        :disabled="pane.disabled"
        @click="handleTabClick(pane, index)"
      >
        {{ pane.label }}
      </button>
    </nav>
    <div class="tab-content">
      <div
        v-for="(pane, index) in panes"
        class="tab-pane fade"
        :class="{ 'show active': index === props.activeIndex }"
        :id="pane.keyId"
        role="tabpanel"
        :aria-labelledby="`${pane.keyId}-tab`"
        tabindex="0"
      >
        <component v-if="!pane.lazy" :is="pane.body" />
      </div>
    </div>
  </template>
  <template v-else-if="props.position === 'bottom'">
    <div class="tab-content">
      <div
        v-for="(pane, index) in panes"
        class="tab-pane fade"
        :class="{ 'show active': index === props.activeIndex }"
        :id="pane.keyId"
        role="tabpanel"
        :aria-labelledby="`${pane.keyId}-tab`"
        tabindex="0"
      >
        <component v-if="!pane.lazy" :is="pane.body" />
      </div>
    </div>
    <nav class="nav" :class="props.tabsClass" :style="props.tabsStyle" role="tablist">
      <button
        v-for="(pane, index) in panes"
        type="button"
        class="nav-link"
        :class="{ active: index === props.activeIndex }"
        :id="`${pane.keyId}-tab`"
        :data-bs-target="`#${pane.keyId}`"
        role="tab"
        :aria-controls="pane.keyId"
        :aria-selected="index === props.activeIndex ? 'true' : 'false'"
        :disabled="pane.disabled"
        @click="handleTabClick(pane, index)"
      >
        {{ pane.label }}
      </button>
    </nav>
  </template>
  <template v-else-if="props.position === 'start'">
    <div class="d-flex align-items-start">
      <nav
        class="nav flex-column me-3"
        :class="props.tabsClass"
        :style="props.tabsStyle"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          v-for="(pane, index) in panes"
          type="button"
          class="nav-link"
          :class="{ active: index === props.activeIndex }"
          :id="`${pane.keyId}-tab`"
          :data-bs-target="`#${pane.keyId}`"
          role="tab"
          :aria-controls="pane.keyId"
          :aria-selected="index === props.activeIndex ? 'true' : 'false'"
          :disabled="pane.disabled"
          @click="handleTabClick(pane, index)"
        >
          {{ pane.label }}
        </button>
      </nav>
      <div class="tab-content">
        <div
          v-for="(pane, index) in panes"
          class="tab-pane fade"
          :class="{ 'show active': index === props.activeIndex }"
          :id="pane.keyId"
          role="tabpanel"
          :aria-labelledby="`${pane.keyId}-tab`"
          tabindex="0"
        >
          <component v-if="!pane.lazy" :is="pane.body" />
        </div>
      </div>
    </div>
  </template>
  <template v-else-if="props.position === 'end'">
    <div class="d-flex align-items-start">
      <div class="tab-content">
        <div
          v-for="(pane, index) in panes"
          class="tab-pane fade"
          :class="{ 'show active': index === props.activeIndex }"
          :id="pane.keyId"
          role="tabpanel"
          :aria-labelledby="`${pane.keyId}-tab`"
          tabindex="0"
        >
          <component v-if="!pane.lazy" :is="pane.body" />
        </div>
      </div>
      <nav
        class="nav flex-column ms-3"
        :class="props.tabsClass"
        :style="props.tabsStyle"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          v-for="(pane, index) in panes"
          type="button"
          class="nav-link"
          :class="{ active: index === props.activeIndex }"
          :id="`${pane.keyId}-tab`"
          :data-bs-target="`#${pane.keyId}`"
          role="tab"
          :aria-controls="pane.keyId"
          :aria-selected="index === props.activeIndex ? 'true' : 'false'"
          :disabled="pane.disabled"
          @click="handleTabClick(pane, index)"
        >
          {{ pane.label }}
        </button>
      </nav>
    </div>
  </template>
</template>

<script setup>
import { provide, reactive, onMounted } from 'vue';
import { panes_injection_key } from './tabs-keys.js';
import { Tab } from 'bootstrap';

const props = defineProps({
  tabsClass: {
    type: String,
    default: null
  },
  tabsStyle: {
    type: String,
    default: null
  },
  activeIndex: {
    type: Number,
    default: 0
  },
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['start', 'end', 'top', 'bottom'].includes(value);
    }
  }
});

const panes = reactive([]);
provide(panes_injection_key, panes);

onMounted(() => {
  const activePane = panes[props.activeIndex];
  if (activePane) activePane.lazy = false;
});

function handleTabClick(pane, index) {
  if (pane.disabled) return;
  pane.lazy = false;
  const tabEl = document.getElementById(`${pane.keyId}-tab`);
  if (tabEl) {
    Tab.getInstance(tabEl).show();
  }
}
</script>
