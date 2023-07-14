import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import toggleSlice from './slices/toggleSlice';

export const rootReducer = combineReducers({
  toggle: toggleSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
