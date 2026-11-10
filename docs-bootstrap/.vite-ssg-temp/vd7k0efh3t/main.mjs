import { i as _asyncToGenerator, n as check_lg_default, r as copy_default } from "./assets/code-highlighter-B0-DSCQC.js";
import { t as lightning_charge_fill_default } from "./assets/stackblitz-RzCKKPjM.js";
import { t as _sfc_main$14 } from "./assets/Code-DUJAk1C2.js";
import { n as _plugin_vue_export_helper_default, t as _sfc_main$15 } from "./assets/Callout-8L5ndyTZ.js";
import { t as _sfc_main$16 } from "./assets/code-xe3tUqR1.js";
import { t as _sfc_main$17 } from "./assets/CodeWrapper-BADWE8fG.js";
import { createHead } from "@unhead/vue/server";
import { createElementBlock, createElementVNode, createSSRApp, createTextVNode, createVNode, defineComponent, markRaw, mergeProps, onMounted, openBlock, ref, resolveComponent, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { createMemoryHistory, createRouter, useRoute } from "vue-router";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import NProgress from "nprogress";
// \0rolldown_dynamic_import_helper.js
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
// node_modules/vite-ssg/dist/shared/vite-ssg.ETIvV-80.mjs
var ClientOnly = defineComponent({ setup(props, { slots }) {
	const mounted = ref(false);
	onMounted(() => mounted.value = true);
	return () => {
		if (!mounted.value) return slots.placeholder && slots.placeholder({});
		return slots.default && slots.default({});
	};
} });
// \0@oxc-project+runtime@0.156.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
// \0@oxc-project+runtime@0.156.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
// \0@oxc-project+runtime@0.156.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
// \0@oxc-project+runtime@0.156.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
// \0@oxc-project+runtime@0.156.0/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
// node_modules/vite-ssg/dist/index.mjs
function ViteSSG(App, routerOptions, fn, options) {
	const { transformState, registerComponents = true, useHead = true, rootContainer = "#app" } = options !== null && options !== void 0 ? options : {};
	function createApp$1(_x) {
		return _createApp$.apply(this, arguments);
	}
	function _createApp$() {
		_createApp$ = _asyncToGenerator(function* (routePath) {
			const app = createSSRApp(App);
			let head;
			if (useHead) app.use(head = createHead());
			const router = createRouter(_objectSpread2({ history: createMemoryHistory(routerOptions.base) }, routerOptions));
			const { routes } = routerOptions;
			if (registerComponents) app.component("ClientOnly", ClientOnly);
			const appRenderCallbacks = [];
			const onSSRAppRendered = (cb) => appRenderCallbacks.push(cb);
			const triggerOnSSRAppRendered = () => {
				return Promise.all(appRenderCallbacks.map((cb) => cb()));
			};
			const context = {
				app,
				head,
				isClient: false,
				router,
				routes,
				onSSRAppRendered,
				triggerOnSSRAppRendered,
				initialState: {},
				transformState,
				routePath
			};
			yield fn === null || fn === void 0 ? void 0 : fn(context);
			app.use(router);
			let entryRoutePath;
			let isFirstRoute = true;
			router.beforeEach((to, from, next) => {
				if (isFirstRoute || entryRoutePath && entryRoutePath === to.path) {
					isFirstRoute = false;
					entryRoutePath = to.path;
					to.meta.state = context.initialState;
				}
				next();
			});
			{
				var _context$routePath;
				const route = (_context$routePath = context.routePath) !== null && _context$routePath !== void 0 ? _context$routePath : "/";
				router.push(route);
				yield router.isReady();
				context.initialState = router.currentRoute.value.meta.state || {};
			}
			const initialState = context.initialState;
			return _objectSpread2(_objectSpread2({}, context), {}, { initialState });
		});
		return _createApp$.apply(this, arguments);
	}
	return createApp$1;
}
// ~icons/bi/globe2
var _hoisted_1$18 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$18(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$18, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332c.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933a9 9 0 0 1-.481-1.079a8.4 8.4 0 0 0-1.198.49a7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521a8.4 8.4 0 0 0-1.197-.49a9 9 0 0 1-.481 1.078a7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667c.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49a7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
	}, null, -1)])]);
}
var globe2_default = markRaw({
	name: "bi-globe2",
	render: render$18
});
// ~icons/bi/tools
var _hoisted_1$17 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$17(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$17, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675l-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617l.968.968l-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96l2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46L4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242l.529.026l.287.445l.445.287l.026.529L5 13l-.242.471l-.026.529l-.445.287l-.287.445l-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471l.026-.529l.445-.287l.287-.445l.529-.026z"
	}, null, -1)])]);
}
var tools_default = markRaw({
	name: "bi-tools",
	render: render$17
});
// ~icons/bi/braces-asterisk
var _hoisted_1$16 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$16(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$16, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		"fill-rule": "evenodd",
		d: "M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6M7.5 11.5V9.207l-1.621 1.621l-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621l.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621l-.707.707L8.5 9.208V11.5z"
	}, null, -1)])]);
}
var braces_asterisk_default = markRaw({
	name: "bi-braces-asterisk",
	render: render$16
});
// ~icons/bi/magic
var _hoisted_1$15 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$15(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$15, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z"
	}, null, -1)])]);
}
var magic_default = markRaw({
	name: "bi-magic",
	render: render$15
});
// ~icons/bi/menu-button-wide-fill
var _hoisted_1$14 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$14(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$14, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
	}, null, -1)])]);
}
var menu_button_wide_fill_default = markRaw({
	name: "bi-menu-button-wide-fill",
	render: render$14
});
// ~icons/bi/ui-radios
var _hoisted_1$13 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$13(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$13, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM0 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M3 1a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 4.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"
	}, null, -1)])]);
}
var ui_radios_default = markRaw({
	name: "bi-ui-radios",
	render: render$13
});
// ~icons/bi/file-earmark-richtext
var _hoisted_1$12 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$12(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$12, [..._cache[0] || (_cache[0] = [createElementVNode("g", { fill: "currentColor" }, [createElementVNode("path", { d: "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" }), createElementVNode("path", { d: "M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708l1.33.886l1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" })], -1)])]);
}
var file_earmark_richtext_default = markRaw({
	name: "bi-file-earmark-richtext",
	render: render$12
});
// ~icons/bi/grid-fill
var _hoisted_1$11 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$11(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$11, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"
	}, null, -1)])]);
}
var grid_fill_default = markRaw({
	name: "bi-grid-fill",
	render: render$11
});
// ~icons/bi/palette2
var _hoisted_1$10 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$10(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$10, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a3 3 0 0 1-2.121-.879A3 3 0 0 1 0 13.044m6-.21l7.328-7.3l-2.829-2.828L6 7.188zM4.5 13a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 15v-4H9.258l-4.015 4zM0 .5v12.495zm0 12.495V13z"
	}, null, -1)])]);
}
var palette2_default = markRaw({
	name: "bi-palette2",
	render: render$10
});
// ~icons/bi/book-half
var _hoisted_1$9 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$9(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$9, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M8.5 2.687c.654-.689 1.782-.886 3.112-.752c1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81c-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02c1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877c1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"
	}, null, -1)])]);
}
var book_half_default = markRaw({
	name: "bi-book-half",
	render: render$9
});
// ~icons/bi/three-dots
var _hoisted_1$8 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$8(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$8, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"
	}, null, -1)])]);
}
var three_dots_default = markRaw({
	name: "bi-three-dots",
	render: render$8
});
// ~icons/bi/moon
var _hoisted_1$7 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$7(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M6 .278a.77.77 0 0 1 .08.858a7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316a.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29c0-1.167.242-2.278.681-3.286"
	}, null, -1)])]);
}
var moon_default = markRaw({
	name: "bi-moon",
	render: render$7
});
// ~icons/bi/sun
var _hoisted_1$6 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$6(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$6, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
	}, null, -1)])]);
}
var sun_default = markRaw({
	name: "bi-sun",
	render: render$6
});
// ~icons/bi/fonts
var _hoisted_1$5 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$5(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$5, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479z"
	}, null, -1)])]);
}
var fonts_default = markRaw({
	name: "bi-fonts",
	render: render$5
});
// ~icons/bi/opencollective
var _hoisted_1$4 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$4(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._cache[0] || (_cache[0] = [createElementVNode("g", { fill: "currentColor" }, [createElementVNode("path", {
		"fill-opacity": ".4",
		d: "M12.995 8.195c0 .937-.312 1.912-.78 2.693l1.99 1.99c.976-1.327 1.6-2.966 1.6-4.683c0-1.795-.624-3.434-1.561-4.76l-2.068 2.028c.468.781.78 1.679.78 2.732z"
	}), createElementVNode("path", { d: "M8 13.151a4.995 4.995 0 1 1 0-9.99c1.015 0 1.951.273 2.732.82l1.95-2.03a7.805 7.805 0 1 0 .04 12.449l-1.951-2.03a5.07 5.07 0 0 1-2.732.781z" })], -1)])]);
}
var opencollective_default = markRaw({
	name: "bi-opencollective",
	render: render$4
});
// ~icons/bi/twitter-x
var _hoisted_1$3 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$3(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
	}, null, -1)])]);
}
var twitter_x_default = markRaw({
	name: "bi-twitter-x",
	render: render$3
});
// ~icons/bi/github
var _hoisted_1$2 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
	}, null, -1)])]);
}
var github_default = markRaw({
	name: "bi-github",
	render: render$2
});
// src/data/data.js
var sidebar = [
	{
		title: "Getting started",
		slug: "getting-started",
		"zh-CN": "快速开始",
		icon: "book-half",
		icon_color: "indigo",
		pages: [
			{
				title: "Introduction",
				slug: "introduction",
				"zh-CN": "简介"
			},
			{
				title: "Download",
				slug: "download",
				"zh-CN": "下载"
			},
			{
				title: "Contents",
				slug: "contents",
				"zh-CN": "目录"
			},
			{
				title: "Browsers & devices",
				slug: "browsers-devices",
				"zh-CN": "浏览器与设备"
			},
			{
				title: "JavaScript",
				slug: "javascript",
				"zh-CN": "JavaScript"
			},
			{
				title: "Webpack",
				slug: "webpack",
				"zh-CN": "Webpack"
			},
			{
				title: "Parcel",
				slug: "parcel",
				"zh-CN": "Parcel"
			},
			{
				title: "Vite",
				slug: "vite",
				"zh-CN": "Vite"
			},
			{
				title: "Accessibility",
				slug: "accessibility",
				"zh-CN": "无障碍"
			},
			{
				title: "RFS",
				slug: "rfs",
				"zh-CN": "RFS"
			},
			{
				title: "RTL",
				slug: "rtl",
				"zh-CN": "RTL"
			},
			{
				title: "Contribute",
				slug: "contribute",
				"zh-CN": "参与贡献"
			}
		]
	},
	{
		title: "Customize",
		slug: "customize",
		"zh-CN": "自定义",
		icon: "palette2",
		icon_color: "pink",
		pages: [
			{
				title: "Overview",
				slug: "overview",
				"zh-CN": "概览"
			},
			{
				title: "Sass",
				slug: "sass",
				"zh-CN": "Sass"
			},
			{
				title: "Options",
				slug: "options",
				"zh-CN": "选项"
			},
			{
				title: "Color",
				slug: "color",
				"zh-CN": "颜色"
			},
			{
				title: "Color modes",
				slug: "color-modes",
				"zh-CN": "颜色模式"
			},
			{
				title: "Components",
				slug: "components",
				"zh-CN": "组件"
			},
			{
				title: "CSS variables",
				slug: "css-variables",
				"zh-CN": "CSS 变量"
			},
			{
				title: "Optimize",
				slug: "optimize",
				"zh-CN": "优化"
			}
		]
	},
	{
		title: "Layout",
		slug: "layout",
		"zh-CN": "布局",
		icon: "grid-fill",
		icon_color: "teal",
		pages: [
			{
				title: "Breakpoints",
				slug: "breakpoints",
				"zh-CN": "断点"
			},
			{
				title: "Containers",
				slug: "containers",
				"zh-CN": "容器"
			},
			{
				title: "Grid",
				slug: "grid",
				"zh-CN": "网格"
			},
			{
				title: "Columns",
				slug: "columns",
				"zh-CN": "列"
			},
			{
				title: "Gutters",
				slug: "gutters",
				"zh-CN": "间距"
			},
			{
				title: "Utilities",
				slug: "utilities",
				"zh-CN": "工具类"
			},
			{
				title: "Z-index",
				slug: "z-index",
				"zh-CN": "Z-index"
			},
			{
				title: "CSS Grid",
				slug: "css-grid",
				"zh-CN": "CSS 网格"
			}
		]
	},
	{
		title: "Content",
		slug: "content",
		"zh-CN": "内容",
		icon: "file-earmark-richtext",
		icon_color: "gray",
		pages: [
			{
				title: "Reboot",
				slug: "reboot",
				"zh-CN": "重置"
			},
			{
				title: "Typography",
				slug: "typography",
				"zh-CN": "排版"
			},
			{
				title: "Images",
				slug: "images",
				"zh-CN": "图片"
			},
			{
				title: "Tables",
				slug: "tables",
				"zh-CN": "表格"
			},
			{
				title: "Figures",
				slug: "figures",
				"zh-CN": "图表"
			}
		]
	},
	{
		title: "Forms",
		slug: "forms",
		"zh-CN": "表单",
		icon: "ui-radios",
		icon_color: "blue",
		pages: [
			{
				title: "Overview",
				slug: "overview",
				"zh-CN": "概览"
			},
			{
				title: "Form control",
				slug: "form-control",
				"zh-CN": "表单控件"
			},
			{
				title: "Select",
				slug: "select",
				"zh-CN": "选择框"
			},
			{
				title: "Checks & radios",
				slug: "checks-radios",
				"zh-CN": "复选框与单选框"
			},
			{
				title: "Range",
				slug: "range",
				"zh-CN": "范围"
			},
			{
				title: "Input group",
				slug: "input-group",
				"zh-CN": "输入框组"
			},
			{
				title: "Floating labels",
				slug: "floating-labels",
				"zh-CN": "浮动标签"
			},
			{
				title: "Layout",
				slug: "layout",
				"zh-CN": "布局"
			},
			{
				title: "Validation",
				slug: "validation",
				"zh-CN": "验证"
			}
		]
	},
	{
		title: "Components",
		slug: "components",
		"zh-CN": "组件",
		icon: "menu-button-wide-fill",
		icon_color: "cyan",
		pages: [
			{
				title: "Accordion",
				slug: "accordion",
				"zh-CN": "手风琴"
			},
			{
				title: "Alerts",
				slug: "alerts",
				"zh-CN": "警告框"
			},
			{
				title: "Badge",
				slug: "badge",
				"zh-CN": "徽章"
			},
			{
				title: "Breadcrumb",
				slug: "breadcrumb",
				"zh-CN": "面包屑导航"
			},
			{
				title: "Buttons",
				slug: "buttons",
				"zh-CN": "按钮"
			},
			{
				title: "Button group",
				slug: "button-group",
				"zh-CN": "按钮组"
			},
			{
				title: "Card",
				slug: "card",
				"zh-CN": "卡片"
			},
			{
				title: "Carousel",
				slug: "carousel",
				"zh-CN": "轮播"
			},
			{
				title: "Close button",
				slug: "close-button",
				"zh-CN": "关闭按钮"
			},
			{
				title: "Collapse",
				slug: "collapse",
				"zh-CN": "折叠"
			},
			{
				title: "Dropdowns",
				slug: "dropdowns",
				"zh-CN": "下拉菜单"
			},
			{
				title: "List group",
				slug: "list-group",
				"zh-CN": "列表组"
			},
			{
				title: "Modal",
				slug: "modal",
				"zh-CN": "模态框"
			},
			{
				title: "Navbar",
				slug: "navbar",
				"zh-CN": "导航栏"
			},
			{
				title: "Navs & tabs",
				slug: "navs-tabs",
				"zh-CN": "导航与标签页"
			},
			{
				title: "Offcanvas",
				slug: "offcanvas",
				"zh-CN": "抽屉"
			},
			{
				title: "Pagination",
				slug: "pagination",
				"zh-CN": "分页"
			},
			{
				title: "Placeholders",
				slug: "placeholders",
				"zh-CN": "占位符"
			},
			{
				title: "Popovers",
				slug: "popovers",
				"zh-CN": "弹出框"
			},
			{
				title: "Progress",
				slug: "progress",
				"zh-CN": "进度条"
			},
			{
				title: "Scrollspy",
				slug: "scrollspy",
				"zh-CN": "滚动监听"
			},
			{
				title: "Spinners",
				slug: "spinners",
				"zh-CN": "加载动画"
			},
			{
				title: "Toasts",
				slug: "toasts",
				"zh-CN": "消息提示"
			},
			{
				title: "Tooltips",
				slug: "tooltips",
				"zh-CN": "工具提示"
			}
		]
	},
	{
		title: "Helpers",
		slug: "helpers",
		"zh-CN": "辅助类",
		icon: "magic",
		icon_color: "orange",
		pages: [
			{
				title: "Clearfix",
				slug: "clearfix",
				"zh-CN": "清除浮动"
			},
			{
				title: "Color & background",
				slug: "color-background",
				"zh-CN": "颜色与背景"
			},
			{
				title: "Colored links",
				slug: "colored-links",
				"zh-CN": "彩色链接"
			},
			{
				title: "Focus ring",
				slug: "focus-ring",
				"zh-CN": "聚焦环"
			},
			{
				title: "Icon link",
				slug: "icon-link",
				"zh-CN": "图标链接"
			},
			{
				title: "Position",
				slug: "position",
				"zh-CN": "定位"
			},
			{
				title: "Ratio",
				slug: "ratio",
				"zh-CN": "比例"
			},
			{
				title: "Stacks",
				slug: "stacks",
				"zh-CN": "堆叠"
			},
			{
				title: "Stretched link",
				slug: "stretched-link",
				"zh-CN": "拉伸链接"
			},
			{
				title: "Text truncation",
				slug: "text-truncation",
				"zh-CN": "文本截断"
			},
			{
				title: "Vertical rule",
				slug: "vertical-rule",
				"zh-CN": "垂直分割线"
			},
			{
				title: "Visually hidden",
				slug: "visually-hidden",
				"zh-CN": "视觉隐藏"
			}
		]
	},
	{
		title: "Utilities",
		slug: "utilities",
		"zh-CN": "工具类",
		icon: "braces-asterisk",
		icon_color: "red",
		pages: [
			{
				title: "API",
				slug: "api",
				"zh-CN": "API"
			},
			{
				title: "Background",
				slug: "background",
				"zh-CN": "背景"
			},
			{
				title: "Borders",
				slug: "borders",
				"zh-CN": "边框"
			},
			{
				title: "Colors",
				slug: "colors",
				"zh-CN": "颜色"
			},
			{
				title: "Display",
				slug: "display",
				"zh-CN": "显示"
			},
			{
				title: "Flex",
				slug: "flex",
				"zh-CN": "弹性布局"
			},
			{
				title: "Float",
				slug: "float",
				"zh-CN": "浮动"
			},
			{
				title: "Interactions",
				slug: "interactions",
				"zh-CN": "交互"
			},
			{
				title: "Link",
				slug: "link",
				"zh-CN": "链接"
			},
			{
				title: "Object fit",
				slug: "object-fit",
				"zh-CN": "对象适应"
			},
			{
				title: "Opacity",
				slug: "opacity",
				"zh-CN": "不透明度"
			},
			{
				title: "Overflow",
				slug: "overflow",
				"zh-CN": "溢出"
			},
			{
				title: "Position",
				slug: "position",
				"zh-CN": "定位"
			},
			{
				title: "Shadows",
				slug: "shadows",
				"zh-CN": "阴影"
			},
			{
				title: "Sizing",
				slug: "sizing",
				"zh-CN": "尺寸"
			},
			{
				title: "Spacing",
				slug: "spacing",
				"zh-CN": "间距"
			},
			{
				title: "Text",
				slug: "text",
				"zh-CN": "文本"
			},
			{
				title: "Vertical align",
				slug: "vertical-align",
				"zh-CN": "垂直对齐"
			},
			{
				title: "Visibility",
				slug: "visibility",
				"zh-CN": "可见性"
			},
			{
				title: "Z-index",
				slug: "z-index",
				"zh-CN": "Z-index"
			}
		]
	},
	{
		title: "Extend",
		slug: "extend",
		"zh-CN": "扩展",
		icon: "tools",
		icon_color: "blue",
		pages: [{
			title: "Approach",
			slug: "approach",
			"zh-CN": "方法"
		}, {
			title: "Icons",
			slug: "icons",
			"zh-CN": "图标"
		}]
	},
	{
		title: "About",
		slug: "about",
		"zh-CN": "关于",
		icon: "globe2",
		icon_color: "indigo",
		pages: [
			{
				title: "Overview",
				slug: "overview",
				"zh-CN": "概览"
			},
			{
				title: "Team",
				slug: "team",
				"zh-CN": "团队"
			},
			{
				title: "Brand",
				slug: "brand",
				"zh-CN": "品牌"
			},
			{
				title: "License",
				slug: "license",
				"zh-CN": "许可证"
			},
			{
				title: "Translations",
				slug: "translations",
				"zh-CN": "翻译"
			}
		]
	},
	{
		title: "Migration",
		slug: "migration",
		"zh-CN": "迁移"
	}
];
var flatPages = sidebar.flatMap((group) => {
	const groupTitle = group["zh-CN"] || group.title;
	if (!group.pages) return [{
		groupSlug: group.slug,
		groupTitle,
		pageSlug: null,
		title: groupTitle,
		path: `/${group.slug}`
	}];
	return group.pages.map((item) => ({
		groupSlug: group.slug,
		groupTitle,
		pageSlug: item.slug,
		title: item["zh-CN"] || item.title,
		path: `/${group.slug}/${item.slug}`
	}));
});
var data_default = {
	sidebar,
	"theme-colors": [
		{
			name: "primary",
			hex: "#0d6efd"
		},
		{
			name: "secondary",
			hex: "#6c757d"
		},
		{
			name: "success",
			hex: "#28a745"
		},
		{
			name: "danger",
			hex: "#dc3545"
		},
		{
			name: "warning",
			hex: "#ffc107",
			contrast_color: "dark"
		},
		{
			name: "info",
			hex: "#17a2b8",
			contrast_color: "dark"
		},
		{
			name: "light",
			hex: "#f8f9fa",
			contrast_color: "dark"
		},
		{
			name: "dark",
			hex: "#343a40",
			contrast_color: "white"
		}
	],
	"core-team": [
		{
			name: "Mark Otto",
			user: "mdo"
		},
		{
			name: "Jacob Thornton",
			user: "fat"
		},
		{
			name: "XhmikosR",
			user: "xhmikosr"
		},
		{
			name: "GeoSot",
			user: "geosot"
		},
		{
			name: "Patrick H. Lauke",
			user: "patrickhlauke"
		},
		{
			name: "Julien Déramond",
			user: "julien-deramond"
		},
		{
			name: "Gaël Poupard",
			user: "ffoodd"
		},
		{
			name: "Rohit Sharma",
			user: "rohit2sharma95"
		},
		{
			name: "alpadev",
			user: "alpadev"
		},
		{
			name: "Martijn Cuppens",
			user: "martijncuppens"
		},
		{
			name: "Johann-S",
			user: "johann-s"
		},
		{
			name: "Gleb Mazovetskiy",
			user: "glebm"
		}
	],
	translations: [
		{
			name: "中文(繁體)",
			code: "zh-tw",
			description: "Bootstrap 5 繁體中文手冊",
			url: "https://bootstrap5.hexschool.com/"
		},
		{
			name: "Japanese",
			code: "ja",
			description: "Bootstrap 5 日本語リファレンス",
			url: "https://getbootstrap.jp/"
		},
		{
			name: "Russian",
			code: "ru",
			description: "Bootstrap 5 на русском",
			url: "https://getbootstrap.su/"
		},
		{
			name: "Korean",
			code: "ko",
			description: "Bootstrap 5 한국어 문서",
			url: "https://getbootstrap.kr/"
		}
	],
	breakpoints: [
		{
			breakpoint: "xs",
			abbr: "",
			name: "X-Small",
			"min-width": "0px",
			container: ""
		},
		{
			breakpoint: "sm",
			abbr: "-sm",
			name: "Small",
			"min-width": "576px",
			container: "540px"
		},
		{
			breakpoint: "md",
			abbr: "-md",
			name: "Medium",
			"min-width": "768px",
			container: "720px"
		},
		{
			breakpoint: "lg",
			abbr: "-lg",
			name: "Large",
			"min-width": "992px",
			container: "960px"
		},
		{
			breakpoint: "xl",
			abbr: "-xl",
			name: "X-Large",
			"min-width": "1200px",
			container: "1140px"
		},
		{
			breakpoint: "xxl",
			abbr: "-xxl",
			name: "XX-Large",
			"min-width": "1400px",
			container: "1320px"
		}
	],
	icons: {
		preferred: [
			{
				name: "Font Awesome",
				website: "https://fontawesome.com/"
			},
			{
				name: "Feather",
				website: "https://feathericons.com/"
			},
			{
				name: "Octicons",
				website: "https://primer.style/foundations/icons"
			}
		],
		more: [
			{
				name: "Bytesize",
				website: "https://github.com/danklammer/bytesize-icons"
			},
			{
				name: "CoreUI Icons",
				website: "https://coreui.io/icons/"
			},
			{
				name: "Google Material icons",
				website: "https://fonts.google.com/icons"
			},
			{
				name: "Ionicons",
				website: "https://ionic.io/ionicons"
			},
			{
				name: "Dripicons",
				website: "http://demo.amitjakhu.com/dripicons/"
			},
			{
				name: "Ikons",
				website: "https://ikons.piotrkwiatkowski.co.uk/"
			},
			{
				name: "Icons8",
				website: "https://icons8.com/"
			},
			{
				name: "icofont",
				website: "https://icofont.com/"
			},
			{
				name: "Tabler Icons",
				website: "https://tabler.io/icons"
			}
		]
	}
};
var package_default = {
	name: "docs-bootstrap",
	version: "5.3.8",
	"private": true,
	type: "module",
	scripts: {
		"dev": "vite",
		"build": "vite-ssg build",
		"preview": "vite preview",
		"format": "prettier --write \"src/**/*.{js,vue,ts,json}\"",
		"lint": "eslint --ext .js,.vue src",
		"deploy": "vite-ssg build && wrangler deploy"
	},
	dependencies: {
		"@popperjs/core": "^2.11.8",
		"@stackblitz/sdk": "^1.11.1",
		"bootstrap": "^5.3.8",
		"nprogress": "^0.2.0",
		"shiki": "^4.6.0",
		"vue": "^3.5.45",
		"vue-router": "^5.4.0"
	},
	devDependencies: {
		"@eslint/js": "^10.0.1",
		"@iconify-json/bi": "^1.2.7",
		"@vitejs/plugin-vue": "^6.0.10",
		"autoprefixer": "^10.6.2",
		"eslint": "^10.14.0",
		"eslint-plugin-vue": "^10.12.0",
		"globals": "^17.14.0",
		"prettier": "^3.9.10",
		"sass": "^1.108.1",
		"unplugin-icons": "^22.5.0",
		"unplugin-vue-components": "^30.0.0",
		"vite": "^8.3.7",
		"vite-ssg": "^28.3.0",
		"wrangler": "^4.159.0"
	}
};
// src/app.vue
var _sfc_main$13 = {
	__name: "app",
	__ssrInlineRender: true,
	setup(__props) {
		const version = package_default.version;
		function getFontSize() {
			const storedFontSize = localStorage.getItem("font-size");
			if (storedFontSize === null) return "md";
			return storedFontSize;
		}
		const fontSize = ref(null);
		function handleFontSizeChange(_fontSize) {
			fontSize.value = _fontSize;
			if (_fontSize === "sm") document.documentElement.style.setProperty("font-size", "14px");
			else if (_fontSize === "md") document.documentElement.style.setProperty("font-size", "16px");
			else if (_fontSize === "lg") document.documentElement.style.setProperty("font-size", "18px");
			localStorage.setItem("font-size", _fontSize);
		}
		function getTheme() {
			const storedTheme = localStorage.getItem("theme");
			if (storedTheme === null) return "light";
			return storedTheme;
		}
		const theme = ref(null);
		function handleThemeChange(_theme) {
			theme.value = _theme;
			document.documentElement.setAttribute("data-bs-theme", _theme);
			localStorage.setItem("theme", _theme);
		}
		onMounted(() => {
			handleFontSizeChange(getFontSize());
			handleThemeChange(getTheme());
		});
		ref(null);
		ref(null);
		ref(null);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_bi_github = github_default;
			const _component_bi_twitter_x = twitter_x_default;
			const _component_bi_opencollective = opencollective_default;
			const _component_bi_fonts = fonts_default;
			const _component_bi_sun = sun_default;
			const _component_bi_moon = moon_default;
			const _component_bi_three_dots = three_dots_default;
			const _component_bi_book_half = book_half_default;
			const _component_bi_palette2 = palette2_default;
			const _component_bi_grid_fill = grid_fill_default;
			const _component_bi_file_earmark_richtext = file_earmark_richtext_default;
			const _component_bi_ui_radios = ui_radios_default;
			const _component_bi_menu_button_wide_fill = menu_button_wide_fill_default;
			const _component_bi_magic = magic_default;
			const _component_bi_braces_asterisk = braces_asterisk_default;
			const _component_bi_tools = tools_default;
			const _component_bi_globe2 = globe2_default;
			const _component_RouterLink = resolveComponent("RouterLink");
			const _component_router_view = resolveComponent("router-view");
			_push(`<!--[--><nav class="sticky-lg-top bg-primary-subtle bg-gradient"><div class="container-xxl"><div class="d-flex align-items-center gap-2" style="height:3rem;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi fs-3" style="color:var(--bs-indigo);" viewBox="0 0 16 16"><path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"></path><path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"></path></svg><small>${ssrInterpolate(unref(version))}</small><div class="ms-auto"><div class="d-none d-lg-block"><div class="d-flex align-items-center gap-3"><a class="link-body-emphasis text-decoration-none fw-bold" href="/">中文文档</a><a class="link-body-emphasis text-decoration-none" href="https://getbootstrap.com/docs/5.3/examples/" target="_blank" rel="noopener">示例</a><a class="link-body-emphasis text-decoration-none" href="https://icons.getbootstrap.com/" target="_blank" rel="noopener">图标</a><a class="link-body-emphasis text-decoration-none" href="https://blog.getbootstrap.com/" target="_blank" rel="noopener">博客</a><div class="vr"></div><a class="link-body-emphasis text-decoration-none" title="github" href="https://github.com/twbs" target="_blank" rel="noopener">`);
			_push(ssrRenderComponent(_component_bi_github, null, null, _parent));
			_push(`</a><a class="link-body-emphasis text-decoration-none" title="twitter-x" href="https://x.com/getbootstrap" target="_blank" rel="noopener">`);
			_push(ssrRenderComponent(_component_bi_twitter_x, null, null, _parent));
			_push(`</a><a class="link-body-emphasis text-decoration-none" title="open collective" href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">`);
			_push(ssrRenderComponent(_component_bi_opencollective, null, null, _parent));
			_push(`</a><div class="vr"></div><div class="dropdown"><a data-bs-toggle="dropdown" class="link-body-emphasis text-decoration-none dropdown-toggle" title="布局大小" href="#" role="button" aria-expanded="false">`);
			_push(ssrRenderComponent(_component_bi_fonts, null, null, _parent));
			_push(`</a><ul class="dropdown-menu"><li><button class="dropdown-item" type="button"${ssrIncludeBooleanAttr(fontSize.value == "sm") ? " disabled" : ""}>小型布局</button></li><li><button class="dropdown-item" type="button"${ssrIncludeBooleanAttr(fontSize.value == "md") ? " disabled" : ""}>中型布局</button></li><li><button class="dropdown-item" type="button"${ssrIncludeBooleanAttr(fontSize.value == "lg") ? " disabled" : ""}>大型布局</button></li></ul></div>`);
			if (theme.value === "light") {
				_push(`<a href="#" class="link-body-emphasis text-decoration-none" title="切换到暗黑">`);
				_push(ssrRenderComponent(_component_bi_sun, null, null, _parent));
				_push(`</a>`);
			} else {
				_push(`<a href="#" class="link-body-emphasis text-decoration-none" title="切换到明亮">`);
				_push(ssrRenderComponent(_component_bi_moon, null, null, _parent));
				_push(`</a>`);
			}
			_push(`</div></div><div class="d-lg-none"><a href="#" class="link-body-emphasis fs-5" type="button">`);
			_push(ssrRenderComponent(_component_bi_three_dots, null, null, _parent));
			_push(`</a></div></div></div></div></nav><div class="container-xxl"><div class="bd-layout"><aside class="bd-sidebar"><nav><!--[-->`);
			ssrRenderList(unref(data_default).sidebar, (t) => {
				_push(`<div>`);
				if (t.pages) {
					_push(`<!--[--><div class="px-2 mb-1"><strong class="me-2">${ssrInterpolate(t["zh-CN"])}</strong>`);
					if (t.slug === "getting-started") _push(ssrRenderComponent(_component_bi_book_half, { style: { "color": "var(--bs-indigo)" } }, null, _parent));
					else if (t.slug === "customize") _push(ssrRenderComponent(_component_bi_palette2, { style: { "color": "var(--bs-pink)" } }, null, _parent));
					else if (t.slug === "layout") _push(ssrRenderComponent(_component_bi_grid_fill, { style: { "color": "var(--bs-teal)" } }, null, _parent));
					else if (t.slug === "content") _push(ssrRenderComponent(_component_bi_file_earmark_richtext, { style: { "color": "var(--bs-gray)" } }, null, _parent));
					else if (t.slug === "forms") _push(ssrRenderComponent(_component_bi_ui_radios, { style: { "color": "var(--bs-blue)" } }, null, _parent));
					else if (t.slug === "components") _push(ssrRenderComponent(_component_bi_menu_button_wide_fill, { style: { "color": "var(--bs-cyan)" } }, null, _parent));
					else if (t.slug === "helpers") _push(ssrRenderComponent(_component_bi_magic, { style: { "color": "var(--bs-orange)" } }, null, _parent));
					else if (t.slug === "utilities") _push(ssrRenderComponent(_component_bi_braces_asterisk, { style: { "color": "var(--bs-red)" } }, null, _parent));
					else if (t.slug === "extend") _push(ssrRenderComponent(_component_bi_tools, { style: { "color": "var(--bs-blue)" } }, null, _parent));
					else if (t.slug === "about") _push(ssrRenderComponent(_component_bi_globe2, { style: { "color": "var(--bs-indigo)" } }, null, _parent));
					else _push(`<!---->`);
					_push(`</div><ul><!--[-->`);
					ssrRenderList(t.pages, (tt) => {
						_push(`<li>`);
						_push(ssrRenderComponent(_component_RouterLink, {
							to: `/${t.slug}/${tt.slug}`,
							class: "bd-sidebar-link",
							"exact-active-class": "active"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span class="small"${_scopeId}>${ssrInterpolate(tt["zh-CN"])} <small${_scopeId}>${ssrInterpolate(tt.title)}</small></span>`);
								else return [createVNode("span", { class: "small" }, [createTextVNode(toDisplayString(tt["zh-CN"]) + " ", 1), createVNode("small", null, toDisplayString(tt.title), 1)])];
							}),
							_: 2
						}, _parent));
						_push(`</li>`);
					});
					_push(`<!--]--></ul><!--]-->`);
				} else {
					_push(`<!--[--><hr>`);
					_push(ssrRenderComponent(_component_RouterLink, {
						to: `/${t.slug}`,
						class: "bd-sidebar-link",
						"exact-active-class": "active"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<span class="small"${_scopeId}>${ssrInterpolate(t["zh-CN"])} <small${_scopeId}>${ssrInterpolate(t.title)}</small></span>`);
							else return [createVNode("span", { class: "small" }, [createTextVNode(toDisplayString(t["zh-CN"]) + " ", 1), createVNode("small", null, toDisplayString(t.title), 1)])];
						}),
						_: 2
					}, _parent));
					_push(`<!--]-->`);
				}
				_push(`</div>`);
			});
			_push(`<!--]--></nav></aside><main class="bd-main">`);
			_push(ssrRenderComponent(_component_router_view, null, null, _parent));
			_push(`</main></div></div><!--]-->`);
		};
	}
};
var _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
// src/components/Example.vue
var _sfc_main$12 = {
	__name: "Example",
	__ssrInlineRender: true,
	props: {
		addStackblitzJs: {
			type: Boolean,
			default: false
		},
		code: {
			type: String,
			default: null
		},
		lang: {
			type: String,
			default: "html"
		},
		showMarkup: {
			type: Boolean,
			default: true
		},
		class: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const props = __props;
		const isCopy = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			var _props$code;
			const _component_bi_lightning_charge_fill = lightning_charge_fill_default;
			const _component_BiCheckLg = check_lg_default;
			const _component_BiCopy = copy_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bd-code-snippet" }, _attrs))}><div class="${ssrRenderClass([{
				"rounded-bottom": !__props.showMarkup,
				[props.class]: props.class !== null
			}, "bd-example border rounded-top"])}">${(_props$code = props.code) !== null && _props$code !== void 0 ? _props$code : ""}</div>`);
			if (props.showMarkup) {
				_push(`<!--[--><div class="d-flex align-items-center bg-body-tertiary px-3 py-2 border"><small class="font-monospace text-body-secondary text-uppercase">${ssrInterpolate(props.lang)}</small><div class="ms-auto"><a${ssrRenderAttr("data-sb-js-snippet", props.addStackblitzJs ? true : void 0)} role="button" class="text-body me-3" title="Edit" aria-label="Edit">`);
				_push(ssrRenderComponent(_component_bi_lightning_charge_fill, null, null, _parent));
				_push(`</a>`);
				if (isCopy.value) _push(ssrRenderComponent(_component_BiCheckLg, { class: "text-success" }, null, _parent));
				else {
					_push(`<a role="button" class="text-body" title="Copy" aria-label="Copy">`);
					_push(ssrRenderComponent(_component_BiCopy, null, null, _parent));
					_push(`</a>`);
				}
				_push(`</div></div>`);
				_push(ssrRenderComponent(_sfc_main$14, {
					code: props.code,
					lang: props.lang
				}, null, _parent));
				_push(`<!--]-->`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
};
var _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Example.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
// src/components/ExampleCustom.vue
var _sfc_main$11 = {
	__name: "ExampleCustom",
	__ssrInlineRender: true,
	props: {
		addStackblitzJs: {
			type: Boolean,
			default: false
		},
		code: {
			type: String,
			default: null
		},
		lang: {
			type: String,
			default: "html"
		},
		class: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const props = __props;
		const isCopy = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_bi_lightning_charge_fill = lightning_charge_fill_default;
			const _component_BiCheckLg = check_lg_default;
			const _component_BiCopy = copy_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bd-code-snippet" }, _attrs))}><div class="${ssrRenderClass([props.class, "bd-example border rounded-top"])}">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div><div class="d-flex align-items-center bg-body-tertiary px-3 py-2 border"><small class="font-monospace text-body-secondary text-uppercase">${ssrInterpolate(props.lang)}</small><div class="ms-auto"><a${ssrRenderAttr("data-sb-js-snippet", props.addStackblitzJs ? true : void 0)} role="button" class="text-body me-3" title="Edit" aria-label="Edit">`);
			_push(ssrRenderComponent(_component_bi_lightning_charge_fill, null, null, _parent));
			_push(`</a>`);
			if (isCopy.value) _push(ssrRenderComponent(_component_BiCheckLg, { class: "text-success" }, null, _parent));
			else {
				_push(`<a role="button" class="text-body" title="Copy" aria-label="Copy">`);
				_push(ssrRenderComponent(_component_BiCopy, null, null, _parent));
				_push(`</a>`);
			}
			_push(`</div></div>`);
			_push(ssrRenderComponent(_sfc_main$14, {
				code: props.code,
				lang: props.lang
			}, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ExampleCustom.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
// src/components/AddedIn.vue
var _sfc_main$10 = {
	__name: "AddedIn",
	__ssrInlineRender: true,
	props: { version: {
		type: String,
		default: null
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<small${ssrRenderAttrs(mergeProps({ class: "d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2" }, _attrs))}>Added in v${ssrInterpolate(props.version)}</small>`);
		};
	}
};
var _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AddedIn.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var scss_default = {
	"accordion-variables": "$accordion-padding-y:                     1rem !default;\n$accordion-padding-x:                     1.25rem !default;\n$accordion-color:                         var(--#{$prefix}body-color) !default;\n$accordion-bg:                            var(--#{$prefix}body-bg) !default;\n$accordion-border-width:                  var(--#{$prefix}border-width) !default;\n$accordion-border-color:                  var(--#{$prefix}border-color) !default;\n$accordion-border-radius:                 var(--#{$prefix}border-radius) !default;\n$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width) !default;\n\n$accordion-body-padding-y:                $accordion-padding-y !default;\n$accordion-body-padding-x:                $accordion-padding-x !default;\n\n$accordion-button-padding-y:              $accordion-padding-y !default;\n$accordion-button-padding-x:              $accordion-padding-x !default;\n$accordion-button-color:                  var(--#{$prefix}body-color) !default;\n$accordion-button-bg:                     var(--#{$prefix}accordion-bg) !default;\n$accordion-transition:                    $btn-transition, border-radius .15s ease !default;\n$accordion-button-active-bg:              var(--#{$prefix}primary-bg-subtle) !default;\n$accordion-button-active-color:           var(--#{$prefix}primary-text-emphasis) !default;\n\n// fusv-disable\n$accordion-button-focus-border-color:     $input-focus-border-color !default; // Deprecated in v5.3.3\n// fusv-enable\n$accordion-button-focus-box-shadow:       $btn-focus-box-shadow !default;\n\n$accordion-icon-width:                    1.25rem !default;\n$accordion-icon-color:                    $body-color !default;\n$accordion-icon-active-color:             $primary-text-emphasis !default;\n$accordion-icon-transition:               transform .2s ease-in-out !default;\n$accordion-icon-transform:                rotate(-180deg) !default;\n\n$accordion-button-icon:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-color}' stroke-linecap='round' stroke-linejoin='round'><path d='m2 5 6 6 6-6'/></svg>\") !default;\n$accordion-button-active-icon:  url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-active-color}' stroke-linecap='round' stroke-linejoin='round'><path d='m2 5 6 6 6-6'/></svg>\") !default;",
	"alert-css-vars": "--#{$prefix}alert-bg: transparent;\n--#{$prefix}alert-padding-x: #{$alert-padding-x};\n--#{$prefix}alert-padding-y: #{$alert-padding-y};\n--#{$prefix}alert-margin-bottom: #{$alert-margin-bottom};\n--#{$prefix}alert-color: inherit;\n--#{$prefix}alert-border-color: transparent;\n--#{$prefix}alert-border: #{$alert-border-width} solid var(--#{$prefix}alert-border-color);\n--#{$prefix}alert-border-radius: #{$alert-border-radius};\n--#{$prefix}alert-link-color: inherit;",
	"alert-modifiers": "// Generate contextual modifier classes for colorizing the alert\n@each $state in map-keys($theme-colors) {\n  .alert-#{$state} {\n  --#{$prefix}alert-color: var(--#{$prefix}#{$state}-text-emphasis);\n  --#{$prefix}alert-bg: var(--#{$prefix}#{$state}-bg-subtle);\n  --#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);\n  --#{$prefix}alert-link-color: var(--#{$prefix}#{$state}-text-emphasis);\n  }\n}",
	"alert-variables": "$alert-padding-y:               $spacer !default;\n$alert-padding-x:               $spacer !default;\n$alert-margin-bottom:           1rem !default;\n$alert-border-radius:           var(--#{$prefix}border-radius) !default;\n$alert-link-font-weight:        $font-weight-bold !default;\n$alert-border-width:            var(--#{$prefix}border-width) !default;\n$alert-dismissible-padding-r:   $alert-padding-x * 3 !default; // 3x covers width of x plus default padding on either side",
	"alert-variant-mixin": "@mixin alert-variant($background, $border, $color) {\n--#{$prefix}alert-color: #{$color};\n--#{$prefix}alert-bg: #{$background};\n--#{$prefix}alert-border-color: #{$border};\n--#{$prefix}alert-link-color: #{shade-color($color, 20%)};\n\n  @if $enable-gradients {\n    background-image: var(--#{$prefix}gradient);\n  }\n\n  .alert-link {\n    color: var(--#{$prefix}alert-link-color);\n  }\n}",
	"aspect-ratios": "$aspect-ratios: (\n  \"1x1\": 100%,\n  \"4x3\": calc(3 / 4 * 100%),\n  \"16x9\": calc(9 / 16 * 100%),\n  \"21x9\": calc(9 / 21 * 100%)\n) !default;",
	"badge-css-vars": "--#{$prefix}badge-padding-x: #{$badge-padding-x};\n--#{$prefix}badge-padding-y: #{$badge-padding-y};\n  @include rfs($badge-font-size, --#{$prefix}badge-font-size);\n--#{$prefix}badge-font-weight: #{$badge-font-weight};\n--#{$prefix}badge-color: #{$badge-color};\n--#{$prefix}badge-border-radius: #{$badge-border-radius};",
	"badge-variables": "$badge-font-size:                   .75em !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-color:                       $white !default;\n$badge-padding-y:                   .35em !default;\n$badge-padding-x:                   .65em !default;\n$badge-border-radius:               var(--#{$prefix}border-radius) !default;",
	"border-radius-mixins": "@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: valid-radius($radius);\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}",
	"border-radius-variables": "$border-radius:               .375rem !default;\n$border-radius-sm:            .25rem !default;\n$border-radius-lg:            .5rem !default;\n$border-radius-xl:            1rem !default;\n$border-radius-xxl:           2rem !default;\n$border-radius-pill:          50rem !default;",
	"border-variables": "$border-width:                1px !default;\n$border-widths: (\n  1: 1px,\n  2: 2px,\n  3: 3px,\n  4: 4px,\n  5: 5px\n) !default;\n$border-style:                solid !default;\n$border-color:                $gray-300 !default;\n$border-color-translucent:    rgba($black, .175) !default;",
	"box-shadow-variables": "$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n$box-shadow-inset:            inset 0 1px 2px rgba($black, .075) !default;",
	"breadcrumb-css-vars": "--#{$prefix}breadcrumb-padding-x: #{$breadcrumb-padding-x};\n--#{$prefix}breadcrumb-padding-y: #{$breadcrumb-padding-y};\n--#{$prefix}breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};\n  @include rfs($breadcrumb-font-size, --#{$prefix}breadcrumb-font-size);\n--#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};\n--#{$prefix}breadcrumb-border-radius: #{$breadcrumb-border-radius};\n--#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};\n--#{$prefix}breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};\n--#{$prefix}breadcrumb-item-active-color: #{$breadcrumb-active-color};",
	"breadcrumb-variables": "$breadcrumb-font-size:              null !default;\n$breadcrumb-padding-y:              0 !default;\n$breadcrumb-padding-x:              0 !default;\n$breadcrumb-item-padding-x:         .5rem !default;\n$breadcrumb-margin-bottom:          1rem !default;\n$breadcrumb-bg:                     null !default;\n$breadcrumb-divider-color:          var(--#{$prefix}secondary-color) !default;\n$breadcrumb-active-color:           var(--#{$prefix}secondary-color) !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n$breadcrumb-divider-flipped:        $breadcrumb-divider !default;\n$breadcrumb-border-radius:          null !default;",
	"btn-css-vars": "--#{$prefix}btn-padding-x: #{$btn-padding-x};\n--#{$prefix}btn-padding-y: #{$btn-padding-y};\n--#{$prefix}btn-font-family: #{$btn-font-family};\n  @include rfs($btn-font-size, --#{$prefix}btn-font-size);\n--#{$prefix}btn-font-weight: #{$btn-font-weight};\n--#{$prefix}btn-line-height: #{$btn-line-height};\n--#{$prefix}btn-color: #{$btn-color};\n--#{$prefix}btn-bg: transparent;\n--#{$prefix}btn-border-width: #{$btn-border-width};\n--#{$prefix}btn-border-color: transparent;\n--#{$prefix}btn-border-radius: #{$btn-border-radius};\n--#{$prefix}btn-hover-border-color: transparent;\n--#{$prefix}btn-box-shadow: #{$btn-box-shadow};\n--#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};\n--#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), .5);",
	"btn-css-vars-example": ".btn-bd-primary {\n  --bs-btn-font-weight: 600;\n  --bs-btn-color: var(--bs-white);\n  --bs-btn-bg: var(--bd-violet-bg);\n  --bs-btn-border-color: var(--bd-violet-bg);\n  --bs-btn-hover-color: var(--bs-white);\n  --bs-btn-hover-bg: #{shade-color($bd-violet, 10%)};\n  --bs-btn-hover-border-color: #{shade-color($bd-violet, 10%)};\n  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n  --bs-btn-active-color: var(--bs-btn-hover-color);\n  --bs-btn-active-bg: #{shade-color($bd-violet, 20%)};\n  --bs-btn-active-border-color: #{shade-color($bd-violet, 20%)};\n}",
	"btn-outline-variant-mixin": "@mixin button-outline-variant(\n  $color,\n  $color-hover: color-contrast($color),\n  $active-background: $color,\n  $active-border: $color,\n  $active-color: color-contrast($active-background)\n) {\n--#{$prefix}btn-color: #{$color};\n--#{$prefix}btn-border-color: #{$color};\n--#{$prefix}btn-hover-color: #{$color-hover};\n--#{$prefix}btn-hover-bg: #{$active-background};\n--#{$prefix}btn-hover-border-color: #{$active-border};\n--#{$prefix}btn-focus-shadow-rgb: #{to-rgb($color)};\n--#{$prefix}btn-active-color: #{$active-color};\n--#{$prefix}btn-active-bg: #{$active-background};\n--#{$prefix}btn-active-border-color: #{$active-border};\n--#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};\n--#{$prefix}btn-disabled-color: #{$color};\n--#{$prefix}btn-disabled-bg: transparent;\n--#{$prefix}btn-disabled-border-color: #{$color};\n--#{$prefix}gradient: none;\n}",
	"btn-size-mixin": "@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {\n--#{$prefix}btn-padding-y: #{$padding-y};\n--#{$prefix}btn-padding-x: #{$padding-x};\n  @include rfs($font-size, --#{$prefix}btn-font-size);\n--#{$prefix}btn-border-radius: #{$border-radius};\n}",
	"btn-variables": "$btn-color:                   var(--#{$prefix}body-color) !default;\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-color:              var(--#{$prefix}link-color) !default;\n$btn-link-hover-color:        var(--#{$prefix}link-hover-color) !default;\n$btn-link-disabled-color:     $gray-600 !default;\n$btn-link-focus-shadow-rgb:   to-rgb(mix(color-contrast($link-color), $link-color, 15%)) !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           var(--#{$prefix}border-radius) !default;\n$btn-border-radius-sm:        var(--#{$prefix}border-radius-sm) !default;\n$btn-border-radius-lg:        var(--#{$prefix}border-radius-lg) !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$btn-hover-bg-shade-amount:       15% !default;\n$btn-hover-bg-tint-amount:        15% !default;\n$btn-hover-border-shade-amount:   20% !default;\n$btn-hover-border-tint-amount:    10% !default;\n$btn-active-bg-shade-amount:      20% !default;\n$btn-active-bg-tint-amount:       20% !default;\n$btn-active-border-shade-amount:  25% !default;\n$btn-active-border-tint-amount:   10% !default;",
	"btn-variant-loops": "@each $color, $value in $theme-colors {\n  .btn-#{$color} {\n    @if $color == \"light\" {\n      @include button-variant(\n        $value,\n        $value,\n        $hover-background: shade-color($value, $btn-hover-bg-shade-amount),\n        $hover-border: shade-color($value, $btn-hover-border-shade-amount),\n        $active-background: shade-color($value, $btn-active-bg-shade-amount),\n        $active-border: shade-color($value, $btn-active-border-shade-amount)\n      );\n    } @else if $color == \"dark\" {\n      @include button-variant(\n        $value,\n        $value,\n        $hover-background: tint-color($value, $btn-hover-bg-tint-amount),\n        $hover-border: tint-color($value, $btn-hover-border-tint-amount),\n        $active-background: tint-color($value, $btn-active-bg-tint-amount),\n        $active-border: tint-color($value, $btn-active-border-tint-amount)\n      );\n    } @else {\n      @include button-variant($value, $value);\n    }\n  }\n}\n\n@each $color, $value in $theme-colors {\n  .btn-outline-#{$color} {\n    @include button-outline-variant($value);\n  }\n}",
	"btn-variant-mixin": "@mixin button-variant(\n  $background,\n  $border,\n  $color: color-contrast($background),\n  $hover-background: if($color == $color-contrast-light, shade-color($background, $btn-hover-bg-shade-amount), tint-color($background, $btn-hover-bg-tint-amount)),\n  $hover-border: if($color == $color-contrast-light, shade-color($border, $btn-hover-border-shade-amount), tint-color($border, $btn-hover-border-tint-amount)),\n  $hover-color: color-contrast($hover-background),\n  $active-background: if($color == $color-contrast-light, shade-color($background, $btn-active-bg-shade-amount), tint-color($background, $btn-active-bg-tint-amount)),\n  $active-border: if($color == $color-contrast-light, shade-color($border, $btn-active-border-shade-amount), tint-color($border, $btn-active-border-tint-amount)),\n  $active-color: color-contrast($active-background),\n  $disabled-background: $background,\n  $disabled-border: $border,\n  $disabled-color: color-contrast($disabled-background)\n) {\n--#{$prefix}btn-color: #{$color};\n--#{$prefix}btn-bg: #{$background};\n--#{$prefix}btn-border-color: #{$border};\n--#{$prefix}btn-hover-color: #{$hover-color};\n--#{$prefix}btn-hover-bg: #{$hover-background};\n--#{$prefix}btn-hover-border-color: #{$hover-border};\n--#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix($color, $border, 15%))};\n--#{$prefix}btn-active-color: #{$active-color};\n--#{$prefix}btn-active-bg: #{$active-background};\n--#{$prefix}btn-active-border-color: #{$active-border};\n--#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};\n--#{$prefix}btn-disabled-color: #{$disabled-color};\n--#{$prefix}btn-disabled-bg: #{$disabled-background};\n--#{$prefix}btn-disabled-border-color: #{$disabled-border};\n}",
	"card-css-vars": "--#{$prefix}card-spacer-y: #{$card-spacer-y};\n--#{$prefix}card-spacer-x: #{$card-spacer-x};\n--#{$prefix}card-title-spacer-y: #{$card-title-spacer-y};\n--#{$prefix}card-title-color: #{$card-title-color};\n--#{$prefix}card-subtitle-color: #{$card-subtitle-color};\n--#{$prefix}card-border-width: #{$card-border-width};\n--#{$prefix}card-border-color: #{$card-border-color};\n--#{$prefix}card-border-radius: #{$card-border-radius};\n--#{$prefix}card-box-shadow: #{$card-box-shadow};\n--#{$prefix}card-inner-border-radius: #{$card-inner-border-radius};\n--#{$prefix}card-cap-padding-y: #{$card-cap-padding-y};\n--#{$prefix}card-cap-padding-x: #{$card-cap-padding-x};\n--#{$prefix}card-cap-bg: #{$card-cap-bg};\n--#{$prefix}card-cap-color: #{$card-cap-color};\n--#{$prefix}card-height: #{$card-height};\n--#{$prefix}card-color: #{$card-color};\n--#{$prefix}card-bg: #{$card-bg};\n--#{$prefix}card-img-overlay-padding: #{$card-img-overlay-padding};\n--#{$prefix}card-group-margin: #{$card-group-margin};",
	"card-variables": "$card-spacer-y:                     $spacer !default;\n$card-spacer-x:                     $spacer !default;\n$card-title-spacer-y:               $spacer * .5 !default;\n$card-title-color:                  null !default;\n$card-subtitle-color:               null !default;\n$card-border-width:                 var(--#{$prefix}border-width) !default;\n$card-border-color:                 var(--#{$prefix}border-color-translucent) !default;\n$card-border-radius:                var(--#{$prefix}border-radius) !default;\n$card-box-shadow:                   null !default;\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\n$card-cap-padding-y:                $card-spacer-y * .5 !default;\n$card-cap-padding-x:                $card-spacer-x !default;\n$card-cap-bg:                       rgba(var(--#{$prefix}body-color-rgb), .03) !default;\n$card-cap-color:                    null !default;\n$card-height:                       null !default;\n$card-color:                        null !default;\n$card-bg:                           var(--#{$prefix}body-bg) !default;\n$card-img-overlay-padding:          $spacer !default;\n$card-group-margin:                 $grid-gutter-width * .5 !default;",
	"caret-mixins": "@mixin caret-down($width: $caret-width) {\n  border-top: $width solid;\n  border-right: $width solid transparent;\n  border-bottom: 0;\n  border-left: $width solid transparent;\n}\n\n@mixin caret-up($width: $caret-width) {\n  border-top: 0;\n  border-right: $width solid transparent;\n  border-bottom: $width solid;\n  border-left: $width solid transparent;\n}\n\n@mixin caret-end($width: $caret-width) {\n  border-top: $width solid transparent;\n  border-right: 0;\n  border-bottom: $width solid transparent;\n  border-left: $width solid;\n}\n\n@mixin caret-start($width: $caret-width) {\n  border-top: $width solid transparent;\n  border-right: $width solid;\n  border-bottom: $width solid transparent;\n}\n\n@mixin caret(\n  $direction: down,\n  $width: $caret-width,\n  $spacing: $caret-spacing,\n  $vertical-align: $caret-vertical-align\n) {\n  @if $enable-caret {\n    &::after {\n      display: inline-block;\n      margin-left: $spacing;\n      vertical-align: $vertical-align;\n      content: \"\";\n      @if $direction == down {\n        @include caret-down($width);\n      } @else if $direction == up {\n        @include caret-up($width);\n      } @else if $direction == end {\n        @include caret-end($width);\n      }\n    }\n\n    @if $direction == start {\n      &::after {\n        display: none;\n      }\n\n      &::before {\n        display: inline-block;\n        margin-right: $spacing;\n        vertical-align: $vertical-align;\n        content: \"\";\n        @include caret-start($width);\n      }\n    }\n\n    &:empty::after {\n      margin-left: 0;\n    }\n  }\n}",
	"caret-variables": "$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;",
	"carousel-dark-variables": "$carousel-dark-indicator-active-bg:  $black !default; // Deprecated in v5.3.4\n$carousel-dark-caption-color:        $black !default; // Deprecated in v5.3.4\n$carousel-dark-control-icon-filter:  invert(1) grayscale(100) !default; // Deprecated in v5.3.4",
	"carousel-variables": "$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n$carousel-control-icon-filter:       null !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-opacity:         .5 !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-active-opacity:  1 !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n$carousel-caption-padding-y:         1.25rem !default;\n$carousel-caption-spacer:            1.25rem !default;\n\n$carousel-control-icon-width:        2rem !default;\n\n$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/></svg>\") !default;\n$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/></svg>\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)",
	clearfix: "@mixin clearfix() {\n  &::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n}",
	"close-css-vars": "--#{$prefix}btn-close-color: #{$btn-close-color};\n--#{$prefix}btn-close-bg: #{ escape-svg($btn-close-bg) };\n--#{$prefix}btn-close-opacity: #{$btn-close-opacity};\n--#{$prefix}btn-close-hover-opacity: #{$btn-close-hover-opacity};\n--#{$prefix}btn-close-focus-shadow: #{$btn-close-focus-shadow};\n--#{$prefix}btn-close-focus-opacity: #{$btn-close-focus-opacity};\n--#{$prefix}btn-close-disabled-opacity: #{$btn-close-disabled-opacity};",
	"close-variables": "$btn-close-width:            1em !default;\n$btn-close-height:           $btn-close-width !default;\n$btn-close-padding-x:        .25em !default;\n$btn-close-padding-y:        $btn-close-padding-x !default;\n$btn-close-color:            $black !default;\n$btn-close-bg:               url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/></svg>\") !default;\n$btn-close-focus-shadow:     $focus-ring-box-shadow !default;\n$btn-close-opacity:          .5 !default;\n$btn-close-hover-opacity:    .75 !default;\n$btn-close-focus-opacity:    1 !default;\n$btn-close-disabled-opacity: .25 !default;\n$btn-close-filter:           null !default;\n$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%) !default; // Deprecated in v5.3.4",
	"collapse-classes": ".collapse {\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  @include transition($transition-collapse);\n\n  &.collapse-horizontal {\n    width: 0;\n    height: auto;\n    @include transition($transition-collapse-width);\n  }\n}",
	"collapse-transition": "$transition-collapse:         height .35s ease !default;\n$transition-collapse-width:   width .35s ease !default;",
	"color-functions": "// Tint a color: mix a color with white\n@function tint-color($color, $weight) {\n  @return mix(white, $color, $weight);\n}\n\n// Shade a color: mix a color with black\n@function shade-color($color, $weight) {\n  @return mix(black, $color, $weight);\n}\n\n// Shade the color if the weight is positive, else tint it\n@function shift-color($color, $weight) {\n  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));\n}",
	"color-mode-mixin": "@mixin color-mode($mode: light, $root: false) {\n  @if $color-mode-type == \"media-query\" {\n    @if $root == true {\n      @media (prefers-color-scheme: $mode) {\n        :root {\n          @content;\n        }\n      }\n    } @else {\n      @media (prefers-color-scheme: $mode) {\n        @content;\n      }\n    }\n  } @else {\n    [data-bs-theme=\"#{$mode}\"] {\n      @content;\n    }\n  }\n}",
	"colors-map": "$colors: (\n  \"blue\":       $blue,\n  \"indigo\":     $indigo,\n  \"purple\":     $purple,\n  \"pink\":       $pink,\n  \"red\":        $red,\n  \"orange\":     $orange,\n  \"yellow\":     $yellow,\n  \"green\":      $green,\n  \"teal\":       $teal,\n  \"cyan\":       $cyan,\n  \"black\":      $black,\n  \"white\":      $white,\n  \"gray\":       $gray-600,\n  \"gray-dark\":  $gray-800\n) !default;",
	"color-variables": "$blue:    #0d6efd !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #d63384 !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #198754 !default;\n$teal:    #20c997 !default;\n$cyan:    #0dcaf0 !default;",
	"container-max-widths": "$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px,\n  xxl: 1320px\n) !default;",
	"custom-color-mode": "[data-bs-theme=\"blue\"] {\n  --bs-body-color: var(--bs-white);\n  --bs-body-color-rgb: #{to-rgb($white)};\n  --bs-body-bg: var(--bs-blue);\n  --bs-body-bg-rgb: #{to-rgb($blue)};\n  --bs-tertiary-bg: #{$blue-600};\n\n  .dropdown-menu {\n    --bs-dropdown-bg: #{mix($blue-500, $blue-600)};\n    --bs-dropdown-link-active-bg: #{$blue-700};\n  }\n\n  .btn-secondary {\n    --bs-btn-bg: #{mix($gray-600, $blue-400, .5)};\n    --bs-btn-border-color: #{rgba($white, .25)};\n    --bs-btn-hover-bg: #{darken(mix($gray-600, $blue-400, .5), 5%)};\n    --bs-btn-hover-border-color: #{rgba($white, .25)};\n    --bs-btn-active-bg: #{darken(mix($gray-600, $blue-400, .5), 10%)};\n    --bs-btn-active-border-color: #{rgba($white, .5)};\n    --bs-btn-focus-border-color: #{rgba($white, .5)};\n    --bs-btn-focus-box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .2);\n  }\n}",
	"custom-popovers": ".custom-popover {\n  --bs-popover-max-width: 200px;\n  --bs-popover-border-color: var(--bd-violet-bg);\n  --bs-popover-header-bg: var(--bd-violet-bg);\n  --bs-popover-header-color: var(--bs-white);\n  --bs-popover-body-padding-x: 1rem;\n  --bs-popover-body-padding-y: .5rem;\n}",
	"custom-tooltip": ".custom-tooltip {\n  --bs-tooltip-bg: var(--bd-violet-bg);\n  --bs-tooltip-color: var(--bs-white);\n}",
	"display-headings": "$display-font-sizes: (\n  1: 5rem,\n  2: 4.5rem,\n  3: 4rem,\n  4: 3.5rem,\n  5: 3rem,\n  6: 2.5rem\n) !default;\n\n$display-font-family: null !default;\n$display-font-style:  null !default;\n$display-font-weight: 300 !default;\n$display-line-height: $headings-line-height !default;",
	"dropdown-css-vars": "--#{$prefix}dropdown-zindex: #{$zindex-dropdown};\n--#{$prefix}dropdown-min-width: #{$dropdown-min-width};\n--#{$prefix}dropdown-padding-x: #{$dropdown-padding-x};\n--#{$prefix}dropdown-padding-y: #{$dropdown-padding-y};\n--#{$prefix}dropdown-spacer: #{$dropdown-spacer};\n  @include rfs($dropdown-font-size, --#{$prefix}dropdown-font-size);\n--#{$prefix}dropdown-color: #{$dropdown-color};\n--#{$prefix}dropdown-bg: #{$dropdown-bg};\n--#{$prefix}dropdown-border-color: #{$dropdown-border-color};\n--#{$prefix}dropdown-border-radius: #{$dropdown-border-radius};\n--#{$prefix}dropdown-border-width: #{$dropdown-border-width};\n--#{$prefix}dropdown-inner-border-radius: #{$dropdown-inner-border-radius};\n--#{$prefix}dropdown-divider-bg: #{$dropdown-divider-bg};\n--#{$prefix}dropdown-divider-margin-y: #{$dropdown-divider-margin-y};\n--#{$prefix}dropdown-box-shadow: #{$dropdown-box-shadow};\n--#{$prefix}dropdown-link-color: #{$dropdown-link-color};\n--#{$prefix}dropdown-link-hover-color: #{$dropdown-link-hover-color};\n--#{$prefix}dropdown-link-hover-bg: #{$dropdown-link-hover-bg};\n--#{$prefix}dropdown-link-active-color: #{$dropdown-link-active-color};\n--#{$prefix}dropdown-link-active-bg: #{$dropdown-link-active-bg};\n--#{$prefix}dropdown-link-disabled-color: #{$dropdown-link-disabled-color};\n--#{$prefix}dropdown-item-padding-x: #{$dropdown-item-padding-x};\n--#{$prefix}dropdown-item-padding-y: #{$dropdown-item-padding-y};\n--#{$prefix}dropdown-header-color: #{$dropdown-header-color};\n--#{$prefix}dropdown-header-padding-x: #{$dropdown-header-padding-x};\n--#{$prefix}dropdown-header-padding-y: #{$dropdown-header-padding-y};",
	"dropdown-dark-css-vars": "--#{$prefix}dropdown-color: #{$dropdown-dark-color};\n--#{$prefix}dropdown-bg: #{$dropdown-dark-bg};\n--#{$prefix}dropdown-border-color: #{$dropdown-dark-border-color};\n--#{$prefix}dropdown-box-shadow: #{$dropdown-dark-box-shadow};\n--#{$prefix}dropdown-link-color: #{$dropdown-dark-link-color};\n--#{$prefix}dropdown-link-hover-color: #{$dropdown-dark-link-hover-color};\n--#{$prefix}dropdown-divider-bg: #{$dropdown-dark-divider-bg};\n--#{$prefix}dropdown-link-hover-bg: #{$dropdown-dark-link-hover-bg};\n--#{$prefix}dropdown-link-active-color: #{$dropdown-dark-link-active-color};\n--#{$prefix}dropdown-link-active-bg: #{$dropdown-dark-link-active-bg};\n--#{$prefix}dropdown-link-disabled-color: #{$dropdown-dark-link-disabled-color};\n--#{$prefix}dropdown-header-color: #{$dropdown-dark-header-color};",
	"dropdown-dark-variables": "$dropdown-dark-color:               $gray-300 !default;\n$dropdown-dark-bg:                  $gray-800 !default;\n$dropdown-dark-border-color:        $dropdown-border-color !default;\n$dropdown-dark-divider-bg:          $dropdown-divider-bg !default;\n$dropdown-dark-box-shadow:          null !default;\n$dropdown-dark-link-color:          $dropdown-dark-color !default;\n$dropdown-dark-link-hover-color:    $white !default;\n$dropdown-dark-link-hover-bg:       rgba($white, .15) !default;\n$dropdown-dark-link-active-color:   $dropdown-link-active-color !default;\n$dropdown-dark-link-active-bg:      $dropdown-link-active-bg !default;\n$dropdown-dark-link-disabled-color: $gray-500 !default;\n$dropdown-dark-header-color:        $gray-500 !default;",
	"dropdown-variables": "$dropdown-min-width:                10rem !default;\n$dropdown-padding-x:                0 !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    var(--#{$prefix}body-color) !default;\n$dropdown-bg:                       var(--#{$prefix}body-bg) !default;\n$dropdown-border-color:             var(--#{$prefix}border-color-translucent) !default;\n$dropdown-border-radius:            var(--#{$prefix}border-radius) !default;\n$dropdown-border-width:             var(--#{$prefix}border-width) !default;\n$dropdown-inner-border-radius:      calc(#{$dropdown-border-radius} - #{$dropdown-border-width}) !default; // stylelint-disable-line function-disallowed-list\n$dropdown-divider-bg:               $dropdown-border-color !default;\n$dropdown-divider-margin-y:         $spacer * .5 !default;\n$dropdown-box-shadow:               var(--#{$prefix}box-shadow) !default;\n\n$dropdown-link-color:               var(--#{$prefix}body-color) !default;\n$dropdown-link-hover-color:         $dropdown-link-color !default;\n$dropdown-link-hover-bg:            var(--#{$prefix}tertiary-bg) !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      var(--#{$prefix}tertiary-color) !default;\n\n$dropdown-item-padding-y:           $spacer * .25 !default;\n$dropdown-item-padding-x:           $spacer !default;\n\n$dropdown-header-color:             $gray-600 !default;\n$dropdown-header-padding-x:         $dropdown-item-padding-x !default;\n$dropdown-header-padding-y:         $dropdown-padding-y !default;\n// fusv-disable\n$dropdown-header-padding:           $dropdown-header-padding-y $dropdown-header-padding-x !default; // Deprecated in v5.2.0\n// fusv-enable",
	"figure-variables": "$figure-caption-font-size:          $small-font-size !default;\n$figure-caption-color:              var(--#{$prefix}secondary-color) !default;",
	"focus-ring-variables": "$focus-ring-width:      .25rem !default;\n$focus-ring-opacity:    .25 !default;\n$focus-ring-color:      rgba($primary, $focus-ring-opacity) !default;\n$focus-ring-blur:       0 !default;\n$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color !default;",
	"font-sizes": "$font-sizes: (\n  1: $h1-font-size,\n  2: $h2-font-size,\n  3: $h3-font-size,\n  4: $h4-font-size,\n  5: $h5-font-size,\n  6: $h6-font-size\n) !default;",
	"font-variables": "// stylelint-disable value-keyword-case\n$font-family-sans-serif:      system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n// stylelint-enable value-keyword-case\n$font-family-base:            var(--#{$prefix}font-sans-serif) !default;\n$font-family-code:            var(--#{$prefix}font-monospace) !default;\n\n// $font-size-root affects the value of `rem`, which is used for as well font sizes, paddings, and margins\n// $font-size-base affects the font size of the body text\n$font-size-root:              null !default;\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-sm:                $font-size-base * .875 !default;\n$font-size-lg:                $font-size-base * 1.25 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-medium:          500 !default;\n$font-weight-semibold:        600 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n\n$line-height-base:            1.5 !default;\n$line-height-sm:              1.25 !default;\n$line-height-lg:              2 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;",
	"form-check-variables": "$form-check-input-width:                  1em !default;\n$form-check-min-height:                   $font-size-base * $line-height-base !default;\n$form-check-padding-start:                $form-check-input-width + .5em !default;\n$form-check-margin-bottom:                .125rem !default;\n$form-check-label-color:                  null !default;\n$form-check-label-cursor:                 null !default;\n$form-check-transition:                   null !default;\n\n$form-check-input-active-filter:          brightness(90%) !default;\n\n$form-check-input-bg:                     $input-bg !default;\n$form-check-input-border:                 var(--#{$prefix}border-width) solid var(--#{$prefix}border-color) !default;\n$form-check-input-border-radius:          .25em !default;\n$form-check-radio-border-radius:          50% !default;\n$form-check-input-focus-border:           $input-focus-border-color !default;\n$form-check-input-focus-box-shadow:       $focus-ring-box-shadow !default;\n\n$form-check-input-checked-color:          $component-active-color !default;\n$form-check-input-checked-bg-color:       $component-active-bg !default;\n$form-check-input-checked-border-color:   $form-check-input-checked-bg-color !default;\n$form-check-input-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>\") !default;\n$form-check-radio-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>\") !default;\n\n$form-check-input-indeterminate-color:          $component-active-color !default;\n$form-check-input-indeterminate-bg-color:       $component-active-bg !default;\n$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color !default;\n$form-check-input-indeterminate-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>\") !default;\n\n$form-check-input-disabled-opacity:        .5 !default;\n$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity !default;\n$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity !default;\n\n$form-check-inline-margin-end:    1rem !default;",
	"form-feedback-variables": "$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $form-text-font-size !default;\n$form-feedback-font-style:          $form-text-font-style !default;\n$form-feedback-valid-color:         $success !default;\n$form-feedback-invalid-color:       $danger !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/></svg>\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>\") !default;",
	"form-file-variables": "$form-file-button-color:          $input-color !default;\n$form-file-button-bg:             var(--#{$prefix}tertiary-bg) !default;\n$form-file-button-hover-bg:       var(--#{$prefix}secondary-bg) !default;",
	"form-floating-variables": "$form-floating-height:                  add(3.5rem, $input-height-border) !default;\n$form-floating-line-height:             1.25 !default;\n$form-floating-padding-x:               $input-padding-x !default;\n$form-floating-padding-y:               1rem !default;\n$form-floating-input-padding-t:         1.625rem !default;\n$form-floating-input-padding-b:         .625rem !default;\n$form-floating-label-height:            1.5em !default;\n$form-floating-label-opacity:           .65 !default;\n$form-floating-label-transform:         scale(.85) translateY(-.5rem) translateX(.15rem) !default;\n$form-floating-label-disabled-color:    $gray-600 !default;\n$form-floating-transition:              opacity .1s ease-in-out, transform .1s ease-in-out !default;",
	"form-input-variables": "$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n\n$input-bg:                              var(--#{$prefix}body-bg) !default;\n$input-disabled-color:                  null !default;\n$input-disabled-bg:                     var(--#{$prefix}secondary-bg) !default;\n$input-disabled-border-color:           null !default;\n\n$input-color:                           var(--#{$prefix}body-color) !default;\n$input-border-color:                    var(--#{$prefix}border-color) !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      var(--#{$prefix}box-shadow-inset) !default;\n\n$input-border-radius:                   var(--#{$prefix}border-radius) !default;\n$input-border-radius-sm:                var(--#{$prefix}border-radius-sm) !default;\n$input-border-radius-lg:                var(--#{$prefix}border-radius-lg) !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              tint-color($component-active-bg, 50%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               var(--#{$prefix}secondary-color) !default;\n$input-plaintext-color:                 var(--#{$prefix}body-color) !default;\n\n$input-height-border:                   calc(#{$input-border-width} * 2) !default; // stylelint-disable-line function-disallowed-list\n\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5) !default;\n\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\n$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\n$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$form-color-width:                      3rem !default;",
	"form-label-variables": "$form-label-margin-bottom:              .5rem !default;\n$form-label-font-size:                  null !default;\n$form-label-font-style:                 null !default;\n$form-label-font-weight:                null !default;\n$form-label-color:                      null !default;",
	"form-range-variables": "$form-range-track-width:          100% !default;\n$form-range-track-height:         .5rem !default;\n$form-range-track-cursor:         pointer !default;\n$form-range-track-bg:             var(--#{$prefix}secondary-bg) !default;\n$form-range-track-border-radius:  1rem !default;\n$form-range-track-box-shadow:     var(--#{$prefix}box-shadow-inset) !default;\n\n$form-range-thumb-width:                   1rem !default;\n$form-range-thumb-height:                  $form-range-thumb-width !default;\n$form-range-thumb-bg:                      $component-active-bg !default;\n$form-range-thumb-border:                  0 !default;\n$form-range-thumb-border-radius:           1rem !default;\n$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in Edge\n$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%) !default;\n$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color) !default;\n$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;",
	"form-select-variables": "$form-select-padding-y:             $input-padding-y !default;\n$form-select-padding-x:             $input-padding-x !default;\n$form-select-font-family:           $input-font-family !default;\n$form-select-font-size:             $input-font-size !default;\n$form-select-indicator-padding:     $form-select-padding-x * 3 !default; // Extra padding for background-image\n$form-select-font-weight:           $input-font-weight !default;\n$form-select-line-height:           $input-line-height !default;\n$form-select-color:                 $input-color !default;\n$form-select-bg:                    $input-bg !default;\n$form-select-disabled-color:        null !default;\n$form-select-disabled-bg:           $input-disabled-bg !default;\n$form-select-disabled-border-color: $input-disabled-border-color !default;\n$form-select-bg-position:           right $form-select-padding-x center !default;\n$form-select-bg-size:               16px 12px !default; // In pixels because image dimensions\n$form-select-indicator-color:       $gray-800 !default;\n$form-select-indicator:             url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>\") !default;\n\n$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding !default;\n$form-select-feedback-icon-position:    center right $form-select-indicator-padding !default;\n$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half !default;\n\n$form-select-border-width:        $input-border-width !default;\n$form-select-border-color:        $input-border-color !default;\n$form-select-border-radius:       $input-border-radius !default;\n$form-select-box-shadow:          var(--#{$prefix}box-shadow-inset) !default;\n\n$form-select-focus-border-color:  $input-focus-border-color !default;\n$form-select-focus-width:         $input-focus-width !default;\n$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color !default;\n\n$form-select-padding-y-sm:        $input-padding-y-sm !default;\n$form-select-padding-x-sm:        $input-padding-x-sm !default;\n$form-select-font-size-sm:        $input-font-size-sm !default;\n$form-select-border-radius-sm:    $input-border-radius-sm !default;\n\n$form-select-padding-y-lg:        $input-padding-y-lg !default;\n$form-select-padding-x-lg:        $input-padding-x-lg !default;\n$form-select-font-size-lg:        $input-font-size-lg !default;\n$form-select-border-radius-lg:    $input-border-radius-lg !default;\n\n$form-select-transition:          $input-transition !default;",
	"form-switch-variables": "$form-switch-color:               rgba($black, .25) !default;\n$form-switch-width:               2em !default;\n$form-switch-padding-start:       $form-switch-width + .5em !default;\n$form-switch-bg-image:            url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>\") !default;\n$form-switch-border-radius:       $form-switch-width !default;\n$form-switch-transition:          background-position .15s ease-in-out !default;\n\n$form-switch-focus-color:         $input-focus-border-color !default;\n$form-switch-focus-bg-image:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>\") !default;\n\n$form-switch-checked-color:       $component-active-color !default;\n$form-switch-checked-bg-image:    url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>\") !default;\n$form-switch-checked-bg-position: right center !default;",
	"form-text-variables": "$form-text-margin-top:                  .25rem !default;\n$form-text-font-size:                   $small-font-size !default;\n$form-text-font-style:                  null !default;\n$form-text-font-weight:                 null !default;\n$form-text-color:                       var(--#{$prefix}secondary-color) !default;",
	"form-validation-colors": "$form-valid-color:                  $form-feedback-valid-color !default;\n$form-valid-border-color:           $form-feedback-valid-color !default;\n$form-invalid-color:                $form-feedback-invalid-color !default;\n$form-invalid-border-color:         $form-feedback-invalid-color !default;",
	"form-validation-colors-dark": "$form-valid-color-dark:             $green-300 !default;\n$form-valid-border-color-dark:      $green-300 !default;\n$form-invalid-color-dark:           $red-300 !default;\n$form-invalid-border-color-dark:    $red-300 !default;",
	"form-validation-mixins": "@mixin form-validation-state-selector($state) {\n  @if ($state == \"valid\" or $state == \"invalid\") {\n    .was-validated #{if(&, \"&\", \"\")}:#{$state},\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  } @else {\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  }\n}\n\n@mixin form-validation-state(\n  $state,\n  $color,\n  $icon,\n  $tooltip-color: color-contrast($color),\n  $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),\n  $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity),\n  $border-color: $color\n) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    font-style: $form-feedback-font-style;\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: $tooltip-color;\n    background-color: $tooltip-bg-color;\n    @include border-radius($form-feedback-tooltip-border-radius);\n  }\n\n  @include form-validation-state-selector($state) {\n    ~ .#{$state}-feedback,\n    ~ .#{$state}-tooltip {\n      display: block;\n    }\n  }\n\n  .form-control {\n    @include form-validation-state-selector($state) {\n      border-color: $border-color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: escape-svg($icon);\n        background-repeat: no-repeat;\n        background-position: right $input-height-inner-quarter center;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $border-color;\n        @if $enable-shadows {\n          @include box-shadow($input-box-shadow, $focus-box-shadow);\n        } @else {\n          // Avoid using mixin so we can pass custom focus shadow properly\n          box-shadow: $focus-box-shadow;\n        }\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .form-select {\n    @include form-validation-state-selector($state) {\n      border-color: $border-color;\n\n      @if $enable-validation-icons {\n        &:not([multiple]):not([size]),\n        &:not([multiple])[size=\"1\"] {\n        --#{$prefix}form-select-bg-icon: #{escape-svg($icon)};\n          padding-right: $form-select-feedback-icon-padding-end;\n          background-position: $form-select-bg-position, $form-select-feedback-icon-position;\n          background-size: $form-select-bg-size, $form-select-feedback-icon-size;\n        }\n      }\n\n      &:focus {\n        border-color: $border-color;\n        @if $enable-shadows {\n          @include box-shadow($form-select-box-shadow, $focus-box-shadow);\n        } @else {\n          // Avoid using mixin so we can pass custom focus shadow properly\n          box-shadow: $focus-box-shadow;\n        }\n      }\n    }\n  }\n\n  .form-control-color {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        width: add($form-color-width, $input-height-inner);\n      }\n    }\n  }\n\n  .form-check-input {\n    @include form-validation-state-selector($state) {\n      border-color: $border-color;\n\n      &:checked {\n        background-color: $color;\n      }\n\n      &:focus {\n        box-shadow: $focus-box-shadow;\n      }\n\n      ~ .form-check-label {\n        color: $color;\n      }\n    }\n  }\n  .form-check-inline .form-check-input {\n    ~ .#{$state}-feedback {\n      margin-left: .5em;\n    }\n  }\n\n  .input-group {\n    > .form-control:not(:focus),\n    > .form-select:not(:focus),\n    > .form-floating:not(:focus-within) {\n      @include form-validation-state-selector($state) {\n        @if $state == \"valid\" {\n          z-index: 3;\n        } @else if $state == \"invalid\" {\n          z-index: 4;\n        }\n      }\n    }\n  }\n}",
	"form-validation-states": "$form-validation-states: (\n  \"valid\": (\n    \"color\": var(--#{$prefix}form-valid-color),\n    \"icon\": $form-feedback-icon-valid,\n    \"tooltip-color\": #fff,\n    \"tooltip-bg-color\": var(--#{$prefix}success),\n    \"focus-box-shadow\": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}success-rgb), $input-btn-focus-color-opacity),\n    \"border-color\": var(--#{$prefix}form-valid-border-color),\n  ),\n  \"invalid\": (\n    \"color\": var(--#{$prefix}form-invalid-color),\n    \"icon\": $form-feedback-icon-invalid,\n    \"tooltip-color\": #fff,\n    \"tooltip-bg-color\": var(--#{$prefix}danger),\n    \"focus-box-shadow\": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}danger-rgb), $input-btn-focus-color-opacity),\n    \"border-color\": var(--#{$prefix}form-invalid-border-color),\n  )\n) !default;",
	"form-validation-states-loop": "@each $state, $data in $form-validation-states {\n  @include form-validation-state($state, $data...);\n}",
	"gradient-bg-mixin": "@mixin gradient-bg($color: null) {\n  background-color: $color;\n\n  @if $enable-gradients {\n    background-image: var(--#{$prefix}gradient);\n  }\n}",
	"gradient-mixins": "// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n}\n\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n  background-image: linear-gradient($deg, $start-color, $end-color);\n}\n\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n}\n\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}",
	"gray-colors-map": "$grays: (\n  \"100\": $gray-100,\n  \"200\": $gray-200,\n  \"300\": $gray-300,\n  \"400\": $gray-400,\n  \"500\": $gray-500,\n  \"600\": $gray-600,\n  \"700\": $gray-700,\n  \"800\": $gray-800,\n  \"900\": $gray-900\n) !default;",
	"gray-color-variables": "$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;",
	"grid-breakpoints": "$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px\n) !default;",
	"headings-variables": "$headings-margin-bottom:      $spacer * .5 !default;\n$headings-font-family:        null !default;\n$headings-font-style:         null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              inherit !default;",
	"icon-link-variables": "$icon-link-gap:               .375rem !default;\n$icon-link-underline-offset:  .25em !default;\n$icon-link-icon-size:         1em !default;\n$icon-link-icon-transition:   .2s ease-in-out transform !default;\n$icon-link-icon-transform:    translate3d(.25em, 0, 0) !default;",
	"import-stack": "// Configuration\n@import \"functions\";\n@import \"variables\";\n@import \"variables-dark\";\n@import \"maps\";\n@import \"mixins\";\n@import \"utilities\";\n\n// Layout & components\n@import \"root\";\n@import \"reboot\";\n@import \"type\";\n@import \"images\";\n@import \"containers\";\n@import \"grid\";\n@import \"tables\";\n@import \"forms\";\n@import \"buttons\";\n@import \"transitions\";\n@import \"dropdown\";\n@import \"button-group\";\n@import \"nav\";\n@import \"navbar\";\n@import \"card\";\n@import \"accordion\";\n@import \"breadcrumb\";\n@import \"pagination\";\n@import \"badge\";\n@import \"alert\";\n@import \"progress\";\n@import \"list-group\";\n@import \"close\";\n@import \"toasts\";\n@import \"modal\";\n@import \"tooltip\";\n@import \"popover\";\n@import \"carousel\";\n@import \"spinners\";\n@import \"offcanvas\";\n@import \"placeholders\";\n\n// Helpers\n@import \"helpers\";\n\n// Utilities\n@import \"utilities/api\";",
	"input-btn-variables": "$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:         $focus-ring-width !default;\n$input-btn-focus-color-opacity: $focus-ring-opacity !default;\n$input-btn-focus-color:         $focus-ring-color !default;\n$input-btn-focus-blur:          $focus-ring-blur !default;\n$input-btn-focus-box-shadow:    $focus-ring-box-shadow !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n\n$input-btn-border-width:      var(--#{$prefix}border-width) !default;",
	"input-group-variables": "$input-group-addon-padding-y:           $input-padding-y !default;\n$input-group-addon-padding-x:           $input-padding-x !default;\n$input-group-addon-font-weight:         $input-font-weight !default;\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  var(--#{$prefix}tertiary-bg) !default;\n$input-group-addon-border-color:        $input-border-color !default;",
	"list-group-css-vars": "--#{$prefix}list-group-color: #{$list-group-color};\n--#{$prefix}list-group-bg: #{$list-group-bg};\n--#{$prefix}list-group-border-color: #{$list-group-border-color};\n--#{$prefix}list-group-border-width: #{$list-group-border-width};\n--#{$prefix}list-group-border-radius: #{$list-group-border-radius};\n--#{$prefix}list-group-item-padding-x: #{$list-group-item-padding-x};\n--#{$prefix}list-group-item-padding-y: #{$list-group-item-padding-y};\n--#{$prefix}list-group-action-color: #{$list-group-action-color};\n--#{$prefix}list-group-action-hover-color: #{$list-group-action-hover-color};\n--#{$prefix}list-group-action-hover-bg: #{$list-group-hover-bg};\n--#{$prefix}list-group-action-active-color: #{$list-group-action-active-color};\n--#{$prefix}list-group-action-active-bg: #{$list-group-action-active-bg};\n--#{$prefix}list-group-disabled-color: #{$list-group-disabled-color};\n--#{$prefix}list-group-disabled-bg: #{$list-group-disabled-bg};\n--#{$prefix}list-group-active-color: #{$list-group-active-color};\n--#{$prefix}list-group-active-bg: #{$list-group-active-bg};\n--#{$prefix}list-group-active-border-color: #{$list-group-active-border-color};",
	"list-group-mixin": "@mixin list-group-item-variant($state, $background, $color) {\n  .list-group-item-#{$state} {\n    color: $color;\n    background-color: $background;\n\n    &.list-group-item-action {\n      &:hover,\n      &:focus {\n        color: $color;\n        background-color: shade-color($background, 10%);\n      }\n\n      &.active {\n        color: $white;\n        background-color: $color;\n        border-color: $color;\n      }\n    }\n  }\n}",
	"list-group-modifiers": "// List group contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@each $state in map-keys($theme-colors) {\n  .list-group-item-#{$state} {\n  --#{$prefix}list-group-color: var(--#{$prefix}#{$state}-text-emphasis);\n  --#{$prefix}list-group-bg: var(--#{$prefix}#{$state}-bg-subtle);\n  --#{$prefix}list-group-border-color: var(--#{$prefix}#{$state}-border-subtle);\n  --#{$prefix}list-group-action-hover-color: var(--#{$prefix}emphasis-color);\n  --#{$prefix}list-group-action-hover-bg: var(--#{$prefix}#{$state}-border-subtle);\n  --#{$prefix}list-group-action-active-color: var(--#{$prefix}emphasis-color);\n  --#{$prefix}list-group-action-active-bg: var(--#{$prefix}#{$state}-border-subtle);\n  --#{$prefix}list-group-active-color: var(--#{$prefix}#{$state}-bg-subtle);\n  --#{$prefix}list-group-active-bg: var(--#{$prefix}#{$state}-text-emphasis);\n  --#{$prefix}list-group-active-border-color: var(--#{$prefix}#{$state}-text-emphasis);\n  }\n}",
	"list-group-variables": "$list-group-color:                  var(--#{$prefix}body-color) !default;\n$list-group-bg:                     var(--#{$prefix}body-bg) !default;\n$list-group-border-color:           var(--#{$prefix}border-color) !default;\n$list-group-border-width:           var(--#{$prefix}border-width) !default;\n$list-group-border-radius:          var(--#{$prefix}border-radius) !default;\n\n$list-group-item-padding-y:         $spacer * .5 !default;\n$list-group-item-padding-x:         $spacer !default;\n// fusv-disable\n$list-group-item-bg-scale:          -80% !default; // Deprecated in v5.3.0\n$list-group-item-color-scale:       40% !default; // Deprecated in v5.3.0\n// fusv-enable\n\n$list-group-hover-bg:               var(--#{$prefix}tertiary-bg) !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         var(--#{$prefix}secondary-color) !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           var(--#{$prefix}secondary-color) !default;\n$list-group-action-hover-color:     var(--#{$prefix}emphasis-color) !default;\n\n$list-group-action-active-color:    var(--#{$prefix}body-color) !default;\n$list-group-action-active-bg:       var(--#{$prefix}secondary-bg) !default;",
	"mixin-color-scheme": "@mixin color-scheme($name) {\n  @media (prefers-color-scheme: #{$name}) {\n    @content;\n  }\n}",
	"modal-backdrop-css-vars": "--#{$prefix}backdrop-zindex: #{$zindex-modal-backdrop};\n--#{$prefix}backdrop-bg: #{$modal-backdrop-bg};\n--#{$prefix}backdrop-opacity: #{$modal-backdrop-opacity};",
	"modal-css-vars": "--#{$prefix}modal-zindex: #{$zindex-modal};\n--#{$prefix}modal-width: #{$modal-md};\n--#{$prefix}modal-padding: #{$modal-inner-padding};\n--#{$prefix}modal-margin: #{$modal-dialog-margin};\n--#{$prefix}modal-color: #{$modal-content-color};\n--#{$prefix}modal-bg: #{$modal-content-bg};\n--#{$prefix}modal-border-color: #{$modal-content-border-color};\n--#{$prefix}modal-border-width: #{$modal-content-border-width};\n--#{$prefix}modal-border-radius: #{$modal-content-border-radius};\n--#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-xs};\n--#{$prefix}modal-inner-border-radius: #{$modal-content-inner-border-radius};\n--#{$prefix}modal-header-padding-x: #{$modal-header-padding-x};\n--#{$prefix}modal-header-padding-y: #{$modal-header-padding-y};\n--#{$prefix}modal-header-padding: #{$modal-header-padding}; // Todo in v6: Split this padding into x and y\n--#{$prefix}modal-header-border-color: #{$modal-header-border-color};\n--#{$prefix}modal-header-border-width: #{$modal-header-border-width};\n--#{$prefix}modal-title-line-height: #{$modal-title-line-height};\n--#{$prefix}modal-footer-gap: #{$modal-footer-margin-between};\n--#{$prefix}modal-footer-bg: #{$modal-footer-bg};\n--#{$prefix}modal-footer-border-color: #{$modal-footer-border-color};\n--#{$prefix}modal-footer-border-width: #{$modal-footer-border-width};",
	"modal-fullscreen-loop": "@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n  $postfix: if($infix != \"\", $infix + \"-down\", \"\");\n\n  @include media-breakpoint-down($breakpoint) {\n    .modal-fullscreen#{$postfix} {\n      width: 100vw;\n      max-width: none;\n      height: 100%;\n      margin: 0;\n\n      .modal-content {\n        height: 100%;\n        border: 0;\n        @include border-radius(0);\n      }\n\n      .modal-header,\n      .modal-footer {\n        @include border-radius(0);\n      }\n\n      .modal-body {\n        overflow-y: auto;\n      }\n    }\n  }\n}",
	"modal-variables": "$modal-inner-padding:               $spacer !default;\n\n$modal-footer-margin-between:       .5rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               var(--#{$prefix}body-color) !default;\n$modal-content-bg:                  var(--#{$prefix}body-bg) !default;\n$modal-content-border-color:        var(--#{$prefix}border-color-translucent) !default;\n$modal-content-border-width:        var(--#{$prefix}border-width) !default;\n$modal-content-border-radius:       var(--#{$prefix}border-radius-lg) !default;\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\n$modal-content-box-shadow-xs:       var(--#{$prefix}box-shadow-sm) !default;\n$modal-content-box-shadow-sm-up:    var(--#{$prefix}box-shadow) !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n\n$modal-header-border-color:         var(--#{$prefix}border-color) !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-header-padding-y:            $modal-inner-padding !default;\n$modal-header-padding-x:            $modal-inner-padding !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-footer-bg:                   null !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n\n$modal-sm:                          300px !default;\n$modal-md:                          500px !default;\n$modal-lg:                          800px !default;\n$modal-xl:                          1140px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n$modal-scale-transform:             scale(1.02) !default;",
	"navbar-css-vars": "--#{$prefix}navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};\n--#{$prefix}navbar-padding-y: #{$navbar-padding-y};\n--#{$prefix}navbar-color: #{$navbar-light-color};\n--#{$prefix}navbar-hover-color: #{$navbar-light-hover-color};\n--#{$prefix}navbar-disabled-color: #{$navbar-light-disabled-color};\n--#{$prefix}navbar-active-color: #{$navbar-light-active-color};\n--#{$prefix}navbar-brand-padding-y: #{$navbar-brand-padding-y};\n--#{$prefix}navbar-brand-margin-end: #{$navbar-brand-margin-end};\n--#{$prefix}navbar-brand-font-size: #{$navbar-brand-font-size};\n--#{$prefix}navbar-brand-color: #{$navbar-light-brand-color};\n--#{$prefix}navbar-brand-hover-color: #{$navbar-light-brand-hover-color};\n--#{$prefix}navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};\n--#{$prefix}navbar-toggler-padding-y: #{$navbar-toggler-padding-y};\n--#{$prefix}navbar-toggler-padding-x: #{$navbar-toggler-padding-x};\n--#{$prefix}navbar-toggler-font-size: #{$navbar-toggler-font-size};\n--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};\n--#{$prefix}navbar-toggler-border-color: #{$navbar-light-toggler-border-color};\n--#{$prefix}navbar-toggler-border-radius: #{$navbar-toggler-border-radius};\n--#{$prefix}navbar-toggler-focus-width: #{$navbar-toggler-focus-width};\n--#{$prefix}navbar-toggler-transition: #{$navbar-toggler-transition};",
	"navbar-dark-css-vars": "--#{$prefix}navbar-color: #{$navbar-dark-color};\n--#{$prefix}navbar-hover-color: #{$navbar-dark-hover-color};\n--#{$prefix}navbar-disabled-color: #{$navbar-dark-disabled-color};\n--#{$prefix}navbar-active-color: #{$navbar-dark-active-color};\n--#{$prefix}navbar-brand-color: #{$navbar-dark-brand-color};\n--#{$prefix}navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};\n--#{$prefix}navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};\n--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};",
	"navbar-dark-variables": "$navbar-dark-color:                 rgba($white, .55) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-icon-color:            $navbar-dark-color !default;\n$navbar-dark-toggler-icon-bg:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n$navbar-dark-brand-color:           $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:     $navbar-dark-active-color !default;",
	"navbar-expand-loop": "// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    // stylelint-disable-next-line scss/selector-no-union-class-name\n    &#{$infix} {\n      @include media-breakpoint-up($next) {\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .nav-link {\n            padding-right: var(--#{$prefix}navbar-nav-link-padding-x);\n            padding-left: var(--#{$prefix}navbar-nav-link-padding-x);\n          }\n        }\n\n        .navbar-nav-scroll {\n          overflow: visible;\n        }\n\n        .navbar-collapse {\n          display: flex !important; // stylelint-disable-line declaration-no-important\n          flex-basis: auto;\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n\n        .offcanvas {\n          // stylelint-disable declaration-no-important\n          position: static;\n          z-index: auto;\n          flex-grow: 1;\n          width: auto !important;\n          height: auto !important;\n          visibility: visible !important;\n          background-color: transparent !important;\n          border: 0 !important;\n          transform: none !important;\n          @include box-shadow(none);\n          @include transition(none);\n          // stylelint-enable declaration-no-important\n\n          .offcanvas-header {\n            display: none;\n          }\n\n          .offcanvas-body {\n            display: flex;\n            flex-grow: 0;\n            padding: 0;\n            overflow-y: visible;\n          }\n        }\n      }\n    }\n  }\n}",
	"navbar-nav-css-vars": "--#{$prefix}nav-link-padding-x: 0;\n--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};\n  @include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);\n--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};\n--#{$prefix}nav-link-color: var(--#{$prefix}navbar-color);\n--#{$prefix}nav-link-hover-color: var(--#{$prefix}navbar-hover-color);\n--#{$prefix}nav-link-disabled-color: var(--#{$prefix}navbar-disabled-color);",
	"navbar-variables": "$navbar-padding-y:                  $spacer * .5 !default;\n$navbar-padding-x:                  null !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5 !default;\n$navbar-brand-margin-end:           1rem !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n$navbar-toggler-focus-width:        $btn-focus-width !default;\n$navbar-toggler-transition:         box-shadow .15s ease-in-out !default;\n\n$navbar-light-color:                rgba(var(--#{$prefix}emphasis-color-rgb), .65) !default;\n$navbar-light-hover-color:          rgba(var(--#{$prefix}emphasis-color-rgb), .8) !default;\n$navbar-light-active-color:         rgba(var(--#{$prefix}emphasis-color-rgb), 1) !default;\n$navbar-light-disabled-color:       rgba(var(--#{$prefix}emphasis-color-rgb), .3) !default;\n$navbar-light-icon-color:           rgba($body-color, .75) !default;\n$navbar-light-toggler-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-light-toggler-border-color: rgba(var(--#{$prefix}emphasis-color-rgb), .15) !default;\n$navbar-light-brand-color:          $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:    $navbar-light-active-color !default;",
	"nav-css-vars": "--#{$prefix}nav-link-padding-x: #{$nav-link-padding-x};\n--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};\n  @include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);\n--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};\n--#{$prefix}nav-link-color: #{$nav-link-color};\n--#{$prefix}nav-link-hover-color: #{$nav-link-hover-color};\n--#{$prefix}nav-link-disabled-color: #{$nav-link-disabled-color};",
	"nav-pills-css-vars": "--#{$prefix}nav-pills-border-radius: #{$nav-pills-border-radius};\n--#{$prefix}nav-pills-link-active-color: #{$nav-pills-link-active-color};\n--#{$prefix}nav-pills-link-active-bg: #{$nav-pills-link-active-bg};",
	"nav-tabs-css-vars": "--#{$prefix}nav-tabs-border-width: #{$nav-tabs-border-width};\n--#{$prefix}nav-tabs-border-color: #{$nav-tabs-border-color};\n--#{$prefix}nav-tabs-border-radius: #{$nav-tabs-border-radius};\n--#{$prefix}nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};\n--#{$prefix}nav-tabs-link-active-color: #{$nav-tabs-link-active-color};\n--#{$prefix}nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};\n--#{$prefix}nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};",
	"nav-underline-css-vars": "--#{$prefix}nav-underline-gap: #{$nav-underline-gap};\n--#{$prefix}nav-underline-border-width: #{$nav-underline-border-width};\n--#{$prefix}nav-underline-link-active-color: #{$nav-underline-link-active-color};",
	"nav-variables": "$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-font-size:                null !default;\n$nav-link-font-weight:              null !default;\n$nav-link-color:                    var(--#{$prefix}link-color) !default;\n$nav-link-hover-color:              var(--#{$prefix}link-hover-color) !default;\n$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !default;\n$nav-link-disabled-color:           var(--#{$prefix}secondary-color) !default;\n$nav-link-focus-box-shadow:         $focus-ring-box-shadow !default;\n\n$nav-tabs-border-color:             var(--#{$prefix}border-color) !default;\n$nav-tabs-border-width:             var(--#{$prefix}border-width) !default;\n$nav-tabs-border-radius:            var(--#{$prefix}border-radius) !default;\n$nav-tabs-link-hover-border-color:  var(--#{$prefix}secondary-bg) var(--#{$prefix}secondary-bg) $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        var(--#{$prefix}emphasis-color) !default;\n$nav-tabs-link-active-bg:           var(--#{$prefix}body-bg) !default;\n$nav-tabs-link-active-border-color: var(--#{$prefix}border-color) var(--#{$prefix}border-color) $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           var(--#{$prefix}border-radius) !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n$nav-underline-gap:                 1rem !default;\n$nav-underline-border-width:        .125rem !default;\n$nav-underline-link-active-color:   var(--#{$prefix}emphasis-color) !default;",
	"offcanvas-css-vars": "--#{$prefix}offcanvas-zindex: #{$zindex-offcanvas};\n--#{$prefix}offcanvas-width: #{$offcanvas-horizontal-width};\n--#{$prefix}offcanvas-height: #{$offcanvas-vertical-height};\n--#{$prefix}offcanvas-padding-x: #{$offcanvas-padding-x};\n--#{$prefix}offcanvas-padding-y: #{$offcanvas-padding-y};\n--#{$prefix}offcanvas-color: #{$offcanvas-color};\n--#{$prefix}offcanvas-bg: #{$offcanvas-bg-color};\n--#{$prefix}offcanvas-border-width: #{$offcanvas-border-width};\n--#{$prefix}offcanvas-border-color: #{$offcanvas-border-color};\n--#{$prefix}offcanvas-box-shadow: #{$offcanvas-box-shadow};\n--#{$prefix}offcanvas-transition: #{transform $offcanvas-transition-duration ease-in-out};\n--#{$prefix}offcanvas-title-line-height: #{$offcanvas-title-line-height};",
	"offcanvas-variables": "$offcanvas-padding-y:               $modal-inner-padding !default;\n$offcanvas-padding-x:               $modal-inner-padding !default;\n$offcanvas-horizontal-width:        400px !default;\n$offcanvas-vertical-height:         30vh !default;\n$offcanvas-transition-duration:     .3s !default;\n$offcanvas-border-color:            $modal-content-border-color !default;\n$offcanvas-border-width:            $modal-content-border-width !default;\n$offcanvas-title-line-height:       $modal-title-line-height !default;\n$offcanvas-bg-color:                var(--#{$prefix}body-bg) !default;\n$offcanvas-color:                   var(--#{$prefix}body-color) !default;\n$offcanvas-box-shadow:              $modal-content-box-shadow-xs !default;\n$offcanvas-backdrop-bg:             $modal-backdrop-bg !default;\n$offcanvas-backdrop-opacity:        $modal-backdrop-opacity !default;",
	"pagination-css-vars": "--#{$prefix}pagination-padding-x: #{$pagination-padding-x};\n--#{$prefix}pagination-padding-y: #{$pagination-padding-y};\n  @include rfs($pagination-font-size, --#{$prefix}pagination-font-size);\n--#{$prefix}pagination-color: #{$pagination-color};\n--#{$prefix}pagination-bg: #{$pagination-bg};\n--#{$prefix}pagination-border-width: #{$pagination-border-width};\n--#{$prefix}pagination-border-color: #{$pagination-border-color};\n--#{$prefix}pagination-border-radius: #{$pagination-border-radius};\n--#{$prefix}pagination-hover-color: #{$pagination-hover-color};\n--#{$prefix}pagination-hover-bg: #{$pagination-hover-bg};\n--#{$prefix}pagination-hover-border-color: #{$pagination-hover-border-color};\n--#{$prefix}pagination-focus-color: #{$pagination-focus-color};\n--#{$prefix}pagination-focus-bg: #{$pagination-focus-bg};\n--#{$prefix}pagination-focus-box-shadow: #{$pagination-focus-box-shadow};\n--#{$prefix}pagination-active-color: #{$pagination-active-color};\n--#{$prefix}pagination-active-bg: #{$pagination-active-bg};\n--#{$prefix}pagination-active-border-color: #{$pagination-active-border-color};\n--#{$prefix}pagination-disabled-color: #{$pagination-disabled-color};\n--#{$prefix}pagination-disabled-bg: #{$pagination-disabled-bg};\n--#{$prefix}pagination-disabled-border-color: #{$pagination-disabled-border-color};",
	"pagination-mixin": "@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {\n--#{$prefix}pagination-padding-x: #{$padding-x};\n--#{$prefix}pagination-padding-y: #{$padding-y};\n  @include rfs($font-size, --#{$prefix}pagination-font-size);\n--#{$prefix}pagination-border-radius: #{$border-radius};\n}",
	"pagination-variables": "$pagination-padding-y:              .375rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n\n$pagination-font-size:              $font-size-base !default;\n\n$pagination-color:                  var(--#{$prefix}link-color) !default;\n$pagination-bg:                     var(--#{$prefix}body-bg) !default;\n$pagination-border-radius:          var(--#{$prefix}border-radius) !default;\n$pagination-border-width:           var(--#{$prefix}border-width) !default;\n$pagination-margin-start:           calc(-1 * #{$pagination-border-width}) !default; // stylelint-disable-line function-disallowed-list\n$pagination-border-color:           var(--#{$prefix}border-color) !default;\n\n$pagination-focus-color:            var(--#{$prefix}link-hover-color) !default;\n$pagination-focus-bg:               var(--#{$prefix}secondary-bg) !default;\n$pagination-focus-box-shadow:       $focus-ring-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            var(--#{$prefix}link-hover-color) !default;\n$pagination-hover-bg:               var(--#{$prefix}tertiary-bg) !default;\n$pagination-hover-border-color:     var(--#{$prefix}border-color) !default; // Todo in v6: remove this?\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $component-active-bg !default;\n\n$pagination-disabled-color:         var(--#{$prefix}secondary-color) !default;\n$pagination-disabled-bg:            var(--#{$prefix}secondary-bg) !default;\n$pagination-disabled-border-color:  var(--#{$prefix}border-color) !default;\n\n$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$pagination-border-radius-sm:       var(--#{$prefix}border-radius-sm) !default;\n$pagination-border-radius-lg:       var(--#{$prefix}border-radius-lg) !default;",
	placeholders: "$placeholder-opacity-max:           .5 !default;\n$placeholder-opacity-min:           .2 !default;",
	"popover-css-vars": "--#{$prefix}popover-zindex: #{$zindex-popover};\n--#{$prefix}popover-max-width: #{$popover-max-width};\n  @include rfs($popover-font-size, --#{$prefix}popover-font-size);\n--#{$prefix}popover-bg: #{$popover-bg};\n--#{$prefix}popover-border-width: #{$popover-border-width};\n--#{$prefix}popover-border-color: #{$popover-border-color};\n--#{$prefix}popover-border-radius: #{$popover-border-radius};\n--#{$prefix}popover-inner-border-radius: #{$popover-inner-border-radius};\n--#{$prefix}popover-box-shadow: #{$popover-box-shadow};\n--#{$prefix}popover-header-padding-x: #{$popover-header-padding-x};\n--#{$prefix}popover-header-padding-y: #{$popover-header-padding-y};\n  @include rfs($popover-header-font-size, --#{$prefix}popover-header-font-size);\n--#{$prefix}popover-header-color: #{$popover-header-color};\n--#{$prefix}popover-header-bg: #{$popover-header-bg};\n--#{$prefix}popover-body-padding-x: #{$popover-body-padding-x};\n--#{$prefix}popover-body-padding-y: #{$popover-body-padding-y};\n--#{$prefix}popover-body-color: #{$popover-body-color};\n--#{$prefix}popover-arrow-width: #{$popover-arrow-width};\n--#{$prefix}popover-arrow-height: #{$popover-arrow-height};\n--#{$prefix}popover-arrow-border: var(--#{$prefix}popover-border-color);",
	"popover-variables": "$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        var(--#{$prefix}body-bg) !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              var(--#{$prefix}border-width) !default;\n$popover-border-color:              var(--#{$prefix}border-color-translucent) !default;\n$popover-border-radius:             var(--#{$prefix}border-radius-lg) !default;\n$popover-inner-border-radius:       calc(#{$popover-border-radius} - #{$popover-border-width}) !default; // stylelint-disable-line function-disallowed-list\n$popover-box-shadow:                var(--#{$prefix}box-shadow) !default;\n\n$popover-header-font-size:          $font-size-base !default;\n$popover-header-bg:                 var(--#{$prefix}secondary-bg) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          $spacer !default;\n\n$popover-body-color:                var(--#{$prefix}body-color) !default;\n$popover-body-padding-y:            $spacer !default;\n$popover-body-padding-x:            $spacer !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;",
	"position-map": "$position-values: (\n  0: 0,\n  50: 50%,\n  100: 100%\n) !default;",
	"progress-css-vars": "--#{$prefix}progress-height: #{$progress-height};\n  @include rfs($progress-font-size, --#{$prefix}progress-font-size);\n--#{$prefix}progress-bg: #{$progress-bg};\n--#{$prefix}progress-border-radius: #{$progress-border-radius};\n--#{$prefix}progress-box-shadow: #{$progress-box-shadow};\n--#{$prefix}progress-bar-color: #{$progress-bar-color};\n--#{$prefix}progress-bar-bg: #{$progress-bar-bg};\n--#{$prefix}progress-bar-transition: #{$progress-bar-transition};",
	"progress-keyframes": "@if $enable-transitions {\n  @keyframes progress-bar-stripes {\n    0% { background-position-x: var(--#{$prefix}progress-height); }\n  }\n}",
	"progress-variables": "$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       var(--#{$prefix}secondary-bg) !default;\n$progress-border-radius:            var(--#{$prefix}border-radius) !default;\n$progress-box-shadow:               var(--#{$prefix}box-shadow-inset) !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   $primary !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;",
	"reboot-body-rules": "body {\n  margin: 0; // 1\n  font-family: var(--#{$prefix}body-font-family);\n  @include font-size(var(--#{$prefix}body-font-size));\n  font-weight: var(--#{$prefix}body-font-weight);\n  line-height: var(--#{$prefix}body-line-height);\n  color: var(--#{$prefix}body-color);\n  text-align: var(--#{$prefix}body-text-align);\n  background-color: var(--#{$prefix}body-bg); // 2\n  -webkit-text-size-adjust: 100%; // 3\n  -webkit-tap-highlight-color: rgba($black, 0); // 4\n}",
	"responsive-breakpoints": "// We deliberately hardcode the `bs-` prefix because we check\n// this custom property in JS to determine Popper's positioning\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .dropdown-menu#{$infix}-start {\n      --bs-position: start;\n\n      &[data-bs-popper] {\n        right: auto;\n        left: 0;\n      }\n    }\n\n    .dropdown-menu#{$infix}-end {\n      --bs-position: end;\n\n      &[data-bs-popper] {\n        right: 0;\n        left: auto;\n      }\n    }\n  }\n}",
	"root-body-variables": "  @if $font-size-root != null {\n  --#{$prefix}root-font-size: #{$font-size-root};\n  }\n--#{$prefix}body-font-family: #{inspect($font-family-base)};\n  @include rfs($font-size-base, --#{$prefix}body-font-size);\n--#{$prefix}body-font-weight: #{$font-weight-base};\n--#{$prefix}body-line-height: #{$line-height-base};\n  @if $body-text-align != null {\n  --#{$prefix}body-text-align: #{$body-text-align};\n  }\n\n--#{$prefix}body-color: #{$body-color};\n--#{$prefix}body-color-rgb: #{to-rgb($body-color)};\n--#{$prefix}body-bg: #{$body-bg};\n--#{$prefix}body-bg-rgb: #{to-rgb($body-bg)};\n\n--#{$prefix}emphasis-color: #{$body-emphasis-color};\n--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color)};\n\n--#{$prefix}secondary-color: #{$body-secondary-color};\n--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color)};\n--#{$prefix}secondary-bg: #{$body-secondary-bg};\n--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg)};\n\n--#{$prefix}tertiary-color: #{$body-tertiary-color};\n--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color)};\n--#{$prefix}tertiary-bg: #{$body-tertiary-bg};\n--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg)};",
	"root-border-var": "--#{$prefix}border-width: #{$border-width};\n--#{$prefix}border-style: #{$border-style};\n--#{$prefix}border-color: #{$border-color};\n--#{$prefix}border-color-translucent: #{$border-color-translucent};\n\n--#{$prefix}border-radius: #{$border-radius};\n--#{$prefix}border-radius-sm: #{$border-radius-sm};\n--#{$prefix}border-radius-lg: #{$border-radius-lg};\n--#{$prefix}border-radius-xl: #{$border-radius-xl};\n--#{$prefix}border-radius-xxl: #{$border-radius-xxl};\n--#{$prefix}border-radius-2xl: var(--#{$prefix}border-radius-xxl); // Deprecated in v5.3.0 for consistency\n--#{$prefix}border-radius-pill: #{$border-radius-pill};",
	"root-dark-mode-vars": "--#{$prefix}body-color: #{$body-color-dark};\n--#{$prefix}body-color-rgb: #{to-rgb($body-color-dark)};\n--#{$prefix}body-bg: #{$body-bg-dark};\n--#{$prefix}body-bg-rgb: #{to-rgb($body-bg-dark)};\n\n--#{$prefix}emphasis-color: #{$body-emphasis-color-dark};\n--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color-dark)};\n\n--#{$prefix}secondary-color: #{$body-secondary-color-dark};\n--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color-dark)};\n--#{$prefix}secondary-bg: #{$body-secondary-bg-dark};\n--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg-dark)};\n\n--#{$prefix}tertiary-color: #{$body-tertiary-color-dark};\n--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color-dark)};\n--#{$prefix}tertiary-bg: #{$body-tertiary-bg-dark};\n--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg-dark)};\n\n@each $color, $value in $theme-colors-text-dark {\n--#{$prefix}#{$color}-text-emphasis: #{$value};\n}\n\n@each $color, $value in $theme-colors-bg-subtle-dark {\n--#{$prefix}#{$color}-bg-subtle: #{$value};\n}\n\n@each $color, $value in $theme-colors-border-subtle-dark {\n--#{$prefix}#{$color}-border-subtle: #{$value};\n}\n\n--#{$prefix}heading-color: #{$headings-color-dark};\n\n--#{$prefix}link-color: #{$link-color-dark};\n--#{$prefix}link-hover-color: #{$link-hover-color-dark};\n--#{$prefix}link-color-rgb: #{to-rgb($link-color-dark)};\n--#{$prefix}link-hover-color-rgb: #{to-rgb($link-hover-color-dark)};\n\n--#{$prefix}code-color: #{$code-color-dark};\n--#{$prefix}highlight-color: #{$mark-color-dark};\n--#{$prefix}highlight-bg: #{$mark-bg-dark};\n\n--#{$prefix}border-color: #{$border-color-dark};\n--#{$prefix}border-color-translucent: #{$border-color-translucent-dark};\n\n--#{$prefix}form-valid-color: #{$form-valid-color-dark};\n--#{$prefix}form-valid-border-color: #{$form-valid-border-color-dark};\n--#{$prefix}form-invalid-color: #{$form-invalid-color-dark};\n--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color-dark};",
	"root-focus-variables": "--#{$prefix}focus-ring-width: #{$focus-ring-width};\n--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};\n--#{$prefix}focus-ring-color: #{$focus-ring-color};",
	"root-form-validation-variables": "--#{$prefix}form-valid-color: #{$form-valid-color};\n--#{$prefix}form-valid-border-color: #{$form-valid-border-color};\n--#{$prefix}form-invalid-color: #{$form-invalid-color};\n--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color};",
	"sass-dark-mode-vars": "// scss-docs-start theme-text-dark-variables\n$primary-text-emphasis-dark:        tint-color($primary, 40%) !default;\n$secondary-text-emphasis-dark:      tint-color($secondary, 40%) !default;\n$success-text-emphasis-dark:        tint-color($success, 40%) !default;\n$info-text-emphasis-dark:           tint-color($info, 40%) !default;\n$warning-text-emphasis-dark:        tint-color($warning, 40%) !default;\n$danger-text-emphasis-dark:         tint-color($danger, 40%) !default;\n$light-text-emphasis-dark:          $gray-100 !default;\n$dark-text-emphasis-dark:           $gray-300 !default;\n// scss-docs-end theme-text-dark-variables\n\n// scss-docs-start theme-bg-subtle-dark-variables\n$primary-bg-subtle-dark:            shade-color($primary, 80%) !default;\n$secondary-bg-subtle-dark:          shade-color($secondary, 80%) !default;\n$success-bg-subtle-dark:            shade-color($success, 80%) !default;\n$info-bg-subtle-dark:               shade-color($info, 80%) !default;\n$warning-bg-subtle-dark:            shade-color($warning, 80%) !default;\n$danger-bg-subtle-dark:             shade-color($danger, 80%) !default;\n$light-bg-subtle-dark:              $gray-800 !default;\n$dark-bg-subtle-dark:               mix($gray-800, $black) !default;\n// scss-docs-end theme-bg-subtle-dark-variables\n\n// scss-docs-start theme-border-subtle-dark-variables\n$primary-border-subtle-dark:        shade-color($primary, 40%) !default;\n$secondary-border-subtle-dark:      shade-color($secondary, 40%) !default;\n$success-border-subtle-dark:        shade-color($success, 40%) !default;\n$info-border-subtle-dark:           shade-color($info, 40%) !default;\n$warning-border-subtle-dark:        shade-color($warning, 40%) !default;\n$danger-border-subtle-dark:         shade-color($danger, 40%) !default;\n$light-border-subtle-dark:          $gray-700 !default;\n$dark-border-subtle-dark:           $gray-800 !default;\n// scss-docs-end theme-border-subtle-dark-variables\n\n$body-color-dark:                   $gray-300 !default;\n$body-bg-dark:                      $gray-900 !default;\n$body-secondary-color-dark:         rgba($body-color-dark, .75) !default;\n$body-secondary-bg-dark:            $gray-800 !default;\n$body-tertiary-color-dark:          rgba($body-color-dark, .5) !default;\n$body-tertiary-bg-dark:             mix($gray-800, $gray-900, 50%) !default;\n$body-emphasis-color-dark:          $white !default;\n$border-color-dark:                 $gray-700 !default;\n$border-color-translucent-dark:     rgba($white, .15) !default;\n$headings-color-dark:               inherit !default;\n$link-color-dark:                   tint-color($primary, 40%) !default;\n$link-hover-color-dark:             shift-color($link-color-dark, -$link-shade-percentage) !default;\n$code-color-dark:                   tint-color($code-color, 40%) !default;\n$mark-color-dark:                   $body-color-dark !default;\n$mark-bg-dark:                      $yellow-800 !default;\n\n\n//\n// Forms\n//\n\n$form-select-indicator-color-dark:  $body-color-dark !default;\n$form-select-indicator-dark:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color-dark}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>\") !default;\n\n$form-switch-color-dark:            rgba($white, .25) !default;\n$form-switch-bg-image-dark:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color-dark}'/></svg>\") !default;\n\n// scss-docs-start form-validation-colors-dark\n$form-valid-color-dark:             $green-300 !default;\n$form-valid-border-color-dark:      $green-300 !default;\n$form-invalid-color-dark:           $red-300 !default;\n$form-invalid-border-color-dark:    $red-300 !default;\n// scss-docs-end form-validation-colors-dark\n\n\n//\n// Accordion\n//\n\n$accordion-icon-color-dark:         $primary-text-emphasis-dark !default;\n$accordion-icon-active-color-dark:  $primary-text-emphasis-dark !default;\n\n$accordion-button-icon-dark:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color-dark}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/></svg>\") !default;\n$accordion-button-active-icon-dark:  url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color-dark}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/></svg>\") !default;",
	"spacer-variables-maps": "$spacer: 1rem !default;\n$spacers: (\n  0: 0,\n  1: $spacer * .25,\n  2: $spacer * .5,\n  3: $spacer,\n  4: $spacer * 1.5,\n  5: $spacer * 3,\n) !default;",
	"spinner-border-css-vars": "--#{$prefix}spinner-width: #{$spinner-width};\n--#{$prefix}spinner-height: #{$spinner-height};\n--#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};\n--#{$prefix}spinner-border-width: #{$spinner-border-width};\n--#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};\n--#{$prefix}spinner-animation-name: spinner-border;",
	"spinner-border-keyframes": "@keyframes spinner-border {\n  to { transform: rotate(360deg) #{\"/* rtl:ignore */\"}; }\n}",
	"spinner-border-sm-css-vars": "--#{$prefix}spinner-width: #{$spinner-width-sm};\n--#{$prefix}spinner-height: #{$spinner-height-sm};\n--#{$prefix}spinner-border-width: #{$spinner-border-width-sm};",
	"spinner-grow-css-vars": "--#{$prefix}spinner-width: #{$spinner-width};\n--#{$prefix}spinner-height: #{$spinner-height};\n--#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};\n--#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};\n--#{$prefix}spinner-animation-name: spinner-grow;",
	"spinner-grow-keyframes": "@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}",
	"spinner-variables": "$spinner-width:           2rem !default;\n$spinner-height:          $spinner-width !default;\n$spinner-vertical-align:  -.125em !default;\n$spinner-border-width:    .25em !default;\n$spinner-animation-speed: .75s !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;",
	stacks: ".hstack {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n\n.vstack {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}",
	"table-loop": "$table-variants: (\n  \"primary\":    shift-color($primary, $table-bg-scale),\n  \"secondary\":  shift-color($secondary, $table-bg-scale),\n  \"success\":    shift-color($success, $table-bg-scale),\n  \"info\":       shift-color($info, $table-bg-scale),\n  \"warning\":    shift-color($warning, $table-bg-scale),\n  \"danger\":     shift-color($danger, $table-bg-scale),\n  \"light\":      $light,\n  \"dark\":       $dark,\n) !default;",
	"table-variables": "$table-cell-padding-y:        .5rem !default;\n$table-cell-padding-x:        .5rem !default;\n$table-cell-padding-y-sm:     .25rem !default;\n$table-cell-padding-x-sm:     .25rem !default;\n\n$table-cell-vertical-align:   top !default;\n\n$table-color:                 var(--#{$prefix}emphasis-color) !default;\n$table-bg:                    var(--#{$prefix}body-bg) !default;\n$table-accent-bg:             transparent !default;\n\n$table-th-font-weight:        null !default;\n\n$table-striped-color:         $table-color !default;\n$table-striped-bg-factor:     .05 !default;\n$table-striped-bg:            rgba(var(--#{$prefix}emphasis-color-rgb), $table-striped-bg-factor) !default;\n\n$table-active-color:          $table-color !default;\n$table-active-bg-factor:      .1 !default;\n$table-active-bg:             rgba(var(--#{$prefix}emphasis-color-rgb), $table-active-bg-factor) !default;\n\n$table-hover-color:           $table-color !default;\n$table-hover-bg-factor:       .075 !default;\n$table-hover-bg:              rgba(var(--#{$prefix}emphasis-color-rgb), $table-hover-bg-factor) !default;\n\n$table-border-factor:         .2 !default;\n$table-border-width:          var(--#{$prefix}border-width) !default;\n$table-border-color:          var(--#{$prefix}border-color) !default;\n\n$table-striped-order:         odd !default;\n$table-striped-columns-order: even !default;\n\n$table-group-separator-color: currentcolor !default;\n\n$table-caption-color:         var(--#{$prefix}secondary-color) !default;\n\n$table-bg-scale:              -80% !default;",
	"table-variant": "@mixin table-variant($state, $background) {\n  .table-#{$state} {\n    $color: color-contrast(opaque($body-bg, $background));\n    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));\n    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));\n    $active-bg: mix($color, $background, percentage($table-active-bg-factor));\n    $table-border-color: mix($color, $background, percentage($table-border-factor));\n\n  --#{$prefix}table-color: #{$color};\n  --#{$prefix}table-bg: #{$background};\n  --#{$prefix}table-border-color: #{$table-border-color};\n  --#{$prefix}table-striped-bg: #{$striped-bg};\n  --#{$prefix}table-striped-color: #{color-contrast($striped-bg)};\n  --#{$prefix}table-active-bg: #{$active-bg};\n  --#{$prefix}table-active-color: #{color-contrast($active-bg)};\n  --#{$prefix}table-hover-bg: #{$hover-bg};\n  --#{$prefix}table-hover-color: #{color-contrast($hover-bg)};\n\n    color: var(--#{$prefix}table-color);\n    border-color: var(--#{$prefix}table-border-color);\n  }\n}",
	"theme-bg-subtle-dark-map": "  $theme-colors-bg-subtle-dark: (\n    \"primary\": $primary-bg-subtle-dark,\n    \"secondary\": $secondary-bg-subtle-dark,\n    \"success\": $success-bg-subtle-dark,\n    \"info\": $info-bg-subtle-dark,\n    \"warning\": $warning-bg-subtle-dark,\n    \"danger\": $danger-bg-subtle-dark,\n    \"light\": $light-bg-subtle-dark,\n    \"dark\": $dark-bg-subtle-dark,\n  ) !default;",
	"theme-bg-subtle-dark-variables": "$primary-bg-subtle-dark:            shade-color($primary, 80%) !default;\n$secondary-bg-subtle-dark:          shade-color($secondary, 80%) !default;\n$success-bg-subtle-dark:            shade-color($success, 80%) !default;\n$info-bg-subtle-dark:               shade-color($info, 80%) !default;\n$warning-bg-subtle-dark:            shade-color($warning, 80%) !default;\n$danger-bg-subtle-dark:             shade-color($danger, 80%) !default;\n$light-bg-subtle-dark:              $gray-800 !default;\n$dark-bg-subtle-dark:               mix($gray-800, $black) !default;",
	"theme-bg-subtle-map": "$theme-colors-bg-subtle: (\n  \"primary\": $primary-bg-subtle,\n  \"secondary\": $secondary-bg-subtle,\n  \"success\": $success-bg-subtle,\n  \"info\": $info-bg-subtle,\n  \"warning\": $warning-bg-subtle,\n  \"danger\": $danger-bg-subtle,\n  \"light\": $light-bg-subtle,\n  \"dark\": $dark-bg-subtle,\n) !default;",
	"theme-bg-subtle-variables": "$primary-bg-subtle:       tint-color($primary, 80%) !default;\n$secondary-bg-subtle:     tint-color($secondary, 80%) !default;\n$success-bg-subtle:       tint-color($success, 80%) !default;\n$info-bg-subtle:          tint-color($info, 80%) !default;\n$warning-bg-subtle:       tint-color($warning, 80%) !default;\n$danger-bg-subtle:        tint-color($danger, 80%) !default;\n$light-bg-subtle:         mix($gray-100, $white) !default;\n$dark-bg-subtle:          $gray-400 !default;",
	"theme-border-subtle-dark-map": "  $theme-colors-border-subtle-dark: (\n    \"primary\": $primary-border-subtle-dark,\n    \"secondary\": $secondary-border-subtle-dark,\n    \"success\": $success-border-subtle-dark,\n    \"info\": $info-border-subtle-dark,\n    \"warning\": $warning-border-subtle-dark,\n    \"danger\": $danger-border-subtle-dark,\n    \"light\": $light-border-subtle-dark,\n    \"dark\": $dark-border-subtle-dark,\n  ) !default;",
	"theme-border-subtle-dark-variables": "$primary-border-subtle-dark:        shade-color($primary, 40%) !default;\n$secondary-border-subtle-dark:      shade-color($secondary, 40%) !default;\n$success-border-subtle-dark:        shade-color($success, 40%) !default;\n$info-border-subtle-dark:           shade-color($info, 40%) !default;\n$warning-border-subtle-dark:        shade-color($warning, 40%) !default;\n$danger-border-subtle-dark:         shade-color($danger, 40%) !default;\n$light-border-subtle-dark:          $gray-700 !default;\n$dark-border-subtle-dark:           $gray-800 !default;",
	"theme-border-subtle-map": "$theme-colors-border-subtle: (\n  \"primary\": $primary-border-subtle,\n  \"secondary\": $secondary-border-subtle,\n  \"success\": $success-border-subtle,\n  \"info\": $info-border-subtle,\n  \"warning\": $warning-border-subtle,\n  \"danger\": $danger-border-subtle,\n  \"light\": $light-border-subtle,\n  \"dark\": $dark-border-subtle,\n) !default;",
	"theme-border-subtle-variables": "$primary-border-subtle:   tint-color($primary, 60%) !default;\n$secondary-border-subtle: tint-color($secondary, 60%) !default;\n$success-border-subtle:   tint-color($success, 60%) !default;\n$info-border-subtle:      tint-color($info, 60%) !default;\n$warning-border-subtle:   tint-color($warning, 60%) !default;\n$danger-border-subtle:    tint-color($danger, 60%) !default;\n$light-border-subtle:     $gray-200 !default;\n$dark-border-subtle:      $gray-500 !default;",
	"theme-colors-map": "$theme-colors: (\n  \"primary\":    $primary,\n  \"secondary\":  $secondary,\n  \"success\":    $success,\n  \"info\":       $info,\n  \"warning\":    $warning,\n  \"danger\":     $danger,\n  \"light\":      $light,\n  \"dark\":       $dark\n) !default;",
	"theme-colors-rgb": "$theme-colors-rgb: map-loop($theme-colors, to-rgb, \"$value\") !default;",
	"theme-color-variables": "$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-900 !default;",
	"theme-text-dark-map": "  $theme-colors-text-dark: (\n    \"primary\": $primary-text-emphasis-dark,\n    \"secondary\": $secondary-text-emphasis-dark,\n    \"success\": $success-text-emphasis-dark,\n    \"info\": $info-text-emphasis-dark,\n    \"warning\": $warning-text-emphasis-dark,\n    \"danger\": $danger-text-emphasis-dark,\n    \"light\": $light-text-emphasis-dark,\n    \"dark\": $dark-text-emphasis-dark,\n  ) !default;",
	"theme-text-dark-variables": "$primary-text-emphasis-dark:        tint-color($primary, 40%) !default;\n$secondary-text-emphasis-dark:      tint-color($secondary, 40%) !default;\n$success-text-emphasis-dark:        tint-color($success, 40%) !default;\n$info-text-emphasis-dark:           tint-color($info, 40%) !default;\n$warning-text-emphasis-dark:        tint-color($warning, 40%) !default;\n$danger-text-emphasis-dark:         tint-color($danger, 40%) !default;\n$light-text-emphasis-dark:          $gray-100 !default;\n$dark-text-emphasis-dark:           $gray-300 !default;",
	"theme-text-map": "$theme-colors-text: (\n  \"primary\": $primary-text-emphasis,\n  \"secondary\": $secondary-text-emphasis,\n  \"success\": $success-text-emphasis,\n  \"info\": $info-text-emphasis,\n  \"warning\": $warning-text-emphasis,\n  \"danger\": $danger-text-emphasis,\n  \"light\": $light-text-emphasis,\n  \"dark\": $dark-text-emphasis,\n) !default;",
	"theme-text-variables": "$primary-text-emphasis:   shade-color($primary, 60%) !default;\n$secondary-text-emphasis: shade-color($secondary, 60%) !default;\n$success-text-emphasis:   shade-color($success, 60%) !default;\n$info-text-emphasis:      shade-color($info, 60%) !default;\n$warning-text-emphasis:   shade-color($warning, 60%) !default;\n$danger-text-emphasis:    shade-color($danger, 60%) !default;\n$light-text-emphasis:     $gray-700 !default;\n$dark-text-emphasis:      $gray-700 !default;",
	"thumbnail-variables": "$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      var(--#{$prefix}body-bg) !default;\n$thumbnail-border-width:            var(--#{$prefix}border-width) !default;\n$thumbnail-border-color:            var(--#{$prefix}border-color) !default;\n$thumbnail-border-radius:           var(--#{$prefix}border-radius) !default;\n$thumbnail-box-shadow:              var(--#{$prefix}box-shadow-sm) !default;",
	"toast-css-vars": "--#{$prefix}toast-zindex: #{$zindex-toast};\n--#{$prefix}toast-padding-x: #{$toast-padding-x};\n--#{$prefix}toast-padding-y: #{$toast-padding-y};\n--#{$prefix}toast-spacing: #{$toast-spacing};\n--#{$prefix}toast-max-width: #{$toast-max-width};\n  @include rfs($toast-font-size, --#{$prefix}toast-font-size);\n--#{$prefix}toast-color: #{$toast-color};\n--#{$prefix}toast-bg: #{$toast-background-color};\n--#{$prefix}toast-border-width: #{$toast-border-width};\n--#{$prefix}toast-border-color: #{$toast-border-color};\n--#{$prefix}toast-border-radius: #{$toast-border-radius};\n--#{$prefix}toast-box-shadow: #{$toast-box-shadow};\n--#{$prefix}toast-header-color: #{$toast-header-color};\n--#{$prefix}toast-header-bg: #{$toast-header-background-color};\n--#{$prefix}toast-header-border-color: #{$toast-header-border-color};",
	"toast-variables": "$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .5rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba(var(--#{$prefix}body-bg-rgb), .85) !default;\n$toast-border-width:                var(--#{$prefix}border-width) !default;\n$toast-border-color:                var(--#{$prefix}border-color-translucent) !default;\n$toast-border-radius:               var(--#{$prefix}border-radius) !default;\n$toast-box-shadow:                  var(--#{$prefix}box-shadow) !default;\n$toast-spacing:                     $container-padding-x !default;\n\n$toast-header-color:                var(--#{$prefix}secondary-color) !default;\n$toast-header-background-color:     rgba(var(--#{$prefix}body-bg-rgb), .85) !default;\n$toast-header-border-color:         $toast-border-color !default;",
	"tooltip-css-vars": "--#{$prefix}tooltip-zindex: #{$zindex-tooltip};\n--#{$prefix}tooltip-max-width: #{$tooltip-max-width};\n--#{$prefix}tooltip-padding-x: #{$tooltip-padding-x};\n--#{$prefix}tooltip-padding-y: #{$tooltip-padding-y};\n--#{$prefix}tooltip-margin: #{$tooltip-margin};\n  @include rfs($tooltip-font-size, --#{$prefix}tooltip-font-size);\n--#{$prefix}tooltip-color: #{$tooltip-color};\n--#{$prefix}tooltip-bg: #{$tooltip-bg};\n--#{$prefix}tooltip-border-radius: #{$tooltip-border-radius};\n--#{$prefix}tooltip-opacity: #{$tooltip-opacity};\n--#{$prefix}tooltip-arrow-width: #{$tooltip-arrow-width};\n--#{$prefix}tooltip-arrow-height: #{$tooltip-arrow-height};",
	"tooltip-variables": "$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     var(--#{$prefix}body-bg) !default;\n$tooltip-bg:                        var(--#{$prefix}emphasis-color) !default;\n$tooltip-border-radius:             var(--#{$prefix}border-radius) !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 $spacer * .25 !default;\n$tooltip-padding-x:                 $spacer * .5 !default;\n$tooltip-margin:                    null !default; // TODO: remove this in v6\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n// fusv-disable\n$tooltip-arrow-color:               null !default; // Deprecated in Bootstrap 5.2.0 for CSS variables\n// fusv-enable",
	"type-variables": "$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             .875em !default;\n\n$sub-sup-font-size:           .75em !default;\n\n// fusv-disable\n$text-muted:                  var(--#{$prefix}secondary-color) !default; // Deprecated in 5.3.0\n// fusv-enable\n\n$initialism-font-size:        $small-font-size !default;\n\n$blockquote-margin-y:         $spacer !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n$blockquote-footer-color:     $gray-600 !default;\n$blockquote-footer-font-size: $small-font-size !default;\n\n$hr-margin-y:                 $spacer !default;\n$hr-color:                    inherit !default;\n\n// fusv-disable\n$hr-bg-color:                 null !default; // Deprecated in v5.2.0\n$hr-height:                   null !default; // Deprecated in v5.2.0\n// fusv-enable\n\n$hr-border-color:             null !default; // Allows for inherited colors\n$hr-border-width:             var(--#{$prefix}border-width) !default;\n$hr-opacity:                  .25 !default;\n\n// scss-docs-start vr-variables\n$vr-border-width:             var(--#{$prefix}border-width) !default;\n// scss-docs-end vr-variables\n\n$legend-margin-bottom:        .5rem !default;\n$legend-font-size:            1.5rem !default;\n$legend-font-weight:          null !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-padding:                .1875em !default;\n$mark-color:                  $body-color !default;\n$mark-bg:                     $yellow-100 !default;",
	"utilities-bg-colors": "$utilities-bg: map-merge(\n  $utilities-colors,\n  (\n    \"black\": to-rgb($black),\n    \"white\": to-rgb($white),\n    \"body\": to-rgb($body-bg)\n  )\n) !default;\n$utilities-bg-colors: map-loop($utilities-bg, rgba-css-var, \"$key\", \"bg\") !default;\n\n$utilities-bg-subtle: (\n  \"primary-subtle\": var(--#{$prefix}primary-bg-subtle),\n  \"secondary-subtle\": var(--#{$prefix}secondary-bg-subtle),\n  \"success-subtle\": var(--#{$prefix}success-bg-subtle),\n  \"info-subtle\": var(--#{$prefix}info-bg-subtle),\n  \"warning-subtle\": var(--#{$prefix}warning-bg-subtle),\n  \"danger-subtle\": var(--#{$prefix}danger-bg-subtle),\n  \"light-subtle\": var(--#{$prefix}light-bg-subtle),\n  \"dark-subtle\": var(--#{$prefix}dark-bg-subtle)\n) !default;",
	"utilities-text-colors": "$utilities-text: map-merge(\n  $utilities-colors,\n  (\n    \"black\": to-rgb($black),\n    \"white\": to-rgb($white),\n    \"body\": to-rgb($body-color)\n  )\n) !default;\n$utilities-text-colors: map-loop($utilities-text, rgba-css-var, \"$key\", \"text\") !default;\n\n$utilities-text-emphasis-colors: (\n  \"primary-emphasis\": var(--#{$prefix}primary-text-emphasis),\n  \"secondary-emphasis\": var(--#{$prefix}secondary-text-emphasis),\n  \"success-emphasis\": var(--#{$prefix}success-text-emphasis),\n  \"info-emphasis\": var(--#{$prefix}info-text-emphasis),\n  \"warning-emphasis\": var(--#{$prefix}warning-text-emphasis),\n  \"danger-emphasis\": var(--#{$prefix}danger-text-emphasis),\n  \"light-emphasis\": var(--#{$prefix}light-text-emphasis),\n  \"dark-emphasis\": var(--#{$prefix}dark-text-emphasis)\n) !default;",
	"utils-bg-color": "\"background-color\": (\n  property: background-color,\n  class: bg,\n  local-vars: (\n    \"bg-opacity\": 1\n  ),\n  values: map-merge(\n    $utilities-bg-colors,\n    (\n      \"transparent\": transparent,\n      \"body-secondary\": rgba(var(--#{$prefix}secondary-bg-rgb), var(--#{$prefix}bg-opacity)),\n      \"body-tertiary\": rgba(var(--#{$prefix}tertiary-bg-rgb), var(--#{$prefix}bg-opacity)),\n    )\n  )\n),\n\"bg-opacity\": (\n  css-var: true,\n  class: bg-opacity,\n  values: (\n    10: .1,\n    25: .25,\n    50: .5,\n    75: .75,\n    100: 1\n  )\n),\n\"subtle-background-color\": (\n  property: background-color,\n  class: bg,\n  values: $utilities-bg-subtle\n),",
	"utils-border-radius": "\"rounded\": (\n  property: border-radius,\n  class: rounded,\n  values: (\n    null: var(--#{$prefix}border-radius),\n    0: 0,\n    1: var(--#{$prefix}border-radius-sm),\n    2: var(--#{$prefix}border-radius),\n    3: var(--#{$prefix}border-radius-lg),\n    4: var(--#{$prefix}border-radius-xl),\n    5: var(--#{$prefix}border-radius-xxl),\n    circle: 50%,\n    pill: var(--#{$prefix}border-radius-pill)\n  )\n),\n\"rounded-top\": (\n  property: border-top-left-radius border-top-right-radius,\n  class: rounded-top,\n  values: (\n    null: var(--#{$prefix}border-radius),\n    0: 0,\n    1: var(--#{$prefix}border-radius-sm),\n    2: var(--#{$prefix}border-radius),\n    3: var(--#{$prefix}border-radius-lg),\n    4: var(--#{$prefix}border-radius-xl),\n    5: var(--#{$prefix}border-radius-xxl),\n    circle: 50%,\n    pill: var(--#{$prefix}border-radius-pill)\n  )\n),\n\"rounded-end\": (\n  property: border-top-right-radius border-bottom-right-radius,\n  class: rounded-end,\n  values: (\n    null: var(--#{$prefix}border-radius),\n    0: 0,\n    1: var(--#{$prefix}border-radius-sm),\n    2: var(--#{$prefix}border-radius),\n    3: var(--#{$prefix}border-radius-lg),\n    4: var(--#{$prefix}border-radius-xl),\n    5: var(--#{$prefix}border-radius-xxl),\n    circle: 50%,\n    pill: var(--#{$prefix}border-radius-pill)\n  )\n),\n\"rounded-bottom\": (\n  property: border-bottom-right-radius border-bottom-left-radius,\n  class: rounded-bottom,\n  values: (\n    null: var(--#{$prefix}border-radius),\n    0: 0,\n    1: var(--#{$prefix}border-radius-sm),\n    2: var(--#{$prefix}border-radius),\n    3: var(--#{$prefix}border-radius-lg),\n    4: var(--#{$prefix}border-radius-xl),\n    5: var(--#{$prefix}border-radius-xxl),\n    circle: 50%,\n    pill: var(--#{$prefix}border-radius-pill)\n  )\n),\n\"rounded-start\": (\n  property: border-bottom-left-radius border-top-left-radius,\n  class: rounded-start,\n  values: (\n    null: var(--#{$prefix}border-radius),\n    0: 0,\n    1: var(--#{$prefix}border-radius-sm),\n    2: var(--#{$prefix}border-radius),\n    3: var(--#{$prefix}border-radius-lg),\n    4: var(--#{$prefix}border-radius-xl),\n    5: var(--#{$prefix}border-radius-xxl),\n    circle: 50%,\n    pill: var(--#{$prefix}border-radius-pill)\n  )\n),",
	"utils-borders": "\"border\": (\n  property: border,\n  values: (\n    null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n    0: 0,\n  )\n),\n\"border-top\": (\n  property: border-top,\n  values: (\n    null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n    0: 0,\n  )\n),\n\"border-end\": (\n  property: border-right,\n  class: border-end,\n  values: (\n    null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n    0: 0,\n  )\n),\n\"border-bottom\": (\n  property: border-bottom,\n  values: (\n    null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n    0: 0,\n  )\n),\n\"border-start\": (\n  property: border-left,\n  class: border-start,\n  values: (\n    null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),\n    0: 0,\n  )\n),\n\"border-color\": (\n  property: border-color,\n  class: border,\n  local-vars: (\n    \"border-opacity\": 1\n  ),\n  values: $utilities-border-colors\n),\n\"subtle-border-color\": (\n  property: border-color,\n  class: border,\n  values: $utilities-border-subtle\n),\n\"border-width\": (\n  property: border-width,\n  class: border,\n  values: $border-widths\n),\n\"border-opacity\": (\n  css-var: true,\n  class: border-opacity,\n  values: (\n    10: .1,\n    25: .25,\n    50: .5,\n    75: .75,\n    100: 1\n  )\n),",
	"utils-color": "\"color\": (\n  property: color,\n  class: text,\n  local-vars: (\n    \"text-opacity\": 1\n  ),\n  values: map-merge(\n    $utilities-text-colors,\n    (\n      \"muted\": var(--#{$prefix}secondary-color), // deprecated\n      \"black-50\": rgba($black, .5), // deprecated\n      \"white-50\": rgba($white, .5), // deprecated\n      \"body-secondary\": var(--#{$prefix}secondary-color),\n      \"body-tertiary\": var(--#{$prefix}tertiary-color),\n      \"body-emphasis\": var(--#{$prefix}emphasis-color),\n      \"reset\": inherit,\n    )\n  )\n),\n\"text-opacity\": (\n  css-var: true,\n  class: text-opacity,\n  values: (\n    25: .25,\n    50: .5,\n    75: .75,\n    100: 1\n  )\n),\n\"text-color\": (\n  property: color,\n  class: text,\n  values: $utilities-text-emphasis-colors\n),",
	"utils-display": "\"display\": (\n  responsive: true,\n  print: true,\n  property: display,\n  class: d,\n  values: inline inline-block block grid inline-grid table table-row table-cell flex inline-flex none\n),",
	"utils-flex": "\"flex\": (\n  responsive: true,\n  property: flex,\n  values: (fill: 1 1 auto)\n),\n\"flex-direction\": (\n  responsive: true,\n  property: flex-direction,\n  class: flex,\n  values: row column row-reverse column-reverse\n),\n\"flex-grow\": (\n  responsive: true,\n  property: flex-grow,\n  class: flex,\n  values: (\n    grow-0: 0,\n    grow-1: 1,\n  )\n),\n\"flex-shrink\": (\n  responsive: true,\n  property: flex-shrink,\n  class: flex,\n  values: (\n    shrink-0: 0,\n    shrink-1: 1,\n  )\n),\n\"flex-wrap\": (\n  responsive: true,\n  property: flex-wrap,\n  class: flex,\n  values: wrap nowrap wrap-reverse\n),\n\"justify-content\": (\n  responsive: true,\n  property: justify-content,\n  values: (\n    start: flex-start,\n    end: flex-end,\n    center: center,\n    between: space-between,\n    around: space-around,\n    evenly: space-evenly,\n  )\n),\n\"align-items\": (\n  responsive: true,\n  property: align-items,\n  values: (\n    start: flex-start,\n    end: flex-end,\n    center: center,\n    baseline: baseline,\n    stretch: stretch,\n  )\n),\n\"align-content\": (\n  responsive: true,\n  property: align-content,\n  values: (\n    start: flex-start,\n    end: flex-end,\n    center: center,\n    between: space-between,\n    around: space-around,\n    stretch: stretch,\n  )\n),\n\"align-self\": (\n  responsive: true,\n  property: align-self,\n  values: (\n    auto: auto,\n    start: flex-start,\n    end: flex-end,\n    center: center,\n    baseline: baseline,\n    stretch: stretch,\n  )\n),\n\"order\": (\n  responsive: true,\n  property: order,\n  values: (\n    first: -1,\n    0: 0,\n    1: 1,\n    2: 2,\n    3: 3,\n    4: 4,\n    5: 5,\n    last: 6,\n  ),\n),",
	"utils-float": "\"float\": (\n  responsive: true,\n  property: float,\n  values: (\n    start: left,\n    end: right,\n    none: none,\n  )\n),",
	"utils-focus-ring": "\"focus-ring\": (\n  css-var: true,\n  css-variable-name: focus-ring-color,\n  class: focus-ring,\n  values: map-loop($theme-colors-rgb, rgba-css-var, \"$key\", \"focus-ring\")\n),",
	"utils-interaction": "\"user-select\": (\n  property: user-select,\n  values: all auto none\n),\n\"pointer-events\": (\n  property: pointer-events,\n  class: pe,\n  values: none auto,\n),",
	"utils-links": "\"link-opacity\": (\n  css-var: true,\n  class: link-opacity,\n  state: hover,\n  values: (\n    10: .1,\n    25: .25,\n    50: .5,\n    75: .75,\n    100: 1\n  )\n),\n\"link-offset\": (\n  property: text-underline-offset,\n  class: link-offset,\n  state: hover,\n  values: (\n    1: .125em,\n    2: .25em,\n    3: .375em,\n  )\n),\n\"link-underline\": (\n  property: text-decoration-color,\n  class: link-underline,\n  local-vars: (\n    \"link-underline-opacity\": 1\n  ),\n  values: map-merge(\n    $utilities-links-underline,\n    (\n      null: rgba(var(--#{$prefix}link-color-rgb), var(--#{$prefix}link-underline-opacity, 1)),\n    )\n  )\n),\n\"link-underline-opacity\": (\n  css-var: true,\n  class: link-underline-opacity,\n  state: hover,\n  values: (\n    0: 0,\n    10: .1,\n    25: .25,\n    50: .5,\n    75: .75,\n    100: 1\n  ),\n),",
	"utils-object-fit": "\"object-fit\": (\n  responsive: true,\n  property: object-fit,\n  values: (\n    contain: contain,\n    cover: cover,\n    fill: fill,\n    scale: scale-down,\n    none: none,\n  )\n),",
	"utils-opacity": "\"opacity\": (\n  property: opacity,\n  values: (\n    0: 0,\n    25: .25,\n    50: .5,\n    75: .75,\n    100: 1,\n  )\n),",
	"utils-overflow": "\"overflow\": (\n  property: overflow,\n  values: auto hidden visible scroll,\n),\n\"overflow-x\": (\n  property: overflow-x,\n  values: auto hidden visible scroll,\n),\n\"overflow-y\": (\n  property: overflow-y,\n  values: auto hidden visible scroll,\n),",
	"utils-position": "\"position\": (\n  property: position,\n  values: static relative absolute fixed sticky\n),\n\"top\": (\n  property: top,\n  values: $position-values\n),\n\"bottom\": (\n  property: bottom,\n  values: $position-values\n),\n\"start\": (\n  property: left,\n  class: start,\n  values: $position-values\n),\n\"end\": (\n  property: right,\n  class: end,\n  values: $position-values\n),\n\"translate-middle\": (\n  property: transform,\n  class: translate-middle,\n  values: (\n    null: translate(-50%, -50%),\n    x: translateX(-50%),\n    y: translateY(-50%),\n  )\n),",
	"utils-shadow": "\"shadow\": (\n  property: box-shadow,\n  class: shadow,\n  values: (\n    null: var(--#{$prefix}box-shadow),\n    sm: var(--#{$prefix}box-shadow-sm),\n    lg: var(--#{$prefix}box-shadow-lg),\n    none: none,\n  )\n),",
	"utils-sizing": "\"width\": (\n  property: width,\n  class: w,\n  values: (\n    25: 25%,\n    50: 50%,\n    75: 75%,\n    100: 100%,\n    auto: auto\n  )\n),\n\"max-width\": (\n  property: max-width,\n  class: mw,\n  values: (100: 100%)\n),\n\"viewport-width\": (\n  property: width,\n  class: vw,\n  values: (100: 100vw)\n),\n\"min-viewport-width\": (\n  property: min-width,\n  class: min-vw,\n  values: (100: 100vw)\n),\n\"height\": (\n  property: height,\n  class: h,\n  values: (\n    25: 25%,\n    50: 50%,\n    75: 75%,\n    100: 100%,\n    auto: auto\n  )\n),\n\"max-height\": (\n  property: max-height,\n  class: mh,\n  values: (100: 100%)\n),\n\"viewport-height\": (\n  property: height,\n  class: vh,\n  values: (100: 100vh)\n),\n\"min-viewport-height\": (\n  property: min-height,\n  class: min-vh,\n  values: (100: 100vh)\n),",
	"utils-spacing": "\"margin\": (\n  responsive: true,\n  property: margin,\n  class: m,\n  values: map-merge($spacers, (auto: auto))\n),\n\"margin-x\": (\n  responsive: true,\n  property: margin-right margin-left,\n  class: mx,\n  values: map-merge($spacers, (auto: auto))\n),\n\"margin-y\": (\n  responsive: true,\n  property: margin-top margin-bottom,\n  class: my,\n  values: map-merge($spacers, (auto: auto))\n),\n\"margin-top\": (\n  responsive: true,\n  property: margin-top,\n  class: mt,\n  values: map-merge($spacers, (auto: auto))\n),\n\"margin-end\": (\n  responsive: true,\n  property: margin-right,\n  class: me,\n  values: map-merge($spacers, (auto: auto))\n),\n\"margin-bottom\": (\n  responsive: true,\n  property: margin-bottom,\n  class: mb,\n  values: map-merge($spacers, (auto: auto))\n),\n\"margin-start\": (\n  responsive: true,\n  property: margin-left,\n  class: ms,\n  values: map-merge($spacers, (auto: auto))\n),\n// Negative margin utilities\n\"negative-margin\": (\n  responsive: true,\n  property: margin,\n  class: m,\n  values: $negative-spacers\n),\n\"negative-margin-x\": (\n  responsive: true,\n  property: margin-right margin-left,\n  class: mx,\n  values: $negative-spacers\n),\n\"negative-margin-y\": (\n  responsive: true,\n  property: margin-top margin-bottom,\n  class: my,\n  values: $negative-spacers\n),\n\"negative-margin-top\": (\n  responsive: true,\n  property: margin-top,\n  class: mt,\n  values: $negative-spacers\n),\n\"negative-margin-end\": (\n  responsive: true,\n  property: margin-right,\n  class: me,\n  values: $negative-spacers\n),\n\"negative-margin-bottom\": (\n  responsive: true,\n  property: margin-bottom,\n  class: mb,\n  values: $negative-spacers\n),\n\"negative-margin-start\": (\n  responsive: true,\n  property: margin-left,\n  class: ms,\n  values: $negative-spacers\n),\n// Padding utilities\n\"padding\": (\n  responsive: true,\n  property: padding,\n  class: p,\n  values: $spacers\n),\n\"padding-x\": (\n  responsive: true,\n  property: padding-right padding-left,\n  class: px,\n  values: $spacers\n),\n\"padding-y\": (\n  responsive: true,\n  property: padding-top padding-bottom,\n  class: py,\n  values: $spacers\n),\n\"padding-top\": (\n  responsive: true,\n  property: padding-top,\n  class: pt,\n  values: $spacers\n),\n\"padding-end\": (\n  responsive: true,\n  property: padding-right,\n  class: pe,\n  values: $spacers\n),\n\"padding-bottom\": (\n  responsive: true,\n  property: padding-bottom,\n  class: pb,\n  values: $spacers\n),\n\"padding-start\": (\n  responsive: true,\n  property: padding-left,\n  class: ps,\n  values: $spacers\n),\n// Gap utility\n\"gap\": (\n  responsive: true,\n  property: gap,\n  class: gap,\n  values: $spacers\n),\n\"row-gap\": (\n  responsive: true,\n  property: row-gap,\n  class: row-gap,\n  values: $spacers\n),\n\"column-gap\": (\n  responsive: true,\n  property: column-gap,\n  class: column-gap,\n  values: $spacers\n),",
	"utils-text": "\"font-family\": (\n  property: font-family,\n  class: font,\n  values: (monospace: var(--#{$prefix}font-monospace))\n),\n\"font-size\": (\n  rfs: true,\n  property: font-size,\n  class: fs,\n  values: $font-sizes\n),\n\"font-style\": (\n  property: font-style,\n  class: fst,\n  values: italic normal\n),\n\"font-weight\": (\n  property: font-weight,\n  class: fw,\n  values: (\n    lighter: $font-weight-lighter,\n    light: $font-weight-light,\n    normal: $font-weight-normal,\n    medium: $font-weight-medium,\n    semibold: $font-weight-semibold,\n    bold: $font-weight-bold,\n    bolder: $font-weight-bolder\n  )\n),\n\"line-height\": (\n  property: line-height,\n  class: lh,\n  values: (\n    1: 1,\n    sm: $line-height-sm,\n    base: $line-height-base,\n    lg: $line-height-lg,\n  )\n),\n\"text-align\": (\n  responsive: true,\n  property: text-align,\n  class: text,\n  values: (\n    start: left,\n    end: right,\n    center: center,\n  )\n),\n\"text-decoration\": (\n  property: text-decoration,\n  values: none underline line-through\n),\n\"text-transform\": (\n  property: text-transform,\n  class: text,\n  values: lowercase uppercase capitalize\n),\n\"white-space\": (\n  property: white-space,\n  class: text,\n  values: (\n    wrap: normal,\n    nowrap: nowrap,\n  )\n),\n\"word-wrap\": (\n  property: word-wrap word-break,\n  class: text,\n  values: (break: break-word),\n  rtl: false\n),",
	"utils-vertical-align": "\"align\": (\n  property: vertical-align,\n  class: align,\n  values: baseline top middle bottom text-bottom text-top\n),",
	"utils-visibility": "\"visibility\": (\n  property: visibility,\n  class: null,\n  values: (\n    visible: visible,\n    invisible: hidden,\n  )\n),",
	"utils-zindex": "\"z-index\": (\n  property: z-index,\n  class: z,\n  values: $zindex-levels,\n)",
	"variable-gradient": "$gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0)) !default;",
	"vr-variables": "$vr-border-width:             var(--#{$prefix}border-width) !default;",
	"zindex-levels-map": "$zindex-levels: (\n  n1: -1,\n  0: 0,\n  1: 1,\n  2: 2,\n  3: 3\n) !default;",
	"zindex-stack": "$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-offcanvas-backdrop:         1040 !default;\n$zindex-offcanvas:                  1045 !default;\n$zindex-modal-backdrop:             1050 !default;\n$zindex-modal:                      1055 !default;\n$zindex-popover:                    1070 !default;\n$zindex-tooltip:                    1080 !default;\n$zindex-toast:                      1090 !default;",
	"accordion-css-vars": "--#{$prefix}accordion-color: #{$accordion-color};\n--#{$prefix}accordion-bg: #{$accordion-bg};\n--#{$prefix}accordion-transition: #{$accordion-transition};\n--#{$prefix}accordion-border-color: #{$accordion-border-color};\n--#{$prefix}accordion-border-width: #{$accordion-border-width};\n--#{$prefix}accordion-border-radius: #{$accordion-border-radius};\n--#{$prefix}accordion-inner-border-radius: #{$accordion-inner-border-radius};\n--#{$prefix}accordion-btn-padding-x: #{$accordion-button-padding-x};\n--#{$prefix}accordion-btn-padding-y: #{$accordion-button-padding-y};\n--#{$prefix}accordion-btn-color: #{$accordion-button-color};\n--#{$prefix}accordion-btn-bg: #{$accordion-button-bg};\n--#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon)};\n--#{$prefix}accordion-btn-icon-width: #{$accordion-icon-width};\n--#{$prefix}accordion-btn-icon-transform: #{$accordion-icon-transform};\n--#{$prefix}accordion-btn-icon-transition: #{$accordion-icon-transition};\n--#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};\n--#{$prefix}accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};\n--#{$prefix}accordion-body-padding-x: #{$accordion-body-padding-x};\n--#{$prefix}accordion-body-padding-y: #{$accordion-body-padding-y};\n--#{$prefix}accordion-active-color: #{$accordion-button-active-color};\n--#{$prefix}accordion-active-bg: #{$accordion-button-active-bg};"
};
// src/components/ScssDocs.vue
var _sfc_main$9 = {
	__name: "ScssDocs",
	__ssrInlineRender: true,
	props: {
		name: {
			type: String,
			required: true
		},
		file: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const content = scss_default[props.name] || "暂无内容";
		const isCopy = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BiCheckLg = check_lg_default;
			const _component_BiCopy = copy_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bd-code-snippet" }, _attrs))}><div class="d-flex align-items-center bg-body-tertiary px-3 py-2 border rounded-top"><a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"${ssrRenderAttr("href", `https://github.com/twbs/bootstrap/blob/v5.3.8/${props.file}`)}>${ssrInterpolate(props.file)}</a><div class="ms-auto">`);
			if (isCopy.value) _push(ssrRenderComponent(_component_BiCheckLg, { class: "text-success" }, null, _parent));
			else {
				_push(`<a role="button" class="text-body" title="Copy" aria-label="Copy">`);
				_push(ssrRenderComponent(_component_BiCopy, null, null, _parent));
				_push(`</a>`);
			}
			_push(`</div></div>`);
			_push(ssrRenderComponent(_sfc_main$16, {
				code: unref(content),
				lang: "sass"
			}, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ScssDocs.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
// src/components/DeprecatedIn.vue
var _sfc_main$8 = {
	__name: "DeprecatedIn",
	__ssrInlineRender: true,
	props: { version: {
		type: String,
		default: null
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<small${ssrRenderAttrs(mergeProps({ class: "d-inline-flex mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2" }, _attrs))}> Deprecated in v${ssrInterpolate(props.version)}</small>`);
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DeprecatedIn.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
// src/components/CalloutDeprecatedDarkVariants.vue
var _sfc_main$7 = {
	__name: "CalloutDeprecatedDarkVariants",
	__ssrInlineRender: true,
	props: { component: {
		type: String,
		default: null
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bd-callout bd-callout-warning" }, _attrs))}><p><strong>Heads up!</strong> Dark variants for components were deprecated in v5.3.0 with the introduction of color modes. Instead of adding <code>.${ssrInterpolate(props.component)}-dark</code>, set <code>data-bs-theme=&quot;dark&quot;</code> on the root element, a parent wrapper, or the component itself. </p></div>`);
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CalloutDeprecatedDarkVariants.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
// src/components/JsDismiss.vue
var _sfc_main$6 = {
	__name: "JsDismiss",
	__ssrInlineRender: true,
	props: { name: {
		type: String,
		default: null
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$17;
			_push(`<!--[--><p>Dismissal can be achieved with the <code>data-bs-dismiss</code> attribute on a button <strong>within the {name}</strong> as demonstrated below:</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: `<button type="button" class="btn-close" data-bs-dismiss="${props.name}" aria-label="Close"></button>`,
				lang: "html"
			}, null, _parent));
			_push(`<p>or on a button <strong>outside the {name}</strong> using the additional <code>data-bs-target</code> as demonstrated below:</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: `<button type="button" class="btn-close" data-bs-dismiss="${props.name}" data-bs-target="#my-${props.name}" aria-label="Close"></button>`,
				lang: "html"
			}, null, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/JsDismiss.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
// src/components/JsDataAttributes.vue
var _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<!--[--><p> As options can be passed via data attributes or JavaScript, you can append an option name to <code>data-bs-</code>, as in <code>data-bs-animation=&quot;{value}&quot;</code>. Make sure to change the case type of the option name from “<em>camelCase</em>” to “<em>kebab-case</em>” when passing the options via data attributes. For example, use <code>data-bs-custom-class=&quot;beautifier&quot;</code> instead of <code>data-bs-customClass=&quot;beautifier&quot;</code>. </p><p> As of Bootstrap 5.2.0, all components support an <strong>experimental</strong> reserved data attribute <code>data-bs-config</code> that can house simple component configuration as a JSON string. When an element has <code>data-bs-config=&#39;{&quot;delay&quot;:0, &quot;title&quot;:123}&#39;</code> and <code>data-bs-title=&quot;456&quot;</code> attributes, the final <code>title</code> value will be <code>456</code> and the separate data attributes will override values given on <code>data-bs-config</code>. In addition, existing data attributes are able to house JSON values like <code>data-bs-delay=&#39;{&quot;show&quot;:0,&quot;hide&quot;:150}&#39;</code>. </p><p>The final configuration object is the merged result of <code>data-bs-config</code>, <code>data-bs-</code>, and <code>js object</code> where the latest given key-value overrides the others.</p><!--]-->`);
}
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/JsDataAttributes.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var JsDataAttributes_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
// src/components/GuideFooter.vue
var _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<!--[--><hr class="my-5"><p><em> See something wrong or out of date here? Please <a href="[[config:repo]]/issues/new/choose">open an issue on GitHub</a>. Need help troubleshooting? <a href="[[config:repo]]/discussions">Search or start a discussion</a> on GitHub. </em></p><!--]-->`);
}
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/GuideFooter.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var GuideFooter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
// ~icons/bi/arrow-right
var _hoisted_1$1 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		"fill-rule": "evenodd",
		d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
	}, null, -1)])]);
}
var arrow_right_default = markRaw({
	name: "bi-arrow-right",
	render: render$1
});
// ~icons/bi/arrow-left
var _hoisted_1 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		"fill-rule": "evenodd",
		d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
	}, null, -1)])]);
}
var arrow_left_default = markRaw({
	name: "bi-arrow-left",
	render
});
// src/components/DocsPager.vue
var _sfc_main$3 = {
	__name: "DocsPager",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const currentIndex = flatPages.findIndex((page) => page.path === route.path);
		const prev = currentIndex > 0 ? flatPages[currentIndex - 1] : null;
		const next = currentIndex !== -1 && currentIndex < flatPages.length - 1 ? flatPages[currentIndex + 1] : null;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			const _component_bi_arrow_left = arrow_left_default;
			const _component_bi_arrow_right = arrow_right_default;
			if (unref(prev) || unref(next)) {
				_push(`<nav${ssrRenderAttrs(mergeProps({
					class: "d-flex justify-content-between mt-4",
					"aria-label": "文档翻页导航"
				}, _attrs))}>`);
				if (unref(prev)) _push(ssrRenderComponent(_component_RouterLink, {
					to: unref(prev).path,
					class: "py-3 text-decoration-none"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="small text-secondary mb-1"${_scopeId}>`);
							_push(ssrRenderComponent(_component_bi_arrow_left, null, null, _parent, _scopeId));
							_push(` 上一页</div><div${_scopeId}>${ssrInterpolate(unref(prev).title)}</div>`);
						} else return [createVNode("div", { class: "small text-secondary mb-1" }, [createVNode(_component_bi_arrow_left), createTextVNode(" 上一页")]), createVNode("div", null, toDisplayString(unref(prev).title), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<span class="col-5"></span>`);
				if (unref(next)) _push(ssrRenderComponent(_component_RouterLink, {
					to: unref(next).path,
					class: "py-3 text-end text-decoration-none"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="small text-secondary mb-1"${_scopeId}>下一页 `);
							_push(ssrRenderComponent(_component_bi_arrow_right, null, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}>${ssrInterpolate(unref(next).title)}</div>`);
						} else return [createVNode("div", { class: "small text-secondary mb-1" }, [createTextVNode("下一页 "), createVNode(_component_bi_arrow_right)]), createVNode("div", null, toDisplayString(unref(next).title), 1)];
					}),
					_: 1
				}, _parent));
				else _push(`<span class="col-5"></span>`);
				_push(`</nav>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DocsPager.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
// src/components/JsDocs.vue
var _sfc_main$2 = {
	__name: "JsDocs",
	__ssrInlineRender: true,
	props: {
		name: { type: String },
		file: { type: String }
	},
	setup(__props) {
		const props = __props;
		let content = null;
		if (props.name === "live-alert") content = `const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    \`<div class="alert alert-\${type} alert-dismissible" role="alert">\`,
    \`   <div>\${message}</div>\`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}`;
		else if (props.name === "varying-modal-content") content = `const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = \`\`New message to \${recipient}\`\`
    modalBodyInput.value = recipient
  })
}`;
		else if (props.name === "live-toast") content = `const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}`;
		else if (props.name === "allow-list") content = `const ARIA_ATTRIBUTE_PATTERN = /^aria-[\\w-]*$/i

export const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}`;
		const isCopy = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BiCheckLg = check_lg_default;
			const _component_BiCopy = copy_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bd-code-snippet" }, _attrs))}><div class="d-flex align-items-center bg-body-tertiary px-3 py-2 border rounded-top"><a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small"${ssrRenderAttr("href", `https://github.com/twbs/bootstrap/blob/v5.3.8/${props.file}`)}>${ssrInterpolate(props.file)}</a><div class="ms-auto">`);
			if (isCopy.value) _push(ssrRenderComponent(_component_BiCheckLg, { class: "text-success" }, null, _parent));
			else {
				_push(`<a role="button" class="text-body" title="Copy" aria-label="Copy">`);
				_push(ssrRenderComponent(_component_BiCopy, null, null, _parent));
				_push(`</a>`);
			}
			_push(`</div></div>`);
			_push(ssrRenderComponent(_sfc_main$16, {
				code: unref(content),
				lang: "javascript"
			}, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/JsDocs.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
// src/components/Placeholder.vue
var _sfc_main$1 = {
	__name: "Placeholder",
	__ssrInlineRender: true,
	props: {
		height: {
			type: String,
			default: "180"
		},
		width: {
			type: String,
			default: "100%"
		},
		background: {
			type: String,
			default: "#868e96"
		},
		color: {
			type: String,
			default: "#dee2e6"
		},
		markup: {
			type: String,
			default: "svg"
		},
		text: {
			type: [String, Boolean],
			default: void 0
		},
		title: {
			type: [String, Boolean],
			default: "Placeholder"
		},
		class: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const props = __props;
		const placeholderAriaHidden = props.title === false && props.text === false ? "true" : void 0;
		const placeholderLabel = props.text !== false || props.title !== false ? `${props.title !== false ? props.title : ""}${props.text !== false && props.title !== false ? ": " : ""}${props.text !== false ? props.text : ""}` : void 0;
		const placeholderRole = props.text !== false || props.title !== false ? "img" : void 0;
		const srcVal = getPlaceholderSrc(props.title !== false, props.text !== false, {
			background: props.background,
			color: props.color,
			text: props.text,
			title: props.title
		});
		function getPlaceholderSrc(showTitle, showText, { background, color, text, title }) {
			const bgColor = background.replace(/^#/, "");
			const textColor = color.replace(/^#/, "");
			let svg = `<svg style='font-size: 1.125rem; font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; -webkit-user-select: none; -moz-user-select: none; user-select: none; text-anchor: middle;' width='200' height='200' xmlns='http://www.w3.org/2000/svg'>`;
			if (showTitle) svg += `<title>${title}</title>`;
			svg += `<rect width='100%' height='100%' fill='#${bgColor}'></rect>`;
			if (showText) svg += `<text x='50%' y='50%' fill='#${textColor}' dy='.3em'>${text}</text>`;
			svg += `</svg>`;
			return `data:image/svg+xml,${encodeURIComponent(svg)}`;
		}
		const textContent = props.text !== void 0 ? props.text : props.width + "x" + props.height;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			if (props.markup === "svg") {
				_push(`<svg${ssrRenderAttr("aria-hidden", unref(placeholderAriaHidden))}${ssrRenderAttr("aria-label", unref(placeholderLabel))}${ssrRenderAttr("height", props.height)} class="${ssrRenderClass([props.class, "bd-placeholder-img"])}"${ssrRenderAttr("role", unref(placeholderRole))}${ssrRenderAttr("width", props.width)} xmlns="http://www.w3.org/2000/svg">`);
				if (props.title !== false) _push(`<title>${ssrInterpolate(props.title)}</title>`);
				else _push(`<!---->`);
				_push(`<rect width="100%" height="100%"${ssrRenderAttr("fill", props.background)}></rect>`);
				if (props.text !== false) _push(`<text x="50%" y="50%" fill="#dee2e6" dy=".3em">${ssrInterpolate(unref(textContent))}</text>`);
				else _push(`<!---->`);
				_push(`</svg>`);
			} else _push(`<!---->`);
			if (props.markup === "img") _push(`<img${ssrRenderAttr("alt", unref(placeholderLabel))}${ssrRenderAttr("height", props.height)}${ssrRenderAttr("width", props.width)}${ssrRenderAttr("src", unref(srcVal))}>`);
			else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Placeholder.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// src/components/TableBs.vue
var _sfc_main = {
	__name: "TableBs",
	__ssrInlineRender: true,
	props: {
		class: { type: String },
		simplified: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const tableCode = `<table class="${props.class}">
${props.simplified ? "  ..." : `<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>`}
</table>`;
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$17;
			_push(`<!--[--><div class="bd-example border rounded mb-3"><table class="${ssrRenderClass(props.class)}"><thead><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr></thead><tbody><tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>John</td><td>Doe</td><td>@social</td></tr></tbody></table></div>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: tableCode,
				lang: "html"
			}, null, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TableBs.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
// src/main.js
var routes = [{
	path: "/",
	redirect: `${flatPages[0].path}`
}];
flatPages.forEach((page) => {
	if (page.pageSlug) routes.push({
		path: page.path,
		component: () => _rolldown_dynamic_import_helper_default(/* #__PURE__ */ Object.assign({
			"./pages/zh-CN/about/brand.vue": () => import("./assets/brand-CeR2B_er.js"),
			"./pages/zh-CN/about/license.vue": () => import("./assets/license-BWrREOyW.js"),
			"./pages/zh-CN/about/overview.vue": () => import("./assets/overview-CM_KSFQN.js"),
			"./pages/zh-CN/about/team.vue": () => import("./assets/team-tYlp33-q.js"),
			"./pages/zh-CN/about/translations.vue": () => import("./assets/translations-B1opa9a-.js"),
			"./pages/zh-CN/components/accordion.vue": () => import("./assets/accordion-Bn94nVtc.js"),
			"./pages/zh-CN/components/alerts.vue": () => import("./assets/alerts-DpwMOnv2.js"),
			"./pages/zh-CN/components/badge.vue": () => import("./assets/badge-DDNnUrXx.js"),
			"./pages/zh-CN/components/breadcrumb.vue": () => import("./assets/breadcrumb-CgMPrHp7.js"),
			"./pages/zh-CN/components/button-group.vue": () => import("./assets/button-group-lDQ8tiV8.js"),
			"./pages/zh-CN/components/buttons.vue": () => import("./assets/buttons-DN0tsw2z.js"),
			"./pages/zh-CN/components/card.vue": () => import("./assets/card-1oKLp4r3.js"),
			"./pages/zh-CN/components/carousel.vue": () => import("./assets/carousel--EUcz2fs.js"),
			"./pages/zh-CN/components/close-button.vue": () => import("./assets/close-button-D6sM43P4.js"),
			"./pages/zh-CN/components/collapse.vue": () => import("./assets/collapse-CfSzw-xD.js"),
			"./pages/zh-CN/components/dropdowns.vue": () => import("./assets/dropdowns-BCkkTtLa.js"),
			"./pages/zh-CN/components/list-group.vue": () => import("./assets/list-group-BvysX6VH.js"),
			"./pages/zh-CN/components/modal.vue": () => import("./assets/modal-CyGsILJ2.js"),
			"./pages/zh-CN/components/navbar.vue": () => import("./assets/navbar-CXtN2zDI.js"),
			"./pages/zh-CN/components/navs-tabs.vue": () => import("./assets/navs-tabs-D3aaoqtR.js"),
			"./pages/zh-CN/components/offcanvas.vue": () => import("./assets/offcanvas--Klyd-93.js"),
			"./pages/zh-CN/components/pagination.vue": () => import("./assets/pagination-DNXfiOUw.js"),
			"./pages/zh-CN/components/placeholders.vue": () => import("./assets/placeholders-DBL6wSjw.js"),
			"./pages/zh-CN/components/popovers.vue": () => import("./assets/popovers-bqzW7tSD.js"),
			"./pages/zh-CN/components/progress.vue": () => import("./assets/progress-BIE8XQUZ.js"),
			"./pages/zh-CN/components/scrollspy.vue": () => import("./assets/scrollspy-CCYTNiPx.js"),
			"./pages/zh-CN/components/spinners.vue": () => import("./assets/spinners-C48MqIKg.js"),
			"./pages/zh-CN/components/toasts.vue": () => import("./assets/toasts-DkFOypVj.js"),
			"./pages/zh-CN/components/tooltips.vue": () => import("./assets/tooltips-lD7UFd8O.js"),
			"./pages/zh-CN/content/figures.vue": () => import("./assets/figures-DTXNJRqg.js"),
			"./pages/zh-CN/content/images.vue": () => import("./assets/images-DJHxFhYR.js"),
			"./pages/zh-CN/content/reboot.vue": () => import("./assets/reboot-BKZAUWud.js"),
			"./pages/zh-CN/content/tables.vue": () => import("./assets/tables-CveYa46F.js"),
			"./pages/zh-CN/content/typography.vue": () => import("./assets/typography-FVsmrs2J.js"),
			"./pages/zh-CN/customize/color-modes.vue": () => import("./assets/color-modes-lE5jWHaY.js"),
			"./pages/zh-CN/customize/color.vue": () => import("./assets/color-CibCDIxa.js"),
			"./pages/zh-CN/customize/components.vue": () => import("./assets/components-DPdyBK5k.js"),
			"./pages/zh-CN/customize/css-variables.vue": () => import("./assets/css-variables-D_5R1blr.js"),
			"./pages/zh-CN/customize/optimize.vue": () => import("./assets/optimize-BcpWmIdd.js"),
			"./pages/zh-CN/customize/options.vue": () => import("./assets/options-By8M-ogz.js"),
			"./pages/zh-CN/customize/overview.vue": () => import("./assets/overview-CzKOFS7W.js"),
			"./pages/zh-CN/customize/sass.vue": () => import("./assets/sass-Crt_R3A1.js"),
			"./pages/zh-CN/extend/approach.vue": () => import("./assets/approach-Dhmz7uny.js"),
			"./pages/zh-CN/extend/icons.vue": () => import("./assets/icons-CLv-fC3D.js"),
			"./pages/zh-CN/forms/checks-radios.vue": () => import("./assets/checks-radios-DuytYEN3.js"),
			"./pages/zh-CN/forms/floating-labels.vue": () => import("./assets/floating-labels-DLdLbaCX.js"),
			"./pages/zh-CN/forms/form-control.vue": () => import("./assets/form-control-BlWcuO4B.js"),
			"./pages/zh-CN/forms/input-group.vue": () => import("./assets/input-group-dOac8d4I.js"),
			"./pages/zh-CN/forms/layout.vue": () => import("./assets/layout-DBm-WR_B.js"),
			"./pages/zh-CN/forms/overview.vue": () => import("./assets/overview-DvpzqwZp.js"),
			"./pages/zh-CN/forms/range.vue": () => import("./assets/range-CVn1SPGv.js"),
			"./pages/zh-CN/forms/select.vue": () => import("./assets/select-CO9k2FFQ.js"),
			"./pages/zh-CN/forms/validation.vue": () => import("./assets/validation-Bd23GFHA.js"),
			"./pages/zh-CN/getting-started/accessibility.vue": () => import("./assets/accessibility-BwDOPOz6.js"),
			"./pages/zh-CN/getting-started/best-practices.vue": () => import("./assets/best-practices-Bv6lVMN0.js"),
			"./pages/zh-CN/getting-started/browsers-devices.vue": () => import("./assets/browsers-devices-BpH6Bdja.js"),
			"./pages/zh-CN/getting-started/contents.vue": () => import("./assets/contents-0gFCEkmG.js"),
			"./pages/zh-CN/getting-started/contribute.vue": () => import("./assets/contribute-3onKxZXg.js"),
			"./pages/zh-CN/getting-started/download.vue": () => import("./assets/download-Cs3kQ45e.js"),
			"./pages/zh-CN/getting-started/introduction.vue": () => import("./assets/introduction-CkVYp3hY.js"),
			"./pages/zh-CN/getting-started/javascript.vue": () => import("./assets/javascript-C1r9tlZr.js"),
			"./pages/zh-CN/getting-started/parcel.vue": () => import("./assets/parcel-CcGMNwa2.js"),
			"./pages/zh-CN/getting-started/rfs.vue": () => import("./assets/rfs-DMeiYt3b.js"),
			"./pages/zh-CN/getting-started/rtl.vue": () => import("./assets/rtl-CtD2n9Pp.js"),
			"./pages/zh-CN/getting-started/vite.vue": () => import("./assets/vite-DARTtyiQ.js"),
			"./pages/zh-CN/getting-started/webpack.vue": () => import("./assets/webpack-DKrispgT.js"),
			"./pages/zh-CN/helpers/clearfix.vue": () => import("./assets/clearfix-o9WgWEEB.js"),
			"./pages/zh-CN/helpers/color-background.vue": () => import("./assets/color-background-BL-_Dud6.js"),
			"./pages/zh-CN/helpers/colored-links.vue": () => import("./assets/colored-links-DrJ3UHpc.js"),
			"./pages/zh-CN/helpers/focus-ring.vue": () => import("./assets/focus-ring-14FsPpMM.js"),
			"./pages/zh-CN/helpers/icon-link.vue": () => import("./assets/icon-link-tJ_2-r2e.js"),
			"./pages/zh-CN/helpers/position.vue": () => import("./assets/position-uNiJBadu.js"),
			"./pages/zh-CN/helpers/ratio.vue": () => import("./assets/ratio-Bb9XO0BA.js"),
			"./pages/zh-CN/helpers/stacks.vue": () => import("./assets/stacks-ChKufHYV.js"),
			"./pages/zh-CN/helpers/stretched-link.vue": () => import("./assets/stretched-link-CtnUMfbm.js"),
			"./pages/zh-CN/helpers/text-truncation.vue": () => import("./assets/text-truncation-5WW7O52i.js"),
			"./pages/zh-CN/helpers/vertical-rule.vue": () => import("./assets/vertical-rule-DmsBZpvn.js"),
			"./pages/zh-CN/helpers/visually-hidden.vue": () => import("./assets/visually-hidden-Dh4M0zTP.js"),
			"./pages/zh-CN/layout/breakpoints.vue": () => import("./assets/breakpoints-KXQn_yh4.js"),
			"./pages/zh-CN/layout/columns.vue": () => import("./assets/columns-C5I9i8CI.js"),
			"./pages/zh-CN/layout/containers.vue": () => import("./assets/containers-DU4blbiL.js"),
			"./pages/zh-CN/layout/css-grid.vue": () => import("./assets/css-grid-BI79EPNY.js"),
			"./pages/zh-CN/layout/grid.vue": () => import("./assets/grid-jle0AlrZ.js"),
			"./pages/zh-CN/layout/gutters.vue": () => import("./assets/gutters-BJvmL4_9.js"),
			"./pages/zh-CN/layout/utilities.vue": () => import("./assets/utilities-Dy-omJvW.js"),
			"./pages/zh-CN/layout/z-index.vue": () => import("./assets/z-index-Dj1i4JAy.js"),
			"./pages/zh-CN/utilities/api.vue": () => import("./assets/api-EK8ywDK9.js"),
			"./pages/zh-CN/utilities/background.vue": () => import("./assets/background-BQCN9Uni.js"),
			"./pages/zh-CN/utilities/borders.vue": () => import("./assets/borders-bn6ydvpV.js"),
			"./pages/zh-CN/utilities/colors.vue": () => import("./assets/colors-D1IsI_4Q.js"),
			"./pages/zh-CN/utilities/display.vue": () => import("./assets/display-CJ8m4j2X.js"),
			"./pages/zh-CN/utilities/flex.vue": () => import("./assets/flex-Dnphod3y.js"),
			"./pages/zh-CN/utilities/float.vue": () => import("./assets/float-BYhrHvXw.js"),
			"./pages/zh-CN/utilities/interactions.vue": () => import("./assets/interactions-Uxi7QTZZ.js"),
			"./pages/zh-CN/utilities/link.vue": () => import("./assets/link-SonnZzts.js"),
			"./pages/zh-CN/utilities/object-fit.vue": () => import("./assets/object-fit-CBTnuwVr.js"),
			"./pages/zh-CN/utilities/opacity.vue": () => import("./assets/opacity-CbTRcXX1.js"),
			"./pages/zh-CN/utilities/overflow.vue": () => import("./assets/overflow-Cv77PBUL.js"),
			"./pages/zh-CN/utilities/position.vue": () => import("./assets/position-DvJz22zr.js"),
			"./pages/zh-CN/utilities/shadows.vue": () => import("./assets/shadows-BINuVhr7.js"),
			"./pages/zh-CN/utilities/sizing.vue": () => import("./assets/sizing-CmTbFImP.js"),
			"./pages/zh-CN/utilities/spacing.vue": () => import("./assets/spacing-CNE6L_LW.js"),
			"./pages/zh-CN/utilities/text.vue": () => import("./assets/text-ClnV1h9U.js"),
			"./pages/zh-CN/utilities/vertical-align.vue": () => import("./assets/vertical-align-CO-Ynnof.js"),
			"./pages/zh-CN/utilities/visibility.vue": () => import("./assets/visibility-Cv_QyUj8.js"),
			"./pages/zh-CN/utilities/z-index.vue": () => import("./assets/z-index-RCUXINcu.js")
		}), `./pages/zh-CN/${page.groupSlug}/${page.pageSlug}.vue`, 5)
	});
	else routes.push({
		path: page.path,
		component: () => _rolldown_dynamic_import_helper_default(/* #__PURE__ */ Object.assign({ "./pages/zh-CN/migration.vue": () => import("./assets/migration-Ce3GoCCA.js") }), `./pages/zh-CN/${page.groupSlug}.vue`, 4)
	});
});
function remToPx(remValue) {
	return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
NProgress.configure({ showSpinner: false });
var createApp = ViteSSG(_sfc_main$13, {
	base: "/",
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					el: to.hash,
					top: remToPx(4.5)
				});
			}, 300);
		});
		if (savedPosition) return savedPosition;
		else return { top: 0 };
	},
	linkActiveClass: "",
	linkExactActiveClass: ""
}, ({ app, router }) => {
	app.component("Example", _sfc_main$12);
	app.component("ExampleCustom", _sfc_main$11);
	app.component("Callout", _sfc_main$15);
	app.component("AddedIn", _sfc_main$10);
	app.component("ScssDocs", _sfc_main$9);
	app.component("CodeWrapper", _sfc_main$17);
	app.component("DeprecatedIn", _sfc_main$8);
	app.component("CalloutDeprecatedDarkVariants", _sfc_main$7);
	app.component("JsDismiss", _sfc_main$6);
	app.component("JsDataAttributes", JsDataAttributes_default);
	app.component("GuideFooter", GuideFooter_default);
	app.component("DocsPager", _sfc_main$3);
	app.component("JsDocs", _sfc_main$2);
	app.component("Placeholder", _sfc_main$1);
	app.component("TableBs", _sfc_main);
});
export { GuideFooter_default as a, _sfc_main$7 as c, createApp, _sfc_main$10 as d, _sfc_main$11 as f, _sfc_main$3 as i, _sfc_main$8 as l, data_default as m, _sfc_main$1 as n, JsDataAttributes_default as o, _sfc_main$12 as p, _sfc_main$2 as r, _sfc_main$6 as s, _sfc_main as t, _sfc_main$9 as u };
