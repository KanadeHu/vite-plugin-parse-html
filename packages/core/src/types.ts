import { Options } from 'ejs'
import { HtmlTagDescriptor } from 'vite'

/**
 * @description this is plugin options declare
 * @author kanade
 */
export interface InjectOptions {
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
  tags?: HtmlTagDescriptor
  /**
   * @description External javavscript resources
   */
  scripts?: Array<ScriptItem>
  /**
   * @description External css resources
   */
  styleSheets?: Array<CssItem>
}
export interface ScriptItem {
  /**
   * @description javascript cdn url
   */
  url: string
  /**
   * @description javascript name, just to descript
   */
  name?: string
}
export interface CssItem {
  /**
   * @description css cdn url
   */
  url: string
  /**
   * @description css name, just to descript
   */
  name?: string
}
export interface PluginOptions {
  /**
   * @description insert to html options(by ejs template)
   */
  inject?: InjectOptions
}
