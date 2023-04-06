import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  about: '',
  avatar: 'https://react-learning.ru/image-compressed/default-image.jpg',
  email: '',
  group: 'group-11',
  name: '',
  __v: 0,
  _id: '',
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.email = action.payload.email;
      state.about = action.payload.about;
      state.avatar = action.payload.avatar;
      state.name = action.payload.name;
      state.__v = action.payload.__v;
      state._id = action.payload._id;

      // console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
