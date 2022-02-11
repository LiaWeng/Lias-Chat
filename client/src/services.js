import axios from 'axios'

export const createUser = async (username, password) => {
  const res = await axios.post('/api/users/create', { username, password })
  return res.data
}

export const loginUser = async (username, password) => {
  const res = await axios.post('/api/users/login', { username, password })
  return res.data
}

export const addContact = async (username, contact) => {
  await axios.post('/api/users/add-contact', { username, contact })
}
