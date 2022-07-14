import { FETCH_MONEY, WALLET_USER_REFILL } from './types';

const initialState = {
  money: [],
  walletUser: {},
}

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MONEY:
      return {
        ...state,
        money: action.payload,
      }
      case WALLET_USER_REFILL:
      return {
        ...state,
        walletUser: action.payload,
      }
    default: return state
  }
}