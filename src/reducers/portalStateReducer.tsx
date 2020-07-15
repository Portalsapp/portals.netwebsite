import { SET_PORTALS } from '../constants/ActionTypes';
import { PortalState } from './types';
import { PortalStateTypes } from '../actions/types';

const initialState: PortalState = {
  portals: [],
};

export default (state = initialState, action: PortalStateTypes) => {
  switch (action.type) {
    case SET_PORTALS:
      return { ...state, portals: action.payload.portals };
    default:
      return { ...state };
  }
};
