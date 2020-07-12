import {
  SET_USER_DATA
} from '../constants/ActionTypes';
import { UserStateTypes } from './types';
import { UserData } from '../reducers/types'

export function setUserData(userData: UserData): UserStateTypes {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
}

