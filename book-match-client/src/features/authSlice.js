import { createSlice } from '@reduxjs/toolkit';
import { loginAsync, signupAsync } from './services/auth';
const initialState = {
     user: null,
     isAuthenticated: false,
     loading: false,
     error: null,
};


const authSlice = createSlice({
     name: 'auth',
     initialState,
     reducers: {
          logout: (state) => {
               state.user = null;
               state.isAuthenticated = false;
          },
     },
     extraReducers: (builder) => {
          builder
               .addCase(loginAsync.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(loginAsync.fulfilled, (state, action) => {
                    state.loading = false;
                    state.isAuthenticated = true;
                    state.user = action.payload;
               })
               .addCase(loginAsync.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
               })
               .addCase(signupAsync.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(signupAsync.fulfilled, (state, action) => {
                    state.loading = false;
                    state.isAuthenticated = true;
                    state.user = action.payload;
               })
               .addCase(signupAsync.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
               });
     },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
