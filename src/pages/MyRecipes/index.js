import React, { useContext } from 'react'
import { UserContext } from '../../providers/UserProvider'
import { auth } from '../../Firebase/firebase'

const MyRecipes = () => {
  const user = useContext(UserContext)

  return (
    <>
      <div>Hi { user && user.firstName }</div>
      <div>My Recipes</div>
      <div onClick={() => auth.signOut()}>Logout</div>
    </>
  )
}

export default MyRecipes