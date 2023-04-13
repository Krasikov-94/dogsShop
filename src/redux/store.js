import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { getInitState } from './initialState';
import { tokenReducer } from './slices/tokenSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
  },
  preloadedState: getInitState(),
});
store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())));
