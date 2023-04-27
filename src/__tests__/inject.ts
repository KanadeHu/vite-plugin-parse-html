import { filterOptions, injectHtml } from '../inject'

describe('injectHtmlPlugin', () => {
  test('plugin is run ok', async () => {
    const { name } = await injectHtml({})
    expect(name).toEqual('vite-parse-html')
  })
})

describe('filter Options', () => {
  const options1 = [
    {
      data: {
        title: 'main index project',
      },
      sources: ['http://xxxx.css'],
    },
    {
      path: '/nested/index.html',
      data: {
        title: 'nest page',
      },
      sources: ['http://xxxx.css'],
    },
  ]
  const options2 = {
    data: {
      title: 'main index project',
    },
    sources: ['http://xxxx.css'],
  }

  it('filterOptions', () => {
    const option = filterOptions(options1, '/nested/index.html')
    const option1 = filterOptions(options2, '')
    expect(option).toEqual({
      path: '/nested/index.html',
      data: {
        title: 'nest page',
      },
      sources: ['http://xxxx.css'],
    })
    expect(option).not.toEqual({
      data: {
        title: 'main index project',
      },
      sources: ['http://xxxx.css'],
    })

    expect(option1).toEqual({
      data: {
        title: 'main index project',
      },
      sources: ['http://xxxx.css'],
    })
  })
})
