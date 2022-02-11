const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/userModel')

usersRouter.post('/create', async (req, res) => {
  const { username, password, color } = req.body
  const user = await User.findOne({ username })

  if (user) {
    return res.status(409).send('Username already exists.')
  }

  const passwordHash = await bcrypt.hash(password, 10)

  const savedUser = await new User({
    username,
    passwordHash,
    color,
  }).save()

  const userInfo = { username: savedUser.username, color: savedUser.color }
  return res.status(200).send(userInfo)
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

  const userInfo = { username: user.username, color: user.color }
  return res.status(200).send(userInfo)
})

module.exports = usersRouter
