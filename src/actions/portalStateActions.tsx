import { SET_PORTALS } from '../constants/ActionTypes';
import { PortalStateTypes } from './types';
import { Portal } from '../reducers/types';

export function setPortals(portals: Portal[]): PortalStateTypes {
  return {
    type: SET_PORTALS,
    payload: {
      portals
    },
  };
}
