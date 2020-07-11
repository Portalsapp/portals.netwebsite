export interface AppState {
  signedIn: boolean,
}

export interface UserState {
  userData: UserData,
}

export interface UserData {
  displayName: string,
  pic: string,
  username: string,
}