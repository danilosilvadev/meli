import {
  api
} from '../../services'
import {
  formatCurrency
} from '../../utils';

export default function (id) {
  return api.productDetails(id).then(({
    product,
    description
  }) => {
    return ({
      status: {
        product: product.status,
        description: description.status
      },
      data: {
        id: product.data.id,
        name: product.data.title,
        images: product.data.pictures.map(item => ({
          id: item.id,
          url: item.url,
        })),
        price: formatCurrency(product.data.price, product.data.currency_id),
        soldUnits: product.data.sold_quantity,
        description: description.data.plain_text,
        condition: product.data.condition === 'new' ? 'Nuevo' : 'Usado'
      }
    })
  })
}