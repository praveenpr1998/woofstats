import {createSelector} from '@reduxjs/toolkit';
import {UserState as UserStateType, GlobalState} from '../../types';

const UserState = (state: GlobalState) => state.user;

const getAuthStatus = createSelector(
  [UserState],
  (state: UserStateType) => state.authenticated,
);

const getIsFirstTimeLogin = createSelector(
  [UserState],
  (state: UserStateType) => state.isFirstTimeLogin,
);

const getUserInfo = createSelector(
  [UserState],
  (state: UserStateType) => state.userInfo,
);

export const UserSelectors = {
  getAuthStatus,
  getIsFirstTimeLogin,
  getUserInfo,
};
