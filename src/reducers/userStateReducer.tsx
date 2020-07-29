import {
  SET_USER_DATA, SET_USER_ITEMS, SET_USER_BANK_HISTORY, SET_USER_TRADE_HISTORY, SET_GLOBAL_TRANSATION_FEED
} from '../constants/ActionTypes';
import { UserState } from './types';
import { UserStateTypes } from '../actions/types';

const initialState: UserState = {
  userData: { 
    displayName: '',
    pic: '',
    username: '',
  },
  items: [],
  bankHistory: [],
  tradeHistory: [],
  globalTransactionFeed: [],
};

export default (state = initialState, action: UserStateTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, userData: { ...action.payload } };
    case SET_USER_ITEMS:
      return { ...state, items: action.payload.items };
    case SET_USER_BANK_HISTORY:
      return { ...state, bankHistory: action.payload.items };
    case SET_USER_TRADE_HISTORY:
      return { ...state, tradeHistory: action.payload.items };
    case SET_GLOBAL_TRANSATION_FEED:
      return { ...state, globalTransactionFeed: action.payload.items };
    default:
      return { ...state };
  }
};
