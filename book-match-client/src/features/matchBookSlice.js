import { createSlice } from '@reduxjs/toolkit';

import { showAllRequestsAsync, updateRequestAsync } from './services/matchBook';

const requestSlice = createSlice({
     name: 'matchBook',
     initialState: {
          bookRequests: [],
          loading: false,
          error: null,
     },
     reducers: {
     },
     extraReducers: (builder) => {
          builder
               .addCase(showAllRequestsAsync.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(showAllRequestsAsync.fulfilled, (state, action) => {
                    state.loading = false;
                    state.bookRequests = action.payload;
               })
               .addCase(showAllRequestsAsync.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
               })
               .addCase(updateRequestAsync.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(updateRequestAsync.fulfilled, (state, action) => {
                    state.loading = false;
                    // Update the state as needed when a request is updated
               })
               .addCase(updateRequestAsync.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
               });
     },
});

export default requestSlice.reducer;
