import { injectHtml } from '../inject'

describe('injectHtmlPlugin', () => {
  test('plugin is run ok', async () => {
    const { name } = await injectHtml({})
    expect(name).toEqual('vite-parse-html')
  })
})
