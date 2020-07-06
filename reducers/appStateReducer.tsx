import {
  SET_LOGIN_STATUS,
} from '../constants/ActionTypes'
import { AppState } from './types'
import { AppStateTypes } from '../actions/types'

const initialState: AppState = {
  signedIn: false,
}

export default (state = initialState, action: AppStateTypes ) => {
  switch(action.type) {
    case SET_LOGIN_STATUS:
      return { ...state, signedIn: action.payload };
    default: 
      return { ...state };
  }
}