import { createSlice } from '@reduxjs/toolkit';

const offersSlice = createSlice({
  name: 'offersSlice',
  initialState: {},
  reducers: {
    updateOffers: (state, action) => {
      return { ...state, ...action.payload };
    },
    deleteOffers: (state) => {
      return {};
    },
  },
});

export const { updateOffers, deleteOffers } = offersSlice.actions;
export default offersSlice.reducer;
