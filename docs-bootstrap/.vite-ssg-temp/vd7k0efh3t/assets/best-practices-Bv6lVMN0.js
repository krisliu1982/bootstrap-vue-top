import { i as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$2 } from "./Callout-8L5ndyTZ.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/getting-started/best-practices.vue
var _sfc_main = {
	__name: "best-practices",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Callout = _sfc_main$2;
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>最佳实践</h1><p class="lead">了解我们从多年来开发和使用的 Bootstrap 过程中总结出的一些最佳实践。</p><p>我们设计和开发 Bootstrap 时就考虑让它在多种环境中都能运行。以下是我们多年来亲自开发和使用的过程中总结出的一些最佳实践。</p>`);
			_push(ssrRenderComponent(_component_Callout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>注意！</strong>本文内容仍在完善中。</p>`);
					else return [createVNode("p", null, [createVNode("strong", null, "注意！"), createTextVNode("本文内容仍在完善中。")])];
				}),
				_: 1
			}, _parent));
			_push(`<h3 id="general-outline">总体大纲<a class="anchor-link" href="#general-outline" aria-label="总体大纲链接"></a></h3><ul><li>使用 CSS</li><li>使用 Sass 文件</li><li>构建新的 CSS 组件</li><li>使用 flexbox</li><li>在<a href="https://github.com/twbs/bootstrap/discussions">我们的 GitHub Discussions</a>中提问</li></ul>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#general-outline">总体大纲</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/getting-started/best-practices.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
