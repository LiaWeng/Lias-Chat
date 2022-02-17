import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Tabs, AvatarGroup } from '@mui/material'
import {
  PanelContainer,
  ConversationTab,
  ConversationContainer,
  ConversationAvatar,
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
            <ConversationAvatar key={recipient}>
              <AccountCircleIcon style={{ fill: color }} />
            </ConversationAvatar>
          )
        })}
      </AvatarGroup>
    </ConversationContainer>
  )
}

const Conversations = () => {
  const conversations = useSelector(({ conversations }) => conversations)
  const conversationTab = useSelector(({ conversationTab }) => conversationTab)
  const dispatch = useDispatch()

  const handleChange = (e, value) => {
    dispatch({
      type: 'SELECT_CONVERSATION',
      data: value,
    })
  }

  return (
    <PanelContainer>
      <Tabs
        value={conversationTab}
        orientation='vertical'
        variant='scrollable'
        onChange={(e, value) => handleChange(e, value)}
      >
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

export default Conversations
