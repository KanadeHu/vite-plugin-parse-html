var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/inject.ts
import { render } from "ejs";
function resetTags(sources) {
  const result = [];
  if (!sources.length) {
    return result;
  }
  sources.forEach((item) => {
    switch (item.type) {
      case "javaScript":
        result.push({
          tag: "script",
          attrs: __spreadValues({
            src: item.url
          }, item.attrs),
          injectTo: item.position || "head"
        });
        break;
      default:
        result.push({
          tag: "link",
          attrs: __spreadValues({
            href: item.url
          }, item.attrs),
          injectTo: item.position || "head"
        });
        break;
    }
  });
  return result;
}
function injectHtml(options) {
  return {
    name: "vite-parse-html",
    enforce: "pre",
    async transformIndexHtml(html) {
      const { data, ejsOptions, sources = [] } = options;
      const htmlStr = await render(html, data, ejsOptions);
      return {
        html: htmlStr,
        tags: resetTags(sources)
      };
    }
  };
}

// src/index.ts
var src_default = (options) => {
  const { inject: injectOpt = {} } = options;
  return [injectHtml(injectOpt)];
};
export {
  src_default as default,
  injectHtml as inject
};
