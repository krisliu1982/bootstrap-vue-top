import { i as _sfc_main$1 } from "../main.mjs";
import { t as _sfc_main$2 } from "./Callout-8L5ndyTZ.js";
import { t as _sfc_main$3 } from "./CodeWrapper-BADWE8fG.js";
import { t as usePage } from "./use-page-CEAH98N7.js";
import { createTextVNode, createVNode, useSSRContext, withCtx } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
// src/pages/zh-CN/getting-started/download.vue
var _sfc_main = {
	__name: "download",
	__ssrInlineRender: true,
	setup(__props) {
		usePage();
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CodeWrapper = _sfc_main$3;
			const _component_Callout = _sfc_main$2;
			const _component_DocsPager = _sfc_main$1;
			_push(`<!--[--><article class="bd-content"><h1>下载</h1><p class="lead">下载 Bootstrap 即可获取编译后的 CSS 和 JavaScript、源代码，或将其与你喜爱的包管理器（如 npm、RubyGems 等）一起使用。</p><h2 id="compiled-css-and-js">编译后的 CSS 和 JS<a class="anchor-link" href="#compiled-css-and-js" aria-label="编译后的 CSS 和 JS 链接"></a></h2><p>下载 <strong>Bootstrap v5.3.8</strong> 可直接使用的编译代码，轻松放入你的项目中，其中包含：</p><ul><li> 编译并压缩的 CSS 包（参见<a href="/getting-started/contents#css-files">CSS 文件对比</a>） </li><li> 编译并压缩的 JavaScript 插件（参见<a href="/getting-started/contents#js-files">JS 文件对比</a>） </li></ul><p>其中不包含文档、源文件或任何可选的 JavaScript 依赖（如 Popper）。</p><p><a href="https://github.com/twbs/bootstrap/releases/download/v5.3.8/bootstrap-5.3.8-dist.zip" class="btn btn-bd-primary">下载</a></p><h2 id="source-files">源文件<a class="anchor-link" href="#source-files" aria-label="源文件链接"></a></h2><p>下载我们的 Sass、JavaScript 源代码和文档文件，即可使用自己的资源处理流程编译 Bootstrap。此选项需要一些额外的工具：</p><ul><li><a href="/getting-started/contribute#sass">Sass 编译器</a>，用于将 Sass 源文件编译为 CSS 文件</li><li><a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>，用于添加 CSS 厂商前缀</li></ul><p> 如果你需要我们完整的<a href="/getting-started/contribute#tooling-setup">构建工具</a>，它们已包含在内，用于开发 Bootstrap 及其文档，但很可能并不适合你自己的用途。 </p><p><a href="https://github.com/twbs/bootstrap/archive/v5.3.8.zip" class="btn btn-bd-primary">下载源代码</a></p><h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2><p>如果你想下载并查看我们的<a href="https://getbootstrap.com/docs/5.3/examples">示例</a>，可以获取已构建好的示例：</p><p><a href="https://github.com/twbs/bootstrap/releases/download/v5.3.8/bootstrap-5.3.8-examples.zip" class="btn btn-bd-primary">下载示例</a></p><h2 id="cdn-via-jsdelivr">通过 jsDelivr 使用 CDN<a class="anchor-link" href="#cdn-via-jsdelivr" aria-label="通过 jsDelivr 使用 CDN 链接"></a></h2><p>使用<a href="https://www.jsdelivr.com/">jsDelivr</a>免去下载步骤，为你的项目提供 Bootstrap 编译后 CSS 和 JS 的缓存版本。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB\" crossorigin=\"anonymous\">\r\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI\" crossorigin=\"anonymous\"><\/script>",
				lang: "html"
			}, null, _parent));
			_push(`<p>如果你使用我们编译后的 JavaScript 并且希望单独引入 Popper，请在我们的 JS 之前引入 Popper，最好通过 CDN 引入。</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "<script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js\" integrity=\"sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r\" crossorigin=\"anonymous\"><\/script>\r\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js\" integrity=\"sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y\" crossorigin=\"anonymous\"><\/script>",
				lang: "html"
			}, null, _parent));
			_push(`<h3 id="alternative-cdns">其他 CDN<a class="anchor-link" href="#alternative-cdns" aria-label="其他 CDN 链接"></a></h3><p>我们推荐<a href="https://www.jsdelivr.com/">jsDelivr</a>，并在自己的文档中使用它。但在某些情况下——例如在某些特定国家或环境中——你可能需要使用其他 CDN 提供商，如<a href="https://cdnjs.com/">cdnjs</a>或<a href="https://unpkg.com/">unpkg</a>。</p><p> 在这些 CDN 提供商上你也能找到相同的文件，只是 URL 不同。使用 cdnjs 时，你可以通过<a href="https://cdnjs.com/libraries/bootstrap">这个 Bootstrap 软件包直链</a>，复制粘贴任意版本 Bootstrap 中各个 dist 文件的现成 HTML 片段。 </p>`);
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<p${_scopeId}><strong${_scopeId}>如果某个文件的 SRI 哈希值不同，就不应使用该 CDN 上的文件，因为这意味着该文件被其他人修改过。</strong></p>`);
					else return [createVNode("p", null, [createVNode("strong", null, "如果某个文件的 SRI 哈希值不同，就不应使用该 CDN 上的文件，因为这意味着该文件被其他人修改过。")])];
				}),
				_: 1
			}, _parent));
			_push(`<p> 请注意，应比较长度相同的哈希值，例如将 <code>sha384</code> 与 <code>sha384</code> 比较，否则它们不同是正常的。因此，你可以使用<a href="https://www.srihash.org/">SRI 哈希生成器</a>等在线工具，确保同一文件的哈希值相同。或者，假设你已安装 OpenSSL，也可以从命令行完成同样的操作，例如： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "openssl dgst -sha384 -binary bootstrap.min.js | openssl base64 -A\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<h2 id="package-managers">包管理器<a class="anchor-link" href="#package-managers" aria-label="包管理器链接"></a></h2><p> 使用一些最流行的包管理器，将 Bootstrap 的<strong>源文件</strong>引入几乎任何项目。无论使用哪种包管理器，要使配置与我们的官方编译版本一致，Bootstrap 都<strong>需要<a href="/getting-started/contribute#sass">Sass 编译器</a>和<a href="https://github.com/postcss/autoprefixer">Autoprefixer</a></strong>。 </p><h3 id="npm">npm<a class="anchor-link" href="#npm" aria-label="npm 链接"></a></h3><p> 使用<a href="https://www.npmjs.com/package/bootstrap">npm 包</a>在你的 Node.js 应用中安装 Bootstrap： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "npm install bootstrap@5.3.8\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<p><code>const bootstrap = require(&#39;bootstrap&#39;)</code> 或 <code>import bootstrap from &#39;bootstrap&#39;</code> 会将 Bootstrap 的所有插件加载到一个 <code>bootstrap</code> 对象上。<code>bootstrap</code> 模块本身导出了我们的所有插件。你也可以通过加载包顶层目录下的 <code>/js/dist/*.js</code> 文件，手动单独加载 Bootstrap 的插件。 </p><p>Bootstrap 的 <code>package.json</code> 在以下键下包含一些额外的元数据：</p><ul><li><code>sass</code> - Bootstrap 主<a href="https://sass-lang.com/">Sass</a>源文件的路径</li><li><code>style</code> - 使用默认设置（无自定义）编译的 Bootstrap 未压缩 CSS 的路径</li></ul>`);
			_push(ssrRenderComponent(_component_Callout, { name: "info-npm-starter" }, null, _parent));
			_push(`<h3 id="yarn">yarn<a class="anchor-link" href="#yarn" aria-label="yarn 链接"></a></h3><p> 使用<a href="https://yarnpkg.com/en/package/bootstrap">yarn 包</a>在你的 Node.js 应用中安装 Bootstrap： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "yarn add bootstrap@5.3.8\r\n",
				lang: "shell"
			}, null, _parent));
			_push(ssrRenderComponent(_component_Callout, { type: "warning" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<p${_scopeId}><strong${_scopeId}>Yarn 2+（又名 Yarn Berry）默认不支持 <code${_scopeId}>node_modules</code> 目录</strong>：使用我们的<a href="https://github.com/twbs/examples/tree/main/sass-js"${_scopeId}>Sass &amp; JS 示例</a>需要做一些调整： </p>`);
						_push(ssrRenderComponent(_component_CodeWrapper, {
							code: "yarn config set nodeLinker node-modules # Use the node_modules linker\r\ntouch yarn.lock # Create an empty yarn.lock file\r\nyarn install # Install the dependencies\r\nyarn start # Start the project\r\n",
							lang: "shell"
						}, null, _parent, _scopeId));
					} else return [createVNode("p", null, [
						createVNode("strong", null, [
							createTextVNode("Yarn 2+（又名 Yarn Berry）默认不支持 "),
							createVNode("code", null, "node_modules"),
							createTextVNode(" 目录")
						]),
						createTextVNode("：使用我们的"),
						createVNode("a", { href: "https://github.com/twbs/examples/tree/main/sass-js" }, "Sass & JS 示例"),
						createTextVNode("需要做一些调整： ")
					]), createVNode(_component_CodeWrapper, {
						code: "yarn config set nodeLinker node-modules # Use the node_modules linker\r\ntouch yarn.lock # Create an empty yarn.lock file\r\nyarn install # Install the dependencies\r\nyarn start # Start the project\r\n",
						lang: "shell"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<h3 id="bun">Bun<a class="anchor-link" href="#bun" aria-label="Bun 链接"></a></h3><p>使用<a href="https://bun.sh/">Bun CLI</a>在你的 Bun 或 Node.js 应用中安装 Bootstrap：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "bun add bootstrap@5.3.8\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<h3 id="rubygems">RubyGems<a class="anchor-link" href="#rubygems" aria-label="RubyGems 链接"></a></h3><p> 使用<a href="https://bundler.io/">Bundler</a>（<strong>推荐</strong>）和<a href="https://rubygems.org/">RubyGems</a>，将下面这行添加到你的<a href="https://bundler.io/guides/gemfile.html"><code>Gemfile</code></a>中，即可在你的 Ruby 应用中安装 Bootstrap： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "gem 'bootstrap', '~> 5.3.8'",
				lang: "text"
			}, null, _parent));
			_push(`<p>或者，如果你没有使用 Bundler，可以运行以下命令安装该 gem：</p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "gem install bootstrap -v 5.3.8\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<p>更多详情请参阅<a href="https://github.com/twbs/bootstrap-rubygem/blob/main/README.md">该 gem 的 README</a>。</p><h3 id="composer">Composer<a class="anchor-link" href="#composer" aria-label="Composer 链接"></a></h3><p> 你还可以使用<a href="https://getcomposer.org/">Composer</a>安装和管理 Bootstrap 的 Sass 和 JavaScript： </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "composer require twbs/bootstrap:5.3.8\r\n",
				lang: "shell"
			}, null, _parent));
			_push(`<h3 id="nuget">NuGet<a class="anchor-link" href="#nuget" aria-label="NuGet 链接"></a></h3><p> 如果你使用 .NET Framework 开发，也可以使用<a href="https://www.nuget.org/">NuGet</a>安装和管理 Bootstrap 的<a href="https://www.nuget.org/packages/bootstrap/">CSS</a>或<a href="https://www.nuget.org/packages/bootstrap.sass/">Sass</a>以及 JavaScript。较新的项目应使用<a href="https://learn.microsoft.com/en-us/aspnet/core/client-side/libman/">libman</a>或其他方式，因为 NuGet 是为编译代码而非前端资源设计的。 </p>`);
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "Install-Package bootstrap\r\n",
				lang: "powershell"
			}, null, _parent));
			_push(ssrRenderComponent(_component_CodeWrapper, {
				code: "Install-Package bootstrap.sass\r\n",
				lang: "powershell"
			}, null, _parent));
			_push(`<h2 id="intellisense-extension">IntelliSense 扩展<a class="anchor-link" href="#intellisense-extension" aria-label="IntelliSense 扩展链接"></a></h2><img class="d-block mb-4 img-fluid rounded-3" src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-intellisense-autocomplete.png" width="573" height="332" alt=""><p> 安装社区维护的 Visual Studio Code<a href="https://marketplace.visualstudio.com/items?itemName=hossaini.bootstrap-intellisense">IntelliSense 扩展</a>，即可获得 Bootstrap 类的 IntelliSense 自动补全。 </p><p><a href="https://marketplace.visualstudio.com/items?itemName=hossaini.bootstrap-intellisense" class="btn btn-bd-primary">在 VS Code 市场中查看</a></p>`);
			_push(ssrRenderComponent(_component_DocsPager, null, null, _parent));
			_push(`</article><nav class="bd-toc" aria-label="本页目录"><h6>本页目录</h6><ul><li><a href="#compiled-css-and-js">编译后的 CSS 和 JS</a></li><li><a href="#source-files">源文件</a></li><li><a href="#examples">示例</a></li><li><a href="#cdn-via-jsdelivr">通过 jsDelivr 使用 CDN</a><ul><li><a href="#alternative-cdns">其他 CDN</a></li></ul></li><li><a href="#package-managers">包管理器</a><ul><li><a href="#npm">npm</a></li><li><a href="#yarn">yarn</a></li><li><a href="#bun">Bun</a></li><li><a href="#rubygems">RubyGems</a></li><li><a href="#composer">Composer</a></li><li><a href="#nuget">NuGet</a></li></ul></li><li><a href="#intellisense-extension">IntelliSense 扩展</a></li></ul></nav><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/zh-CN/getting-started/download.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as default };
