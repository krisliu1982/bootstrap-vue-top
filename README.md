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

```javascript
import { createApp } from 'vue'
import App from './App.vue'

// Import styles (Bootstrap 5 styles are already included—do NOT import them again)
import 'bootstrap-vue-top/dist/index.css'
// Import Vue components (Bootstrap 5 JS components are already bundled—do NOT import them again)
import BootstrapVueTop from 'bootstrap-vue-top'

const app = createApp(App)
app.use(BootstrapVueTop)
app.mount('#app')
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