import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Typography, Button, Alert } from '@mui/material'
import { ModalContainer, ModalTextField } from './../styles'
import { addContact } from './../../services'

const AddContact = () => {
  const dispatch = useDispatch()
  const modalOpen = useSelector(({ modal }) => modal)
  const user = useSelector(({ user }) => user)
  const contactRef = useRef()
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { username, color } = await addContact(
        user.username,
        contactRef.current.value
      )
      dispatch({
        type: 'ADD_CONTACT',
        data: { username, color },
      })
      dispatch({ type: 'CLOSE_MODAL' })
      setErrorMessage(null)
    } catch (error) {
      setErrorMessage(error.response.data)
    }
  }

  const handleClose = () => {
    dispatch({ type: 'CLOSE_MODAL' })
    setErrorMessage(null)
  }

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <ModalContainer>
        <form onSubmit={handleSubmit}>
          <Typography variant='h6'>Add a new contact</Typography>

          <ModalTextField
            variant='outlined'
            label='Enter username'
            required
            inputRef={contactRef}
          />

          {errorMessage && (
            <Alert severity='error' sx={{ mb: 3 }}>
              {errorMessage}
            </Alert>
          )}

          <Button
            disableElevation
            variant='contained'
            type='submit'
            sx={{ mr: 3 }}
          >
            Confirm
          </Button>
          <Button
            disableElevation
            variant='contained'
            color='secondary'
            onClick={handleClose}
          >
            Cancel
          </Button>
        </form>
      </ModalContainer>
    </Modal>
  )
}

export default AddContact
