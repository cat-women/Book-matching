import axios from './index';

import { createAsyncThunk } from '@reduxjs/toolkit';


export const loginAsync = createAsyncThunk('auth/login', async (data, thunkAPI) => {
     try {
          const response = await axios.post('users/signin', data);
          sessionStorage.setItem('user', JSON.stringify(response.data));
          return response.data;
          
     } catch (error) {
          console.log("login error", error)
          thunkAPI.rejectWithValue(error)
     }
});



export const signupAsync = createAsyncThunk('auth/signup', async (data, thunkAPI) => {
     try {
          const response = await axios.post('users/signup', data);
          console.log(response)
          return response.data;
     } catch (error) {
          console.log("login error", error)
          thunkAPI.rejectWithValue(error)
     }
});