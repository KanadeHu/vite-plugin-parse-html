import { Plugin } from 'vite'
import { injectHtml as inject } from './inject'
import { PluginOptions, InjectOptions, SourceItem } from './types'

export default (options: PluginOptions): Plugin[] => {
  const { inject: injectOpt = {} } = options
  return [inject(injectOpt)]
}

export type { PluginOptions, InjectOptions, SourceItem }
// single export
export { inject }
