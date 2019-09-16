import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Search } from './components'
import { SearchPage, ProductPage, HomePage } from './pages'
import { reducer, Context, initialState } from './store'
import './utils/scss/index.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function () {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Search />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/items' component={SearchPage} />
          <Route path='/items/:id' component={ProductPage} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}

// To add flow check"
