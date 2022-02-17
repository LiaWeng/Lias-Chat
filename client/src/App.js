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

  //get logged user
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('logged-user-info'))

    if (loggedUser) {
      dispatch({
        type: 'SET_USER',
        data: loggedUser,
      })
    }
  }, []) //eslint-disable-line

  //get contacts and conversations
  useEffect(() => {
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

  //get tab and conversation value
  useEffect(() => {
    dispatch({
      type: 'SELECT_TAB',
      data: Number(localStorage.getItem('tab-value')),
    })
    dispatch({
      type: 'SELECT_CONVERSATION',
      data: Number(localStorage.getItem('conversation-value')),
    })
  })

  return (
    <ThemeProvider theme={theme}>
      {user ? <Dashboard /> : <Login />}
    </ThemeProvider>
  )
}

export default App
