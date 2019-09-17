import {
  api
} from '../../services'
import {
  formatCurrency
} from '../../utils'
import {
  actionTypes
} from '../../store'

export const dispatchProductDetails = (id, dispatch, {
  error,
  pending
}) => {
  return api.productDetails(id).then(({
    product,
    description
  }) => {
    if (product.status && description.status) {
      dispatch({
        type: actionTypes.DISPATCH_PRODUCT_DETAILS,
        productDetails: formatProductDetails(product, description)
      })
      error.update('')
      pending.update(false)
    } else {
      error.update('Alguma coisa deu errado')
      pending.update(true)
    }
    return !!(product.status && description.status)
  })
}

export const formatProductDetails = (product, description) => ({
  id: product.data.id,
  name: product.data.title,
  images: product.data.pictures.map(item => ({
    id: item.id,
    url: item.url
  })),
  price: formatCurrency(product.data.price, product.data.currency_id),
  soldUnits: product.data.sold_quantity,
  description: description.data.plain_text,
  condition: product.data.condition === 'new' ? 'Nuevo' : 'Usado'
})
