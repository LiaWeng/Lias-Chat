import React, { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { getContacts, getConversation } from './services'

import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)
  const conversations = useSelector(({ conversations }) => conversations)

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('logged-user-info'))

    if (loggedUser) {
      dispatch({
        type: 'SET_USER',
        data: loggedUser,
      })
    }
  }, []) //eslint-disable-line

  useEffect(() => {
    //get contacts and conversations
    if (user) {
      getContacts(user.username).then((contacts) => {
        dispatch({
          type: 'SET_CONTACTS',
          data: contacts,
        })
      })

      getConversation(user.username).then((conversations) => {
        dispatch({
          type: 'SET_CONVERSATIONS',
          data: conversations,
        })
      })
    }
  }, [user]) //eslint-disable-line

  useEffect(() => {
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
