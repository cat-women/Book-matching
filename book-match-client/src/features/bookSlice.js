
import { createSlice } from '@reduxjs/toolkit';
import { addBookAsync, getAllBooksAsync, getBookByIdAsync } from './services/book';

const bookSlice = createSlice({
     name: 'books',
     initialState: {
          books: [],
          selectedBook: null,
          loading: false,
          error: null,
     },
     reducers: {
          // Any synchronous reducers can go here if needed
     },
     extraReducers: (builder) => {
          builder
               .addCase(addBookAsync.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(addBookAsync.fulfilled, (state, action) => {
                    state.loading = false;
                    state.books.push(action.payload);
               })
               .addCase(addBookAsync.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
               })
               .addCase(getAllBooksAsync.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(getAllBooksAsync.fulfilled, (state, action) => {
                    state.loading = false;
                    state.books = action.payload;
               })
               .addCase(getAllBooksAsync.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
               })
               .addCase(getBookByIdAsync.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(getBookByIdAsync.fulfilled, (state, action) => {
                    state.loading = false;
                    state.selectedBook = action.payload;
               })
               .addCase(getBookByIdAsync.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
               });
     },
});

export default bookSlice.reducer;