import { CREATE_USER, CREATE_USER_AUTH, FETCH_USERS, UPDATE_USER, UPDATE_USERS } from './types';

const initialState = {
  allUsers: [],
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
      case FETCH_USERS:
      return {
        ...state,
        allUsers: action.payload,
      }
    case UPDATE_USER:
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