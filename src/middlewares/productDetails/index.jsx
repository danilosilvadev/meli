import React, { useContext } from 'react'
import { api } from '../../services'
import { formatCurrency } from '../../utils'
import { actionTypes } from '../../store'

export default function(id, dispatch) {
  return api.productDetails(id).then(({ product, description }) => {
    dispatch({
      type: actionTypes.DISPATCH_PRODUCT_DETAILS,
      productDetails: {
        id: product.data.id,
        name: product.data.title,
        images: product.data.pictures.map(item => ({
          id: item.id,
          url: item.url,
        })),
        price: formatCurrency(product.data.price, product.data.currency_id),
        soldUnits: product.data.sold_quantity,
        description: description.data.plain_text,
        condition: product.data.condition === 'new' ? 'Nuevo' : 'Usado',
      },
    })
    return {
      product: product.status,
      description: description.status,
    }
  })
}
