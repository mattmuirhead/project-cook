import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../providers/UserProvider'
import { auth } from '../../Firebase/firebase'

const SearchRecipes = () => {
  const user = useContext(UserContext)
  const history = useHistory()

  return (
    <>
      <div>Hi { user && user.firstName }</div>
      <div>Search Recipes</div>
      <div onClick={() => auth.signOut().then(() => { history.push('/') })}>Logout</div>
    </>
  )
}

export default SearchRecipes