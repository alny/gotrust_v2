import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import store from './store'
import { Home, Verify, List, Faq, Deposit, About} from './components/containers'
import { Main } from './components/layouts'



const app = (
  <Provider store = { store.configureStore() }>

      <Router history={browserHistory}>

        <Route path="/" component={Main}>
          <IndexRoute component={Home}></IndexRoute>
            <Route path="/verify" component={Verify}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/faq" component={Faq}></Route>
            <Route path="/deposit" component={Deposit}></Route>
            <Route path="/about" component={About}></Route>

        </Route>
        <Redirect from="*" to="/" />
      </Router>

  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
