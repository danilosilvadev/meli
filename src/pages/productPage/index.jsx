import React, { useEffect, useContext } from 'react'
import './productPage.scss'
import Slider from 'react-slick'
import styled from 'styled-components'
import { dispatchProductDetails } from '../../middlewares'
import { getPath } from '../../utils'
import { Context, hooks } from '../../store'
import arrow from '../../assets/arrow.svg'

const Arrow = props => {
  return (
    <StyledArrow
      className="custom_arrows f f-justify-center f-align-center"
      src={arrow}
      alt="arrow"
      onClick={props.onClick}
      isNext={props.next}
    />
  )
}

export default function() {
  const initialHook = hooks()
  const {
    state: { productDetails },
    dispatch,
  } = useContext(Context)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow next />,
    prevArrow: <Arrow />,
  }

  useEffect(() => {
    dispatchProductDetails(getPath.atPosition(2), dispatch, initialHook)
  }, [])

  return (
    <>
      {initialHook.error.value === '' && !initialHook.pending.value ? (
        <section className="c-bg-white m-md-8 p-4 h-100">
          <section className="f f-md-justify-between w-100 f-justify-center f-md-row f-column f-align-center">
            {productDetails.images && productDetails.images.length !== 0 ? (
              <Slider
                {...settings}
                className="h-10 w-md-50 m-right-4 m-left-4 slider-component__width m-2 m-bottom-8 f f-align-center"
              >
                {productDetails.images.map(item => (
                  <div key={item.id} className="f f-justify-center">
                    <img src={item.url} alt="product" height="180px" />
                    <div className="c-white">.</div>
                  </div>
                ))}
              </Slider>
            ) : null}
            <aside className="f f-justify-center m-left-md-8 w-md-30">
              <div className="f f-column m-top-md-1">
                <span className="m-bottom-1 f f-align-start">
                  {productDetails.condition} - {productDetails.soldUnits}{' '}
                  vendidos
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
            <article className="c-grey-darker-2">
              {productDetails.description}
            </article>
          </StyledSection>
        </section>
      ) : (
        <h2 className="c-red p-top-2 p-bottom-2 font-weight-1 c-bg-white m-4 p-4">
          {initialHook.error.value}
        </h2>
      )}
      )
    </>
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

const StyledArrow = styled.img`
  border-radius: 10px;
  position: absolute;
  right: ${props => (props.isNext ? '100%' : '0%')};
  transform: ${props => (props.isNext ? 'rotate(180deg)' : '0')};
  z-index: 10000;
  font-weight: bold;
  cursor: pointer;
  width: 20px;
  height: 20px;
`
