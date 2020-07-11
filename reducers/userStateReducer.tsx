import {
  SET_USER_DATA
} from '../constants/ActionTypes';
import { UserState } from './types';
import { UserStateTypes } from '../actions/types';

const initialState: UserState = {
  userData: { 
    displayName: '',
    pic: '',
    username: '',
  },
};

export default (state = initialState, action: UserStateTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, userData: action.payload };
    default:
      return { ...state };
  }
};
