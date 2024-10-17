import {configureStore} from '@reduxjs/toolkit';
import {UserReducer} from './index';
import {combineReducers} from 'redux';

const reducers = combineReducers({user: UserReducer});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefMiddleWare => getDefMiddleWare().concat(),
});
