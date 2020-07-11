import {
  SET_LOGIN_STATUS,
  SET_MODAL_VISIBILITY,
  SET_USER_DATA,
  SET_MODAL_CONTENT,
} from '../constants/ActionTypes';

interface SetLoginStatus {
  type: typeof SET_LOGIN_STATUS,
  payload: boolean
}

interface SetModalVisible {
  type:typeof SET_MODAL_VISIBILITY,
  payload: boolean
}

export type AppStateTypes = SetLoginStatus | SetModalVisible;

interface SetUserData {
  type: typeof SET_USER_DATA,
  payload: {
    displayName: string,
    pic: string,
    username: string,
  }
}

interface SetModalContent {
  type: typeof SET_MODAL_CONTENT,
  payload: {
    title: string,
    bodyText: string,
  }
}

export type UserStateTypes = SetUserData;