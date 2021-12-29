var __create = Object.create
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __getOwnPropSymbols = Object.getOwnPropertySymbols
var __getProtoOf = Object.getPrototypeOf
var __hasOwnProp = Object.prototype.hasOwnProperty
var __propIsEnum = Object.prototype.propertyIsEnumerable
var __defNormalProp = (obj, key, value) =>
  key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : (obj[key] = value)
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop])
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop])
    }
  return a
}
var __markAsModule = (target) => __defProp(target, '__esModule', { value: true })
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true })
}
var __reExport = (target, module2, copyDefault, desc) => {
  if ((module2 && typeof module2 === 'object') || typeof module2 === 'function') {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== 'default'))
        __defProp(target, key, {
          get: () => module2[key],
          enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable,
        })
  }
  return target
}
var __toESM = (module2, isNodeMode) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module2 != null ? __create(__getProtoOf(module2)) : {},
        'default',
        !isNodeMode && module2 && module2.__esModule
          ? { get: () => module2.default, enumerable: true }
          : { value: module2, enumerable: true },
      ),
    ),
    module2,
  )
}
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return (
      (cache && cache.get(module2)) ||
      ((temp = __reExport(__markAsModule({}), module2, 1)), cache && cache.set(module2, temp), temp)
    )
  }
})(typeof WeakMap !== 'undefined' ? /* @__PURE__ */ new WeakMap() : 0)

// src/index.ts
var src_exports = {}
__export(src_exports, {
  default: () => src_default,
  inject: () => injectHtml,
})

// src/inject.ts
var import_ejs = __toESM(require('ejs'))
function resetTags(sources) {
  const result = []
  if (!sources.length) {
    return result
  }
  sources.forEach((item) => {
    switch (item.type) {
      case 'javaScript':
        result.push({
          tag: 'script',
          attrs: __spreadValues(
            {
              src: item.url,
            },
            item.attrs,
          ),
          injectTo: item.position || 'head',
        })
        break
      default:
        result.push({
          tag: 'link',
          attrs: __spreadValues(
            {
              href: item.url,
            },
            item.attrs,
          ),
          injectTo: item.position || 'head',
        })
        break
    }
  })
  return result
}
function injectHtml(options) {
  return {
    name: 'vite-parse-html',
    enforce: 'pre',
    async transformIndexHtml(html) {
      const { data, ejsOptions, sources = [] } = options
      const htmlStr = await (0, import_ejs.render)(html, data, ejsOptions)
      return {
        html: htmlStr,
        tags: resetTags(sources),
      }
    },
  }
}

// src/index.ts
var src_default = (options) => {
  const { inject: injectOpt = {} } = options
  return [injectHtml(injectOpt)]
}
module.exports = __toCommonJS(src_exports)
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    inject,
  })
