import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Modal,
  Typography,
  Button,
  Alert,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { ModalContainer, ModalFormControl } from './../styles'
import { addConversation } from './../../services'
import { Contact } from '../Sidebar/Contacts'

const AddConversation = () => {
  const dispatch = useDispatch()
  const modalOpen = useSelector(({ modal }) => modal)
  const user = useSelector(({ user }) => user)
  const contacts = useSelector(({ contacts }) => contacts)
  const [errorMessage, setErrorMessage] = useState(null)
  const [selected, setSelected] = useState([])

  const handleChange = (e) => {
    const username = e.target.name

    if (selected.includes(username)) {
      const newSelected = [...selected]
      newSelected.splice(selected.indexOf(username), 1)
      setSelected(newSelected)
    } else {
      setSelected(selected.concat(username))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (selected.length === 0) {
      setErrorMessage('Please select at least one user.')
    } else {
      try {
        const x = await addConversation(selected.concat(user.username))
        dispatch({ type: 'CLOSE_MODAL' })
        setErrorMessage(null)
      } catch (error) {
        setErrorMessage(error.response.data)
      }
    }
  }

  const handleClose = () => {
    dispatch({ type: 'CLOSE_MODAL' })
    setErrorMessage(null)
    setSelected([])
  }

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <ModalContainer>
        <form onSubmit={handleSubmit}>
          <Typography variant='h6'>
            Select users to start a conversation
          </Typography>

          <ModalFormControl>
            <FormGroup>
              {contacts.map(({ username, color }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ mr: -0.5 }}
                      onChange={handleChange}
                      name={username}
                      checked={selected.includes(username)}
                    />
                  }
                  label={<Contact username={username} color={color} />}
                  key={username}
                />
              ))}
            </FormGroup>
          </ModalFormControl>

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

export default AddConversation
