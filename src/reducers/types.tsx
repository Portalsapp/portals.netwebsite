export interface AppState {
  signedIn: boolean,
  homeFeedState: 'global' | 'friends' | 'you',
}

export interface UserState {
  userData: UserData,
  items: VirtualItem[],
  bankHistory: BankHistory[],
  tradeHistory: BankHistory[],
  globalTransactionFeed: BankHistory[],
}

export interface PortalState {
  portals: Portal[],
}

export interface UserData {
  displayName: string,
  pic: string,
  username: string,
}

export interface Portal {
  displayName: string;
  pic?: string;
  ds_pk: string;
  ds_sk: string;
  phone?: string;
  email?: string;
  uid?: string;
  catalog?: string;
  description?: string;
  splashPic?: string;
  colorTheme?: string;
}

export interface BankHistory {
  to: {
    ds_pk: string;
    displayName: string;
    pic?: string;
  },
  from: {
    ds_pk: string;
    displayName: string;
    pic?: string;
  },
  createdAt: number,
  item: VirtualItem,
  transferType: string,
  liked?: boolean,
}

export interface VirtualItem {
  displayName: string,
  pic?: string,
  ds_pk?: string,
  ds_sk?: string,
  phone?: string,
  email?: string,
  uid?: string,
  catalog?: string,
  description?: string,
  splashPic?: string,
  colorTheme?: string,
}

export interface TradeSession {
  id: String;
  createdAt: number;
  user1: String;
  user2: String;
  items1: String[];
  items2: String[];
  accepted1: Boolean;
  accepted2: Boolean;
  reviewed1: Boolean;
  reviewed2: Boolean;
  completed: Boolean;
  declined: Boolean;
  error: String;
}

export interface Business {
  displayName: string,
}
