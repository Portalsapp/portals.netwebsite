import {
  SET_LOGIN_STATUS,
  SET_USER_DATA,
  SET_PORTALS,
  SET_BUSINESSES,
  SET_USER_ITEMS,
  SET_USER_BANK_HISTORY,
  SET_USER_TRADE_HISTORY,
  SET_HOME_FEED_STATE,
  SET_GLOBAL_TRANSATION_FEED
} from '../constants/ActionTypes';
import { Portal, Business, VirtualItem, BankHistory } from '../reducers/types';

interface SetLoginStatus {
  type: typeof SET_LOGIN_STATUS,
  payload: boolean
}

interface SetHomeFeedState {
  type: typeof SET_HOME_FEED_STATE,
  payload: 'global' | 'friends' | 'you',
}

export type AppStateTypes = SetLoginStatus | SetHomeFeedState;

interface SetUserData {
  type: typeof SET_USER_DATA,
  payload: {
    displayName: string,
    pic: string,
    username: string,
  }
}

interface SetUserItems {
  type: typeof SET_USER_ITEMS,
  payload: {
    items: VirtualItem[],
  }
}

interface SetUserBankHistory {
  type: typeof SET_USER_BANK_HISTORY,
  payload: {
    items: BankHistory[],
  }
}

interface SetUserTradeHistory {
  type: typeof SET_USER_TRADE_HISTORY,
  payload: {
    items: BankHistory[],
  }
}

interface SetGlobalTransactionHistory {
  type: typeof SET_GLOBAL_TRANSATION_FEED,
  payload: {
    items: BankHistory[],
  }
}

export type UserStateTypes = SetUserData | SetUserItems | SetUserBankHistory | SetUserTradeHistory | SetGlobalTransactionHistory;

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