// src/inject.ts
import { render } from "ejs";
function injectHtml(options) {
  return {
    name: "vite:parse-html",
    enforce: "pre",
    transformIndexHtml(html) {
      const { data, ejsOptions, tags = {} } = options;
      return render(html, data, ejsOptions);
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
