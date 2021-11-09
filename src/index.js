import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Routers } from './components/routers/'

ReactDOM.render(
  <Router>
    <Switch>
      {Routers.map(router => {
        return <Route key={router.path} path={router.path} component={router.component}></Route>
      })}
      <Redirect to="/index"></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root')
)
