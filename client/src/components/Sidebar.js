import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Tabs, Button } from '@mui/material'
import { SidebarContainer, StyledTab, SidebarButton } from './styles'
import ChatIcon from '@mui/icons-material/Chat'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

import Conversations from './Conversations'
import Contacts from './Contacts'

const Sidebar = () => {
  const dispatch = useDispatch()
  const tabValue = useSelector(({ tab }) => tab)

  const handleChange = (e, value) => {
    dispatch({ type: value })
    localStorage.setItem('tab-value', value)
  }

  return (
    <SidebarContainer>
      <Tabs
        value={tabValue}
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
        onChange={handleChange}
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

      <Button color='error'>Sign out</Button>
    </SidebarContainer>
  )
}

export default Sidebar
