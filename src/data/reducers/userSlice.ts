import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {},
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    deleteUser: (state) => {
      return {};
    },
  },
});

export const { updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
