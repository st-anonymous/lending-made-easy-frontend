import { createSlice } from '@reduxjs/toolkit';
import { OfferRequestsType } from '../../types/types';

const initialState: OfferRequestsType = [];

const offersSlice = createSlice({
  name: 'offersSlice',
  initialState,
  reducers: {
    updateOffers: (state, action) => {
      return state.map((item) => {
        if (item.offer_request_id === action.payload.offer_request_id) {
          return action.payload.offer_request;
        } else {
          return item;
        }
      });
    },
  },
});

export const { updateOffers } = offersSlice.actions;
export default offersSlice.reducer;
