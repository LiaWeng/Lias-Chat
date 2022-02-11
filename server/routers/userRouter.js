const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/userModel')

usersRouter.post('/create', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })

  if (user) {
    return res.status(409).send('Username already exists.')
  }

  const passwordHash = await bcrypt.hash(password, 10)

  const newUser = new User({
    username,
    passwordHash,
  })
  const savedUser = await newUser.save()
  return res.status(200).send(savedUser.username)
})

usersRouter.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })

  if (!user) {
    return res.status(401).send('Username does not exist.')
  }

  const passwordCorrect = await bcrypt.compare(password, user.passwordHash)
  if (!passwordCorrect) {
    return res.status(401).send('Incorrect password.')
  }

  return res.status(200).send(user.username)
})

usersRouter.post('/add-contact', async (req, res) => {
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

  return res.status(200).send('')
})

module.exports = usersRouter
