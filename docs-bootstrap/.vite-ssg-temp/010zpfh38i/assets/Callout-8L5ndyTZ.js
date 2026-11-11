import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
// \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
// src/data/callouts/info-npm-starter.vue
var _sfc_main$8 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
	_push(`<p${ssrRenderAttrs(_attrs)}><strong>通过 npm 配合我们的入门项目开始使用 Bootstrap！</strong>前往<a href="https://github.com/twbs/examples/tree/main/sass-js">Sass &amp; JS 示例</a>模板仓库，了解如何在你自己 npm 项目中构建和自定义 Bootstrap。其中包含 Sass 编译器、Autoprefixer、Stylelint、PurgeCSS 和 Bootstrap Icons。 </p>`);
}
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/data/callouts/info-npm-starter.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var info_npm_starter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
// src/data/callouts/warning-input-support.vue
var _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
	_push(`<p${ssrRenderAttrs(_attrs)}>某些日期输入类型在最新版本的 Safari 和 Firefox 中<a href="https://caniuse.com/input-datetime">并未得到完全支持</a>。</p>`);
}
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/data/callouts/warning-input-support.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var warning_input_support_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
// src/data/callouts/warning-data-bs-title-vs-title.vue
var _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
	_push(`<p${ssrRenderAttrs(_attrs)}>你可以在 HTML 中随意使用 <code>title</code> 或 <code>data-bs-title</code>。当使用 <code>title</code> 时，Popper 会在元素渲染时自动将其替换为 <code>data-bs-title</code>。</p>`);
}
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/data/callouts/warning-data-bs-title-vs-title.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var warning_data_bs_title_vs_title_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
// src/data/callouts/warning-color-assistive-technologies.vue
var _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
	_push(`<p${ssrRenderAttrs(_attrs)}><strong>无障碍访问提示：</strong>仅使用颜色来表达含义只能提供视觉提示，无法传达给屏幕阅读器等辅助技术用户。请确保含义本身从内容中就能明显看出（例如带有<a href="/getting-started/accessibility/#color-contrast"><em>足够</em>颜色对比度</a>的可见文本），或通过其他方式提供，例如使用 <code>.visually-hidden</code> 类隐藏的额外文本。 </p>`);
}
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/data/callouts/warning-color-assistive-technologies.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var warning_color_assistive_technologies_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
// src/data/callouts/info-sanitizer.vue
var _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
	_push(`<p${ssrRenderAttrs(_attrs)}> 默认情况下，此组件使用内置的内容清理器（sanitizer），它会移除任何未被明确允许的 HTML 元素。更多详情请参阅<a href="/getting-started/javascript/#sanitizer">我们的 JavaScript 文档中的清理器章节</a>。 </p>`);
}
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/data/callouts/info-sanitizer.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var info_sanitizer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
// src/data/callouts/info-prefersreducedmotion.vue
var _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	_push(`<p${ssrRenderAttrs(_attrs)}>此组件的动画效果依赖于 <code>prefers-reduced-motion</code> 媒体查询。请参阅<a href="/getting-started/accessibility/#reduced-motion">我们的无障碍访问文档中的减少动态效果章节</a>。</p>`);
}
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/data/callouts/info-prefersreducedmotion.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var info_prefersreducedmotion_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
// src/data/callouts/info-mediaqueries-breakpoints.vue
var _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<p${ssrRenderAttrs(_attrs)}><strong>为什么要减去 .02px？</strong>浏览器目前不支持<a href="https://www.w3.org/TR/mediaqueries-4/#range-context">范围上下文查询</a>，因此我们通过使用精度更高的值，来规避 <a href="https://www.w3.org/TR/mediaqueries-4/#mq-min-max"><code>min-</code> 和 <code>max-</code> 前缀</a>以及视口宽度带小数（例如在高 DPI 设备的某些情况下会出现）所带来的限制。 </p>`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/data/callouts/info-mediaqueries-breakpoints.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var info_mediaqueries_breakpoints_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
// src/data/callouts/danger-async-methods.vue
var _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<p${ssrRenderAttrs(_attrs)}><strong>所有 API 方法都是异步的，并会启动过渡动画。</strong>它们会在过渡开始时立即返回给调用方，而不是等到过渡结束。此外，对正在过渡中的组件调用方法会被忽略。<a href="/getting-started/javascript/#asynchronous-functions-and-transitions">在我们的 JavaScript 文档中了解更多。</a></p>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/data/callouts/danger-async-methods.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var danger_async_methods_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
// src/components/Callout.vue
var _sfc_main = {
	__name: "Callout",
	__ssrInlineRender: true,
	props: {
		type: {
			type: String,
			default: "info"
		},
		name: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: `bd-callout bd-callout-${props.type}` }, _attrs))}>`);
			if (props.name === "info-npm-starter") _push(ssrRenderComponent(info_npm_starter_default, null, null, _parent));
			else if (props.name === "warning-input-support") _push(ssrRenderComponent(warning_input_support_default, null, null, _parent));
			else if (props.name === "warning-data-bs-title-vs-title") _push(ssrRenderComponent(warning_data_bs_title_vs_title_default, null, null, _parent));
			else if (props.name === "warning-color-assistive-technologies") _push(ssrRenderComponent(warning_color_assistive_technologies_default, null, null, _parent));
			else if (props.name === "info-sanitizer") _push(ssrRenderComponent(info_sanitizer_default, null, null, _parent));
			else if (props.name === "info-prefersreducedmotion") _push(ssrRenderComponent(info_prefersreducedmotion_default, null, null, _parent));
			else if (props.name === "info-mediaqueries-breakpoints") _push(ssrRenderComponent(info_mediaqueries_breakpoints_default, null, null, _parent));
			else if (props.name === "danger-async-methods") _push(ssrRenderComponent(danger_async_methods_default, null, null, _parent));
			else _push(`<!---->`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Callout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _plugin_vue_export_helper_default as n, _sfc_main as t };
