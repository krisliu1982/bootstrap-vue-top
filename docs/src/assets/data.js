const sidebar = [
  {
    title: 'Guide',
    'zh-CN': '开发指南',
    slug: 'guide',
    pages: [
      { title: 'Introduction', slug: 'introduction', 'zh-CN': '简介' },
      { title: 'Quick start', slug: 'quick-start', 'zh-CN': '快速开始' }
    ]
  },
  {
    title: 'Components',
    slug: 'components',
    'zh-CN': '组件',
    pages: [
      { title: 'Accordion', slug: 'accordion', 'zh-CN': '折叠面板' },
      { title: 'Alert', slug: 'alerts', 'zh-CN': '警示框' },
      { title: 'AlertBox', slug: 'alert-box', 'zh-CN': '警示弹窗' },
      { title: 'AlertConfirm', slug: 'alert-confirm', 'zh-CN': '警示确认窗' },
      { title: 'AlertMessage', slug: 'alert-message', 'zh-CN': '警示消息' },
      { title: 'Backtop', slug: 'backtop', 'zh-CN': '回到顶部' },
      { title: 'Badge', slug: 'badge', 'zh-CN': '徽章' },
      { title: 'Breadcrumb', slug: 'breadcrumb', 'zh-CN': '面包屑导航' },
      { title: 'Button', slug: 'button', 'zh-CN': '按钮' },
      { title: 'ButtonGroup', slug: 'button-group', 'zh-CN': '按钮组' },
      { title: 'Card', slug: 'card', 'zh-CN': '卡片' },
      { title: 'Carousel', slug: 'carousel', 'zh-CN': '轮播图' },
      { title: 'CloseButton', slug: 'close-button', 'zh-CN': '关闭按钮' },
      { title: 'Collapse', slug: 'collapse', 'zh-CN': '折叠' },
      { title: 'Dropdown', slug: 'dropdown', 'zh-CN': '下拉菜单' },
      { title: 'ImagePreview', slug: 'image-preview', 'zh-CN': '图片预览' },
      { title: 'ListGroup', slug: 'list-group', 'zh-CN': '列表组' },
      { title: 'Loading', slug: 'loading', 'zh-CN': '加载' },
      { title: 'Modal', slug: 'modal', 'zh-CN': '模态框' },
      { title: 'Modal2', slug: 'modal2', 'zh-CN': '模态框2' },
      { title: 'Navbar', slug: 'navbar', 'zh-CN': '导航栏' },
      { title: 'Table', slug: 'table', 'zh-CN': '表格' },
      { title: 'Tabs', slug: 'tabs', 'zh-CN': '标签页' },
      { title: 'Offcanvas', slug: 'offcanvas', 'zh-CN': '抽屉' },
      { title: 'Pagination', slug: 'pagination', 'zh-CN': '分页' },
      { title: 'Placeholder', slug: 'placeholder', 'zh-CN': '占位符' },
      { title: 'Popover', slug: 'popover', 'zh-CN': '弹出框' },
      { title: 'Progress', slug: 'progress', 'zh-CN': '进度条' },
      { title: 'Scrollspy', slug: 'scrollspy', 'zh-CN': '滚动监听' },
      { title: 'Spinner', slug: 'spinner', 'zh-CN': '加载动画' },
      { title: 'Toast', slug: 'toast', 'zh-CN': '消息提示' },
      { title: 'Tooltip', slug: 'tooltip', 'zh-CN': '文字提示' },
      { title: 'Tree', slug: 'tree', 'zh-CN': '树' },
      { title: 'TreeTable', slug: 'tree-table', 'zh-CN': '树形表格' },
      { title: 'Uploader', slug: 'uploader', 'zh-CN': '上传器' }
    ]
  },
];

// 按侧边栏顺序展开所有文档页，供路由与上下页导航共用
const flatPages = sidebar.flatMap((group) => {
  const groupTitle = group['zh-CN'] || group.title;
  if (!group.pages)
    return [
      {
        groupSlug: group.slug,
        groupTitle,
        pageSlug: null,
        title: groupTitle,
        path: `/${group.slug}`
      }
    ];
  return group.pages.map((item) => ({
    groupSlug: group.slug,
    groupTitle,
    pageSlug: item.slug,
    title: item['zh-CN'] || item.title,
    path: `/${group.slug}/${item.slug}`
  }));
});

export { flatPages };
export default {
  sidebar
};
