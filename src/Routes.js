import React, { useContext } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { UserContext } from './providers/UserProvider'
import Login from './pages/Login'
import MyRecipes from './pages/MyRecipes'
import AddRecipe from './pages/AddRecipe'
import SearchRecipes from './pages/SearchRecipes'
import Settings from './pages/Settings'
import AppNavigation from './components/molecules/AppNavigation'
import TopNav from './components/molecules/TopNav'

const Routes = () => {
  const user = useContext(UserContext)
  let history = useHistory()
  const navItems = [
    { iconName: 'recipes', iconSize: 'large', url: '/my-recipes'},
    { iconName: 'add', iconSize: 'xxl', url: '/add-recipe'},
    { iconName: 'search', iconSize: 'large', url: '/search-recipes'},
  ]
  const secondNavItems = [
    { iconName: 'back', onClick: () => history.goBack()},
    { iconName: 'settings', url: '/settings'},
  ]

  return (
    <>
      {user && (
        <>
          <AppNavigation items={navItems} />
          <TopNav items={secondNavItems} />
        </>
      )}
      <Switch>
        <Route path="/my-recipes" component={MyRecipes}/>
        <Route path="/add-recipe" component={AddRecipe}/>
        <Route path="/search-recipes" component={SearchRecipes}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/" component={Login}/>
      </Switch>
    </>
  )
}

export default Routes
