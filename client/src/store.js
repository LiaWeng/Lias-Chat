import { createStore, combineReducers } from 'redux'

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER': {
      const userInfo = {
        username: action.data.username,
        color: action.data.color,
      }
      localStorage.setItem('logged-user-info', JSON.stringify(userInfo))
      return action.data
    }
    case 'CLEAR_USER': {
      localStorage.clear()
      return null
    }
    default:
      return state
  }
}

//0: conversations
//1: contacts
export const tabReducer = (state = 0, action) => {
  switch (action.type) {
    case 0:
      localStorage.setItem('tab-value', 0)
      return 0
    case 1:
      localStorage.setItem('tab-value', 1)
      return 1
    default:
      return state
  }
}

export const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return true
    case 'CLOSE_MODAL':
      return false
    default:
      return state
  }
}

export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return action.data
    case 'ADD_CONTACT':
      const newState = [...state].concat(action.data)
      return newState
    default:
      return state
  }
}

const reducers = combineReducers({
  user: userReducer,
  tab: tabReducer,
  modal: modalReducer,
  contacts: contactsReducer,
})

const store = createStore(reducers)

export default store
