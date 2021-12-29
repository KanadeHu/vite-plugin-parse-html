import { Plugin } from 'vite'
import { injectHtml as inject } from './inject'
import { PluginOptions, InjectOptions } from './types'

export default (options: PluginOptions): Plugin[] => {
  const { inject: injectOpt = {} } = options
  return [inject(injectOpt)]
}

export type { PluginOptions, InjectOptions }
// single export
export { inject }
