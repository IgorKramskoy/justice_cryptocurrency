import { CREATE_USER, CREATE_USER_AUTH, UPDATE_USER, UPDATE_USERS } from './types';

const initialState = {
  allUsers: JSON.parse(localStorage.getItem('users')) ?? [],
  currentUser: JSON.parse(localStorage.getItem('userAuth')) ?? null,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
        currentUser: action.payload,
      }
    case CREATE_USER_AUTH:
      return {
        ...state,
        currentUser: action.payload,
      }
    case UPDATE_USER:
      console.log(action)
      return {
        ...state,
        currentUser: action.payload[0] ?? action.payload,
      }
    case UPDATE_USERS:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      }
    default:
      return state
  }
}