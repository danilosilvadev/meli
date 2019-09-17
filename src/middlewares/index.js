import {
  dispatchSearchResults,
  formatSearchResults
} from './search'
import {
  dispatchProductDetails,
  formatProductDetails
} from './productDetails'

const format = {
  productDetails: formatProductDetails,
  searchResults: formatSearchResults
}

export {
  dispatchSearchResults,
  dispatchProductDetails,
  format
}
