import { createFilter } from '@rollup/pluginutils'

export const htmlFilter = createFilter(['**/*.html'])

export const judgeFileType = (url: string) => {
  if (url.indexOf('.css') !== -1) {
    return 'css'
  }
  if (url.indexOf('.js') !== -1) {
    return 'javascript'
  }
}
