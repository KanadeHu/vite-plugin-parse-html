import { Plugin } from 'vite'
import { injectHtml as inject } from './inject'
import { minifyHtmlPlugin as minify } from './minify'
import { PluginOptions, InjectOptions, SourceItem, MinifyOptions } from './types'

export default (options: PluginOptions): Plugin[] => {
  const { inject: injectOpt = {}, minifyOpt: minifyOpt = {} } = options
  return [inject(injectOpt), minify(minifyOpt)]
}

export type { PluginOptions, InjectOptions, SourceItem, MinifyOptions }
// single export
export { inject, minify }
