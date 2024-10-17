export interface UserState {
  authenticated: boolean;
  userInfo: Record<string, any>;
  isFirstTimeLogin: boolean;
}

export interface GlobalState {
  user: UserState;
}
