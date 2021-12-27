import { Plugin } from 'vite'
import { injectHtml } from './inject'
import { PluginOptions, InjectOptions } from './types'

export default (options: PluginOptions): Plugin[] => {
  const { inject = {} } = options
  return [injectHtml(inject)]
}

export type { PluginOptions, InjectOptions }
