import { render } from 'ejs'
import { HtmlTagDescriptor, Plugin } from 'vite'
import { InjectOptions, SourceItem } from './types'
import { judgeFileType } from './filter'

/**
 * @description reset sources options
 * @param sources {Array<SourceItem>} sources option
 * @returns HtmlTagDescriptor tags
 */
export function resetTags(sources: Array<SourceItem | string>): HtmlTagDescriptor[] {
  const result: Array<HtmlTagDescriptor> = []
  if (!sources.length) {
    return result
  }
  sources.forEach((item: SourceItem | string) => {

    if (typeof item === 'string') {
      return result.push({
        tag: judgeFileType(item) === 'css' ? 'link' : 'script',
        attrs: {
          [judgeFileType(item) === 'css' ? 'herf' : 'src']: item
        },
        injectTo: 'head'
      })
    }

    return result.push({
      tag: item.type ==='javascript' ? 'script' : 'link',
      attrs: {
        [item.type ==='javascript' ? 'src' : 'herf']: item.url,
        ...item.attrs,
      },
      injectTo: item.position || 'head',
    })
  })
  return result
}

/**
 * @description inject some variable scripts css to main html
 */
export function injectHtml(options: InjectOptions): Plugin {
  const { data, ejsOptions, sources = [] } = options
  return {
    name: 'vite-parse-html',
    enforce: 'pre',
    transformIndexHtml: {
      enforce: 'pre',
      async transform(html: string): Promise<any> {
        return {
          html: await render(html, data, ejsOptions),
          tags: resetTags(sources),
        }
      },
    },
  }
}
