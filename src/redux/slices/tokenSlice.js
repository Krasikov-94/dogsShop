import { createSlice } from '@reduxjs/toolkit';

import { myInitialState } from '../initialState';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: myInitialState.token,
  reducers: {
    getToken(state, action) {
      state = action.payload;
      console.log(action);
    },
  },
});
// Action creators are generated for each case reducer function
export const { getToken } = tokenSlice.actions;

export const tokenReducer = tokenSlice.reducer;
