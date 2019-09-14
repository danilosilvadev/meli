import React from 'react'
import actionType from './actionTypes'

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_PRODUCT_ID:
      return {
        ...state,
        productID: state.productID
      }
    case actionType.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: state.searchTerm
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
