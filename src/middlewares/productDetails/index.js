import {
  api
} from '../../services'

export default function (id) {
  return api.productDetails(id).then(({
    product,
    description
  }) => {
    console.log(product, description, 'pq é undefined')
    return ({
      status: {
        product: product.status,
        description: description.status
      },
      data: {
        id: product.data.id,
        name: product.data.title,
        image: product.data.thumbnail,
        price: product.data.price,
        availableUnits: product.data.available_quantity,
        description: description.data.plain_text
      }
    })
  })
}
