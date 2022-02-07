var I = Object.create
var i = Object.defineProperty
var d = Object.getOwnPropertyDescriptor
var x = Object.getOwnPropertyNames,
  l = Object.getOwnPropertySymbols,
  H = Object.getPrototypeOf,
  f = Object.prototype.hasOwnProperty,
  S = Object.prototype.propertyIsEnumerable
var u = (t, r, e) => (r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (t[r] = e)),
  p = (t, r) => {
    for (var e in r || (r = {})) f.call(r, e) && u(t, e, r[e])
    if (l) for (var e of l(r)) S.call(r, e) && u(t, e, r[e])
    return t
  }
var g = (t) => i(t, '__esModule', { value: !0 })
var v = (t, r) => {
    for (var e in r) i(t, e, { get: r[e], enumerable: !0 })
  },
  y = (t, r, e, o) => {
    if ((r && typeof r == 'object') || typeof r == 'function')
      for (let n of x(r))
        !f.call(t, n) &&
          (e || n !== 'default') &&
          i(t, n, { get: () => r[n], enumerable: !(o = d(r, n)) || o.enumerable })
    return t
  },
  s = (t, r) =>
    y(
      g(
        i(
          t != null ? I(H(t)) : {},
          'default',
          !r && t && t.__esModule ? { get: () => t.default, enumerable: !0 } : { value: t, enumerable: !0 },
        ),
      ),
      t,
    ),
  T = (
    (t) => (r, e) =>
      (t && t.get(r)) || ((e = y(g({}), r, 1)), t && t.set(r, e), e)
  )(typeof WeakMap != 'undefined' ? new WeakMap() : 0)
var C = {}
v(C, { default: () => w, inject: () => a, minify: () => c })
var O = s(require('ejs'))
function b(t) {
  let r = []
  return (
    t.length &&
      t.forEach((e) => {
        switch (e.type) {
          case 'javascript':
            r.push({ tag: 'script', attrs: p({ src: e.url }, e.attrs), injectTo: e.position || 'head' })
            break
          default:
            r.push({ tag: 'link', attrs: p({ href: e.url }, e.attrs), injectTo: e.position || 'head' })
            break
        }
      }),
    r
  )
}
function a(t) {
  let { data: r, ejsOptions: e, sources: o = [] } = t
  return {
    name: 'vite-parse-html',
    enforce: 'pre',
    transformIndexHtml: {
      enforce: 'pre',
      async transform(n) {
        return { html: await (0, O.render)(n, r, e), tags: b(o) }
      },
    },
  }
}
var h = s(require('@rollup/pluginutils')),
  j = (0, h.createFilter)(['**/*.html'])
var P = s(require('html-minifier-terser'))
function k(t) {
  return { collapseWhitespace: t, keepClosingSlash: t, removeComments: t, minifyCSS: t }
}
function c({ isMinify: t = !0 }) {
  return {
    name: 'vite: minify-html',
    enforce: 'post',
    async generateBundle(r, e) {
      if (t)
        for (let o of Object.values(e))
          o.type === 'asset' &&
            j(o.fileName) &&
            typeof o.source == 'string' &&
            (o.source = await (0, P.minify)(o.source, k(t)))
    },
  }
}
var w = (t) => {
  let { inject: r = {}, minifyOpt: e = {} } = t
  return [a(r), c(e)]
}
module.exports = T(C)
0 && (module.exports = { inject, minify })
