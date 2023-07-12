import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';

export const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
