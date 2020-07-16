export interface AppState {
  signedIn: boolean,
}

export interface UserState {
  userData: UserData,
  items: VirtualItem[],
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
  displayName: string,
  pic?: string,
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

export interface Business {
  displayName: string,
}