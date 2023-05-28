import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendOrder = createAsyncThunk(
  'cart/sendOrder',
  async (order, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://xata-magnata-server.onrender.com',
        {
          body: order,
        }
      );
      console.log(response);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
