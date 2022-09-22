import { capitalizeFirstLetter } from './utils'

describe('Tool::utils', () => {
  describe('capitalizeFirstLetter', () => {
    it('-> capitalizeFirstLetter correctly returning the word hello world', () => {
      const test = capitalizeFirstLetter('hello world')
      expect(test).toBe('Hello world')
    })
      it('-> capitalizeFirstLetter correctly returning the word test', () => {
      const test = capitalizeFirstLetter('test')
      expect(test).toBe('Test')
    })
    it('-> capitalizeFirstLetter return empty', () => {
      const test = capitalizeFirstLetter('')
      expect(test).toBe('')
    })
  })
})
