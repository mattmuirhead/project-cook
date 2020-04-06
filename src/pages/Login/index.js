import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth, generateUserDocument } from '../../Firebase/firebase'
import { isLoading } from '../../state/Loading'
import styled from 'styled-components'
import Button from '../../components/atoms/Button'
import TextInput from '../../components/molecules/TextInput'

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`

const LoginCard = styled.div`
  width: 100%;
  max-width: 300px;
`

const Login = ({ history }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [isValid, setIsValid] = useState(false)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()

  const isEmail = email => {
    return email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  }

  useEffect(() => {
    if (isLogin) {
      setIsValid(email && isEmail(email) && password)
    } else {
      setIsValid(email && isEmail(email) && password && firstName && password === confirmPassword)
    }
  }, [confirmPassword, email, firstName, isLogin, password])

  const onChangeHandler = event => {
    const { name, value } = event.target
    switch (name) {
      case 'emailAddress':
        setEmail(value)
        break
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'confirmPassword':
        setConfirmPassword(value)
        break
      default:
        break
    }
  }

  const handleClick = async () => {
    dispatch(isLoading(true))
    if (isLogin) {
      auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/dashboard')
        dispatch(isLoading(false))
      })
      .catch(error => {
        console.log('Error signing in with password and email', error)
        dispatch(isLoading(false))
      })
    } else {
      try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        generateUserDocument(user, {firstName, lastName})
        dispatch(isLoading(false))
      }
      catch(error) {
        console.log('Error Signing up with email and password')
        dispatch(isLoading(false))
      }  
      
      setFirstName('')
      setLastName('')
      setPassword('')
      setConfirmPassword('')
      setIsLogin(true)
    }
  }

  return (
    <LoginPage>
      <LoginCard>
        <TextInput type="email" name="emailAddress" placeholder="Email Address" value={email} onChange={event => onChangeHandler(event)}/>
        {!isLogin && <TextInput type="text" name="firstName" placeholder="First Name" value={firstName} onChange={event => onChangeHandler(event)}/>}
        {!isLogin && <TextInput type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={event => onChangeHandler(event)}/>}
        <TextInput type="password" name="password" placeholder="Password" value={password} onChange={event => onChangeHandler(event)}/>
        {!isLogin && <TextInput type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={event => onChangeHandler(event)}/>}

        <Button type="primary" onClick={handleClick} disabled={!isValid}>
          {isLogin ? 'Login' : 'Sign up'}
        </Button>

        <Button type="plain" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ?
            'Not a member? Sign up today for free!'
          : 'Back to login'}
        </Button>
      </LoginCard>
    </LoginPage>
  )
}

export default Login