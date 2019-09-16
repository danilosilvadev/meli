import React from 'react'
import styled from 'styled-components'

export default function () {
  return (
    <StyledSection className='m-3 p-2 c-bg-white f f-column'>
      <header className='m-bottom-1 c-orange'>
        Escreva na busca o que você deseja encontrar
      </header>
      <ul className='f f-column p-left-2 font-size-0-8'>
        <li className='m-bottom-2 f'>
          <span>></span>{' '}
          <article className='m-left-2'>
            <span className='font-weight-2'>Insira a sua busca</span> no campo
            que aparece na parte superior da página.
          </article>
        </li>
        <li className='f'>
          <span>></span>{' '}
          <article className='m-left-2'>
            <StyledLink href='/' className='clear-link'>
              Navegue pela categoria de produtos
            </StyledLink>{' '}
            para encontrar o produto que você está buscando.
          </article>
        </li>
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  box-shadow: inset 0 10px 100px -20px rgba(0, 0, 0, 0.2);
  border: 1px solid LightGray;
  border-radius: 5px;
`
const StyledLink = styled.a`
  color: #2752c5;
  &:hover {
    text-decoration: underline !important;
  }
`
