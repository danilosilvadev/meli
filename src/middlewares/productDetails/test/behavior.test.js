import {
  format
} from '../..'
import initialMock from './initialMock.json'
import expectedMock from './expectedMock.json'

describe('ProductDetails middleware behavior tests', () => {
  it('should format product results', () => {
    expect(
      format.productDetails(initialMock.product, initialMock.description)
    ).toStrictEqual(expectedMock)
  })
})