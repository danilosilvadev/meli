import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Context, actionTypes } from '../../store'
import logo from '../../assets/logo.png'
import { dispatchSearchResults } from '../../middlewares'
import search from '../../assets/search.svg'

function Search({ history }) {
  const [term, setTerm] = useState('')
  const { dispatch } = useContext(Context)

  return (
    <section className="c-bg-main f f-justify-center f-align-center h-100">
      <StyledIMG
        src={logo}
        alt="logo"
        width="40px"
        className="m-right-2"
        onClick={() => {
          history.push('/')
        }}
      />
      <form
        onSubmit={e => {
          e.preventDefault()
          if (term === '') return
          dispatchSearchResults(term).then(res => {
            dispatch({
              type: actionTypes.DISPATCH_SEARCH_RESULTS,
              searchResults: res.data,
            })
            history.push(`/items?search=${term}`)
          })
        }}
        className="w-70 m-1 f f-nowrap border-none"
      >
        <StyledInput
          onChange={e => {
            setTerm(e.target.value)
          }}
          className="w-90 border-none p-left-1"
        />
        <button
          type="submit"
          className="clear-button c-bg-main-background w-10 f f-align-center f-justify-center"
        >
          <StyledIcon src={search} alt="search" />
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
