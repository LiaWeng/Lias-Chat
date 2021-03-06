const conversationsRouter = require('express').Router()
const Conversation = require('../models/conversationModel')
const User = require('../models/userModel')

conversationsRouter.post('/add', async (req, res) => {
  const body = req.body
  const recipients = body.sort().join(', ')
  const recipientsUsers = await Conversation.findOne({ recipients })

  if (recipientsUsers) {
    return res.status(400).send('Conversation already exists.')
  }

  const savedConversation = await new Conversation({
    recipients,
    messages: [],
  }).save()

  for (let username of body) {
    const user = await User.findOne({ username })
    await User.findOneAndUpdate(
      { username },
      { conversations: user.conversations.concat(savedConversation._id) }
    )
  }

  return res.status(200).send(savedConversation)
})

conversationsRouter.post('/get', async (req, res) => {
  const { username } = req.body
  const { conversations } = await User.findOne({ username }).populate(
    'conversations'
  )

  return res.status(200).send(conversations)
})

conversationsRouter.post('/text', async (req, res) => {
  const { usernames, sender, message } = req.body
  const newMessage = [sender, message, new Date()]
  const users = usernames.split(', ')
})

module.exports = conversationsRouter
