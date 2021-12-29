import { Plugin } from 'vite'
import { Options } from 'ejs'

/**
 * @description
 */
declare type InjectHtmlPosition = 'head' | 'body' | 'head-prepend' | 'body-prepend'
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
   * @description External javavscript or css resources
   */
  sources?: Array<SourceItem>
}
interface SourceItem {
  /**
   * @description javascript\css cdn url
   */
  url: string
  /**
   * @description cdn file type
   */
  type: 'javaScript' | 'css'
  /**
   * @description inject source to html postion description
   */
  position?: InjectHtmlPosition
  /**
   * @description other tag attribute such as rel, crossorigin ...
   */
  attrs?: Record<string, any>
}
interface PluginOptions {
  /**
   * @description insert to html options(by ejs template)
   */
  inject?: InjectOptions
}

/**
 * @description inject some variable scripts css to main html
 */
declare function injectHtml(options: InjectOptions): Plugin

declare const _default: (options: PluginOptions) => Plugin[]

export { InjectOptions, PluginOptions, _default as default, injectHtml as inject }
