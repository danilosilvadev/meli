import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Context, hooks, actionTypes, initialState } from '../../store'
import logo from '../../assets/logo.png'
import { dispatchSearchResults } from '../../middlewares'
import search from '../../assets/search.svg'
import { getPath } from '../../utils'

function Search ({ history }) {
  const [term, setTerm] = useState('')
  const store = useContext(Context)
  const initialHook = hooks()

  return (
    <section className='c-bg-main f f-justify-center f-align-center h-100'>
      <StyledIMG
        src={logo}
        alt='logo'
        width='40px'
        className='m-right-2'
        onClick={() => {
          history.push('/')
        }}
      />
      <form
        onSubmit={e => {
          e.preventDefault()
          if (term === '') return
          store.dispatch({
            ...store.state,
            type: actionTypes.DISPATCH_SEARCH_RESULTS,
            activeSearchPage: initialState.activeSearchPage
          })
          history.push(`/items?search=${term}`)
          dispatchSearchResults(term, store, initialHook)
        }}
        className='w-70 m-1 f f-nowrap border-none'
      >
        <StyledInput
          onChange={e => {
            setTerm(e.target.value)
          }}
          className='w-90 border-none p-left-1'
        />
        <button
          type='submit'
          className='clear-button c-bg-main-background w-10 f f-align-center f-justify-center'
        >
          <StyledIcon src={search} alt='search' />
        </button>
      </form>
    </section>
  )
}

const StyledIcon = styled.img`
  width: 15px;
`

const StyledInput = styled.input`
  height: 2rem;
`

const StyledIMG = styled.img`
  cursor: pointer;
`

export default withRouter(Search)
