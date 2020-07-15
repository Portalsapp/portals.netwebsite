import {
  SET_LOGIN_STATUS,
  SET_USER_DATA,
  SET_PORTALS,
  SET_BUSINESSES
} from '../constants/ActionTypes';
import { Portal, Business } from '../reducers/types';

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

interface SetPortals {
  type: typeof SET_PORTALS,
  payload: {
    portals: Portal[],
  }
}

export type PortalStateTypes = SetPortals;

interface SetBusinesses {
  type: typeof SET_BUSINESSES,
  payload: {
    businesses: Business[],
  }
}

export type PublisherStateTypes = SetBusinesses;