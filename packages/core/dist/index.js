var g = Object.create
var o = Object.defineProperty
var j = Object.getOwnPropertyDescriptor
var h = Object.getOwnPropertyNames,
  c = Object.getOwnPropertySymbols,
  I = Object.getPrototypeOf,
  p = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable
var l = (t, r, e) => (r in t ? o(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (t[r] = e)),
  i = (t, r) => {
    for (var e in r || (r = {})) p.call(r, e) && l(t, e, r[e])
    if (c) for (var e of c(r)) d.call(r, e) && l(t, e, r[e])
    return t
  }
var m = (t) => o(t, '__esModule', { value: !0 })
var O = (t, r) => {
    for (var e in r) o(t, e, { get: r[e], enumerable: !0 })
  },
  u = (t, r, e, s) => {
    if ((r && typeof r == 'object') || typeof r == 'function')
      for (let n of h(r))
        !p.call(t, n) &&
          (e || n !== 'default') &&
          o(t, n, { get: () => r[n], enumerable: !(s = j(r, n)) || s.enumerable })
    return t
  },
  x = (t, r) =>
    u(
      m(
        o(
          t != null ? g(I(t)) : {},
          'default',
          !r && t && t.__esModule ? { get: () => t.default, enumerable: !0 } : { value: t, enumerable: !0 },
        ),
      ),
      t,
    ),
  H = (
    (t) => (r, e) =>
      (t && t.get(r)) || ((e = u(m({}), r, 1)), t && t.set(r, e), e)
  )(typeof WeakMap != 'undefined' ? new WeakMap() : 0)
var y = {}
O(y, { default: () => S, inject: () => a })
var f = x(require('ejs'))
function T(t) {
  let r = []
  return (
    t.length &&
      t.forEach((e) => {
        switch (e.type) {
          case 'javascript':
            r.push({ tag: 'script', attrs: i({ src: e.url }, e.attrs), injectTo: e.position || 'head' })
            break
          default:
            r.push({ tag: 'link', attrs: i({ href: e.url }, e.attrs), injectTo: e.position || 'head' })
            break
        }
      }),
    r
  )
}
function a(t) {
  return {
    name: 'vite-parse-html',
    enforce: 'pre',
    async transformIndexHtml(r) {
      let { data: e, ejsOptions: s, sources: n = [] } = t
      return { html: await (0, f.render)(r, e, s), tags: T(n) }
    },
  }
}
var S = (t) => {
  let { inject: r = {} } = t
  return [a(r)]
}
module.exports = H(y)
0 && (module.exports = { inject })
