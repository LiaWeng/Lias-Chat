import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)

  useEffect(() => {
    const loggedUser = localStorage.getItem('logged-user-id')
    dispatch({
      type: 'SET_USER',
      data: loggedUser,
    })

    dispatch({
      type: Number(localStorage.getItem('tab-value')),
    })
  })

  return (
    <ThemeProvider theme={theme}>
      {user ? <Dashboard /> : <Login />}
    </ThemeProvider>
  )
}

export default App
