import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Typography, Button, Alert } from '@mui/material'
import AddContact from './AddContact'

const Popup = () => {
  // const dispatch = useDispatch()
  const tabValue = useSelector(({ tab }) => tab)
  // const modalOpen = useSelector(({ modal }) => modal)
  // const user = useSelector(({ user }) => user)
  // const contactRef = useRef()
  // const [errorMessage, setErrorMessage] = useState(null)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   try {
  //     const { username, color } = await addContact(
  //       user.username,
  //       contactRef.current.value
  //     )
  //     dispatch({
  //       type: 'ADD_CONTACT',
  //       data: { username, color },
  //     })
  //     dispatch({ type: 'CLOSE_MODAL' })
  //     setErrorMessage(null)
  //   } catch (error) {
  //     setErrorMessage(error.response.data)
  //   }
  // }

  // const handleClose = () => {
  //   dispatch({ type: 'CLOSE_MODAL' })
  //   setErrorMessage(null)
  // }

  if (tabValue === 0) {
    return <div></div>
  } else {
    return <AddContact />
  }
}

export default Popup
