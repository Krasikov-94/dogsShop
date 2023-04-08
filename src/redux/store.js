import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import setId from './slices/currentProd';

export const store = configureStore({
  reducer: {
    userReducer,
    setId,
  },
});
