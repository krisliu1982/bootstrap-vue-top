import { i as _sfc_main$1, m as data_default } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// src/pages/zh-CN/about/team.vue
var _sfc_main = {
	__name: "team",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_DocsPager = _sfc_main$1;
			_push(`<article${ssrRenderAttrs(mergeProps({ class: "bd-content" }, _attrs))}><h1>团队</h1><p class="lead">关于 Bootstrap 创始团队和核心贡献者的概述。</p><p>Bootstrap 由创始团队和一小群不可或缺的核心贡献者维护，并得到了社区的巨力支持与参与。</p><div class="list-group mb-3"><!--[-->`);
			ssrRenderList(unref(data_default)["core-team"], (member) => {
				_push(`<a class="list-group-item list-group-item-action d-flex align-items-center"${ssrRenderAttr("href", `https://github.com/${member.user}`)}><img${ssrRenderAttr("src", `https://github.com/${member.user}.png`)}${ssrRenderAttr("alt", `@${member.user}`)} width="32" height="32" class="rounded me-2" loading="lazy"><span><strong>${ssrInterpolate(member.name)}</strong> @${ssrInterpolate(member.user)}</span></a>`);
			});
			_push(`<!--]--></div><p> 通过<a href="https://github.com/twbs/bootstrap/issues/new/choose">提交 issue</a>或提交 pull request 来参与 Bootstrap 的开发。阅读我们的<a href="https://github.com/twbs/bootstrap/blob/v5.3.8/.github/CONTRIBUTING.md">贡献指南</a>，了解我们的开发方式。 </p>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/about/team.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
