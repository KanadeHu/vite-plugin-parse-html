import { resetTags } from '../inject'
import { SourceItem } from '../types'

const testSource: Array<SourceItem | string> = [
  {
    type: 'css',
    url: 'http://1111',
    position: 'head',
  },
]
const stringSources: Array<SourceItem | string> = [
  'http://xxxxx.css',
  'http://xxxx.js'
]

describe('resetTags', () => {
  test('reset tag to vite plugin tag', () => {
    expect(resetTags(testSource)).toEqual([
      {
        tag: 'link',
        attrs: {
          herf: 'http://1111',
        },
        injectTo: 'head',
      },
    ])
  })
  test('A resource configuration item is a string', () => {
    expect(resetTags(stringSources)).toEqual([
      {
        tag: 'link',
        attrs: {
          herf: 'http://xxxxx.css',
        },
        injectTo: 'head',
      },
      {
        tag: 'script',
        attrs: {
          src: 'http://xxxx.js',
        },
        injectTo: 'head',
      },
    ])
  })
})
