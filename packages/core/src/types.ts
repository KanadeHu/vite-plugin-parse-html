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
}
export interface PluginOptions {
  /**
   * @description insert to html options(by ejs template)
   */
  inject?: InjectOptions
}
