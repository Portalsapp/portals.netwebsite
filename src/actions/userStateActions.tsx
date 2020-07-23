import {
  SET_USER_DATA, SET_USER_ITEMS, SET_USER_BANK_HISTORY
} from '../constants/ActionTypes';
import { UserStateTypes } from './types';
import { UserData, VirtualItem, BankHistory } from '../reducers/types'

export function setUserData(userData: UserData): UserStateTypes {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
}

export function setUserItems(items: VirtualItem[]): UserStateTypes {
  return {
    type: SET_USER_ITEMS,
    payload: {
      items,
    }
  }
}

export function setUserBankHistory(items: BankHistory[]): UserStateTypes {
  return {
    type: SET_USER_BANK_HISTORY,
    payload: {
      items,
    }
  }
}
