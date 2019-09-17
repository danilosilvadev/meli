import {
  format
} from '../..'
import initialMock from './initialMock.json'
import expectedMock from './expectedMock.json'

describe('SearchResults middleware behavior tests', () => {
  it('should format search results', () => {
    expect(format.searchResults(initialMock)).toStrictEqual(expectedMock)
  })
})