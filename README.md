
<h1 align="center">vite-plugin-parse-html</h1>

[![npm package](https://img.shields.io/npm/v/vite-plugin-parse-html/latest.svg)](https://www.npmjs.com/package/vite-plugin-parse-html)
[![npm downloads](https://img.shields.io/npm/dm/vite-plugin-parse-html.svg)](https://www.npmjs.com/package/vite-plugin-parse-html)

### install

```bash
    yarn add vite-plugin-parse-html -D

    npm i vite-plugin-parse-html -D
```

### Usage

1、config vite.config.ts plugins option, or just import inject to config

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import parseHtml from 'vite-plugin-parse-html'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    parseHtml({
      inject: {
        data: {
          title: '测试demo',
        },
        sources: [
          {
            type: 'css',
            url: 'http://xxxx',
          },
          {
            type: 'javaScript',
            url: 'http://yyyy',
          }
        ]
      },
    }),
    react(),
  ],
})

// just import inject

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inject } from 'vite-plugin-parse-html'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      data: {
        title: '测试demo',
      },
      sources: [
        {
          type: 'css',
          url: 'http://xxxx',
        },
        {
          type: 'javaScript',
          url: 'http://yyyy',
        },
      ],
    }),
    react(),
  ],
})

```

2、You can refer to EJS template syntax to set your index HTML

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

### Description of inject parameter

- injectOptions

| parameter  | type                | default | example         | description                      |
| ---------- | ------------------- | ------- | --------------- | -------------------------------- |
| data       | Record<string, any> | {}      | {title: 'xxxx'} | some variables to use index html |
| ejsOptions | Options             |         |                 |                                  |
| sources    | Array<SourceItem>   | {}      |                 |                                  |

- SourceItem

| parameter | type                                        | default | example             | description               |
| --------- | ------------------------------------------- | ------- | ------------------- | ------------------------- |
| type      | 'css' or 'javascript'                       | 'css'   | type: 'css'         | source type               |
| url       | string                                      |         | url: 'http://xxxxx' | source cdn url            |
| position  | 'head' 'body' 'head-prepend' 'body-prepend' | 'head'  | position: 'head'    | inject to html position   |
| attrs     | Record<string, any>                         |         | { async: '' }       | tags attributes and value |

### last

You can also download git code directly to debug the example locally
