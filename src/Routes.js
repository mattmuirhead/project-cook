import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import MyRecipes from './pages/MyRecipes'
import AppNavigation from './components/molecules/AppNavigation'

const Routes = () => (
  <>
    <AppNavigation />
    <Switch>
      <Route path="/my-recipes" component={MyRecipes}/>
      <Route path="/" component={Login}/>
    </Switch>
  </>
)

export default Routes
