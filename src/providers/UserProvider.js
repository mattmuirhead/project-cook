import React, { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, generateUserDocument } from '../Firebase/firebase'

export const UserContext = createContext({ user: null })

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth)
      if (user) {
        setUser(user)
      } else {
        setUser(null)
        history.replace('/')
      } 
    })
  }, [history])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider