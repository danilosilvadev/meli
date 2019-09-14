import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Search } from './components'
import { SearchPage, ProductPage } from './pages'
import { reducer, Context, initialState } from './store'

export default function () {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Search />
        <Switch>
          <Route exact path={'/items'} component={SearchPage} />
          <Route path={`/items/${state.productID}`} component={ProductPage} />
          <Route render={() => <div>Essa rota não existe</div>} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}

// To add flow check"
