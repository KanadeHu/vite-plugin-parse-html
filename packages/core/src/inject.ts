import { render } from 'ejs'
import { HtmlTagDescriptor, IndexHtmlTransformResult, Plugin } from 'vite'
import { InjectOptions, SourceItem } from './types'

/**
 * @description reset sources options
 * @param sources {Array<SourceItem>} sources option
 * @returns HtmlTagDescriptor tags
 */
export function resetTags(sources: Array<SourceItem>): HtmlTagDescriptor[] {
  const result: Array<HtmlTagDescriptor> = []
  if (!sources.length) {
    return result
  }
  sources.forEach((item: SourceItem) => {
    switch (item.type) {
      case 'javascript':
        result.push({
          tag: 'script',
          attrs: {
            src: item.url,
            ...item.attrs,
          },
          injectTo: item.position || 'head',
        })
        break
      default:
        result.push({
          tag: 'link',
          attrs: {
            href: item.url,
            ...item.attrs,
          },
          injectTo: item.position || 'head',
        })
        break
    }
  })
  return result
}

/**
 * @description inject some variable scripts css to main html
 */
export function injectHtml(options: InjectOptions): Plugin {
  return {
    name: 'vite-parse-html',
    enforce: 'pre',
    async transformIndexHtml(html: string): Promise<IndexHtmlTransformResult> {
      const { data, ejsOptions, sources = [] } = options
      // ejs render to reset html
      const htmlStr = await render(html, data, ejsOptions)
      // tages reset
      return {
        html: htmlStr,
        tags: resetTags(sources),
      }
    },
  }
}
