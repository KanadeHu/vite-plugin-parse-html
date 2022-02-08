import { minifyHtmlPlugin } from '../minify'

describe('minifyHtml plugin', () => {
  test('plugin is ok', async () => {
    const { name } = await minifyHtmlPlugin({ isMinify: true })
    expect(name).toBe('vite: minify-html')
  })
})
