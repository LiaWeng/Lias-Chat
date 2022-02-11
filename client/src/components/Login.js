import React, { useRef } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { LoginContainer } from './styles'
import { useDispatch } from 'react-redux'

const Login = () => {
  const idRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: 'SET_USER',
      data: idRef.current.value,
    })
    localStorage.setItem('logged-user-id', idRef.current.value)
  }

  const handleSignup = () => {
    dispatch({
      type: 'SET_USER',
      data: idRef.current.value,
    })
  }

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          id='login-id'
          label='Enter your username'
          type='text'
          variant='standard'
          required
          inputRef={idRef}
          sx={{ width: '30ch' }}
        />

        <Box sx={{ mt: 3 }}>
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
      </form>
    </LoginContainer>
  )
}

export default Login
