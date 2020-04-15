import React, { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth, generateUserDocument } from '../Firebase/firebase'
import { isLoading } from '../state/Loading'

export const UserContext = createContext({ user: null })

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isLoading(true))
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth)
      dispatch(isLoading(false))
      if (user) {
        setUser(user)
      } else {
        setUser(null)
        history.replace('/')
      } 
    })
  }, [dispatch, history])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider