require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const usersRouter = require('./routers/usersRouter')
const contactsRouter = require('./routers/contactsRouter')
const conversationsRouter = require('./routers/conversationsRouter')
// const path = require('path')

const app = express()
const port = 3001

mongoose.connect(process.env.MONGO_URI).catch((error) => {
  console.log('error connecting to MongoDB', error.message)
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/users', usersRouter)
app.use('/api/contacts', contactsRouter)
app.use('/api/conversations', conversationsRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
