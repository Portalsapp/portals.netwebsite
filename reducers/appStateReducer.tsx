import {
  SET_LOGIN_STATUS,
  SET_MODAL_VISIBILITY,
} from '../constants/ActionTypes'
import { AppState } from './types'
import { AppStateTypes } from '../actions/types'

const initialState: AppState = {
  signedIn: false,
  modalVisible: false,
}

export default (state = initialState, action: AppStateTypes ) => {
  switch(action.type) {
    case SET_LOGIN_STATUS:
      return { ...state, signedIn: action.payload };
    case SET_MODAL_VISIBILITY:
      return { ...state, modalVisible: action.payload };
    default: 
      return { ...state };
  }
}