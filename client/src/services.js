import axios from 'axios'

export const createUser = async (username, password, color) => {
  const res = await axios.post('/api/users/create', {
    username,
    password,
    color,
  })
  return res.data
}

export const loginUser = async (username, password) => {
  const res = await axios.post('/api/users/login', { username, password })
  return res.data
}

export const addContact = async (username, contact) => {
  const res = await axios.post('/api/contacts/add', { username, contact })
  return res.data
}

export const getContacts = async (username) => {
  const res = await axios.post('/api/contacts/get', { username })
  return res.data
}

export const addConversation = async (usernames) => {
  const res = await axios.post('/api/conversations/add', usernames)
  return res.data
}

export const getConversation = async (username) => {
  const res = await axios.post('/api/conversations/get', { username })
  return res.data
}

export const addMessage = async (usernames, sender, message) => {
  const res = await axios.post('api/conversations/text', { usernames, message })
  return res.data
}
