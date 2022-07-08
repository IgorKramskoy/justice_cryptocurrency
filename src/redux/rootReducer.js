import { combineReducers } from 'redux';

import { usersReducer } from './usersReducer';
import { moneyReducer } from './moneyReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  money: moneyReducer,
})