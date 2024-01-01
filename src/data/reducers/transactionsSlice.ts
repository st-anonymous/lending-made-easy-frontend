import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState: {},
  reducers: {
    updateTransactions: (state, action) => {
      return { ...state, ...action.payload };
    },
    deleteTransactions: (state) => {
      return {};
    },
  },
});

export const {
  updateTransactions,
  deleteTransactions,
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
