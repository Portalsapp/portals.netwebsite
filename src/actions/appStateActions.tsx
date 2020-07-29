import {
  SET_LOGIN_STATUS, SET_HOME_FEED_STATE,
} from '../constants/ActionTypes';
import { AppStateTypes } from './types';

export function setLoginStatus(loginStatus: boolean) : AppStateTypes {
  return {
    type: SET_LOGIN_STATUS,
    payload: loginStatus,
  };
}

export function setHomeFeedState(state: 'global' | 'friends' | 'you'): AppStateTypes {
  return {
    type: SET_HOME_FEED_STATE,
    payload: state,
  }
}
