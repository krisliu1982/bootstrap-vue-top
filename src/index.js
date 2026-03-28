import './styles/index.scss';

import vAlert from './components/alert/alert.js';
import vDropdown from './components/dropdown/dropdown.js';
import vTooltip from './components/tooltip/tooltip.js';
import vPopover from './components/popover/popover.js';
import vScrollspy from './components/scrollspy/scrollspy.js';
import vCollapse from './components/collapse/collapse.js';

import BvTable from './components/table/table.vue';
import BvTableCol from './components/table/table-col.vue';
import BvPagination from './components/pagination/pagination.vue';
import BvModal from './components/modal/modal.vue';
import BvModal2 from './components/modal-2/modal-2.vue';
import BvTree from './components/tree/tree.vue';
import BvTreetable from './components/treetable/treetable.vue';
import BvTreetableCol from './components/treetable/treetable-col.vue';
import BvTabs from './components/tabs/tabs.vue';
import BvTabPane from './components/tabs/tab-pane.vue';
import BvAccordion from './components/accordion/accordion.vue';
import BvAccordionItem from './components/accordion/accordion-item.vue';
import BvCarousel from './components/carousel/carousel.vue';
import BvOffcanvas from './components/offcanvas/offcanvas.vue';
import BvBacktop from './components/backtop/backtop.vue';
import BvImageOneUploader from './components/uploader/image-one-uploader.vue';
import BvImageManyUploader from './components/uploader/image-many-uploader.vue';
import BvFileUploader from './components/uploader/file-uploader.vue';
import BvLoading from './components/loading/loading.vue';

export default {
  install: (app, options) => {
    app.directive('alert', vAlert);
    app.directive('dropdown', vDropdown);
    app.directive('tooltip', vTooltip);
    app.directive('popover', vPopover);
    app.directive('scrollspy', vScrollspy);
    app.directive('collapse', vCollapse);

    app.component('BvTable', BvTable).component('BvTableCol', BvTableCol);
    app.component('BvPagination', BvPagination);
    app.component('BvModal', BvModal);
    app.component('BvModal2', BvModal2);
    app.component('BvTree', BvTree);
    app.component('BvTreetable', BvTreetable).component('BvTreetableCol', BvTreetableCol);
    app.component('BvTabs', BvTabs).component('BvTabPane', BvTabPane);
    app.component('BvAccordion', BvAccordion).component('BvAccordionItem', BvAccordionItem);
    app.component('BvCarousel', BvCarousel);
    app.component('BvOffcanvas', BvOffcanvas);
    app.component('BvBacktop', BvBacktop);
    app.component('BvImageOneUploader', BvImageOneUploader);
    app.component('BvImageManyUploader', BvImageManyUploader);
    app.component('BvFileUploader', BvFileUploader);
    app.component('BvLoading', BvLoading);
  }
};

import alertBox from './components/alert-box/index.js';
import alertConfirm from './components/alert-confirm/index.js';
import alertMessage from './components/alert-message/index.js';
import imagePreview from './components/image-preview/index.js';
import LoadingFullscreen from './components/loading/index.js';
import toast from './components/toast/index.js';

export { alertBox, alertConfirm, alertMessage, imagePreview, LoadingFullscreen, toast };
