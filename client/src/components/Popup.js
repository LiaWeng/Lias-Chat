import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Typography, Button } from '@mui/material'
import { ModalBox, ModalTextField } from './styles'

const Popup = () => {
  const dispatch = useDispatch()
  const tabValue = useSelector(({ tab }) => tab)
  const modalOpen = useSelector(({ modal }) => modal)
  const idRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(idRef.current.value)
    dispatch({ type: 'CLOSE_MODAL' })
  }

  if (tabValue === 0) {
    return <div>Popup</div>
  } else {
    return (
      <Modal open={modalOpen} onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
        <ModalBox>
          <Typography variant='h6'>Add new contact</Typography>

          <form onSubmit={handleSubmit}>
            <ModalTextField
              variant='outlined'
              label='Enter username'
              required
              inputRef={idRef}
            />
            <Button variant='contained' type='submit' sx={{ mr: 3 }}>
              Confirm
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
            >
              Cancel
            </Button>
          </form>
        </ModalBox>
      </Modal>
    )
  }
}

export default Popup
