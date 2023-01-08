import { Options } from 'ejs'

/**
 * @description
 */
export type InjectHtmlPosition = 'head' | 'body' | 'head-prepend' | 'body-prepend'
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
   * @description External javavscript or css resources
   */
  sources?: Array<SourceItem | string>
}
export interface SourceItem {
  /**
   * @description javascript\css cdn url
   */
  url: string
  /**
   * @description cdn file type
   */
  type: 'javascript' | 'css'
  /**
   * @description inject source to html postion description
   */
  position?: InjectHtmlPosition
  /**
   * @description other tag attribute such as rel, crossorigin ...
   */
  attrs?: Record<string, any>
}
export interface MinifyOptions {
  isMinify?: boolean
}
export interface PluginOptions {
  /**
   * @description insert to html options(by ejs template)
   */
  inject?: InjectOptions
  /**
   * @description minify html option
   */
  minifyOpt?: MinifyOptions
}
