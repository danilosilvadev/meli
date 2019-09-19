import {
  actionTypes,
  reducer,
} from '../..';

describe('Reducer behavior tests', () => {
  const initialState = {}

  it('should SET_PRODUCT_ID', () => {
    const payload = {
      type: actionTypes.SET_PRODUCT_ID,
      productID: '1'
    }
    expect(
      reducer(initialState, payload)
    ).toStrictEqual({
      productID: '1'
    })
  })

  it('should DISPATCH_SEARCH_RESULTS', () => {
    const mock = {
      searchResults: ['1'],
      searchTerm: 'casa',
    }

    const payload = {
      type: actionTypes.DISPATCH_SEARCH_RESULTS,
      ...mock
    }
    expect(
      reducer(initialState, payload)
    ).toStrictEqual({
      ...mock
    })
  })

  it('should DISPATCH_PRODUCT_DETAILS', () => {
    const mock = {
      name: 'casa'
    }
    const payload = {
      type: actionTypes.DISPATCH_PRODUCT_DETAILS,
      productDetails: mock
    }
    expect(
      reducer(initialState, payload)
    ).toStrictEqual({
      productDetails: mock
    })
  })

  it('should SET_ACTIVE_SEARCH_PAGE', () => {
    const payload = {
      type: actionTypes.SET_ACTIVE_SEARCH_PAGE,
      activeSearchPage: 1
    }
    expect(
      reducer(initialState, payload)
    ).toStrictEqual({
      activeSearchPage: 1
    })
  })
})