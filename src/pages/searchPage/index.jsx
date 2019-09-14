import React, { useEffect, useState } from 'react'
import { ProductView } from '../../components'
import { dispatchSearchResults } from '../../middlewares'
import { getPath } from '../../utils'
import { withRouter } from 'react-router-dom'

function SearchPage ({ history }) {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    dispatchSearchResults(getPath.searchParam()).then(res => {
      if (!res.status) setProductList(false)
      else setProductList(res.data)
    })
  }, [])
  return (
    <ul>
      {productList.map(item => (
        <li
          key={item.id}
          onClick={() => {
            history.push(`/items/${item.id}`)
          }}
          style={{ border: '1px solid black' }}
        >
          <img src={item.image} />
          <aside>
            {item.name}
            {item.price}
          </aside>
        </li>
      ))}
    </ul>
  )
}

export default withRouter(SearchPage)
