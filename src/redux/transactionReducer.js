import { TRANSACTIONS_ALL } from './types';

const initialState = {
  transactionAll: JSON.parse(localStorage.getItem('transactionAll')) ?? [],
}

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTIONS_ALL:
      return {
        ...state,
        transactionAll: action.payload,
      }
    default: return state
  }
}