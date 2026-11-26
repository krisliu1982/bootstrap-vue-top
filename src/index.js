import './styles/index.scss';

import vPopover from './components/popover/popover.js';
import vScrollspy from './components/scrollspy/scrollspy.js';
import vTooltip from './components/tooltip/tooltip.js';

import BvAccordion from './components/accordion/accordion.vue';
import BvAccordionItem from './components/accordion/accordion-item.vue';
import BvBacktop from './components/backtop/backtop.vue';
import BvCarousel from './components/carousel/carousel.vue';
import BvLoading from './components/loading/loading.vue';
import BvModal from './components/modal/modal.vue';
import BvModal2 from './components/modal-2/modal-2.vue';
import BvOffcanvas from './components/offcanvas/offcanvas.vue';
import BvPagination from './components/pagination/pagination.vue';
import BvTable from './components/table/table.vue';
import BvTableCol from './components/table/table-col.vue';
import BvTabs from './components/tabs/tabs.vue';
import BvTabPane from './components/tabs/tab-pane.vue';
import BvTree from './components/tree/tree.vue';
import BvTreetable from './components/treetable/treetable.vue';
import BvTreetableCol from './components/treetable/treetable-col.vue';
import BvImageOneUploader from './components/uploader/image-one-uploader.vue';
import BvImageManyUploader from './components/uploader/image-many-uploader.vue';
import BvFileUploader from './components/uploader/file-uploader.vue';

export default {
  install: (app, options) => {
        app.directive('popover', vPopover);
        app.directive('scrollspy', vScrollspy);
    app.directive('tooltip', vTooltip);

    app.component('BvAccordion', BvAccordion).component('BvAccordionItem', BvAccordionItem);
    app.component('BvBacktop', BvBacktop);
    app.component('BvCarousel', BvCarousel);
    app.component('BvLoading', BvLoading);
    app.component('BvModal', BvModal);
    app.component('BvModal2', BvModal2);
    app.component('BvOffcanvas', BvOffcanvas);
    app.component('BvPagination', BvPagination);
    app.component('BvTable', BvTable).component('BvTableCol', BvTableCol);
    app.component('BvTabs', BvTabs).component('BvTabPane', BvTabPane);
    app.component('BvTree', BvTree);
    app.component('BvTreetable', BvTreetable).component('BvTreetableCol', BvTreetableCol);
    app.component('BvImageOneUploader', BvImageOneUploader);
    app.component('BvImageManyUploader', BvImageManyUploader);
    app.component('BvFileUploader', BvFileUploader);
  }
};

import alertBox from './components/alert-box/index.js';
import alertConfirm from './components/alert-confirm/index.js';
import alertMessage from './components/alert-message/index.js';
import imagePreview from './components/image-preview/index.js';
import LoadingFullscreen from './components/loading/index.js';
import toast from './components/toast/index.js';

export { alertBox, alertConfirm, alertMessage, imagePreview, LoadingFullscreen, toast };
