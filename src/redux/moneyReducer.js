import { CRYPTO_ID, FETCH_MONEY, WALLET_USER_REFILL, WALLETS_ALL } from './types';

const initialState = {
  money: [],
  walletUser: JSON.parse(localStorage.getItem('userWallet')) ?? null,
  allWallets: JSON.parse(localStorage.getItem('allWallets')) ?? [],
  cryptoId: '',
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
    case WALLETS_ALL:
      return {
        ...state,
        allWallets: action.payload,
      }
    case CRYPTO_ID:
      return {
        ...state,
        cryptoId: action.payload,
      }
    default:
      return state
  }
}