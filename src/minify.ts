import type { Plugin } from 'vite'
import type { Options } from 'html-minifier-terser'
import type { MinifyOptions } from './types'
import { htmlFilter } from './filter'
import { minify } from 'html-minifier-terser'

function resetOptions(isMinify: boolean): Options {
  return {
    collapseWhitespace: isMinify,
    keepClosingSlash: isMinify,
    removeComments: isMinify,
    minifyCSS: isMinify,
  }
}

export function minifyHtmlPlugin({ isMinify = true }: MinifyOptions): Plugin {
  return {
    name: 'vite: minify-html',
    enforce: 'post',
    /**
     * you can refer to the official documents https://www.rollupjs.org/guide/en/#generatebundle
     */
    async generateBundle(_options, bundle) {
      if (isMinify) {
        for (const item of Object.values(bundle)) {
          if (item.type === 'asset' && htmlFilter(item.fileName) && typeof item.source === 'string') {
            item.source = await minify(item.source, resetOptions(isMinify))
          }
        }
      }
    },
  }
}
