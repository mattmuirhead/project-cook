import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth, generateUserDocument } from '../../Firebase/firebase'
import { isLoading } from '../../state/Loading'
import Button from '../../components/atoms/Button'
import Notification from '../../components/atoms/Notification'
import TextInput from '../../components/molecules/TextInput'
import { LoginCard, LoginPage } from './style'
import { isEmail } from '../../helpers'

const Login = ({ history }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [isValid, setIsValid] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()

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
    if (isValid) {
      if (isLogin) {
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          setMessage({
            body: 'Success!',
            type: 'success',
          })
          history.push('/dashboard')
          dispatch(isLoading(false))
        })
        .catch(() => {
          setMessage({
            body: 'There was an issue logging you in. Make sure your email and password is correct.',
            type: 'error'
          })
          dispatch(isLoading(false))
        })
      } else {
        try {
          const {user} = await auth.createUserWithEmailAndPassword(email, password)
          generateUserDocument(user, {firstName, lastName})
          dispatch(isLoading(false))
          setMessage({
            body: 'You have successfully created an account',
            type: 'success',
          })
          setFirstName('')
          setLastName('')
          setPassword('')
          setConfirmPassword('')
          setIsLogin(true)
        }
        catch(error) {
          setMessage({
            body: error.message,
            type: 'error'
          })
          dispatch(isLoading(false))
        }  
      }
    } else {
      setMessage({
        body: 'There was an issue please try again',
        type: 'error'
      })
    }
  }

  const handleKeyPress = (e) => {
    e.key === 'Enter' && handleClick()
  }

  return (
    <LoginPage>
      {message &&
        <Notification type={message.type} onClick={() => setMessage('')}>
          {message.body}
        </Notification>
      }
      <LoginCard>
        <TextInput type="email" name="emailAddress" placeholder="Email Address" value={email} onChange={event => onChangeHandler(event)}/>
        {!isLogin && <TextInput type="text" name="firstName" placeholder="First Name" value={firstName} onChange={event => onChangeHandler(event)}/>}
        {!isLogin && <TextInput type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={event => onChangeHandler(event)}/>}
        <TextInput type="password" name="password" placeholder="Password" value={password} onChange={event => onChangeHandler(event)} onKeyPress={e => isLogin && handleKeyPress(e) }/>
        {!isLogin && <TextInput type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={event => onChangeHandler(event)} onKeyPress={e => !isLogin && handleKeyPress(e) }/>}

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