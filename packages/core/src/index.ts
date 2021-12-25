import { render } from 'ejs'
import { Plugin } from 'vite'
import { InjectOptions, PluginOptions } from './types'

/**
 * @description inject some variable scripts css to main html
 */
export function injectHtml(options: InjectOptions): Plugin {
  return {
    name: 'vite:parse-html',
    enforce: 'pre',
    transformIndexHtml: {
      enforce: 'pre',
      transform(html: string) {
        console.log(html, '文件文本')
        const { data, ejsOptions, tags = [] } = options
        return {
          html: render(html, data, ejsOptions),
          tags: tags,
        }
      },
    },
  }
}

export default (options: PluginOptions): Plugin => {
  const { inject } = options
  return [injectHtml(inject)]
}

export type { PluginOptions }
