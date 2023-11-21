import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import loginToggleSlice from './slices/loginToggleSlice';
import viewportSlice from './slices/viewportSlice';

export const rootReducer = combineReducers({
  login: loginToggleSlice,
  viewport: viewportSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
