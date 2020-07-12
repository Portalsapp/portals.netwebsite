import {
  SET_LOGIN_STATUS,
} from '../constants/ActionTypes';
import { AppStateTypes } from './types';

export function setLoginStatus(loginStatus: boolean) : AppStateTypes {
  return {
    type: SET_LOGIN_STATUS,
    payload: loginStatus,
  };
}
