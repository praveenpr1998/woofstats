import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../types';

const initialState: UserState = {
  authenticated: false,
  userInfo: {},
  isFirstTimeLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAuth(state) {
      state.authenticated = false;
    },
    updateUser(state, action) {
      const {userInfo, isFirstTimeLogin} = action.payload;
      state.userInfo = userInfo;
      state.authenticated = true;
      state.isFirstTimeLogin = isFirstTimeLogin;
    },
  },
});

export const {setAuth, updateUser} = userSlice.actions;

export const UserReducer = userSlice.reducer;
