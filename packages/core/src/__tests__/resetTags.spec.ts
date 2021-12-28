import { resetTags } from '../inject'
import { SourceItem } from '../types'

const testSource: Array<SourceItem> = [
  {
    type: 'css',
    url: 'http://1111',
    position: 'head',
  },
]

describe('resetTags', () => {
  test('reset tag to vite plugin tag', () => {
    expect(resetTags(testSource)).toEqual([
      {
        tag: 'link',
        attrs: {
          href: 'http://1111',
        },
        injectTo: 'head',
      },
    ])
  })
})
