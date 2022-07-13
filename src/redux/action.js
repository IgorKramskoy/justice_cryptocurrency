import axios from 'axios';

import {
  CREATE_USER,
  CREATE_USER_AUTH,
  FETCH_MONEY,
  UPDATE_USER
} from './types';
import { CryptoUrrency } from '../cryptoСurrency';

export function createUser(user) {
  return {
    type: CREATE_USER,
    payload: user,
  }
}
export function  createUserAuth(user) {
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
    const response = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,ADA,USDT,LTC,LRX,ETC&tsyms=RUB', {
      params: {
        Apikey: 'de42efd4a118fc97380190a2b2c42fa9910d4ee5661a95df48c78fa94a6551ff',
      }
    })
    let arr = CryptoUrrency.map((item) => ({
      ...response.data.DISPLAY[item.currency].RUB,
      ...item,
    }))
    dispatch({type: FETCH_MONEY, payload: arr})
  }
}


