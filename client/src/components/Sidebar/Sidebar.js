import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Tabs, Button } from '@mui/material'
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

const Sidebar = () => {
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)
  const tabValue = useSelector(({ tab }) => tab)

  return (
    <SidebarContainer>
      <Tabs
        value={tabValue}
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
        onChange={(e, value) => dispatch({ type: value })}
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
        New {tabValue === 0 ? 'Conversation' : 'Contact'}
      </SidebarButton>

      {tabValue === 0 && <Conversations />}

      {tabValue === 1 && <Contacts />}

      <UserInfoContainer>
        <Typography variant='subtitle1' color='secondary'>
          Signed in as {user}.
        </Typography>
        <Button color='error' onClick={() => dispatch({ type: 'CLEAR_USER' })}>
          Sign out
        </Button>
      </UserInfoContainer>
    </SidebarContainer>
  )
}

export default Sidebar
