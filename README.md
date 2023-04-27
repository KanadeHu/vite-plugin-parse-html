<h1 align="center">vite-plugin-parse-html</h1>

[![npm package](https://img.shields.io/npm/v/vite-plugin-parse-html/latest.svg)](https://www.npmjs.com/package/vite-plugin-parse-html)
[![npm downloads](https://img.shields.io/npm/dm/vite-plugin-parse-html.svg)](https://www.npmjs.com/package/vite-plugin-parse-html)

## 🎉 Features

- Insert variables into the host page through the ejs template engine;

- Through configuration items, some dynamically inserted javascript and css files are usually used to coordinate with the project externals

- Indexhtml compression

- support multi page applications

## 📦 Installation

```shell
  yarn add vite-plugin-parse-html -D

  npm i vite-plugin-parse-html -D
```

## 🔨 Usage

1、Use the `inject` and `minify` configuration item in `vite.config.ts` to configure

```typescript
...
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
        { type: 'javascript', url: 'http://yyyy'},
      ],
    }),
    minify({
      isMinify: true,
    }),
    react(),
  ],
})
```

2、Using plugins in multi page programs

```typescript
...
import { inject, minify } from 'vite-plugin-parse-html'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject([
      {
        path: '/index.html',
        data: {
          title: 'test project',
        },
        sources: [
          'http://xxxx.css',
          'http://xxxx.js',
          { type: 'javascript', url: 'http://yyyy'},
        ],
      },
      {
        path:'/nest/index.html'
        data: {
          title: 'test project',
        },
        sources: [
          'http://xxxx.css',
          'http://xxxx.js',
          { type: 'javascript', url: 'http://yyyy'},
        ],
      }
    ]),
    minify({
      isMinify: true,
    }),
    ...
  ],
})
```

## 🔗 Description of inject parameter

- inject(options: InjectOptions | InjectOptions[])

| parameter  | type                | default       | example            | description                                                                           |
| ---------- | ------------------- | ------------- | ------------------ | ------------------------------------------------------------------------------------- |
| path       | string              | '/index.html' | '/nest/index.html' | multiple page relative path                                                           |
| data       | Record<string, any> | {}            | {title: 'xxxx'}    | Variables used on the host page                                                       |
| ejsOptions | Options             |               |                    |                                                                                       |
| sources    | Array<SourceItem    | string>       | {}                 | [ 'http://xxx.js' ] or [{ url: 'http:xxx.js', type: 'javascript', position: 'head' }] |

- SourceItem

| parameter | type                                        | default | example             | description               |
| --------- | ------------------------------------------- | ------- | ------------------- | ------------------------- |
| type      | 'css' or 'javascript'                       | 'css'   | type: 'css'         | source type               |
| url       | string                                      |         | url: 'http://xxxxx' | source cdn url            |
| position  | 'head' 'body' 'head-prepend' 'body-prepend' | 'head'  | position: 'head'    | inject to html position   |
| attrs     | Record<string, any>                         |         | { async: '' }       | tags attributes and value |

## 🔗 Description of minify parameter

- minifyOpt(options: MinifyOptions)

| parameter | type    | default | example        | description                       |
| --------- | ------- | ------- | -------------- | --------------------------------- |
| isMinify  | boolean | true    | isMinify: true | Whether to compress the host page |
