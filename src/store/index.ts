import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
