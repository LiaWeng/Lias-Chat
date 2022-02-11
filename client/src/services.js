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
