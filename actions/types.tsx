import { SET_LOGIN_STATUS } from '../constants/ActionTypes';

interface SetLoginStatus {
  type: typeof SET_LOGIN_STATUS,
  payload: boolean
}

export type AppStateTypes = SetLoginStatus;