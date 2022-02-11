import { createStore, combineReducers } from 'redux'

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data
    default:
      return state
  }
}

//0: conversations
//1: contacts
export const tabReducer = (state = 0, action) => {
  switch (action.type) {
    case 0:
      return 0
    case 1:
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

const reducers = combineReducers({
  user: userReducer,
  tab: tabReducer,
  modal: modalReducer,
})

const store = createStore(reducers)

export default store
