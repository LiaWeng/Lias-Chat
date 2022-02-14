import React from 'react'
import { useSelector } from 'react-redux'
import { Tabs, Tab, Avatar, AvatarGroup } from '@mui/material'
import {
  PanelContainer,
  ConversationTab,
  ConversationContainer,
} from '../styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const findColor = (contacts, recipient, user) => {
  let color = ''
  contacts.forEach((contact) => {
    if (contact.username === recipient) {
      color = contact.color
    } else if (user.username === recipient) {
      color = user.color
    }
  })
  return color
}

const Conversation = ({ recipients }) => {
  const contacts = useSelector(({ contacts }) => contacts)
  const user = useSelector(({ user }) => user)

  return (
    <ConversationContainer>
      {recipients}
      <AvatarGroup max={3}>
        {recipients.split(', ').map((recipient) => {
          const color = findColor(contacts, recipient, user)

          return (
            <Avatar
              sx={{
                height: 'auto',
                width: 'auto',
                bgcolor: 'rgb(255, 255, 255)',
              }}
              key={recipient}
            >
              <AccountCircleIcon style={{ fill: color }} />
            </Avatar>
          )
        })}
      </AvatarGroup>
    </ConversationContainer>
  )
}

const Conversations = () => {
  const conversations = useSelector(({ conversations }) => conversations)

  return (
    <PanelContainer>
      <Tabs value={0} orientation='vertical' variant='scrollable'>
        {conversations.map((conversation) => (
          <ConversationTab
            label={<Conversation recipients={conversation.recipients} />}
            key={conversation._id}
          />
        ))}
      </Tabs>
    </PanelContainer>
  )
}

{
  /* <Tabs
value={tabValue}
TabIndicatorProps={{
  style: { display: 'none' },
}}
onChange={(e, value) => dispatch({ type: value })}
aria-label={'conversations contacts tab'}
>
<StyledTab icon={<ChatIcon />} />
<StyledTab icon={<PeopleAltIcon />} />
</Tabs> */
}

export default Conversations
