import { HtmlTagDescriptor, Plugin } from 'vite'
import { Options } from 'ejs'

/**
 * @description this is plugin options declare
 * @author kanade
 */
interface InjectOptions {
  /**
   * @description html variable
   */
  data?: Record<string, any>
  /**
   * @description ejs tamplate options
   */
  ejsOptions?: Options
  /**
   * @description vite transform html tags
   */
  tags?: HtmlTagDescriptor[]
  /**
   * @description External javavscript resources
   */
  scripts?: Array<ScriptItem>
  /**
   * @description External css resources
   */
  styleSheets?: Array<CssItem>
}
interface ScriptItem {
  /**
   * @description javascript cdn url
   */
  url: string
  /**
   * @description javascript name, just to descript
   */
  name?: string
}
interface CssItem {
  /**
   * @description css cdn url
   */
  url: string
  /**
   * @description css name, just to descript
   */
  name?: string
}
interface PluginOptions {
  /**
   * @description insert to html options(by ejs template)
   */
  inject?: InjectOptions
}

declare const _default: (options: PluginOptions) => Plugin[]

export { InjectOptions, PluginOptions, _default as default }
