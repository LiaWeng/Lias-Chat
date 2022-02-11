const contactsRouter = require('express').Router()
const User = require('../models/userModel')

contactsRouter.post('/add', async (req, res) => {
  const { username, contact } = req.body

  if (username === contact) {
    return res.status(400).send('Cannot add yourself as a contact.')
  }

  const user = await User.findOne({ username })
  const contactUser = await User.findOne({ username: contact })

  if (!contactUser) {
    return res.status(400).send(`User ${contact} does not exist.`)
  } else if (user.contacts.includes(contactUser._id)) {
    return res.status(400).send(`User ${contact} is already in your contact.`)
  }

  await User.findOneAndUpdate(
    { username },
    { contacts: user.contacts.concat(contactUser._id) },
    { new: true }
  )

  await User.findOneAndUpdate(
    { username: contact },
    { contacts: contactUser.contacts.concat(user._id) },
    { new: true }
  )

  const newContact = {
    username: contactUser.username,
    color: contactUser.color,
  }

  return res.status(200).send(newContact)
})

contactsRouter.post('/get', async (req, res) => {
  const { username } = req.body
  const user = await User.findOne({ username }).populate('contacts')

  const contacts = user.contacts.map((contact) => ({
    username: contact.username,
    color: contact.color,
  }))

  return res.status(200).send(contacts)
})

module.exports = contactsRouter
