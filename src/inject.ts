import { render } from 'ejs'
import { HtmlTagDescriptor, Plugin, IndexHtmlTransformContext } from 'vite'
import { InjectOptions, SourceItem } from './types'
import { judgeFileType } from './utils'

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
          [judgeFileType(item) === 'css' ? 'herf' : 'src']: item,
        },
        injectTo: 'head',
      })
    }

    return result.push({
      tag: item.type === 'javascript' ? 'script' : 'link',
      attrs: {
        [item.type === 'javascript' ? 'src' : 'herf']: item.url,
        ...item.attrs,
      },
      injectTo: item.position || 'head',
    })
  })
  return result
}
/**
 *
 * @param options {InjectOptions}
 * @param path
 * @returns
 */
export function filterOptions(options: InjectOptions | Array<InjectOptions>, path: string): InjectOptions {
  if (!(options instanceof Array)) {
    return options
  }
  const option = options
    .map((i) => (i.path ? { path: '/index.html', ...i } : i))
    .filter((i) => i.path && i.path.indexOf(path) >= 0)
  if (!option.length) {
    return {} as InjectOptions
  }
  return option[0]
}

/**
 * @description inject some variable scripts css to main html
 */
export function injectHtml(options: InjectOptions | Array<InjectOptions>): Plugin {
  return {
    name: 'vite-parse-html',
    enforce: 'pre',
    transformIndexHtml: {
      enforce: 'pre',
      async transform(html: string, ctx: IndexHtmlTransformContext): Promise<any> {
        const { data = {}, ejsOptions = {}, sources = [] } = filterOptions(options, ctx.path)
        return {
          html: await render(html, data, ejsOptions),
          tags: resetTags(sources),
        }
      },
    },
  }
}
