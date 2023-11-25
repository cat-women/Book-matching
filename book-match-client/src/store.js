import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import bookSlice from './features/bookSlice';
import matchBookSlice from './features/matchBookSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookSlice,
    match: matchBookSlice
  },
});

export default store;
