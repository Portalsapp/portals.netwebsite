import {
  SET_LOGIN_STATUS, SET_HOME_FEED_STATE,
} from '../constants/ActionTypes'
import { AppState } from './types'
import { AppStateTypes } from '../actions/types'

const initialState: AppState = {
  signedIn: false,
  homeFeedState: 'friends',
}

export default (state = initialState, action: AppStateTypes ) => {
  switch(action.type) {
    case SET_LOGIN_STATUS:
      return { ...state, signedIn: action.payload };
    case SET_HOME_FEED_STATE:
      return { ...state, homeFeedState: action.payload };
    default: 
      return { ...state };
  }
}