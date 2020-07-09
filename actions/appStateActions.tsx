import {
  SET_LOGIN_STATUS,
  SET_MODAL_VISIBILITY
} from '../constants/ActionTypes';
import { AppStateTypes } from './types';

export function setLoginStatus(loginStatus: boolean) : AppStateTypes {
  return {
    type: SET_LOGIN_STATUS,
    payload: loginStatus,
  };
}

export function setModalVisbility(modalShowing: boolean) : AppStateTypes {
  return {
    type: SET_MODAL_VISIBILITY,
    payload: modalShowing,
  }
}
