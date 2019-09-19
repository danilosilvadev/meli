import axios from 'axios'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://api.mercadolibre.com'
    : 'produtionAmbient.com'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

// axios.defaults.withCredentials = true

const is200 = status => !!(status === 200)

const api = {
  search: term => axios.get(`/sites/MLA/search?q=${term}`).then(props => {
    return {
      data: props.data,
      status: is200(props.status)
    }
  })
    .catch(err => {
      console.error(err)
    }),
  productDetails: id => axios.all([
    axios.get(`/items/${id}`),
    axios.get(`/items/${id}/description`)
  ]).then(props => {
    return ({
      product: {
        data: props[0].data,
        status: is200(props[0].status)
      },
      description: {
        data: props[1].data,
        status: is200(props[1].status)
      }
    })
  })
    .catch(err => {
      console.error(err)
    })
}

export default api
