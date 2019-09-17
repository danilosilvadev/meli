import {
  api
} from '../../services'
import {
  formatCurrency
} from '../../utils'
import {
  actionTypes
} from '../../store'

export const dispatchSearchResults = (term, dispatch, {
  error,
  pending
}) => {
  return api.search(term).then(res => {
    console.log(JSON.stringify(res.data.results), 'inicial', JSON.stringify(formatSearchResults(res.data.results)), 'final')
    if (res.status) {
      dispatch({
        type: actionTypes.DISPATCH_SEARCH_RESULTS,
        searchResults: formatSearchResults(res.data.results),
        searchTerm: res.data.query
      })
      error.update('')
      pending.update(false)
    } else {
      error.update('Alguma coisa deu errado')
      pending.update(true)
    }
    return res.status
  })
}

export const formatSearchResults = (data) => (data.map(item => ({
  id: item.id,
  image: item.thumbnail,
  price: formatCurrency(item.price, item.currency_id),
  name: item.title,
  city: item.address.city_name
})))
