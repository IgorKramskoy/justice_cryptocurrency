import axios from 'axios';

import {
  CREATE_USER,
  CREATE_USER_AUTH, CRYPTO_BUY,
  CRYPTO_ID,
  FETCH_MONEY,
  TRANSACTIONS_ALL,
  UPDATE_USER,
  WALLET_USER_REFILL,
  WALLETS_ALL
} from './types';
import { CryptoCurrency } from '../cryptoСurrency';

export function createUser(user) {
  return {
    type: CREATE_USER,
    payload: user,
  }
}

export function createUserAuth(user) {
  return {
    type: CREATE_USER_AUTH,
    payload: user,
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  }
}

export function updateUsers(users) {
  return {
    type: UPDATE_USER,
    payload: users,
  }
}

export function fetchMoney() {
  return async dispatch => {
    const response = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,ADA,USDT,LTC,LRX,ETC,XLM,LINK,CRO,FTT,UNI,WBTC,AVAX,LEO,SHIB,TRX,DOT,DOGE,DAI,ETC&tsyms=RUB', {
      params: {
        Apikey: 'de42efd4a118fc97380190a2b2c42fa9910d4ee5661a95df48c78fa94a6551ff',
      }
    })
    let arr = CryptoCurrency.map((item) => ({
      ...response.data.DISPLAY[item.currency].RUB,
      ...item,
    }))
    dispatch({type: FETCH_MONEY, payload: arr})
  }
}

export function walletRefill(walletUser) {
  return {
    type: WALLET_USER_REFILL,
    payload: walletUser,
  }
}

export function allWalletRefill(allWallets) {
  return {
    type: WALLETS_ALL,
    payload: allWallets,
  }
}

export function transactionsALL(transactionsALL) {
  return {
    type: TRANSACTIONS_ALL,
    payload: transactionsALL,
  }
}

export function getCryptoId(id) {
  return {
    type: CRYPTO_ID,
    payload: id,
  }
}
export function cryptoBuy(arr) {
  return {
    type: CRYPTO_BUY,
    payload: arr,
  }
}


