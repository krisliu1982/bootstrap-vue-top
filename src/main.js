import { createApp } from 'vue';
import app_ from './app.vue';

// Import our custom CSS
import './styles.scss'

const app = createApp(app_);
app.mount('#app');
