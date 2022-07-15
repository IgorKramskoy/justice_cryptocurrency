import { combineReducers } from 'redux';

import { usersReducer } from './usersReducer';
import { moneyReducer } from './moneyReducer';
import { transactionReducer } from './transactionReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  money: moneyReducer,
  transaction: transactionReducer
})