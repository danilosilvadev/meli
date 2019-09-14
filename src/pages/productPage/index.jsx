import React, { useEffect, useState } from 'react'
import { dispatchProductDetails } from '../../middlewares'
import { getPath } from '../../utils'

export default function () {
  const [productDetails, setProductDetails] = useState([])
  useEffect(() => {
    dispatchProductDetails(getPath.atPosition(2)).then(res => {
      console.log(JSON.stringify(res), 'la vem')
      if (!res.status) setProductDetails(false)
      else setProductDetails(res.data)
    })
  }, [])
  return (
    <section>
      <section>
        <img src={productDetails.image} />
        <aside>
          <span>{productDetails.availableUnits}</span>
          <h2>{productDetails.name}</h2>
          <span>{productDetails.price}</span>
          <button>Comprar</button>
        </aside>
      </section>
      <span>{productDetails.description}</span>
    </section>
  )
}
