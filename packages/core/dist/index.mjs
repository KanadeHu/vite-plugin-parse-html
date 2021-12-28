// src/inject.ts
import { render } from "ejs";
function injectHtml(options) {
  return {
    name: "vite-parse-html",
    enforce: "pre",
    async transformIndexHtml(html) {
      const { data, ejsOptions, tags = [] } = options;
      const htmlStr = await render(html, data, ejsOptions);
      const newTags = [{
        tag: "script",
        attrs: {
          src: "http://xxxx"
        },
        injectTo: "head"
      }];
      return {
        html: htmlStr,
        tags: newTags
      };
    }
  };
}

// src/index.ts
var src_default = (options) => {
  const { inject = {} } = options;
  return [injectHtml(inject)];
};
export {
  src_default as default
};
