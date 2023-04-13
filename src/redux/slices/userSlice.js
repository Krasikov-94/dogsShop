import { createSlice } from '@reduxjs/toolkit';
import { myInitialState } from '../initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState: myInitialState.user,
  reducers: {
    setUsers(state, action) {
      // state = state.unshift(action.payload);
      // console.log(state);
      state = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers } = userSlice.actions;

export const userReducer = userSlice.reducer;
