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
  const items = [
    { iconName: 'recipes', iconSize: 'large', url: '/my-recipes'},
    { iconName: 'add', iconSize: 'xxl', url: '/add-recipe'},
    { iconName: 'search', iconSize: 'large', url: '/search-recipes'},
  ]

  return (
    <>
      {user && <AppNavigation items={items} />}
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
