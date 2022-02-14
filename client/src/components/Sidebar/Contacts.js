import React, { useEffect, useState } from 'react'
import { PanelContainer, ContactContainer } from '../styles'
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export const Contact = ({ username, color }) => {
  return (
    <ContactContainer>
      <AccountCircleIcon sx={{ mr: 1 }} style={{ fill: color }} />
      {username}
    </ContactContainer>
  )
}

const Contacts = () => {
  const contacts = useSelector(({ contacts }) => contacts)

  return (
    <PanelContainer>
      {contacts.map((contact) => (
        <Contact
          key={contact.username}
          username={contact.username}
          color={contact.color}
        />
      ))}
    </PanelContainer>
  )
}

export default Contacts
