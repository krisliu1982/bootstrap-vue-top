import { createElementBlock, createElementVNode, markRaw, openBlock } from "vue";
import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
// \0@oxc-project+runtime@0.156.0/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
	try {
		var i = n[a](c), u = i.value;
	} catch (n) {
		e(n);
		return;
	}
	i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
	return function() {
		var t = this, e = arguments;
		return new Promise(function(r, o) {
			var a = n.apply(t, e);
			function _next(n) {
				asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
			}
			function _throw(n) {
				asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
			}
			_next(void 0);
		});
	};
}
// ~icons/bi/copy
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
		d: "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
	}, null, -1)])]);
}
var copy_default = markRaw({
	name: "bi-copy",
	render: render$1
});
// ~icons/bi/check-lg
var _hoisted_1 = {
	class: "bi",
	viewBox: "0 0 16 16",
	width: "1em",
	height: "1em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [createElementVNode("path", {
		fill: "currentColor",
		d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425z"
	}, null, -1)])]);
}
var check_lg_default = markRaw({
	name: "bi-check-lg",
	render
});
// src/assets/code-highlighter.js
var highlighterPromise = createHighlighterCore({
	themes: [import("@shikijs/themes/light-plus"), import("@shikijs/themes/dark-plus")],
	langs: [
		import("@shikijs/langs/html"),
		import("@shikijs/langs/javascript"),
		import("@shikijs/langs/css"),
		import("@shikijs/langs/scss"),
		import("@shikijs/langs/sass"),
		import("@shikijs/langs/json"),
		import("@shikijs/langs/shell"),
		import("@shikijs/langs/powershell"),
		import("@shikijs/langs/diff")
	],
	engine: createJavaScriptRegexEngine()
});
function highlightCode(_x, _x2) {
	return _highlightCode.apply(this, arguments);
}
function _highlightCode() {
	_highlightCode = _asyncToGenerator(function* (code, lang) {
		return (yield highlighterPromise).codeToHtml(code, {
			lang,
			themes: {
				light: "light-plus",
				dark: "dark-plus"
			},
			defaultColor: "light-dark()"
		});
	});
	return _highlightCode.apply(this, arguments);
}
export { _asyncToGenerator as i, check_lg_default as n, copy_default as r, highlightCode as t };
