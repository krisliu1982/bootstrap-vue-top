# bootstrap-vue-top

A frontend component library built on Bootstrap 5.3.8 & Vue 3.5.x

## Introduction

This is a modern frontend framework solution that combines Bootstrap 5.3.8 with Vue 3.5.x, fully leveraging the strengths of both: Bootstrap 5 provides a powerful UI component library and responsive layout system, while Vue 3 brings efficient data-driven reactive rendering and the Composition API.

The framework strictly follows the architectural paradigm of "styling with Bootstrap, behavior with Vue," fully inheriting Bootstrap's atomic utility classes (spacing, typography, colors, Flex/Grid). Developers don't need to learn new CSS class names—they can directly use native classes like `d-flex`, `text-primary`, and `mb-3` to control appearance.

All style classes described in the official Bootstrap documentation (such as table striping, card groups, grid offsets, etc.) can be used directly in Vue projects, reducing the learning and migration costs for teams.

## Features

- **Vue 3 + Composition API**: Built with the latest Vue 3 features
- **Bootstrap 5 styles**: Fully inherits all Bootstrap 5 style classes
- **Rich components**: Provides 20+ common components
- **Complete documentation**: Comes with a full Chinese documentation website

## Installation

```bash
npm install bootstrap-vue-top
```


## Quick Start

**main.js**
```javascript
import { createApp } from 'vue'
import App from './App.vue'

// Import styles (Bootstrap 5 styles are already included—do NOT import them again)
import 'bootstrap-vue-top/style.css'
// Import Vue components (Bootstrap 5 JS components are already bundled—do NOT import them again)
import BootstrapVueTop from 'bootstrap-vue-top'

const app = createApp(App)
app.use(BootstrapVueTop)
app.mount('#app')
```

**App.vue**
```javascript
<template>
  <div class="container p-3">
    <h1 class="text-primary text-center">Hello</h1>

    <h4 class="mt-4">Example 1 (Vue component)</h4>
    <bv-table :data="tableData" table-class="table-bordered">
      <bv-table-col header="Code" field="code" />
      <bv-table-col header="Name" field="name" />
      <bv-table-col header="Address" field="address" />
    </bv-table>

    <h4 class="mt-4">Example 2  (Bootstrap component)</h4>
    <div>
      <button ref="popoverRef" type="button" class="btn btn-primary" data-bs-toggle="popover"
        data-bs-title="Popover title"
        data-bs-content="And here’s some amazing content. It’s very engaging. Right?">Click to toggle
        popover</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])

// Bootstrap component
import { bootstrap } from 'bootstrap-vue-top'
const popoverRef = ref(null)
onMounted(() => {
  // Instantiate the Bootstrap component
  new bootstrap.Popover(popoverRef.value, {
    container: 'body'
  })
})
onBeforeUnmount(() => {
  // Destroy the Bootstrap component
  bootstrap.Popover.getInstance(popoverRef.value).dispose();
})
</script>
```


## Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

### Documentation Website Development

```bash
cd website
npm install
npm run dev
```


## Browser Support

- Chrome >= 84
- Firefox >= 63
- iOS >= 14.5
- Safari >= 14.1


## License

MIT License