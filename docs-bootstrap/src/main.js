import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';


import './assets/docs.scss';

import Example from '@/components/Example.vue'
import Callout from '@/components/Callout.vue'
import AddedIn from '@/components/AddedIn.vue'
import ScssDocs from '@/components/ScssDocs.vue'
import CodeWrapper from '@/components/CodeWrapper.vue'
import DeprecatedIn from '@/components/DeprecatedIn.vue'
import CalloutDeprecatedDarkVariants from '@/components/CalloutDeprecatedDarkVariants.vue'
import JsDismiss from '@/components/JsDismiss.vue'
import JsDataAttributes from '@/components/JsDataAttributes.vue'
import GuideFooter from '@/components/GuideFooter.vue'
import JsDocs from '@/components/JsDocs.vue'
import Placeholder from '@/components/Placeholder.vue'
import Table from '@/components/Table.vue'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

const app = createApp(app_);
app.use(router);
app.component('Example', Example)
app.component('Callout', Callout)
app.component('AddedIn', AddedIn)
app.component('ScssDocs', ScssDocs)
app.component('CodeWrapper', CodeWrapper)
app.component('DeprecatedIn', DeprecatedIn)
app.component('CalloutDeprecatedDarkVariants', CalloutDeprecatedDarkVariants)
app.component('JsDismiss', JsDismiss)
app.component('JsDataAttributes', JsDataAttributes)
app.component('GuideFooter', GuideFooter)
app.component('JsDocs', JsDocs)
app.component('Placeholder', Placeholder)
app.component('Table', Table)

app.mount('#app');
