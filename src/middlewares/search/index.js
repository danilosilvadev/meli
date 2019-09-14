import {
  api
} from '../../services'
import {
  formatCurrency
} from '../../utils'

export default function (term) {
  return api.search(term).then(res => {
    return ({
      ...res,
      data: res.data.results.map(item => ({
        id: item.id,
        image: item.thumbnail,
        price: formatCurrency(item.price),
        name: item.title,
        city: item.address.city_name
      }))
    })
  })
}
