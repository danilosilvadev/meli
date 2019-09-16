import React from 'react'
import actionType from './actionTypes'

const reducer = (state, payload) => {
  switch (payload.type) {
    case actionType.SET_PRODUCT_ID:
      return {
        ...state,
        productID: payload.productID
      }
    case actionType.DISPATCH_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: payload.searchResults
      }
    case actionType.DISPATCH_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: payload.productDetails
      }
    case actionType.SET_ACTIVE_SEARCH_PAGE:
      return {
        ...state,
        activeSearchPage: payload.activeSearchPage
      }
    default:
      return state
  }
}

const Context = React.createContext({
  state: '',
  dispatch: () => {}
})

export {
  reducer,
  Context
}
