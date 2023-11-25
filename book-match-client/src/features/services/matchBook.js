import axios from './index';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const requestBookAsync = createAsyncThunk('requests/requestBook', async (bookId, thunkAPI) => {
     try {
          const response = await axios.post(`matchBook/${bookId}`);
          return response.data;
     } catch (error) {
          console.error(`Error requesting book (${bookId}):`, error);
          thunkAPI.rejectWithValue(error);
     }
});

export const acceptRequestAsync = createAsyncThunk('requests/acceptRequest', async (requestId, thunkAPI) => {
     try {
          const response = await axios.put(`requests/acceptRequest/${requestId}`);
          return response.data;
     } catch (error) {
          console.error(`Error accepting request (${requestId}):`, error);
          thunkAPI.rejectWithValue(error);
     }
});

// get all boooks that has been requested 
export const showAllRequestsAsync = createAsyncThunk('requests/showAllRequests', async (_, thunkAPI) => {
     try {
          const response = await axios.get('matchBook/getRequest');
          console.log("all book requested", response.data)
          return response.data;
     } catch (error) {
          console.error('Error getting all requests:', error);
          thunkAPI.rejectWithValue(error);
     }
});

export const updateRequestAsync = createAsyncThunk('requests/updateRequest', async (requestData, thunkAPI) => {
     try {
          const response = await axios.put('requests/update', requestData);
          return response.data;
     } catch (error) {
          console.error('Error updating request:', error);
          thunkAPI.rejectWithValue(error);
     }
});


