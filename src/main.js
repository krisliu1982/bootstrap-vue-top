import { ViteSSG } from 'vite-ssg/single-page';
import app_ from './app.vue';

// Import our custom CSS
import './styles.scss';

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(app_);
