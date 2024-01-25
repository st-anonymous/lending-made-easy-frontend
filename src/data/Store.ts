import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import offersSlice from './reducers/offersSlice';
import transactionsSlice from './reducers/transactionsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    offers: offersSlice,
    transactions: transactionsSlice,
  },
});

export default store;
