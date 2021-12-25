// src/index.ts
import { render } from "ejs";
function injectHtml(options) {
  return {
    name: "vite:parse-html",
    enforce: "pre",
    transformIndexHtml: {
      enforce: "pre",
      transform(html) {
        console.log(html, "\u6587\u4EF6\u6587\u672C");
        const { data, ejsOptions, tags = [] } = options;
        return {
          html: render(html, data, ejsOptions),
          tags
        };
      }
    }
  };
}
var src_default = (options) => {
  const { inject } = options;
  return [injectHtml(inject)];
};
export {
  src_default as default,
  injectHtml
};
