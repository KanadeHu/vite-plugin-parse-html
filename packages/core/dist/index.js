var g = Object.create
var o = Object.defineProperty
var j = Object.getOwnPropertyDescriptor
var h = Object.getOwnPropertyNames,
  p = Object.getOwnPropertySymbols,
  I = Object.getPrototypeOf,
  c = Object.prototype.hasOwnProperty,
  O = Object.prototype.propertyIsEnumerable
var u = (t, r, e) => (r in t ? o(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (t[r] = e)),
  s = (t, r) => {
    for (var e in r || (r = {})) c.call(r, e) && u(t, e, r[e])
    if (p) for (var e of p(r)) O.call(r, e) && u(t, e, r[e])
    return t
  }
var m = (t) => o(t, '__esModule', { value: !0 })
var P = (t, r) => {
    for (var e in r) o(t, e, { get: r[e], enumerable: !0 })
  },
  l = (t, r, e, i) => {
    if ((r && typeof r == 'object') || typeof r == 'function')
      for (let n of h(r))
        !c.call(t, n) &&
          (e || n !== 'default') &&
          o(t, n, { get: () => r[n], enumerable: !(i = j(r, n)) || i.enumerable })
    return t
  },
  d = (t, r) =>
    l(
      m(
        o(
          t != null ? g(I(t)) : {},
          'default',
          !r && t && t.__esModule ? { get: () => t.default, enumerable: !0 } : { value: t, enumerable: !0 },
        ),
      ),
      t,
    ),
  x = (
    (t) => (r, e) =>
      (t && t.get(r)) || ((e = l(m({}), r, 1)), t && t.set(r, e), e)
  )(typeof WeakMap != 'undefined' ? new WeakMap() : 0)
var S = {}
P(S, { default: () => T, inject: () => a })
var f = d(require('ejs'))
function H(t) {
  let r = []
  return (
    t.length &&
      t.forEach((e) => {
        switch (e.type) {
          case 'javascript':
            r.push({ tag: 'script', attrs: s({ src: e.url }, e.attrs), injectTo: e.position || 'head' })
            break
          default:
            r.push({ tag: 'link', attrs: s({ href: e.url }, e.attrs), injectTo: e.position || 'head' })
            break
        }
      }),
    r
  )
}
function a(t) {
  let { data: r, ejsOptions: e, sources: i = [] } = t
  return {
    name: 'vite-parse-html',
    enforce: 'pre',
    transformIndexHtml: {
      enforce: 'pre',
      async transform(n) {
        return { html: await (0, f.render)(n, r, e), tags: H(i) }
      },
    },
  }
}
var T = (t) => {
  let { inject: r = {} } = t
  return [a(r)]
}
module.exports = x(S)
0 && (module.exports = { inject })
