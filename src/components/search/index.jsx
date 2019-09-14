import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Context, actionTypes } from '../../store'
import { getPath } from '../../utils'

function Search ({ history }) {
  const [term, setTerm] = useState('')
  const { state, dispatch } = useContext(Context)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        dispatch({
          type: actionTypes.SET_SEARCH_TERM,
          searchTerm: term
        })
        console.log(state)
        history.push(`/items?search=${term}`)
      }}
    >
      <input
        onChange={e => {
          setTerm(e.target.value)
        }}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default withRouter(Search)
