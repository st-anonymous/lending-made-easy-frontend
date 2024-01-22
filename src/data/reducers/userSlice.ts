import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../types/types';

const initialState: UserType = {};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeUser: (state) => {
      return {};
    },
  },
});

export const { updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
