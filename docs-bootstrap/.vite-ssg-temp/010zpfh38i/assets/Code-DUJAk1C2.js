import { i as _asyncToGenerator, t as highlightCode } from "./code-highlighter-B0-DSCQC.js";
import { mergeProps, onMounted, ref, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// src/components/Code.vue
var _sfc_main = {
	__name: "Code",
	__ssrInlineRender: true,
	props: {
		code: {
			type: String,
			default: null
		},
		lang: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const html = ref(null);
		const props = __props;
		onMounted(_asyncToGenerator(function* () {
			html.value = yield highlightCode(props.code, props.lang);
		}));
		return (_ctx, _push, _parent, _attrs) => {
			var _html$value;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bd-code border border-top-0 rounded-bottom" }, _attrs))}>${(_html$value = html.value) !== null && _html$value !== void 0 ? _html$value : ""}</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Code.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as t };
