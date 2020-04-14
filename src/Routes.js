import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserContext } from './providers/UserProvider'
import Login from './pages/Login'
import MyRecipes from './pages/MyRecipes'
import AddRecipe from './pages/AddRecipe'
import SearchRecipes from './pages/SearchRecipes'
import AppNavigation from './components/molecules/AppNavigation'

const Routes = () => {
  const user = useContext(UserContext)

  return (
    <>
      {user && <AppNavigation />}
      <Switch>
        <Route path="/my-recipes" component={MyRecipes}/>
        <Route path="/add-recipe" component={AddRecipe}/>
        <Route path="/search-recipes" component={SearchRecipes}/>
        <Route path="/" component={Login}/>
      </Switch>
    </>
  )
}

export default Routes
