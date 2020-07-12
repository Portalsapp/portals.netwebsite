import {
  SET_LOGIN_STATUS,
  SET_USER_DATA,
} from '../constants/ActionTypes';

interface SetLoginStatus {
  type: typeof SET_LOGIN_STATUS,
  payload: boolean
}

export type AppStateTypes = SetLoginStatus;

interface SetUserData {
  type: typeof SET_USER_DATA,
  payload: {
    displayName: string,
    pic: string,
    username: string,
  }
}

export type UserStateTypes = SetUserData;