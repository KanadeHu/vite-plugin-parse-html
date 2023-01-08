import { judgeFileType } from '../filter'

describe('judgeFileType method', () => {
  test('javascript', () => {
    expect(judgeFileType('http://xxx.js')).toEqual('javascript')
  })
  test('css', () => {
    expect(judgeFileType('http://xxx.css')).toEqual('css')
  })
})