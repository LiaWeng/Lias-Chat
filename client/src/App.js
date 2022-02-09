import React, { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'

import Login from './components/Login'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUser = localStorage.getItem('logged-user-id')
    dispatch({
      type: 'SET_USER',
      data: loggedUser,
    })
  })

  return (
    <div>
      <Login />
    </div>
  )
}

export default App
