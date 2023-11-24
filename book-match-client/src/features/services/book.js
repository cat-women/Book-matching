import axios from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addBookAsync = createAsyncThunk('books/addBook', async (bookData, thunkAPI) => {
  try {
    const response = await axios.post('books', bookData);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    thunkAPI.rejectWithValue(error);
  }
});

export const getAllBooksAsync = createAsyncThunk('books/getAllBooks', async (_, thunkAPI) => {
  try {
    const response = await axios.get('books');
    return response.data;
  } catch (error) {
    console.error('Error getting all books:', error);
    thunkAPI.rejectWithValue(error);
  }
});

export const getBookByIdAsync = createAsyncThunk('books/getBookById', async (bookId, thunkAPI) => {
  try {
    const response = await axios.get(`books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting book by ID (${bookId}):`, error);
    thunkAPI.rejectWithValue(error);
  }
});
