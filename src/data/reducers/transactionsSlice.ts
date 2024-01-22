import { createSlice } from '@reduxjs/toolkit';
import { TransactionsType } from '../../types/types';

const initialState: TransactionsType = [];

const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState,
  reducers: {
    updateTransactions: (state, action) => {
      return state.map((item) => {
        if (item.transaction_id === action.payload.transaction_id) {
          return action.payload.transaction;
        } else {
          return item;
        }
      });
    },
  },
});

export const { updateTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
