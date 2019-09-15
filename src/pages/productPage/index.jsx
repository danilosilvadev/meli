import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './productPage.scss'
import Slider from 'react-slick'
import styled from 'styled-components'
import { dispatchProductDetails } from '../../middlewares'
import { getPath } from '../../utils'

export default function() {
  const [productDetails, setProductDetails] = useState({})
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  useEffect(() => {
    dispatchProductDetails(getPath.atPosition(2)).then(res => {
      if (!res.status) setProductDetails(false)
      else setProductDetails(res.data)
    })
  }, [])
  return (
    <section className="c-bg-white m-md-8 p-4 h-100">
      <section className="f f-md-justify-between f-justify-center f-md-row f-column">
        <Slider
          {...settings}
          className="h-10 slider-component__width m-2 m-bottom-8"
        >
          {productDetails.images &&
            productDetails.images.map(item => (
              <div key={item.id} className="f f-justify-center">
                <img src={item.url} alt="product" height="200px" />
              </div>
            ))}
        </Slider>
        <aside className="f f-justify-center">
          <div className="f f-column m-top-md-1 w-100">
            <span className="m-bottom-1 f f-align-start">
              {productDetails.condition} - {productDetails.soldUnits} vendidos
            </span>
            <span className="font-size-1-5">{productDetails.name}</span>
            <span className="font-size-2">{productDetails.price}</span>
            <StyledButton className="clear-button c-bg-blue p-1 c-white m-top-4">
              Comprar
            </StyledButton>
          </div>
        </aside>
      </section>
      <StyledSection className="f f-column">
        <span className="font-size-2 m-bottom-4 m-top-8">
          Descrición del produto
        </span>
        <article>{productDetails.description}</article>
      </StyledSection>
    </section>
  )
}

const StyledButton = styled.button`
  width: 100%;
  border: 3px solid white;
  border-radius: 2px;
`
const StyledSection = styled.section`
  width: 100%;
  @media (min-width: 769px) {
    width: 70%;
  }
`
