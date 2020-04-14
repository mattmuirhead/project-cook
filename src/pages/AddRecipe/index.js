import React, { useContext } from 'react'
import { UserContext } from '../../providers/UserProvider'
import { auth } from '../../Firebase/firebase'

const AddRecipe = () => {
  const user = useContext(UserContext)

  return (
    <>
      <div>Hi { user && user.firstName }</div>
      <div>Add Recipe</div>
      <div onClick={() => auth.signOut()}>Logout</div>
    </>
  )
}

export default AddRecipe