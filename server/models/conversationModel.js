const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
  recipients: String,
  messages: [
    [String, String, Date], // username, message, time
  ],
})

conversationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Conversation', conversationSchema)
