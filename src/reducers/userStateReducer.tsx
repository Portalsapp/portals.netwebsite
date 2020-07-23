import {
  SET_USER_DATA, SET_USER_ITEMS, SET_USER_BANK_HISTORY
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
};

export default (state = initialState, action: UserStateTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, userData: { ...action.payload } };
    case SET_USER_ITEMS:
      return { ...state, items: action.payload.items };
    case SET_USER_BANK_HISTORY:
      return { ...state, bankHistory: action.payload.items };
    default:
      return { ...state };
  }
};
