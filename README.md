<h1 align="center">vite-plugin-parse-html</h1>

[![npm package](https://img.shields.io/npm/v/vite-plugin-parse-html/latest.svg)](https://www.npmjs.com/package/vite-plugin-parse-html)
[![npm downloads](https://img.shields.io/npm/dm/vite-plugin-parse-html.svg)](https://www.npmjs.com/package/vite-plugin-parse-html)

> Note: this plugin support of vite 2.0.0+ and node 12.22.0+.

This plugin is mainly used to modify the index.html host page in the vite project. It has the following functions:



* Insert variables into the host page through the ejs template engine;

* Through configuration items, some dynamically inserted javascript and css files are usually used to coordinate with the project externals

* Indexhtml compression



In the future, plugin will gradually support ssr and multi page applications

## install
___

```bash
    yarn add vite-plugin-parse-html -D

    npm i vite-plugin-parse-html -D
```

## Usage

1、Use the `inject` and `minify` configuration item in `vite.config.ts` to configure

```typescript

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inject, minify } from 'vite-plugin-parse-html'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      data: {
        title: 'test project',
      },
      sources: [
        'http://xxxx.css',
        'http://xxxx.js',
        {
          type: 'javascript',
          url: 'http://yyyy',
        },
      ],
    }),
    minify({
      isMinify: true,
    }),
    react(),
  ],
})
```

2、Use the ejs template to pre post to customize index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= title %></title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Description of inject parameter

- injectOptions

| parameter  | type                | default | example         | description                      |
| ---------- | ------------------- | ------- | --------------- | -------------------------------- |
| data       | Record<string, any> | {}      | {title: 'xxxx'} | Variables used on the host page |
| ejsOptions | Options             |         |                 |                                  |
| sources    | Array<SourceItem | string>   | {}      |     [ 'http://xxx.js' ]    or [{ url: 'http:xxx.js', type: 'javascript', position: 'head' }]        |                                  |

- SourceItem

| parameter | type                                        | default | example             | description               |
| --------- | ------------------------------------------- | ------- | ------------------- | ------------------------- |
| type      | 'css' or 'javascript'                       | 'css'   | type: 'css'         | source type               |
| url       | string                                      |         | url: 'http://xxxxx' | source cdn url            |
| position  | 'head' 'body' 'head-prepend' 'body-prepend' | 'head'  | position: 'head'    | inject to html position   |
| attrs     | Record<string, any>                         |         | { async: '' }       | tags attributes and value |

### Description of minify parameter

- minifyOpt

| parameter | type    | default | example        | description                                 |
| --------- | ------- | ------- | -------------- | ------------------------------------------- |
| isMinify  | boolean | true    | isMinify: true | Whether to compress the host page |

