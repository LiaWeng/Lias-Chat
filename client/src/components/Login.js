import React, { useRef, useState } from 'react'
import { Typography, Box, TextField, Button, Alert } from '@mui/material'
import { LoginContainer, LoginForm } from './styles'
import { useDispatch } from 'react-redux'
import { createUser, loginUser } from '../services'
import randomColor from '../colors'

const Login = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const user = await loginUser(
        usernameRef.current.value,
        passwordRef.current.value
      )

      dispatch({
        type: 'SET_USER',
        data: user,
      })
    } catch (error) {
      setErrorMessage(error.response.data)
    }
  }

  const handleSignup = async () => {
    try {
      const user = await createUser(
        usernameRef.current.value,
        passwordRef.current.value,
        randomColor()
      )

      dispatch({
        type: 'SET_USER',
        data: user,
      })
    } catch (error) {
      setErrorMessage(error.response.data)
    }
  }

  return (
    <LoginContainer>
      <Typography variant='h5'>Welcome to Lia's Chat</Typography>

      <LoginForm onSubmit={handleSubmit}>
        <TextField
          label='Enter your username'
          type='text'
          required
          inputRef={usernameRef}
          sx={{ width: '30ch', mb: 2 }}
        />

        <TextField
          label='Enter your password'
          type='password'
          required
          inputRef={passwordRef}
          sx={{ width: '30ch', mb: 3 }}
        />

        {errorMessage && (
          <Alert severity='error' sx={{ mb: 3 }}>
            {errorMessage}
          </Alert>
        )}

        <Box>
          <Button
            variant='contained'
            color='primary'
            sx={{ mr: 3 }}
            type='submit'
          >
            Log In
          </Button>
          <Button variant='contained' color='primary' onClick={handleSignup}>
            Create Account
          </Button>
        </Box>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login
