import { i as _sfc_main$1 } from "../main.mjs";
import { t as usePage } from "./use-page-CZUizOc9.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/about/overview.vue
var _sfc_main = {
	__name: "overview",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>关于 Bootstrap</h1><p class="lead">进一步了解维护 Bootstrap 的团队、项目的起源与原因，以及如何参与其中。</p><h2 id="team">团队<a class="anchor-link" href="#team" aria-label="团队链接"></a></h2><p>Bootstrap 由 GitHub 上一个<a href="https://github.com/orgs/twbs/people">小型开发者团队</a>维护。我们正在积极扩充这个团队，如果你对大规模 CSS、编写与维护原生 JavaScript 插件，以及改进前端代码的构建工具流程充满热情，我们非常期待你的加入。</p><h2 id="history">历史<a class="anchor-link" href="#history" aria-label="历史链接"></a></h2><p>Bootstrap 最初由 Twitter 的一位设计师和一位开发者创建，如今已成为全球最流行的前端框架和开源项目之一。</p><p> Bootstrap 于 2010 年中由<a href="https://x.com/mdo">@mdo</a>和<a href="https://x.com/fat">@fat</a>在 Twitter 创建。在成为开源框架之前，Bootstrap 被称为 <em>Twitter Blueprint</em>。在开发几个月后，Twitter 举办了 <a href="https://blog.x.com/engineering/en_us/a/2010/hack-week">首届黑客周</a>，随着各技能水平的开发者无需任何外部指导便纷纷加入，这个项目迅速壮大。在公开发布之前的一年多时间里，它一直是公司内部工具开发的样式指南，并延续至今。 </p><p> 它最初于 <time datetime="2011-08-19 11:25">2011 年 8 月 19 日（星期五）</time><a href="https://blog.x.com/developer/en_us/a/2011/bootstrap-twitter">发布</a>，此后我们已经发布了<a href="https://github.com/twbs/bootstrap/releases">二十多个版本</a>，其中包括 v2 和 v3 两次重大重写。在 Bootstrap 2 中，我们以可选样式表的形式为整个框架添加了响应式功能。在 Bootstrap 3 中，我们在此基础之上再次重写了这个库，使其默认就具备响应式能力，并采用移动优先的方法。 </p><p> 在 Bootstrap 4 中，我们再次重写了项目，以应对两项关键的架构变化：迁移到 Sass 以及转向 CSS 的 flexbox。我们的初衷是推动采用更新的 CSS 属性、更少的依赖项，并让新技术在更多现代浏览器中普及，从而以微薄之力帮助 Web 开发社区向前迈进。 </p><p>我们最新的版本 Bootstrap 5 致力于在尽可能少引入重大破坏性更改的前提下改进 v4 的代码库。我们改进了现有功能和组件，移除了对旧版浏览器的支持，用原生 JavaScript 替代了 jQuery，并拥抱了 CSS 自定义属性等更具前瞻性的技术，将其作为我们工具链的一部分。</p><h2 id="get-involved">参与其中<a class="anchor-link" href="#get-involved" aria-label="参与其中链接"></a></h2><p> 通过<a href="https://github.com/twbs/bootstrap/issues/new/choose">提交 issue</a>或提交 pull request 来参与 Bootstrap 的开发。阅读我们的<a href="https://github.com/twbs/bootstrap/blob/v5.3.8/.github/CONTRIBUTING.md">贡献指南</a>，了解我们的开发方式。 </p>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#team">团队</a></li><li><a href="#history">历史</a></li><li><a href="#get-involved">参与其中</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/about/overview.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
