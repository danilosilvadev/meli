import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { Context, actionTypes } from '../../store'
import logo from '../../assets/logo.png'

function Search ({ history }) {
  const [term, setTerm] = useState('')
  const { state, dispatch } = useContext(Context)

  return (
    <section className='c-bg-main f f-justify-center f-align-center h-100'>
      <img src={logo} alt='logo' width='40px' className='m-right-2' />
      <form
        onSubmit={e => {
          e.preventDefault()
          if (term === '') {
            history.push('/empty_search')
            return
          }
          dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            searchTerm: term
          })
          history.push(`/items?search=${term}`)
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
          <FaSearch color='grey' />
        </button>
      </form>
    </section>
  )
}

const StyledInput = styled.input`
  height: 2rem;
`

export default withRouter(Search)
