import { FETCH_MONEY } from './types';

const initialState = {
  money: [],
}

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MONEY:
      return {
        ...state,
        money: action.payload,
      }
    default: return state
  }
}