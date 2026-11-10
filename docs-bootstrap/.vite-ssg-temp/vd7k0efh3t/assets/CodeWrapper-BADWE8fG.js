import { n as check_lg_default, r as copy_default } from "./code-highlighter-B0-DSCQC.js";
import { t as _sfc_main$1 } from "./Code-DUJAk1C2.js";
import { mergeProps, ref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// src/components/CodeWrapper.vue
var _sfc_main = {
	__name: "CodeWrapper",
	__ssrInlineRender: true,
	props: {
		code: {
			type: String,
			default: null
		},
		lang: {
			type: String,
			default: "html"
		}
	},
	setup(__props) {
		const props = __props;
		const isCopy = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BiCheckLg = check_lg_default;
			const _component_BiCopy = copy_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bd-code-snippet" }, _attrs))}><div class="d-flex align-items-center bg-body-tertiary px-3 py-2 border rounded-top"><small class="font-monospace text-secondary text-uppercase">${ssrInterpolate(props.lang)}</small><div class="ms-auto">`);
			if (isCopy.value) _push(ssrRenderComponent(_component_BiCheckLg, { class: "text-success" }, null, _parent));
			else {
				_push(`<a role="button" class="text-body" title="Copy" aria-label="Copy">`);
				_push(ssrRenderComponent(_component_BiCopy, null, null, _parent));
				_push(`</a>`);
			}
			_push(`</div></div>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				code: props.code,
				lang: props.lang
			}, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CodeWrapper.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as t };
