import { SET_BUSINESSES } from '../constants/ActionTypes';
import { Business } from './types';
import { PublisherStateTypes } from '../actions/types';

const initialState = {
  businesses: [],
};

export default (state = initialState, action: PublisherStateTypes) => {
  switch (action.type) {
    case SET_BUSINESSES:
      return { ...state, businesses: action.payload.businesses };
    default:
      return { ...state };
  }
};
