import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/" component={Login}/>
  </Switch>
)

export default Routes
