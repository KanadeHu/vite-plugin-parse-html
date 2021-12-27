import { render } from 'ejs'
import { Plugin } from 'vite'
import { InjectOptions } from './types'

/**
 * @description inject some variable scripts css to main html
 */
export function injectHtml(options: InjectOptions): Plugin {
  return {
    name: 'vite:parse-html',
    enforce: 'pre',
    transformIndexHtml(html: string) {
      const { data, ejsOptions, tags = {} } = options
      return render(html, data, ejsOptions)
    },
  }
}
