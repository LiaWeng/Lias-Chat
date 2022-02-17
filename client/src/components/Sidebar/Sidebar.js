import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Tabs, Button, Box } from '@mui/material'
import {
  SidebarContainer,
  UserInfoContainer,
  StyledTab,
  SidebarButton,
} from '../styles'
import ChatIcon from '@mui/icons-material/Chat'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

import Conversations from './Conversations'
import Contacts from './Contacts'
import { Contact } from './Contacts'

const Sidebar = () => {
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)
  const tabValue = useSelector(({ tab }) => tab)

  const handleChange = (e, value) => {
    dispatch({
      type: 'SELECT_TAB',
      data: value,
    })
  }

  return (
    <SidebarContainer>
      <Tabs
        value={tabValue}
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
        onChange={(e, value) => handleChange(e, value)}
        aria-label={'conversations contacts tab'}
      >
        <StyledTab icon={<ChatIcon />} />
        <StyledTab icon={<PeopleAltIcon />} />
      </Tabs>

      <SidebarButton
        variant='contained'
        disableElevation
        onClick={() => dispatch({ type: 'OPEN_MODAL' })}
      >
        Add New {tabValue === 0 ? 'Conversation' : 'Contact'}
      </SidebarButton>

      {tabValue === 0 && <Conversations />}
      {tabValue === 1 && <Contacts />}

      <UserInfoContainer>
        <Contact username={user.username} color={user.color} />
        <Button
          color='error'
          onClick={() => dispatch({ type: 'CLEAR_USER' })}
          sx={{ mb: -0.4 }}
        >
          Sign out
        </Button>
      </UserInfoContainer>
    </SidebarContainer>
  )
}

export default Sidebar
