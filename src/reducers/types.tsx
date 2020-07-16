export interface AppState {
  signedIn: boolean,
}

export interface UserState {
  userData: UserData,
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

export interface Business {
  displayName: string,
}