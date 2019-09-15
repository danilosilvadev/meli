import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Search } from './components'
import { SearchPage, ProductPage, EmptySearchPage } from './pages'
import { reducer, Context, initialState } from './store'
import './utils/scss/index.scss'

export default function() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Search />
        <Switch>
          <Route exact path="/" render={() => <div>Página inicial</div>} />
          <Route exact path="/items" component={SearchPage} />
          <Route exact path="/empty_search" component={EmptySearchPage} />
          <Route path="/items/:id" component={ProductPage} />
          <Route render={() => <div>Essa rota não existe</div>} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}

// To add flow check"
